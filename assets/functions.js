// -----------------------------
// Valid Slangp Presets
// -----------------------------
const validSlangpPresets = [
    // MBZ__0__ SMOOTH-ADV variants
    "MBZ__0__SMOOTH-ADV__GDV","MBZ__0__SMOOTH-ADV__GDV-NTSC","MBZ__0__SMOOTH-ADV__LCD-GRID",
    "MBZ__0__SMOOTH-ADV__MEGATRON","MBZ__0__SMOOTH-ADV__MEGATRON-NTSC",
    // MBZ__0__ SMOOTH-ADV-GLASS variants
    "MBZ__0__SMOOTH-ADV-GLASS__EASYMODE","MBZ__0__SMOOTH-ADV-GLASS__GDV","MBZ__0__SMOOTH-ADV-GLASS__GDV-MINI",
    "MBZ__0__SMOOTH-ADV-GLASS__GDV-NTSC","MBZ__0__SMOOTH-ADV-GLASS__LCD-GRID",
    "MBZ__0__SMOOTH-ADV-GLASS__MEGATRON","MBZ__0__SMOOTH-ADV-GLASS__MEGATRON-NTSC",
    // MBZ__0__ SMOOTH-ADV-NO-REFLECT variants
    "MBZ__0__SMOOTH-ADV-NO-REFLECT__GDV","MBZ__0__SMOOTH-ADV-NO-REFLECT__GDV-NTSC",
    "MBZ__0__SMOOTH-ADV-NO-REFLECT__MEGATRON","MBZ__0__SMOOTH-ADV-NO-REFLECT__MEGATRON-NTSC",
    // MBZ__0__ SMOOTH-ADV-SCREEN-ONLY variants
    "MBZ__0__SMOOTH-ADV-SCREEN-ONLY__GDV","MBZ__0__SMOOTH-ADV-SCREEN-ONLY__GDV-NTSC",
    "MBZ__0__SMOOTH-ADV-SCREEN-ONLY__MEGATRON","MBZ__0__SMOOTH-ADV-SCREEN-ONLY__MEGATRON-NTSC",
    // MBZ__1__ ADV variants
    "MBZ__1__ADV__EASYMODE","MBZ__1__ADV__GDV","MBZ__1__ADV__GDV-MINI","MBZ__1__ADV__GDV-MINI-NTSC",
    "MBZ__1__ADV__GDV-NTSC","MBZ__1__ADV__LCD-GRID","MBZ__1__ADV__MEGATRON","MBZ__1__ADV__MEGATRON-NTSC",
    "MBZ__1__ADV-RESHADE-FX__GDV","MBZ__1__ADV-SUPER-XBR__GDV","MBZ__1__ADV-SUPER-XBR__GDV-NTSC",
    // MBZ__2__ ADV-GLASS variants
    "MBZ__2__ADV-GLASS__EASYMODE","MBZ__2__ADV-GLASS__GDV","MBZ__2__ADV-GLASS__GDV-MINI",
    "MBZ__2__ADV-GLASS__GDV-MINI-NTSC","MBZ__2__ADV-GLASS__GDV-NTSC","MBZ__2__ADV-GLASS__LCD-GRID",
    "MBZ__2__ADV-GLASS__MEGATRON","MBZ__2__ADV-GLASS__MEGATRON-NTSC",
    "MBZ__2__ADV-GLASS-RESHADE-FX__GDV","MBZ__2__ADV-GLASS-SUPER-XBR__GDV","MBZ__2__ADV-GLASS-SUPER-XBR__GDV-NTSC",
    // MBZ__2__ ADV-NO-REFLECT variants
    "MBZ__2__ADV-NO-REFLECT__GDV","MBZ__2__ADV-NO-REFLECT__GDV-NTSC",
    "MBZ__2__ADV-NO-REFLECT__MEGATRON","MBZ__2__ADV-NO-REFLECT__MEGATRON-NTSC",
    "MBZ__2__ADV-NO-REFLECT-SUPER-XBR__GDV","MBZ__2__ADV-NO-REFLECT-SUPER-XBR__GDV-NTSC",
    // MBZ__2__ ADV-SCREEN-ONLY variants
    "MBZ__2__ADV-SCREEN-ONLY__GDV","MBZ__2__ADV-SCREEN-ONLY__GDV-MINI","MBZ__2__ADV-SCREEN-ONLY__GDV-MINI-NTSC",
    "MBZ__2__ADV-SCREEN-ONLY__GDV-NTSC","MBZ__2__ADV-SCREEN-ONLY__MEGATRON","MBZ__2__ADV-SCREEN-ONLY__MEGATRON-NTSC",
    "MBZ__2__ADV-SCREEN-ONLY-NO-TUBE-FX__GDV","MBZ__2__ADV-SCREEN-ONLY-SUPER-XBR__GDV","MBZ__2__ADV-SCREEN-ONLY-SUPER-XBR__GDV-NTSC",
    // MBZ__3__ STD variants
    "MBZ__3__STD__EASYMODE","MBZ__3__STD__GDV","MBZ__3__STD__GDV-MINI","MBZ__3__STD__GDV-MINI-NTSC",
    "MBZ__3__STD__GDV-NTSC","MBZ__3__STD__LCD-GRID","MBZ__3__STD__MEGATRON","MBZ__3__STD__MEGATRON-NTSC",
    "MBZ__3__STD__PASSTHROUGH",
    // MBZ__3__ STD-GLASS variants
    "MBZ__3__STD-GLASS__GDV","MBZ__3__STD-GLASS__GDV-MINI","MBZ__3__STD-GLASS__GDV-MINI-NTSC",
    "MBZ__3__STD-GLASS__GDV-NTSC","MBZ__3__STD-GLASS__LCD-GRID","MBZ__3__STD-GLASS__MEGATRON",
    "MBZ__3__STD-GLASS__MEGATRON-NTSC","MBZ__3__STD-GLASS__PASSTHROUGH",
    "MBZ__3__STD-GLASS-SUPER-XBR__GDV","MBZ__3__STD-GLASS-SUPER-XBR__GDV-NTSC",
    // MBZ__3__ STD-NO-TUBE-FX variants
    "MBZ__3__STD-NO-TUBE-FX__PASSTHROUGH",
    // MBZ__3__ STD-SUPER-XBR variants
    "MBZ__3__STD-SUPER-XBR__GDV","MBZ__3__STD-SUPER-XBR__GDV-NTSC",
    // MBZ__4__ STD-NO-REFLECT variants
    "MBZ__4__STD-NO-REFLECT__EASYMODE","MBZ__4__STD-NO-REFLECT__GDV","MBZ__4__STD-NO-REFLECT__GDV-MINI",
    "MBZ__4__STD-NO-REFLECT__GDV-MINI-NTSC","MBZ__4__STD-NO-REFLECT__GDV-NTSC","MBZ__4__STD-NO-REFLECT__LCD-GRID",
    "MBZ__4__STD-NO-REFLECT__MEGATRON","MBZ__4__STD-NO-REFLECT__MEGATRON-NTSC","MBZ__4__STD-NO-REFLECT__PASSTHROUGH",
    "MBZ__4__STD-NO-REFLECT-NO-TUBE-FX__PASSTHROUGH",
    "MBZ__4__STD-NO-REFLECT-SUPER-XBR__GDV","MBZ__4__STD-NO-REFLECT-SUPER-XBR__GDV-NTSC",
    // MBZ__4__ STD-SCREEN-ONLY variants
    "MBZ__4__STD-SCREEN-ONLY__EASYMODE","MBZ__4__STD-SCREEN-ONLY__GDV","MBZ__4__STD-SCREEN-ONLY__GDV-MINI",
    "MBZ__4__STD-SCREEN-ONLY__GDV-MINI-NTSC","MBZ__4__STD-SCREEN-ONLY__GDV-NTSC","MBZ__4__STD-SCREEN-ONLY__LCD-GRID",
    "MBZ__4__STD-SCREEN-ONLY__MEGATRON","MBZ__4__STD-SCREEN-ONLY__MEGATRON-NTSC","MBZ__4__STD-SCREEN-ONLY__PASSTHROUGH",
    "MBZ__4__STD-SCREEN-ONLY-NO-TUBE-FX__GDV","MBZ__4__STD-SCREEN-ONLY-NO-TUBE-FX__PASSTHROUGH",
    "MBZ__4__STD-SCREEN-ONLY-SUPER-XBR__GDV","MBZ__4__STD-SCREEN-ONLY-SUPER-XBR__GDV-NTSC",
    // MBZ__5__ POTATO variants
    "MBZ__5__POTATO__EASYMODE","MBZ__5__POTATO__GDV","MBZ__5__POTATO__GDV-MINI","MBZ__5__POTATO__GDV-MINI-NTSC",
    "MBZ__5__POTATO__GDV-NTSC","MBZ__5__POTATO__LCD-GRID","MBZ__5__POTATO__MEGATRON","MBZ__5__POTATO__MEGATRON-NTSC",
    "MBZ__5__POTATO__PASSTHROUGH","MBZ__5__POTATO-SUPER-XBR__GDV","MBZ__5__POTATO-SUPER-XBR__GDV-NTSC"
];

// -----------------------------
// Global Animation
// -----------------------------
const pulseKeyframes = [
    { borderColor: '#007bff' },
    { borderColor: '#00ffd5' }
];

const pulseOptions = {
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
    fill: 'forwards'
};

// Global pulse tracker
const globalPulseAnimation = document.body.animate(pulseKeyframes, pulseOptions);
globalPulseAnimation.pause();

