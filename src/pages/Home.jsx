import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
/**
 * ============================================================================
 * ICONS & SVG GLYPHS (Self-contained, zero-dependency)
 * ============================================================================
 */
const Icons = {
  ShieldAlert: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 11 12 14 22 4" />
    </svg>
  ),
  Radar: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <path d="M12 12m-6 0a6 6 0 1 0 12 0a6 6 0 1 0 -12 0" />
      <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
      <path d="M12 3v9l4 4" />
    </svg>
  ),
  UploadCloud: () => (
    <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  ),
  Layers: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  SplitScreen: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="12" y1="3" x2="12" y2="21" />
    </svg>
  ),
  FileCross: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="m10 11 4 4" />
      <path d="m14 11-4 4" />
    </svg>
  ),
  Trash: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  ),
  Fingerprint: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4" />
      <path d="M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2" />
      <path d="M17.29 21.02c.12-.6.18-1.2.18-1.85 0-3.8-3.03-6.88-6.85-6.88-1.35 0-2.61.39-3.67 1.07" />
      <path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4" />
      <path d="M8.65 22c.21-.66.45-1.32.75-2" />
      <path d="M14 13.12c0 2.38 0 6.38-1 8.88" />
      <path d="M2 16h.01" />
      <path d="M21.8 16c.2-2 .131-5.354 0-6" />
      <path d="M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2" />
    </svg>
  ),
  Cpu: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <line x1="9" y1="1" x2="9" y2="4" />
      <line x1="15" y1="1" x2="15" y2="4" />
      <line x1="9" y1="20" x2="9" y2="23" />
      <line x1="15" y1="20" x2="15" y2="23" />
      <line x1="20" y1="9" x2="23" y2="9" />
      <line x1="20" y1="14" x2="23" y2="14" />
      <line x1="1" y1="9" x2="4" y2="9" />
      <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
  ),
  Activity: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  )
};

/**
 * Supported Raster Formats
 */
const ACCEPTED_MIME_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ACCEPTED_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];

/**
 * Historical Mock Investigations
 */
const MOCK_INVESTIGATIONS = [
  {
    id: 'CASE-9481',
    fileName: 'surveillance_crop_cam4.png',
    date: '2026-11-02 11:24:08 UTC',
    fileSize: '4.82 MB',
    dimensions: '3840 x 2160',
    mode: 'STANDALONE',
    hash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    verdict: 'AI SYNTHETIC',
    confidence: '98.4%',
    statusBadge: {
      label: 'TAMPERED: SYNTHESIS',
      bg: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
    }
  },
  {
    id: 'CASE-9480',
    fileName: 'passport_scan_baseline.jpg',
    date: '2026-11-01 16:40:19 UTC',
    fileSize: '1.24 MB',
    dimensions: '1920 x 1080',
    mode: 'COMPARATIVE',
    hash: '8f434346648f6b96df89dda901c5176b10a6d83961dd3c1ac88b59b2dc327aa4',
    verdict: 'AUTHENTIC BASELINE',
    confidence: '99.8%',
    statusBadge: {
      label: 'VERIFIED AUTHENTIC',
      bg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
    }
  },
  {
    id: 'CASE-9478',
    fileName: 'contract_exec_scan_p4.webp',
    date: '2026-10-31 09:15:44 UTC',
    fileSize: '890 KB',
    dimensions: '2480 x 3508',
    mode: 'STANDALONE',
    hash: 'a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e',
    verdict: 'METADATA STRIPPED',
    confidence: '84.2%',
    statusBadge: {
      label: 'ANOMALY DETECTED',
      bg: 'bg-amber-500/10 text-amber-400 border-amber-500/30'
    }
  },
  {
    id: 'CASE-9475',
    fileName: 'id_badge_reissued.png',
    date: '2026-10-29 20:05:12 UTC',
    fileSize: '2.10 MB',
    dimensions: '1200 x 800',
    mode: 'COMPARATIVE',
    hash: '4b227777d4dd1fc61c6f884f48641d02b4d121d3fd328cb08b5531fcacdabf8a',
    verdict: 'LOCALIZED CLONE',
    confidence: '93.7%',
    statusBadge: {
      label: 'CLONE / SPLICED',
      bg: 'bg-rose-500/10 text-rose-400 border-rose-500/30'
    }
  }
];

