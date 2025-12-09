/* MiniPlayer.js
   Full MiniPlayer with drag button, zoom, modal buttons, persistent position,
   YouTube playlists with Next-Up, Twitch VOD (.ttv), Twitch Live (.ttvl), and local MP4 files.
   Requires: Bootstrap (modal), Plyr, Bootstrap Icons
*/

class MiniPlayer {
    constructor(options = {}) {
        this.storageKeyPos = options.storageKeyPos || 'miniPlayerPosition';
        this.storageKeyZoom = options.storageKeyZoom || 'miniPlayerZoom';
        this.idleMs = options.idleMs || 2000;
        this.margin = options.margin || 20;

        this.player = null;
        this.currentBlobUrl = null;
        this.container = null;
        this.playerWrapper = null;
        this.video = null;
        this.cursorTimeout = null;

        this.zoomLevel = parseInt(localStorage.getItem(this.storageKeyZoom), 10);
        if (Number.isNaN(this.zoomLevel)) this.zoomLevel = 0;
        this.savedPosition = JSON.parse(localStorage.getItem(this.storageKeyPos) || 'null');

        this.zoomHeights = [276, 360, 480, 720, 1080];

        window.addEventListener('resize', () => {
            if (this.container) {
                this.calculateZoomLevels();
                this.applyZoom(this.zoomLevel);
                this.keepPlayerInsideViewport();
            }
        });

        this.setupModals();
    }

    // ---------------------------
    // MODAL SETUP
    // ---------------------------
    setupModals() {
        const modalEl = document.getElementById('entertainmentModal');
        if (!modalEl) return console.warn('MiniPlayer: #entertainmentModal not found.');
        const modal = new bootstrap.Modal(modalEl);
        const footer = modalEl.querySelector('.modal-footer');

        // Cancel button
        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'btn btn-light';
        cancelBtn.textContent = 'Cancel';
        cancelBtn.addEventListener('click', () => modal.hide());
        footer.appendChild(cancelBtn);

        // Utility to set primary button
        const setPrimaryButton = (html, cb) => {
            const old = footer.querySelector('.btn-primary');
            if (old) old.remove();
            const btn = document.createElement('button');
            btn.className = 'btn px-4 btn-primary';
            btn.innerHTML = html;
            btn.addEventListener('click', cb);
            footer.appendChild(btn);
        };

        // Tabs
        const tabs = modalEl.querySelectorAll('#entertainmentTabs .nav-link');

        const updatePrimaryButton = (tabId) => {
            switch(tabId) {
                case 'yt-tab':
                    setPrimaryButton('<i class="bi bi-play-circle"></i> Add Video', () => {
                        const fileInput = document.getElementById('youtubeFileInput');
                        const urlInput = document.getElementById('youtubeUrlInput');
                        let input = null;

                        if (fileInput && fileInput.files.length) input = fileInput.files[0];
                        else if (urlInput && urlInput.value.trim()) input = urlInput.value.trim();

                        if (!input) return alert('Please select a .yt file or enter a YouTube URL');
                        this.loadYoutube(input);
                        modal.hide();
                    });
                    break;

                case 'twitch-tab':
                    setPrimaryButton('<i class="bi bi-broadcast"></i> Add Stream', () => {
                        const fileInput = document.getElementById('twitchFileInput');
                        const urlInput = document.getElementById('twitchUrlInput');
                        let input = null;

                        if (fileInput && fileInput.files.length) input = fileInput.files[0];
                        else if (urlInput && urlInput.value.trim()) input = urlInput.value.trim();

                        if (!input) return alert('Please select a .ttv/.ttvl file or enter a Twitch URL');

                        if (input instanceof File) {
                            if (input.name.endsWith('.ttv')) this.loadTwitch(input);
                            else if (input.name.endsWith('.ttvl')) this.loadTwitchLive(input);
                            else return alert('Invalid Twitch file type');
                        } else {
                            // URL string
                            if (input.includes('.ttv')) this.loadTwitch(input);
                            else if (input.includes('.ttvl')) this.loadTwitchLive(input);
                            else this.loadTwitchLive(input);
                        }

                        modal.hide();
                    });
                    break;

                case 'local-tab':
                    setPrimaryButton('<i class="bi bi-check-circle"></i> Add Video', () => {
                        const fileInput = document.getElementById('localFileInput');
                        if (!fileInput || !fileInput.files.length) return alert('Please select a video file');
                        this.loadFile(fileInput.files[0]);
                        modal.hide();
                    });
                    break;
            }
        };

        // Initialize button for the active tab
        const activeTab = modalEl.querySelector('#entertainmentTabs .nav-link.active');
        if (activeTab) updatePrimaryButton(activeTab.id);

        // Update primary button on tab change
        tabs.forEach(tab => {
            tab.addEventListener('shown.bs.tab', (e) => updatePrimaryButton(e.target.id));
        });
    }