class RowPulseAnimator {
    constructor() {
        this.rowAnimations = new WeakMap();
    }

    attachToRow(row) {
        if (row.dataset._pulseAttached === "1") return;
        row.dataset._pulseAttached = "1";

        row.addEventListener('mouseenter', () => this.startPulse(row));
        row.addEventListener('mouseleave', () => this.stopPulse(row));
    }

    startPulse(row) {
        if (this.rowAnimations.has(row)) return;

        // Ensure border exists
        if (getComputedStyle(row).borderStyle === 'none') {
            row.style.border = '2px solid #007bff';
        }

        const anim = row.animate(pulseKeyframes, pulseOptions);

        // Sync with global pulse
        anim.currentTime = globalPulseAnimation.currentTime || 0;
        anim.play();

        this.rowAnimations.set(row, anim);
    }

    stopPulse(row) {
        const anim = this.rowAnimations.get(row);
        if (!anim) return;

        globalPulseAnimation.currentTime = anim.currentTime;
        anim.cancel();
        this.rowAnimations.delete(row);
    }
}

const rowPulseAnimator = new RowPulseAnimator();

// ---- Observe for dynamically created rows ----
const observer = new MutationObserver(mutations => {
    for (const m of mutations) {
        for (const node of m.addedNodes) {
            if (node.nodeType !== 1) continue;

            // Check if node itself is a row
            if (node.matches('.setting-row, .empty-row')) {
                rowPulseAnimator.attachToRow(node);
            }

            // Check descendants
            node.querySelectorAll('.setting-row, .empty-row').forEach(r => {
                rowPulseAnimator.attachToRow(r);
            });
        }
    }
});

// Observe a container or body
observer.observe(document.body, { childList: true, subtree: true });

const previewBezelColor = document.querySelector('.bezel-color');
const outputArea = document.getElementById('convertedColorOutput');
const infoDiv = document.querySelector('.info');

function handleHover(element) {
    stopElementAnimation(element); 
    const currentTimeInCycle = globalPulseAnimation.currentTime;
    
    // Start animation on the element; it will animate *from* the CSS border-color: #007bff
    const anim = element.animate(pulseKeyframes, pulseOptions);
    anim.currentTime = currentTimeInCycle;
}

function handleLeave(element) {
    element.getAnimations().forEach(anim => {
        // Update the global clock reference
        globalPulseAnimation.currentTime = anim.currentTime;

        // Cancel the animation. This removes the JS-applied styles immediately, 
        // forcing the browser to respect the non-hovered CSS state.
        anim.cancel(); 
    });
}

function stopElementAnimation(element) {
    element.getAnimations().forEach(anim => anim.cancel());
}

// -----------------------------
// Helper Functions
// -----------------------------
function showLoader() {
    const loader = document.getElementById('settingsLoading');
    if (loader) loader.classList.remove('hidden');
}
function hideLoader() {
    const loader = document.getElementById('settingsLoading');
    if (loader) loader.classList.add('hidden');
}
function startCRTScanlines() {
    document.body.classList.add('crt-scanlines');
}
function stopCRTScanlines() {
    document.body.classList.remove('crt-scanlines');
}

function createDynamicReferenceInput(value = '', idIndex) {
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    if (!dynamicRefContainer) return;

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'ref-input-wrapper dynamic-line';

    const label = document.createElement('label');
    label.textContent = '#reference ';
    label.className = 'reference-path-label';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'reference-path-input';
    input.id = `reference-${idIndex}`;
    input.value = value;
    input.placeholder = 'Enter path to param here...';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.className = 'remove-ref-button reset-button';
    removeButton.onclick = () => removeReferenceLine(idIndex);

    label.htmlFor = input.id;

    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(removeButton);
    dynamicRefContainer.appendChild(inputWrapper);

    updateReferenceSectionVisibility();
}

function mergeSettings(baseConfig, newConfig) {
    return Object.assign({}, baseConfig, newConfig);
}

function updateSettingsFromReferenceOrConfig() {
    const referenceInput = document.getElementById('reference-0');
    const outputConfigTextarea = document.getElementById('outputConfig');

    if (referenceInput) {
        const refValue = referenceInput.value.trim();
        if (refValue && refValue.toLowerCase().endsWith('.slangp') && refValue !== lastLoadedSlangpReference) {
            checkAndLoadMegaBezelPreset(refValue);
            lastLoadedSlangpReference = refValue;
        }
    }

    if (outputConfigTextarea) {
        const configText = outputConfigTextarea.value;
        parseSlangpContent(configText, false); // updates all settings values from config
    }
}

// -----------------------------
// Build Setting Group
// -----------------------------
function buildSettingGroupElement(groupData, groupIndex) {
    const settingGroupDiv = document.createElement('div');
    settingGroupDiv.classList.add('setting-group');
    settingGroupDiv.id = 'settings-' + groupIndex;

    // Header row
    const headerRowDiv = document.createElement('div');
    headerRowDiv.classList.add('setting-row');
    headerRowDiv.dataset.sectionName = groupData.header;
    const headerCheckboxId = 'header-' + groupIndex;
    headerRowDiv.innerHTML = `
        <div class="setting-left">
            <input type="checkbox" id="${headerCheckboxId}" data-header-checkbox="true" class="setting-checkbox">
            <label for="${headerCheckboxId}">${groupData.header}</label>
        </div>
        <div class="setting-right"></div>
    `;
    settingGroupDiv.appendChild(headerRowDiv);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('section-content');

    if (groupData.settings && Array.isArray(groupData.settings)) {
        groupData.settings.forEach((setting, settingIndex) => {
            if (setting.empty_row) {
                const emptyRowDiv = document.createElement('div');
                emptyRowDiv.classList.add('empty-row');
                contentDiv.appendChild(emptyRowDiv);
                return;
            }

            const configKey = setting.key;
            const inputId = `input-${settingIndex}-${configKey.toLowerCase()}`;
            const checkboxId = `check-${settingIndex}-${configKey.toLowerCase()}`;

            const settingRowDiv = document.createElement('div');
            settingRowDiv.classList.add('setting-row');
            settingRowDiv.dataset.settingKey = configKey;

            if (setting.path) {
                // IMAGE
                settingRowDiv.innerHTML = `
                    <div class="setting-left">
                        <input type="checkbox" id="${checkboxId}" class="setting-checkbox">
                        <label for="${inputId}" title="${configKey}">
                            <span class="label-indent">${configKey}</span>
                        </label>
                    </div>
                    <div class="setting-right">
                        <input type="text" class="setting-input" id="${inputId}" placeholder="${setting.path}" data-checkbox-target="${checkboxId}" data-config-key="${configKey}">
                    </div>
                `;
            } else {
                // NUMERIC
                const defaultVal = parseFloat(setting.default ?? 0).toFixed(6);
                const minVal = parseFloat(setting.min ?? 0);
                const maxVal = parseFloat(setting.max ?? 0);
                const stepVal = parseFloat(setting.step ?? 0);
                settingRowDiv.innerHTML = `
                    <div class="setting-left">
                        <input type="checkbox" id="${checkboxId}" class="setting-checkbox">
                        <label for="${inputId}" title="${configKey}">
                            <span class="label-indent">${setting.label ?? configKey}</span>
                        </label>
                    </div>
                    <div class="setting-right">
                        <span class="setting-range">[${minVal.toFixed(2)}, ${maxVal.toFixed(2)}]</span>
                        <input type="number" class="setting-input" id="${inputId}" value="" placeholder="${defaultVal}" step="${stepVal}" min="${minVal}" max="${maxVal}" data-checkbox-target="${checkboxId}" data-config-key="${configKey}">
                        <button class="reset-button" data-target-input="${inputId}" title="Clear input value">R</button>
                    </div>
                `;
            }

            contentDiv.appendChild(settingRowDiv);
        });
    }

    settingGroupDiv.appendChild(contentDiv);
    return settingGroupDiv;
}

function formatToDecimals(inputElement) {
    const value = parseFloat(inputElement.value);
    if (!isNaN(value) && inputElement.value !== '') {
        inputElement.value = value.toFixed(N_DECIMALS_CONFIG);
    }
}

// -----------------------------
// Update UI From Config
// -----------------------------
function updateUIFromConfig(config) {
    // Update inputs and attach rows
    document.querySelectorAll('input.setting-input[data-config-key]').forEach(input => {
        const key = input.getAttribute('data-config-key');
        if (config.hasOwnProperty(key)) input.value = config[key];

        // Auto-check linked checkbox if input has a value
        const checkboxId = input.getAttribute('data-checkbox-target');
        if (checkboxId && input.value !== '') {
            const checkbox = document.getElementById(checkboxId);
            if (checkbox) checkbox.checked = true;
        }

        // Attach pulse animation to parent row (.setting-row or .empty-row)
        const row = input.closest('.setting-row, .empty-row');
        if (row) rowPulseAnimator.attachToRow(row);
    });

    // Attach pulse to header checkboxes
    document.querySelectorAll('input[data-header-checkbox="true"]').forEach(headerCheckbox => {
        const row = headerCheckbox.closest('.setting-row, .empty-row');
        if (row) rowPulseAnimator.attachToRow(row);
    });

    // Re-bind input-checkbox dependencies
    setupInputCheckboxBinding();
}

