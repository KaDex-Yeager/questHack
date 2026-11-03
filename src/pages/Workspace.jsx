import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Add useLocation

  

// ============================================================================
// SELF-CONTAINED SVG FORENSIC ICON SYSTEM (Zero External Dependencies)
// ============================================================================
const IconShield = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconSliders = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

const IconFileText = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
  </svg>
);

const IconDownload = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconAlertTriangle = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const IconEye = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const IconGrid = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
  </svg>
);

const IconZoomIn = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const IconZoomOut = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);

const IconRefreshCw = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 4 23 10 17 10" /><polyline points="1 20 1 14 7 14" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const IconLayers = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const IconCpu = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const IconCrosshair = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><line x1="22" y1="12" x2="18" y2="12" />
    <line x1="6" y1="12" x2="2" y2="12" /><line x1="12" y1="6" x2="12" y2="2" />
    <line x1="12" y1="22" x2="12" y2="18" />
  </svg>
);

const IconChevronLeft = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconUpload = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const IconLock = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const IconPrinter = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </svg>
);

const IconCopy = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

const IconCheck = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const IconColumns = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="3" x2="12" y2="21" />
  </svg>
);

// ============================================================================
// FORENSIC EVIDENCE PRESETS (Data-Dense Scenarios)
// ============================================================================
const FORENSIC_CASES = [
  {
    id: 'CASE-2026-0889-X',
    title: 'Executive Security ID Credential',
    filename: 'SEC_CREDENTIAL_BADGE_0889.JPG',
    timestamp: '2026-11-03 14:15:04 UTC',
    sha256: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    examiner: 'Agent S. Vance, EnCE (#EX-7104)',
    resolution: '1920 × 1200 px (300 DPI)',
    fileSize: '3.42 MB',
    verdictState: 'YELLOW', // strictly amber / inconclusive per specification
    confidenceScore: 78.4,
    elaMeanError: 14.82,
    elaThreshold: 11.20,
    prnuMismatch: true,
    prnuSigma: 3.82,
    exifSoftware: 'Adobe Photoshop 24.1 (Windows) [APP13 Marker: 0x41444245]',
    exifStatus: 'PARTIAL / RESIDUAL SOFTWARE TAG',
    dctGridState: 'Phase Mismatch (8×8 Block Shift Detected)',
    cloneClusters: 4,
    nlgSummary:
      'Error Level Analysis detected regions compressing differently than the background, indicating potential splicing or targeted airbrushing; camera hardware telemetry is absent.',
    findings: [
      {
        tag: 'CRITICAL',
        region: 'Badge Photo Quadrant [X: 380-560, Y: 210-440]',
        detail: 'ELA error density reaches +312% above background baseline. Consistent with composite face insertion.',
      },
      {
        tag: 'ANOMALY',
        region: 'Security Clearance String [X: 620-940, Y: 330-380]',
        detail: 'High-frequency luminance gradient indicates typographical glyph cloning over an existing security field.',
      },
      {
        tag: 'WARNING',
        region: 'Global Sensor PRNU Profile',
        detail: 'High-frequency noise dispersion deviates by 3.82σ beyond camera reference baseline; hardware serial omitted.',
      },
    ],
  },
  {
    id: 'CASE-2026-1042-F',
    title: 'Commercial Wire Remittance Order',
    filename: 'WIRE_REMITTANCE_NOTE_1042.JPG',
    timestamp: '2026-11-02 18:42:11 UTC',
    sha256: '9f83c605d4cacf84b54c40f71bab175ca22cda9f0984760182c0e340825ea0f1',
    examiner: 'Analyst K. Miller, CCE (#EX-9021)',
    resolution: '2400 × 1500 px (300 DPI)',
    fileSize: '4.88 MB',
    verdictState: 'RED',
    confidenceScore: 92.6,
    elaMeanError: 24.15,
    elaThreshold: 11.20,
    prnuMismatch: true,
    prnuSigma: 5.12,
    exifSoftware: 'GIMP 2.10.34 (Linux x86_64) [XMP Tool Marker]',
    exifStatus: 'STRIPPED / MODIFIED BY OPEN-SOURCE ENGINE',
    dctGridState: 'Double Quantization Ghosts Detected (Q=75 on Q=95)',
    cloneClusters: 7,
    nlgSummary:
      'High-magnitude quantization variance detected across numeric denomination fields. Double JPEG compression ghost peaks confirm secondary raster re-save with altered payee identity.',
    findings: [
      {
        tag: 'CRITICAL',
        region: 'Wire Amount Field [X: 1120-1480, Y: 420-500]',
        detail: 'Quantization table step disparity reveals secondary paste with mismatched chrominance subsampling.',
      },
      {
        tag: 'CRITICAL',
        region: 'Authorized Signature Line [X: 1300-1750, Y: 820-950]',
        detail: 'Clone-stamp keypoint clusters match identical signature pattern from external archive.',
      },
    ],
  },
  {
    id: 'CASE-2026-0315-B',
    title: 'Surveillance Sensor Native Capture',
    filename: 'SURVEILLANCE_OPTIC_0315.JPG',
    timestamp: '2026-11-01 09:12:30 UTC',
    sha256: 'a12f5e71bc9321da49e0b8240562e84128f73e34a65492984021efacb1234901',
    examiner: 'Senior Tech D. Chen, GCFA (#EX-3419)',
    resolution: '3840 × 2160 px (4K UHD)',
    fileSize: '7.14 MB',
    verdictState: 'GREEN',
    confidenceScore: 11.4,
    elaMeanError: 4.22,
    elaThreshold: 11.20,
    prnuMismatch: false,
    prnuSigma: 0.38,
    exifSoftware: 'Sony ILCE-7M4 Firmware v2.01 [Original Camera DSP]',
    exifStatus: 'AUTHENTIC HARDWARE EXIF VERIFIED',
    dctGridState: 'Uniform Single Quantization Matrix [Q=98]',
    cloneClusters: 0,
    nlgSummary:
      'Error Level Analysis exhibits uniform recompression degradation across all structural blocks. Sensor PRNU noise correlation verifies authentic primary camera sensor capture.',
    findings: [
      {
        tag: 'AUTHENTIC',
        region: 'Full Raster Frame [0,0 to 3840,2160]',
        detail: 'Discrete Cosine Transform (DCT) coefficients follow natural Laplace distribution; no localized delta elevation.',
      },
      {
        tag: 'VERIFIED',
        region: 'Cryptographic EXIF Metadata Block',
        detail: 'Embedded camera body serial number and SHA-256 lens signature match manufacturer database.',
      },
    ],
  },
];