    // ---------------------------
    // ENSURE CONTAINER + UI
    // ---------------------------
    ensureContainer() {
        if (this.container) return;

        let container = document.getElementById('miniPlayerContainer');
        if (!container) {
            container = document.createElement('div');
            container.id = 'miniPlayerContainer';
            container.className = 'mini-player-container';
            container.style.position = 'fixed';
            container.style.zIndex = '1050';
            container.innerHTML = `
                <div class="top-buttons" style="position:absolute;top: 0;left: 0;right: 0;display:flex;gap:6px;z-index:2;">
                    <button class="drag-button" title="Drag to move" style="opacity:0; transition:opacity .2s;"><i class="bi bi-arrows-move"></i></button>
                    <button class="zoom-button" title="Zoom" style="opacity:0; transition:opacity .2s;"><i class="bi bi-zoom-in"></i></button>
                    <button class="close-button" title="Close player" style="opacity:0; transition:opacity .2s;"><i class="bi bi-x-lg"></i></button>
                </div>
                <div class="player-wrapper" style="width:100%; height:100%; overflow:hidden; background:#000; border-radius:6px;"></div>
            `;
            document.body.appendChild(container);
            this.container = container;
            this.playerWrapper = container.querySelector('.player-wrapper');

            this.calculateZoomLevels();
            this.applyZoom(this.zoomLevel);

            if (this.savedPosition && typeof this.savedPosition.left === 'number' && typeof this.savedPosition.top === 'number') {
                this.container.style.left = `${this.savedPosition.left}px`;
                this.container.style.top = `${this.savedPosition.top}px`;
            } else {
                const rect = this.container.getBoundingClientRect();
                this.container.style.left = `${window.innerWidth - rect.width - this.margin}px`;
                this.container.style.top = `${window.innerHeight - rect.height - this.margin}px`;
            }

            this.makeDraggable(this.container);
            this.setupCloseButton(this.container);
            this.setupZoomButton(this.container);
            this.setupButtonFade(this.container);
            this.setupMouseAutoHide();
        } else {
            this.container = container;
            this.playerWrapper = container.querySelector('.player-wrapper');
        }
    }

    // ---------------------------
    // ZOOM LEVELS
    // ---------------------------
    calculateZoomLevels() {
        const maxWidth = Math.max(200, window.innerWidth - this.margin * 2);
        const maxHeight = Math.max(120, window.innerHeight - this.margin * 2);

        // Filter out heights that don't fit (example: hide 1080p on 1080p screens)
        const usableHeights = this.zoomHeights.filter(h => h <= maxHeight);

        // Build zoom levels from usable heights only
        this.zoomLevels = usableHeights.map(h => {
            const w = Math.round(h * 16 / 9);
            const scale = Math.min(1, maxWidth / w, maxHeight / h);
            return { width: Math.round(w * scale), height: Math.round(h * scale), base: h };
        });

        // Fix invalid zoomLevel
        if (this.zoomLevel >= this.zoomLevels.length) this.zoomLevel = this.zoomLevels.length - 1;
        if (this.zoomLevel < 0) this.zoomLevel = 0;
    }

    applyZoom(level) {
        if (!this.container || !this.zoomLevels) return;

        level = Math.max(0, Math.min(level, this.zoomLevels.length - 1));
        const z = this.zoomLevels[level];
        if (!z) return;

        this.container.style.width = `${z.width}px`;
        this.container.style.height = `${z.height}px`;

        const zoomBtn = this.container.querySelector('.zoom-button');
        if (zoomBtn) {
            const isMax = (level === this.zoomLevels.length - 1);
            zoomBtn.innerHTML = isMax
                ? `<i class="bi bi-zoom-out"></i>`
                : `<i class="bi bi-zoom-in"></i>`;
        }

        this.zoomLevel = level;

        try { localStorage.setItem(this.storageKeyZoom, String(level)); } catch (e) {}
    }