// -----------------------------
// Parse Slangp Content
// -----------------------------
function parseSlangpContent(content, isMergeMode = false) {
    
    // --- 1. Preparation & Clearing (Only if NOT Merging) ---
    if (!isMergeMode) {
        // Clear UI Inputs/Checkboxes for standard 'load/overwrite' mode
        document.getElementById('dynamicReferenceContainer').innerHTML = '';
        document.getElementById('reference-0').value = '';
        document.querySelectorAll('.setting-input').forEach(input => input.value = '');
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
        
        // Also clear the app configuration object if it's an overwrite load
        // appCurrentConfig = {}; 
    }
    
    const lines = content.split('\n');
    let foundReference = false;
    let totalReferencesLoaded = 0; 
    let index = 1; 

    // A temporary object to hold ONLY the config settings found in the file
    const settingsFromFile = {};

    lines.forEach(line => {
        line = line.trim();

        // --- 2. Handle #reference Lines (File Paths - always updates UI directly) ---
        if (line.startsWith('#reference')) {
            const match = line.match(/#reference\s+["']?(.*?)["']?$/);
            if (match && match.length > 1) {
                const fullPathInFile = match[1].trim();
                
                if (!foundReference) {
                    document.getElementById('reference-0').value = fullPathInFile;
                    foundReference = true;
                } else {
                    createDynamicReferenceInput(fullPathInFile, index++); 
                }
                totalReferencesLoaded++; 
            }
        }
        
        // --- 3. Handle KEY="VALUE" Lines (Configuration Settings) ---
        const settingMatch = line.match(/^([a-zA-Z0-9_]+)\s*=\s*"(.*?)"/);
        
        if (settingMatch && settingMatch.length > 2) {
            const key = settingMatch[1];
            const value = settingMatch[2];

            // Store the key/value pair in our temporary object
            settingsFromFile[key] = value;
        }
        
        // --- 4. Handle Section Headers (UI Management - always updates UI directly) ---
        if (line.startsWith('[') && line.endsWith(']')) {
            const headerElement = document.querySelector(`[data-section-name="${line}"]`);
            if (headerElement && headerElement.querySelector('input[data-header-checkbox="true"]')) {
                headerElement.querySelector('input[data-header-checkbox="true"]').checked = true;
            }
        }
    });


    if (isMergeMode) {
        appCurrentConfig = mergeSettings(appCurrentConfig, settingsFromFile);

    } else {
        appCurrentConfig = settingsFromFile;
    }
    
    // --- 6. Sync the UI to the final 'appCurrentConfig' object ---
    // (Ensure updateUIFromConfig is defined elsewhere)
    updateUIFromConfig(appCurrentConfig);


    // --- 7. Original UI Logic for managing visibility of file paths ---
    const contentContainer = document.querySelector('.reference-content');
    const toggleSymbol = document.getElementById('ref-toggle-symbol');
    // ... (rest of the visibility logic using totalReferencesLoaded) ...

    if (contentContainer && toggleSymbol) {
        if (totalReferencesLoaded > 1) {
            toggleSymbol.classList.remove('hidden');
            contentContainer.classList.remove('hidden'); 
            toggleSymbol.classList.remove('rotated');
        } else {
            toggleSymbol.classList.add('hidden');
            contentContainer.classList.remove('hidden'); 
            toggleSymbol.classList.remove('rotated');      
        }
    }
    
    setupInputCheckboxBinding(); 
}

// -----------------------------
// File Load & Merge Handlers
// -----------------------------
function handleFileLoad(file) {
    const outputConfig = document.getElementById('outputConfig');
    const outputName = document.getElementById('outputName'); 
    const mergedOutputConfig = document.getElementById('mergedOutputConfig');
    const mergeConfigButton = document.getElementById('mergeConfigButton');
    const mergedWrapper = document.getElementById('mergedWrapper');

    mergedOutputConfig.value = '';
    clearAllInputs();
    mergeConfigButton.classList.remove('hidden');

    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        outputConfig.value = content;
        parseSlangpContent(content, false);
        outputName.textContent = file.name;
        outputName.classList.remove('hidden');
    };
    reader.readAsText(file);
}

function loadPresetFile(event) {
    const fileInput = event.target;
    if (!fileInput.files.length) return;
    handleFileLoad(fileInput.files[0]);
    fileInput.value = ''; // reset to allow same file reload
}

function mergePresetFile(event) {
    const fileInput = event.target;
    if (!fileInput.files.length) return;
    const file = fileInput.files[0];

    const outputConfig = document.getElementById('outputConfig');
    const mergedOutputConfig = document.getElementById('mergedOutputConfig');
    const mergedConfigWrapper = document.getElementById('mergedWrapper');
    const mergedName = document.getElementById('mergedName');

    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        parseSlangpContent(content, true);
        mergedOutputConfig.value = content;
        mergedName.textContent = file.name;

        if (content.trim() || file.name) {
            mergedConfigWrapper.classList.remove('hidden');
        }
    };
    reader.readAsText(file);
    fileInput.value = '';
}

function clearAllInputs() {
    const settingsInputs = document.querySelectorAll('.setting-input');
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    const staticRefInput = document.getElementById('reference-0');
    const headerCheckboxes = document.querySelectorAll('input[data-header-checkbox="true"]');
    const contentContainer = document.querySelector('.reference-content');
    const toggleSymbol = document.getElementById('ref-toggle-symbol');
    const addButton = document.getElementById('addReferenceLineButton');
    const outputConfig = document.getElementById('outputConfig');
    const outputName = document.getElementById('outputName');
    const mergedOutputConfig = document.getElementById('mergedOutputConfig');
    const mergedWrapper = document.getElementById('mergedWrapper');

    // --- Clear all setting inputs and their checkboxes ---
    settingsInputs.forEach(input => {
        input.value = '';
        const checkboxId = input.dataset.checkboxTarget;
        const checkbox = checkboxId ? document.getElementById(checkboxId) : null;
        if (checkbox) checkbox.checked = false;
    });

    // --- Clear reference inputs ---
    if (staticRefInput) staticRefInput.value = '';
    if (dynamicRefContainer) dynamicRefContainer.innerHTML = '';

    // --- Uncheck all section header checkboxes ---
    headerCheckboxes.forEach(cb => cb.checked = false);

    // --- Hide reference content and toggle symbol ---
    if (contentContainer) contentContainer.classList.add('hidden');
    if (toggleSymbol) toggleSymbol.classList.add('hidden');

    // --- Clear output and merged config ---
    if (outputName) outputName.innerHTML = '';
    if (outputConfig) outputConfig.value = '';
    if (mergedOutputConfig) mergedOutputConfig.value = '';
    if (mergedWrapper && !mergedWrapper.classList.contains('hidden')) mergedWrapper.classList.add('hidden');

    // --- Re-run input-checkbox binding to update UI ---
    setupInputCheckboxBinding();
}

// -----------------------------
// Input & Checkbox Binding
// -----------------------------
function setupInputCheckboxBinding() {
    document.querySelectorAll('.setting-input').forEach(input => {
        input.addEventListener('blur', () => formatToDecimals(input));
        input.addEventListener('wheel', handleMouseWheel);
        input.addEventListener('keydown', handleKeyDown);
    });

    document.querySelectorAll('.reset-button').forEach(button => {
        button.addEventListener('click', handleResetClick);
    });
}

// -----------------------------
// Incremental Settings Renderer
// -----------------------------
let pageAlreadyLoaded = false;

function generateSettingsIncremental(settingsDefinitions, batchSize = 1, isChanging = false) {
    if (window.settingsGenerated && !isChanging) return;
    window.settingsGenerated = true;

    const container = document.getElementById('settingsContainer');
    if (!container) return;
    container.innerHTML = '';

    showLoader(isChanging ? 'changing' : 'loading');
    startCRTScanlines();
    const loaderStartTime = Date.now();
    const minLoaderDuration = isChanging ? 500 : 6000;

    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) progressFill.style.width = '0%';

    function updateProgressBar() {
        if (!progressFill) return;
        const elapsed = (Date.now() - loaderStartTime) / 1000;
        const percent = Math.min((elapsed / (minLoaderDuration / 1000)) * 100, 100);
        progressFill.style.width = percent + '%';
        if (percent < 100) requestAnimationFrame(updateProgressBar);
    }

    const linksContainer = document.getElementById('modal-links-container');

    function generateNavLinks() {
        linksContainer.innerHTML = '';
        document.querySelectorAll('.setting-row[data-section-name]').forEach((section, index) => {
            const sectionId = 'section-' + index;
            section.id = sectionId;

            const sectionTitle = section.getAttribute('data-section-name').replace(/\[|\]/g, '');
            const link = document.createElement('a');
            link.href = '#' + sectionId;
            link.textContent = sectionTitle;
            link.classList.add('modal-setting-row-link');
            link.onclick = e => {
                e.preventDefault();
                myModal.hide();
                window.location.hash = sectionId;
            };
            linksContainer.appendChild(link);
        });

        linksContainer.querySelectorAll('.modal-setting-row-link').forEach(link => {
            link.addEventListener('mouseenter', () => handleHover(link));
            link.addEventListener('mouseleave', () => handleLeave(link));
        });
    }

    requestAnimationFrame(updateProgressBar);

    let groupIndex = 0;
    function renderBatch() {
        const end = Math.min(groupIndex + batchSize, settingsDefinitions.length);
        const fragment = document.createDocumentFragment();

        for (; groupIndex < end; groupIndex++) {
            const groupData = settingsDefinitions[groupIndex];
            fragment.appendChild(buildSettingGroupElement(groupData, groupIndex));
        }

        container.appendChild(fragment);

        if (groupIndex < settingsDefinitions.length) {
            requestAnimationFrame(renderBatch);
        } else {
            const elapsed = Date.now() - loaderStartTime;
            const remaining = Math.max(0, minLoaderDuration - elapsed);

            setTimeout(() => {
                setupInputCheckboxBinding();
                setupCollapsibleSections();
                setupReferenceCollapse();
                generateNavLinks();
                initializeColorPickerModal();

                document.querySelectorAll('.setting-left label[title]').forEach(label => {
                    new bootstrap.Tooltip(label, {
                        trigger: 'hover',
                        placement: 'right',
                        container: 'body',
                        fallbackPlacement: 'top',
                        boundary: 'window'
                    });
                });

                hideLoader();
                stopCRTScanlines();
            }, remaining);
        }
    }

    requestAnimationFrame(renderBatch);
}

