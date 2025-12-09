const colorDatabase = {
    "Atari 2600": [
        { name: "Console Case (Dark Gray)", hex: "#242323", rgb: "rgb(36, 35, 35)", hsl: "hsl(0deg, 1%, 14%)", hsb: "hsb(0deg, 3%, 14%)" },
        { name: "Wood Grain (Brown)", hex: "#946E4A", rgb: "rgb(148, 110, 74)", hsl: "hsl(29deg, 33%, 44%)", hsb: "hsb(29deg, 50%, 58%)" },
        { name: "Fire Button/Accent (Orange)", hex: "#FF9233", rgb: "rgb(255, 146, 51)", hsl: "hsl(28deg, 100%, 60%)", hsb: "hsb(28deg, 80%, 100%)" }
    ],
    "Dreamcast": [
        { name: "Japan Swirl (Orange)", hex: "#ED8332", rgb: "rgb(237, 131, 50)", hsl: "hsl(26deg, 84%, 56%)", hsb: "hsb(26deg, 79%, 93%)" },
        { name: "NTSC Swirl (Red)", hex: "#CF3311", rgb: "rgb(207, 51, 17)", hsl: "hsl(11deg, 85%, 44%)", hsb: "hsb(11deg, 92%, 81%)" },
        { name: "PAL Swirl (Blue)", hex: "#3A75C2", rgb: "rgb(58, 117, 194)", hsl: "hsl(214deg, 54%, 49%)", hsb: "hsb(214deg, 70%, 76%)" },
        { name: "Case Plastic (Gray)", hex: "#BDBAB1", rgb: "rgb(189, 186, 177)", hsl: "hsl(45deg, 8%, 72%)", hsb: "hsb(45deg, 6%, 74%)" }
    ],
    "Famicom": [
        { name: "Console Case (Off-White/Beige)", hex: "#EBE7E0", rgb: "rgb(235, 231, 224)", hsl: "hsl(340deg, 30%, 93%)", hsb: "hsb(340deg, 5%, 95%)" },
        { name: "Console Accent (Red)", hex: "#AD0001", rgb: "rgb(173, 0, 1)", hsl: "hsl(350deg, 100%, 45%)", hsb: "hsb(350deg, 100%, 89%)" },
        { name: "Controller Face (Gold)", hex: "#F2DAA6", rgb: "rgb(242, 218, 166)", hsl: "hsl(48deg, 97%, 48%)", hsb: "hsb(48deg, 98%, 94%)" },
        { name: "Controller Buttons (Black)", hex: "#1F201D", rgb: "rgb(31, 32, 29)", hsl: "hsl(80deg, 5%, 12%)", hsb: "hsb(80deg, 3%, 12%)" }
    ],
    "GameCube": [
        { name: "Indigo (Purple)", hex: "#4E4480", rgb: "rgb(78, 68, 128)", hsl: "hsl(250deg, 31%, 38%)", hsb: "hsb(250deg, 47%, 50%)" },
        { name: "Spice (Orange)", hex: "#FF781F", rgb: "rgb(255, 120, 31)", hsl: "hsl(24deg, 100%, 56%)", hsb: "hsb(24deg, 88%, 100%)" },
        { name: "Platinum (Gray)", hex: "#ADADAD", rgb: "rgb(173, 173, 173)", hsl: "hsl(0deg, 0%, 68%)", hsb: "hsb(0deg, 0%, 68%)" },
        { name: "Jet Black (Black)", hex: "#262626", rgb: "rgb(38, 38, 38)", hsl: "hsl(0deg, 0%, 15%)", hsb: "hsb(0deg, 0%, 15%)" }
    ],
    "Nintendo 64": [
        { name: "Console Case (Charcoal Gray)", hex: "#424041", rgb: "rgb(66, 64, 65)", hsl: "hsl(330deg, 2%, 25%)", hsb: "hsb(330deg, 3%, 26%)" },
        { name: "Controller Shell 1 (Light Gray)", hex: "#C7C3C5", rgb: "rgb(199, 195, 197)", hsl: "hsl(330deg, 3%, 77%)", hsb: "hsb(330deg, 2%, 78%)" },
        { name: "Controller Shell 2 (Atomic Purple)", hex: "#836987", rgb: "rgb(131, 105, 135)", hsl: "hsl(292deg, 13%, 47%)", hsb: "hsb(292deg, 22%, 53%)" }
    ],
    "NES": [
        { name: "Console Case (Light Gray)", hex: "#E5E5E5", rgb: "rgb(229, 229, 229)", hsl: "hsl(0deg, 0%, 90%)", hsb: "hsb(0deg, 0%, 90%)" },
        { name: "Button Panel (Charcoal)", hex: "#A5A2A2", rgb: "rgb(165, 162, 162)", hsl: "hsl(0deg, 2%, 64%)", hsb: "hsb(0deg, 2%, 65%)" },
        { name: "Accent Plastic (Black)", hex: "#0D0C0C", rgb: "rgb(13, 12, 12)", hsl: "hsl(0deg, 4%, 5%)", hsb: "hsb(0deg, 8%, 5%)" },
        { name: "A/B Buttons (Maroon)", hex: "#DD2020", rgb: "rgb(221, 32, 32)", hsl: "hsl(0deg, 75%, 50%)", hsb: "hsb(0deg, 86%, 87%)" }
    ],
    "PlayStation": [
        { name: "PlayStation Shell (Light Gray)", hex: "#A8A5A6", rgb: "rgb(168, 165, 166)", hsl: "hsl(340deg, 2%, 65%)", hsb: "hsb(340deg, 2%, 66%)" },
        { name: "PS One Shell (Bright White)", hex: "#D5DDED", rgb: "rgb(213, 221, 237)", hsl: "hsl(220deg, 40%, 88%)", hsb: "hsb(220deg, 10%, 93%)" },
        { name: "Midnight Blue Shell (Dark Blue)", hex: "#1D315C", rgb: "rgb(29, 49, 92)", hsl: "hsl(221deg, 52%, 24%)", hsb: "hsb(221deg, 68%, 36%)" }
    ],
    "PlayStation 2": [
        { name: "Logo Accent 1 (Cyan)", hex: "#09B2CF", rgb: "rgb(9, 178, 207)", hsl: "hsl(189deg, 92%, 42%)", hsb: "hsb(189deg, 96%, 81%)" },
        { name: "Logo Accent 2 (Sky Blue)", hex: "#1C80B3", rgb: "rgb(28, 128, 179)", hsl: "hsl(200deg, 73%, 41%)", hsb: "hsb(200deg, 84%, 70%)" },
        { name: "Logo Accent 3 (Blue)", hex: "#2F4F98", rgb: "rgb(47, 79, 152)", hsl: "hsl(222deg, 53%, 39%)", hsb: "hsb(222deg, 69%, 60%)" },
        { name: "Console Case (Black)", hex: "#212129", rgb: "rgb(33, 33, 41)", hsl: "hsl(240deg, 11%, 15%)", hsb: "hsb(240deg, 20%, 16%)" }
    ],
    "Super Famicom": [
        { name: "A Button (Red)", hex: "#E50024", rgb: "rgb(229, 0, 36)", hsl: "hsl(0deg, 75%, 50%)", hsb: "hsb(0deg, 86%, 87%)" },
        { name: "B Button (Yellow)", hex: "#FFFF00", rgb: "rgb(255, 255, 0)", hsl: "hsl(47deg, 100%, 50%)", hsb: "hsb(47deg, 100%, 100%)" },
        { name: "X Button (Blue)", hex: "#2F17D6", rgb: "rgb(47, 23, 214)", hsl: "hsl(214deg, 54%, 49%)", hsb: "hsb(214deg, 70%, 76%)" },
        { name: "Y Button (Green)", hex: "#008A60", rgb: "rgb(0, 138, 96)", hsl: "hsl(120deg, 42%, 49%)", hsb: "hsb(120deg, 59%, 69%)" }
    ],
    "Super Nintendo": [
        { name: "Console Case (Light Gray)", hex: "#D1D1D1", rgb: "rgb(209, 209, 209)", hsl: "hsl(0deg, 0%, 82%)", hsb: "hsb(0deg, 0%, 82%)" },
        { name: "A/B Buttons (Purple)", hex: "#553A99", rgb: "rgb(85, 58, 153)", hsl: "hsl(257deg, 45%, 41%)", hsb: "hsb(257deg, 62%, 60%)" },
        { name: "X/Y Buttons (Indigo)", hex: "#B5B6E4", rgb: "rgb(181, 182, 228)", hsl: "hsl(239deg, 47%, 80%)", hsb: "hsb(239deg, 21%, 89%)" },
        { name: "D-Pad/Shoulders (Dark Gray)", hex: "#908A99", rgb: "rgb(144, 138, 153)", hsl: "hsl(264deg, 7%, 57%)", hsb: "hsb(264deg, 10%, 60%)" }
    ]
};