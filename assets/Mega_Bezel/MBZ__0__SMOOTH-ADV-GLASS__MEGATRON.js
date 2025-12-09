let settingDefinitions = [
    {
        header: "[ --- HSM MEGA BEZEL V1.17.2_2024-05-18 --- ]",
        settings: [
        { key: "HSM_RESOLUTION_DEBUG_ON", label: "Show Resolution Info", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ CRT BRIGHTNESS & GAMMA ]:",
        settings: [
        { key: "GAMMA_INPUT", label: "Gamma In (Game Embedded Gamma) Def 2.4", default: 2.400000, min: 0.10, max: 5.00, step: 0.05 },
        { key: "gamma_out", label: "Gamma Out (Electron Gun Gamma) Def 2.4", default: 2.400000, min: 0.10, max: 5.00, step: 0.05 },
        { key: "post_br", label: "Post CRT Brightness", default: 1.000000, min: 0.01, max: 5.00, step: 0.01 },
        { key: "post_br_affect_black_level", label: "Post CRT Brightness Affects Grade Black Level", default: 100.000000, min: 0.00, max: 100.00, step: 10.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ GRAPHICS GLOBAL BRIGHTNESS ]:",
        settings: [
        { key: "HSM_GLOBAL_GRAPHICS_BRIGHTNESS", label: "Graphics Brightness", default: 100.000000, min: 0.00, max: 500.00, step: 1.00 },
        { key: "HSM_STATIC_LAYERS_GAMMA", label: "Graphics Gamma Adjust", default: 1.000000, min: 0.01, max: 5.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ AMBIENT LIGHTING ]:",
        settings: [
        { key: "HSM_AMBIENT_LIGHTING_OPACITY", label: "Ambient Global Opacity Multiplier", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_AMBIENT1_OPACITY", label: "Ambient 1st Image Opacity", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_AMBIENT2_OPACITY", label: "Ambient 2nd Image Opacity (Used for BG by Default)", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_AMBIENT_LIGHTING_SWAP_IMAGE_MODE", label: "Which Images to Use: BOTH | 1 ONLY | 2 ONLY | SWAP", default: 0.000000, min: 0.00, max: 3.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ SINDEN LIGHTGUN BORDER ]:",
        settings: [
        { key: "HSM_SINDEN_BORDER_ON", label: "Show Border", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_SINDEN_BORDER_BRIGHTNESS", label: "Brightness", default: 60.000000, min: 0.00, max: 200.00, step: 5.00 },
        { key: "HSM_SINDEN_BORDER_THICKNESS", label: "Thickness", default: 2.000000, min: 0.00, max: 30.00, step: 0.50 },
        { key: "HSM_SINDEN_BORDER_EMPTY_TUBE_COMPENSATION", label: "Compensate Empty Tube", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ VIEWPORT ZOOM ]:",
        settings: [
        { key: "HSM_VIEWPORT_ZOOM", label: "Viewport Zoom", default: 100.000000, min: 10.00, max: 500.00, step: 0.20 },
        { key: "HSM_VIEWPORT_ZOOM_MASK", label: "Zoom CRT Mask", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_VIEWPORT_POSITION_X", label: "Viewport Position X", default: 0.000000, min: -500.00, max: 500.00, step: 1.00 },
        { key: "HSM_VIEWPORT_POSITION_Y", label: "Viewport Position Y", default: 0.000000, min: -500.00, max: 500.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ FLIP & ROTATE ]:",
        settings: [
        { key: "HSM_FLIP_VIEWPORT_VERTICAL", label: "Flip Viewport Vertical", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_FLIP_VIEWPORT_HORIZONTAL", label: "Flip Viewport Horizontal", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_FLIP_CORE_VERTICAL", label: "Flip Core Image Vertical", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_FLIP_CORE_HORIZONTAL", label: "Flip Core Image Horizontal", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_ROTATE_CORE_IMAGE", label: "Rotate CRT Tube --  -1:270 | 0 | 1:90", default: 0.000000, min: -1.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ ASPECT RATIO ]:",
        settings: [
        { key: "HSM_ASPECT_RATIO_ORIENTATION", label: "Orientation - Auto | Horizontal | Vertical", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_ASPECT_RATIO_MODE", label: "Type - Auto | Explicit | 4:3 | 3:2 | 16:9 | PAR | Full", default: 0.000000, min: 0.00, max: 6.00, step: 1.00 },
        { key: "HSM_ASPECT_RATIO_EXPLICIT", label: "Explicit Aspect Ratio (Also Auto Ratio Fallback)", default: 1.333300, min: 0.00, max: 8.00, step: 0.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ CRT SCREEN SCALING GENERAL ]:",
        settings: [
        { key: "HSM_INT_SCALE_MODE", label: "Integer Scale Mode - OFF | ShortAxis | BothAxes", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_VERTICAL_PRESET", label: "Preset is for Monitor Portrait Mode (Smaller CRT Screen)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ INTEGER SCALE ]:",
        settings: [
        { key: "HSM_INT_SCALE_MAX_HEIGHT", label: "Base Integer Scale Max Height %", default: 89.000000, min: 60.00, max: 140.00, step: 0.50 },
        { key: "HSM_INT_SCALE_MULTIPLE_OFFSET", label: "Integer Scale Multiple Offset", default: 0.000000, min: -20.00, max: 20.00, step: 1.00 },
        { key: "HSM_INT_SCALE_MULTIPLE_OFFSET_LONG", label: "Integer Scale Multiple Offset on Long Axis", default: 0.000000, min: -20.00, max: 20.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ NON-INTEGER SCALE PERCENT ]:",
        settings: [
        { key: "HSM_NON_INTEGER_SCALE", label: "Non-Integer Scale %", default: 82.970000, min: 1.00, max: 200.00, step: 0.20 },
        { empty_row: true }
        ]
    },
    {
        header: "[ NON-INTEGER - PHYSICAL SIZES ]:",
        settings: [
        { key: "HSM_USE_PHYSICAL_SIZE_FOR_NON_INTEGER", label: "Use Physical Monitor and Tube Sizes for Non-Integer", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_PHYSICAL_MONITOR_ASPECT_RATIO", label: "Your Monitor's Aspect Ratio", default: 1.770000, min: 0.25, max: 5.00, step: 0.01 },
        { key: "HSM_PHYSICAL_MONITOR_DIAGONAL_SIZE", label: "Your Monitor's Size (Diagonal)", default: 27.000000, min: 1.00, max: 100.00, step: 0.10 },
        { key: "HSM_PHYSICAL_SIM_TUBE_DIAGONAL_SIZE", label: "Simulated Tube Size (Diagonal)", default: 18.100000, min: 1.00, max: 100.00, step: 0.10 },
        { empty_row: true }
        ]
    },
    {
        header: "[ NON-INTEGER - AUTOMATIC SCREEN SCALE & PLACEMENT ]:",
        settings: [
        { key: "HSM_USE_IMAGE_FOR_PLACEMENT", label: "Use Image For Automatic Placement (Scale and Y Pos)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_PLACEMENT_IMAGE_USE_HORIZONTAL", label: "Auto Place Horizontal (X Pos)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_PLACEMENT_IMAGE_MODE", label: "Placement Image Mode: TRANSPARENCY : WHITE ON BLACK", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ NON-INTEGER SCALE OFFSET ]:",
        settings: [
        { key: "HSM_NON_INTEGER_SCALE_OFFSET", label: "Non-Integer Scale Offset", default: 100.000000, min: 5.00, max: 400.00, step: 0.10 },
        { empty_row: true }
        ]
    },
    {
        header: "[ SNAP NON-INTEGER TO CLOSEST INTEGER SCALE ]:",
        settings: [
        { key: "HSM_USE_SNAP_TO_CLOSEST_INT_SCALE", label: "Snap to Closest Integer Scale: OFF | ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_SNAP_TO_CLOSEST_INT_SCALE_TOLERANCE", label: "Snap To Closest Integer Scale Tolerance", default: 20.000000, min: 0.00, max: 300.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ POSITION OFFSET ]:",
        settings: [
        { key: "HSM_SCREEN_POSITION_X", label: "Position X", default: 0.000000, min: -1000.00, max: 1000.00, step: 1.00 },
        { key: "HSM_SCREEN_POSITION_Y", label: "Position Y", default: 0.000000, min: -1000.00, max: 1000.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ CROPPING CORE IMAGE ]:",
        settings: [
        { key: "HSM_CROP_FYI", label: "FYI !!! Negative Crop is currently Disabled", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "HSM_CROP_MODE", label: "Crop Mode  -  OFF | CROP BLACK ONLY | CROP ANY", default: 2.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_CROP_PERCENT_ZOOM", label: "Crop Zoom %", default: 0.000000, min: -50.00, max: 100.00, step: 0.10 },
        { key: "HSM_CROP_PERCENT_TOP", label: "Crop Top %", default: 0.000000, min: -50.00, max: 100.00, step: 0.10 },
        { key: "HSM_CROP_PERCENT_BOTTOM", label: "Crop Bottom %", default: 0.000000, min: -50.00, max: 100.00, step: 0.10 },
        { key: "HSM_CROP_PERCENT_LEFT", label: "Crop Left %", default: 0.000000, min: -50.00, max: 100.00, step: 0.10 },
        { key: "HSM_CROP_PERCENT_RIGHT", label: "Crop Right %", default: 0.000000, min: -50.00, max: 100.00, step: 0.10 },
        { key: "HSM_CROP_BLACK_THRESHOLD", label: "Black Threshold for 'CROP BLACK ONLY'", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- DREZ DOWNSAMPLE FILTER - GUEST.R G-SHARP RESAMPLER --- ]:",
        settings: [
        { key: "HSM_DREZ_GSHARP_ON", label: "G-SHARP ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_DREZ_THRESHOLD_RATIO", label: "Downsample Threshold (Original Res Vs Downsampled Res)", default: 1.500000, min: 1.00, max: 4.00, step: 0.10 },
        { key: "HSM_DREZ_HSHARP0", label: "Filter Range", default: 2.300000, min: 1.00, max: 6.00, step: 0.10 },
        { key: "HSM_DREZ_SIGMA_HV", label: "Gaussian Blur Sigma", default: 0.750000, min: 0.10, max: 7.00, step: 0.05 },
        { key: "HSM_DREZ_SHAR", label: "Sharpness Definition", default: 0.500000, min: 0.00, max: 2.00, step: 0.05 },
        { key: "HSM_DREZ_HAR", label: "Anti-Ringing", default: 0.500000, min: 0.00, max: 1.00, step: 0.10 },
        { empty_row: true }
        ]
    },
    {
        header: "[ CORE RES SAMPLING ]:",
        settings: [
        { key: "HSM_CORE_RES_SAMPLING_MULT_SCANLINE_DIR", label: "Scanline Dir Multiplier", default: 100.000000, min: 25.00, max: 1600.00, step: 25.00 },
        { key: "HSM_DOWNSAMPLE_BLUR_SCANLINE_DIR", label: "Scanline Dir Downsample Blur", default: 0.000000, min: 0.00, max: 200.00, step: 1.00 },
        { key: "HSM_CORE_RES_SAMPLING_MULT_OPPOSITE_DIR", label: "Opposite Dir Multiplier", default: 100.000000, min: 25.00, max: 1600.00, step: 25.00 },
        { key: "HSM_DOWNSAMPLE_BLUR_OPPOSITE_DIR", label: "Opposite Dir Downsample Blur", default: 0.000000, min: 0.00, max: 200.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ FAST SHARPEN - GUEST.R ]:",
        settings: [
        { key: "SHARPEN_ON", label: "FSharpen - ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "CSHARPEN", label: "FSharpen - Sharpen strength", default: 0.000000, min: 0.00, max: 5.00, step: 0.10 },
        { key: "CCONTR", label: "FSharpen - Sharpen Contrast/Ringing", default: 0.050000, min: 0.00, max: 0.25, step: 0.01 },
        { key: "CDETAILS", label: "FSharpen - Details sharpened", default: 1.000000, min: 0.00, max: 1.00, step: 0.05 },
        { key: "DEBLUR", label: "FSharpen - Deblur Strength (For NTSC Only)", default: 1.000000, min: 1.00, max: 7.00, step: 0.25 },
        { empty_row: true }
        ]
    },
    {
        header: "[ SCANLINES & INTERLACING( By Guest.r) ]:",
        settings: [
        { key: "HSM_SCANLINE_DIRECTION", label: "Scanline Direction - Auto | Horiz | Vert", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "hiscan", label: "High Resolution Scanlines (ScaleFx or XBR Only)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "no_scanlines", label: "No-Scanline Mode (Guest Advanced Only)", default: 0.000000, min: 0.00, max: 1.50, step: 0.05 },
        { key: "HSM_INTERLACE_SUPPORT1", label: "[  Interlace Mode: What Happens if Vertical Res > Trigger Res ]", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "HSM_INTERLACE_SUPPORT2", label: "[ -1:NO SCANLN 0:NO LACE 1-3:NORM LACE 4-5:INTERPOLATE FIELDS ]", default: 0.000000, min: 0.00, max: 0.00, step: 1.00 },
        { key: "HSM_INTERLACE_MODE", label: "Interlace Mode:", default: 4.000000, min: -1.00, max: 5.00, step: 1.00 },
        { key: "HSM_INTERLACE_TRIGGER_RES", label: "Trigger Res for Interlace, Fake Scanlines & VGA", default: 375.000000, min: 100.00, max: 2000.00, step: 25.00 },
        { key: "HSM_INTERLACE_EFFECT_SMOOTHNESS_INTERS", label: "Interlace Effect Smoothness", default: 0.000000, min: 0.00, max: 100.00, step: 10.00 },
        { key: "HSM_INTERLACE_SCANLINE_EFFECT", label: "Interlace Scanline Effect ('Laced brightness)", default: 0.200000, min: 0.00, max: 1.00, step: 0.05 },
        { key: "iscans", label: "Interlace (Scanline) Saturation", default: 0.250000, min: 0.00, max: 1.00, step: 0.05 },
        { key: "vga_mode", label: "VGA Single/Double Scan mode", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ FAKE SCANLINES ]",
        settings: [
        { key: "HSM_FAKE_SCANLINE_MODE", label: "Show Fake Scanlines - OFF | ON | USE TRIGGER RES", default: 2.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_FAKE_SCANLINE_OPACITY", label: "Opacity - Def 70", default: 0.000000, min: 0.00, max: 100.00, step: 5.00 },
        { key: "HSM_FAKE_SCANLINE_RES_MODE", label: "Scan Resolution Mode: AUTO (CORE RES) : EXPLICIT", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_FAKE_SCANLINE_RES", label: "Explicit Scan Resolution", default: 240.000000, min: 0.00, max: 480.00, step: 8.00 },
        { key: "HSM_FAKE_SCANLINE_INT_SCALE", label: "Int Scale Scanlines", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_FAKE_SCANLINE_ROLL", label: "Rolling Scanline", default: 0.000000, min: -100.00, max: 100.00, step: 1.00 },
        { key: "HSM_FAKE_SCANLINE_CURVATURE", label: "Scanline Curvature", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ OVERSCAN & RASTER BLOOM ]:",
        settings: [
        { key: "HSM_OVERSCAN_AMOUNT", label: "Overscan %", default: 0.000000, min: -50.00, max: 100.00, step: 0.50 },
        { key: "HSM_OVERSCAN_X", label: "Overscan X %", default: 0.000000, min: -50.00, max: 100.00, step: 0.50 },
        { key: "HSM_OVERSCAN_Y", label: "Overscan Y %", default: 0.000000, min: -50.00, max: 100.00, step: 0.50 },
        { key: "HSM_OVERSCAN_RASTER_BLOOM_ON", label: "Raster Bloom ON -- (Scaling based on average luma)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_OVERSCAN_RASTER_BLOOM_MODE", label: "Raster Bloom Overscan Mode", default: 2.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_OVERSCAN_RASTER_BLOOM_AMOUNT", label: "Raster Bloom %", default: 5.000000, min: 0.00, max: 20.00, step: 1.00 },
        { key: "HSM_OVERSCAN_RASTER_BLOOM_NEUTRAL_RANGE", label: "Raster Bloom Overscan Neutral Area", default: 0.300000, min: 0.00, max: 1.00, step: 0.05 },
        { key: "HSM_OVERSCAN_RASTER_BLOOM_NEUTRAL_RANGE_CENTER", label: "Raster Bloom Overscan Neutral Area Center", default: 0.500000, min: 0.00, max: 1.00, step: 0.05 },
        { empty_row: true }
        ]
    },
    {
        header: "[ CURVATURE ]:",
        settings: [
        { key: "HSM_CURVATURE_MODE", label: "Curvature Mode  OFF | 2D | 2D-CYL | 3D-1 | 3D-2 | 3D CYL", default: 1.000000, min: 0.00, max: 5.00, step: 1.00 },
        { key: "HSM_CURVATURE_2D_SCALE_LONG_AXIS", label: "2D Curvature on Long Axis", default: 100.000000, min: 5.00, max: 400.00, step: 5.00 },
        { key: "HSM_CURVATURE_2D_SCALE_SHORT_AXIS", label: "2D Curvature on Short Axis", default: 100.000000, min: 5.00, max: 400.00, step: 5.00 },
        { key: "HSM_CURVATURE_3D_RADIUS", label: "3D Radius", default: 200.000000, min: 16.00, max: 102400.00, step: 1.00 },
        { key: "HSM_CURVATURE_3D_VIEW_DIST", label: "3D View Distance - Def 150", default: 150.000000, min: 50.00, max: 102400.00, step: 5.00 },
        { key: "HSM_CURVATURE_3D_TILT_ANGLE_X", label: "3D Tilt Angle X", default: 0.000000, min: -120.00, max: 120.00, step: 1.00 },
        { key: "HSM_CURVATURE_3D_TILT_ANGLE_Y", label: "3D Tilt Angle Y", default: 0.000000, min: -120.00, max: 120.00, step: 1.00 },
        { key: "HSM_CRT_CURVATURE_SCALE", label: "CRT Curvature Scale Multiplier: 0 = Less Moire Artifacts", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ Signal-Noise ]:",
        settings: [
        { key: "HSM_SIGNAL_NOISE_ON", label: "Signal Noise ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_SIGNAL_NOISE_AMOUNT", label: "Amount", default: 0.200000, min: -1.00, max: 1.00, step: 0.02 },
        { key: "HSM_SIGNAL_NOISE_BLACK_LEVEL", label: "Contrast", default: 100.000000, min: 0.00, max: 300.00, step: 5.00 },
        { key: "HSM_SIGNAL_NOISE_SIZE_MODE", label: "Noise Resolution Mode:  SCANLINE | CORE | SMOOTHED", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_SIGNAL_NOISE_SIZE_MULT", label: "Size Mult", default: 0.500000, min: 0.50, max: 4.00, step: 0.50 },
        { key: "HSM_SIGNAL_NOISE_TYPE", label: "Noise Type:  LUMA ADD | COLORED", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ ANTI-FLICKER ]:",
        settings: [
        { key: "HSM_ANTI_FLICKER_ON", label: "Anti-Flicker ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_ANTI_FLICKER_THRESHOLD", label: "Luma Difference Threshold", default: 25.000000, min: 0.00, max: 100.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ GRAPHICS CACHE ]:",
        settings: [
        { key: "HSM_CACHE_GRAPHICS_ON", label: "Cache Graphics: OFF | ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_CACHE_UPDATE_INDICATOR_MODE", label: "Cache Update Indicator: OFF | ON | ONLY IF CACHE IS OFF", default: 2.000000, min: 0.00, max: 2.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ A/B SPLITSCREEN COMPARE ]:",
        settings: [
        { key: "HSM_AB_COMPARE_SHOW_MODE", label: "Show:  CRT SHADER | ORIGINAL", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AB_COMPARE_AREA", label: "Compare Area:  LEFT | RIGHT | TOP | BOTTOM", default: 0.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_AB_COMPARE_SPLIT_POSITION", label: "Splitscreen Position", default: 50.000000, min: 0.00, max: 100.00, step: 0.20 },
        { key: "HSM_AB_COMPARE_FREEZE_CRT_TUBE", label: "Freeze CRT Tube (Freeze Left, New changes on Right)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AB_COMPARE_FREEZE_GRAPHICS", label: "Freeze Graphics (Freeze Left, New changes on Right)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ SHOW PASS (For Debugging) ]:",
        settings: [
        { key: "HSM_SHOW_PASS_INDEX_INFO1", label: "0:END | 1:REFLECTION | 2:TUBE | 3:CRT", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "HSM_SHOW_PASS_INDEX_INFO2", label: "4:INTERLACE | 5:COLOR CORRECT & UPSCALE", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "HSM_SHOW_PASS_INDEX_INFO3", label: "6:DEDITHER | 7:DREZ | 8:CORE", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "HSM_SHOW_PASS_INDEX_INFO4", label: "9:LAYERS TOP | 10:LAYERS BOTTOM", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "HSM_SHOW_PASS_INDEX", label: "Show Pass Index", default: 0.000000, min: 0.00, max: 10.00, step: 1.00 },
        { key: "HSM_SHOW_PASS_APPLY_SCREEN_COORD", label: "Apply Screen Scale & Curvature to Unscaled Passes", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_SHOW_PASS_ALPHA", label: "Show Alpha Channel", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ SCREEN VIGNETTE ]:",
        settings: [
        { key: "HSM_SCREEN_VIGNETTE_ON", label: "Use Vignette", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_SCREEN_VIGNETTE_DUALSCREEN_VIS_MODE", label: "Dual Screen Visibility - BOTH | SCREEN 1 | SCREEN 2", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_SCREEN_VIGNETTE_STRENGTH", label: "Amount (Strength)", default: 40.000000, min: 0.00, max: 98.00, step: 2.00 },
        { key: "HSM_SCREEN_VIGNETTE_POWER", label: "Corner Amount (Power)", default: 26.000000, min: 0.00, max: 200.00, step: 2.00 },
        { key: "HSM_SCREEN_VIGNETTE_IN_REFLECTION", label: "Amount of Vignette in Reflection", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ MONOCHROME ]:",
        settings: [
        { key: "HSM_MONOCHROME_MODE", label: "Monochrome Color: OFF | BW | AMBER | GREEN", default: 0.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_MONOCHROME_BRIGHTNESS", label: "Monochrome Brightness", default: 100.000000, min: 1.00, max: 500.00, step: 1.00 },
        { key: "HSM_MONOCHROME_GAMMA", label: "Monochrome Gamma", default: 1.000000, min: 0.10, max: 5.00, step: 0.10 },
        { key: "HSM_MONOCHROME_HUE_OFFSET", label: "Monochrome Hue Offset", default: 0.000000, min: -180.00, max: 180.00, step: 1.00 },
        { key: "HSM_MONOCHROME_SATURATION", label: "Monochrome Saturation", default: 100.000000, min: -100.00, max: 200.00, step: 1.00 },
        { key: "HSM_MONOCHROME_DUALSCREEN_VIS_MODE", label: "Dual Screen Visibility - BOTH | SCREEN 1 | SCREEN 2", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ TUBE ASPECT & EMPTY SPACE ]:",
        settings: [
        { key: "HSM_TUBE_DIFFUSE_FORCE_ASPECT", label: "Tube Aspect - EVEN | SCREEN | Explicit", default: 1.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_TUBE_EXPLICIT_ASPECT", label: "Explicit Tube Aspect", default: 1.333300, min: 0.50, max: 3.00, step: 0.01 },
        { key: "HSM_TUBE_EMPTY_THICKNESS", label: "Empty Tube Thickness", default: 0.000000, min: 0.00, max: 6000.00, step: 10.00 },
        { key: "HSM_TUBE_EMPTY_THICKNESS_X_SCALE", label: "Empty Tube Thicknes X Scale", default: 100.000000, min: 0.00, max: 3000.00, step: 1.00 },
        { key: "HSM_SCREEN_CORNER_RADIUS_SCALE", label: "Screen (Game Image) Corner Radius Scale", default: 100.000000, min: 5.00, max: 3000.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ TUBE DIFFUSE IMAGE ]:",
        settings: [
        { key: "HSM_TUBE_DIFFUSE_MODE", label: "Tube Diffuse Color - BLACK | IMAGE | TRANSPARENT", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_AMOUNT", label: "Amount", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_DUALSCREEN_VIS_MODE", label: "Dual Screen Visibility - BOTH | SCREEN 1 | SCREEN 2", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_COLORIZE_ON", label: "Colorize On", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_HUE", label: "Hue Offset", default: 0.000000, min: 0.00, max: 360.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_SATURATION", label: "Saturation", default: 100.000000, min: 0.00, max: 200.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_BRIGHTNESS", label: "Brightness", default: 15.000000, min: 0.00, max: 500.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_GAMMA", label: "Gamma Adjust", default: 1.000000, min: 0.00, max: 5.00, step: 0.01 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_AMBIENT_LIGHTING", label: "Ambient Lighting Multiplier", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_AMBIENT2_LIGHTING", label: "Ambient 2nd Image Lighting Multiplier", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_SCALE", label: "Image Scale", default: 140.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_SCALE_X", label: "Image Scale X", default: 100.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_TUBE_DIFFUSE_IMAGE_ROTATION", label: "Image Rotation: -1: 270 | 0 | 1: 90", default: 0.000000, min: -1.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ TUBE SHADOW IMAGE ]:",
        settings: [
        { key: "HSM_TUBE_SHADOW_IMAGE_ON", label: "Tube Shadow Image - OFF | ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_TUBE_SHADOW_IMAGE_OPACITY", label: "Opacity", default: 60.000000, min: 0.00, max: 100.00, step: 2.00 },
        { key: "HSM_TUBE_SHADOW_IMAGE_POS_X", label: "Position X", default: 0.000000, min: -500.00, max: 500.00, step: 0.10 },
        { key: "HSM_TUBE_SHADOW_IMAGE_POS_Y", label: "Position Y", default: 9.000000, min: -500.00, max: 500.00, step: 0.10 },
        { key: "HSM_TUBE_SHADOW_IMAGE_SCALE_X", label: "Scale X", default: 122.000000, min: 0.00, max: 1000.00, step: 0.10 },
        { key: "HSM_TUBE_SHADOW_IMAGE_SCALE_Y", label: "Scale Y", default: 130.000000, min: 0.00, max: 1000.00, step: 0.10 },
        { key: "HSM_TUBE_SHADOW_CURVATURE_SCALE", label: "Curvature Scale", default: 300.000000, min: 0.00, max: 2000.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ TUBE GLASS STATIC REFLECTION IMAGE ]:",
        settings: [
        { key: "HSM_TUBE_STATIC_REFLECTION_IMAGE_ON", label: "Use Tube Static Reflection Image - OFF | ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_REFLECTION_IMAGE_DUALSCREEN_VIS_MODE", label: "Dual Screen Visibility - BOTH | SCREEN 1 | SCREEN 2", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_REFLECTION_IMAGE_OPACITY", label: "Opacity", default: 14.000000, min: 0.00, max: 100.00, step: 0.10 },
        { key: "HSM_TUBE_STATIC_OPACITY_DIFFUSE_MULTIPLY", label: "Multiply Opacity by Diffuse Amount", default: 25.000000, min: 0.00, max: 100.00, step: 5.00 },
        { key: "HSM_TUBE_STATIC_BLACK_LEVEL", label: "Black Level", default: 25.000000, min: -100.00, max: 100.00, step: 0.50 },
        { key: "HSM_TUBE_STATIC_AMBIENT_LIGHTING", label: "Ambient Lighting Multiplier", default: 60.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_AMBIENT2_LIGHTING", label: "Ambient 2nd Image Lighting Multiplier", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_SCALE", label: "Scale", default: 120.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_SCALE_X", label: "Scale X", default: 100.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_POS_X", label: "Pos X", default: 10.000000, min: -500.00, max: 500.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_POS_Y", label: "Pos Y", default: 10.000000, min: -500.00, max: 500.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_SHADOW_OPACITY", label: "Shadow Opacity", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_DITHER_SAMPLES", label: "Noise Samples (Reduces Banding)", default: 0.000000, min: 0.00, max: 10.00, step: 1.00 },
        { key: "HSM_TUBE_STATIC_DITHER_DISTANCE", label: "Noise Distance", default: 5.000000, min: 0.00, max: 10.00, step: 0.50 },
        { key: "HSM_TUBE_STATIC_DITHER_AMOUNT", label: "Noise Amount", default: 0.600000, min: 0.00, max: 10.00, step: 0.10 },
        { empty_row: true }
        ]
    },
    {
        header: "[ CRT & TUBE BLENDING ]:",
        settings: [
        { key: "HSM_TUBE_OPACITY", label: "Tube Opacity", default: 100.000000, min: 0.00, max: 100.00, step: 0.10 },
        { key: "HSM_CRT_BLEND_MODE", label: "CRT Blend Mode: OFF | ADD | MULTIPLY", default: 1.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_CRT_BLEND_AMOUNT", label: "CRT Blend Amount", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ TUBE COLORED GEL IMAGE GENERAL ]:",
        settings: [
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_ON", label: "Use Tube Colored Gel - OFF | ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_SCALE", label: "Scale", default: 100.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_FLIP_HORIZONTAL", label: "Flip Horizontal", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_FLIP_VERTICAL", label: "Flip Vertical", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_DUALSCREEN_VIS_MODE", label: "Dual Screen Visibility - BOTH | SCREEN 1 | SCREEN 2", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_MULTIPLY_AMOUNT", label: "Multiply Blend Amount", default: 90.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_ADDITIVE_AMOUNT", label: "Additive Blend Amount", default: 0.000000, min: 0.00, max: 100.00, step: 0.05 },
        { empty_row: true }
        ]
    },
    {
        header: "[ TUBE COLORED GEL NORMAL BLEND ]:",
        settings: [
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_NORMAL_AMOUNT", label: "Blend Amount", default: 15.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_TRANSPARENCY_THRESHOLD", label: "Transparency Threshold", default: 23.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_NORMAL_BRIGHTNESS", label: "Brightness", default: 100.000000, min: 0.00, max: 200.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_NORMAL_VIGNETTE", label: "Vignette Amount", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_FAKE_SCANLINE_AMOUNT", label: "Fake Scanline Amount", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_AMBIENT_LIGHTING", label: "Ambient Lighting Multiplier", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_TUBE_COLORED_GEL_IMAGE_AMBIENT2_LIGHTING", label: "Ambient 2nd Image Lighting Multiplier", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ SCREEN BLACK EDGE ]:",
        settings: [
        { key: "HSM_GLOBAL_CORNER_RADIUS", label: "Global Corner Radius - Def 10", default: 10.000000, min: 4.00, max: 500.00, step: 2.00 },
        { key: "HSM_TUBE_BLACK_EDGE_CORNER_RADIUS_SCALE", label: "Black Edge Corner Radius Scale", default: 100.000000, min: 10.00, max: 8000.00, step: 10.00 },
        { key: "HSM_TUBE_BLACK_EDGE_SHARPNESS", label: "Black Edge Sharpness - Def 70", default: 70.000000, min: 0.00, max: 90.00, step: 1.00 },
        { key: "HSM_TUBE_BLACK_EDGE_CURVATURE_SCALE", label: "Black Edge Curvature Scale Multiplier", default: 100.000000, min: 20.00, max: 8000.00, step: 10.00 },
        { key: "HSM_TUBE_BLACK_EDGE_THICKNESS", label: "Black Edge Thickness", default: 100.000000, min: -800.00, max: 6000.00, step: 5.00 },
        { key: "HSM_TUBE_BLACK_EDGE_THICKNESS_X_SCALE", label: "Black Edge Thickness X Scale", default: 100.000000, min: 0.00, max: 3000.00, step: 10.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ DUAL SCREEN ]:",
        settings: [
        { key: "HSM_DUALSCREEN_MODE", label: "Dual Screen Mode - OFF | VERTICAL | HORIZONTAL", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_DUALSCREEN_CORE_IMAGE_SPLIT_MODE", label: "Core Image Split Mode  - AUTO | VERTICAL | HORIZONTAL", default: 1.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_DUALSCREEN_CORE_IMAGE_SWAP_SCREENS", label: "Core Image Swap Screen Content", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_DUALSCREEN_CORE_IMAGE_SPLIT_OFFSET", label: "Core Image Split Offset", default: 0.000000, min: -100.00, max: 100.00, step: 1.00 },
        { key: "HSM_DUALSCREEN_VIEWPORT_SPLIT_LOCATION", label: "Viewport Split Offset", default: 0.000000, min: -500.00, max: 500.00, step: 1.00 },
        { key: "HSM_DUALSCREEN_SHIFT_POSITION_WITH_SCALE", label: "Scale Screens from Center of Split", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_DUALSCREEN_POSITION_OFFSET_BETWEEN_SCREENS", label: "Position Offset Between Screens", default: 0.000000, min: -250.00, max: 250.00, step: 0.20 },
        { key: "HSM_2ND_SCREEN_ASPECT_RATIO_MODE", label: "2nd Screen Aspect Ratio Mode - Same as 1st Screen | PAR", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_2ND_SCREEN_INDEPENDENT_SCALE", label: "2nd Screen Use Independent Scale", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_2ND_SCREEN_SCALE_OFFSET", label: "2nd Screen Scale Offset", default: 100.000000, min: 1.00, max: 500.00, step: 0.50 },
        { key: "HSM_2ND_SCREEN_POS_X", label: "2nd Screen Pos X", default: 0.000000, min: -500.00, max: 500.00, step: 1.00 },
        { key: "HSM_2ND_SCREEN_POS_Y", label: "2nd Screen Pos Y", default: 0.000000, min: -500.00, max: 500.00, step: 1.00 },
        { key: "HSM_2ND_SCREEN_CROP_PERCENT_ZOOM", label: "2nd Screen Crop Zoom %", default: 0.000000, min: -10.00, max: 100.00, step: 0.10 },
        { key: "HSM_2ND_SCREEN_CROP_PERCENT_TOP", label: "2nd Screen Crop Top %", default: 0.000000, min: -10.00, max: 100.00, step: 0.10 },
        { key: "HSM_2ND_SCREEN_CROP_PERCENT_BOTTOM", label: "2nd Screen Crop Bottom %", default: 0.000000, min: -10.00, max: 100.00, step: 0.10 },
        { key: "HSM_2ND_SCREEN_CROP_PERCENT_LEFT", label: "2nd Screen Crop Left %", default: 0.000000, min: -10.00, max: 100.00, step: 0.10 },
        { key: "HSM_2ND_SCREEN_CROP_PERCENT_RIGHT", label: "2nd Screen Crop Right %", default: 0.000000, min: -10.00, max: 100.00, step: 0.10 },
        { empty_row: true }
        ]
    },
    {
        header: "[ REFLECTION POSITION & SCALE ]:",
        settings: [
        { key: "HSM_SCREEN_REFLECTION_SCALE", label: "Screen Reflection Scale", default: 100.000000, min: 1.00, max: 300.00, step: 1.00 },
        { key: "HSM_SCREEN_REFLECTION_POS_X", label: "Screen Reflection Pos X", default: 0.000000, min: -100.00, max: 100.00, step: 1.00 },
        { key: "HSM_SCREEN_REFLECTION_POS_Y", label: "Screen Reflection Pos Y", default: 0.000000, min: -100.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ AMBIENT LIGHTING IMAGE 1 ]:",
        settings: [
        { key: "HSM_AMBIENT1_HUE", label: "Hue", default: 0.000000, min: -180.00, max: 180.00, step: 1.00 },
        { key: "HSM_AMBIENT1_SATURATION", label: "Saturation", default: 100.000000, min: 0.00, max: 300.00, step: 1.00 },
        { key: "HSM_AMBIENT1_VALUE", label: "Value", default: 120.000000, min: 0.00, max: 400.00, step: 1.00 },
        { key: "HSM_AMBIENT1_CONTRAST", label: "Contrast", default: 100.000000, min: 0.00, max: 200.00, step: 0.50 },
        { key: "HSM_AMBIENT1_SCALE_KEEP_ASPECT", label: "Scale Aspect - MATCH VIEWPORT | USE TEXURE ASPECT", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT1_SCALE_INHERIT_MODE", label: "Scale Inheritance - OFF | ZOOM | TUBE", default: 2.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_AMBIENT1_SCALE", label: "Scale Offset", default: 250.000000, min: 10.00, max: 1000.00, step: 1.00 },
        { key: "HSM_AMBIENT1_SCALE_X", label: "Scale Offset X", default: 100.000000, min: 10.00, max: 1000.00, step: 0.50 },
        { key: "HSM_AMBIENT1_ROTATE", label: "Rotate", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT1_MIRROR_HORZ", label: "Mirror Horizontal", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT1_POS_INHERIT_MODE", label: "Position Inheritance - OFF | ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT1_POSITION_X", label: "Position X", default: 0.000000, min: -1500.00, max: 1500.00, step: 1.00 },
        { key: "HSM_AMBIENT1_POSITION_Y", label: "Position Y", default: 0.000000, min: -1500.00, max: 1500.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ AMBIENT LIGHTING IMAGE 2 ]:",
        settings: [
        { key: "HSM_AMBIENT2_HUE", label: "Hue", default: 0.000000, min: -180.00, max: 180.00, step: 1.00 },
        { key: "HSM_AMBIENT2_SATURATION", label: "Saturation", default: 100.000000, min: 0.00, max: 300.00, step: 1.00 },
        { key: "HSM_AMBIENT2_VALUE", label: "Value", default: 100.000000, min: 0.00, max: 400.00, step: 1.00 },
        { key: "HSM_AMBIENT2_CONTRAST", label: "Contrast", default: 100.000000, min: 0.00, max: 200.00, step: 0.50 },
        { key: "HSM_AMBIENT2_SCALE_KEEP_ASPECT", label: "Scale Aspect - MATCH VIEWPORT | USE TEXURE ASPECT", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT2_SCALE_INHERIT_MODE", label: "Scale Inheritance - OFF | ZOOM | TUBE", default: 1.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "HSM_AMBIENT2_SCALE", label: "Scale Offset", default: 100.000000, min: 10.00, max: 1000.00, step: 0.50 },
        { key: "HSM_AMBIENT2_SCALE_X", label: "Scale Offset X", default: 100.000000, min: 10.00, max: 1000.00, step: 0.50 },
        { key: "HSM_AMBIENT2_ROTATE", label: "Rotate", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT2_MIRROR_HORZ", label: "Mirror Horizontal", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT2_POS_INHERIT_MODE", label: "Position Inheritance - OFF | ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_AMBIENT2_POSITION_X", label: "Position X", default: 0.000000, min: -1000.00, max: 1000.00, step: 1.00 },
        { key: "HSM_AMBIENT2_POSITION_Y", label: "Position Y", default: 0.000000, min: -1000.00, max: 1000.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ BEZEL INDEPENDENT SCALE & CURVATURE ]:",
        settings: [
        { key: "HSM_BZL_USE_INDEPENDENT_SCALE", label: "Use Independent Scale", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_BZL_INDEPENDENT_SCALE", label: "Independent Scale (When scale from image is not used)", default: 82.970000, min: 1.00, max: 200.00, step: 0.10 },
        { key: "HSM_BZL_USE_INDEPENDENT_CURVATURE", label: "Use Independent Curvature", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_BZL_INDEPENDENT_CURVATURE_SCALE_LONG_AXIS", label: "Independent Curvature X", default: 100.000000, min: 0.00, max: 400.00, step: 5.00 },
        { key: "HSM_BZL_INDEPENDENT_CURVATURE_SCALE_SHORT_AXIS", label: "Independent Curvature Y", default: 100.000000, min: 0.00, max: 400.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ BEZEL GENERAL ]:",
        settings: [
        { key: "HSM_BZL_OPACITY", label: "Opacity", default: 100.000000, min: 0.00, max: 100.00, step: 5.00 },
        { key: "HSM_BZL_BLEND_MODE", label: "Blend Mode - Off | Normal | Add | Mult", default: 1.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_BZL_WIDTH", label: "Width - Def 125", default: 125.000000, min: -250.00, max: 5000.00, step: 1.00 },
        { key: "HSM_BZL_HEIGHT", label: "Height", default: 100.000000, min: -250.00, max: 5000.00, step: 1.00 },
        { key: "HSM_BZL_SCALE_OFFSET", label: "Scale Offset", default: 100.000000, min: 1.00, max: 200.00, step: 0.10 },
        { key: "HSM_BZL_INNER_CURVATURE_SCALE", label: "Inner Curvature Scale Multiplier", default: 100.000000, min: 0.00, max: 8000.00, step: 10.00 },
        { key: "HSM_BZL_INNER_CORNER_RADIUS_SCALE", label: "Inner Corner Radius Scale - Def 80", default: 80.000000, min: 0.00, max: 8000.00, step: 1.00 },
        { key: "HSM_BZL_INNER_EDGE_THICKNESS", label: "Inner Edge Thickness", default: 110.000000, min: 0.00, max: 700.00, step: 10.00 },
        { key: "HSM_BZL_INNER_EDGE_SHARPNESS", label: "Inner Edge Sharpness - Def 95", default: 95.000000, min: 0.00, max: 90.00, step: 5.00 },
        { key: "HSM_BZL_OUTER_POSITION_Y", label: "Outer Edge Position Y", default: 0.000000, min: -500.00, max: 500.00, step: 1.00 },
        { key: "HSM_BZL_OUTER_CURVATURE_SCALE", label: "Outer Curvature Scale", default: 0.000000, min: 0.00, max: 500.00, step: 5.00 },
        { key: "HSM_BZL_OUTER_CORNER_RADIUS_SCALE", label: "Outer Corner Radius Scale - Def 60", default: 60.000000, min: 0.00, max: 4000.00, step: 1.00 },
        { key: "HSM_BZL_NOISE", label: "Noise - Def 30", default: 30.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_BZL_INNER_EDGE_SHADOW", label: "Opacity of Shadow from Bezel on Tube", default: 70.000000, min: 0.00, max: 200.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ BEZEL BRIGHTNESS ]:",
        settings: [
        { key: "HSM_BZL_BRIGHTNESS", label: "Base Brightness - Def 30", default: 30.000000, min: 0.00, max: 600.00, step: 2.00 },
        { key: "HSM_BZL_BRIGHTNESS_MULT_TOP", label: "Top Multiplier - Def 50", default: 50.000000, min: 0.00, max: 1000.00, step: 2.00 },
        { key: "HSM_BZL_BRIGHTNESS_MULT_BOTTOM", label: "Bottom Multiplier - Def 200", default: 200.000000, min: 0.00, max: 1000.00, step: 2.00 },
        { key: "HSM_BZL_BRIGHTNESS_MULT_SIDES", label: "Sides Multiplier", default: 100.000000, min: 0.00, max: 1000.00, step: 2.00 },
        { key: "HSM_BZL_BRIGHTNESS_MULT_SIDE_LEFT", label: "Left Side Multiplier", default: 100.000000, min: 0.00, max: 1000.00, step: 2.00 },
        { key: "HSM_BZL_BRIGHTNESS_MULT_SIDE_RIGHT", label: "Right Side Multiplier", default: 100.000000, min: 0.00, max: 1000.00, step: 2.00 },
        { key: "HSM_BZL_HIGHLIGHT", label: "Main Highlight", default: 1.000000, min: 0.00, max: 100.00, step: 0.20 },
        { key: "HSM_BZL_INNER_EDGE_HIGHLIGHT", label: "Inner Edge Highlight", default: 100.000000, min: 0.00, max: 100.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ BEZEL COLOR ]:",
        settings: [
        { key: "HSM_BZL_COLOR_HUE", label: "Hue", default: 0.000000, min: 0.00, max: 360.00, step: 1.00 },
        { key: "HSM_BZL_COLOR_SATURATION", label: "Saturation", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_BZL_COLOR_VALUE", label: "Value/Brightness - Def 10", default: 10.000000, min: 0.00, max: 100.00, step: 0.20 },
        { key: "HSM_BZL_AMBIENT_LIGHTING_MULTIPLIER", label: "Bezel Ambient Lighting Multiplier", default: 100.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_BZL_AMBIENT2_LIGHTING_MULTIPLIER", label: "Ambient 2nd Image Lighting Multiplier", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ FRAME COLOR ]:",
        settings: [
        { key: "HSM_FRM_USE_INDEPENDENT_COLOR", label: "Use Independent Frame Color", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_FRM_COLOR_HUE", label: "Hue", default: 0.000000, min: 0.00, max: 360.00, step: 1.00 },
        { key: "HSM_FRM_COLOR_SATURATION", label: "Saturation", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_FRM_COLOR_VALUE", label: "Value/Brightness - Def 10", default: 10.000000, min: 0.00, max: 100.00, step: 0.20 },
        { empty_row: true }
        ]
    },
    {
        header: "[ FRAME GENERAL ]:",
        settings: [
        { key: "HSM_FRM_OPACITY", label: "Opacity", default: 100.000000, min: 0.00, max: 100.00, step: 5.00 },
        { key: "HSM_FRM_TEXTURE_OPACITY", label: "Texture Overlay Opacity (Highlight)", default: 1.500000, min: 0.00, max: 100.00, step: 0.10 },
        { key: "HSM_FRM_TEXTURE_BLEND_MODE", label: "Texture Overlay Blend Mode - Off | Normal | Add | Mult", default: 2.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_FRM_NOISE", label: "Noise - Def 30", default: 30.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_FRM_INNER_EDGE_THICKNESS", label: "Inner Edge Thickness", default: 100.000000, min: 0.00, max: 5000.00, step: 5.00 },
        { key: "HSM_FRM_INNER_EDGE_HIGHLIGHT", label: "Inner Edge Highlight", default: 14.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_FRM_THICKNESS", label: "Frame Thickness", default: 100.000000, min: 0.00, max: 2000.00, step: 5.00 },
        { key: "HSM_FRM_THICKNESS_SCALE_X", label: "Frame Thickness Scale X", default: 100.000000, min: 0.00, max: 1000.00, step: 2.00 },
        { key: "HSM_FRM_OUTER_POS_Y", label: "Frame Outer Pos Y", default: 0.000000, min: -100.00, max: 100.00, step: 0.05 },
        { key: "HSM_FRM_OUTER_CURVATURE_SCALE", label: "Frame Outer Curvature Scale", default: 0.000000, min: 0.00, max: 500.00, step: 5.00 },
        { key: "HSM_FRM_OUTER_CORNER_RADIUS", label: "Outer Corner Radius", default: 5.000000, min: 0.00, max: 70.00, step: 0.05 },
        { key: "HSM_FRM_OUTER_EDGE_THICKNESS", label: "Outer Edge Thickness", default: 100.000000, min: 0.00, max: 1000.00, step: 10.00 },
        { key: "HSM_FRM_OUTER_EDGE_SHADING", label: "Outer Edge Shading", default: 50.000000, min: 0.00, max: 100.00, step: 5.00 },
        { key: "HSM_FRM_SHADOW_OPACITY", label: "Shadow Opacity", default: 100.000000, min: 0.00, max: 300.00, step: 1.00 },
        { key: "HSM_FRM_SHADOW_WIDTH", label: "Shadow Width", default: 100.000000, min: 0.00, max: 500.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ CORNER CREASE - ALSO CONTROLS REFLECTION]:",
        settings: [
        { key: "HSM_REFLECT_CORNER_FADE", label: "Corner Fade", default: 10.000000, min: 1.00, max: 100.00, step: 0.50 },
        { key: "HSM_REFLECT_CORNER_FADE_DISTANCE", label: "Corner Fade Distance", default: 100.000000, min: 1.00, max: 100.00, step: 1.00 },
        { key: "HSM_REFLECT_CORNER_INNER_SPREAD", label: "Corner Inner Spread", default: 500.000000, min: 0.00, max: 1000.00, step: 10.00 },
        { key: "HSM_REFLECT_CORNER_OUTER_SPREAD", label: "Corner Outer Spread", default: 160.000000, min: 0.00, max: 1000.00, step: 10.00 },
        { key: "HSM_REFLECT_CORNER_ROTATION_OFFSET_TOP", label: "Corner Rotation Offset Top", default: 0.000000, min: -90.00, max: 90.00, step: 0.50 },
        { key: "HSM_REFLECT_CORNER_ROTATION_OFFSET_BOTTOM", label: "Corner Rotation Offset Bottom", default: 0.000000, min: -90.00, max: 90.00, step: 0.50 },
        { key: "HSM_REFLECT_CORNER_SPREAD_FALLOFF", label: "Corner Spread Falloff", default: 100.000000, min: 1.00, max: 200.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ REFLECTION ]:",
        settings: [
        { key: "HSM_REFLECT_GLOBAL_AMOUNT", label: "Global Amount", default: 40.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_REFLECT_GLOBAL_GAMMA_ADJUST", label: "Global Gamma Adjust", default: 1.200000, min: 0.25, max: 3.00, step: 0.05 },
        { key: "HSM_REFLECT_DIRECT_AMOUNT", label: "Direct Reflection", default: 150.000000, min: 0.00, max: 300.00, step: 2.00 },
        { key: "HSM_REFLECT_DIFFUSED_AMOUNT", label: "Diffused Reflection", default: 50.000000, min: 0.00, max: 300.00, step: 2.00 },
        { key: "HSM_REFLECT_FULLSCREEN_GLOW", label: "FullScreen Glow", default: 75.000000, min: 0.00, max: 600.00, step: 0.50 },
        { key: "HSM_REFLECT_FULLSCREEN_GLOW_GAMMA", label: "FullScreen Glow Gamma", default: 3.000000, min: 0.00, max: 5.00, step: 0.02 },
        { key: "HSM_REFLECT_BEZEL_INNER_EDGE_AMOUNT", label: "Bezel Inner Edge Amount", default: 130.000000, min: 0.00, max: 300.00, step: 2.00 },
        { key: "HSM_REFLECT_BEZEL_INNER_EDGE_FULLSCREEN_GLOW", label: "Bezel Inner Edge Fullscreen Glow", default: 40.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_REFLECT_FRAME_INNER_EDGE_AMOUNT", label: "Frame Inner Edge Amount", default: 50.000000, min: 0.00, max: 300.00, step: 2.00 },
        { key: "HSM_REFLECT_FRAME_INNER_EDGE_SHARPNESS", label: "Frame Inner Edge Sharpness", default: 90.000000, min: 0.00, max: 90.00, step: 2.00 },
        { key: "HSM_REFLECT_SHOW_TUBE_FX_AMOUNT", label: "Show Tube Effects in Reflection Amount", default: 100.000000, min: 0.00, max: 100.00, step: 2.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ REFLECTION FADE ]:",
        settings: [
        { key: "HSM_REFLECT_FADE_AMOUNT", label: "Fade Amount", default: 100.000000, min: 0.00, max: 100.00, step: 5.00 },
        { key: "HSM_REFLECT_RADIAL_FADE_WIDTH", label: "Radial Fade Width", default: 100.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_REFLECT_RADIAL_FADE_HEIGHT", label: "Radial Fade Height", default: 100.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { key: "HSM_REFLECT_LATERAL_OUTER_FADE_POSITION", label: "Lateral Outer Fade Position", default: -18.000000, min: -500.00, max: 500.00, step: 0.50 },
        { key: "HSM_REFLECT_LATERAL_OUTER_FADE_DISTANCE", label: "Lateral Outer Fade Distance", default: 20.000000, min: 1.00, max: 400.00, step: 0.50 },
        { empty_row: true }
        ]
    },
    {
        header: "[ REFLECTION BLUR ]:",
        settings: [
        { key: "HSM_REFLECT_BLUR_NUM_SAMPLES", label: "Blur Samples - 0 for OFF", default: 12.000000, min: 0.00, max: 40.00, step: 1.00 },
        { key: "HSM_REFLECT_BLUR_MIN", label: "Min Blur", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_REFLECT_BLUR_MAX", label: "Max Blur", default: 95.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_REFLECT_BLUR_FALLOFF_DISTANCE", label: "Falloff Distance", default: 100.000000, min: 0.00, max: 1000.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ REFLECTION NOISE ]:",
        settings: [
        { key: "HSM_REFLECT_NOISE_AMOUNT", label: "Noise Amount", default: 50.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_REFLECT_NOISE_SAMPLES", label: "Noise Samples - 0 | 1 | 2 | 12", default: 1.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_REFLECT_NOISE_SAMPLE_DISTANCE", label: "Sample Distance", default: 100.000000, min: 0.00, max: 500.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ REFLECTION MASK IMAGE - Only in Image Layer Presets ]:",
        settings: [
        { key: "HSM_REFLECT_MASK_IMAGE_AMOUNT", label: "Reflection Image Mask Amount", default: 0.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_REFLECT_MASK_FOLLOW_LAYER", label: "Follow Layer - FULL | TUBE | BEZEL |BG|DEVICE|DECAL|CAB|TOP", default: 4.000000, min: 0.00, max: 7.00, step: 1.00 },
        { key: "HSM_REFLECT_MASK_FOLLOW_MODE", label: "Follow Mode - FOLLOW SCALE & POS | FOLLOW EXACTLY", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_REFLECT_MASK_BRIGHTNESS", label: "Mask Brightness", default: 100.000000, min: 0.00, max: 200.00, step: 1.00 },
        { key: "HSM_REFLECT_MASK_BLACK_LEVEL", label: "Mask Black Level", default: 0.000000, min: -100.00, max: 100.00, step: 0.50 },
        { key: "HSM_REFLECT_MASK_MIPMAPPING_BLEND_BIAS", label: "Mipmapping Blend Bias (Affects Sharpness)", default: 0.000000, min: -5.00, max: 5.00, step: 0.10 }
        ]
    },
    {
        header: "[ REFLECTION GLASS ]:",
        settings: [
        { key: "HSM_GLASS_BORDER_ON", label: "Glass Border ON (For Glass Preset)", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_REFLECT_VIGNETTE_AMOUNT", label: "Glass Reflection Vignette", default: 0.000000, min: 0.00, max: 100.00, step: 0.50 },
        { key: "HSM_REFLECT_VIGNETTE_SIZE", label: "Glass Reflection Vignette Size", default: 100.000000, min: 50.00, max: 200.00, step: 2.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ GLASS BACKGROUND IMAGE ]:",
        settings: [
        { key: "HSM_BG_OPACITY", label: "Opacity", default: 100.000000, min: 0.00, max: 100.00, step: 0.10 },
        { key: "HSM_BG_BLEND_MODE", label: "Blend Mode - OFF | NORMAL | ADD | MULTIPLY", default: 1.000000, min: -1.00, max: 3.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- HYLLIAN SGENPT-MIX DE-DITHERING --- ]:",
        settings: [
        { key: "SGPT_BLEND_OPTION", label: "Mode: OFF | CHECKERBOARD | VERTICAL LINES | BOTH", default: 0.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_DEDITHER_BRIGHTNESS_BIAS", label: "Transparency Brightness Bias", default: 100.000000, min: 10.00, max: 300.00, step: 5.00 },
        { empty_row: true },
        { key: "CB_BLEND_LEVEL", label: "Checkerboard Blend Level", default: 1.000000, min: 0.00, max: 1.00, step: 0.10 },
        { key: "CB_MITIG_NEIGHBRS", label: "Checkerboard - Mitigate Errors in Neighbors", default: 1.000000, min: 0.00, max: 4.00, step: 1.00 },
        { key: "CB_MITIG_LINES", label: "Checkerboard - Mitigate Errors in Regions", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "CB_ADJUST_VIEW", label: "Checkerboard - Show Debug View", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "VL_BLEND_LEVEL", label: "Vertical Lines Blend Level", default: 0.800000, min: 0.00, max: 1.00, step: 0.10 },
        { key: "VL_MITIG_NEIGHBRS", label: "Vertical Lines - Mitigate Errors in Neighbors", default: 1.000000, min: 0.00, max: 4.00, step: 1.00 },
        { key: "VL_MITIG_LINES", label: "Vertical Lines - Mitigate Errors in Regions", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "VL_ADJUST_VIEW", label: "Vertical Lines - Debug View", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- PS1 BOX BLUR --- ]:",
        settings: [
        { key: "PS1_BOX_BLUR_MODE", label: "Box Blur ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "PS1_BOX_BLUR_BLEND", label: "Blend Amount", default: 100.000000, min: 0.00, max: 100.00, step: 10.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- FXAA - ANTIALIASING --- ]:",
        settings: [
        { key: "HSM_FXAA_ON", label: "FXAA ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- G-SHARP RESAMPLER --- ]:",
        settings: [
        { key: "GSHARP_ON", label: "G-SHARP ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSHARP0", label: "Filter Range", default: 1.000000, min: 1.00, max: 6.00, step: 0.10 },
        { key: "SIGMA_HV", label: "Gaussian Blur Sigma", default: 1.000000, min: 0.10, max: 7.00, step: 0.05 },
        { key: "SHAR", label: "Sharpness Definition", default: 1.500000, min: 0.00, max: 2.00, step: 0.05 },
        { key: "HAR", label: "Anti-Ringing", default: 1.000000, min: 0.00, max: 1.00, step: 0.10 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- SHARPSMOOTHER by Guest.r --- ]",
        settings: [
        { key: "SHARPSMOOTHER_ON", label: "SharpSmoother ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "max_w", label: "Max filter weight", default: 0.050000, min: 0.00, max: 0.20, step: 0.01 },
        { key: "min_w", label: "Min filter weight", default: 0.000000, min: -0.15, max: 0.05, step: 0.01 },
        { key: "smoot", label: "Smoothing strength", default: 0.400000, min: 0.00, max: 1.50, step: 0.01 },
        { key: "lumad", label: "Effects smoothing", default: 0.500000, min: 0.10, max: 5.00, step: 0.10 },
        { key: "mtric", label: "Metric Used", default: 0.300000, min: 0.10, max: 2.00, step: 0.10 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- SMOOTHING - SCALEFX ---- ]:",
        settings: [
        { key: "HSM_SCALEFX_ON", label: "ScaleFx ON - Must Increase Core Res Sampling", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "SFX_CLR", label: "ScaleFX Threshold", default: 0.430000, min: 0.01, max: 1.00, step: 0.01 },
        { key: "SFX_SAA", label: "ScaleFX Filter AA", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "SFX_SCN", label: "ScaleFX Filter Corners", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ INTRO SEQUENCE ]:",
        settings: [
        { key: "HSM_INTRO_WHEN_TO_SHOW", label: "When to Show Intro - OFF|Game Load|Shader Load|Repeat", default: 1.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_INTRO_SPEED", label: "Speed", default: 100.000000, min: 1.00, max: 500.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ INTRO LOGO ]:",
        settings: [
        { key: "HSM_INTRO_LOGO_BLEND_MODE", label: "Logo Blend Mode - OFF | NORM | ADD | MULT", default: 1.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_INTRO_LOGO_OVER_SOLID_COLOR", label: "Logo Over Solid Color - Off | ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "HSM_INTRO_LOGO_HEIGHT", label: "Logo Height (0 for exact resolution)", default: 42.860000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "HSM_INTRO_LOGO_PLACEMENT", label: "Logo Placement - Middle | TL | TR | BL | BR", default: 0.000000, min: 0.00, max: 4.00, step: 1.00 },
        { key: "HSM_INTRO_LOGO_POS_X", label: "Logo Pos X", default: 0.000000, min: -100.00, max: 100.00, step: 0.50 },
        { key: "HSM_INTRO_LOGO_POS_Y", label: "Logo Pos Y", default: 2.000000, min: -100.00, max: 100.00, step: 0.50 },
        { empty_row: true }
        ]
    },
    {
        header: "[ INTRO SOLID COLOR ]:",
        settings: [
        { key: "HSM_INTRO_SOLID_COLOR_BLEND_MODE", label: "Solid Color Blend Mode - OFF | NORM | ADD | MULT", default: 1.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "HSM_INTRO_SOLID_COLOR_HUE", label: "Solid Color Hue", default: 0.000000, min: 0.00, max: 360.00, step: 1.00 },
        { key: "HSM_INTRO_SOLID_COLOR_SAT", label: "Solid Color Saturation", default: 0.000000, min: 0.00, max: 100.00, step: 5.00 },
        { key: "HSM_INTRO_SOLID_COLOR_VALUE", label: "Solid Color Value", default: 100.000000, min: 0.00, max: 100.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ INTRO STATIC NOISE ]:",
        settings: [
        { key: "HSM_INTRO_NOISE_BLEND_MODE", label: "Static Noise Blend Mode - OFF | NORM | ADD | MULT", default: 1.000000, min: 0.00, max: 3.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ INTRO SOLID BLACK ]:",
        settings: [
        { key: "HSM_INTRO_SOLID_BLACK_HOLD", label: "Solid Black Hold Frames", default: 0.000000, min: 0.00, max: 600.00, step: 5.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- TV PROCESS GTU --- ]:",
        settings: [
        { key: "GTU_ON", label: "GTU ON", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "compositeConnection", label: "Composite Connection Enable", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "signalResolution", label: "Signal Resolution Y", default: 256.000000, min: 16.00, max: 1024.00, step: 16.00 },
        { key: "signalResolutionI", label: "Signal Resolution I", default: 83.000000, min: 1.00, max: 350.00, step: 2.00 },
        { key: "signalResolutionQ", label: "Signal Resolution Q", default: 25.000000, min: 1.00, max: 350.00, step: 2.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- GUEST ADVANCED --- ]:",
        settings: [
        { empty_row: true }
        ]
    },
    {
        header: "[ AFTERGLOW ]:",
        settings: [
        { key: "PR", label: "Persistence Red -- PR", default: 0.320000, min: 0.00, max: 0.50, step: 0.01 },
        { key: "PG", label: "Persistence Green -- PG", default: 0.320000, min: 0.00, max: 0.50, step: 0.01 },
        { key: "PB", label: "Persistence Blue -- PB", default: 0.320000, min: 0.00, max: 0.50, step: 0.01 },
        { key: "AS", label: "Afterglow Strength -- AS", default: 0.200000, min: 0.00, max: 0.60, step: 0.01 },
        { key: "sat", label: "Afterglow Saturation  -- sat", default: 0.500000, min: 0.00, max: 1.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ GUEST COLOR TWEAKS ]:",
        settings: [
        { key: "CS", label: "Display Gamut: sRGB, Modern, DCI, Adobe, Rec.2020 -- CS", default: 0.000000, min: 0.00, max: 4.00, step: 1.00 },
        { key: "CP", label: "CRT Profile: EBU | P22 | SMPTE-C | Philips | Trin. -- CP", default: 0.000000, min: -1.00, max: 5.00, step: 1.00 },
        { key: "TNTC", label: "LUT Colors: Trin. | InvTrin. | NEC Mult. | NTSC -- TNTC", default: 0.000000, min: 0.00, max: 4.00, step: 1.00 },
        { key: "LS", label: "LUT Size -- LS", default: 32.000000, min: 16.00, max: 64.00, step: 16.00 },
        { key: "WP", label: "Color Temperature % -- wp", default: 0.000000, min: -100.00, max: 100.00, step: 5.00 },
        { key: "wp_saturation", label: "Saturation Adjustment -- wp_saturation", default: 1.000000, min: 0.00, max: 2.00, step: 0.05 },
        { key: "pre_bb", label: "Brightness Adjustment", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "contr", label: "Contrast Adjustment", default: 0.000000, min: -2.00, max: 2.00, step: 0.05 },
        { key: "BP", label: "Raise Black Level", default: 0.000000, min: -100.00, max: 25.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- COLOR CORRECTION - GRADE by DOGWAY --- ]:",
        settings: [
        { key: "g_grade_on", label: "Grade ON", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true }
        ]
    },
    {
        header: "[ SIGNAL & COLOR SPACE ]:",
        settings: [
        { key: "dg_support1", label: "[ Phosphor Gamuts for the different Regions/Eras: ]", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "dg_support2", label: "[ -3:SMPTE 170M  -2:Rear Proj TV 95  -1:P22 80s  0:sRGB Prims ]", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "dg_support3", label: "[  1: P22 90s     2: P22 NTSC-J       3: SMPTE 470BG ]", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "g_crtgamut", label: "Phosphor Gamut", default: 1.000000, min: -3.00, max: 3.00, step: 1.00 },
        { key: "g_space_out", label: "Diplay Color Space (-1:709 0:sRGB 1:P3-D65 2:2020 3:Adobe)", default: 0.000000, min: -1.00, max: 3.00, step: 1.00 },
        { key: "g_signal_type", label: "Signal Type (0:RGB 1:Composite)", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "g_Dark_to_Dim", label: "Dark to Dim adaptation", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "g_GCompress", label: "Gamut Compression", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true },
        { key: "g_analog", label: "[ ANALOG CONTROLS ]", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "wp_temperature", label: "White Point", default: 7200.000000, min: 5000.00, max: 12000.00, step: 100.00 },
        { key: "g_CRT_l", label: "CRT Gamma", default: 2.500000, min: 2.30, max: 2.60, step: 0.01 },
        { key: "g_CRT_b", label: "CRT Brightness", default: 50.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "g_CRT_c", label: "CRT Contrast", default: 50.000000, min: 0.00, max: 100.00, step: 1.00 },
        { key: "g_hue_degrees", label: "CRT Hue (Composite Signal Type Only)", default: 0.000000, min: -180.00, max: 180.00, step: 1.00 },
        { key: "g_U_SHIFT", label: "CRT U Shift (Composite Signal Type Only)", default: 0.000000, min: -0.20, max: 0.20, step: 0.01 },
        { key: "g_V_SHIFT", label: "CRT V Shift (Composite Signal Type Only)", default: 0.000000, min: -0.20, max: 0.20, step: 0.01 },
        { key: "g_U_MUL", label: "CRT U Multiplier (Composite Signal Type Only)", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "g_V_MUL", label: "CRT V Multiplier (Composite Signal Type Only)", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "g_CRT_br", label: "CRT Beam Red", default: 1.000000, min: 0.00, max: 1.20, step: 0.01 },
        { key: "g_CRT_bg", label: "CRT Beam Green", default: 1.000000, min: 0.00, max: 1.20, step: 0.01 },
        { key: "g_CRT_bb", label: "CRT Beam Blue", default: 1.000000, min: 0.00, max: 1.20, step: 0.01 },
        { key: "g_CRT_rf", label: "CRT Lambert Reflection % from Surround Luminance", default: 5.000000, min: 2.00, max: 5.00, step: 0.10 },
        { key: "g_CRT_sl", label: "Surround Luminance -nits-", default: 34.000000, min: 0.00, max: 100.00, step: 1.00 },
        { empty_row: true },
        { key: "g_sfixes", label: "[ SEGA FIXES ]", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "g_lum_fix", label: "Sega Luma Fix", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "g_MD_Pal", label: "MD Palette", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "g_SMS_bl", label: "SMS Blue Lift", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { empty_row: true },
        { key: "g_digital", label: "[ DIGITAL CONTROLS ]", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "g_lum", label: "Brightness", default: 0.000000, min: -0.50, max: 1.00, step: 0.01 },
        { key: "g_cntrst", label: "Contrast", default: 0.000000, min: -1.00, max: 1.00, step: 0.05 },
        { key: "g_mid", label: "Contrast Pivot", default: 0.500000, min: 0.00, max: 1.00, step: 0.01 },
        { key: "g_lift", label: "Black Level", default: 0.000000, min: -100.00, max: 100.00, step: 1.00 },
        { key: "g_sat", label: "Saturation", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "g_vibr", label: "Dullness/Vibrance", default: 0.000000, min: -1.00, max: 1.00, step: 0.05 },
        { empty_row: true }
        ]
    },
    {
        header: "[ HUE VS SATURATION ]:",
        settings: [
        { key: "g_satr", label: "Hue vs Sat Red", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "g_satg", label: "Hue vs Sat Green", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "g_satb", label: "Hue vs Sat Blue", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ BLACK TINT ]:",
        settings: [
        { key: "blr", label: "Black-Red Tint", default: 0.000000, min: 0.00, max: 1.00, step: 0.01 },
        { key: "blg", label: "Black-Green Tint", default: 0.000000, min: 0.00, max: 1.00, step: 0.01 },
        { key: "blb", label: "Black-Blue Tint", default: 0.000000, min: 0.00, max: 1.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ WHITE TINT ]:",
        settings: [
        { key: "wlr", label: "White-Red Tint", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "wlg", label: "White-Green Tint", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "wlb", label: "White-Blue Tint", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ RED TINT ]:",
        settings: [
        { key: "rg", label: "Red-Green Tint", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "rb", label: "Red-Blue Tint", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ GREEN TINT ]:",
        settings: [
        { key: "gr", label: "Green-Red Tint", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "gb", label: "Green-Blue Tint", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ BLUE TINT ]:",
        settings: [
        { key: "br", label: "Blue-Red Tint", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "bg", label: "Blue-Green Tint", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- SONY MEGATRON COLOUR VIDEO MONITOR --- ]",
        settings: [
        { empty_row: true },
        { key: "hcrt_support0", label: "If image is dark, try turning up your TV's brightness", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "hcrt_support1", label: "HDR mode: Set the peak luminance to that of your TV.", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "hcrt_support2", label: "Then adjust paper white luminance until it looks right", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { empty_row: true },
        { key: "hcrt_support4", label: "Default white points for the different colour systems:", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "hcrt_support5", label: "709, PAL & NTSC-U: 6500K, NTSC-J: 9300K", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { empty_row: true },
        { key: "hcrt_user_settings", label: "[ YOUR DISPLAY'S SETTINGS ]:", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "hcrt_hdr", label: "SDR | HDR", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "hcrt_colour_accurate", label: "Mask Accurate/Colour Accurate", default: 1.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "hcrt_colour_space", label: "Display's Colour Space: r709 | sRGB | DCI-P3", default: 1.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "hcrt_max_nits", label: "HDR: Display's Peak Luminance", default: 1000.000000, min: 0.00, max: 10000.00, step: 10.00 },
        { key: "hcrt_paper_white_nits", label: "HDR: Display's Paper White Luminance", default: 200.000000, min: 0.00, max: 10000.00, step: 10.00 },
        { key: "hcrt_expand_gamut", label: "HDR: Original/Vivid", default: 0.000000, min: 0.00, max: 1.00, step: 1.00 },
        { key: "hcrt_lcd_resolution", label: "Display's Resolution: 1080p | 4K | 8K", default: 1.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "hcrt_lcd_subpixel", label: "Display's Subpixel Layout: RGB | RWBG (OLED) | BGR", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { empty_row: true },
        { key: "hcrt_developer_settings", label: "[ CRT SETTINGS ]:", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "hcrt_crt_screen_type", label: "Screen Type: APERTURE GRILLE | SHADOW MASK | SLOT MASK", default: 0.000000, min: 0.00, max: 2.00, step: 1.00 },
        { key: "hcrt_crt_resolution", label: "Resolution: 300TVL | 600TVL | 800TVL | 1000TVL", default: 1.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "hcrt_colour_system", label: "Colour System: r709 | PAL | NTSC-U | NTSC-J", default: 2.000000, min: 0.00, max: 3.00, step: 1.00 },
        { key: "hcrt_white_temperature", label: "White Temperature Offset (Kelvin)", default: 0.000000, min: -5000.00, max: 12000.00, step: 100.00 },
        { key: "hcrt_brightness", label: "Brightness", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "hcrt_contrast", label: "Contrast", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "hcrt_saturation", label: "Saturation", default: 0.000000, min: -1.00, max: 1.00, step: 0.01 },
        { key: "hcrt_gamma_in", label: "Gamma In", default: 2.220000, min: 1.22, max: 3.22, step: 0.01 },
        { key: "hcrt_gamma_out", label: "Gamma Out", default: 2.400000, min: 2.00, max: 2.80, step: 0.01 },
        { key: "hcrt_pin_phase", label: "Pin Phase", default: 0.000000, min: -0.20, max: 0.20, step: 0.01 },
        { key: "hcrt_pin_amp", label: "Pin Amp", default: 0.000000, min: -0.20, max: 0.20, step: 0.01 },
        { empty_row: true },
        { key: "hcrt_developer_settings0", label: "[ VERTICAL SETTINGS ]:", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "hcrt_v_size", label: "Vertical Size", default: 1.000000, min: 0.80, max: 1.20, step: 0.01 },
        { key: "hcrt_v_cent", label: "Vertical Center", default: 0.000000, min: -200.00, max: 200.00, step: 1.00 },
        { key: "hcrt_red_vertical_convergence", label: "Red Vertical Deconvergence", default: 0.000000, min: -10.00, max: 10.00, step: 0.01 },
        { key: "hcrt_green_vertical_convergence", label: "Green Vertical Deconvergence", default: 0.000000, min: -10.00, max: 10.00, step: 0.01 },
        { key: "hcrt_blue_vertical_convergence", label: "Blue Vertical Deconvergence", default: 0.000000, min: -10.00, max: 10.00, step: 0.01 },
        { key: "hcrt_red_scanline_min", label: "Red Scanline Min", default: 0.500000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_red_scanline_max", label: "Red Scanline Max", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_red_scanline_attack", label: "Red Scanline Attack", default: 0.200000, min: 0.00, max: 1.00, step: 0.01 },
        { key: "hcrt_green_scanline_min", label: "Green Scanline Min", default: 0.500000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_green_scanline_max", label: "Green Scanline Max", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_green_scanline_attack", label: "Green Scanline Attack", default: 0.200000, min: 0.00, max: 1.00, step: 0.01 },
        { key: "hcrt_blue_scanline_min", label: "Blue Scanline Min", default: 0.500000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_blue_scanline_max", label: "Blue Scanline Max", default: 1.000000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_blue_scanline_attack", label: "Blue Scanline Attack", default: 0.200000, min: 0.00, max: 1.00, step: 0.01 },
        { empty_row: true },
        { key: "hcrt_developer_settings1", label: "[ HORIZONTAL SETTINGS ]:", default: 0.000000, min: 0.00, max: 0.00, step: 0.00 },
        { key: "hcrt_h_size", label: "Horizontal Size", default: 1.000000, min: 0.80, max: 1.20, step: 0.01 },
        { key: "hcrt_h_cent", label: "Horizontal Center", default: 0.000000, min: -200.00, max: 200.00, step: 1.00 },
        { key: "hcrt_red_horizontal_convergence", label: "Red Horizontal Deconvergence", default: 0.000000, min: -10.00, max: 10.00, step: 0.01 },
        { key: "hcrt_green_horizontal_convergence", label: "Green Horizontal Deconvergence", default: 0.000000, min: -10.00, max: 10.00, step: 0.01 },
        { key: "hcrt_blue_horizontal_convergence", label: "Blue Horizontal Deconvergence", default: 0.000000, min: -10.00, max: 10.00, step: 0.01 },
        { key: "hcrt_red_beam_sharpness", label: "Red Beam Sharpness", default: 1.750000, min: 0.00, max: 5.00, step: 0.05 },
        { key: "hcrt_red_beam_attack", label: "Red Beam Attack", default: 0.500000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_green_beam_sharpness", label: "Green Beam Sharpness", default: 1.750000, min: 0.00, max: 5.00, step: 0.05 },
        { key: "hcrt_green_beam_attack", label: "Green Beam Attack", default: 0.500000, min: 0.00, max: 2.00, step: 0.01 },
        { key: "hcrt_blue_beam_sharpness", label: "Blue Beam Sharpness", default: 1.750000, min: 0.00, max: 5.00, step: 0.05 },
        { key: "hcrt_blue_beam_attack", label: "Blue Beam Attack", default: 0.500000, min: 0.00, max: 2.00, step: 0.01 },
        { empty_row: true },
        { empty_row: true }
        ]
    },
    {
        header: "[ --- Mega Bezel Images --- ]",
        settings: [
        { key: "IntroImage", path: "../../../shaders/textures/IntroImage_MegaBezelLogo.png" },
        { key: "ScreenPlacementImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "TubeStaticReflectionImage", path: "../../../shaders/textures/TubeGlassOverlayImageCropped_1440x1080.png" },
        { key: "TubeDiffuseImage", path: "../../../shaders/textures/Tube_Diffuse_2390x1792.png" },
        { key: "TubeShadowImage", path: "../../../shaders/textures/Tube_Shadow_1600x1200.png" },
        { key: "TubeColoredGelImage", path: "../../../shaders/textures/Colored_Gel_Rainbow.png" },
        { key: "ReflectionMaskImage", path: "../../../shaders/textures/Placeholder_White_16x16.png" },
        { key: "FrameTextureImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "BackgroundImage", path: "../../../shaders/textures/TopLayerImageGradient_3840x2160.png" },
        { key: "BackgroundVertImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "CabinetGlassImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "DeviceImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "DeviceVertImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "DeviceLEDImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "DecalImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "NightLightingImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "NightLighting2Image", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "LEDImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" },
        { key: "TopLayerImage", path: "../../../shaders/textures/Placeholder_Transparent_16x16.png" }
        ]
    }
];