// -------------------------------
// Color Picker Modal Initialization
// -------------------------------
function initializeColorPickerModal() {
    const colorTextInput = document.getElementById('colorTextInput');
    const colorPickerInput = document.getElementById('colorPickerInput');
    if (!colorTextInput || !colorPickerInput || !previewBezelColor) return;

    document.body.addEventListener('click', (event) => {
        const target = event.target;
        if (!target.classList.contains('color')) return;

        event.stopPropagation();
        const colorCode = target.dataset.code || '';
        if (!colorCode) return;

        colorTextInput.value = colorCode;
        colorPickerInput.value = colorCode;
        colorPickerInput.style.background = colorCode;
        previewBezelColor.style.background = colorCode;

        performConversionFromText();
        colorMessage(colorCode);
    });

    if (typeof generateSampleColors === 'function') generateSampleColors();
}

// -----------------------------
// Input Key & Wheel Handlers
// -----------------------------
function handleKeyDown(e) {
    if (e.target.type !== 'number') return;

    const input = e.target;
    const step = parseFloat(input.step) || 1;
    let value = parseFloat(input.value) || parseFloat(input.placeholder) || 0;
    let newValue;

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        newValue = value + step;
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        newValue = value - step;
    } else {
        return;
    }

    const min = parseFloat(input.min);
    const max = parseFloat(input.max);
    if (!isNaN(min) && newValue < min) newValue = min;
    if (!isNaN(max) && newValue > max) newValue = max;

    input.value = newValue.toFixed(6);
    input.dispatchEvent(new Event('input', { bubbles: true }));
}

function handleMouseWheel(e) {
    if (e.target.type !== 'number') return;
    e.preventDefault();

    const input = e.target;
    const step = parseFloat(input.step) || 1;
    let value = parseFloat(input.value) || parseFloat(input.placeholder) || 0;

    value += e.deltaY < 0 ? step : -step;

    const min = parseFloat(input.min);
    const max = parseFloat(input.max);
    if (!isNaN(min) && value < min) value = min;
    if (!isNaN(max) && value > max) value = max;

    input.value = value.toFixed(6);
    input.dispatchEvent(new Event('input', { bubbles: true }));
}

function handleResetClick(event) {
    const button = event.target;
    const inputId = button.getAttribute('data-target-input');
    const input = document.getElementById(inputId);
    if (!input) return;

    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));

    const row = $(input).closest('.setting-row');
    row.find('input[type="checkbox"]').prop('checked', false);
}

// -----------------------------
// Color Picker Conversion
// -----------------------------
function performConversionFromText() {
    const colorString = document.getElementById('colorTextInput').value.trim();
    const infoArea = document.querySelector('.info');
    const colorCodeEl = document.querySelector('.color-code');

    if (!colorString) {
        infoArea.style.display = 'none';
        colorCodeEl.innerHTML = '';
        outputArea.value = '';
        return;
    }

    const colorFormat = detectColorFormat(colorString);
    if (colorFormat === 'Unknown') {
        infoArea.style.display = 'none';
        colorCodeEl.innerHTML = '';
        outputArea.value = "Please enter a valid color format (HEX, RGB, HSL, or HSB/HSV).\n\n#RRGGBB, rgb(r,g,b), hsl(0deg,0%,0%) or hsb(0deg,0%,0%)";
        return;
    }

    const activeTab = document.querySelector('#bezelTabs .nav-link.active');
    const bezelStyle = activeTab ? activeTab.getAttribute('data-bezel-type') : 'mega';

    let outputMessage = '';
    try {
        const rgbString = colorcolor(colorString, 'rgb');
        const rgbMatch = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (!rgbMatch) throw new Error("Could not convert input to standard RGB.");

        const r = parseInt(rgbMatch[1]);
        const g = parseInt(rgbMatch[2]);
        const b = parseInt(rgbMatch[3]);

        if (bezelStyle === 'koko') {
            const contrast = parseFloat($("#contrasts option:selected").val()) || 1;
            let factor = 0.395 - (contrast - 1.30) * ((3.75 - contrast) * 0.1 + 0.105);
            const rSetting = (((r - 128) * factor / 128).toFixed(10));
            const gSetting = (((g - 128) * factor / 128).toFixed(10));
            const bSetting = (((b - 128) * factor / 128).toFixed(10));
            outputMessage = `Koko-aio (Floats):\nR: ${rSetting}, G: ${gSetting}, B: ${bSetting}, C: ${contrast}0000`;
        } else if (bezelStyle === 'uborder') {
            outputMessage = `Uborder (RGB 0–255):\nR: ${r}, G: ${g}, B: ${b}`;
        } else if (bezelStyle === 'mega') {
            const hsbString = colorcolor(colorString, 'hsb');
            const hsbMatch = hsbString.match(/hs[bv]\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/);
            outputMessage = hsbMatch
                ? `Hue: ${hsbMatch[1]}\nSaturation: ${hsbMatch[2]}\nValue/Brightness: ${hsbMatch[3]}`
                : `Mega Bezel (HSB/HSV):\n${hsbString.includes('NaN') ? 'Hue: 0\nSaturation: 0\nValue/Brightness: 0' : hsbString}`;
        }
    } catch (err) {
        outputMessage = 'Error processing color conversion.';
        console.error(err);
    }

    outputArea.value = outputMessage;
    colorMessage(colorString);
}

// -------------------------------
// Detect CSS Color Format
// -------------------------------
function detectColorFormat(colorString) {
    const s = colorString.trim().toLowerCase();
    const regexes = {
        HEX: /^#([0-9a-f]{3}|[0-9a-f]{6})$/i,
        RGB: [
            /^rgba?\(\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*,\s*(\d{1,3}%?)\s*(,\s*[\d.]+\s*)?\)$/i,
            /^rgb\(\s*(\d{1,3}%?)\s+(\d{1,3}%?)\s+(\d{1,3}%?)\s*(\/\s*[\d.]+\s*)?\)$/i
        ],
        HSL: [
            /^hsla?\(\s*(\d{1,3}\w*)\s*,\s*(\d{1,3}%)\s*,\s*(\d{1,3}%)\s*(,\s*[\d.]+\s*)?\)$/i,
            /^hsl\(\s*(\d{1,3}\w*)\s+(\d{1,3}%)\s+(\d{1,3}%)\s*(\/\s*[\d.]+\s*)?\)$/i
        ],
        HSB: [
            /^hs[bv]a?\(\s*(\d{1,3}\w*)\s*,\s*(\d{1,3}%)\s*,\s*(\d{1,3}%)\s*(,\s*[\d.]+\s*)?\)$/i,
            /^hs[bv]\(\s*(\d{1,3}\w*)\s+(\d{1,3}%)\s+(\d{1,3}%)\s*(\/\s*[\d.]+\s*)?\)$/i
        ]
    };

    if (regexes.HEX.test(s)) return 'HEX';
    if (regexes.RGB.some(r => r.test(s))) return 'RGB';
    if (regexes.HSL.some(r => r.test(s))) return 'HSL';
    if (regexes.HSB.some(r => r.test(s))) return 'HSB';
    return 'Unknown';
}

// -------------------------------
// Push converted color to config textarea
// -------------------------------
function pushOutputToConfigArea() {
    const source = document.getElementById('convertedColorOutput');
    const dest = document.getElementById('outputConfig');
    if (!source || !dest) return console.error("Missing color output or config area.");

    dest.value += dest.value ? "\n" + source.value : source.value;
    dest.scrollTop = dest.scrollHeight;
}

// ------------------ Generate Color Samples ------------------
function generateSampleColors() {
    document.querySelectorAll('.sample').forEach(sample => {
        const systemName = sample.querySelector('.color-title')?.textContent.trim();
        const colorsContainer = sample.querySelector('.colors');
        if (!systemName || !colorsContainer) return;

        colorsContainer.innerHTML = '';

        if (colorDatabase[systemName]) {
            colorDatabase[systemName].forEach(color => {
                const swatch = document.createElement('div');
                swatch.classList.add('color');
                swatch.style.background = color.hex;
                swatch.dataset.code = color.hex;
                swatch.addEventListener('click', () => {
                    colorTextInput.value = color.hex;
                    colorPickerInput.value = color.hex;
                    previewBezelColor.style.background = color.hex;
                    performConversionFromText();
                    colorMessage(color.hex);
                });
                colorsContainer.appendChild(swatch);
            });
        }
    });
}

