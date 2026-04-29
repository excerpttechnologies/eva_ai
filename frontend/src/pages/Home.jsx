
import React, { useState, useRef, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackFileExplorer,
  useSandpack,
} from "@codesandbox/sandpack-react";
import {
  HiOutlineChat,
  HiOutlinePlus,
  HiOutlineX,
  HiOutlinePaperAirplane,
  HiOutlineShoppingCart,
  HiOutlineUserGroup,
  HiOutlineVideoCamera,
  HiOutlinePhotograph,
  HiOutlineLocationMarker,
  HiOutlineMap,
  HiOutlineCode,
  HiOutlineDownload,
  HiOutlineFolder,
  HiOutlineCheckCircle,
  HiOutlineRefresh,
  HiOutlineFolderOpen,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineExclamation,
  HiOutlineMenu,
  HiOutlineEye,
  HiOutlineCog,
  HiOutlineArrowsExpand,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineSave,
  HiOutlineSparkles,
  HiOutlineLightBulb,
  HiOutlineBeaker,
  HiOutlineSearch,
  HiOutlineMicrophone,
  HiOutlinePaperClip,
  HiOutlineGlobe,
  HiOutlinePhotograph as HiOutlineImage,
  HiOutlineClipboardCopy,
  HiOutlineCheck,
  HiOutlinePlay,
  HiOutlineUpload,
} from "react-icons/hi";
import { Typewriter } from "react-simple-typewriter";
import {
  BsRobot,
  BsHourglassSplit,
  BsExclamationTriangle,
  BsBug,
  BsWrench,
  BsCodeSquare,
  BsEye,
  BsStars,
  BsLightning,
  BsGear,
  BsGraphUp,
  BsCloudCheck,
  BsShieldCheck,
  BsFileText,
  BsFolder,
  BsCopy,
  BsCheck2,
  BsFolderFill,
  BsFolder2Open,
  BsCameraVideo,
  BsImage,
  BsZoomIn,
} from "react-icons/bs";
import {
  FaWhatsapp,
  FaFacebook,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { FiMonitor, FiTablet, FiSmartphone } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  vscDarkPlus,
  vs,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link } from "react-router-dom";
import StepComponent from "../components/StepComponent";

const API_BASE_URL = "https://agent.etpl.ai";

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";
const PEXELS_API_KEY =import.meta.env.VITE_PEXELS_API_KEY;
const STORAGE_KEY = "ai_projects";
const THEME_KEY = "ai_theme";
const EXPLORER_WIDTH_KEY = "explorer_width";
const OCR_API_KEY = import.meta.env.VITE_OCR_API_KEY;

// ─── Theme Definitions ────────────────────────────────────────────────────────
const themes = {
  dark: {
    bg: "#060e1a",
    sidebar: "#080f1c",
    card: "#0d1929",
    cardHover: "#111f30",
    border: "rgba(0,212,170,0.1)",
    borderLight: "rgba(0,212,170,0.18)",
    green: "#00d4aa",
    greenSoft: "#00a8e8",
    greenGradient: "linear-gradient(135deg,#00d4aa 0%,#00a8e8 100%)",
    textPrimary: "#e8f0f8",
    textSecondary: "#5a7a94",
    textMuted: "#3a5a70",
    inputBg: "#0d1929",
    inputBorder: "rgba(0,212,170,0.12)",
    inputFocus: "#00d4aa",
    yellow: "#f0b429",
    orange: "#e07b39",
    red: "#e05252",
    redSoft: "#e87878",
    hover: "#111e30",
    iconBg: "#0d1929",
    sandpackBg: "#0d1929",
    blue: "#00a8e8",
    purple: "#7466fa",
    purpleGradient: "linear-gradient(135deg,#7466fa 0%,#00a8e8 100%)",
    accent1: "#00d4aa",
    accent2: "#00a8e8",
    accent3: "#7466fa",
    glow: "0 0 30px rgba(0,212,170,0.2)",
    glowBlue: "0 0 30px rgba(0,168,232,0.2)",
    glowPurple: "0 0 30px rgba(116,102,250,0.2)",
  },
  light: {
    bg: "#F7F8FC",
    sidebar: "#FFFFFF",
    card: "#F1F5F9",
    cardHover: "#E8EEF6",
    border: "#E4E9F2",
    borderLight: "#CBD5E1",
    green: "#059669",
    greenSoft: "#0284C7",
    greenGradient: "linear-gradient(135deg,#059669 0%,#0284C7 100%)",
    textPrimary: "#0F172A",
    textSecondary: "#64748B",
    textMuted: "#94A3B8",
    inputBg: "#FFFFFF",
    inputBorder: "#E4E9F2",
    inputFocus: "#059669",
    yellow: "#D97706",
    orange: "#EA580C",
    red: "#DC2626",
    redSoft: "#EF4444",
    hover: "#EEF2F9",
    iconBg: "#F1F5F9",
    sandpackBg: "#FFFFFF",
    blue: "#0284C7",
    purple: "#7C3AED",
    purpleGradient: "linear-gradient(135deg,#7C3AED 0%,#0284C7 100%)",
    accent1: "#059669",
    accent2: "#0284C7",
    accent3: "#7C3AED",
    glow: "0 0 20px rgba(5,150,105,0.15)",
    glowBlue: "0 0 20px rgba(2,132,199,0.15)",
    glowPurple: "0 0 20px rgba(124,58,237,0.15)",
  },
};

// ─── Pexels Image Search ──────────────────────────────────────────────────────
const fetchImages = async (search) => {
  const res = await axios.get("https://api.pexels.com/v1/search", {
    params: { query: search, per_page: 30, orientation: "landscape" },
    headers: { Authorization: PEXELS_API_KEY },
  });
  return res.data.photos || [];
};

// ─── Pexels Video Search ──────────────────────────────────────────────────────
const fetchVideos = async (search) => {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query: search, per_page: 30, orientation: "landscape" },
    headers: { Authorization: PEXELS_API_KEY },
  });
  return res.data.videos || [];
};

const extractSearchQuery = (prompt) => {
  const cleaned = prompt
    .replace(
      /show me|find|search|get|fetch|display|videos? of|images? of|photos? of|pictures? of|give me|i want|i need|can you|please/gi,
      "",
    )
    .replace(/video|image|photo|picture|pic|img/gi, "")
    .trim();
  return cleaned || prompt;
};

const isImageSearchRequest = (prompt) => {
  const lower = prompt.toLowerCase();
  const imageKeywords = [
    "show me images",
    "find images",
    "search images",
    "get images",
    "image of",
    "images of",
    "photo of",
    "photos of",
    "picture of",
    "pictures of",
    "show images",
    "display images",
    "find photos",
    "search photos",
    "show photos",
    "show pictures",
    "find pictures",
    "image search",
    "photo search",
    "images",
  ];
  return imageKeywords.some((kw) => lower.includes(kw));
};

const isVideoSearchRequest = (prompt) => {
  const lower = prompt.toLowerCase();
  const videoKeywords = [
    "show me videos",
    "find videos",
    "search videos",
    "get videos",
    "video of",
    "videos of",
    "show videos",
    "display videos",
    "find video",
    "search video",
    "video search",
    "play videos",
    "clips of",
    "footage of",
    "show me clips",
    "find clips",
    "search clips",
  ];
  return videoKeywords.some((kw) => lower.includes(kw));
};

// ─── Screenshot Upload + Analyze ─────────────────────────────────────────────
// const analyzeScreenshot = async (imageFile) => {
//   const formData = new FormData();
//   formData.append("image", imageFile);
//   const res = await axios.post(ANALYZE_API_URL, formData, {
//     headers: { "Content-Type": "multipart/form-data" },
//     timeout: 60000,
//   });
//   return res.data; // { text, ai }
// };

const analyzeScreenshot = async (imageFile) => {
  try {
    if (!imageFile) throw new Error("No file selected");

    // ===== STEP 1: OCR =====
    const formData = new FormData();
    formData.append("file", imageFile);
    formData.append("language", "eng");

    const ocrRes = await axios.post("/ocr/parse/image", formData, {
      headers: {
        apikey: OCR_API_KEY,
        "Content-Type": "multipart/form-data",
      },
    });

    console.log("OCR RESPONSE:", ocrRes.data);

    const extractedText = ocrRes.data?.ParsedResults?.[0]?.ParsedText;

    if (!extractedText || extractedText.trim() === "") {
      throw new Error("OCR failed: No text extracted");
    }

    // ===== STEP 2: Groq =====
    const groqRes = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile", // ✅ updated model
        messages: [
          {
            role: "user",
            content: `Analyze this website text and return ONLY valid JSON:

{
  "website_type": "",
  "components": [],
  "important_text": "",
  "prompt": ""
}

Text:
${extractedText}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    const aiOutput = groqRes.data?.choices?.[0]?.message?.content;

    return {
      text: extractedText,
      ai: aiOutput,
    };
  } catch (err) {
    console.error("FULL ERROR:", err.response?.data || err.message);

    return {
      error: true,
      message: err.response?.data || err.message,
    };
  }
};

// ─── Screenshot Upload Modal ──────────────────────────────────────────────────
const ScreenshotUploadModal = ({ onClose, onAnalyzeAndBuild, isDark }) => {
  const [dragOver, setDragOver] = useState(false);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [userPrompt, setUserPrompt] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analyzeResult, setAnalyzeResult] = useState(null);
  const [step, setStep] = useState("upload"); // upload | prompt | analyzing | result
  const fileInputRef = useRef(null);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped && dropped.type.startsWith("image/")) {
      setFile(dropped);
      setPreview(URL.createObjectURL(dropped));
      setStep("prompt");
    }
  };

  const handleFileSelect = (e) => {
    const selected = e.target.files[0];
    if (selected && selected.type.startsWith("image/")) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
      setStep("prompt");
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setStep("analyzing");
    setIsAnalyzing(true);
    try {
      const result = await analyzeScreenshot(file);
      setAnalyzeResult(result);
      setStep("result");
    } catch (err) {
      setAnalyzeResult({ error: err.message || "Analysis failed" });
      setStep("result");
    }
    setIsAnalyzing(false);
  };

  const handleBuild = () => {
    if (!analyzeResult) return;
    const combinedPrompt = `
[Screenshot Analysis]
${analyzeResult.ai || ""}

[User Instructions]
${userPrompt || "Recreate this website exactly as shown in the screenshot with modern React, Tailwind CSS, Framer Motion animations, and full responsiveness."}
    `.trim();
    onAnalyzeAndBuild(combinedPrompt, preview);
    onClose();
  };

  const handleSkipAnalysis = () => {
    if (!file || !userPrompt.trim()) return;
    const prompt = `Build a website based on this uploaded screenshot. ${userPrompt}. Use React, Tailwind CSS, Framer Motion, and modern UI patterns.`;
    onAnalyzeAndBuild(prompt, preview);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ scale: 0.88, opacity: 0, y: 24 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.88, opacity: 0, y: 24 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
          className="w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl"
          style={{
            background: isDark ? "#0E1117" : "#FFFFFF",
            border: `1.5px solid ${isDark ? "rgba(99,102,241,0.2)" : "#E2E8F0"}`,
            maxHeight: "90vh",
            overflowY: "auto",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-6 py-4 border-b"
            style={{
              borderColor: isDark ? "rgba(255,255,255,0.07)" : "#F1F5F9",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                }}
              >
                <BsImage className="text-white text-base" />
              </div>
              <div>
                <h2
                  className="text-sm font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  Build from Screenshot
                </h2>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                  Upload a website screenshot → AI analyzes → generates the
                  project
                </p>
              </div>
            </div>
            <button className="icon-btn" onClick={onClose}>
              <HiOutlineX className="text-base" />
            </button>
          </div>

          <div className="p-6 space-y-5">
            {/* Step: Upload */}
            {step === "upload" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className="relative rounded-2xl border-2 border-dashed flex flex-col items-center justify-center py-14 cursor-pointer transition-all duration-200"
                  style={{
                    borderColor: dragOver
                      ? "#6366f1"
                      : isDark
                        ? "rgba(99,102,241,0.25)"
                        : "#CBD5E1",
                    background: dragOver
                      ? "rgba(99,102,241,0.06)"
                      : isDark
                        ? "rgba(99,102,241,0.03)"
                        : "rgba(99,102,241,0.02)",
                  }}
                >
                  <motion.div
                    animate={{ scale: dragOver ? 1.12 : 1 }}
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: "rgba(99,102,241,0.1)" }}
                  >
                    <HiOutlineUpload
                      className="text-3xl"
                      style={{ color: "#6366f1" }}
                    />
                  </motion.div>
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Drop your screenshot here
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    or click to browse — PNG, JPG, WebP supported
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileSelect}
                  />
                </div>

                {/* Quick tips */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {[
                    { icon: "🖥️", label: "Website screens" },
                    { icon: "📱", label: "Mobile UI" },
                    { icon: "🎨", label: "Design mockups" },
                  ].map((tip) => (
                    <div
                      key={tip.label}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs"
                      style={{
                        background: isDark
                          ? "rgba(255,255,255,0.04)"
                          : "#F8FAFC",
                        border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "#E2E8F0"}`,
                        color: "var(--text-muted)",
                      }}
                    >
                      <span>{tip.icon}</span>
                      <span>{tip.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step: Prompt */}
            {step === "prompt" && preview && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {/* Preview */}
                <div
                  className="relative rounded-2xl overflow-hidden border"
                  style={{
                    borderColor: isDark ? "rgba(99,102,241,0.2)" : "#E2E8F0",
                  }}
                >
                  <img
                    src={preview}
                    alt="Uploaded screenshot"
                    className="w-full object-cover"
                    style={{ maxHeight: 220 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <button
                    onClick={() => {
                      setFile(null);
                      setPreview(null);
                      setStep("upload");
                    }}
                    className="absolute top-2 right-2 w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(0,0,0,0.55)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    <HiOutlineX className="text-white text-sm" />
                  </button>
                  <div
                    className="absolute bottom-2 left-3 text-xs text-white/80 font-medium px-2 py-1 rounded-lg"
                    style={{
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    ✅ {file?.name}
                  </div>
                </div>

                {/* Prompt input */}
                <div>
                  <label
                    className="text-xs font-semibold mb-2 block"
                    style={{ color: "var(--text-muted)" }}
                  >
                    DESCRIBE WHAT YOU WANT TO BUILD
                  </label>
                  <textarea
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder="e.g. Recreate this e-commerce homepage with dark mode, add a cart sidebar, use Framer Motion animations, make it fully responsive..."
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.04)" : "#F8FAFC",
                      border: `1.5px solid ${isDark ? "rgba(99,102,241,0.2)" : "#CBD5E1"}`,
                      color: "var(--text-primary)",
                      minHeight: 100,
                    }}
                    rows={4}
                  />
                </div>

                {/* Quick prompt chips */}
                <div className="flex flex-wrap gap-2">
                  {[
                    "Recreate exactly with dark mode",
                    "Add animations & transitions",
                    "Make it fully responsive",
                    "Add login/auth system",
                    "Include a dashboard",
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() =>
                        setUserPrompt((p) => (p ? `${p}, ${chip}` : chip))
                      }
                      className="text-xs px-3 py-1.5 rounded-full border transition-all"
                      style={{
                        borderColor: isDark
                          ? "rgba(99,102,241,0.3)"
                          : "#CBD5E1",
                        color: "#6366f1",
                        background: "rgba(99,102,241,0.07)",
                      }}
                    >
                      + {chip}
                    </button>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleAnalyze}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{
                      background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                      boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                    }}
                  >
                    <BsZoomIn className="text-base" />
                    Analyze Screenshot & Build
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleSkipAnalysis}
                    disabled={!userPrompt.trim()}
                    className="px-5 py-3 rounded-xl text-sm font-medium border transition-all"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.1)" : "#E2E8F0",
                      color: "var(--text-secondary)",
                      background: isDark ? "rgba(255,255,255,0.04)" : "#F8FAFC",
                      opacity: userPrompt.trim() ? 1 : 0.5,
                    }}
                  >
                    Quick Build
                  </motion.button>
                </div>
              </motion.div>
            )}

            {/* Step: Analyzing */}
            {step === "analyzing" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center py-10 gap-5"
              >
                <div className="relative">
                  <motion.div
                    className="w-16 h-16 rounded-2xl"
                    style={{
                      background: "rgba(99,102,241,0.1)",
                      border: "1px solid rgba(99,102,241,0.2)",
                    }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      border: "2px solid transparent",
                      borderTopColor: "#6366f1",
                      borderRightColor: "#8b5cf6",
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <BsImage
                      className="text-2xl"
                      style={{ color: "#6366f1" }}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p
                    className="text-sm font-semibold mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Analyzing Screenshot with AI...
                  </p>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Extracting UI components, text, layout structure...
                  </p>
                </div>
                <div
                  className="w-48 h-1 rounded-full overflow-hidden"
                  style={{
                    background: isDark ? "rgba(255,255,255,0.08)" : "#E2E8F0",
                  }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
                    }}
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Step: Result */}
            {step === "result" && analyzeResult && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
              >
                {analyzeResult.error ? (
                  <div
                    className="p-4 rounded-xl border text-sm"
                    style={{
                      borderColor: "rgba(239,68,68,0.2)",
                      background: "rgba(239,68,68,0.06)",
                      color: "#ef4444",
                    }}
                  >
                    ⚠️ Analysis failed: {analyzeResult.error}. We'll build using
                    your prompt only.
                  </div>
                ) : (
                  <>
                    {/* AI Analysis summary */}
                    <div
                      className="p-4 rounded-xl border"
                      style={{
                        borderColor: isDark
                          ? "rgba(99,102,241,0.2)"
                          : "#E2E8F0",
                        background: isDark
                          ? "rgba(99,102,241,0.05)"
                          : "#F8FAFC",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <BsStars
                          className="text-sm"
                          style={{ color: "#6366f1" }}
                        />
                        <span
                          className="text-xs font-semibold"
                          style={{ color: "#6366f1" }}
                        >
                          AI ANALYSIS
                        </span>
                      </div>
                      <p
                        className="text-xs leading-relaxed"
                        style={{
                          color: "var(--text-secondary)",
                          whiteSpace: "pre-wrap",
                          maxHeight: 140,
                          overflow: "auto",
                        }}
                      >
                        {analyzeResult.ai}
                      </p>
                    </div>

                    {/* Extracted text preview */}
                    {analyzeResult.text && (
                      <div
                        className="p-3 rounded-xl border"
                        style={{
                          borderColor: isDark
                            ? "rgba(255,255,255,0.07)"
                            : "#E2E8F0",
                          background: isDark
                            ? "rgba(255,255,255,0.02)"
                            : "#FAFAFA",
                        }}
                      >
                        <p
                          className="text-xs font-semibold mb-1"
                          style={{ color: "var(--text-muted)" }}
                        >
                          EXTRACTED TEXT
                        </p>
                        <p
                          className="text-xs leading-relaxed"
                          style={{
                            color: "var(--text-secondary)",
                            maxHeight: 100,
                            overflow: "auto",
                            whiteSpace: "pre-wrap",
                          }}
                        >
                          {/* {analyzeResult.text.slice(0, 300)}{analyzeResult.text.length > 300 ? "..." : ""} */}
                          {analyzeResult.text}
                        </p>
                      </div>
                    )}
                  </>
                )}

                {/* Extra prompt refinement */}
                <div>
                  <label
                    className="text-xs font-semibold mb-2 block"
                    style={{ color: "var(--text-muted)" }}
                  >
                    ADD EXTRA INSTRUCTIONS (OPTIONAL)
                  </label>
                  <textarea
                    value={userPrompt}
                    onChange={(e) => setUserPrompt(e.target.value)}
                    placeholder="Add any extra requirements or changes..."
                    className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none"
                    style={{
                      background: isDark ? "rgba(255,255,255,0.04)" : "#F8FAFC",
                      border: `1.5px solid ${isDark ? "rgba(99,102,241,0.2)" : "#CBD5E1"}`,
                      color: "var(--text-primary)",
                      minHeight: 72,
                    }}
                    rows={3}
                  />
                </div>

                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleBuild}
                    className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                    style={{
                      background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                      boxShadow: "0 4px 16px rgba(99,102,241,0.35)",
                    }}
                  >
                    <HiOutlineCode className="text-base" />
                    Build Project from Analysis
                  </motion.button>
                  <button
                    onClick={() => setStep("prompt")}
                    className="px-4 py-3 rounded-xl text-sm border"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.1)" : "#E2E8F0",
                      color: "var(--text-muted)",
                    }}
                  >
                    Back
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── Inline Screenshot Preview in chat ───────────────────────────────────────
const ScreenshotBuildMessage = ({ preview, isDark }) => (
  <div className="flex items-center gap-2 mt-2">
    <div
      className="rounded-xl overflow-hidden border flex-shrink-0"
      style={{
        border: `1px solid ${isDark ? "rgba(99,102,241,0.2)" : "#E2E8F0"}`,
        width: 72,
        height: 48,
      }}
    >
      <img
        src={preview}
        alt="Screenshot"
        className="w-full h-full object-cover"
      />
    </div>
    <span className="text-xs" style={{ color: "var(--text-muted)" }}>
      📸 Building from screenshot...
    </span>
  </div>
);