    // ---------------------------
    // LOAD LOCAL FILE
    // ---------------------------
    loadFile(file) {
        this.ensureContainer();
        this.cleanupExistingPlayer();
        if (this.currentBlobUrl) try { URL.revokeObjectURL(this.currentBlobUrl); } catch (e) {}
        this.currentBlobUrl = URL.createObjectURL(file);

        const video = document.createElement('video');
        video.id = 'miniPlayerVideo';
        video.src = this.currentBlobUrl;
        video.controls = true;
        video.playsInline = true;
        video.style.width = '100%';
        video.style.height = '100%';
        video.style.objectFit = 'contain';

        this.playerWrapper.innerHTML = '';
        this.playerWrapper.appendChild(video);
        this.video = video;

        this.player = new Plyr(video, {
            autoplay: true,
            controls: ['play-large','play','progress','current-time','mute','volume'],
            invertTime: false,
            keyboard: { global: true }
        });

        this.showPlayer();
    }

    // ---------------------------
    // LOAD YOUTUBE PLAYLIST
    // ---------------------------
    loadYoutube(fileOrUrl) {
        this.ensureContainer();
        this.cleanupExistingPlayer();

        const reader = new FileReader();

        reader.onload = (e) => {
            let data = e.target.result.trim().split('\n').filter(Boolean);

            // Prompt if empty (fallback)
            if (!data.length) {
                const link = prompt("Enter YouTube URL or ID:");
                if (!link) return;
                data = [link];
            }

            let videoIndex = 0;

            const getYoutubeId = (urlOrId) => {
                const match = urlOrId.match(/[?&]v=([a-zA-Z0-9_-]{11})/) || urlOrId.match(/^([a-zA-Z0-9_-]{11})$/);
                return match ? match[1] : urlOrId;
            };

            const playVideo = (idx) => {
                if (idx >= data.length) return;
                videoIndex = idx;
                const videoId = getYoutubeId(data[idx].trim());

                // Create Plyr container
                const div = document.createElement('div');
                div.className = 'plyr__video-embed';
                div.setAttribute('data-plyr-provider', 'youtube');
                div.setAttribute('data-plyr-embed-id', videoId);

                this.playerWrapper.innerHTML = '';
                this.playerWrapper.appendChild(div);

                // Initialize Plyr
                this.player = new Plyr(div, {
                    autoplay: true,
                    controls: ['play-large','play','progress','current-time','mute','volume'],
                    invertTime: false,
                    keyboard: { global: true }
                });

                this.showPlayer();

                if (data.length > 1 && idx < data.length - 1) {
                    this.player.on('ready', () => {
                        const controls = this.playerWrapper.querySelector('.plyr__controls');
                        if (!controls) return;

                        // Next button
                        const playBtn = controls.querySelector('[data-plyr="play"]');
                        if (playBtn && !controls.querySelector('#next')) {
                            const nextBtn = document.createElement('button');
                            nextBtn.className = 'plyr__controls__item plyr__control';
                            nextBtn.id = 'next';
                            nextBtn.type = 'button';
                            nextBtn.setAttribute('aria-label', 'Next');
                            nextBtn.innerHTML = `<i class="bi bi-skip-end-fill"></i>`;
                            playBtn.insertAdjacentElement('afterend', nextBtn);
                        }

                        const nextBtn = controls.querySelector('#next');
                        if (nextBtn) {
                            nextBtn.addEventListener('click', () => playVideo(idx + 1));
                            nextBtn.addEventListener('mouseenter', () => {
                                const container = document.getElementById('miniPlayerContainer'); 
                                if (!container) return;
                                const width = container.clientWidth;
                                if (width >= 850) this.nextUpDiv.classList.add('show');
                            });
                            nextBtn.addEventListener('mouseleave', () => {
                                this.nextUpDiv.classList.remove('show');
                            });
                        }

                        // Next-up overlay
                        let nextDiv = this.player.elements.container.querySelector('.next-up');
                        if (!nextDiv) {
                            nextDiv = document.createElement('div');
                            nextDiv.className = 'next-up';
                            this.player.elements.container.appendChild(nextDiv);
                        }
                        this.nextUpDiv = nextDiv;

                        const nextVideoId = getYoutubeId(data[idx + 1]);
                        fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${nextVideoId}&format=json`)
                            .then(resp => resp.json())
                            .then(info => {
                                nextDiv.innerHTML = `
                                    <img src="${info.thumbnail_url}">
                                    <div class="next-info">
                                        <span>Next</span>
                                        <span id="next-title">${info.title}</span>
                                        <span id="user"><a href="${info.author_url}" target="_blank">${info.author_name}</a></span>
                                    </div>
                                `;
                            });
                    });
                }
            };

            // Optionally start at a specific video
            if (data.length > 1) {
                const input = prompt("Enter Video Line Number to start", "1");
                if (input) {
                    const n = parseInt(input, 10);
                    if (!isNaN(n) && n > 0 && n <= data.length) videoIndex = n - 1;
                }
            }

            playVideo(videoIndex);
        };

        // Wrap string URL in a Blob for FileReader
        if (typeof fileOrUrl === 'string') {
            const blob = new Blob([fileOrUrl], { type: 'text/plain' });
            reader.readAsText(blob);
        } else {
            reader.readAsText(fileOrUrl);
        }
    }

    // ---------------------------
    // LOAD TWITCH VOD (.ttv)
    // ---------------------------
    loadTwitch(fileOrUrl) {
        this.ensureContainer();
        this.cleanupExistingPlayer();

        const handleData = (data) => {
            data = data.trim().split('\n').map(l => l.trim()).filter(Boolean);
            if (!data.length) {
                const link = prompt("Enter a Twitch VOD URL:");
                if (!link) return;
                data = [link];
            }

            let videoIndex = 0;
            if (data.length > 1) {
                const input = prompt(`Enter VOD Line Number (1-${data.length})`, "1");
                if (input) {
                    const n = parseInt(input, 10);
                    if (!isNaN(n) && n > 0 && n <= data.length) videoIndex = n - 1;
                }
            }

            const vodUrl = data[videoIndex];
            const videoId = vodUrl.split('/').pop().replace(/\D/g,'');

            const iframe = document.createElement('iframe');
            iframe.setAttribute('allowfullscreen','');
            iframe.setAttribute('allow','autoplay; fullscreen');
            iframe.src = `https://player.twitch.tv/?video=v${videoId}&parent=${encodeURIComponent(location.hostname)}&muted=false`;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';

            this.playerWrapper.innerHTML = '';
            this.playerWrapper.appendChild(iframe);

            this.player = new Plyr(iframe, {
                autoplay: true,
                controls: ['play-large','play','progress','current-time','mute','volume'],
                invertTime: false,
                keyboard: { global: true }
            });

            this.showPlayer();
        };

        if (fileOrUrl instanceof File) {
            const reader = new FileReader();
            reader.onload = (e) => handleData(e.target.result);
            reader.readAsText(fileOrUrl);
        } else if (typeof fileOrUrl === 'string') {
            handleData(fileOrUrl);
        } else {
            alert('Invalid Twitch VOD input');
        }
    }

    // ---------------------------
    // LOAD TWITCH LIVE (.ttvl)
    // ---------------------------
    loadTwitchLive(fileOrUrl) {
        this.ensureContainer();
        this.cleanupExistingPlayer();

        const handleData = (data) => {
            data = data.trim().split('\n').map(l => l.trim()).filter(Boolean);
            if (!data.length) {
                const channel = prompt("Enter a Twitch Channel Name:");
                if (!channel) return;
                data = [channel];
            }

            let channelIndex = 0;
            if (data.length > 1) {
                const input = prompt(`Enter Channel Line Number (1-${data.length})`, "1");
                if (input) {
                    const n = parseInt(input, 10);
                    if (!isNaN(n) && n > 0 && n <= data.length) channelIndex = n - 1;
                }
            }

            const channelName = data[channelIndex].split('/').pop();

            const iframe = document.createElement('iframe');
            iframe.setAttribute('allowfullscreen','');
            iframe.setAttribute('allow','autoplay; fullscreen');
            iframe.src = `https://player.twitch.tv/?channel=${encodeURIComponent(channelName)}&parent=${encodeURIComponent(location.hostname)}&muted=false`;
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.border = '0';

            this.playerWrapper.innerHTML = '';
            this.playerWrapper.appendChild(iframe);

            this.player = new Plyr(iframe, {
                autoplay: true,
                controls: ['play-large','play','progress','current-time','mute','volume'],
                invertTime: false,
                keyboard: { global: true }
            });

            this.showPlayer();
        };

        if (fileOrUrl instanceof File) {
            const reader = new FileReader();
            reader.onload = (e) => handleData(e.target.result);
            reader.readAsText(fileOrUrl);
        } else if (typeof fileOrUrl === 'string') {
            handleData(fileOrUrl);
        } else {
            alert('Invalid Twitch Live input');
        }
    }

    // ---------------------------
    // SHOW PLAYER
    // ---------------------------
    showPlayer() {
        if (!this.container) return;
        this.container.classList.add('show');
        this.keepPlayerInsideViewport();
        this.setupMouseAutoHide();
        this.setupHotkeys();
    }

    // ---------------------------
    // CLEANUP
    // ---------------------------
    cleanupExistingPlayer() {
        if (this.player && typeof this.player.destroy === 'function') {
            try { this.player.destroy(); } catch (e) {}
        }
        this.player = null;
        this.video = null;
        if (this.playerWrapper) this.playerWrapper.innerHTML = '';
    }

    // ---------------------------
    // DRAGGING
    // ---------------------------
    makeDraggable(element) {
        const dragBtn = element.querySelector('.drag-button');
        if (!dragBtn) return;

        let isDragging = false;
        let offsetX = 0, offsetY = 0;
        let maskEl = null;

        const showMask = () => {
            if (maskEl) return;
            maskEl = document.createElement('div');
            maskEl.className = 'iframe-mask';
            maskEl.style.position = 'absolute';
            maskEl.style.left = '0';
            maskEl.style.top = '0';
            maskEl.style.right = '0';
            maskEl.style.bottom = '0';
            maskEl.style.zIndex = '1';
            maskEl.style.cursor = 'grabbing';
            element.appendChild(maskEl);
        };

        const hideMask = () => { if (maskEl) { maskEl.remove(); maskEl = null; } };

        dragBtn.addEventListener('dblclick', (e) => {
            e.preventDefault();
            const rect = element.getBoundingClientRect();
            element.style.left = `${window.innerWidth - rect.width - 20}px`;
            element.style.top = `${window.innerHeight - rect.height - 20}px`;
            element.style.right = 'auto';
            element.style.bottom = 'auto';
            this.savedPosition = { left: parseInt(element.style.left), top: parseInt(element.style.top) };
            try { localStorage.setItem(this.storageKeyPos, JSON.stringify(this.savedPosition)); } catch(e) {}
        });

        dragBtn.addEventListener('mousedown', (e) => {
            isDragging = true;
            const rect = element.getBoundingClientRect();
            offsetX = e.clientX - rect.left;
            offsetY = e.clientY - rect.top;
            element.classList.add('dragging');
            showMask();
            e.preventDefault();
        });

        const onMouseMove = (e) => {
            if (!isDragging) return;
            let x = e.clientX - offsetX;
            let y = e.clientY - offsetY;
            const maxX = window.innerWidth - element.offsetWidth;
            const maxY = window.innerHeight - element.offsetHeight;
            x = Math.max(0, Math.min(x, maxX));
            y = Math.max(0, Math.min(y, maxY));
            element.style.left = `${x}px`;
            element.style.top = `${y}px`;
        };

        const onMouseUp = () => {
            if (!isDragging) return;
            isDragging = false;
            element.classList.remove('dragging');
            hideMask();
            this.savedPosition = { left: parseInt(element.style.left), top: parseInt(element.style.top) };
            try { localStorage.setItem(this.storageKeyPos, JSON.stringify(this.savedPosition)); } catch(e) {}
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    }

    // ---------------------------
    // CLOSE BUTTON
    // ---------------------------
    setupCloseButton(container) {
        const closeBtn = container.querySelector('.close-button');
        closeBtn.addEventListener('click', () => {
            if (this.player && this.player.destroy) this.player.destroy();
            if (this.currentBlobUrl) URL.revokeObjectURL(this.currentBlobUrl);
            this.player = null;
            this.currentBlobUrl = null;
            container.remove();
            this.container = null;
            this.video = null;
        });
    }

    // ---------------------------
    // ZOOM BUTTON
    // ---------------------------
    setupZoomButton(element) {
        const btn = element.querySelector('.zoom-button');
        if (!btn) return;

        btn.addEventListener('click', () => {
            this.zoomLevel++;
            if (this.zoomLevel >= this.zoomLevels.length) this.zoomLevel = 0;

            this.applyZoom(this.zoomLevel);
            this.keepPlayerInsideViewport();
        });
    }

    // ---------------------------
    // BUTTON FADE ON IDLE
    // ---------------------------
    setupButtonFade(element) {
        const fadeBtns = element.querySelectorAll('.drag-button,.zoom-button,.close-button');
        const showBtns = () => { fadeBtns.forEach(b => b.style.opacity='1'); };
        const hideBtns = () => { fadeBtns.forEach(b => b.style.opacity='0'); };
        const resetTimer = () => { showBtns(); clearTimeout(this.cursorTimeout); this.cursorTimeout = setTimeout(hideBtns, this.idleMs); };

        element.addEventListener('mousemove', resetTimer);
        resetTimer();
    }

    setupMouseAutoHide() {
        if (!this.container || !this.player) return;

        let hideTimeout;

        const hideCursor = () => {
            if (this.player.playing) {
                this.container.style.cursor = 'none';
            }
        };

        const showCursor = () => {
            this.container.style.cursor = '';
        };

        const startTimer = () => {
            showCursor();
            clearTimeout(hideTimeout);
            if (this.player.playing) {
                hideTimeout = setTimeout(hideCursor, 1200);
            }
        };

        // Show cursor on pointer activity
        this.container.addEventListener('mousemove', startTimer);
        this.container.addEventListener('mouseenter', startTimer);

        // When leaving, restore cursor
        this.container.addEventListener('mouseleave', () => {
            clearTimeout(hideTimeout);
            showCursor();
        });

        // When paused → cursor always visible
        this.player.on('pause', () => {
            clearTimeout(hideTimeout);
            showCursor();
        });

        // When playing → restart auto-hide
        this.player.on('play', () => startTimer());
    }

    // ---------------------------
    // ENSURE INSIDE VIEWPORT
    // ---------------------------
    keepPlayerInsideViewport() {
        if (!this.container) return;
        const rect = this.container.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width;
        const maxY = window.innerHeight - rect.height;
        let x = parseInt(this.container.style.left) || 0;
        let y = parseInt(this.container.style.top) || 0;
        x = Math.max(0, Math.min(x, maxX));
        y = Math.max(0, Math.min(y, maxY));
        this.container.style.left = `${x}px`;
        this.container.style.top = `${y}px`;
    }

    setupHotkeys() {
        document.addEventListener('keydown', (e) => {
            // No player? nothing to do
            if (!this.container) return;

            // Ignore keys when focusing form fields
            if (['INPUT', 'TEXTAREA'].includes(e.target.tagName)) return;

            // Q = close
            if (e.key.toLowerCase() === 'q') {
                e.preventDefault();
                if (this.closeButton) {
                    this.closeButton.click();
                } else {
                    // fallback destroy
                    if (this.player?.destroy) this.player.destroy();
                    if (this.currentBlobUrl) URL.revokeObjectURL(this.currentBlobUrl);
                    this.container.remove();
                    this.container = null;
                }
            }

            // Z = zoom cycle
            if (e.key.toLowerCase() === 'z') {
                e.preventDefault();
                this.zoomLevel = (this.zoomLevel + 1) % this.zoomHeights.length;
                this.applyZoom(this.zoomLevel);
                this.keepPlayerInsideViewport();
                localStorage.setItem(this.storageKeyZoom, this.zoomLevel);
            }
        });
    }
}