// ------------------ Color Vision Display ------------------
function colorMessage(inputColorCode) {
    if (!inputColorCode) {
        // Early exit if input is empty
        document.querySelector('.info').style.display = 'none';
        document.querySelector('.color-code').innerHTML = '';
        $(".preview-screen").attr("src", "assets/images/preview/screen/mbz_generic.png");
        return;
    }

    const standardizedInput = inputColorCode.toUpperCase().replace("#", "").trim();
    const globalOutputArea = document.querySelector('.color-code');
    const previewScreen = $(".preview-screen");

    // System abbreviation mapping
    const systemMap = {
        "Atari 2600": "a2600",
        "NES": "nes",
        "Nintendo 64": "n64",
        "GameCube": "gc",
        "Famicom": "fc",
        "Dreamcast": "dc",
        "PlayStation": "ps1",
        "PlayStation 2": "ps2",
        "Super Famicom": "sfc",
        "Super Nintendo": "snes"
    };

    // Find color
    let foundSystem = null;
    let foundColor = null;

    outerLoop:
    for (const [system, colors] of Object.entries(colorDatabase)) {
        for (const color of colors) {
            const hexMatch = color.hex.toUpperCase().replace("#", "").trim() === standardizedInput;
            const otherMatch = [color.rgb, color.hsl, color.hsb].some(c => c.toUpperCase().trim() === inputColorCode.toUpperCase().trim());
            if (hexMatch || otherMatch) {
                foundSystem = system;
                foundColor = color;
                break outerLoop;
            }
        }
    }

    if (foundSystem && foundColor) {
        const systemAbbrv = systemMap[foundSystem] || 'mbz_generic';

        previewScreen.attr("src", `assets/images/preview/screen/${systemAbbrv}.png`);
        infoDiv.innerHTML = `<i class="bi bi-info-circle me-2" aria-hidden="true"></i>
                             <strong>${foundColor.name}</strong>
                             <img src="assets/images/logos/${systemAbbrv}.png" alt="${foundSystem}" class="info-logo">`;
        infoDiv.style.display = 'block';

        if (globalOutputArea) {
            globalOutputArea.innerHTML = `${foundColor.hex} &nbsp;&nbsp; ${foundColor.rgb} &nbsp;&nbsp; ${foundColor.hsl} &nbsp;&nbsp; ${foundColor.hsb}`;
        }
    } else {
        // Reset if no match
        infoDiv.innerHTML = '';
        infoDiv.style.display = 'none';
        if (globalOutputArea) globalOutputArea.innerHTML = '';
        previewScreen.attr("src", "assets/images/preview/screen/mbz_generic.png");
    }
}

const dropZone = document.getElementById('dropZone');
const shaderExtensions = ['.slangp', '.pre', '.params'];
const mediaExtensions  = ['.mp4', '.yt', '.ttv', '.ttvl'];

if (dropZone) {
    const preventDefaults = (e) => e.preventDefault();
    
    const highlight = () => dropZone.classList.add('dragover-effect');
    const unhighlight = () => dropZone.classList.remove('dragover-effect');

    const handleDrop = (e) => {
        unhighlight();
        const files = e.dataTransfer.files;
        if (!files.length) return;

        const file = files[0];
        const fileName = file.name.toLowerCase();

        // Define these here
        const isShader = shaderExtensions.some(ext => fileName.endsWith(ext));
        const isMedia  = mediaExtensions.some(ext => fileName.endsWith(ext));

        if (isShader) {
            handleFileLoad(file);
        } else if (isMedia) {
            loadMiniFromFile(file);
        } else {
            alert("Invalid file type dropped.");
        }
    };

    dropZone.addEventListener('dragover', (e) => { preventDefaults(e); highlight(); });
    dropZone.addEventListener('dragleave', (e) => { preventDefaults(e); unhighlight(); });
    dropZone.addEventListener('drop', (e) => { preventDefaults(e); handleDrop(e); });
}

function loadMiniFromFile(file) {
    const ext = file.name.split('.').pop().toLowerCase();

    const miniPlayer = new MiniPlayer();
    miniPlayer.ensureContainer();

    switch (ext) {
        case 'mp4':
            miniPlayer.loadFile(file);
            break;
        case 'yt':
            miniPlayer.loadYoutube(file);
            break;
        case 'ttv':
            miniPlayer.loadTwitch(file);
            break;
        case 'ttvl':
            miniPlayer.loadTwitchLive(file);
            break;
        default:
            alert('Unsupported media file: ' + ext);
    }
}

// ------------------ Perform Conversion ------------------
function performConversionFromText() {
    const colorString = colorTextInput.value.trim();
    outputArea.innerHTML = '';
    infoDiv.style.display = 'none';
    const outputAreaElement = document.getElementById('convertedColorOutput');
    outputAreaElement.value = '';

    if (!colorString) return;

    const colorFormat = detectColorFormat(colorString);
    if (colorFormat === 'Unknown') {
        outputAreaElement.value =
            "Please enter a valid color format (HEX, RGB, HSL, or HSB/HSV).\n\n" +
            "#RRGGBB, rgb(r,g,b), hsl(0deg,0%,0%) or hsb(0deg,0%,0%)";
        return;
    }

    const activeTab = document.querySelector('#bezelTabs .nav-link.active');
    const bezelStyle = activeTab ? activeTab.getAttribute('data-bezel-type') : 'mega';
    let outputMessage = '';

    try {
        const rgbString = colorcolor(colorString, 'rgb');
        const rgbMatch = rgbString.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
        if (!rgbMatch) throw new Error("Could not convert input to standard RGB.");

        const [r, g, b] = rgbMatch.slice(1).map(Number);

        if (bezelStyle === 'koko') {
            const contrast = parseFloat($("#contrasts option:selected").val()) || 1;
            const calcFactor = (base) => ((base - 128) * (0.395 - (contrast - 1.3) * ((3.75 - contrast) * 0.01 + 0.105)) / 128).toFixed(10);
            const rSetting = calcFactor(r), gSetting = calcFactor(g), bSetting = calcFactor(b);
            outputMessage = `Koko-aio (Floats):\nR: ${rSetting}, G: ${gSetting}, B: ${bSetting}, C: ${contrast}0000`;
        } else if (bezelStyle === 'uborder') {
            outputMessage = `Uborder (RGB 0–255):\nR: ${r}, G: ${g}, B: ${b}`;
        } else if (bezelStyle === 'mega') {
            const hsbString = colorcolor(colorString, 'hsb');
            if (hsbString.includes('NaN')) {
                outputMessage = `Hue: 0\nSaturation: 0\nValue/Brightness: 0`;
            } else {
                const hsbMatch = hsbString.match(/hs[bv]\((\d+),\s*(\d+)%?,\s*(\d+)%?\)/);
                outputMessage = hsbMatch
                    ? `Hue: ${hsbMatch[1]}\nSaturation: ${hsbMatch[2]}\nValue/Brightness: ${hsbMatch[3]}`
                    : `Mega Bezel (HSB/HSV):\n${hsbString}`;
            }
        }

    } catch (err) {
        outputMessage = "Error processing color conversion. Ensure 'colorcolor' is loaded and input is valid.";
        console.error(err);
        infoDiv.innerHTML = outputMessage;
        infoDiv.style.display = 'block';
    }

    outputAreaElement.value = outputMessage;
}


// ------------------ Input Listeners & Two-Way Sync ------------------
colorTextInput.addEventListener('input', () => {
    const val = colorTextInput.value.trim();

    if (!val) {
        colorPickerInput.value = '';
        colorPickerInput.style.backgroundColor = '#000000';
        previewBezelColor.style.background = '';
        performConversionFromText();
        colorMessage('');
        return;
    }

    if (detectColorFormat(val) !== 'Unknown') {
        const hexValue = colorcolor(val, 'hex').toUpperCase();
        const rgbValue = colorcolor(val, 'rgb');

        colorPickerInput.value = hexValue;
        colorPickerInput.style.backgroundColor = rgbValue;
        previewBezelColor.style.background = rgbValue;

        performConversionFromText();
        colorMessage(val);
    }
});

colorPickerInput.addEventListener('input', () => {
    const pickerValue = colorPickerInput.value.toUpperCase();
    
    colorTextInput.value = pickerValue;

    const rgbValue = colorcolor(pickerValue, 'rgb');
    colorPickerInput.style.backgroundColor = rgbValue;
    previewBezelColor.style.background = rgbValue;

    performConversionFromText();
    colorMessage(pickerValue);
});

// -------------------------------
// Event listener for swatches
// -------------------------------
document.addEventListener('click', e => {
    if (!e.target.classList.contains('color')) return;

    const colorCode = e.target.dataset.code;
    if (!colorCode) return;

    colorTextInput.value = colorCode;
    colorPickerInput.value = colorCode;
    colorPickerInput.style.backgroundColor = colorCode;
    previewBezelColor.style.background = colorCode;

    performConversionFromText();
    colorMessage(colorCode);
});

// ------------------ Modal Swapping ------------------
function swapModals(modalToHideId, modalToShowId) {
    const modalToHide = document.getElementById(modalToHideId);
    const modalToShow = document.getElementById(modalToShowId);

    const hideInstance = bootstrap.Modal.getInstance(modalToHide) 
        || new bootstrap.Modal(modalToHide);

    modalToHide.addEventListener('hidden.bs.modal', () => {
        const showInstance = bootstrap.Modal.getInstance(modalToShow) 
            || new bootstrap.Modal(modalToShow);
        showInstance.show();
    }, { once: true });

    hideInstance.hide();
}

// -----------------------------
// Collapsible Sections
// -----------------------------
function setupCollapsibleSections() {
    document.querySelectorAll('.setting-group .setting-row[data-section-name]').forEach(headerRow => {
        const contentDiv = headerRow.nextElementSibling;
        if (!contentDiv) return;

        contentDiv.classList.remove('hidden');

        headerRow.addEventListener('click', (e) => {
            if (e.target.tagName.toLowerCase() === 'input' && e.target.type === 'checkbox') return;
            contentDiv.classList.toggle('hidden');
        });
    });
}