// ─── Image Search Result Component ───────────────────────────────────────────
const ImageSearchResults = ({ photos, query, isDark, onClose }) => {
  const [downloading, setDownloading] = useState(null);
  const [copiedIdx, setCopiedIdx] = useState(null);

  const handleDownload = async (photo, idx) => {
    setDownloading(idx);
    try {
      const response = await fetch(photo.src.original);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `image-${photo.id}.jpg`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      window.open(photo.src.original, "_blank");
    }
    setDownloading(null);
  };

  const handleCopyUrl = (url, idx) => {
    navigator.clipboard.writeText(url);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl overflow-hidden border mt-2"
      style={{
        borderColor: isDark ? "rgba(99,102,241,0.2)" : "#e2e8f0",
        background: isDark ? "#141920" : "#ffffff",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.07)" : "#f1f5f9" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
          >
            <HiOutlineImage className="text-white text-xs" />
          </div>
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Images for "{query}"
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1" }}
          >
            {photos.length} results
          </span>
        </div>
        <button onClick={onClose} className="icon-btn p-1">
          <HiOutlineX
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          />
        </button>
      </div>
      <div className="p-3 grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-96 overflow-y-auto">
        {photos.map((photo, idx) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.04 }}
            className="group relative rounded-xl overflow-hidden"
            style={{
              border: isDark
                ? "1px solid rgba(255,255,255,0.07)"
                : "1px solid #e2e8f0",
              aspectRatio: "16/10",
            }}
          >
            <img
              src={photo.src.medium}
              alt={photo.alt || query}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2 gap-1">
              <div className="flex gap-1">
                <button
                  onClick={() => handleDownload(photo, idx)}
                  disabled={downloading === idx}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-white transition-all"
                  style={{
                    background: "rgba(99,102,241,0.85)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {downloading === idx ? (
                    <HiOutlineRefresh className="text-xs animate-spin" />
                  ) : (
                    <HiOutlineDownload className="text-xs" />
                  )}
                  {downloading === idx ? "…" : "Save"}
                </button>
                <button
                  onClick={() => handleCopyUrl(photo.src.original, idx)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium text-white transition-all"
                  style={{
                    background: "rgba(0,0,0,0.5)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {copiedIdx === idx ? (
                    <HiOutlineCheck className="text-xs" />
                  ) : (
                    <HiOutlineClipboardCopy className="text-xs" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        className="px-4 py-2 border-t"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.07)" : "#f1f5f9" }}
      />
    </motion.div>
  );
};

// ─── Video Search Result Component ───────────────────────────────────────────
const VideoSearchResults = ({ videos, query, isDark, onClose }) => {
  const [playingIdx, setPlayingIdx] = useState(null);
  const [downloading, setDownloading] = useState(null);
  const videoRefs = useRef({});

  const getBestVideoFile = (video) => {
    const files = video.video_files || [];
    const hd = files.find((f) => f.quality === "hd");
    const sd = files.find((f) => f.quality === "sd");
    return hd || sd || files[0];
  };

  const handlePlay = (idx) => {
    if (playingIdx === idx) {
      videoRefs.current[idx]?.pause();
      setPlayingIdx(null);
    } else {
      if (playingIdx !== null && videoRefs.current[playingIdx])
        videoRefs.current[playingIdx].pause();
      setPlayingIdx(idx);
      setTimeout(() => videoRefs.current[idx]?.play(), 50);
    }
  };

  const handleDownload = async (video, idx) => {
    const file = getBestVideoFile(video);
    if (!file) return;
    setDownloading(idx);
    try {
      const response = await fetch(file.link);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `video-${video.id}.mp4`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch {
      const f = getBestVideoFile(video);
      if (f) window.open(f.link, "_blank");
    }
    setDownloading(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl overflow-hidden border mt-2"
      style={{
        borderColor: isDark ? "rgba(99,102,241,0.2)" : "#e2e8f0",
        background: isDark ? "#141920" : "#ffffff",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.07)" : "#f1f5f9" }}
      >
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center"
            style={{ background: "linear-gradient(135deg,#e11d48,#f43f5e)" }}
          >
            <BsCameraVideo className="text-white text-xs" />
          </div>
          <span
            className="text-xs font-semibold"
            style={{ color: "var(--text-primary)" }}
          >
            Videos for "{query}"
          </span>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: "rgba(225,29,72,0.1)", color: "#e11d48" }}
          >
            {videos.length} results
          </span>
        </div>
        <button onClick={onClose} className="icon-btn p-1">
          <HiOutlineX
            className="text-sm"
            style={{ color: "var(--text-muted)" }}
          />
        </button>
      </div>
      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[28rem] overflow-y-auto">
        {videos.map((video, idx) => {
          const file = getBestVideoFile(video);
          const thumb = video.image;
          return (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="group relative rounded-xl overflow-hidden"
              style={{
                border: isDark
                  ? "1px solid rgba(255,255,255,0.07)"
                  : "1px solid #e2e8f0",
                aspectRatio: "16/9",
                background: "#000",
              }}
            >
              {playingIdx === idx && file ? (
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={file.link}
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  onEnded={() => setPlayingIdx(null)}
                />
              ) : (
                <>
                  <img
                    src={thumb}
                    alt={query}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {video.duration && (
                    <span
                      className="absolute top-2 right-2 text-xs text-white px-1.5 py-0.5 rounded"
                      style={{ background: "rgba(0,0,0,0.65)" }}
                    >
                      {Math.floor(video.duration / 60)}:
                      {String(video.duration % 60).padStart(2, "0")}
                    </span>
                  )}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                    <button
                      onClick={() => handlePlay(idx)}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{
                        background: "rgba(99,102,241,0.85)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <HiOutlinePlay className="text-lg" />
                    </button>
                    <button
                      onClick={() => handleDownload(video, idx)}
                      disabled={downloading === idx}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white"
                      style={{
                        background: "rgba(0,0,0,0.55)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      {downloading === idx ? (
                        <HiOutlineRefresh className="text-sm animate-spin" />
                      ) : (
                        <HiOutlineDownload className="text-sm" />
                      )}
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
      <div
        className="px-4 py-2 border-t"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.07)" : "#f1f5f9" }}
      />
    </motion.div>
  );
};

// ─── Code Block with Copy Button ─────────────────────────────────────────────
const CodeBlock = ({ code, language = "javascript", isDark }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = code;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 12,
        overflow: "hidden",
        margin: "8px 0",
        border: isDark
          ? "1px solid rgba(255,255,255,0.08)"
          : "1px solid #e2e8f0",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "6px 12px",
          background: isDark ? "#1e293b" : "#f1f5f9",
          borderBottom: isDark
            ? "1px solid rgba(255,255,255,0.08)"
            : "1px solid #e2e8f0",
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: isDark ? "#64748b" : "#94a3b8",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {language}
        </span>
        <button
          onClick={handleCopy}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            padding: "3px 8px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            fontSize: 11,
            fontWeight: 500,
            background: copied
              ? isDark
                ? "rgba(16,185,129,0.15)"
                : "rgba(5,150,105,0.1)"
              : isDark
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.06)",
            color: copied ? "#10b981" : isDark ? "#94a3b8" : "#64748b",
            transition: "all 0.2s",
          }}
        >
          {copied ? (
            <HiOutlineCheck style={{ fontSize: 12 }} />
          ) : (
            <HiOutlineClipboardCopy style={{ fontSize: 12 }} />
          )}
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        style={isDark ? vscDarkPlus : vs}
        customStyle={{
          margin: 0,
          padding: "12px 14px",
          fontSize: 12,
          lineHeight: 1.6,
          background: isDark ? "#0f172a" : "#ffffff",
          maxHeight: 320,
          overflow: "auto",
        }}
        showLineNumbers={false}
        wrapLines
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

// ─── AI Message Renderer ──────────────────────────────────────────────────────
const AIMessageContent = ({ text, isDark }) => {
  const parts = [];
  const codeRegex = /```(\w+)?\n?([\s\S]*?)```/g;
  let lastIndex = 0;
  let match;
  while ((match = codeRegex.exec(text)) !== null) {
    if (match.index > lastIndex)
      parts.push({ type: "text", content: text.slice(lastIndex, match.index) });
    parts.push({
      type: "code",
      language: match[1] || "javascript",
      content: match[2].trim(),
    });
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length)
    parts.push({ type: "text", content: text.slice(lastIndex) });
  return (
    <div>
      {parts.map((part, i) =>
        part.type === "code" ? (
          <CodeBlock
            key={i}
            code={part.content}
            language={part.language}
            isDark={isDark}
          />
        ) : (
          <div key={i} style={{ whiteSpace: "pre-wrap", lineHeight: 1.6 }}>
            {part.content}
          </div>
        ),
      )}
    </div>
  );
};

// ─── Helper: Detect full project build ───────────────────────────────────────
const isFullProjectBuild = (prompt) => {
  const lower = prompt.toLowerCase();
  const fullProjectKeywords = [
    "build a",
    "build",
    "create a",
    "create",
    "make a",
    "make",
    "generate a",
    "generate",
    "develop a",
    "develop",
    "full stack",
    "fullstack",
    "complete app",
    "complete application",
    "ecommerce",
    "e-commerce",
    "social media",
    "chat app",
    "video app",
    "music app",
    "food app",
    "travel app",
    "education erp",
    "dashboard",
    "admin panel",
    "crm",
    "erp",
    "blog platform",
    "forum",
    "marketplace",
    "portfolio website",
    "landing page with",
    "multi-page",
    "routing",
    "authentication",
    "login system",
    "user management",
    "database",
    "backend",
    "api",
    "mongodb",
    "postgresql",
    "express",
    "node.js",
    "full website",
    "web application",
    "production ready",
    "complete project",
    "screenshot",
    "recreate",
    "rebuild from",
    "build from",
    "website screen",
  ];
  const smallTaskKeywords = [
    "create a component",
    "component",
    "make a component",
    "write a component",
    "generate a component",
    "create a button",
    "make a card",
    "create a modal",
    "make a navbar",
    "create a footer",
    "create a form",
    "make a table",
    "create a list",
    "make a grid",
    "create an input",
    "make a dropdown",
    "write a function",
    "create a hook",
    "make a utility",
    "generate code for",
    "how to",
    "explain",
    "fix this",
    "debug",
    "convert this",
    "optimize this",
    "refactor",
    "create a simple",
    "make a simple",
    "small component",
  ];
  for (const kw of smallTaskKeywords) {
    if (lower.includes(kw)) return false;
  }
  for (const kw of fullProjectKeywords) {
    if (lower.includes(kw)) return true;
  }
  const wordCount = prompt.split(/\s+/).length;
  const hasMultipleFeatures =
    (lower.match(/and|with|including|also/g) || []).length >= 2;
  if (wordCount > 25 && hasMultipleFeatures) return true;
  if (wordCount < 15) return false;
  return false;
};

// ─── Groq AI Helpers ──────────────────────────────────────────────────────────
const detectBuildIntent = (prompt) => {
  const lower = prompt.toLowerCase();
  const buildKeywords = [
    "build",
    "create",
    "make",
    "generate",
    "develop",
    "app",
    "application",
    "website",
    "web app",
    "dashboard",
    "platform",
    "system",
    "tool",
    "project",
    "mern",
    "next",
    "react",
    "node",
    "fullstack",
    "full stack",
    "api",
    "backend",
    "frontend",
    "ecommerce",
    "e-commerce",
    "portfolio",
    "blog",
    "chat",
    "social",
    "admin",
    "crm",
    "erp",
    "recreate",
    "screenshot",
    "rebuild",
  ];
  return buildKeywords.some((kw) => lower.includes(kw));
};

const enhancePromptWithGroq = async (userPrompt) => {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are an expert software architect. Convert the user's project request into a detailed, powerful technical prompt for an AI code generator. Include: tech stack (React + Vite + Tailwind + Express/Node backend) and python and java key features, pages/routes, UI components, animations (framer-motion, GSAP), responsive design, modern UI patterns. Return ONLY the enhanced prompt, no explanation, no preamble. Keep it under 300 words.`,
          },
          { role: "user", content: userPrompt },
        ],
      }),
    });
    if (!response.ok) return userPrompt;
    const data = await response.json();
    return data.choices?.[0]?.message?.content || userPrompt;
  } catch {
    return userPrompt;
  }
};

const generateSmallTaskCode = async (userPrompt) => {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are a senior full-stack software engineer with 10+ years of experience specializing in React, MERN stack, Python, and Java. You write clean, scalable, maintainable, and production-grade code following industry best practices and modern architecture patterns.\n\n### ⚙️ Core Stack:\n* Frontend: React (Vite or Next.js, functional components + hooks)\n* Styling: Tailwind CSS\n* Animations: Framer Motion\n* Backend: Node.js + Express (MVC architecture)\n* Database: MongoDB (Mongoose ODM)\n* Optional: Python (FastAPI) or Java (Spring Boot) when requested\n\n### 📦 Output Rules:\n* Return ONLY code (no explanations unless explicitly asked)\n* Use proper markdown code blocks with language tags\n* Always include necessary imports and complete file code\n* Ensure the code is runnable without modification\n\n### ❌ Strict Rules:\n* No pseudo code\n* No incomplete snippets\n* No unnecessary explanations\n* No outdated patterns (class components, old syntax)\n\nGenerate the best possible production-ready solution for the user's request.`,
          },
          { role: "user", content: userPrompt },
        ],
      }),
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return (
      data.choices?.[0]?.message?.content ||
      "I couldn't generate the code. Please try again with more details."
    );
  } catch (error) {
    console.error("Small task generation error:", error);
    return "Sorry, I encountered an error while generating the code. Please try again.";
  }
};