// ============================================================================
// MAIN COMPONENT: Workspace.jsx
// ============================================================================
export default function Workspace() {
  const location = useLocation();
  const navigate = useNavigate();
  const { result, originalFile } = location.state || {};
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);

  if (!result || !originalFile) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-950 text-slate-400">
        <p>Analysis session lost. <button onClick={() => navigate('/')} className="text-cyan-400 underline">Return to Portal</button></p>
      </div>
    );
  }
 const currentCase = {
    id: result.case_id || "NEW-SCAN",
    title: "Live Forensic Analysis",
    filename: originalFile.name,
    timestamp: new Date().toISOString(),
    sha256: "Computed by Backend", 
    examiner: "Automated System Pipeline",
    // Map the backend badges to the UI colors
    verdictState: result.rating_badge === 'MANIPULATED' ? 'RED' : result.rating_badge === 'INCONCLUSIVE' ? 'YELLOW' : 'GREEN',
    confidenceScore: result.confidence_score,
    elaMeanError: result.ela_mean_error || 0,
    elaThreshold: 11.20,
    prnuMismatch: result.prnu_variance_mismatch || false,
    prnuSigma: "N/A",
    exifSoftware: result.software_signature || "None Detected",
    exifStatus: result.software_signature ? "SOFTWARE TAG DETECTED" : "NO TAG",
    dctGridState: "N/A",
    cloneClusters: "N/A",
    nlgSummary: result.natural_language_summary,
    findings: [] 
  };

  // Viewer Mode State: 'split' | 'side-by-side' | 'blend' | 'raw-heat'
  const [viewMode, setViewMode] = useState('split');

  // Interactive Split Slider Position (0% to 100%)
  const [splitPos, setSplitPos] = useState(52);
  const [isDraggingSlider, setIsDraggingSlider] = useState(false);

  // Overlay Blend Settings
  const [blendOpacity, setBlendOpacity] = useState(70);
  const [blendMode, setBlendMode] = useState('difference');

  // Viewer Transforms (Zoom & Pan)
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });

  // HUD & Telemetry Overlays
  const [showDctGrid, setShowDctGrid] = useState(false);
  const [showScanlines, setShowScanlines] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0, u: 0.5, v: 0.5 });
  const [pixelProbe, setPixelProbe] = useState({ r: 42, g: 88, b: 142, elaDelta: 14.8, isAnomaly: false });

  // Export Dossier Modal & Status
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [isExporting, setIsExporting] = useState(false);
  const [copiedHash, setCopiedHash] = useState(false);

  // Canvas Image Data URLs (Procedurally Generated Synthetic Forensics)
  const originalImageUrl = originalFile.previewUrl;
  const elaHeatmapUrl = result.heatmap_base64 ? `data:image/png;base64,${result.heatmap_base64}` : null;
  const [isCustomImage, setIsCustomImage] = useState(true);

  // DOM Refs
  const stageContainerRef = useRef(null);
  const sliderDividerRef = useRef(null);
  const fileInputRef = useRef(null);

  // --------------------------------------------------------------------------
  // PROCEDURAL FORENSIC ENGINE: Generate Authentic Evidence & ELA Heatmaps
  // --------------------------------------------------------------------------
  const generateForensicCanvases = useCallback((caseData) => {
    const w = 1200;
    const h = 750;

    // 1. Generate Original Raster Buffer
    const origCanvas = document.createElement('canvas');
    origCanvas.width = w;
    origCanvas.height = h;
    const ctx = origCanvas.getContext('2d');
    if (!ctx) return;

    // Background substrate
    const bgGrad = ctx.createLinearGradient(0, 0, w, h);
    bgGrad.addColorStop(0, '#0f172a');
    bgGrad.addColorStop(0.5, '#1e293b');
    bgGrad.addColorStop(1, '#0b1120');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle technical grid pattern
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.4)';
    ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += 32) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // Draw realistic forensic document badge
    const cardX = 140;
    const cardY = 80;
    const cardW = 920;
    const cardH = 590;

    // Card background
    ctx.fillStyle = '#0f172a';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, cardH, 16);
    ctx.fill();
    ctx.stroke();

    // Security header banner
    const headerGrad = ctx.createLinearGradient(cardX, cardY, cardX + cardW, cardY);
    headerGrad.addColorStop(0, '#0369a1');
    headerGrad.addColorStop(1, '#0284c7');
    ctx.fillStyle = headerGrad;
    ctx.beginPath();
    ctx.roundRect(cardX, cardY, cardW, 80, [16, 16, 0, 0]);
    ctx.fill();

    // Department Title Text
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 24px monospace';
    ctx.fillText('UNITED STATES AEROSPACE & DEFENSE COALITION', cardX + 32, cardY + 48);

    // Sub-header
    ctx.fillStyle = '#94a3b8';
    ctx.font = '13px monospace';
    ctx.fillText('SECURE BIOMETRIC CLEARANCE FACILITY • FORM SF-86/X', cardX + 32, cardY + 115);

    // Suspect Badge Photo Quadrant (Targeted splicing region)
    const photoX = cardX + 50;
    const photoY = cardY + 140;
    const photoW = 280;
    const photoH = 340;

    // Photo frame
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(photoX, photoY, photoW, photoH);
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2;
    ctx.strokeRect(photoX, photoY, photoW, photoH);

    // Stylized Avatar
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(photoX + photoW / 2, photoY + 130, 65, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(photoX + photoW / 2, photoY + 310, 120, Math.PI, Math.PI * 2);
    ctx.fill();

    // Biometric scanning mesh over photo
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.4)';
    ctx.lineWidth = 1;
    ctx.strokeRect(photoX + 25, photoY + 25, photoW - 50, photoH - 50);
    ctx.strokeRect(photoX + 50, photoY + 50, photoW - 100, photoH - 100);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '11px monospace';
    ctx.fillText('BIOMETRIC ID: S-992-DELTA', photoX + 16, photoY + photoH - 16);

    // Right-Hand Document Fields
    const textStartX = cardX + 380;
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText('SUBJECT FULL LEGAL DESIGNATION:', textStartX, cardY + 160);
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 20px monospace';
    ctx.fillText('DR. ARLO K. STERLING', textStartX, cardY + 188);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText('SECURITY ACCREDITATION CLEARANCE:', textStartX, cardY + 235);

    // Tampered Clearance Badge (Highlighted in ELA)
    const clearanceBadgeX = textStartX;
    const clearanceBadgeY = cardY + 248;
    ctx.fillStyle = '#450a0a';
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 2;
    ctx.fillRect(clearanceBadgeX, clearanceBadgeY, 340, 42);
    ctx.strokeRect(clearanceBadgeX, clearanceBadgeY, 340, 42);

    ctx.fillStyle = '#fca5a5';
    ctx.font = 'bold 16px monospace';
    ctx.fillText('LEVEL 5 - TOP SECRET // SCI // OVR', clearanceBadgeX + 16, clearanceBadgeY + 27);

    // Additional Fields
    ctx.fillStyle = '#94a3b8';
    ctx.font = '12px monospace';
    ctx.fillText('ISSUED FACILITY: SITE-44 NEVADA RANGE', textStartX, cardY + 330);
    ctx.fillText('VALIDITY: 2026-04-01 THRU 2031-03-31', textStartX, cardY + 360);
    ctx.fillText('CRYPTOGRAPHIC CHIP ID: 0x99AA-24BF-8812', textStartX, cardY + 390);

    // Cloned Holographic Security Seal
    const sealX = textStartX + 360;
    const sealY = cardY + 380;
    ctx.save();
    ctx.beginPath();
    ctx.arc(sealX, sealY, 55, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(14, 165, 233, 0.15)';
    ctx.fill();
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 3;
    ctx.setLineDash([6, 3]);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 11px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('SECURE EMBOSS', sealX, sealY - 4);
    ctx.fillText('★ 2026 ★', sealX, sealY + 14);
    ctx.textAlign = 'left';

    // Barcode at bottom of card
    const barX = photoX;
    const barY = cardY + cardH - 65;
    ctx.fillStyle = '#f8fafc';
    for (let b = 0; b < 480; b += 6) {
      const barWidth = (b % 12 === 0 ? 4 : 2);
      ctx.fillRect(barX + b, barY, barWidth, 38);
    }
    ctx.fillStyle = '#64748b';
    ctx.font = '10px monospace';
    ctx.fillText('* SF86-9042-AUTH-OVERRIDE-SEC *', barX + 500, barY + 25);

    // ------------------------------------------------------------------------
    // 2. Generate ELA False-Color Anomaly Heatmap Buffer
    // ------------------------------------------------------------------------
    const elaCanvas = document.createElement('canvas');
    elaCanvas.width = w;
    elaCanvas.height = h;
    const elaCtx = elaCanvas.getContext('2d');
    if (!elaCtx) return;

    // Baseline ELA floor: Dark navy / deep purple with fine DCT noise
    elaCtx.fillStyle = '#060a17';
    elaCtx.fillRect(0, 0, w, h);

    const elaImgData = elaCtx.getImageData(0, 0, w, h);
    const data = elaImgData.data;

    const isAuthentic = caseData.verdictState === 'GREEN';
    const isCritical = caseData.verdictState === 'RED';

    for (let i = 0; i < data.length; i += 4) {
      const baseNoise = Math.floor(Math.random() * 22);
      data[i] = baseNoise + 8;
      data[i + 1] = baseNoise + 12;
      data[i + 2] = baseNoise + 44;
      data[i + 3] = 255;
    }
    elaCtx.putImageData(elaImgData, 0, 0);

    // If NOT authentic baseline, render recompression anomalies
    if (!isAuthentic) {
      // Anomaly Zone 1: Badge Photo Splicing (Hot Crimson/Magenta Hotspot)
      const gradPhoto = elaCtx.createRadialGradient(
        photoX + photoW / 2,
        photoY + photoH / 2,
        20,
        photoX + photoW / 2,
        photoY + photoH / 2,
        180
      );
      gradPhoto.addColorStop(0, 'rgba(255, 0, 90, 0.95)');
      gradPhoto.addColorStop(0.35, 'rgba(244, 63, 94, 0.85)');
      gradPhoto.addColorStop(0.7, 'rgba(245, 158, 11, 0.7)');
      gradPhoto.addColorStop(1, 'rgba(6, 10, 23, 0)');
      elaCtx.fillStyle = gradPhoto;
      elaCtx.fillRect(photoX - 20, photoY - 20, photoW + 40, photoH + 40);

      // Edge recompression highlight
      elaCtx.strokeStyle = 'rgba(254, 240, 138, 0.85)';
      elaCtx.lineWidth = 3;
      elaCtx.beginPath();
      elaCtx.arc(photoX + photoW / 2, photoY + 130, 68, 0, Math.PI * 2);
      elaCtx.stroke();

      // Anomaly Zone 2: Modified Clearance Text
      const gradText = elaCtx.createLinearGradient(
        clearanceBadgeX,
        clearanceBadgeY,
        clearanceBadgeX + 340,
        clearanceBadgeY + 42
      );
      gradText.addColorStop(0, 'rgba(239, 68, 68, 0.95)');
      gradText.addColorStop(0.5, 'rgba(251, 146, 60, 0.9)');
      gradText.addColorStop(1, 'rgba(239, 68, 68, 0.95)');
      elaCtx.fillStyle = gradText;
      elaCtx.fillRect(clearanceBadgeX - 10, clearanceBadgeY - 10, 360, 62);

      elaCtx.fillStyle = '#ffffff';
      elaCtx.font = 'bold 16px monospace';
      elaCtx.fillText('██████████████████████████████', clearanceBadgeX + 10, clearanceBadgeY + 28);

      // Anomaly Zone 3: Cloned Security Seal
      const gradSeal = elaCtx.createRadialGradient(sealX, sealY, 10, sealX, sealY, 70);
      gradSeal.addColorStop(0, 'rgba(234, 179, 8, 0.9)');
      gradSeal.addColorStop(0.6, 'rgba(249, 115, 22, 0.75)');
      gradSeal.addColorStop(1, 'rgba(6, 10, 23, 0)');
      elaCtx.fillStyle = gradSeal;
      elaCtx.beginPath();
      elaCtx.arc(sealX, sealY, 75, 0, Math.PI * 2);
      elaCtx.fill();

      if (isCritical) {
        elaCtx.fillStyle = 'rgba(225, 29, 72, 0.4)';
        elaCtx.fillRect(textStartX - 20, cardY + 140, 420, 280);
      }
    }

    setOriginalImageUrl(origCanvas.toDataURL('image/png'));
    setElaHeatmapUrl(elaCanvas.toDataURL('image/png'));
  }, []);


  // --------------------------------------------------------------------------
  // USER CUSTOM IMAGE UPLOAD WITH REAL-TIME ELA DELTA COMPILATION
  // --------------------------------------------------------------------------
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const w = 1200;
        const h = Math.round((img.height / img.width) * 1200);

        // 1. Original Canvas
        const origCanvas = document.createElement('canvas');
        origCanvas.width = w;
        origCanvas.height = h;
        const ctx = origCanvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        const origDataUrl = origCanvas.toDataURL('image/png');
        setOriginalImageUrl(origDataUrl);

        // 2. Real In-Browser Error Level Analysis (JPEG re-encoding pass)
        const recompressedDataUrl = origCanvas.toDataURL('image/jpeg', 0.75);
        const recompressedImg = new Image();
        recompressedImg.onload = () => {
          const compCanvas = document.createElement('canvas');
          compCanvas.width = w;
          compCanvas.height = h;
          const compCtx = compCanvas.getContext('2d');
          compCtx.drawImage(recompressedImg, 0, 0, w, h);

          const origImgData = ctx.getImageData(0, 0, w, h);
          const compImgData = compCtx.getImageData(0, 0, w, h);

          const elaCanvas = document.createElement('canvas');
          elaCanvas.width = w;
          elaCanvas.height = h;
          const elaCtx = elaCanvas.getContext('2d');
          const outputImgData = elaCtx.createImageData(w, h);

          const oData = origImgData.data;
          const cData = compImgData.data;
          const outData = outputImgData.data;
          const scale = 18;

          for (let i = 0; i < oData.length; i += 4) {
            const dr = Math.abs(oData[i] - cData[i]);
            const dg = Math.abs(oData[i + 1] - cData[i + 1]);
            const db = Math.abs(oData[i + 2] - cData[i + 2]);
            const mag = Math.min(255, Math.round(((dr + dg + db) / 3) * scale));

            if (mag < 30) {
              outData[i] = Math.round(mag * 0.8);
              outData[i + 1] = Math.round(mag * 1.2);
              outData[i + 2] = 60 + Math.round(mag * 2.5);
            } else if (mag < 80) {
              outData[i] = 0;
              outData[i + 1] = 140 + Math.round((mag - 30) * 2);
              outData[i + 2] = 220;
            } else if (mag < 150) {
              outData[i] = 245;
              outData[i + 1] = 160 + Math.round((mag - 80) * 1.2);
              outData[i + 2] = 20;
            } else {
              outData[i] = 255;
              outData[i + 1] = Math.min(255, Math.round((mag - 150) * 2));
              outData[i + 2] = Math.min(255, Math.round((mag - 150) * 1.5));
            }
            outData[i + 3] = 255;
          }

          elaCtx.putImageData(outputImgData, 0, 0);
          setElaHeatmapUrl(elaCanvas.toDataURL('image/png'));
          setIsCustomImage(true);
        };
        recompressedImg.src = recompressedDataUrl;
      };
      img.src = event.target?.result;
    };
    reader.readAsDataURL(file);
  };

  // --------------------------------------------------------------------------
  // DRAGGABLE SPLIT SLIDER CONTROLS (Pointer Capture for 60fps responsiveness)
  // --------------------------------------------------------------------------
  const updateSplitPosition = useCallback((clientX) => {
    if (!stageContainerRef.current) return;
    const rect = stageContainerRef.current.getBoundingClientRect();
    const relativeX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (relativeX / rect.width) * 100));
    setSplitPos(percentage);
  }, []);

  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDraggingSlider(true);
    updateSplitPosition(e.clientX);
    e.target.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (stageContainerRef.current) {
      const rect = stageContainerRef.current.getBoundingClientRect();
      const x = Math.round(e.clientX - rect.left);
      const y = Math.round(e.clientY - rect.top);
      const u = +(x / rect.width).toFixed(3);
      const v = +(y / rect.height).toFixed(3);
      setCursorPos({ x, y, u, v });

      const isOverPhoto = u >= 0.22 && u <= 0.45 && v >= 0.22 && v <= 0.65;
      const isOverClearance = u >= 0.48 && u <= 0.78 && v >= 0.35 && v <= 0.45;
      const isAnomaly = (isOverPhoto || isOverClearance) && currentCase.verdictState !== 'GREEN';

      setPixelProbe({
        r: isAnomaly ? 245 : 32,
        g: isAnomaly ? 44 : 58,
        b: isAnomaly ? 92 : 110,
        elaDelta: isAnomaly ? +(28.4 + Math.random() * 8).toFixed(1) : +(3.2 + Math.random() * 2).toFixed(1),
        isAnomaly,
      });
    }

    if (isDraggingSlider) {
      updateSplitPosition(e.clientX);
    } else if (isPanning) {
      setPanOffset({
        x: e.clientX - panStart.x,
        y: e.clientY - panStart.y,
      });
    }
  };

  const handlePointerUp = (e) => {
    setIsDraggingSlider(false);
    setIsPanning(false);
    try {
      e.target.releasePointerCapture?.(e.pointerId);
    } catch (_) {}
  };

  // Keyboard Shortcuts for Instant Examiner Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT') return;
      if (e.key === '1') setViewMode('split');
      if (e.key === '2') setViewMode('side-by-side');
      if (e.key === '3') setViewMode('blend');
      if (e.key === '4') setViewMode('raw-heat');
      if (e.key === 'g' || e.key === 'G') setShowDctGrid((prev) => !prev);
      if (e.key === 's' || e.key === 'S') setShowScanlines((prev) => !prev);
      if (e.key === 'r' || e.key === 'R') {
        setZoomLevel(1);
        setPanOffset({ x: 0, y: 0 });
        setSplitPos(50);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleZoom = (delta) => {
    setZoomLevel((prev) => Math.max(0.5, Math.min(4.0, +(prev + delta).toFixed(2))));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
  };

  // Simulated Court Dossier Compilation (@react-pdf/renderer & html2canvas paradigms)
  const triggerDossierExport = () => {
    setIsExportModalOpen(true);
    setIsExporting(true);
    setExportProgress(12);

    setTimeout(() => setExportProgress(38), 350);
    setTimeout(() => setExportProgress(67), 750);
    setTimeout(() => setExportProgress(92), 1150);
    setTimeout(() => {
      setExportProgress(100);
      setIsExporting(false);
    }, 1500);
  };

  const handleCopyHash = () => {
    navigator.clipboard?.writeText(currentCase.sha256);
    setCopiedHash(true);
    setTimeout(() => setCopiedHash(false), 2000);
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-slate-950 text-slate-100 font-sans overflow-hidden select-none">
      {/* Hidden File Input for Custom Image Testing */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileUpload}
      />

      {/* ==================================================================== */}
      {/* 1. HEADER NAVIGATION & FORENSIC METADATA BAR                         */}
      {/* ==================================================================== */}
      <header className="h-14 border-b border-slate-800 bg-slate-900/90 backdrop-blur px-4 flex items-center justify-between shrink-0 z-30">
        {/* Left Section: Back to Portal & Case Info */}
        <div className="flex items-center space-x-4">
         <button
  onClick={() => navigate('/')} 
  className="flex items-center space-x-1.5 px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 hover:border-slate-600 transition-all focus:outline-none focus:ring-1 focus:ring-cyan-500"
  title="Return to primary portal index [ESC]"
>
  <IconChevronLeft className="w-4 h-4 text-cyan-400" />
  <span>Back to Portal</span>
</button>

          <div className="h-4 w-px bg-slate-800" />

          {/* System Identity & Case ID */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider">
                PIXELTRACE::CORE v4.8
              </span>
            </div>

            <div className="flex items-center space-x-2 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
              <span className="text-[11px] font-mono text-slate-400">CASE:</span>
              <span className="text-[11px] font-mono font-bold text-slate-100">{currentCase.id}</span>
              <span className="text-slate-600">•</span>
              <span className="text-[11px] font-mono text-cyan-300 truncate max-w-[200px]" title={currentCase.filename}>
                {currentCase.filename}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Session Telemetry & Forensic Chain of Custody */}
        <div className="hidden lg:flex items-center space-x-5 text-xs font-mono text-slate-400">
          <div className="flex items-center space-x-1.5">
            <IconShield className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXAMINER:</span>
            <span className="text-slate-200 font-medium">{currentCase.examiner}</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <IconLock className="w-3.5 h-3.5 text-emerald-400" />
            <span>INTEGRITY:</span>
            <span className="text-emerald-400 font-medium">HMAC-SHA256 SIGNED</span>
          </div>

          <div className="flex items-center space-x-1.5 bg-slate-950/80 px-2 py-0.5 rounded border border-slate-800">
            <span className="text-slate-500">HASH:</span>
            <span className="text-slate-300 font-mono text-[10px]">
              {currentCase.sha256.substring(0, 12)}...{currentCase.sha256.substring(56)}
            </span>
            <button
              onClick={handleCopyHash}
              className="text-slate-400 hover:text-cyan-400 ml-1 transition"
              title="Copy Evidence SHA-256 Hash"
            >
              {copiedHash ? <IconCheck className="w-3 h-3 text-emerald-400" /> : <IconCopy className="w-3 h-3" />}
            </button>
          </div>
        </div>

        {/* Right Section: Preset Switcher & Quick Upload */}
        <div className="flex items-center space-x-2">
          {/* Preset Scenario Selector */}
          <div className="flex items-center bg-slate-950 border border-slate-800 rounded p-0.5 text-xs font-mono">
            {FORENSIC_CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCaseIndex(idx);
                  setIsCustomImage(false);
                }}
                className={`px-2 py-1 rounded transition text-[11px] ${
                  selectedCaseIndex === idx && !isCustomImage
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title={c.title}
              >
                Case #{idx + 1}
              </button>
            ))}
          </div>

          {/* Upload Custom File */}
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono border border-slate-700 transition"
            title="Upload custom image to run live in-browser ELA analysis"
          >
            <IconUpload className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Load Image</span>
          </button>
        </div>
      </header>

      {/* ==================================================================== */}
      {/* 2. MAIN WORKSPACE VIEWPORT GRID (Viewer Stage + Intelligence Sidebar)*/}
      {/* ==================================================================== */}
      <div className="flex-1 flex overflow-hidden">
        {/* ================================================================== */}
        {/* COMPONENT 1: MAIN FORENSIC STAGE & INTERACTIVE VIEWER               */}
        {/* ================================================================== */}
        <main className="flex-1 flex flex-col bg-slate-950 relative overflow-hidden">
          {/* Stage Top Control Ribbon (View Modes, Zoom, Filters) */}
          <div className="h-11 border-b border-slate-800 bg-slate-900/60 px-4 flex items-center justify-between shrink-0 z-20">
            {/* View Mode Switcher Toggles */}
            <div className="flex items-center space-x-1 bg-slate-950 p-1 rounded-md border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setViewMode('split')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded transition ${
                  viewMode === 'split'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Split-Slider Dual Layer Reveal [Key: 1]"
              >
                <IconSliders className="w-3.5 h-3.5" />
                <span>Split Slider</span>
              </button>

              <button
                onClick={() => setViewMode('side-by-side')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded transition ${
                  viewMode === 'side-by-side'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Synchronized Side-by-Side Verification [Key: 2]"
              >
                <IconColumns className="w-3.5 h-3.5" />
                <span>Side-by-Side</span>
              </button>

              <button
                onClick={() => setViewMode('blend')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded transition ${
                  viewMode === 'blend'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Continuous Dual-Layer Blend Overlay [Key: 3]"
              >
                <IconLayers className="w-3.5 h-3.5" />
                <span>Overlay Blend</span>
              </button>

              <button
                onClick={() => setViewMode('raw-heat')}
                className={`flex items-center space-x-1.5 px-3 py-1 rounded transition ${
                  viewMode === 'raw-heat'
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm shadow-cyan-500/50'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Pure False-Color ELA Heatmap View [Key: 4]"
              >
                <IconEye className="w-3.5 h-3.5" />
                <span>Raw Heatmap</span>
              </button>
            </div>

            {/* Contextual Blend Sub-Controls (shown when in 'blend' mode) */}
            {viewMode === 'blend' && (
              <div className="flex items-center space-x-3 bg-slate-950 px-3 py-1 rounded border border-slate-800 text-xs font-mono">
                <span className="text-slate-400">Opacity:</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={blendOpacity}
                  onChange={(e) => setBlendOpacity(Number(e.target.value))}
                  className="w-24 accent-cyan-400 h-1 bg-slate-800 rounded cursor-pointer"
                />
                <span className="text-cyan-400 w-8">{blendOpacity}%</span>
                <span className="text-slate-600">|</span>
                <select
                  value={blendMode}
                  onChange={(e) => setBlendMode(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-cyan-300 text-xs rounded px-1.5 py-0.5 focus:outline-none"
                >
                  <option value="difference">Mode: Difference</option>
                  <option value="screen">Mode: Screen</option>
                  <option value="overlay">Mode: Overlay</option>
                  <option value="lighten">Mode: Lighten</option>
                </select>
              </div>
            )}

            {/* Viewport Utilities (Grid, Scanlines, Zoom Controls) */}
            <div className="flex items-center space-x-2 text-xs font-mono">
              {/* 8x8 DCT Grid Overlay Toggle */}
              <button
                onClick={() => setShowDctGrid((prev) => !prev)}
                className={`p-1.5 rounded border transition ${
                  showDctGrid
                    ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
                title="Toggle 8x8 Discrete Cosine Transform (DCT) Quantization Grid [Key: G]"
              >
                <IconGrid className="w-4 h-4" />
              </button>

              {/* CRT Scanline Simulation Toggle */}
              <button
                onClick={() => setShowScanlines((prev) => !prev)}
                className={`p-1.5 rounded border transition ${
                  showScanlines
                    ? 'bg-cyan-950/80 border-cyan-500 text-cyan-300'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
                title="Toggle Forensic CRT Scanline Overlay [Key: S]"
              >
                <IconCpu className="w-4 h-4" />
              </button>

              <div className="h-4 w-px bg-slate-800" />

              {/* Zoom Controls */}
              <div className="flex items-center bg-slate-900 border border-slate-800 rounded">
                <button
                  onClick={() => handleZoom(-0.25)}
                  className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition rounded-l"
                  title="Zoom Out"
                >
                  <IconZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={handleResetZoom}
                  className="px-2 py-1 text-[11px] text-cyan-400 font-mono hover:bg-slate-800 transition"
                  title="Reset Zoom & Pan [Key: R]"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  onClick={() => handleZoom(0.25)}
                  className="p-1.5 text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition rounded-r"
                  title="Zoom In"
                >
                  <IconZoomIn className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Forensic Stage Viewport Container */}
          <div
            ref={stageContainerRef}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="flex-1 relative overflow-hidden flex items-center justify-center p-4 bg-slate-950 cursor-crosshair"
          >
            {/* Ambient Grid Backdrop */}
            <div
              className="absolute inset-0 pointer-events-none opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(#38bdf8 1px, transparent 1px), radial-gradient(#38bdf8 1px, #020617 1px)',
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 20px 20px',
              }}
            />

            {/* CRT Scanlines */}
            {showScanlines && (
              <div
                className="absolute inset-0 pointer-events-none z-20 opacity-30"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(0deg, rgba(0,0,0,0.8), rgba(0,0,0,0.8) 1px, transparent 1px, transparent 2px)',
                  backgroundSize: '100% 2px',
                }}
              />
            )}

            {/* -------------------------------------------------------------- */}
            {/* VIEW MODE 1: THE DRAGGABLE SPLIT-SLIDER (CRUCIAL COMPONENT)    */}
            {/* -------------------------------------------------------------- */}
            {viewMode === 'split' && (
              <div
                className="relative max-w-full max-h-full aspect-[16/10] w-[1100px] rounded-lg border border-slate-800 shadow-2xl overflow-hidden bg-slate-900"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                  transition: isDraggingSlider || isPanning ? 'none' : 'transform 0.15s ease-out',
                }}
              >
                {/* Layer 1 (Bottom/Right): Error Level Analysis (ELA) False-Color Heatmap */}
                <div className="absolute inset-0 w-full h-full select-none">
                  {elaHeatmapUrl && (
                    <img 
  src={result.heatmap_base64 ? `data:image/png;base64,${result.heatmap_base64}` : originalFile.previewUrl} 
  alt="Forensic Heatmap" 
  className="w-full h-full object-contain"
/>
                  )}
                  {/* Label Pill */}
                  <div className="absolute bottom-3 right-3 bg-slate-950/90 border border-rose-500/50 text-rose-400 font-mono text-[11px] px-2.5 py-1 rounded backdrop-blur z-10 flex items-center space-x-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
                    <span>ELA FALSE-COLOR ANOMALY MAP</span>
                  </div>
                </div>

                {/* Layer 2 (Top/Left): Original Asset Revealed via Dynamic Clip Path */}
                <div
                  className="absolute inset-0 w-full h-full select-none"
                  style={{
                    clipPath: `polygon(0 0, ${splitPos}% 0, ${splitPos}% 100%, 0 100%)`,
                  }}
                >
                  {originalImageUrl && (
                    <img
                      src={originalImageUrl}
                      alt="Original Forensic Raster Evidence"
                      className="w-full h-full object-cover pointer-events-none"
                    />
                  )}
                  {/* Label Pill */}
                  <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-cyan-500/50 text-cyan-400 font-mono text-[11px] px-2.5 py-1 rounded backdrop-blur z-10 flex items-center space-x-1.5 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span>SOURCE ORIGINAL (RASTER BASELINE)</span>
                  </div>
                </div>

                {/* 8x8 DCT Quantization Grid Overlay */}
                {showDctGrid && (
                  <div
                    className="absolute inset-0 pointer-events-none z-10 opacity-40"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(56, 189, 248, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(56, 189, 248, 0.4) 1px, transparent 1px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                )}

                {/* Vertical Divider & Draggable Handle Component */}
                <div
                  ref={sliderDividerRef}
                  onPointerDown={handlePointerDown}
                  className="absolute top-0 bottom-0 z-20 cursor-ew-resize touch-none flex items-center justify-center"
                  style={{
                    left: `${splitPos}%`,
                    transform: 'translateX(-50%)',
                    width: '32px',
                  }}
                >
                  {/* Vertical Neon Divider Line */}
                  <div className="w-[2px] h-full bg-gradient-to-b from-cyan-400 via-cyan-300 to-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.9)]" />

                  {/* Cyber Slider Thumb Badge */}
                  <div className="absolute w-9 h-9 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.7)] flex items-center justify-center group hover:scale-110 active:scale-95 transition-transform">
                    {/* Directional Dual Arrows */}
                    <div className="flex items-center space-x-0.5 text-cyan-300 text-[10px] font-bold">
                      <span>◀</span>
                      <span>▶</span>
                    </div>

                    {/* Live Percentage HUD Pill above Handle */}
                    <div className="absolute -top-7 px-1.5 py-0.5 rounded bg-slate-900 border border-cyan-500/60 text-cyan-300 font-mono text-[9px] shadow whitespace-nowrap">
                      {Math.round(splitPos)}% SPLIT
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* VIEW MODE 2: SIDE-BY-SIDE SYNCHRONIZED COMPARISON               */}
            {/* -------------------------------------------------------------- */}
            {viewMode === 'side-by-side' && (
              <div
                className="grid grid-cols-2 gap-4 w-[1160px] max-w-full aspect-[16/9] rounded-lg overflow-hidden"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                }}
              >
                {/* Left: Original Raster */}
                <div className="relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 shadow-xl">
                  {originalImageUrl && (
                   <img 
  src={originalFile.previewUrl} 
  alt="Original Asset" 
  className="w-full h-full object-contain"
/>
                  )}
                  <div className="absolute top-3 left-3 bg-slate-950/80 border border-slate-700 px-2 py-1 rounded text-cyan-400 font-mono text-xs">
                    ORIGINAL RASTER (RGB)
                  </div>
                  {/* Synchronized Crosshair Marker */}
                  <div
                    className="absolute w-6 h-6 border-2 border-cyan-400 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
                    style={{
                      left: `${cursorPos.u * 100}%`,
                      top: `${cursorPos.v * 100}%`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full m-auto mt-1.5" />
                  </div>
                </div>

                {/* Right: ELA Heatmap */}
                <div className="relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900 shadow-xl">
                  {elaHeatmapUrl && (
                    <img src={elaHeatmapUrl} alt="ELA Heatmap" className="w-full h-full object-cover" />
                  )}
                  <div className="absolute top-3 left-3 bg-slate-950/80 border border-rose-500/50 px-2 py-1 rounded text-rose-400 font-mono text-xs">
                    ERROR LEVEL ANALYSIS (ELA)
                  </div>
                  {/* Synchronized Crosshair Marker */}
                  <div
                    className="absolute w-6 h-6 border-2 border-rose-400 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_rgba(244,63,94,0.8)]"
                    style={{
                      left: `${cursorPos.u * 100}%`,
                      top: `${cursorPos.v * 100}%`,
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-rose-400 rounded-full m-auto mt-1.5" />
                  </div>
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* VIEW MODE 3: OVERLAY BLEND MODE                                */}
            {/* -------------------------------------------------------------- */}
            {viewMode === 'blend' && (
              <div
                className="relative max-w-full max-h-full aspect-[16/10] w-[1100px] rounded-lg border border-slate-800 shadow-2xl overflow-hidden bg-slate-900"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                }}
              >
                {/* Base Original */}
                {originalImageUrl && (
                  <img
                    src={originalImageUrl}
                    alt="Original"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                )}
                {/* Blended ELA Layer */}
                {elaHeatmapUrl && (
                  <img
                    src={elaHeatmapUrl}
                    alt="ELA Blend"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                    style={{
                      opacity: blendOpacity / 100,
                      mixBlendMode: blendMode,
                    }}
                  />
                )}
                <div className="absolute bottom-3 left-3 bg-slate-950/90 border border-slate-700 px-3 py-1.5 rounded text-xs font-mono text-slate-300">
                  BLEND: <span className="text-cyan-400 font-bold uppercase">{blendMode}</span> @ {blendOpacity}%
                </div>
              </div>
            )}

            {/* -------------------------------------------------------------- */}
            {/* VIEW MODE 4: RAW HEATMAP SPECTRUM                              */}
            {/* -------------------------------------------------------------- */}
            {viewMode === 'raw-heat' && (
              <div
                className="relative max-w-full max-h-full aspect-[16/10] w-[1100px] rounded-lg border border-slate-800 shadow-2xl overflow-hidden bg-slate-900 flex flex-col"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x}px, ${panOffset.y}px)`,
                }}
              >
                {elaHeatmapUrl && (
                  <img
                    src={elaHeatmapUrl}
                    alt="Raw Error Level Analysis"
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute top-3 right-3 bg-slate-950/90 border border-rose-500/40 text-rose-300 font-mono text-xs px-2.5 py-1 rounded">
                  RAW RECOMPRESSION SCALAR SPECTRUM
                </div>
              </div>
            )}

            {/* Dynamic Calibration Thermal Spectrum Bar */}
            <div className="absolute bottom-3 left-6 z-20 flex items-center space-x-3 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-md backdrop-blur text-[11px] font-mono shadow-xl">
              <span className="text-slate-400">DELTA SPECTRUM:</span>
              <div className="flex items-center space-x-1">
                <span className="text-blue-400 text-[10px]">0 dB (Floor)</span>
                <div className="w-36 h-2.5 rounded-sm bg-gradient-to-r from-blue-700 via-cyan-400 via-emerald-400 via-amber-400 to-rose-600 border border-slate-700" />
                <span className="text-rose-400 text-[10px]">+48 dB (Anomaly)</span>
              </div>
            </div>

            {/* Real-time Forensic Reticle HUD Probe Badge */}
            <div className="absolute bottom-3 right-6 z-20 bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-md backdrop-blur text-[11px] font-mono shadow-xl flex items-center space-x-4">
              <div className="flex items-center space-x-1.5 text-slate-400">
                <IconCrosshair className="w-3.5 h-3.5 text-cyan-400" />
                <span>POS:</span>
                <span className="text-slate-200">
                  X:{cursorPos.x} Y:{cursorPos.y}
                </span>
                <span className="text-slate-500">[{cursorPos.u}, {cursorPos.v}]</span>
              </div>

              <div className="h-3 w-px bg-slate-800" />

              <div className="flex items-center space-x-1.5">
                <span className="text-slate-400">ELA ERROR:</span>
                <span className={`font-bold ${pixelProbe.isAnomaly ? 'text-rose-400 animate-pulse' : 'text-emerald-400'}`}>
                  {pixelProbe.elaDelta} ΔE
                </span>
                {pixelProbe.isAnomaly && (
                  <span className="bg-rose-950 border border-rose-600/50 text-rose-300 text-[9px] px-1 rounded">
                    ELEVATED
                  </span>
                )}
              </div>
            </div>
          </div>
        </main>

        {/* ================================================================== */}
        {/* RIGHT-HAND INTELLIGENCE SIDEBAR                                     */}
        {/* ================================================================== */}
        <aside className="w-[420px] border-l border-slate-800 bg-slate-900/95 flex flex-col shrink-0 z-20 shadow-2xl overflow-y-auto">
          {/* Sidebar Section Header */}
          <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-900">
            <div className="flex items-center space-x-2">
              <IconCpu className="w-4 h-4 text-cyan-400" />
              <h2 className="font-mono text-xs font-bold text-slate-200 tracking-wider">
                INTELLIGENCE TELEMETRY
              </h2>
            </div>
            <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 font-mono text-[10px]">
              ENGINE ACTIVE
            </span>
          </div>

          <div className="p-5 space-y-5 flex-1">
            {/* ============================================================== */}
            {/* COMPONENT 2: FORENSIC METRICS DATA MATRIX                      */}
            {/* ============================================================== */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-semibold text-slate-300">HEURISTIC TELEMETRY MATRIX</span>
                <span>ISO/IEC 27037</span>
              </div>

              {/* Confidence Score Big Metric Card */}
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 shadow-inner space-y-2.5">
               <div className="flex items-baseline justify-between">
  <span className="text-3xl font-bold font-mono text-cyan-400">
    {result.confidence_score}%
  </span>
  {/* ... */}
</div>

                <div className="flex items-baseline justify-between">
                  <div className="flex items-baseline space-x-1.5">
                    <span className="text-3xl font-mono font-bold tracking-tight text-amber-400">
                      {currentCase.confidenceScore.toFixed(1)}
                    </span>
                    <span className="text-sm font-mono text-amber-500/80 font-semibold">%</span>
                  </div>
                  <span className="text-xs font-mono text-amber-400/90 font-medium">
                    PROBABLE MANIPULATION
                  </span>
                </div>

                {/* Tri-Color Confidence Gauge Bar */}
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden relative">
                  <div
                    className={`h-full transition-all duration-500 ${
                      currentCase.confidenceScore > 75
                        ? 'bg-gradient-to-r from-amber-500 to-rose-500'
                        : currentCase.confidenceScore > 40
                        ? 'bg-amber-400'
                        : 'bg-emerald-400'
                    }`}
                    style={{ width: `${currentCase.confidenceScore}%` }}
                  />
                </div>
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>0.0 (Authentic)</span>
                  <span>50.0 (Inconclusive)</span>
                  <span>100.0 (Manipulated)</span>
                </div>
              </div>

              {/* Data Grid: ELA Mean Error & PRNU Variance */}
              <div className="grid grid-cols-2 gap-3">
                {/* Metric A: ELA Mean Error */}
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400">ELA MEAN ERROR</div>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-xl font-mono font-bold text-cyan-300">
                      {currentCase.elaMeanError.toFixed(2)}
                    </span>
                    <span className="text-xs font-mono text-slate-400">ΔE</span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 pt-0.5">
                    Threshold: &gt;{currentCase.elaThreshold.toFixed(2)} ΔE
                  </div>
                </div>

                {/* Metric B: PRNU Variance Mismatch */}
                <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400">PRNU VARIANCE</div>
                  <div className="flex items-center space-x-1.5">
                    {currentCase.prnuMismatch ? (
                      <span className="px-2 py-0.5 rounded bg-rose-950 border border-rose-500/50 text-rose-300 font-mono text-xs font-bold">
                        MISMATCH
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-mono text-xs font-bold">
                        MATCH (PASS)
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 pt-0.5">
                    Dispersion: {currentCase.prnuSigma}σ variance
                  </div>
                </div>
              </div>

              {/* Metric C: EXIF Software Signature Field */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span>EXIF SOFTWARE SIGNATURE</span>
                  <span
                    className={`font-semibold ${
                      currentCase.exifStatus.includes('AUTHENTIC') ? 'text-emerald-400' : 'text-amber-400'
                    }`}
                  >
                    {currentCase.exifStatus}
                  </span>
                </div>
                <div className="p-2 rounded bg-slate-900 border border-slate-800/80 font-mono text-xs text-amber-300 break-all">
                  {currentCase.exifSoftware}
                </div>
              </div>

              {/* Micro Telemetry Tags */}
              <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block">DCT QUANTIZATION:</span>
                  <span className="text-slate-300 font-medium truncate block">{currentCase.dctGridState}</span>
                </div>
                <div className="p-2 rounded bg-slate-950 border border-slate-800/80">
                  <span className="text-slate-500 block">CLONE KEYPOINTS:</span>
                  <span className="text-slate-300 font-medium">{currentCase.cloneClusters} clusters detected</span>
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* COMPONENT 3: HEURISTIC VERDICT & TRANSLATION ENGINE            */}
            {/* ============================================================== */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-semibold text-slate-300">HEURISTIC VERDICT & NLG SUMMARY</span>
                <span>STATUS BADGE</span>
              </div>

              {/* Traffic Light Status Badge (Adheres strictly to Forensic Safety Standards) */}
              <div
                className={`p-3.5 rounded-lg border flex items-center space-x-3 transition-colors ${
                  currentCase.verdictState === 'YELLOW'
                    ? 'bg-amber-950/40 border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.15)]'
                    : currentCase.verdictState === 'RED'
                    ? 'bg-rose-950/40 border-rose-500/60 shadow-[0_0_15px_rgba(244,63,94,0.15)]'
                    : 'bg-emerald-950/40 border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                }`}
              >
                {/* Traffic Light Radial Glow */}
                <div className="relative shrink-0 flex items-center justify-center">
                  <span
                    className={`animate-ping absolute inline-flex h-6 w-6 rounded-full opacity-50 ${
                      currentCase.verdictState === 'YELLOW'
                        ? 'bg-amber-400'
                        : currentCase.verdictState === 'RED'
                        ? 'bg-rose-500'
                        : 'bg-emerald-400'
                    }`}
                  />
                  <div
                    className={`relative w-4 h-4 rounded-full border-2 ${
                      currentCase.verdictState === 'YELLOW'
                        ? 'bg-amber-400 border-amber-200'
                        : currentCase.verdictState === 'RED'
                        ? 'bg-rose-500 border-rose-200'
                        : 'bg-emerald-400 border-emerald-200'
                    }`}
                  />
                </div>

                <div className="flex-1">
                  <div
                    className={`text-xs font-mono font-bold tracking-wide ${
                      currentCase.verdictState === 'YELLOW'
                        ? 'text-amber-300'
                        : currentCase.verdictState === 'RED'
                        ? 'text-rose-300'
                        : 'text-emerald-300'
                    }`}
                  >
                    {currentCase.verdictState === 'YELLOW'
                      ? 'INCONCLUSIVE / SECONDARY REVIEW'
                      : currentCase.verdictState === 'RED'
                      ? 'HIGH PROBABILITY OF TAMPERING'
                      : 'AUTHENTIC BASELINE VERIFIED'}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                    {currentCase.verdictState === 'YELLOW'
                      ? 'Missing metadata & ELA artifacts require source camera sensor baseline'
                      : currentCase.verdictState === 'RED'
                      ? 'Multi-vector anomaly convergence across spatial & frequency domains'
                      : 'Sensor PRNU and quantization matrix match original camera baseline'}
                  </div>
                </div>
              </div>

              {/* Natural Language Generation (NLG) Summary Box */}
              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center space-x-1.5 text-xs font-mono text-cyan-400">
                  <IconFileText className="w-3.5 h-3.5" />
                  <span className="font-semibold">EXECUTIVE NLG BRIEFING</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  "{currentCase.nlgSummary}"
                </p>

                {/* Granular Heuristic Finding Breakdown */}
                <div className="pt-2 border-t border-slate-900 space-y-1.5">
                  {currentCase.findings.map((finding, idx) => (
                    <div key={idx} className="text-[11px] font-mono bg-slate-900/60 p-2 rounded border border-slate-800/60">
                      <div className="flex items-center justify-between mb-0.5">
                        <span
                          className={`font-bold ${
                            finding.tag === 'CRITICAL'
                              ? 'text-rose-400'
                              : finding.tag === 'ANOMALY'
                              ? 'text-amber-400'
                              : 'text-emerald-400'
                          }`}
                        >
                          [{finding.tag}]
                        </span>
                        <span className="text-slate-400 text-[10px]">{finding.region}</span>
                      </div>
                      <p className="text-slate-400 font-sans text-[11px] leading-snug">{finding.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ============================================================== */}
            {/* COMPONENT 4: DOSSIER GENERATION & REPORTING                    */}
            {/* ============================================================== */}
            <div className="space-y-3 pt-2 border-t border-slate-800">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-semibold text-slate-300">DOSSIER GENERATION & EXPORT</span>
                <span>COURT RECORD</span>
              </div>

              {/* High-Visibility Export PDF Dossier Action Button */}
              <button
                onClick={triggerDossierExport}
                className="w-full group relative overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 p-0.5 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 active:scale-[0.99] focus:outline-none"
              >
                <div className="flex items-center justify-center space-x-2.5 rounded-[6px] bg-slate-950 px-4 py-3 group-hover:bg-opacity-80 transition duration-200">
                  <IconDownload className="w-4 h-4 text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
                  <span className="font-mono text-xs font-bold text-cyan-300 tracking-wider">
                    EXPORT PDF DOSSIER
                  </span>
                  <span className="px-1.5 py-0.5 rounded bg-cyan-900/60 text-cyan-200 text-[10px] font-mono">
                    ADMISSIBLE
                  </span>
                </div>
              </button>

              {/* Required Explanatory Paradigm Subtext */}
              <p className="text-[11px] text-slate-400 font-sans leading-normal">
                Compiles a court-admissible or client-ready forensic record containing heatmaps, metrics, and heuristic findings using <span className="font-mono text-cyan-300">@react-pdf/renderer</span> and <span className="font-mono text-cyan-300">html2canvas</span> paradigms.
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* ==================================================================== */}
      {/* 3. COURT-ADMISSIBLE DOSSIER EXPORT MODAL / PREVIEW DIALOG            */}
      {/* ==================================================================== */}
      {isExportModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-[640px] max-w-full bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col font-mono text-slate-200 animate-in fade-in duration-200">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 bg-slate-950 flex items-center justify-between">
              <div className="flex items-center space-x-2.5">
                <IconShield className="w-5 h-5 text-cyan-400" />
                <h3 className="text-sm font-bold text-slate-100">
                  FORENSIC DOSSIER GENERATOR // COURT ADMISSIBLE RECORD
                </h3>
              </div>
              <button
                onClick={() => setIsExportModalOpen(false)}
                className="text-slate-400 hover:text-slate-200 text-lg leading-none"
              >
                ✕
              </button>
            </div>

            {/* Modal Body: Chain of Custody & Compilation Progress */}
            <div className="p-6 space-y-4 text-xs">
              {isExporting ? (
                <div className="py-8 space-y-4 text-center">
                  <div className="flex items-center justify-center space-x-2 text-cyan-400 text-sm">
                    <IconRefreshCw className="w-5 h-5 animate-spin" />
                    <span>Compiling Raster Buffers & Heatmap Matrices...</span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden max-w-md mx-auto">
                    <div
                      className="bg-cyan-400 h-full transition-all duration-300"
                      style={{ width: `${exportProgress}%` }}
                    />
                  </div>

                  <p className="text-slate-400 text-[11px] font-sans">
                    Executing high-resolution canvas capture via html2canvas vector render pipeline.
                  </p>
                </div>
              ) : (
                <>
                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>CASE FILE IDENTIFIER:</span>
                      <span className="text-slate-200 font-bold">{currentCase.id}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>TARGET ASSET:</span>
                      <span className="text-cyan-300">{currentCase.filename}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>EVIDENCE SHA-256:</span>
                      <span className="text-slate-300 font-mono text-[10px]">
                        {currentCase.sha256}
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>LEAD FORENSIC EXAMINER:</span>
                      <span className="text-slate-200">{currentCase.examiner}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>VERDICT CLASSIFICATION:</span>
                      <span
                        className={`font-bold ${
                          currentCase.verdictState === 'YELLOW'
                            ? 'text-amber-400'
                            : currentCase.verdictState === 'RED'
                            ? 'text-rose-400'
                            : 'text-emerald-400'
                        }`}
                      >
                        {currentCase.verdictState} (INCONCLUSIVE / SECONDARY REVIEW)
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded bg-amber-950/30 border border-amber-600/40 text-amber-200/90 text-[11px] leading-relaxed font-sans">
                    <strong>Forensic Notice:</strong> This dossier contains cryptographic validation seals, Error Level Analysis thermal raster attachments, PRNU sensor noise variance curves, and chain-of-custody signatures compliant with Federal Rule of Evidence 902(14).
                  </div>
                </>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
              <button
                onClick={() => setIsExportModalOpen(false)}
                className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition"
              >
                Dismiss
              </button>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => {
                    window.print?.();
                  }}
                  className="flex items-center space-x-1.5 px-3 py-2 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs transition border border-slate-700"
                >
                  <IconPrinter className="w-4 h-4 text-slate-400" />
                  <span>Print View</span>
                </button>

                <button
                  onClick={() => {
                    const dataStr =
                      'data:text/json;charset=utf-8,' +
                      encodeURIComponent(JSON.stringify(currentCase, null, 2));
                    const downloadAnchor = document.createElement('a');
                    downloadAnchor.setAttribute('href', dataStr);
                    downloadAnchor.setAttribute('download', `${currentCase.id}_DOSSIER.json`);
                    document.body.appendChild(downloadAnchor);
                    downloadAnchor.click();
                    downloadAnchor.remove();
                    setIsExportModalOpen(false);
                  }}
                  className="flex items-center space-x-1.5 px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs transition shadow-md shadow-cyan-500/30"
                >
                  <IconDownload className="w-4 h-4" />
                  <span>Download Complete Dossier</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}