export default function Home() {
const navigate = useNavigate();
  // Operational Mode State: 'standalone' | 'comparative'
  const [activeMode, setActiveMode] = useState('standalone');

  // File States (Global Upload Payload)
  const [standaloneFile, setStandaloneFile] = useState(null);
  const [referenceFile, setReferenceFile] = useState(null);
  const [targetFile, setTargetFile] = useState(null);

  // Analysis Trigger State
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);

  // Simulated Submission Handler
  const handleInitiateForensics = async () => {
   setIsAnalyzing(true);
    setAnalysisProgress(30);

    try {
      const formData = new FormData();
      // Appends the actual File object to the payload
      formData.append("file", standaloneFile.fileObject); 

      const response = await fetch("http://localhost:8000/api/analyze/standalone", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("API Execution Failed");

      const backendResult = await response.json();
      setAnalysisProgress(100);
      
      // Delay slightly for UI smoothness, then pass the real result to Workspace
      setTimeout(() => {
        setIsAnalyzing(false);
        navigate('/workspace', { state: { result: backendResult, originalFile: standaloneFile } });
      }, 600);

    } catch (error) {
      console.error(error);
      alert("Backend processing failed. Ensure your Python server is running on port 8000.");
      setIsAnalyzing(false);
    }
  };
  const isReadyToAnalyze =
    activeMode === 'standalone'
      ? Boolean(standaloneFile?.valid)
      : Boolean(referenceFile?.valid && targetFile?.valid);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 antialiased flex flex-col">
      {/* ====================================================================
          TOP FORENSIC TELEMETRY HUD BAR
          ==================================================================== */}
      <header className="border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md sticky top-0 z-40 px-6 py-3.5">
        <div className="max-w-[1720px] mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3.5">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.25)]">
              <Icons.Radar />
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-mono text-sm tracking-wider font-bold text-white uppercase">
                  VERITAS // FORENSIC CORE
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  v4.1.0-SEC
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono tracking-tight">
                DIGITAL IMAGE AUTHENTICITY & INTEGRITY SUITE
              </p>
            </div>
          </div>

          {/* Real-time telemetry indicators */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-mono">
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>NEURAL DEFENSE:</span>
              <span className="text-emerald-400 font-semibold">SYNTH-DETECTOR ACTIVE</span>
            </div>
            <div className="h-4 w-px bg-slate-800"></div>
            <div className="flex items-center space-x-2 text-slate-400">
              <Icons.Cpu />
              <span>SPECTRAL SENSORS:</span>
              <span className="text-cyan-400">ONLINE</span>
            </div>
            <div className="h-4 w-px bg-slate-800"></div>
            <div className="flex items-center space-x-2 text-slate-400">
              <span className="text-slate-500">SESSION:</span>
              <span className="text-slate-300">NODE_SEC_#8892</span>
            </div>
          </div>
        </div>
      </header>

      {/* ====================================================================
          MAIN DASHBOARD WORKSPACE (GRID: PORTAL [9 COL] vs HISTORY [3 COL])
          ==================================================================== */}
      <main className="flex-1 max-w-[1720px] w-full mx-auto p-4 lg:p-6 grid grid-cols-1 xl:grid-cols-12 gap-6">
        {/* ------------------------------------------------------------------
            COLUMN 1: THE UPLOAD PORTAL (xl:col-span-8 or 9)
            ------------------------------------------------------------------ */}
        <section className="xl:col-span-8 2xl:col-span-9 flex flex-col space-y-6">
          {/* CONTROL STRIP: Operational Mode Switcher */}
          <div className="bg-slate-900/90 border border-slate-800/90 rounded-xl p-4 shadow-xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                  <span className="text-cyan-400 font-mono text-base">&gt;</span> Forensic Intake Portal
                </h1>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  SELECT TARGET ARCHITECTURE TO PRIME EXTRACTION PIPELINE
                </p>
              </div>

              {/* Segmented Mode Control */}
              <div className="inline-flex p-1 bg-slate-950 border border-slate-800 rounded-lg self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveMode('standalone')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-xs font-mono font-medium tracking-wide transition-all duration-200 ${
                    activeMode === 'standalone'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Icons.Layers />
                  <span>STANDALONE MODE</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMode('comparative')}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-xs font-mono font-medium tracking-wide transition-all duration-200 ${
                    activeMode === 'comparative'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Icons.SplitScreen />
                  <span>COMPARATIVE MODE</span>
                </button>
              </div>
            </div>

            {/* Mode Description Banner */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/60 flex items-start gap-3 text-xs font-mono text-slate-300">
              <span className="p-1 rounded bg-slate-800 text-cyan-400 shrink-0 mt-0.5">
                <Icons.Activity />
              </span>
              <div>
                {activeMode === 'standalone' ? (
                  <p>
                    <strong className="text-cyan-300 font-bold">Autonomous Single-Asset Pipeline:</strong> Optimized for zero-shot synthetic AI generation detection (Diffusion & GAN artifacts), internal JPEG block grid inconsistency, resampling noise fields, and EXIF/XMP header tampering.
                  </p>
                ) : (
                  <p>
                    <strong className="text-cyan-300 font-bold">Dual-Matrix Differential Pipeline:</strong> Compares a known authentic reference baseline against a suspected target. Computes normalized cross-correlation, pixel deviation heatmaps, localized cloning masks, and structural SSIM alterations.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ACTIVE WORKSPACE ZONE */}
          <div className="flex-1 bg-slate-900/60 border border-slate-800/80 rounded-xl p-5 lg:p-6 flex flex-col justify-between relative overflow-hidden">
            {/* Visual HUD Corner Accents */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-slate-700 pointer-events-none"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-slate-700 pointer-events-none"></div>
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-slate-700 pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-slate-700 pointer-events-none"></div>

            {activeMode === 'standalone' ? (
              /* ==========================================================
                 MODE A: STANDALONE INVESTIGATION (SINGLE EXPANSIVE ZONE)
                 ========================================================== */
              <div className="flex-1 flex flex-col justify-center">
                <DropZone
                  zoneId="standalone-zone"
                  title="PRIMARY TARGET INVESTIGATION MATRIX"
                  badgeText="AUTONOMOUS SCAN"
                  helperDescription="Accepts a single raster image file for comprehensive forensic dissection. Inspects generative neural traces, splicing boundaries, and compression history."
                  currentFile={standaloneFile}
                  onFileAccepted={(fileData) => setStandaloneFile(fileData)}
                  onFileRemoved={() => setStandaloneFile(null)}
                  accentColor="cyan"
                />
              </div>
            ) : (
              /* ==========================================================
                 MODE B: COMPARATIVE INVESTIGATION (DUAL SIDE-BY-SIDE ZONES)
                 ========================================================== */
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
                <DropZone
                  zoneId="ref-zone"
                  title="REFERENCE ASSET (AUTHENTIC BASELINE)"
                  badgeText="CONTROL"
                  helperDescription="Upload the verified authentic original image. Used as ground truth to establish structural geometry and noise floor."
                  currentFile={referenceFile}
                  onFileAccepted={(fileData) => setReferenceFile(fileData)}
                  onFileRemoved={() => setReferenceFile(null)}
                  accentColor="emerald"
                />

                <DropZone
                  zoneId="target-zone"
                  title="TARGET ASSET (SUSPECT MANIPULATION)"
                  badgeText="SUSPECT"
                  helperDescription="Upload the suspected altered version. Analyzed for clone-stamping, localized inpainting, and color-space shifts."
                  currentFile={targetFile}
                  onFileAccepted={(fileData) => setTargetFile(fileData)}
                  onFileRemoved={() => setTargetFile(null)}
                  accentColor="amber"
                />
              </div>
            )}

            {/* ACTION / EXECUTION STATUS PANEL */}
            <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-3 text-xs font-mono text-slate-400">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-cyan-400/80 shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
                <span>
                  STRICT ENFORCEMENT: <span className="text-slate-200">JPEG / PNG / WebP</span> (MAX: 50MB)
                </span>
              </div>

              <div className="flex items-center space-x-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => {
                    setStandaloneFile(null);
                    setReferenceFile(null);
                    setTargetFile(null);
                  }}
                  className="px-4 py-2.5 rounded-lg border border-slate-800 bg-slate-900 hover:bg-slate-800 text-xs font-mono text-slate-400 hover:text-slate-200 transition-colors"
                >
                  CLEAR PORTAL
                </button>

                <button
                  type="button"
                  disabled={!isReadyToAnalyze || isAnalyzing}
                  onClick={handleInitiateForensics}
                  className={`w-full sm:w-auto px-6 py-2.5 rounded-lg text-xs font-mono font-bold tracking-wider transition-all flex items-center justify-center space-x-2 ${
                    isReadyToAnalyze && !isAnalyzing
                      ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] cursor-pointer'
                      : 'bg-slate-800/80 text-slate-500 border border-slate-800 cursor-not-allowed'
                  }`}
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                      <span>PROCESSING PIPELINE ({analysisProgress}%)</span>
                    </>
                  ) : (
                    <>
                      <Icons.Radar />
                      <span>INITIATE FORENSIC SCAN</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Analysis Progress Bar */}
            {isAnalyzing && (
              <div className="mt-4 w-full bg-slate-950 rounded-full h-1.5 overflow-hidden border border-cyan-900/50">
                <div
                  className="bg-cyan-400 h-full transition-all duration-300 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                  style={{ width: `${analysisProgress}%` }}
                ></div>
              </div>
            )}
          </div>
        </section>

        {/* ------------------------------------------------------------------
            COLUMN 2: HISTORICAL VIEW & AUDIT TRAIL (xl:col-span-4 or 3)
            ------------------------------------------------------------------ */}
        <aside className="xl:col-span-4 2xl:col-span-3 flex flex-col space-y-6">
          <div className="bg-slate-900/90 border border-slate-800/90 rounded-xl p-5 shadow-xl flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3.5">
              <div className="flex items-center space-x-2">
                <Icons.Fingerprint />
                <h2 className="text-sm font-bold text-slate-100 tracking-wider font-mono uppercase">
                  Investigation Log
                </h2>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 bg-slate-800 text-slate-300 border border-slate-700 rounded">
                SEC-CHAIN
              </span>
            </div>

            <p className="text-[11px] font-mono text-slate-400 mt-2.5 mb-4">
              IMMUTABLE RECORD OF PRIOR FORENSIC EVALUATIONS & CRYPTOGRAPHIC SEALS
            </p>

            {/* Historical Cards List */}
            <div className="flex-1 space-y-3 overflow-y-auto pr-1">
              {MOCK_INVESTIGATIONS.map((investigation) => (
                <div
                  key={investigation.id}
                  className="group relative bg-slate-950/70 hover:bg-slate-950 border border-slate-800/80 hover:border-slate-700 p-3.5 rounded-lg transition-all duration-150"
                >
                  {/* Top line: ID and Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-tight">
                      {investigation.id}
                    </span>
                    <span
                      className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${investigation.statusBadge.bg}`}
                    >
                      {investigation.statusBadge.label}
                    </span>
                  </div>

                  {/* File Name */}
                  <div className="font-mono text-xs text-slate-200 font-medium truncate mb-2 group-hover:text-cyan-200 transition-colors">
                    {investigation.fileName}
                  </div>

                  {/* Forensic Metadata Pills */}
                  <div className="grid grid-cols-2 gap-2 text-[10px] font-mono text-slate-400 bg-slate-900/70 p-2 rounded border border-slate-800/60 mb-2">
                    <div>
                      <span className="text-slate-500 block">RESOLUTION</span>
                      <span className="text-slate-300">{investigation.dimensions}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">FILE SIZE</span>
                      <span className="text-slate-300">{investigation.fileSize}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">MODE</span>
                      <span className="text-slate-300">{investigation.mode}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">CONFIDENCE</span>
                      <span className="text-cyan-400 font-semibold">{investigation.confidence}</span>
                    </div>
                  </div>

                  {/* Hash & Timestamp */}
                  <div className="text-[9px] font-mono text-slate-500 space-y-1">
                    <div className="truncate">
                      <span className="text-slate-600">SHA256: </span>
                      <span className="text-slate-400">{investigation.hash}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-500 pt-1 border-t border-slate-900">
                      <span>TIMESTAMP</span>
                      <span>{investigation.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Audit Telemetry */}
            <div className="mt-4 pt-3.5 border-t border-slate-800/80 bg-slate-950/40 -mx-1 -mb-1 p-3 rounded-b-lg">
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>TOTAL EXAMINED:</span>
                <span className="text-slate-200 font-bold">1,402 FILES</span>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mt-1">
                <span>SYNTHESIS DETECT RATE:</span>
                <span className="text-rose-400 font-bold">28.4%</span>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

/**
 * ============================================================================
 * MODULAR DROPZONE COMPONENT (With strict client-side raster validation)
 * ============================================================================
 */
function DropZone({
  zoneId,
  title,
  badgeText,
  helperDescription,
  currentFile,
  onFileAccepted,
  onFileRemoved,
  accentColor = 'cyan'
}) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [validationError, setValidationError] = useState(null);
  const fileInputRef = useRef(null);

  // Dynamic Accent Configuration
  const accentClasses = {
    cyan: {
      border: 'hover:border-cyan-500/70',
      activeBorder: 'border-cyan-500 bg-cyan-950/20 shadow-[0_0_20px_rgba(6,182,212,0.15)]',
      badge: 'bg-cyan-950/80 text-cyan-300 border-cyan-800',
      textAccent: 'text-cyan-400',
      button: 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
    },
    emerald: {
      border: 'hover:border-emerald-500/70',
      activeBorder: 'border-emerald-500 bg-emerald-950/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]',
      badge: 'bg-emerald-950/80 text-emerald-300 border-emerald-800',
      textAccent: 'text-emerald-400',
      button: 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
    },
    amber: {
      border: 'hover:border-amber-500/70',
      activeBorder: 'border-amber-500 bg-amber-950/20 shadow-[0_0_20px_rgba(245,158,11,0.15)]',
      badge: 'bg-amber-950/80 text-amber-300 border-amber-800',
      textAccent: 'text-amber-400',
      button: 'bg-amber-500 hover:bg-amber-400 text-slate-950'
    }
  }[accentColor] || accentClasses.cyan;

  /**
   * STRICT CLIENT-SIDE VALIDATION PIPELINE
   * Rejects non-raster files (e.g. SVG, PDF, GIF, TIFF, HEIC, EXE, TXT)
   */
  const validateAndProcessFile = useCallback(
    (file) => {
      setValidationError(null);

      if (!file) return;

      const fileExtension = '.' + file.name.split('.').pop().toLowerCase();
      const isValidMime = ACCEPTED_MIME_TYPES.includes(file.type);
      const isValidExt = ACCEPTED_EXTENSIONS.includes(fileExtension);

      // Strict enforcement check
      if (!isValidMime && !isValidExt) {
        setValidationError({
          title: 'UNSUPPORTED FILE ARCHITECTURE',
          message: `File format [${file.type || fileExtension}] is strictly rejected. Only standard raster assets (JPEG, PNG, WebP) are authorized for forensic telemetry.`,
          detectedType: file.type || 'Unknown MIME'
        });
        return;
      }

      // Max size check (e.g. 50MB for security payload)
      const MAX_BYTES = 50 * 1024 * 1024;
      if (file.size > MAX_BYTES) {
        setValidationError({
          title: 'PAYLOAD SIZE EXCEEDED',
          message: 'The selected asset exceeds the 50MB buffer limit for client-side hashing.',
          detectedType: `${(file.size / (1024 * 1024)).toFixed(2)} MB`
        });
        return;
      }

      // Generate object URL for preview and probe dimensions
      const previewUrl = URL.createObjectURL(file);
      const img = new Image();
      img.src = previewUrl;

      img.onload = () => {
        // Construct standard forensic file model
        const forensicFile = {
          fileObject: file,
          name: file.name,
          sizeFormatted:
            file.size > 1024 * 1024
              ? `${(file.size / (1024 * 1024)).toFixed(2)} MB`
              : `${(file.size / 1024).toFixed(1)} KB`,
          rawBytes: file.size,
          mimeType: file.type || `image/${fileExtension.replace('.', '')}`,
          width: img.naturalWidth,
          height: img.naturalHeight,
          previewUrl: previewUrl,
          lastModified: new Date(file.lastModified).toISOString().replace('T', ' ').substring(0, 19) + ' UTC',
          pseudoHash: pseudoGenerateHash(file.name + file.size + file.lastModified),
          valid: true
        };

        onFileAccepted(forensicFile);
      };

      img.onerror = () => {
        setValidationError({
          title: 'CORRUPTED RASTER STREAM',
          message: 'Unable to decode raster bitmap. The file headers may be tampered or truncated.',
          detectedType: file.type
        });
      };
    },
    [onFileAccepted]
  );

  // Deterministic pseudo-hash for rapid preview telemetry
  const pseudoGenerateHash = (seed) => {
    let h1 = 0xdeadbeef,
      h2 = 0x41c64e6d;
    for (let i = 0; i < seed.length; i++) {
      const ch = seed.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    const hex = (4294967296 * (2097151 & h2) + (h1 >>> 0)).toString(16);
    return `${hex}a901c5176b10a6d83961dd3c1ac88b59`.substring(0, 48);
  };

  /**
   * Drag-and-Drop Event Handlers
   */
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragOver) setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      validateAndProcessFile(e.dataTransfer.files[0]);
    }
  };

  const handleManualSelect = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      validateAndProcessFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* Zone Header Bar */}
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center space-x-2">
          <span className="font-mono text-xs font-bold text-slate-200 tracking-wide uppercase">
            {title}
          </span>
          <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${accentClasses.badge}`}>
            {badgeText}
          </span>
        </div>
        {currentFile && (
          <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
            <Icons.ShieldCheck /> BUFFER SECURED
          </span>
        )}
      </div>

      {/* Main Drag-Drop Target Container */}
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => !currentFile && fileInputRef.current?.click()}
        className={`relative flex-1 min-h-[300px] md:min-h-[380px] rounded-xl border-2 border-dashed transition-all duration-200 flex flex-col justify-center items-center p-6 ${
          validationError
            ? 'border-rose-500 bg-rose-950/20 ring-4 ring-rose-500/10'
            : isDragOver
            ? `${accentClasses.activeBorder}`
            : currentFile
            ? 'border-slate-800 bg-slate-950/90'
            : `border-slate-800/90 bg-slate-950/40 hover:bg-slate-950/70 ${accentClasses.border} cursor-pointer`
        }`}
      >
        {/* Hidden Fallback Input */}
        <input
          ref={fileInputRef}
          type="file"
          id={zoneId}
          accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp"
          onChange={handleManualSelect}
          className="hidden"
        />

        {/* ==============================================================
            STATE 1: VALIDATION ERROR BANNER (Active when illegal file dropped)
            ============================================================== */}
        {validationError ? (
          <div className="w-full max-w-md p-5 bg-rose-950/70 border border-rose-500/80 rounded-lg text-center shadow-2xl backdrop-blur-md">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-rose-500/20 border border-rose-500 flex items-center justify-center text-rose-400">
              <Icons.FileCross />
            </div>
            <h3 className="font-mono text-sm font-bold text-rose-300 tracking-wider mb-1 uppercase">
              {validationError.title}
            </h3>
            <p className="text-xs font-mono text-rose-200/90 mb-3 leading-relaxed">
              {validationError.message}
            </p>
            <div className="text-[10px] font-mono text-rose-400 bg-rose-900/40 py-1 px-2 rounded mb-4 border border-rose-800">
              DETECTED SIGNATURE: {validationError.detectedType}
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setValidationError(null);
              }}
              className="px-4 py-2 rounded bg-rose-600 hover:bg-rose-500 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              DISMISS ERROR & RETRY
            </button>
          </div>
        ) : currentFile ? (
          /* ==============================================================
             STATE 2: LOADED FILE WITH FORENSIC METADATA
             ============================================================== */
          <div
            className="w-full h-full flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Preview Window with Crosshair Reticle Overlay */}
            <div className="relative flex-1 min-h-[190px] rounded-lg bg-black/60 border border-slate-800 overflow-hidden flex items-center justify-center group">
              <img
                src={currentFile.previewUrl}
                alt={currentFile.name}
                className="max-h-56 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              />

              {/* Forensic reticle overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-full h-full border border-cyan-500/40 grid grid-cols-3 grid-rows-3">
                  <div className="border-r border-b border-cyan-500/20"></div>
                  <div className="border-r border-b border-cyan-500/20"></div>
                  <div className="border-b border-cyan-500/20"></div>
                  <div className="border-r border-b border-cyan-500/20"></div>
                  <div className="border-r border-b border-cyan-500/20"></div>
                  <div className="border-b border-cyan-500/20"></div>
                  <div className="border-r border-cyan-500/20"></div>
                  <div className="border-r border-cyan-500/20"></div>
                  <div></div>
                </div>
              </div>

              {/* Floating Action Strip */}
              <div className="absolute top-2 right-2 flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => onFileRemoved()}
                  title="Remove Asset"
                  className="p-1.5 rounded-md bg-slate-900/90 hover:bg-rose-950 border border-slate-700 hover:border-rose-500 text-slate-300 hover:text-rose-400 transition-colors"
                >
                  <Icons.Trash />
                </button>
              </div>

              {/* Format Badge Overlay */}
              <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-700 text-[10px] font-mono text-cyan-300">
                {currentFile.mimeType.toUpperCase()}
              </div>
            </div>

            {/* Technical Metadata Matrix */}
            <div className="mt-3 bg-slate-950 border border-slate-800/80 rounded-lg p-3 font-mono text-[11px] space-y-2">
              <div className="flex justify-between items-center border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-400 truncate max-w-[200px]" title={currentFile.name}>
                  {currentFile.name}
                </span>
                <span className="text-cyan-400 font-bold">{currentFile.sizeFormatted}</span>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-400 text-[10px]">
                <div>
                  <span className="text-slate-500">DIMENSIONS:</span>{' '}
                  <span className="text-slate-200">
                    {currentFile.width} x {currentFile.height} px
                  </span>
                </div>
                <div>
                  <span className="text-slate-500">TIMESTAMP:</span>{' '}
                  <span className="text-slate-200">{currentFile.lastModified.split(' ')[0]}</span>
                </div>
              </div>

              <div className="text-[9px] pt-1 border-t border-slate-900 truncate">
                <span className="text-slate-600">STAGED_HASH: </span>
                <span className="text-slate-400 font-mono">{currentFile.pseudoHash}...</span>
              </div>
            </div>
          </div>
        ) : (
          /* ==============================================================
             STATE 3: IDLE AWAITING DROP / INTERACTION
             ============================================================== */
          <div className="text-center max-w-sm pointer-events-none select-none">
            <div
              className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center transition-colors ${
                isDragOver
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-400'
                  : 'bg-slate-900/80 text-slate-400 border border-slate-800'
              }`}
            >
              <Icons.UploadCloud />
            </div>

            <div className="font-mono text-sm font-bold text-slate-200 mb-1">
              DRAG & DROP RASTER ASSET HERE
            </div>

            <p className="text-xs text-slate-400 font-mono mb-4 leading-relaxed">
              {helperDescription}
            </p>

            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>OR CLICK TO BROWSE FILESYSTEM</span>
            </div>

            <div className="mt-4 text-[10px] font-mono text-slate-500">
              ACCEPTED FORMATS: <span className="text-slate-400 font-semibold">.JPG, .JPEG, .PNG, .WEBP</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