// -----------------------------
// Buttons
// -----------------------------
document.getElementById('scrollToTop').addEventListener('click', () => {
    document.getElementById('settingsWrapper').scrollIntoView({ behavior: 'smooth' });
});

// -----------------------------
// Placeholder Config Functions
// -----------------------------

document.getElementById('createConfigButton').addEventListener('click', createConfigOutput);
document.getElementById('pushConfigButton').addEventListener('click', pushOutputToConfigArea);

// -----------------------------
// Mega Bezel Preset Loader
// -----------------------------
let firstPresetLoad = true; // global flag
let lastLoadedSlangpReference = 'MBZ__3__STD__GDV.slangp'; // initial preset

function checkAndLoadMegaBezelPreset(inputValue) {
    const slangpMatch = inputValue.match(/^["']?(?:.*[\\/])?([^"'/\\]+)\.slangp["']?$/i);
    if (!slangpMatch) return;

    const presetName = slangpMatch[1];
    const targetFileName = presetName + '.js';

    if (!validSlangpPresets.includes(presetName)) {
        console.warn(`Preset '${presetName}' not in whitelist. Skipping load.`);
        return;
    }

    if (presetName === lastLoadedSlangpReference) {
        console.log(`Preset '${presetName}' already loaded.`);
        return;
    }

    const targetPresetPath = `assets/Mega_Bezel/${targetFileName}`;
    fetch(targetPresetPath)
        .then(res => {
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.text();
        })
        .then(jsContent => {
            const newSettings = eval(jsContent + '\nsettingDefinitions;');
            if (!Array.isArray(newSettings)) {
                console.error('Fetched JS did not define a valid settingDefinitions array.');
                return;
            }

            settingDefinitions = newSettings;
            generateSettingsIncremental(settingDefinitions, 1, !firstPresetLoad);

            lastLoadedSlangpReference = presetName;
            firstPresetLoad = false;
        })
        .catch(err => {
            console.warn('Mega Bezel JS settings file could not be loaded:', targetPresetPath, err);
        });
}