const getConversationalResponse = async (userMessage) => {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `You are EVA AI, an expert AI Developer assistant. You help users build web applications using React, Node.js, Express, Tailwind CSS, Python, java and modern frameworks.\n\nWhen users ask coding questions, provide helpful code examples with proper markdown code blocks using triple backticks and language tags.\n\nWhen users ask for components, provide the complete React component code with Tailwind CSS styling and Framer Motion animations.\n\nWhen users greet you or ask general questions, be friendly and suggest what you can build for them.\n\nKeep responses concise but helpful. Use code blocks for any code examples.`,
          },
          { role: "user", content: userMessage },
        ],
      }),
    });
    if (!response.ok) {
      const err = await response.json();
      throw new Error(err?.error?.message || `HTTP ${response.status}`);
    }
    const data = await response.json();
    return (
      data.choices?.[0]?.message?.content ||
      "I'm here to help you build amazing projects! What would you like to create today?"
    );
  } catch {
    return "Hey! I'm EVA AI, your personal developer assistant. Tell me what you'd like to build — a web app, dashboard, e-commerce site, or anything else — and I'll generate the full project for you! 🚀";
  }
};

const explainProjectResult = async (
  projectName,
  fileCount,
  frontendFiles,
  backendFiles,
) => {
  try {
    const response = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content:
              "You are senior full-stack developer and ai assistant. A project was just generated. Write a brief, enthusiastic summary (3-4 sentences) explaining what was built and how to get started. Be specific about the tech stack and key features. Keep it concise and exciting.",
          },
          {
            role: "user",
            content: `Project "${projectName}" was generated with ${fileCount} total files (${frontendFiles} frontend, ${backendFiles} backend). Summarize what was built and next steps.`,
          },
        ],
      }),
    });
    if (!response.ok) return null;
    const data = await response.json();
    return data.choices?.[0]?.message?.content || null;
  } catch {
    return null;
  }
};

// ─── Save Button ──────────────────────────────────────────────────────────────
const SaveButton = ({ onClick, saveStatus, currentTheme }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
    style={{
      background:
        saveStatus === "saving"
          ? "rgba(100,116,139,0.15)"
          : saveStatus === "saved"
            ? "rgba(5,150,105,0.12)"
            : "rgba(124,58,237,0.12)",
      color:
        saveStatus === "saving"
          ? "#94A3B8"
          : saveStatus === "saved"
            ? "#059669"
            : "#7C3AED",
      border: `1px solid ${saveStatus === "saved" ? "rgba(5,150,105,0.25)" : saveStatus === "saving" ? "rgba(100,116,139,0.2)" : "rgba(124,58,237,0.25)"}`,
    }}
    disabled={saveStatus === "saving"}
    title="Save changes"
  >
    {saveStatus === "saving" ? (
      <HiOutlineRefresh className="animate-spin text-sm" />
    ) : saveStatus === "saved" ? (
      <HiOutlineCheckCircle className="text-sm" />
    ) : (
      <HiOutlineSave className="text-sm" />
    )}
    <span>
      {saveStatus === "saving"
        ? "Saving…"
        : saveStatus === "saved"
          ? "Saved"
          : "Save"}
    </span>
  </motion.button>
);

// ─── Manual Save Handler ──────────────────────────────────────────────────────
const ManualSaveHandler = ({ jobId, onSave, setSaveStatus }) => {
  const { sandpack } = useSandpack();
  const handleSave = () => {
    if (!jobId) return;
    setSaveStatus("saving");
    try {
      const convertedFiles = Object.entries(sandpack.files).map(
        ([path, file]) => {
          let filename = path.startsWith("/") ? path.slice(1) : path;
          if (
            !filename.startsWith("backend/") &&
            !filename.includes("node_modules")
          )
            filename = `frontend/${filename}`;
          return { filename, content: file.code };
        },
      );
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setSaveStatus("idle");
        return;
      }
      const projects = JSON.parse(stored);
      const idx = projects.findIndex((p) => p.id === jobId);
      if (idx === -1) {
        setSaveStatus("idle");
        return;
      }
      projects[idx].files = convertedFiles;
      projects[idx].timestamp = new Date().toLocaleString();
      const ff = convertedFiles.filter((f) =>
        f.filename.startsWith("frontend/"),
      ).length;
      const bf = convertedFiles.filter((f) =>
        f.filename.startsWith("backend/"),
      ).length;
      projects[idx].preview =
        `${convertedFiles.length} files total (${ff} frontend, ${bf} backend)`;
      projects[idx].totalFiles = convertedFiles.length;
      projects[idx].frontendFiles = ff;
      projects[idx].backendFiles = bf;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
      if (onSave) onSave(convertedFiles);
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    } catch {
      setSaveStatus("idle");
    }
  };
  return { handleSave };
};

const SaveHandlerWrapper = ({
  jobId,
  onSave,
  setSaveStatus,
  onSaveFunctionReady,
}) => {
  const { handleSave } = ManualSaveHandler({ jobId, onSave, setSaveStatus });
  useEffect(() => {
    if (onSaveFunctionReady) onSaveFunctionReady(handleSave);
  }, [handleSave, onSaveFunctionReady, jobId]);
  return null;
};

// ─── Processing Animation ─────────────────────────────────────────────────────
const ModernProcessingAnimation = ({ pollingAttempts }) => {
  const [dots, setDots] = useState("");
  useEffect(() => {
    const t = setInterval(
      () => setDots((p) => (p.length >= 3 ? "" : p + ".")),
      500,
    );
    return () => clearInterval(t);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center p-5"
    >
      <div className="relative">
        <motion.div
          className="w-14 h-14 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.08))",
            border: "1px solid rgba(99,102,241,0.2)",
          }}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            border: "1.5px solid transparent",
            borderTopColor: "#6366f1",
            borderRightColor: "#8b5cf6",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="/Ai.svg" alt="AI" className="w-6 h-6" />
        </div>
      </div>
      <p className="mt-4 text-sm font-medium text-slate-400">
        Building{dots} {pollingAttempts} s
      </p>
      {pollingAttempts > 0 && (
        <div className="mt-3 w-32 h-0.5 rounded-full bg-slate-800 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{
              width: `${Math.min(((pollingAttempts * 2) / 60) * 100, 95)}%`,
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400"
          />
        </div>
      )}
    </motion.div>
  );
};

