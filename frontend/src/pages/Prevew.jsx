import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import { FiMonitor, FiTablet, FiSmartphone, FiArrowLeft } from "react-icons/fi";
import { motion } from "framer-motion";

const STORAGE_KEY = "ai_projects";

const Prevew = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [deviceView, setDeviceView] = useState("desktop");
  const [previewWidth, setPreviewWidth] = useState("100%");
  const [sandpackFiles, setSandpackFiles] = useState({});

  // Load project from localStorage
  useEffect(() => {
    if (!id) {
      setError("No project ID provided");
      setLoading(false);
      return;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setError("No projects found");
        setLoading(false);
        return;
      }

      const projects = JSON.parse(stored);
      const foundProject = projects.find((p) => p.id === id);

      if (!foundProject) {
        setError("Project not found");
        setLoading(false);
        return;
      }

      if (!foundProject.files || foundProject.files.length === 0) {
        setError("Project has no files");
        setLoading(false);
        return;
      }

      setProject(foundProject);
      
      // Convert files to Sandpack format
      const sandpackFilesObj = convertToSandpackFiles(foundProject.files);
      setSandpackFiles(sandpackFilesObj);
      setLoading(false);
    } catch (err) {
      console.error("Error loading project:", err);
      setError("Failed to load project");
      setLoading(false);
    }
  }, [id]);

  // Clean code content from markdown code blocks
  const cleanCodeContent = (content) => {
    const codeBlockRegex = /```[a-z]*\n([\s\S]*?)```/g;
    const match = codeBlockRegex.exec(content);
    
    let cleaned = match ? match[1].trim() : content;
    
    cleaned = cleaned
      .replace(/@tailwind base;/g, "")
      .replace(/@tailwind components;/g, "")
      .replace(/@tailwind utilities;/g, "");
    
    return cleaned;
  };

  // Convert API files to Sandpack format
  const convertToSandpackFiles = (files) => {
    const sandpackFilesObj = {};

    files.forEach((file) => {
      if (file.filename.startsWith("backend/")) {
        return;
      }

      let filename = file.filename;
      if (filename.startsWith("frontend/")) {
        filename = filename.replace("frontend/", "");
      }

      if (
        filename.startsWith("src/") ||
        filename === "index.html" ||
        filename === "package.json" ||
        filename === "vite.config.js" ||
        filename === "postcss.config.js" ||
        filename === "tailwind.config.js"
      ) {
        let cleanContent = cleanCodeContent(file.content);
        
        let sandpackPath = filename;
        if (sandpackPath === "index.html") {
          sandpackPath = "/index.html";
        } else if (!sandpackPath.startsWith("/")) {
          sandpackPath = "/" + sandpackPath;
        }

        sandpackFilesObj[sandpackPath] = {
          code: cleanContent,
        };
      }
    });

    if (!sandpackFilesObj["/src/index.js"] && 
        !sandpackFilesObj["/src/index.jsx"] && 
        !sandpackFilesObj["/src/main.jsx"]) {
      sandpackFilesObj["/src/main.jsx"] = {
        code: `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)`,
      };
    }

    if (!sandpackFilesObj["/src/App.jsx"] && !sandpackFilesObj["/src/App.js"]) {
      sandpackFilesObj["/src/App.jsx"] = {
        code: `import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to Your App</h1>
        <p className="text-gray-300">Built with AI</p>
      </div>
    </div>
  )
}`,
      };
    }

    if (!sandpackFilesObj["/src/index.css"]) {
      sandpackFilesObj["/src/index.css"] = {
        code: `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply antialiased;
  }
}`,
      };
    }

    if (!sandpackFilesObj["/tailwind.config.js"]) {
      sandpackFilesObj["/tailwind.config.js"] = {
        code: `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,
      };
    }

    if (!sandpackFilesObj["/postcss.config.js"]) {
      sandpackFilesObj["/postcss.config.js"] = {
        code: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
      };
    }

    return sandpackFilesObj;
  };

  const getDependencies = () => {
    const packageJsonFile = project?.files?.find(
      (f) =>
        f.filename === "package.json" || f.filename === "frontend/package.json",
    );
    let dependencies = {};

    if (packageJsonFile) {
      try {
        const cleanContent = cleanCodeContent(packageJsonFile.content);
        const packageJson = JSON.parse(cleanContent);
        dependencies = packageJson.dependencies || {};
      } catch (e) {
        console.error("Error parsing package.json", e);
      }
    }

    return {
      ...dependencies,
      react: dependencies.react || "^18.2.0",
      "react-dom": dependencies["react-dom"] || "^18.2.0",
      "react-router-dom": dependencies["react-router-dom"] || "^6.3.0",
      "framer-motion": "^10.16.4",
      "gsap": "^3.12.5",
      "axios": "^1.6.7",
      "react-hook-form": "^7.50.0",
      "react-icons": "^5.0.1",
      "lucide-react": "^0.376.0",
      "chart.js": "^4.4.1",
      "react-chartjs-2": "^5.2.0",
      "recharts": "^2.10.4",
      "dayjs": "^1.11.10",
      "lodash": "^4.17.21",
      "clsx": "^2.1.0",
      "@headlessui/react": "^1.7.18",
      "@heroicons/react": "^2.1.1",
      "react-hot-toast": "^2.4.1",
      "zustand": "^4.5.2",
      "@tanstack/react-query": "^5.28.0",
      "@dnd-kit/core": "^6.1.0",
      "@tanstack/react-table": "^8.11.7",
      "react-markdown": "^9.0.1",
      "react-syntax-highlighter": "^15.5.0",
      "react-dropzone": "^14.2.3",
      "leaflet": "^1.9.4",
      "react-leaflet": "^4.2.1",
      "react-modal": "^3.16.1",
      "react-loading-skeleton": "^3.3.1"
    };
  };

  const getTemplate = () => {
    if (
      sandpackFiles["/src/App.jsx"] ||
      sandpackFiles["/src/App.js"] ||
      sandpackFiles["/src/main.jsx"]
    ) {
      return "react";
    }
    return "react";
  };

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center max-w-md px-4">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-500/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">Error Loading Project</h2>
          <p className="text-gray-400 mb-4">{error}</p>
          <button
            onClick={() => navigate("/app")}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  if (!sandpackFiles || Object.keys(sandpackFiles).length === 0) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <p className="text-gray-400">No files to preview</p>
          <button
            onClick={() => navigate("/app")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full reletive  overflow-hidden bg-gray-900">
      {/* Header with Navigation and Responsive Controls */}
      <div className="absolute w-fit   z-50 top-0 right-0  px-4 py-1 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <button
            onClick={() => navigate(-1)}
            className="p-2 rounded-lg hover:bg-gray-700 transition-colors text-gray-700 hover:text-white cursor-pointer"
            title="Back to Dashboard"
          >
            <FiArrowLeft className="text-lg" />
          </button>
         */}
         
        </div>

        {/* Responsive View Controls */}
        <div className="flex items-center gap-1 bg-gray-900 rounded-full border border-zinc-500 p-1 cursor-pointer">
          <button
            onClick={() => {
              setDeviceView("desktop");
              setPreviewWidth("100%");
            }}
            className={`p-2 rounded-full cursor-pointer transition-all ${
              deviceView === "desktop"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
            title="Desktop View"
          >
            <FiMonitor className="text-sm" />
          </button>
          <button
            onClick={() => {
              setDeviceView("tablet");
              setPreviewWidth("768px");
            }}
            className={`p-2 rounded-full transition-all ${
              deviceView === "tablet"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
            title="Tablet View"
          >
            <FiTablet className="text-sm" />
          </button>
          <button
            onClick={() => {
              setDeviceView("mobile");
              setPreviewWidth("375px");
            }}
            className={`p-2 rounded-full transition-all ${
              deviceView === "mobile"
                ? "bg-blue-600 text-white"
                : "text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
            title="Mobile View"
          >
            <FiSmartphone className="text-sm" />
          </button>
        </div>
      </div>

      {/* Sandpack Preview */}
      <div className="h-[calc(100%-56px)] w-full">
        <SandpackProvider
          template={getTemplate()}
          theme="dark"
          files={sandpackFiles}
          customSetup={{
            dependencies: getDependencies(),
            entry: sandpackFiles["/src/index.js"]
              ? "/src/index.js"
              : sandpackFiles["/src/index.jsx"]
                ? "/src/index.jsx"
                : sandpackFiles["/src/main.jsx"]
                  ? "/src/main.jsx"
                  : "/src/index.js",
          }}
          options={{
            externalResources: [
              "https://cdn.tailwindcss.com",
              "https://cdn.jsdelivr.net/npm/daisyui@latest/dist/full.css",
              "https://unpkg.com/lucide@latest",
              "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css",
              "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
              "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
              "https://unpkg.com/axios/dist/axios.min.js",
              "https://unpkg.com/dayjs@1.11.10/dayjs.min.js"
            ],
            visibleFiles: Object.keys(sandpackFiles),
          }}
        >
          <SandpackLayout className="h-screen">
            <div className="flex flex-col h-full w-full">
              <div className="flex-1 min-h-0 h-screen  overflow-auto bg-gray-900">
                <div
                  style={{
                    width: previewWidth,
                    height: "100%",
                    margin: "0 auto",
                    transition: "width 0.3s ease-in-out",
                  }}
                  className="bg-white"
                >
                  <SandpackPreview
                    showOpenInCodeSandbox={false}
                    showRefreshButton={true}
                    className="h-full"
                  />
                </div>
              </div>
            </div>
          </SandpackLayout>
        </SandpackProvider>
      </div>
    </div>
  );
};

export default Prevew;