// -----------------------------
// Reference Section Utilities
// -----------------------------
function updateReferenceSectionVisibility() {
    const toggleSymbol = document.getElementById('ref-toggle-symbol');
    const contentContainer = document.getElementById('dynamicReferenceContainer'); // dynamic lines only

    if (!toggleSymbol || !contentContainer) return;

    const numberOfDynamicLines = contentContainer.querySelectorAll('.reference-path-input').length;

    if (numberOfDynamicLines > 0) {
        // Show toggle when there is at least one dynamic line
        toggleSymbol.classList.remove('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        // Hide toggle if there are no dynamic lines
        toggleSymbol.classList.add('hidden');
        toggleSymbol.classList.remove('rotated');
        contentContainer.classList.add('hidden');
    }
}

function setupReferenceCollapse() {
    const contentContainer = document.getElementById('dynamicReferenceContainer');
    const toggleSymbol = document.getElementById('ref-toggle-symbol');


    if (contentContainer && toggleSymbol) {
        toggleSymbol.addEventListener('click', function(event) {
            contentContainer.classList.toggle('hidden');
            if (contentContainer.classList.contains('hidden')) {
                toggleSymbol.classList.add('rotated');
            } else {
                toggleSymbol.classList.remove('rotated');
            }
        });
    }
}

// ==========================
// 1) Create a dynamic reference input
// ==========================
function createDynamicReferenceInput(value = '', idIndex) {
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    if (!dynamicRefContainer) return;

    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'ref-input-wrapper dynamic-line';

    const label = document.createElement('label');
    label.textContent = '#reference ';
    label.className = 'reference-path-label';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'reference-path-input';
    input.id = `reference-${idIndex}`;
    input.value = value;
    input.placeholder = 'Enter path to param here...';

    const removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.className = 'remove-ref-button reset-button';
    removeButton.onclick = () => removeReferenceLine(idIndex);

    label.htmlFor = input.id;

    inputWrapper.appendChild(label);
    inputWrapper.appendChild(input);
    inputWrapper.appendChild(removeButton);
    dynamicRefContainer.appendChild(inputWrapper);

    // Update toggle visibility after adding
    updateReferenceSectionVisibility();
}

// ==========================
// 2) Remove a dynamic reference line and reindex
// ==========================
function handleAddRefLine() {
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    if (!dynamicRefContainer) return;

    const nextIndex = dynamicRefContainer.querySelectorAll('.reference-path-input').length + 1;
    createDynamicReferenceInput('', nextIndex);
}

function removeReferenceLine(idIndex) {
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    if (!dynamicRefContainer) return;

    const input = document.getElementById(`reference-${idIndex}`);
    if (input) input.parentElement.remove();

    const wrappers = dynamicRefContainer.querySelectorAll('.ref-input-wrapper');
    wrappers.forEach((wrapper, idx) => {
        const inputEl = wrapper.querySelector('.reference-path-input');
        const labelEl = wrapper.querySelector('label');
        const removeBtn = wrapper.querySelector('button');

        if (inputEl) inputEl.id = `reference-${idx + 1}`;
        if (labelEl) labelEl.htmlFor = `reference-${idx + 1}`;
        if (removeBtn) removeBtn.onclick = () => removeReferenceLine(idx + 1);
    });

    updateReferenceSectionVisibility();
}

function updateReferenceSectionVisibility() {
    const toggleSymbol = document.getElementById('ref-toggle-symbol');
    const contentContainer = document.getElementById('dynamicReferenceContainer');
    if (!toggleSymbol || !contentContainer) return;

    const dynamicLines = contentContainer.querySelectorAll('.reference-path-input').length;

    if (dynamicLines > 0) {
        toggleSymbol.classList.remove('hidden');
        contentContainer.classList.remove('hidden');
    } else {
        toggleSymbol.classList.add('hidden');
        toggleSymbol.classList.remove('rotated');
        contentContainer.classList.add('hidden');
    }
}

// ==========================
// 5) Setup collapse toggle
// ==========================
function setupReferenceCollapse() {
    const toggleSymbol = document.getElementById('ref-toggle-symbol');
    const contentContainer = document.getElementById('dynamicReferenceContainer');

    if (!toggleSymbol || !contentContainer) return;

    toggleSymbol.addEventListener('click', function () {
        contentContainer.classList.toggle('hidden');
        toggleSymbol.classList.toggle('rotated', contentContainer.classList.contains('hidden'));
    });
}

// ==========================
// 6) Load references from output config
// ==========================
function loadReferenceInputsFromConfig() {
    const outputConfigTextarea = document.getElementById('outputConfig');
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    if (!outputConfigTextarea || !dynamicRefContainer) return;

    const lines = outputConfigTextarea.value.split('\n');
    const settingRegex = /^[^;]+?\s*;\s*-?\d+(\.\d+)?\s*$/;
    let firstSettingIndex = lines.findIndex(line => settingRegex.test(line));
    if (firstSettingIndex === -1) firstSettingIndex = lines.length;

    const referencePaths = lines.slice(0, firstSettingIndex)
        .filter(line => /^#reference\s*/.test(line))
        .map(line => line.replace(/^#reference\s*/, '').trim());

    // Clear dynamic container
    dynamicRefContainer.innerHTML = '';

    referencePaths.forEach((path, i) => {
        createDynamicReferenceInput(path, i + 1); // dynamic lines start at 1
    });

    updateReferenceSectionVisibility();
}

// ==========================
// 8) Initialize collapse toggle
// ==========================
setupReferenceCollapse();

// -----------------------------
// Create Config Output
// -----------------------------
function createConfigOutput() {
    const outputArea = document.getElementById('outputConfig');
    const mergedOutputConfig = document.getElementById('mergedOutputConfig');
    if (!outputArea) return;

    const outputLines = [];

    // --- References ---
    document.querySelectorAll('.reference-path-input').forEach(input => {
        const val = input.value.trim();
        if (!val) return;
        outputLines.push(`#reference ${val.startsWith('"') && val.endsWith('"') ? val : `"${val}"`}`);
    });
    if (outputLines.length) outputLines.push(''); // blank line after references

    // --- Settings Sections ---
    let lastWasHeader = false;
    document.querySelectorAll('.setting-group').forEach(group => {
        const headerRow = group.querySelector('[data-section-name]');
        const sectionName = headerRow?.getAttribute('data-section-name');
        const headerCheckbox = headerRow?.querySelector('input[data-header-checkbox="true"]');
        const wantsHeader = headerCheckbox?.checked && sectionName;

        const qualifiedSettings = Array.from(group.querySelectorAll('.setting-input'))
            .filter(input => {
                const checkbox = document.getElementById(input.getAttribute('data-checkbox-target'));
                return checkbox?.checked && input.value !== '';
            })
            .map(input => `${input.getAttribute('data-config-key')} = "${input.value}"`);

        if (!qualifiedSettings.length) return;

        if (lastWasHeader || (outputLines.length && wantsHeader && outputLines[outputLines.length - 1] !== '')) {
            outputLines.push('');
        }

        if (wantsHeader) {
            outputLines.push(sectionName);
            qualifiedSettings.forEach(line => outputLines.push(`\t${line}`));
            lastWasHeader = true;
        } else {
            qualifiedSettings.forEach(line => outputLines.push(line));
            lastWasHeader = false;
        }
    });

    if (mergedOutputConfig) mergedOutputConfig.value = '';
    outputArea.value = outputLines.join('\n').trim();
}

// -----------------------------
// Save .slangp File
// -----------------------------
function saveSlangp(textareaId, defaultFilename) {
    const textarea = document.getElementById(textareaId);
    if (!textarea || !textarea.value.trim()) {
        alert("Textarea is empty. Cannot save blank file.");
        return;
    }

    const blob = new Blob([textarea.value], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = defaultFilename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// ------------------------
// Optimized Settings & DOM Handling
// ------------------------

function mergeSettings(target, source) {
    for (const key in source) {
        if (!source.hasOwnProperty(key)) continue;
        const sVal = source[key], tVal = target[key];
        if (typeof sVal === 'object' && sVal && !Array.isArray(sVal) &&
            typeof tVal === 'object' && tVal && !Array.isArray(tVal)) {
            target[key] = mergeSettings(tVal, sVal);
        } else target[key] = sVal;
    }
    return target;
}

function addLabels() {
    const allInputs = document.querySelectorAll('.setting-input');

    allInputs.forEach(input => {
        const isModified = input.type === 'checkbox'
            ? input.checked !== input.defaultChecked
            : input.value.trim() !== '' && input.value.trim() !== (input.placeholder || '');

        const checkbox = document.getElementById(input.getAttribute('data-checkbox-target'));
        if (checkbox) checkbox.checked = isModified;

        const parent = input.closest('.setting-group');
        if (parent) parent.classList.toggle('is-modified', isModified);
    });

    document.querySelectorAll('.setting-group').forEach(group => {
        const childCheckboxes = group.querySelectorAll('input[type="checkbox"].setting-checkbox:not([data-header-checkbox="true"])');
        const headerCheckbox = group.querySelector('input[data-header-checkbox="true"]');
        if (headerCheckbox) headerCheckbox.checked = Array.from(childCheckboxes).some(cb => cb.checked);
    });
}

function handleInputCheckboxBinding(input) {
    if (!input.classList.contains('setting-input')) return;
    const checkbox = document.getElementById(input.getAttribute('data-checkbox-target'));
    if (!checkbox) return;

    const val = input.value.trim();
    const placeholder = input.placeholder || '';
    const valNum = parseFloat(val), placeNum = parseFloat(placeholder);

    checkbox.checked = val !== '' && (!isNaN(valNum) && !isNaN(placeNum) ? valNum !== placeNum : val !== placeholder);
}

const themeButtons = document.querySelectorAll('.theme-swatch');

themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const theme = btn.dataset.theme;

        // Clear all theme classes
        document.body.className = '';
        document.body.classList.add(theme);

        // Apply CRT for amber, green, or ozone
        if (['amber','green','ozone'].includes(theme)) {
            document.body.classList.add('crt-trinitron');
        } else {
            document.body.classList.remove('crt-trinitron');
        }

        // Save selected theme
        localStorage.setItem('ui.theme', theme);
    });
});

// ------------------------
// DOMContentLoaded Initialization
// ------------------------
document.addEventListener('DOMContentLoaded', () => {
    const miniPlayer = new MiniPlayer();

    const savedTheme = localStorage.getItem('ui.theme') || 'ozone'; // default to ozone
    const btn = document.querySelector(`.theme-swatch[data-theme="${savedTheme}"]`);
    btn?.click();

    const scrollableDiv = document.getElementById('settingsWrapper'); // the element that actually scrolls
    const scrollBtn = document.getElementById('scrollToTop');
    const scrollThreshold = 200;

    if (scrollableDiv && scrollBtn) {
        const toggleScrollButton = () => {
            scrollBtn.classList.toggle('hidden', scrollableDiv.scrollTop <= scrollThreshold);
        };

        scrollableDiv.addEventListener('scroll', toggleScrollButton);
        toggleScrollButton(); // initial check

        scrollBtn.addEventListener('click', () => {
            scrollableDiv.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    
    generateSampleColors();
    checkAndLoadMegaBezelPreset('MBZ__3__STD__GDV.slangp');

    // Reference line add button
    document.getElementById('addReferenceLineButton')?.addEventListener('click', handleAddRefLine);

    // Load / Save Config handlers
    document.getElementById('loadConfigButton')?.addEventListener('click', () => document.getElementById('loadConfigInput')?.click());

    // Then handle file input changes
    document.getElementById('loadConfigInput')?.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const extension = file.name.split('.').pop().toLowerCase();

        // Shader / config files
        if (['slangp', 'pre', 'params'].includes(extension)) {
            handleFileLoad(file); // your existing function for outputConfig/settings
        }
        // Media files
        else if (['mp4', 'yt', 'ttv', 'ttvl'].includes(extension)) {
            miniPlayer.ensureContainer(); // ensure the container exists
            switch (extension) {
                case 'yt':
                    miniPlayer.loadYoutube(file);
                    break;
                case 'ttv':
                    miniPlayer.loadTwitch(file);
                    break;
                case 'ttvl':
                    miniPlayer.loadTwitchLive(file);
                    break;
                case 'mp4':
                    miniPlayer.loadFile(file);
                    break;
            }
        } else {
            alert('Unsupported file type: ' + extension);
        }

        e.target.value = '';
    });

    document.getElementById('loadConfigInput')?.addEventListener('change', loadPresetFile);
    document.getElementById('saveConfigButton')?.addEventListener('click', () => saveSlangp('outputConfig', 'shader.slangp'));

    // Input change binding (delegated)
    settingsContainer?.addEventListener('input', e => handleInputCheckboxBinding(e.target));
    settingsContainer?.addEventListener('change', e => handleInputCheckboxBinding(e.target));

    // Reset button delegation
    settingsContainer?.addEventListener('click', e => {
        const btn = e.target.closest('.reset-button');
        if (!btn) return;
        const input = document.getElementById(btn.getAttribute('data-target-input'));
        if (!input) return;
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });

    // Tooltip initialization
    [
        document.querySelectorAll('.button-group button[title]'),
        document.querySelectorAll('.right-aligned-controls [title]'),
        document.querySelectorAll('.modal-swap[title]')
    ].forEach(list => list.forEach(el => new bootstrap.Tooltip(el, { trigger: 'hover' })));
// -------------------------------
// TOOLTIP INITIALIZATION FOR DYNAMIC LABELS
// -------------------------------
function initializeDynamicSettingTooltips() {
    document.querySelectorAll('.setting-left label[title]').forEach(label => {
        if (label._tooltip) label._tooltip.dispose();
        label._tooltip = new bootstrap.Tooltip(label, {
            trigger: 'hover',
            container: 'body',
            boundary: 'viewport',
            html: false
        });
    });
}

 const rows = document.querySelectorAll('.modal-setting-row-link, .setting-row, .empty-row');
    rows.forEach(row => {
        row.addEventListener('mouseenter', () => handleHover(row));
        row.addEventListener('mouseleave', () => handleLeave(row));
    });

    const inputs = document.querySelectorAll('.setting-input, .reference-path-input');
    inputs.forEach(input => {
        input.addEventListener('blur', (e) => formatToDecimals(e.target));
        input.addEventListener('wheel', handleMouseWheel);
        input.addEventListener('keydown', handleKeyDown);
        input.addEventListener('focus', () => { if (input.value.length) input.select(); });
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault();
                input.dispatchEvent(new Event('change'));
                input.blur();
            }
        });
    });

    const resetButtons = document.querySelectorAll('.reset-button');
    resetButtons.forEach(button => button.addEventListener('click', handleResetClick));

    const createButton = document.getElementById('createConfigOutput');
    if (createButton) createButton.addEventListener('click', createConfigOutput);

    setupInputCheckboxBinding();
    setupCollapsibleSections();
    setupReferenceCollapse();

    // -------------------------------
    // COLOR PICKER LOGIC
    // -------------------------------

    function handleColorInputChange(value) {
        const detectedFormat = detectColorFormat(value);
        if (detectedFormat !== 'Unknown' && value.trim()) {
            const newHex = colorcolor(value, 'hex').toUpperCase();
            const rgbColor = colorcolor(value, 'rgb');
            colorPickerInput.style.backgroundColor = rgbColor;
            previewBezelColor.style.background = rgbColor;
            colorPickerInput.value = newHex;
            performConversionFromText();
            colorMessage(value);
        } else {
            colorPickerInput.value = '';
            colorPickerInput.style.backgroundColor = '#000000';
            previewBezelColor.style.background = '';
            performConversionFromText();
            colorMessage('');
        }
    }

    colorTextInput.addEventListener('input', () => handleColorInputChange(colorTextInput.value));
    colorPickerInput.addEventListener('input', () => {
        colorTextInput.value = colorPickerInput.value.toUpperCase();
        handleColorInputChange(colorPickerInput.value);
    });

    // -------------------------------
    // TOOLTIP INITIALIZATION
    // -------------------------------
    const tooltipElements = [
        ...document.querySelectorAll('.button-group button[title]'),
        ...document.querySelectorAll('.right-aligned-controls [title]'),
        ...document.querySelectorAll('.modal-swap[title]')
    ];
    tooltipElements.forEach(el => new bootstrap.Tooltip(el, { trigger: 'hover' }));

// -------------------------------
// GENERATE SETTINGS HTML INCREMENTALLY
// -------------------------------
generateSettingsIncremental(settingDefinitions, 1, false);

// -------------------------------
// OUTPUT CONFIG UPDATES
// -------------------------------
let lastLoadedSlangpReference = null;

// -----------------------------
// 1) Update settings from outputConfig
// -----------------------------
function updateAllSettingsFromConfig() {
    const outputConfig = document.getElementById('outputConfig');
    const settingsContainer = document.getElementById('settingsContainer');
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    const staticRefInput = document.getElementById('reference-0');
    const toggleSymbol = document.getElementById('ref-toggle-symbol');

    if (!outputConfig || !settingsContainer || !dynamicRefContainer || !staticRefInput) return;

    const configText = outputConfig.value;

    // --- Clear first reference input if outputConfig is empty ---
    if (configText.trim() === '') {
        staticRefInput.value = '';
        const outputName = document.getElementById('outputName');
        if (outputName) outputName.textContent = '';
    }

    // --- Parse reference paths ---
    const referencePaths = Array.from(configText.matchAll(/^#reference[ \t]*([^\r\n]*)/gm), m => m[1]);

    // Load first reference preset
    const firstSlangpReference = referencePaths.find(p => p.includes('.slangp'))?.replace(/^"|"$/g, '').trim();
    if (firstSlangpReference && firstSlangpReference !== lastLoadedSlangpReference) {
        checkAndLoadMegaBezelPreset(firstSlangpReference);
        lastLoadedSlangpReference = firstSlangpReference;
    }

    // --- Update reference inputs ---
    // Clear dynamic references
    dynamicRefContainer.innerHTML = '';

    referencePaths.forEach((ref, i) => {
        if (i === 0) {
            staticRefInput.value = ref;
        } else {
            handleAddRefLine(); // dynamically adds reference-i input
            const newRefInput = document.getElementById(`reference-${i}`);
            if (newRefInput) newRefInput.value = ref;
        }
    });

    // Update toggle visibility
    if (toggleSymbol) {
        const dynamicCount = referencePaths.length - 1;
        toggleSymbol.classList.toggle('hidden', dynamicCount <= 0);
        toggleSymbol.classList.remove('rotated');
    }

    // --- Update settings inputs ---
    const allSettingInputs = settingsContainer.querySelectorAll('input[data-config-key]');
    allSettingInputs.forEach((inputElement, index) => {
        const keyToWatch = inputElement.getAttribute('data-config-key');
        const checkboxTargetId = inputElement.getAttribute('data-checkbox-target');
        inputElement.id = `setting-${index}`;
        if (!keyToWatch) return;

        const regex = new RegExp(`^\\s*(?!//.*)${keyToWatch}\\s*=\\s*(.*)`, 'm');
        const match = configText.match(regex);
        let value = match ? match[1].trim().replace(/^"|"$/g, '').split('//')[0].trim() : '';
        inputElement.value = value;

        if (checkboxTargetId) {
            const checkboxElement = document.getElementById(checkboxTargetId);
            if (checkboxElement?.type === 'checkbox') {
                const placeholder = inputElement.getAttribute('placeholder') || '';
                checkboxElement.checked = value !== '' && value !== placeholder;
            }
        }
    });

    // --- Update section headers ---
    settingsContainer.querySelectorAll('[data-section-name]').forEach(headerRow => {
        const sectionName = headerRow.getAttribute('data-section-name');
        const headerCheckbox = headerRow.querySelector('[data-header-checkbox="true"]');
        if (!sectionName || !headerCheckbox) return;
        const escapedSectionName = sectionName.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        headerCheckbox.checked = !!configText.match(new RegExp(escapedSectionName));
    });

    // Rebind tooltips and input-checkbox handlers
    initializeDynamicSettingTooltips();
    setupInputCheckboxBinding();
}

// -----------------------------
// 2) Sync reference inputs → outputConfig
// -----------------------------
function bindReferenceInputs() {
    const dynamicRefContainer = document.getElementById('dynamicReferenceContainer');
    const staticRefInput = document.getElementById('reference-0');
    if (!dynamicRefContainer || !staticRefInput) return;

    const allInputs = () => [staticRefInput, ...dynamicRefContainer.querySelectorAll('.reference-path-input')];

    allInputs().forEach(input => {
        input.oninput = () => {
            const allRefs = allInputs().map(i => i.value.trim()).filter(v => v);
            const outputConfig = document.getElementById('outputConfig');
            if (!outputConfig) return;

            // Replace existing #reference lines or add new ones
            const lines = outputConfig.value.split(/\r?\n/);
            const otherLines = lines.filter(l => !/^#reference/.test(l));
            const newRefLines = allRefs.map(r => `#reference ${r}`);
            outputConfig.value = [...newRefLines, ...otherLines].join('\n');

            // Update settings list according to first reference
            if (allRefs[0]) {
                checkAndLoadMegaBezelPreset(allRefs[0]);
                lastLoadedSlangpReference = allRefs[0];
            }
        };
    });
}

// -----------------------------
// 3) Initialize two-way binding
// -----------------------------
function initializeReferenceBinding() {
    const outputConfig = document.getElementById('outputConfig');
    if (!outputConfig) return;

    // When outputConfig changes → update reference inputs + settings
    outputConfig.addEventListener('input', () => {
        updateAllSettingsFromConfig();
        bindReferenceInputs(); // rebind dynamic inputs
    });

    // Bind initial reference inputs → outputConfig
    bindReferenceInputs();
}

// -----------------------------
// Call this after page load or after dynamically adding reference inputs
// -----------------------------
initializeReferenceBinding();

document.getElementById("help-button")
    .addEventListener("click", () => {
        const modal = new bootstrap.Modal(document.getElementById("helpModal"));
        modal.show();
    });

    document.getElementById("themes-button")
    .addEventListener("click", () => {
        const modal = new bootstrap.Modal(document.getElementById("uiThemesModal"));
        modal.show();
    });

// -------------------------------
// MODAL NAVIGATION
// -------------------------------
const navButton = document.getElementById('quickNavButton');
const quickNavModalElement = document.getElementById('quickNavModal');
const linksContainer = document.getElementById('modal-links-container');
const myModal = new bootstrap.Modal(quickNavModalElement);

navButton.onclick = () => {
    generateNavLinks();
    myModal.show();
};

    function generateNavLinks() {
        linksContainer.innerHTML = '';
        document.querySelectorAll('.setting-row[data-section-name]').forEach((section, index) => {
            const sectionId = 'section-' + index;
            section.id = sectionId;

            const sectionTitle = section.getAttribute('data-section-name').replace(/\[|\]/g, '');
            const link = document.createElement('a');
            link.href = '#' + sectionId;
            link.textContent = sectionTitle;
            link.classList.add('modal-setting-row-link');
            link.onclick = e => {
                e.preventDefault();
                myModal.hide();
                window.location.hash = sectionId;
            };
            linksContainer.appendChild(link);
        });

        linksContainer.querySelectorAll('.modal-setting-row-link').forEach(link => {
            link.addEventListener('mouseenter', () => handleHover(link));
            link.addEventListener('mouseleave', () => handleLeave(link));
        });
    }

// -------------------------------
// COLOR PICKER LOGIC
// -------------------------------
const previewBezelColor = document.querySelector('.bezel-color');

function syncColorFromText() {
    const inputValue = colorTextInput.value.trim();
    if (inputValue === '') {
        colorPickerInput.value = '';
        previewBezelColor.style.background = '';
        colorPickerInput.style.backgroundColor = '#000';
        performConversionFromText();
        colorMessage('');
        return;
    }

    if (detectColorFormat(inputValue) !== 'Unknown') {
        const newHex = colorcolor(inputValue, 'hex').toUpperCase();
        const rgb = colorcolor(inputValue, 'rgb');
        colorPickerInput.style.backgroundColor = rgb;
        previewBezelColor.style.background = rgb;
        colorPickerInput.value = newHex;
        performConversionFromText();
        colorMessage(inputValue);
    }
}

colorTextInput.addEventListener('input', syncColorFromText);
colorPickerInput.addEventListener('input', () => {
    colorTextInput.value = colorPickerInput.value.toUpperCase();
    const rgb = colorcolor(colorPickerInput.value, 'rgb');
    colorPickerInput.style.backgroundColor = rgb;
    previewBezelColor.style.background = rgb;
    performConversionFromText();
    colorMessage(colorPickerInput.value);
});

// -------------------------------
// CLEAR & ADD LABELS BUTTONS
// -------------------------------
document.getElementById('clearAllButton')?.addEventListener('click', clearAllInputs);
document.getElementById('addLabelsButton')?.addEventListener('click', addLabels);

// -------------------------------
// MERGED CONFIG LOGIC
// -------------------------------
const mergedOutputConfig = document.getElementById('mergedOutputConfig');
const mergeConfigButton = document.getElementById('mergeConfigButton');
const mergeConfigInput = document.getElementById('mergeConfigInput');
const mergedConfigWrapper = document.getElementById('mergedWrapper');

mergedOutputConfig.addEventListener('input', () => {
    mergedConfigWrapper.classList.toggle('hidden', mergedOutputConfig.value.trim().length === 0);
});

mergeConfigButton?.addEventListener('click', () => mergeConfigInput.click());
mergeConfigInput?.addEventListener('change', mergePresetFile);

function updateMergeVisibility() {
    const empty = outputConfig.value.trim().length === 0;
    
    // Toggle both the merge button and the merged output wrapper
    mergeConfigButton.classList.toggle('hidden', empty);
    mergedConfigWrapper.classList.toggle('hidden', empty);

    // Clear the merged output if outputConfig is empty
    if (empty) mergedOutputConfig.value = '';
}

// Call whenever outputConfig changes
outputConfig.addEventListener('input', updateMergeVisibility);

// Also call once on load in case it's empty initially
updateMergeVisibility();

    // -------------------------------
    // OWL CAROUSEL INIT
    // -------------------------------
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin: 12,
        nav:true,
        items: 3,
        slideBy: 3,
        mouseDrag: false
    });
});