// ─── Resizable Panel ──────────────────────────────────────────────────────────
const ResizablePanel = ({
  children,
  defaultSize = 25,
  minSize = 15,
  maxSize = 50,
  direction = "right",
  storageKey = "panel_size",
  theme,
}) => {
  const isVertical = direction === "top" || direction === "bottom";
  const [size, setSize] = useState(() => {
    const s = localStorage.getItem(storageKey);
    return s ? parseInt(s) : defaultSize;
  });
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef(null);
  useEffect(() => {
    const onMove = (e) => {
      if (!isResizing) return;
      const container = panelRef.current?.parentElement;
      if (!container) return;
      const rect = container.getBoundingClientRect();
      let ns = isVertical
        ? ((rect.bottom - e.clientY) / rect.height) * 100
        : ((e.clientX - rect.left) / rect.width) * 100;
      ns = Math.max(minSize, Math.min(maxSize, ns));
      setSize(ns);
      localStorage.setItem(storageKey, Math.round(ns));
    };
    const onUp = () => {
      setIsResizing(false);
      document.body.style.cursor = "default";
      document.body.style.userSelect = "auto";
    };
    if (isResizing) {
      document.addEventListener("mousemove", onMove);
      document.addEventListener("mouseup", onUp);
      document.body.style.cursor = isVertical ? "row-resize" : "col-resize";
      document.body.style.userSelect = "none";
    }
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
  }, [isResizing]);
  return (
    <div
      ref={panelRef}
      className="relative"
      style={isVertical ? { height: `${size}%` } : { width: `${size}%` }}
    >
      {children}
      <div
        className={`absolute ${isVertical ? "left-0 right-0 h-1 cursor-row-resize" : "top-0 bottom-0 w-1 cursor-col-resize"}`}
        style={{
          backgroundColor: isResizing ? theme?.blue : "transparent",
          zIndex: 20,
          bottom: isVertical ? 0 : undefined,
          right: !isVertical ? 0 : undefined,
        }}
        onMouseDown={(e) => {
          e.preventDefault();
          setIsResizing(true);
        }}
      />
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════════
// HOME COMPONENT
// ═══════════════════════════════════════════════════════════════════════════════
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredChat, setHoveredChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showHelp, setShowHelp] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");
  const theme = themes[currentTheme];
  const [share, setShare] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [jobStatus, setJobStatus] = useState(null);
  const [jobId, setJobId] = useState(null);
  const [projectFiles, setProjectFiles] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [recentProjects, setRecentProjects] = useState([]);
  const [pollingAttempts, setPollingAttempts] = useState(0);
  const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
  const [warningDismissed, setWarningDismissed] = useState(false);
  const [inputError, setInputError] = useState("");
  const [isPollingActive, setIsPollingActive] = useState(false);
  const [jobErrorMessage, setJobErrorMessage] = useState("");
  const [jobErrorDetails, setJobErrorDetails] = useState(null);
  const [initialLoadDone, setInitialLoadDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showDiagnostic, setShowDiagnostic] = useState(false);
  const [diagnosticData, setDiagnosticData] = useState(null);
  const [lastSaved, setLastSaved] = useState(null);
  const [saveStatus, setSaveStatus] = useState("idle");
  const [sandpackFiles, setSandpackFiles] = useState({});
  const [showSandpack, setShowSandpack] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [workspaceView, setWorkspaceView] = useState("preview");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showMobileWorkspace, setShowMobileWorkspace] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isAIThinking, setIsAIThinking] = useState(false);
  const [aiStatus, setAIStatus] = useState("");

  // Media search state
  const [isSearchingImages, setIsSearchingImages] = useState(false);
  const [isSearchingVideos, setIsSearchingVideos] = useState(false);

  // ── NEW: Screenshot upload state ──────────────────────────────────────────
  const [showScreenshotModal, setShowScreenshotModal] = useState(false);
  const [screenshotPreview, setScreenshotPreview] = useState(null);

  const saveFunctionRef = useRef(null);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const workspaceRef = useRef(null);
  const pollingIntervalRef = useRef(null);
  const currentJobIdRef = useRef(null);
  const isPollingRef = useRef(false);
  const abortControllerRef = useRef(null);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [deviceView, setDeviceView] = useState("desktop");
  const [previewWidth, setPreviewWidth] = useState("100%");

  const lastLoadedProjectId = useRef(null);

  const isDark = currentTheme === "dark";

  const handleShare = (platform) => {
    if (!platform) return;
    const shareUrl = `${window.location.origin}/app/share/preview/${jobId}`;
    let shareLink = "";
    switch (platform) {
      case "whatsapp":
        shareLink = `https://wa.me/?text=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "telegram":
        shareLink = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "instagram":
        navigator.clipboard.writeText(shareUrl);
        alert("Link copied! You can now paste it on Instagram.");
        setSelectedPlatform("");
        return;
      default:
        return;
    }
    window.open(shareLink, "_blank", "noopener,noreferrer");
    setSelectedPlatform("");
  };

  const allTemplates = [
    {
      name: "Education ERP",
      icon: "🎓",
      gradient: "linear-gradient(135deg,#059669,#0284C7)",
    },
    {
      name: "E-commerce",
      icon: "🛒",
      gradient: "linear-gradient(135deg,#7C3AED,#0284C7)",
    },
    {
      name: "Social Media",
      icon: "👥",
      gradient: "linear-gradient(135deg,#DB2777,#7C3AED)",
    },
    {
      name: "Chat App",
      icon: "💬",
      gradient: "linear-gradient(135deg,#059669,#0D9488)",
    },
    {
      name: "Video App",
      icon: "🎬",
      gradient: "linear-gradient(135deg,#DC2626,#EA580C)",
    },
    {
      name: "Music App",
      icon: "🎵",
      gradient: "linear-gradient(135deg,#7C3AED,#DB2777)",
    },
    {
      name: "Food App",
      icon: "🍔",
      gradient: "linear-gradient(135deg,#EA580C,#D97706)",
    },
    {
      name: "Travel App",
      icon: "✈️",
      gradient: "linear-gradient(135deg,#0284C7,#0891B2)",
    },
  ];

  useEffect(() => {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved && (saved === "dark" || saved === "light"))
      setCurrentTheme(saved);
  }, []);

  const toggleTheme = () => {
    const nt = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(nt);
    localStorage.setItem(THEME_KEY, nt);
  };

  const cleanCodeContent = (content) => {
    const reg = /```[a-z]*\n([\s\S]*?)```/g;
    const m = reg.exec(content);
    let c = m ? m[1].trim() : content;
    c = c
      .replace(/@tailwind base;/g, "")
      .replace(/@tailwind components;/g, "")
      .replace(/@tailwind utilities;/g, "");
    return c;
  };

  const convertToSandpackFiles = (files) => {
    const sf = {};
    files.forEach((file) => {
      if (file.filename.startsWith("backend/")) return;
      let fn = file.filename;
      if (fn.startsWith("frontend/")) fn = fn.replace("frontend/", "");
      if (
        fn.startsWith("src/") ||
        fn === "index.html" ||
        fn === "package.json" ||
        fn === "vite.config.js" ||
        fn === "postcss.config.js" ||
        fn === "tailwind.config.js"
      ) {
        let c = cleanCodeContent(file.content);
        let p = fn.startsWith("/") ? fn : "/" + fn;
        sf[p] = { code: c };
      }
    });
    if (!sf["/src/index.js"] && !sf["/src/index.jsx"] && !sf["/src/main.jsx"])
      sf["/src/main.jsx"] = {
        code: `import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport App from './App'\nimport './index.css'\n\nReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>)`,
      };
    if (!sf["/src/App.jsx"] && !sf["/src/App.js"])
      sf["/src/App.jsx"] = {
        code: `import React from 'react'\nexport default function App() { return <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-white mb-4">Welcome to Your App</h1><p className="text-gray-300">Built with AI</p></div></div> }`,
      };
    if (!sf["/src/index.css"])
      sf["/src/index.css"] = {
        code: `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n@layer base { body { @apply antialiased; } }`,
      };
    if (!sf["/tailwind.config.js"])
      sf["/tailwind.config.js"] = {
        code: `export default { content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"], theme: { extend: {} }, plugins: [] }`,
      };
    if (!sf["/postcss.config.js"])
      sf["/postcss.config.js"] = {
        code: `export default { plugins: { tailwindcss: {}, autoprefixer: {} } }`,
      };
    return sf;
  };

  const convertFromSandpackFiles = (spf) => {
    return Object.entries(spf).map(([path, file]) => {
      let fn = path.startsWith("/") ? path.slice(1) : path;
      if (!fn.startsWith("backend/") && !fn.includes("node_modules"))
        fn = `frontend/${fn}`;
      return { filename: fn, content: file.code };
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, jobId, projectFiles]);

  useEffect(() => {
    if (
      jobStatus === "completed" &&
      projectFiles &&
      Object.keys(sandpackFiles).length > 0
    )
      setShowSandpack(true);
  }, [jobStatus, projectFiles, sandpackFiles]);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current)
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
    }, 100);
  };

  useEffect(() => {
    loadRecentProjects();
  }, []);

  useEffect(() => {
    const projectId = searchParams.get("project");
    if (projectId && !isLoading) {
      if (lastLoadedProjectId.current === projectId) return;
      if (jobId === projectId && messages.length > 0) {
        lastLoadedProjectId.current = projectId;
        return;
      }
      lastLoadedProjectId.current = projectId;
      setShowHelp(false);
      setProjectFiles(null);
      setSandpackFiles({});
      setShowSandpack(false);
      setJobStatus(null);
      setJobErrorMessage("");
      setJobErrorDetails(null);
      setTimeout(() => loadProject(projectId), 100);
    } else if (!projectId && !initialLoadDone) {
      setShowHelp(true);
      setInitialLoadDone(true);
    }
  }, [searchParams]);

  useEffect(() => () => stopPolling(), []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (workspaceRef.current.requestFullscreen)
        workspaceRef.current.requestFullscreen();
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  useEffect(() => {
    const onFC = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFC);
    return () => document.removeEventListener("fullscreenchange", onFC);
  }, []);

  const runDiagnostic = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      const data = {
        exists: !!stored,
        raw: stored,
        parsed: null,
        currentProject: jobId,
        projectData: null,
      };
      if (stored) {
        try {
          data.parsed = JSON.parse(stored);
          if (jobId) data.projectData = data.parsed.find((p) => p.id === jobId);
        } catch (e) {
          data.parseError = e.message;
        }
      }
      setDiagnosticData(data);
      setShowDiagnostic(true);
    } catch {}
  };

  const loadRecentProjects = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setRecentProjects(JSON.parse(stored));
    } catch {}
  };

  const saveProjectToStorage = (id, files, conversation, prompt = "") => {
    try {
      const pkgJson = files.find(
        (f) =>
          f.filename === "package.json" ||
          f.filename === "frontend/package.json",
      );
      let pname = "Project";
      if (pkgJson) {
        try {
          pname = JSON.parse(pkgJson.content).name || pname;
        } catch {}
      }
      const ff = files.filter(
        (f) =>
          f.filename.startsWith("frontend/") ||
          !f.filename.startsWith("backend/"),
      ).length;
      const bf = files.filter((f) => f.filename.startsWith("backend/")).length;
      const info = {
        id,
        title: pname,
        timestamp: new Date().toLocaleString(),
        preview: `${files.length} files total (${ff} frontend, ${bf} backend)`,
        files,
        messages: conversation,
        prompt:
          prompt ||
          conversation.find((m) => m.sender === "user")?.text ||
          "Project generation",
        status: "completed",
        createdAt: new Date().toISOString(),
        error: null,
        errorDetails: null,
        totalFiles: files.length,
        frontendFiles: ff,
        backendFiles: bf,
      };
      const stored = localStorage.getItem(STORAGE_KEY);
      let ex = [];
      if (stored) {
        try {
          ex = JSON.parse(stored);
        } catch {}
      }
      const updated = [info, ...ex.filter((p) => p.id !== id)].slice(0, 20);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setRecentProjects(updated);
      return updated;
    } catch {
      return [];
    }
  };

  const savePendingJob = (id, prompt) => {
    try {
      const pp = {
        id,
        title: "Processing...",
        timestamp: new Date().toLocaleString(),
        preview: `Building: "${prompt.substring(0, 50)}${prompt.length > 50 ? "..." : ""}"`,
        files: null,
        messages: [],
        prompt,
        status: "processing",
        createdAt: new Date().toISOString(),
        error: null,
        errorDetails: null,
        totalFiles: 0,
        frontendFiles: 0,
        backendFiles: 0,
      };
      const stored = localStorage.getItem(STORAGE_KEY);
      let ex = [];
      if (stored) {
        try {
          ex = JSON.parse(stored);
        } catch {}
      }
      const updated = [pp, ...ex.filter((p) => p.id !== id)].slice(0, 20);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setRecentProjects(updated);
      return updated;
    } catch {
      return [];
    }
  };

  const updateProjectStatus = (
    id,
    status,
    files = null,
    msgs = [],
    errorDetails = null,
    prompt = "",
  ) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let ex = [];
      if (stored) {
        try {
          ex = JSON.parse(stored);
        } catch {}
      }
      const updated = ex.map((project) => {
        if (project.id !== id) return project;
        if (status === "completed" && files) {
          const pkgJson = files.find(
            (f) =>
              f.filename === "package.json" ||
              f.filename === "frontend/package.json",
          );
          let pname = "Project";
          if (pkgJson) {
            try {
              pname = JSON.parse(pkgJson.content).name || pname;
            } catch {}
          }
          const ff = files.filter(
            (f) =>
              f.filename.startsWith("frontend/") ||
              !f.filename.startsWith("backend/"),
          ).length;
          const bf = files.filter((f) =>
            f.filename.startsWith("backend/"),
          ).length;
          return {
            ...project,
            title: pname,
            status: "completed",
            files,
            messages: msgs,
            preview: `${files.length} files total (${ff} frontend, ${bf} backend)`,
            error: null,
            errorDetails: null,
            prompt: prompt || project.prompt,
            totalFiles: files.length,
            frontendFiles: ff,
            backendFiles: bf,
          };
        } else if (status === "failed") {
          return {
            ...project,
            status: "failed",
            title: "Failed Project",
            preview: "Generation failed",
            files: null,
            messages: msgs,
            error: errorDetails?.message || "Unknown error",
            errorDetails,
            prompt: prompt || project.prompt,
          };
        } else {
          return { ...project, status, messages: msgs };
        }
      });
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setRecentProjects(updated);
      return updated;
    } catch {
      return [];
    }
  };

  const getProjectById = (id) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) return JSON.parse(stored).find((p) => p.id === id);
    } catch {}
    return null;
  };

  const stopPolling = () => {
    if (pollingIntervalRef.current) {
      clearInterval(pollingIntervalRef.current);
      pollingIntervalRef.current = null;
    }
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    isPollingRef.current = false;
    setIsPollingActive(false);
    setPollingAttempts(0);
    setShowTimeoutWarning(false);
    setWarningDismissed(false);
  };

  const isResponseForCurrentJob = (id) => id === currentJobIdRef.current;

  const pollStatus = async (id) => {
    if (!isPollingRef.current || !isResponseForCurrentJob(id)) return;
    try {
      setPollingAttempts((p) => p + 1);
      const res = await axios.get(`${API_BASE_URL}/status/${id}`, {
        timeout: 10000,
        signal: abortControllerRef.current?.signal,
      });
      if (!isResponseForCurrentJob(id)) return;
      if (res.data.status === "completed") {
        stopPolling();
        const rr = await axios.get(`${API_BASE_URL}/result/${id}`, {
          signal: abortControllerRef.current?.signal,
        });
        if (!isResponseForCurrentJob(id)) return;
        setProjectFiles(rr.data.files);
        setDownloadUrl(`${API_BASE_URL}/download/${id}`);
        const sf = convertToSandpackFiles(rr.data.files);
        setSandpackFiles(sf);
        setShowSandpack(true);
        setJobStatus("completed");
        setIsProcessing(false);
        const pkgJson = rr.data.files.find(
          (f) =>
            f.filename === "package.json" ||
            f.filename === "frontend/package.json",
        );
        let pname = "Project";
        if (pkgJson) {
          try {
            pname = JSON.parse(pkgJson.content).name || pname;
          } catch {}
        }
        const ff = rr.data.files.filter(
          (f) =>
            f.filename.startsWith("frontend/") ||
            !f.filename.startsWith("backend/"),
        ).length;
        const bf = rr.data.files.filter((f) =>
          f.filename.startsWith("backend/"),
        ).length;
        const aiExplanation = await explainProjectResult(
          pname,
          rr.data.files.length,
          ff,
          bf,
        );
        const successText = `✅ Project Generated Successfully!\n\n${aiExplanation || `I've created a complete ${pname} project with ${rr.data.files.length} files.`}\n\n📁 Total Files: ${rr.data.files.length}\n🎨 Frontend Files: ${ff}\n⚙️ Backend Files: ${bf}\n\nYou can now browse, edit, and preview the code below!`;
        const sm = {
          id: Date.now(),
          text: successText,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        const allMsgs = [...messages, sm];
        setMessages(allMsgs);
        const userPrompt =
          messages.find((m) => m.sender === "user")?.text || "";
        saveProjectToStorage(id, rr.data.files, allMsgs, userPrompt);
        scrollToBottom();
      } else if (res.data.status === "failed") {
        if (!isResponseForCurrentJob(id)) return;
        stopPolling();
        setJobStatus("failed");
        setIsProcessing(false);
        const em = res.data.error?.message || "Unknown error occurred";
        const ed = res.data.error || { message: em };
        setJobErrorMessage(em);
        setJobErrorDetails(ed);
        const errMsg = {
          id: Date.now(),
          text: `## ❌ **Project Generation Failed**\n\n**Error:** ${em}\n\nClick **"New Project"** to try again.`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        const allMsgs = [...messages, errMsg];
        setMessages(allMsgs);
        const userPrompt =
          messages.find((m) => m.sender === "user")?.text || "";
        updateProjectStatus(id, "failed", null, allMsgs, ed, userPrompt);
        scrollToBottom();
      } else if (
        res.data.status === "processing" ||
        res.data.status === "running"
      ) {
        setJobStatus("processing");
        updateProjectStatus(id, "processing");
      }
      if (
        isResponseForCurrentJob(id) &&
        pollingAttempts >= 60 &&
        !showTimeoutWarning &&
        !warningDismissed
      )
        setShowTimeoutWarning(true);
    } catch (error) {
      if (!isResponseForCurrentJob(id)) return;
      if (
        axios.isCancel(error) ||
        error.name === "AbortError" ||
        error.code === "ERR_CANCELED"
      )
        return;
      if (pollingAttempts > 10) {
        stopPolling();
        setJobStatus("failed");
        setIsProcessing(false);
        setJobErrorMessage(error.message);
        setJobErrorDetails({ type: "network_error", message: error.message });
        const errMsg = {
          id: Date.now(),
          text: `## ❌ **Connection Error**\n\nUnable to reach the server.\n\n**Error details:** ${error.message}`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        const allMsgs = [...messages, errMsg];
        setMessages(allMsgs);
        const userPrompt =
          messages.find((m) => m.sender === "user")?.text || "";
        updateProjectStatus(
          id,
          "failed",
          null,
          allMsgs,
          { type: "network_error", message: error.message },
          userPrompt,
        );
        scrollToBottom();
      }
    }
  };

  const startPolling = (id) => {
    stopPolling();
    currentJobIdRef.current = id;
    setJobId(id);
    setJobStatus("processing");
    setPollingAttempts(0);
    setShowTimeoutWarning(false);
    setWarningDismissed(false);
    setJobErrorMessage("");
    setJobErrorDetails(null);
    isPollingRef.current = true;
    setIsPollingActive(true);
    abortControllerRef.current = new AbortController();
    pollStatus(id);
    pollingIntervalRef.current = setInterval(() => {
      if (isPollingRef.current && isResponseForCurrentJob(id)) pollStatus(id);
    }, 2000);
  };

  const loadProject = async (id) => {
    if (!id || id === "null" || id === "undefined") {
      setShowHelp(true);
      setIsLoading(false);
      setIsProcessing(false);
      return;
    }
    setIsLoading(true);
    stopPolling();
    setJobId(id);
    setIsProcessing(false);
    setShowHelp(false);
    setJobStatus("loading");
    setWarningDismissed(false);
    setShowTimeoutWarning(false);
    setJobErrorMessage("");
    setJobErrorDetails(null);
    setShowSandpack(false);
    setProjectFiles(null);
    setSandpackFiles({});
    currentJobIdRef.current = id;
    try {
      const project = getProjectById(id);
      if (project && project.messages && project.messages.length > 0)
        setMessages(project.messages);
      else setMessages([]);
      if (project && project.files && project.files.length > 0) {
        setProjectFiles(project.files);
        setDownloadUrl(`${API_BASE_URL}/download/${id}`);
        const sf = convertToSandpackFiles(project.files);
        setSandpackFiles(sf);
        setShowSandpack(true);
        setJobStatus("completed");
        setIsLoading(false);
        if (!project.messages || project.messages.length === 0) {
          const pkgJson = project.files.find(
            (f) =>
              f.filename === "package.json" ||
              f.filename === "frontend/package.json",
          );
          let pname = "Project";
          if (pkgJson) {
            try {
              pname = JSON.parse(pkgJson.content).name || pname;
            } catch {}
          }
          const ff = project.files.filter(
            (f) =>
              f.filename.startsWith("frontend/") ||
              !f.filename.startsWith("backend/"),
          ).length;
          const bf = project.files.filter((f) =>
            f.filename.startsWith("backend/"),
          ).length;
          const sm = {
            id: Date.now(),
            text: `✅ Loaded **${pname}** — ${project.files.length} files (${ff} frontend, ${bf} backend)`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages([sm]);
          updateProjectStatus(
            id,
            "completed",
            project.files,
            [sm],
            null,
            project.prompt || "",
          );
        }
        scrollToBottom();
        return;
      }
      let apiStatus = null;
      try {
        const sr = await axios.get(`${API_BASE_URL}/status/${id}`);
        apiStatus = sr.data;
      } catch {}
      if (apiStatus && apiStatus.status === "completed") {
        try {
          const rr = await axios.get(`${API_BASE_URL}/result/${id}`);
          const files = rr.data.files;
          setProjectFiles(files);
          setDownloadUrl(`${API_BASE_URL}/download/${id}`);
          const sf = convertToSandpackFiles(files);
          setSandpackFiles(sf);
          setShowSandpack(true);
          setJobStatus("completed");
          const sm = {
            id: Date.now(),
            text: `✅ Project loaded successfully!`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages((prev) => (prev.length > 0 ? prev : [sm]));
          const userPrompt = project?.prompt || "";
          saveProjectToStorage(id, files, [sm], userPrompt);
          setIsLoading(false);
          scrollToBottom();
          return;
        } catch {}
      }
      if (
        apiStatus &&
        (apiStatus.status === "processing" || apiStatus.status === "running")
      ) {
        setJobStatus("processing");
        setIsProcessing(true);
        setIsLoading(false);
        if (!project?.messages || project.messages.length === 0) {
          setMessages([
            {
              id: Date.now(),
              text: `🔄 Project is still processing… I'll update you when it's ready!`,
              sender: "ai",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
        startPolling(id);
        return;
      }
      if (apiStatus && apiStatus.status === "failed") {
        setJobStatus("failed");
        const em = apiStatus.error?.message || "Project generation failed";
        const ed = apiStatus.error || { message: em };
        setJobErrorMessage(em);
        setJobErrorDetails(ed);
        if (!project?.messages || project.messages.length === 0) {
          setMessages([
            {
              id: Date.now(),
              text: `❌ Project failed: ${em}`,
              sender: "ai",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
        setIsLoading(false);
        scrollToBottom();
        return;
      }
      setJobStatus("failed");
      setJobErrorMessage("Project not found");
      setMessages([
        {
          id: Date.now(),
          text: `❌ No project found with ID: ${id}. Click **New chat** to start fresh.`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setIsLoading(false);
      scrollToBottom();
    } catch (error) {
      setJobStatus("failed");
      setJobErrorMessage(error.message);
      setJobErrorDetails({ type: "load_error", message: error.message });
      setMessages([
        {
          id: Date.now(),
          text: `❌ Error loading project: ${error.message}`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setIsLoading(false);
      scrollToBottom();
    }
  };

  const handleBuildRequest = async (prompt) => {
    if (!prompt || prompt.trim().length < 3) {
      setInputError("Please enter a valid request (minimum 3 characters)");
      return;
    }
    setInputError("");
    setIsProcessing(true);
    setJobStatus("processing");
    setWarningDismissed(false);
    setShowTimeoutWarning(false);
    setShowSandpack(false);
    setJobErrorMessage("");
    setJobErrorDetails(null);
    try {
      const br = await axios.post(`${API_BASE_URL}/build`, null, {
        params: { prompt },
        timeout: 30000,
      });
      const { job_id } = br.data;
      if (!job_id) throw new Error("No job ID returned from server");
      savePendingJob(job_id, prompt);
      lastLoadedProjectId.current = job_id;
      setSearchParams({ project: job_id });
      const pm = {
        id: Date.now(),
        text: `✨ Processing your request…\n\nJob ID: ${job_id}\nBuilding your project with AI — this may take 30–60 seconds.`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((p) => [...p, pm]);
      scrollToBottom();
      startPolling(job_id);
    } catch (error) {
      let em = "Failed to start project generation.",
        ed = {};
      if (error.code === "ECONNABORTED") {
        em = "Request timeout.";
        ed = { type: "timeout" };
      } else if (error.response) {
        em = `Server error: ${error.response.status}`;
        ed = { type: "server_error", status: error.response.status };
      } else if (error.request) {
        em = "Cannot connect to server.";
        ed = { type: "connection_error" };
      } else {
        em = error.message;
        ed = { type: "unknown_error" };
      }
      setMessages((p) => [
        ...p,
        {
          id: Date.now(),
          text: `❌ Build failed: ${em}`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
      setIsProcessing(false);
      setJobStatus("error");
      scrollToBottom();
    }
  };

  // ── NEW: Handle screenshot-based project build ────────────────────────────
  const handleScreenshotAndBuild = async (combinedPrompt, preview) => {
    setScreenshotPreview(preview);
    const umo = {
      id: Date.now(),
      text: `📸 Build from screenshot`,
      sender: "user",
      screenshotPreview: preview,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((p) => [...p, umo]);
    setShowHelp(false);
    scrollToBottom();

    setIsAIThinking(true);
    setAIStatus("enhancing");

    const thinkingMsg = {
      id: Date.now() + 1,
      text: "🧠 Processing screenshot analysis and crafting full project prompt…",
      sender: "ai",
      isTemp: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((p) => [...p, thinkingMsg]);
    scrollToBottom();

    const enhanced = await enhancePromptWithGroq(combinedPrompt);
    setMessages((p) => p.filter((m) => !m.isTemp));

    const note = {
      id: Date.now() + 2,
      text: `✨ Screenshot analyzed! Starting full project generation…`,
      sender: "ai",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((p) => [...p, note]);
    scrollToBottom();
    setIsAIThinking(false);
    setAIStatus("");

    await handleBuildRequest(enhanced);
  };

  // ── Smart send ────────────────────────────────────────────────────────────
  const handleSendMessage = async () => {
    if (!message.trim() || isProcessing || isAIThinking) return;
    setInputError("");
    const userText = message.trim();
    const umo = {
      id: Date.now(),
      text: userText,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((p) => [...p, umo]);
    setMessage("");
    setShowHelp(false);
    scrollToBottom();

    // VIDEO SEARCH
    if (isVideoSearchRequest(userText)) {
      setIsAIThinking(true);
      setAIStatus("searching");
      setIsSearchingVideos(true);
      const query = extractSearchQuery(userText);
      const thinkingMsg = {
        id: Date.now() + 1,
        text: `🎬 Searching videos for "${query}"…`,
        sender: "ai",
        isTemp: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((p) => [...p, thinkingMsg]);
      scrollToBottom();
      try {
        const videos = await fetchVideos(query);
        setMessages((p) => p.filter((m) => !m.isTemp));
        if (videos.length === 0) {
          setMessages((p) => [
            ...p,
            {
              id: Date.now() + 2,
              text: `😕 No videos found for "${query}". Try a different search term.`,
              sender: "ai",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        } else {
          setMessages((p) => [
            ...p,
            {
              id: Date.now() + 2,
              text: `🎬 Found ${videos.length} videos for **"${query}"**`,
              sender: "ai",
              isVideoResult: true,
              videos,
              videoQuery: query,
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
      } catch (err) {
        setMessages((p) => p.filter((m) => !m.isTemp));
        setMessages((p) => [
          ...p,
          {
            id: Date.now() + 2,
            text: `❌ Failed to fetch videos: ${err.message}. Please try again.`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }
      setIsAIThinking(false);
      setAIStatus("");
      setIsSearchingVideos(false);
      scrollToBottom();
      return;
    }

    // IMAGE SEARCH
    if (isImageSearchRequest(userText)) {
      setIsAIThinking(true);
      setAIStatus("searching");
      setIsSearchingImages(true);
      const query = extractSearchQuery(userText);
      const thinkingMsg = {
        id: Date.now() + 1,
        text: `🔍 Searching images for "${query}"…`,
        sender: "ai",
        isTemp: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((p) => [...p, thinkingMsg]);
      scrollToBottom();
      try {
        const photos = await fetchImages(query);
        setMessages((p) => p.filter((m) => !m.isTemp));
        if (photos.length === 0) {
          setMessages((p) => [
            ...p,
            {
              id: Date.now() + 2,
              text: `😕 No images found for "${query}". Try a different search term.`,
              sender: "ai",
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        } else {
          setMessages((p) => [
            ...p,
            {
              id: Date.now() + 2,
              text: `🖼️ Found ${photos.length} images for **"${query}"**`,
              sender: "ai",
              isImageResult: true,
              photos,
              imageQuery: query,
              timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ]);
        }
      } catch (err) {
        setMessages((p) => p.filter((m) => !m.isTemp));
        setMessages((p) => [
          ...p,
          {
            id: Date.now() + 2,
            text: `❌ Failed to fetch images: ${err.message}. Please try again.`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }
      setIsAIThinking(false);
      setAIStatus("");
      setIsSearchingImages(false);
      scrollToBottom();
      return;
    }

    // FULL PROJECT
    const isFullProject = isFullProjectBuild(userText);
    const isBuildIntent = detectBuildIntent(userText);
    if (isFullProject && isBuildIntent) {
      setIsAIThinking(true);
      setAIStatus("enhancing");
      const thinkingMsg = {
        id: Date.now() + 1,
        text: "🧠 Analyzing your request and crafting a powerful prompt for full project generation…",
        sender: "ai",
        isTemp: true,
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((p) => [...p, thinkingMsg]);
      scrollToBottom();
      const enhancedPrompt = await enhancePromptWithGroq(userText);
      setMessages((p) => p.filter((m) => !m.isTemp));
      const enhancedNote = {
        id: Date.now() + 2,
        text: `✨ Prompt enhanced! Starting full project generation with AI…\n\n_This will create a complete, production-ready application._`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((p) => [...p, enhancedNote]);
      scrollToBottom();
      setIsAIThinking(false);
      setAIStatus("");
      await handleBuildRequest(enhancedPrompt);
    } else {
      setIsAIThinking(true);
      setAIStatus("thinking");
      setIsTyping(true);
      const wantsCode =
        /create|make|generate|build|write|code|component|button|card|modal|navbar|footer|form|table|list|grid|function|hook/i.test(
          userText,
        );
      let aiResponse;
      if (wantsCode && !isFullProject) {
        setAIStatus("coding");
        aiResponse = await generateSmallTaskCode(userText);
      } else {
        aiResponse = await getConversationalResponse(userText);
      }
      setIsTyping(false);
      setIsAIThinking(false);
      setAIStatus("");
      const aiMsg = {
        id: Date.now() + 1,
        text: aiResponse,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages((p) => [...p, aiMsg]);
      scrollToBottom();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleNewChat = () => {
    stopPolling();
    setMessages([]);
    setShowHelp(true);
    setMessage("");
    setProjectFiles(null);
    setSandpackFiles({});
    setShowSandpack(false);
    setJobId(null);
    setJobStatus(null);
    setDownloadUrl(null);
    setIsProcessing(false);
    setPollingAttempts(0);
    setShowTimeoutWarning(false);
    setWarningDismissed(false);
    setInputError("");
    setIsPollingActive(false);
    setJobErrorMessage("");
    setJobErrorDetails(null);
    setShowMobileWorkspace(false);
    setSaveStatus("idle");
    currentJobIdRef.current = null;
    lastLoadedProjectId.current = null;
    setIsAIThinking(false);
    setAIStatus("");
    setScreenshotPreview(null);
    setSearchParams({});
    scrollToBottom();
  };

  const handleTemplateClick = (templateName) => {
    const tm = {
      id: Date.now(),
      text: `Build a ${templateName} application`,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([tm]);
    setShowHelp(false);
    scrollToBottom();
    const prompts = {
      "Education ERP":
        "Create a complete Education ERP website with student management, teacher portal, attendance tracking, and grade books. Include responsive dashboard with modern UI use framer-motion gsap animation.",
      "E-commerce":
        "Build a full E-commerce website with product catalog, shopping cart, user authentication, payment integration, and admin dashboard use framer-motion gsap animation.",
      "Social Media":
        "Create a Social Media platform with user profiles, posts, likes, comments, followers, and real-time notifications use framer-motion gsap animation.",
      "Chat App":
        "Build a Real-time Chat Application with private messaging, group chats, file sharing, and online status use framer-motion gsap animation.",
      "Video App":
        "Create a Video Streaming Platform with video upload, video player, playlists, subscriptions, and recommendations use framer-motion gsap animation.",
      "Music App":
        "Build a Music Streaming App with audio playback, playlists, album browsing, search, and offline support use framer-motion gsap animation.",
      "Food App":
        "Create a Food Delivery App with restaurant listings, menu browsing, order tracking, and reviews use framer-motion gsap animation.",
      "Travel App":
        "Build a Travel Booking Platform with property listings, search filters, booking calendar, and user reviews use framer-motion gsap animation.",
    };
    const rawPrompt =
      prompts[templateName] ||
      `Create a complete ${templateName} application with modern UI, responsive design, and best practices use framer-motion gsap animation.`;
    setIsAIThinking(true);
    setAIStatus("enhancing");
    setIsProcessing(true);
    setJobStatus("processing");
    const thinkingMsg = {
      id: Date.now() + 1,
      text: `🧠 Optimizing prompt for ${templateName} full project…`,
      sender: "ai",
      isTemp: true,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((p) => [...p, thinkingMsg]);
    enhancePromptWithGroq(rawPrompt).then((enhanced) => {
      setMessages((p) => p.filter((m) => !m.isTemp));
      setIsAIThinking(false);
      setAIStatus("");
      handleBuildRequest(enhanced);
    });
  };

  const handleDownload = () => {
    if (downloadUrl) window.open(downloadUrl, "_blank");
  };

  const handleProjectClick = (jid) => {
    if (lastLoadedProjectId.current === jid && jobId === jid) return;
    setShowHelp(false);
    setProjectFiles(null);
    setSandpackFiles({});
    setShowSandpack(false);
    setJobStatus(null);
    setJobErrorMessage("");
    setJobErrorDetails(null);
    setShowMobileWorkspace(false);
    setSaveStatus("idle");
    lastLoadedProjectId.current = null;
    setSearchParams({ project: jid });
  };

  const handleManualSave = () => {
    if (saveFunctionRef.current) saveFunctionRef.current();
  };
  const handleFileSave = (files) => {
    setLastSaved(new Date());
    setProjectFiles(files);
    const usf = convertToSandpackFiles(files);
    setSandpackFiles(usf);
    loadRecentProjects();
  };
  const handleSaveFunctionReady = (fn) => {
    saveFunctionRef.current = fn;
  };

  const getDependencies = () => {
    const pkgJson = projectFiles?.find(
      (f) =>
        f.filename === "package.json" || f.filename === "frontend/package.json",
    );
    let deps = {};
    if (pkgJson) {
      try {
        deps = JSON.parse(cleanCodeContent(pkgJson.content)).dependencies || {};
      } catch {}
    }
    return {
      ...deps,
      react: deps.react || "^18.2.0",
      "react-dom": deps["react-dom"] || "^18.2.0",
      "react-router-dom": deps["react-router-dom"] || "^6.3.0",
      "framer-motion": "^10.16.4",
      gsap: "^3.12.5",
      axios: "^1.6.7",
      "react-hook-form": "^7.50.0",
      "react-icons": "^5.0.1",
      "lucide-react": "^0.376.0",
      "chart.js": "^4.4.1",
      "react-chartjs-2": "^5.2.0",
      recharts: "^2.10.4",
      dayjs: "^1.11.10",
      lodash: "^4.17.21",
      clsx: "^2.1.0",
      "@headlessui/react": "^1.7.18",
      "@heroicons/react": "^2.1.1",
      "react-hot-toast": "^2.4.1",
      zustand: "^4.5.2",
      "@tanstack/react-query": "^5.28.0",
      "@dnd-kit/core": "^6.1.0",
      "@tanstack/react-table": "^8.11.7",
      "react-markdown": "^9.0.1",
      "react-syntax-highlighter": "^15.5.0",
      "react-dropzone": "^14.2.3",
      leaflet: "^1.9.4",
      "react-leaflet": "^4.2.1",
    };
  };

  const recentChats = recentProjects.map((project) => {
    let icon, color, bgColor, title;
    if (project.status === "processing") {
      icon = <HiOutlineRefresh className="animate-spin" />;
      color = "#D97706";
      bgColor = "rgba(217,119,6,0.1)";
      title = project.title || "Processing...";
    } else if (project.status === "failed") {
      icon = <HiOutlineExclamation />;
      color = "#DC2626";
      bgColor = "rgba(220,38,38,0.1)";
      title = "Failed Project";
    } else if (project.status === "completed") {
      icon = <HiOutlineCheckCircle />;
      color = "#059669";
      bgColor = "rgba(5,150,105,0.1)";
      title = project.title || "Completed Project";
    } else {
      icon = <HiOutlineFolder />;
      color = "#64748B";
      bgColor = "rgba(100,116,139,0.1)";
      title = project.title || "Project";
    }
    let previewText = "";
    if (project.status === "completed" && project.totalFiles)
      previewText = `${project.totalFiles} files · ${project.frontendFiles || 0} frontend, ${project.backendFiles || 0} backend`;
    else if (project.prompt)
      previewText =
        project.prompt.substring(0, 55) +
        (project.prompt.length > 55 ? "…" : "");
    else previewText = project.preview || "No preview";
    return {
      id: project.id,
      title,
      preview: previewText,
      time: project.timestamp,
      icon,
      color,
      bgColor,
      jobId: project.id,
      status: project.status,
    };
  });

  const groupChatsByDate = (chats) => {
    const now = new Date();
    const today = now.toDateString();
    const yesterday = new Date(now - 86400000).toDateString();
    const groups = { Today: [], Yesterday: [], "This week": [], Older: [] };
    chats.forEach((chat) => {
      let d;
      if (chat.time && typeof chat.time === "string") {
        if (chat.time.includes("/")) {
          const parts = chat.time.split(",");
          const dateParts = parts[0].trim().split("/");
          const timeParts = parts[1]
            ? parts[1].trim().split(":")
            : ["00", "00", "00"];
          d = new Date(
            parseInt(dateParts[2]),
            parseInt(dateParts[1]) - 1,
            parseInt(dateParts[0]),
            parseInt(timeParts[0]),
            parseInt(timeParts[1]),
            parseInt(timeParts[2]),
          );
        } else {
          d = new Date(chat.time);
        }
      } else {
        d = new Date(chat.time);
      }
      if (isNaN(d.getTime())) {
        groups["Older"].push(chat);
        return;
      }
      const ds = d.toDateString();
      if (ds === today) groups["Today"].push(chat);
      else if (ds === yesterday) groups["Yesterday"].push(chat);
      else if (now - d < 7 * 86400000) groups["This week"].push(chat);
      else groups["Older"].push(chat);
    });
    const result = {};
    Object.keys(groups).forEach((key) => {
      if (groups[key].length > 0) result[key] = groups[key];
    });
    return result;
  };

  const chatGroups = groupChatsByDate(recentChats);

  const ErrorDisplay = ({ message: errMsg, details }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl overflow-hidden border"
        style={{
          borderColor: "rgba(220,38,38,0.2)",
          backgroundColor: "rgba(220,38,38,0.04)",
        }}
      >
        <div className="flex items-start gap-3 p-4">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: "rgba(220,38,38,0.12)" }}
          >
            <BsExclamationTriangle className="text-sm text-red-500" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-red-600 mb-1">
              Generation failed
            </p>
            <p className="text-xs text-slate-500 mb-3">
              {errMsg || "Unknown error occurred"}
            </p>
            {details && (
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-slate-400 hover:text-slate-600 underline mb-2"
              >
                {showDetails ? "Hide details" : "Show details"}
              </button>
            )}
            {showDetails && details && (
              <pre className="text-xs p-3 rounded-xl bg-slate-50 text-slate-500 overflow-auto max-h-32 mb-3">
                {JSON.stringify(details, null, 2)}
              </pre>
            )}
            <div className="flex gap-2">
              <button
                onClick={handleNewChat}
                className="px-3 py-1.5 rounded-lg text-xs font-medium text-white"
                style={{
                  background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                }}
              >
                New Project
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-3 py-1.5 rounded-lg text-xs font-medium"
                style={{ backgroundColor: "#F1F5F9", color: "#64748B" }}
              >
                Refresh
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  const DiagnosticDisplay = ({ data, onClose }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [copiedFile, setCopiedFile] = useState(null);
    const [expandedFolders, setExpandedFolders] = useState({});
    if (!data) return null;
    const files = data.projectData?.files || [];
    const groupedFiles = files.reduce((acc, file) => {
      const parts = file.filename.split("/");
      const folder = parts.length > 1 ? parts[0] : "root";
      if (!acc[folder]) acc[folder] = [];
      acc[folder].push({
        ...file,
        name: parts.slice(1).join("/") || file.filename,
        extension: file.filename.split(".").pop(),
      });
      return acc;
    }, {});
    const sortedFolders = Object.keys(groupedFiles).sort((a, b) =>
      a === "root" ? 1 : b === "root" ? -1 : a.localeCompare(b),
    );
    React.useEffect(() => {
      const allEx = {};
      sortedFolders.forEach((f) => {
        allEx[f] = true;
      });
      setExpandedFolders(allEx);
      if (files.length > 0) setSelectedFile(files[0]);
    }, []);
    const copyToClipboard = async (content, fileName) => {
      try {
        await navigator.clipboard.writeText(content);
        setCopiedFile(fileName);
        setTimeout(() => setCopiedFile(null), 2000);
      } catch {}
    };
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-2xl border overflow-hidden mb-4"
        style={{
          borderColor: "rgba(234,179,8,0.2)",
          backgroundColor: "rgba(234,179,8,0.04)",
        }}
      >
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: "rgba(234,179,8,0.15)" }}
        >
          <div className="flex items-center gap-2">
            <BsWrench className="text-sm text-amber-500" />
            <span className="text-sm font-semibold text-amber-600">
              Project Files · {files.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-amber-50 text-slate-400 hover:text-slate-600"
          >
            <HiOutlineX className="text-sm" />
          </button>
        </div>
        <div className="p-4 max-h-80 overflow-y-auto">
          {sortedFolders.map((folder) => (
            <div key={folder} className="mb-2">
              <button
                onClick={() =>
                  setExpandedFolders((p) => ({ ...p, [folder]: !p[folder] }))
                }
                className="w-full flex items-center gap-2 px-2 py-1.5 rounded-lg text-xs font-medium text-slate-600 hover:bg-slate-100"
              >
                <span>{expandedFolders[folder] ? "📂" : "📁"}</span>
                <span className="flex-1 text-left capitalize">{folder}</span>
                <span className="text-slate-400">
                  ({groupedFiles[folder].length})
                </span>
              </button>
              {expandedFolders[folder] && (
                <div className="ml-5 mt-1 space-y-0.5">
                  {groupedFiles[folder].map((file) => (
                    <div
                      key={file.filename}
                      className="flex items-center justify-between px-2 py-1 rounded-lg hover:bg-slate-100 cursor-pointer"
                      onClick={() => setSelectedFile(file)}
                    >
                      <span className="text-xs text-slate-600 truncate">
                        {file.name}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(file.content, file.filename);
                        }}
                        className="text-xs text-slate-400 hover:text-slate-600 ml-2"
                      >
                        {copiedFile === file.filename ? (
                          <BsCheck2 />
                        ) : (
                          <BsCopy />
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    );
  };

  const newtheme =
    workspaceView === "preview" ? "light" : isDark ? "dark" : "light";
  const [currentUser, setCurrentUser] = useState(null);
  const [showLogout, setShowLogout] = useState(false);
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) setCurrentUser(JSON.parse(user));
  }, []);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };
  const getInitials = (name) => {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { font-family: 'DM Sans', sans-serif; box-sizing: border-box; }
        :root {
          --sidebar-bg: ${isDark ? "#0E1117" : "#FFFFFF"};
          --main-bg: ${isDark ? "#090D13" : "#F7F8FC"};
          --card-bg: ${isDark ? "#141920" : "#FFFFFF"};
          --border: ${isDark ? "rgba(255,255,255,0.07)" : "#EAEDF3"};
          --text-primary: ${isDark ? "#F1F5F9" : "#0F172A"};
          --text-secondary: ${isDark ? "#64748B" : "#64748B"};
          --text-muted: ${isDark ? "#475569" : "#94A3B8"};
          --accent: #6366f1;
          --accent-soft: rgba(99,102,241,0.1);
          --user-bubble: ${isDark ? "linear-gradient(135deg,#6366f1,#8b5cf6)" : "linear-gradient(135deg,#6366f1,#8b5cf6)"};
          --ai-bubble: ${isDark ? "#141920" : "#FFFFFF"};
          --input-bg: ${isDark ? "#141920" : "#FFFFFF"};
          --hover: ${isDark ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)"};
          --divider: ${isDark ? "rgba(255,255,255,0.06)" : "#EAEDF3"};
          --scrollbar-track: transparent;
          --scrollbar-thumb: ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)"};
        }
        ::-webkit-scrollbar { width: 4px; height: 4px; }
        ::-webkit-scrollbar-track { background: var(--scrollbar-track); }
        ::-webkit-scrollbar-thumb { background: var(--scrollbar-thumb); border-radius: 99px; }
        .sidebar-item { display: flex; align-items: flex-start; gap: 10px; padding: 8px 10px; border-radius: 10px; cursor: pointer; transition: background 0.15s; }
        .sidebar-item:hover { background: var(--hover); }
        .sidebar-item.active { background: var(--accent-soft); }
        .input-wrap { background: var(--input-bg); border: 1.5px solid var(--border); border-radius: 16px; transition: border-color 0.2s, box-shadow 0.2s; }
        .input-wrap:focus-within { border-color: rgba(99,102,241,0.4); box-shadow: 0 0 0 4px rgba(99,102,241,0.08); }
        .send-btn { width: 36px; height: 36px; border-radius: 10px; background: linear-gradient(135deg,#6366f1,#8b5cf6); border: none; cursor: pointer; display: flex; align-items: center; justify-center: center; align-items: center; color: white; transition: transform 0.15s, box-shadow 0.15s; box-shadow: 0 4px 12px rgba(99,102,241,0.3); }
        .send-btn:hover { transform: scale(1.05); box-shadow: 0 6px 18px rgba(99,102,241,0.4); }
        .send-btn:active { transform: scale(0.97); }
        .send-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        .chip { padding: 6px 14px; border-radius: 20px; border: 1.5px solid var(--border); background: transparent; font-size: 12.5px; color: var(--text-secondary); cursor: pointer; display: flex; align-items: center; gap: 6px; transition: all 0.15s; white-space: nowrap; }
        .chip:hover { border-color: rgba(99,102,241,0.4); color: var(--accent); background: var(--accent-soft); }
        .icon-btn { padding: 7px; border-radius: 8px; border: none; background: transparent; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--text-muted); transition: all 0.15s; }
        .icon-btn:hover { background: var(--hover); color: var(--text-primary); }
        .view-toggle { display: flex; align-items: center; gap: 2px; padding: 3px; border-radius: 10px; background: var(--hover); }
        .view-toggle-btn { padding: 4px 12px; border-radius: 7px; border: none; background: transparent; font-size: 12px; font-weight: 500; cursor: pointer; color: var(--text-secondary); transition: all 0.2s; }
        .view-toggle-btn.active { background: var(--card-bg); color: var(--text-primary); box-shadow: 0 1px 4px rgba(0,0,0,0.1); }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }
        .status-dot.green { background: #10b981; }
        .status-dot.amber { background: #f59e0b; animation: pulse 1.5s infinite; }
        .status-dot.red { background: #ef4444; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
        .ai-bubble { background: var(--ai-bubble); border: 1.5px solid var(--border); border-radius: 16px; border-bottom-left-radius: 4px; }
        .user-bubble { background: var(--user-bubble); border-radius: 16px; border-bottom-right-radius: 4px; color: white; }
        .section-label { font-size: 11px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: var(--text-muted); padding: 6px 10px 4px; }
        .new-chat-btn { width: 100%; padding: 9px 14px; border-radius: 10px; border: 1.5px solid var(--border); background: transparent; display: flex; align-items: center; gap: 8px; font-size: 13.5px; font-weight: 500; color: var(--text-primary); cursor: pointer; transition: all 0.15s; }
        .new-chat-btn:hover { background: var(--hover); border-color: rgba(99,102,241,0.3); }
        @keyframes shimmer { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }
        .ai-thinking { animation: shimmer 1.5s ease-in-out infinite; }
        .screenshot-btn { background: linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.08)); border: 1.5px solid rgba(99,102,241,0.25); border-radius: 10px; padding: 6px 12px; cursor: pointer; display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 500; color: #6366f1; transition: all 0.2s; }
        .screenshot-btn:hover { background: rgba(99,102,241,0.15); border-color: rgba(99,102,241,0.4); transform: translateY(-1px); box-shadow: 0 4px 12px rgba(99,102,241,0.2); }
      `}</style>

      {/* Screenshot Upload Modal */}
      {showScreenshotModal && (
        <ScreenshotUploadModal
          onClose={() => setShowScreenshotModal(false)}
          onAnalyzeAndBuild={handleScreenshotAndBuild}
          isDark={isDark}
        />
      )}

      <div
        className="flex h-screen w-full overflow-hidden"
        style={{ background: "var(--main-bg)", color: "var(--text-primary)" }}
      >
        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          )}
        </AnimatePresence>

        {/* Mobile Sidebar */}
        <motion.aside
          initial={{ x: "-100%" }}
          animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
          transition={{ type: "tween", duration: 0.28 }}
          className="fixed inset-y-0 left-0 w-72 z-50 lg:hidden flex flex-col overflow-hidden"
          style={{
            background: "var(--sidebar-bg)",
            borderRight: "1px solid var(--divider)",
          }}
        >
          <SidebarContent
            recentChats={recentChats}
            chatGroups={chatGroups}
            allTemplates={allTemplates}
            onClose={() => setIsMobileMenuOpen(false)}
            isDark={isDark}
            hoveredChat={hoveredChat}
            setHoveredChat={setHoveredChat}
            onNewChat={handleNewChat}
            onProjectClick={handleProjectClick}
            onTemplateClick={handleTemplateClick}
            currentTheme={currentTheme}
            toggleTheme={toggleTheme}
            projectId={jobId}
            currentUser={currentUser}
            showLogout={showLogout}
            handleLogout={handleLogout}
            getInitials={getInitials}
            setShowLogout={setShowLogout}
            navigate={navigate}
          />
        </motion.aside>

        {/* Desktop Sidebar */}
        <motion.aside
          animate={{ width: sidebarCollapsed ? 56 : 256 }}
          transition={{ type: "spring", stiffness: 400, damping: 35 }}
          className="hidden lg:flex flex-col h-full flex-shrink-0 overflow-hidden relative"
          style={{
            background: "var(--sidebar-bg)",
            borderRight: "1px solid var(--divider)",
          }}
        >
          {sidebarCollapsed ? (
            <CollapsedSidebar
              isDark={isDark}
              currentUser={currentUser}
              showLogout={showLogout}
              handleLogout={handleLogout}
              getInitials={getInitials}
              setShowLogout={setShowLogout}
              navigate={navigate}
              onNewChat={handleNewChat}
              recentChats={recentChats}
              onProjectClick={handleProjectClick}
              toggleTheme={toggleTheme}
              currentTheme={currentTheme}
            />
          ) : (
            <SidebarContent
              recentChats={recentChats}
              chatGroups={chatGroups}
              allTemplates={allTemplates}
              isDark={isDark}
              hoveredChat={hoveredChat}
              setHoveredChat={setHoveredChat}
              onNewChat={handleNewChat}
              onProjectClick={handleProjectClick}
              onTemplateClick={handleTemplateClick}
              currentTheme={currentTheme}
              toggleTheme={toggleTheme}
              projectId={jobId}
              currentUser={currentUser}
              showLogout={showLogout}
              handleLogout={handleLogout}
              getInitials={getInitials}
              setShowLogout={setShowLogout}
              navigate={navigate}
            />
          )}
        </motion.aside>

        {/* Main */}
        <main className="flex-1 flex flex-col h-full min-w-0 overflow-hidden">
          {/* Top bar */}
          <div
            className="flex-shrink-0 flex items-center justify-between px-4 py-2.5 border-b"
            style={{
              background: "var(--sidebar-bg)",
              borderColor: "var(--divider)",
            }}
          >
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden icon-btn"
                onClick={() => {
                  setIsMobileMenuOpen(true);
                  setSidebarCollapsed(!sidebarCollapsed);
                }}
              >
                <HiOutlineMenu className="text-lg" />
              </button>
              {jobId && (
                <div
                  className="hidden sm:flex items-center gap-2 text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <span style={{ color: "var(--text-muted)", fontSize: 12 }}>
                    Session
                  </span>
                  <span
                    className="font-mono text-xs px-2 py-0.5 rounded-md"
                    style={{
                      background: "var(--hover)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {jobId.slice(0, 12)}…
                  </span>
                </div>
              )}
              {isAIThinking && (
                <div
                  className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs"
                  style={{
                    background: "rgba(99,102,241,0.1)",
                    color: "#6366f1",
                  }}
                >
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ display: "inline-block", fontSize: 11 }}
                  >
                    ✨
                  </motion.span>
                  <span className="ai-thinking">
                    {aiStatus === "enhancing"
                      ? "Enhancing for full project…"
                      : aiStatus === "coding"
                        ? "Generating code…"
                        : aiStatus === "searching"
                          ? "Searching…"
                          : "Thinking…"}
                  </span>
                </div>
              )}
            </div>
            <div className="flex items-center gap-1.5">
              <button
                className="icon-btn"
                onClick={toggleTheme}
                title={isDark ? "Light mode" : "Dark mode"}
              >
                {isDark ? (
                  <HiOutlineSun className="text-base" />
                ) : (
                  <HiOutlineMoon className="text-base" />
                )}
              </button>
              {jobId && (
                <div
                  className="relative flex items-center gap-1 px-3 py-1.5 rounded-lg border text-sm cursor-pointer"
                  style={{
                    background: "var(--card-bg)",
                    borderColor: "var(--border)",
                    color: "var(--text-secondary)",
                  }}
                >
                  <IoIosShareAlt size={15} />
                  <select
                    value={selectedPlatform}
                    onChange={(e) => {
                      const v = e.target.value;
                      setSelectedPlatform(v);
                      if (v) handleShare(v);
                    }}
                    className="outline-none bg-transparent cursor-pointer text-xs"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    <option value="" disabled>
                      Share
                    </option>
                    <option value="whatsapp">WhatsApp</option>
                    <option value="facebook">Facebook</option>
                    <option value="telegram">Telegram</option>
                    <option value="instagram">Instagram</option>
                  </select>
                </div>
              )}
              {jobStatus === "completed" && (
                <button
                  className="lg:hidden block icon-btn"
                  onClick={() => setShowMobileWorkspace(!showMobileWorkspace)}
                >
                  {showMobileWorkspace ? (
                    <HiOutlineChat className="text-base lg:hidden" />
                  ) : (
                    <HiOutlineCode className="text-base lg:hidden" />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 flex overflow-hidden">
            {/* Chat panel */}
            <div
              className={`${jobStatus === "completed" ? "lg:w-[42%]" : "w-full"} ${jobStatus === "completed" && showMobileWorkspace ? "hidden lg:flex" : "flex"} flex-col overflow-hidden transition-all duration-300`}
              style={{
                borderRight:
                  jobStatus === "completed"
                    ? "1px solid var(--divider)"
                    : "none",
              }}
            >
              {/* Messages */}
              <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto p-5"
                style={{ scrollBehavior: "smooth" }}
              >
                <div className="max-w-xl mx-auto lg:max-w-none">
                  <AnimatePresence>
                    {showTimeoutWarning && !warningDismissed && (
                      <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="mb-4 flex items-start gap-3 p-4 rounded-2xl border"
                        style={{
                          background: "rgba(245,158,11,0.06)",
                          borderColor: "rgba(245,158,11,0.2)",
                        }}
                      >
                        <BsHourglassSplit className="text-amber-500 text-base flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-amber-600">
                            Still working…
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">
                            Complex projects can take 2–5 minutes.
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            setWarningDismissed(true);
                            setShowTimeoutWarning(false);
                          }}
                          className="icon-btn text-slate-400 p-1"
                        >
                          <HiOutlineX className="text-sm" />
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {showDiagnostic && diagnosticData && (
                    <DiagnosticDisplay
                      data={diagnosticData}
                      onClose={() => setShowDiagnostic(false)}
                    />
                  )}

                  <AnimatePresence mode="wait">
                    {showHelp && messages.length === 0 ? (
                      <motion.div
                        key="landing"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="flex flex-col items-center justify-center min-h-[65vh] text-center px-4"
                      >
                        {/* <motion.div
                          initial={{ scale: 0.85, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.05, duration: 0.4 }}
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-7"
                          style={{
                            background:
                              "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.1))",
                            border: "1.5px solid rgba(99,102,241,0.2)",
                          }}
                        >
                          <img
                            src="/Ai.svg"
                            alt="EVA"
                            className="w-8 h-8"
                            
                          />
                        </motion.div> */}

                        <motion.h1
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.12 }}
                          className="text-3xl font-semibold mb-2 leading-snug"
                          style={{
                            color: "var(--text-primary)",
                            letterSpacing: "-0.5px",
                          }}
                        >
                          <span
                            style={{
                              background:
                                "linear-gradient(135deg, #6366f1, #8b5cf6, #a78bfa)",
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }}
                          >
                            <Typewriter
                              words={[
                                "What would you like to build?",
                                "Build a modern website",
                                "Create a powerful app",
                                "Design an AI dashboard",
                                "Upload a screenshot to clone it",
                              ]}
                              loop={true}
                              cursor
                              cursorStyle="|"
                              typeSpeed={70}
                              deleteSpeed={45}
                              delaySpeed={1800}
                            />
                          </span>
                        </motion.h1>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.22 }}
                          className="text-sm mb-2"
                          style={{ color: "var(--text-muted)" }}
                        >
                          Describe what you want — or upload a screenshot to
                          clone any website instantly.
                        </motion.p>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.28 }}
                          className="text-xs mb-6 flex items-center gap-1.5"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span
                            style={{
                              background: "rgba(99,102,241,0.12)",
                              color: "#6366f1",
                              padding: "2px 8px",
                              borderRadius: 20,
                              fontWeight: 500,
                            }}
                          >
                            ✨ Powered by EVA AI
                          </span>
                          <span>— smart project detection</span>
                        </motion.p>

                        {/* Screenshot upload CTA */}
                        {/* <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.32 }} className="mb-6">
                          <motion.button
                            whileHover={{ y: -2, scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setShowScreenshotModal(true)}
                            className="flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white"
                            style={{
                              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
                              boxShadow: "0 6px 24px rgba(99,102,241,0.35)",
                            }}
                          >
                            <div className="w-7 h-7 rounded-xl bg-white/20 flex items-center justify-center">
                              <BsImage className="text-base" />
                            </div>
                            <span>Upload Screenshot → Build Project</span>
                            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">NEW</span>
                          </motion.button>
                          <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>
                            OCR + AI analyzes your screenshot → generates the full codebase
                          </p>
                        </motion.div> */}

                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.36 }}
                          className="flex flex-wrap gap-2 justify-center max-w-xl"
                        >
                          {allTemplates.map((t, i) => (
                            <motion.button
                              key={i}
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.97 }}
                              onClick={() => handleTemplateClick(t.name)}
                              className="chip"
                            >
                              <span>{t.icon}</span>
                              <span>{t.name}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="msgs"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="space-y-4 pb-2"
                      >
                        {messages.map((msg, i) => {
                          const isUser = msg.sender === "user";
                          return (
                            <motion.div
                              key={msg.id}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: i * 0.02 }}
                              className={`flex ${isUser ? "justify-end" : "justify-start"} gap-2.5`}
                            >
                              {!isUser && (
                                <div
                                  className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                  style={{
                                    background:
                                      "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.1))",
                                    border: "1px solid rgba(99,102,241,0.15)",
                                  }}
                                >
                                  <BsRobot
                                    className="text-xs"
                                    style={{ color: "#6366f1" }}
                                  />
                                </div>
                              )}
                              <div
                                className={`${isUser ? "max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed user-bubble" : msg.isImageResult || msg.isVideoResult ? "flex-1 min-w-0" : "max-w-[80%] px-3.5 py-2.5 text-sm leading-relaxed ai-bubble"}`}
                                style={msg.isTemp ? { opacity: 0.7 } : {}}
                              >
                                {isUser ? (
                                  <div>
                                    <div className="whitespace-pre-wrap">
                                      {msg.text}
                                    </div>
                                    {msg.screenshotPreview && (
                                      <ScreenshotBuildMessage
                                        preview={msg.screenshotPreview}
                                        isDark={isDark}
                                      />
                                    )}
                                    <p className="text-xs mt-1.5 opacity-40 text-right">
                                      {msg.timestamp}
                                    </p>
                                  </div>
                                ) : msg.isImageResult ? (
                                  <div>
                                    <div className="px-3.5 py-2.5 text-sm ai-bubble mb-1">
                                      <AIMessageContent
                                        text={msg.text}
                                        isDark={isDark}
                                      />
                                      <p className="text-xs mt-1.5 opacity-40 text-right">
                                        {msg.timestamp}
                                      </p>
                                    </div>
                                    <ImageSearchResults
                                      photos={msg.photos}
                                      query={msg.imageQuery}
                                      isDark={isDark}
                                      onClose={() =>
                                        setMessages((prev) =>
                                          prev.filter((m) => m.id !== msg.id),
                                        )
                                      }
                                    />
                                  </div>
                                ) : msg.isVideoResult ? (
                                  <div>
                                    <div className="px-3.5 py-2.5 text-sm ai-bubble mb-1">
                                      <AIMessageContent
                                        text={msg.text}
                                        isDark={isDark}
                                      />
                                      <p className="text-xs mt-1.5 opacity-40 text-right">
                                        {msg.timestamp}
                                      </p>
                                    </div>
                                    <VideoSearchResults
                                      videos={msg.videos}
                                      query={msg.videoQuery}
                                      isDark={isDark}
                                      onClose={() =>
                                        setMessages((prev) =>
                                          prev.filter((m) => m.id !== msg.id),
                                        )
                                      }
                                    />
                                  </div>
                                ) : (
                                  <>
                                    <AIMessageContent
                                      text={msg.text}
                                      isDark={isDark}
                                    />
                                    <p className="text-xs mt-1.5 opacity-40 text-right">
                                      {msg.timestamp}
                                    </p>
                                  </>
                                )}
                              </div>
                            </motion.div>
                          );
                        })}

                        {isProcessing &&
                          jobStatus === "processing" &&
                          !projectFiles &&
                          isPollingActive && (
                            <div className="flex justify-center">
                              <ModernProcessingAnimation
                                pollingAttempts={pollingAttempts}
                              />
                            </div>
                          )}
                        {isProcessing &&
                          jobStatus === "processing" &&
                          !projectFiles &&
                          isPollingActive && (
                            <div className="flex justify-center">
                              <StepComponent
                                jobId={jobId}
                                onStepUpdate={scrollToBottom}
                                messagesEndRef={messagesEndRef}
                              />
                            </div>
                          )}
                        {jobStatus === "failed" && jobErrorMessage && (
                          <ErrorDisplay
                            message={jobErrorMessage}
                            details={jobErrorDetails}
                          />
                        )}

                        {(isTyping || isAIThinking) && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex gap-2.5"
                          >
                            <div
                              className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
                              style={{
                                background:
                                  "linear-gradient(135deg,rgba(99,102,241,0.15),rgba(139,92,246,0.1))",
                                border: "1px solid rgba(99,102,241,0.15)",
                              }}
                            >
                              <BsRobot
                                className="text-xs"
                                style={{ color: "#6366f1" }}
                              />
                            </div>
                            <div className="ai-bubble px-4 py-3 flex flex-col gap-2">
                              <div className="flex gap-1 items-center">
                                {[0, 0.18, 0.36].map((delay, j) => (
                                  <motion.span
                                    key={j}
                                    animate={{ y: [0, -4, 0] }}
                                    transition={{
                                      duration: 0.55,
                                      repeat: Infinity,
                                      delay,
                                    }}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{
                                      background: "#6366f1",
                                      opacity: 0.6,
                                    }}
                                  />
                                ))}
                                {isAIThinking && (
                                  <span
                                    className="text-xs ml-1 ai-thinking"
                                    style={{ color: "#6366f1" }}
                                  >
                                    {aiStatus === "enhancing"
                                      ? "Crafting full project prompt…"
                                      : aiStatus === "coding"
                                        ? "Writing code…"
                                        : aiStatus === "searching"
                                          ? "Searching…"
                                          : "Thinking…"}
                                  </span>
                                )}
                              </div>
                            </div>
                          </motion.div>
                        )}
                        <div ref={messagesEndRef} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Input */}
              <div className="flex-shrink-0 px-4 pb-5 pt-2">
                <div className="max-w-[90vw] mx-auto lg:max-w-[70vw]">
                  <div className="input-wrap">
                    <div className="px-4 pt-3.5 pb-2">
                      <textarea
                        ref={inputRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={
                          isAIThinking
                            ? aiStatus === "searching"
                              ? "Searching…"
                              : "EVA is thinking…"
                            : "Ask me to build an app, upload a screenshot, find images/videos, or answer coding questions…"
                        }
                        className="w-full bg-transparent placeholder-gray-500 outline-none resize-none text-sm"
                        style={{
                          color: "var(--text-primary)",
                          minHeight: 24,
                          maxHeight: 130,
                          lineHeight: 1.6,
                          caretColor: "#6366f1",
                        }}
                        rows={2}
                        onInput={(e) => {
                          e.target.style.height = "auto";
                          e.target.style.height =
                            Math.min(e.target.scrollHeight, 130) + "px";
                        }}
                        disabled={
                          (isProcessing && jobStatus === "processing") ||
                          isAIThinking
                        }
                      />
                    </div>

                    <div className="px-3 pb-3 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={handleNewChat}
                          className="border border-gray-500 mr-1 h-9 flex justify-center cursor-pointer items-center w-9 rounded-lg"
                          title="New chat"
                        >
                          <HiOutlinePlus className="text-gray-500 text-sm" />
                        </button>

                        {/* Screenshot Upload Button */}
                        <motion.button
                          whileHover={{ y: -1 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() => setShowScreenshotModal(true)}
                          className="screenshot-btn"
                          title="Upload screenshot to build from"
                          disabled={
                            (isProcessing && jobStatus === "processing") ||
                            isAIThinking
                          }
                        >
                          <BsImage className="text-sm" />
                          <span className="hidden sm:inline">Screenshot</span>
                        </motion.button>

                        <span
                          className="text-xs hidden sm:flex items-center gap-1"
                          style={{ color: "var(--text-muted)" }}
                        >
                          <span style={{ fontSize: 10 }}>✨</span> EVA AI
                        </span>

                        <span
                          className="text-xs hidden cursor-pointer md:flex items-center gap-1 px-2 py-1 rounded-full"
                          style={{
                            background: "rgba(99,102,241,0.07)",
                            color: "var(--text-muted)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <span
                            onClick={() => setMessage("show me images of - ")}
                            className="flex gap-x-2 items-center border-r border-gray-500 pr-2"
                          >
                            <HiOutlineImage
                              className="text-sm"
                              style={{ color: "#6366f1" }}
                            />{" "}
                            images
                          </span>
                          ·
                          <span
                            onClick={() => setMessage("find videos of - ")}
                            className="flex gap-x-2 items-center"
                          >
                            <BsCameraVideo
                              className="text-sm"
                              style={{ color: "#e11d48" }}
                            />{" "}
                            videos
                          </span>
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          className="send-btn flex justify-center items-center"
                          onClick={handleSendMessage}
                          disabled={
                            (isProcessing && jobStatus === "processing") ||
                            isAIThinking
                          }
                          title="Send"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {inputError && (
                    <p className="text-xs mt-1.5 ml-1 text-red-500">
                      {inputError}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Workspace panel */}
            {jobStatus === "completed" && (
              <div
                ref={workspaceRef}
                className={`lg:flex-1 ${showMobileWorkspace ? "w-full flex" : "hidden lg:flex"} flex-col transition-all overflow-hidden duration-300`}
                style={{ background: isDark ? "#0A0F18" : "#F7F8FC" }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-between px-4 py-1.5"
                  style={{
                    background: "var(--sidebar-bg)",
                    borderColor: "var(--divider)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    {downloadUrl && (
                      <button
                        className="icon-btn"
                        onClick={handleDownload}
                        title="Download project"
                      >
                        <HiOutlineDownload className="text-base" />
                      </button>
                    )}
                    <button
                      className="icon-btn hidden sm:flex"
                      onClick={runDiagnostic}
                      title="File explorer"
                    >
                      <BsWrench className="text-sm" />
                    </button>
                    {jobId && jobStatus === "completed" && (
                      <SaveButton
                        onClick={handleManualSave}
                        saveStatus={saveStatus}
                        currentTheme={currentTheme}
                      />
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {workspaceView === "preview" && isFullscreen && (
                      <div className="view-toggle mr-1">
                        {[
                          ["desktop", <FiMonitor />, "100%"],
                          ["tablet", <FiTablet />, "768px"],
                          ["mobile", <FiSmartphone />, "375px"],
                        ].map(([v, icon, w]) => (
                          <button
                            key={v}
                            className={`view-toggle-btn flex items-center gap-1 ${deviceView === v ? "active" : ""}`}
                            onClick={() => {
                              setDeviceView(v);
                              setPreviewWidth(w);
                            }}
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                    )}
                    {showSandpack && Object.keys(sandpackFiles).length > 0 && (
                      <div className="view-toggle">
                        <button
                          className={`view-toggle-btn ${workspaceView === "preview" ? "active" : ""}`}
                          onClick={() => setWorkspaceView("preview")}
                        >
                          Preview
                        </button>
                        <button
                          className={`view-toggle-btn ${workspaceView === "code" ? "active" : ""}`}
                          onClick={() => setWorkspaceView("code")}
                        >
                          Code
                        </button>
                      </div>
                    )}
                    <button
                      className="icon-btn hidden sm:flex"
                      onClick={toggleFullscreen}
                      title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                    >
                      <HiOutlineArrowsExpand className="text-base" />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-hidden">
                  {!showSandpack || Object.keys(sandpackFiles).length === 0 ? (
                    <div className="h-full flex items-center justify-center">
                      {jobStatus === "processing" ? (
                        <ModernProcessingAnimation
                          pollingAttempts={pollingAttempts}
                        />
                      ) : jobStatus === "failed" ? (
                        <div className="text-center">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                            style={{
                              background: "rgba(239,68,68,0.08)",
                              border: "1px solid rgba(239,68,68,0.15)",
                            }}
                          >
                            <BsExclamationTriangle className="text-xl text-red-500" />
                          </div>
                          <p
                            className="text-sm"
                            style={{ color: "var(--text-muted)" }}
                          >
                            Generation failed
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <div
                            className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                            style={{
                              background: "rgba(99,102,241,0.08)",
                              border: "1px solid rgba(99,102,241,0.15)",
                            }}
                          >
                            <HiOutlineCode
                              className="text-2xl"
                              style={{ color: "#6366f1" }}
                            />
                          </div>
                          <p
                            className="text-sm"
                            style={{ color: "var(--text-muted)" }}
                          >
                            Your project will appear here
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="h-full overflow-hidden">
                      <SandpackProvider
                        key={jobId || "sp"}
                        template="react"
                        theme={newtheme}
                        files={sandpackFiles}
                        customSetup={{
                          dependencies: getDependencies(),
                          entry: sandpackFiles["/src/main.jsx"]
                            ? "/src/main.jsx"
                            : sandpackFiles["/src/index.jsx"]
                              ? "/src/index.jsx"
                              : "/src/index.js",
                        }}
                        options={{
                          externalResources: [
                            "https://cdn.tailwindcss.com",
                            "https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.css",
                            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
                            "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
                          ],
                          visibleFiles: Object.keys(sandpackFiles),
                          activeFile:
                            Object.keys(sandpackFiles).find(
                              (f) =>
                                f.includes("App.jsx") ||
                                f.includes("App.js") ||
                                f.includes("main.jsx"),
                            ) || Object.keys(sandpackFiles)[0],
                        }}
                      >
                        <SaveHandlerWrapper
                          jobId={jobId}
                          onSave={handleFileSave}
                          setSaveStatus={setSaveStatus}
                          onSaveFunctionReady={handleSaveFunctionReady}
                        />
                        <SandpackLayout className="h-full relative">
                          {workspaceView === "preview" && (
                            <div
                              className="flex flex-col h-full w-full"
                              style={{
                                background: isDark ? "#090D13" : "#F7F8FC",
                              }}
                            >
                              <div className="flex-1 overflow-hidden">
                                <div
                                  style={{
                                    width: previewWidth,
                                    height: "calc(100% - 44px)",
                                    margin: "0 auto",
                                    transition: "width 0.3s ease",
                                  }}
                                >
                                  <SandpackPreview
                                    showOpenInCodeSandbox={false}
                                    showRefreshButton={true}
                                    className="h-[78vh]"
                                  />
                                </div>
                              </div>
                              <div
                                className="border-t"
                                style={{
                                  borderColor: "var(--divider)",
                                  height: "22%",
                                }}
                              >
                                <div
                                  className="px-3 py-1.5 text-xs font-semibold tracking-wider border-b"
                                  style={{
                                    color: "var(--text-muted)",
                                    borderColor: "var(--divider)",
                                  }}
                                >
                                  CONSOLE
                                </div>
                                <div
                                  className="overflow-auto"
                                  style={{ height: "calc(100% - 30px)" }}
                                >
                                  <SandpackConsole />
                                </div>
                              </div>
                            </div>
                          )}
                          {workspaceView === "code" && (
                            <div
                              className={`flex flex-row w-full ${isFullscreen ? "h-[95vh]" : "h-[85vh]"}`}
                            >
                              <ResizablePanel
                                defaultSize={26}
                                minSize={18}
                                maxSize={45}
                                direction="right"
                                storageKey={EXPLORER_WIDTH_KEY}
                                theme={theme}
                              >
                                <div
                                  className="h-full flex flex-col border-r"
                                  style={{
                                    background: "var(--sidebar-bg)",
                                    borderColor: "var(--divider)",
                                  }}
                                >
                                  <div
                                    className={`flex items-center justify-between px-3 py-2.5 border-b ${currentTheme === "dark" ? "bg-[#151515]" : ""}`}
                                    style={{ borderColor: "var(--divider)" }}
                                  >
                                    <span
                                      className="section-label"
                                      style={{ padding: 0 }}
                                    >
                                      Files
                                    </span>
                                    <span
                                      className="text-xs px-2 py-0.5 rounded-md"
                                      style={{
                                        background: "var(--hover)",
                                        color: "var(--text-muted)",
                                      }}
                                    >
                                      {Object.keys(sandpackFiles).length}
                                    </span>
                                  </div>
                                  <div className="flex-1 overflow-auto">
                                    <SandpackFileExplorer
                                      className="text-xs"
                                      autoHiddenFiles={false}
                                      style={{
                                        height: "100%",
                                        overflow: "auto",
                                      }}
                                    />
                                  </div>
                                </div>
                              </ResizablePanel>
                              <div
                                className="flex-1 flex flex-col overflow-hidden"
                                style={{
                                  background: isDark ? "#0d1117" : "#FDFDFE",
                                }}
                              >
                                <div className="flex-1 overflow-hidden">
                                  <SandpackCodeEditor
                                    showTabs
                                    showLineNumbers
                                    wrapContent={false}
                                    closableTabs
                                    style={{ height: "100%", overflow: "auto" }}
                                  />
                                </div>
                              </div>
                            </div>
                          )}
                        </SandpackLayout>
                      </SandpackProvider>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

// ─── Sidebar Content ──────────────────────────────────────────────────────────
const SidebarContent = ({
  recentChats,
  chatGroups,
  allTemplates,
  onClose,
  isDark,
  hoveredChat,
  setHoveredChat,
  onNewChat,
  onProjectClick,
  onTemplateClick,
  currentTheme,
  toggleTheme,
  projectId,
  currentUser,
  showLogout,
  setShowLogout,
  handleLogout,
  getInitials,
  navigate,
}) => (
  <div className="h-full flex flex-col overflow-hidden">
    <div
      className="flex-shrink-0 flex items-center justify-between px-4 py-2.5 border-b"
      style={{ borderColor: "var(--divider)" }}
    >
      <Link to="/" className="flex items-center gap-2.5 min-w-0">
        <div
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
          //   style={{
          //     background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          //     boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
          //   }}
        >
          <img
            src="/Ai.svg"
            alt="EVA"
            className="w-7 h-7"
            // style={{ filter: "brightness(0) invert(1)", opacity: 0.95 }}
          />
        </div>
        <div>
          <h1
            className="text-sm font-semibold leading-none"
            style={{ color: "var(--text-primary)" }}
          >
            EVA AI
          </h1>
          <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
            AI Developer
          </p>
        </div>
      </Link>
      <div className="flex items-center gap-1">
        <button
          className="icon-btn"
          onClick={toggleTheme}
          title={isDark ? "Light mode" : "Dark mode"}
        >
          {isDark ? (
            <HiOutlineSun className="text-sm" />
          ) : (
            <HiOutlineMoon className="text-sm" />
          )}
        </button>
        {onClose && (
          <button className="lg:hidden icon-btn" onClick={onClose}>
            <HiOutlineX className="text-sm" />
          </button>
        )}
      </div>
    </div>

    <div className="flex-shrink-0 px-3 py-3">
      <button className="new-chat-btn" onClick={onNewChat}>
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
        >
          <HiOutlinePlus className="text-white text-sm" />
        </div>
        <span>New chat</span>
      </button>
    </div>

    <div
      className="flex-1 overflow-y-auto px-2 pb-4"
      style={{ scrollbarWidth: "none" }}
    >
      {Object.entries(chatGroups).map(([group, chats]) =>
        chats.length === 0 ? null : (
          <div key={group} className="mb-1">
            <p className="section-label">{group}</p>
            {chats.map((chat) => (
              <motion.div
                key={chat.id}
                whileHover={{ x: 1 }}
                className={`sidebar-item mb-0.5 ${String(projectId) === String(chat.id) ? "active" : ""}`}
                onMouseEnter={() => setHoveredChat && setHoveredChat(chat.id)}
                onMouseLeave={() => setHoveredChat && setHoveredChat(null)}
                onClick={() => onProjectClick && onProjectClick(chat.jobId)}
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: chat.bgColor || "var(--hover)" }}
                >
                  <span style={{ color: chat.color, fontSize: 12 }}>
                    {chat.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-1">
                    <p
                      className="text-xs font-medium truncate leading-snug"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {chat.title}
                    </p>
                  </div>
                  <p
                    className="text-xs truncate mt-0.5"
                    style={{ color: "var(--text-muted)", fontSize: 11 }}
                  >
                    {chat.preview}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ),
      )}
      {recentChats.length === 0 && (
        <div className="px-2 py-8 text-center">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center mx-auto mb-3"
            style={{ background: "var(--accent-soft)" }}
          >
            <BsStars style={{ color: "var(--accent)", fontSize: 16 }} />
          </div>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            No projects yet.
            <br />
            Start building something.
          </p>
        </div>
      )}
    </div>

    <div
      className={`h-16 ${isDark ? "bg-[#141920] border-gray-800" : "bg-white border-gray-200"} w-full border-t px-6`}
    >
      <div className="flex items-center justify-end w-full h-full">
        {currentUser && (
          <div className="relative w-full">
            <div
              className="flex items-center justify-between gap-3 min-w-[90%] cursor-pointer"
              onClick={() => setShowLogout(!showLogout)}
            >
              <div className="flex gap-x-3 items-center w-fit justify-center">
                <div className="w-8 h-8 rounded-full bg-[#815EF4] flex items-center justify-center text-white font-bold text-lg">
                  {getInitials(currentUser.name)}
                </div>
                <span className="text-sm font-medium text-gray-500">
                  {currentUser.name}
                </span>
              </div>
              <svg
                onClick={handleLogout}
                className="w-5 h-5 text-red-400 hover:text-red-600 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
        )}
        {!currentUser && (
          <div
            onClick={() => navigate("/login")}
            className="flex cursor-pointer gap-x-3 mx-auto items-center justify-center text-gray-500"
          >
            <p className="text-sm">Login</p>
            <button
              onClick={() => navigate("/login")}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#6F63F3]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ─── Collapsed Sidebar ────────────────────────────────────────────────────────
const CollapsedSidebar = ({
  isDark,
  onNewChat,
  recentChats,
  onProjectClick,
  toggleTheme,
  currentTheme,
  currentUser,
  showLogout,
  setShowLogout,
  handleLogout,
  getInitials,
  navigate,
}) => (
  <div className="h-full relative flex flex-col items-center py-3 gap-2">
    <Link to="/">
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center mb-1"
        style={{ background: "linear-gradient(135deg,#6366f1,#8b5cf6)" }}
      >
        <img src="/Ai.svg" alt="EVA" className="w-5 h-5" />
      </div>
    </Link>
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center border"
      style={{
        borderColor: "var(--border)",
        color: "var(--text-secondary)",
        background: "var(--hover)",
      }}
      onClick={onNewChat}
      title="New chat"
    >
      <HiOutlinePlus className="text-sm" />
    </motion.button>

    <div className="flex flex-col gap-1.5 mt-2">
      {recentChats.slice(0, 6).map((chat) => (
        <motion.button
          key={chat.id}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-9 h-9 rounded-xl flex items-center justify-center relative"
          style={{
            background: chat.bgColor || "var(--hover)",
            border: "1px solid var(--border)",
          }}
          onClick={() => onProjectClick && onProjectClick(chat.jobId)}
          title={chat.title}
        >
          <span style={{ color: chat.color, fontSize: 13 }}>{chat.icon}</span>
          {chat.status === "processing" && (
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          )}
          {chat.status === "failed" && (
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-400" />
          )}
        </motion.button>
      ))}
    </div>
    <div
      className={`h-16 absolute bottom-0 ${isDark ? "bg-[#141920] border-gray-800" : "bg-white border-gray-200"} w-full border-t px-6`}
    >
      <div className="flex items-center justify-center w-full h-full">
        {currentUser && (
          <div className="relative w-full">
            <div
              className="flex items-center justify-center gap-3 min-w-[90%] cursor-pointer"
              onClick={() => setShowLogout(!showLogout)}
            >
              <svg
                onClick={handleLogout}
                className="w-5 h-5 text-red-400 ml-3 hover:text-red-600 cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
            </div>
          </div>
        )}
        {!currentUser && (
          <div
            onClick={() => navigate("/login")}
            className="flex cursor-pointer gap-x-3 mx-auto items-center justify-center text-gray-500"
          >
            <button
              onClick={() => navigate("/login")}
              className="w-9 h-9 rounded-full flex items-center justify-center text-[#6F63F3]"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013 3v1"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
);

export default Home;

