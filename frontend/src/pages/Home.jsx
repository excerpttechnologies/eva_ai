

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { useSearchParams } from 'react-router-dom';
// import axios from 'axios';
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackCodeEditor,
//   SandpackPreview,
//   SandpackConsole,
//   SandpackFileExplorer
// } from "@codesandbox/sandpack-react";
// import { 
//   HiOutlineChat, 
//   HiOutlinePlus, 
//   HiOutlineX,
//   HiOutlinePaperAirplane,
//   HiOutlineShoppingCart,
//   HiOutlineUserGroup,
//   HiOutlineVideoCamera,
//   HiOutlinePhotograph,
//   HiOutlineLocationMarker,
//   HiOutlineMap,
//   HiOutlineCode,
//   HiOutlineDownload,
//   HiOutlineFolder,
//   HiOutlineCheckCircle,
//   HiOutlineRefresh,
//   HiOutlineFolderOpen,
//   HiOutlineChevronLeft,
//   HiOutlineChevronRight,
//   HiOutlineExclamation,
//   HiOutlineMenu,
//   HiOutlineEye,
//   HiOutlineCog,
//   HiOutlineArrowsExpand
// } from 'react-icons/hi';
// import { 
//   BsRobot, 
//   BsHourglassSplit,
//   BsExclamationTriangle,
//   BsBug,
//   BsWrench,
//   BsCodeSquare,
//   BsEye
// } from 'react-icons/bs';

// const API_BASE_URL = 'http://127.0.0.1:8000';

// // Storage key for projects
// const STORAGE_KEY = 'ai_projects';

// const Home = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredChat, setHoveredChat] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [showHelp, setShowHelp] = useState(true);
//   const [isTyping, setIsTyping] = useState(false);
  
//   // API States
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [jobStatus, setJobStatus] = useState(null);
//   const [jobId, setJobId] = useState(null);
//   const [projectFiles, setProjectFiles] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState(null);
//   const [recentProjects, setRecentProjects] = useState([]);
//   const [pollingAttempts, setPollingAttempts] = useState(0);
//   const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
//   const [warningDismissed, setWarningDismissed] = useState(false);
//   const [inputError, setInputError] = useState('');
//   const [isPollingActive, setIsPollingActive] = useState(false);
//   const [jobErrorMessage, setJobErrorMessage] = useState('');
//   const [jobErrorDetails, setJobErrorDetails] = useState(null);
//   const [initialLoadDone, setInitialLoadDone] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showDiagnostic, setShowDiagnostic] = useState(false);
//   const [diagnosticData, setDiagnosticData] = useState(null);
  
//   // Sandpack Files
//   const [sandpackFiles, setSandpackFiles] = useState({});
//   const [showSandpack, setShowSandpack] = useState(false);
  
//   // Sidebar State
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
//   // View Toggle State (preview/code) - Default to preview
//   const [workspaceView, setWorkspaceView] = useState('preview'); // 'preview', 'code'
  
//   // Fullscreen State for workspace
//   const [isFullscreen, setIsFullscreen] = useState(false);
  
//   const messagesEndRef = useRef(null);
//   const messagesContainerRef = useRef(null);
//   const inputRef = useRef(null);
//   const workspaceRef = useRef(null);

//   // Refs for polling management
//   const pollingIntervalRef = useRef(null);
//   const currentJobIdRef = useRef(null);
//   const isPollingRef = useRef(false);
//   const abortControllerRef = useRef(null);

//   const theme = {
//     bg: '#0B0F0E',
//     sidebar: '#111413',
//     card: '#151918',
//     border: '#1F2A27',
//     green: '#22C55E',
//     greenSoft: '#16A34A',
//     textPrimary: '#E5E7EB',
//     textSecondary: '#9CA3AF',
//     inputBg: '#1A1F1D',
//     yellow: '#EAB308',
//     orange: '#F97316',
//     red: '#EF4444',
//   };

//   // All 8 templates available
//   const allTemplates = [
//     { name: "Education ERP", icon: <HiOutlineCode />, bg: theme.green },
//     { name: "E-commerce", icon: <HiOutlineShoppingCart />, bg: theme.green },
//     { name: "Social Media", icon: <HiOutlineUserGroup />, bg: theme.green },
//     { name: "Chat App", icon: <HiOutlineChat />, bg: theme.green },
//     { name: "Video App", icon: <HiOutlineVideoCamera />, bg: theme.green },
//     { name: "Music App", icon: <HiOutlinePhotograph />, bg: theme.green },
//     { name: "Food App", icon: <HiOutlineLocationMarker />, bg: theme.green },
//     { name: "Travel App", icon: <HiOutlineMap />, bg: theme.green },
//   ];

//   // Only show 4 templates in sidebar
//   const sidebarTemplates = allTemplates.slice(0, 4);

//   // Clean code content from markdown code blocks
// const cleanCodeContent = (content) => {
//   const codeBlockRegex = /```[a-z]*\n([\s\S]*?)```/g;
//   const match = codeBlockRegex.exec(content);

//   let cleaned = match ? match[1].trim() : content;

//   // ✅ Remove Tailwind build directives (for Sandpack preview)
//   cleaned = cleaned
//     .replace(/@tailwind base;/g, "")
//     .replace(/@tailwind components;/g, "")
//     .replace(/@tailwind utilities;/g, "");

//   return cleaned;
// };

//   // Convert API files to Sandpack format with Tailwind support
//   const convertToSandpackFiles = (files) => {
//     const sandpackFiles = {};
    
//     files.forEach(file => {
//       // Skip backend files for preview
//       if (file.filename.startsWith('backend/')) {
//         return;
//       }
      
//       // Handle frontend files
//       let filename = file.filename;
//       if (filename.startsWith('frontend/')) {
//         filename = filename.replace('frontend/', '');
//       }
      
//       // Only include relevant frontend files
//       if (filename.startsWith('src/') || 
//           filename === 'index.html' || 
//           filename === 'package.json' ||
//           filename === 'vite.config.js' ||
//           filename === 'postcss.config.js' ||
//           filename === 'tailwind.config.js') {
        
//         // Clean the content from markdown code blocks
//         let cleanContent = cleanCodeContent(file.content);
        
//         // Map the file path correctly
//         let sandpackPath = filename;
//         if (sandpackPath === 'index.html') {
//           sandpackPath = '/index.html';
//         } else if (!sandpackPath.startsWith('/')) {
//           sandpackPath = '/' + sandpackPath;
//         }
        
//         sandpackFiles[sandpackPath] = {
//           code: cleanContent,
//         };
//       }
//     });

//     // Ensure there's an entry file
//     if (!sandpackFiles['/src/index.js'] && !sandpackFiles['/src/index.jsx'] && !sandpackFiles['/src/main.jsx']) {
//       // Create a default main.jsx with Tailwind support if none exists
//       sandpackFiles['/src/main.jsx'] = {
//         code: `import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )`
//       };
//     }

//     // Ensure App.jsx exists
//     if (!sandpackFiles['/src/App.jsx'] && !sandpackFiles['/src/App.js']) {
//       sandpackFiles['/src/App.jsx'] = {
//         code: `import React from 'react'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <h1 className="text-3xl font-bold text-gray-800">Welcome to Your App</h1>
//     </div>
//   )
// }`
//       };
//     }

//     // Ensure index.css exists with Tailwind directives
//     if (!sandpackFiles['/src/index.css']) {
//       sandpackFiles['/src/index.css'] = {
//         code: `@tailwind base;
// @tailwind components;
// @tailwind utilities;`
//       };
//     }

//     // Ensure tailwind.config.js exists
//     if (!sandpackFiles['/tailwind.config.js']) {
//       sandpackFiles['/tailwind.config.js'] = {
//         code: `/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }`
//       };
//     }

//     // Ensure postcss.config.js exists
//     if (!sandpackFiles['/postcss.config.js']) {
//       sandpackFiles['/postcss.config.js'] = {
//         code: `export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }`
//       };
//     }

//     console.log('Converted Sandpack files:', Object.keys(sandpackFiles));
//     return sandpackFiles;
//   };

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, jobId, projectFiles]);

//   // Auto-show Sandpack when files are ready
//   useEffect(() => {
//     if (jobStatus === 'completed' && projectFiles && Object.keys(sandpackFiles).length > 0) {
//       console.log('Job completed, showing Sandpack with', Object.keys(sandpackFiles).length, 'files');
//       setShowSandpack(true);
//     }
//   }, [jobStatus, projectFiles, sandpackFiles]);

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       if (messagesEndRef.current) {
//         messagesEndRef.current.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'end' 
//         });
//       }
//     }, 100);
//   };

//   // Load recent projects from localStorage on mount
//   useEffect(() => {
//     loadRecentProjects();
//   }, []);

//   // Handle URL parameter on mount and when it changes
//   useEffect(() => {
//     const projectId = searchParams.get('project');
//     console.log('URL project parameter:', projectId, 'Initial load done:', initialLoadDone);
    
//     if (projectId && !isLoading) {
//       // Clear current state before loading new project
//       setMessages([]);
//       setShowHelp(false);
//       setProjectFiles(null);
//       setSandpackFiles({});
//       setShowSandpack(false);
//       setJobStatus(null);
//       setJobErrorMessage('');
//       setJobErrorDetails(null);
      
//       // Load the project
//       setTimeout(() => {
//         loadProject(projectId);
//       }, 100);
//     } else if (!projectId && !initialLoadDone) {
//       setShowHelp(true);
//       setInitialLoadDone(true);
//     }
//   }, [searchParams]);

//   // Cleanup polling on unmount
//   useEffect(() => {
//     return () => {
//       stopPolling();
//     };
//   }, []);

//   // Handle fullscreen toggle
//   const toggleFullscreen = () => {
//     if (!isFullscreen) {
//       if (workspaceRef.current.requestFullscreen) {
//         workspaceRef.current.requestFullscreen();
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//     setIsFullscreen(!isFullscreen);
//   };

//   // Listen for fullscreen change events
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   }, []);

//   // Diagnostic function to check localStorage
//   const runDiagnostic = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       const data = {
//         exists: !!stored,
//         raw: stored,
//         parsed: null,
//         currentProject: jobId,
//         projectData: null
//       };
      
//       if (stored) {
//         try {
//           data.parsed = JSON.parse(stored);
//           if (jobId) {
//             data.projectData = data.parsed.find(p => p.id === jobId);
//           }
//         } catch (e) {
//           data.parseError = e.message;
//         }
//       }
      
//       setDiagnosticData(data);
//       setShowDiagnostic(true);
//       console.log('Diagnostic data:', data);
//     } catch (e) {
//       console.error('Diagnostic error:', e);
//     }
//   };

//   // Fix localStorage data
//   const fixLocalStorage = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
        
//         // Fix any projects with missing fields
//         const fixed = projects.map(p => {
//           if (!p.messages) p.messages = [];
//           if (!p.error && p.status === 'failed') {
//             p.error = 'Unknown error';
//             p.errorDetails = { message: 'Unknown error' };
//           }
//           if (!p.preview) {
//             p.preview = p.status === 'failed' ? 'Generation failed' : 
//                        p.status === 'processing' ? 'Processing...' : 
//                        'No preview';
//           }
//           return p;
//         });
        
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(fixed));
//         setRecentProjects(fixed);
//         console.log('LocalStorage fixed');
        
//         // Reload current project if any
//         if (jobId) {
//           loadProject(jobId);
//         }
//       }
//     } catch (e) {
//       console.error('Fix error:', e);
//     }
//   };

//   const loadRecentProjects = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         console.log('Loaded recent projects:', projects);
//         setRecentProjects(projects);
//       }
//     } catch (e) {
//       console.error('Error parsing stored projects', e);
//     }
//   };

//   // Save project to localStorage
//   const saveProjectToStorage = (id, files, conversation) => {
//     try {
//       const packageJson = files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//       let projectName = 'Project';
//       if (packageJson) {
//         try {
//           const parsed = JSON.parse(packageJson.content);
//           projectName = parsed.name || projectName;
//         } catch (e) {
//           console.error('Error parsing package.json', e);
//         }
//       }

//       const userPrompt = conversation.find(m => m.sender === 'user')?.text || 'Project generation';

//       const projectInfo = {
//         id: id,
//         title: projectName,
//         timestamp: new Date().toLocaleString(),
//         preview: `${files.length} files generated`,
//         files: files,
//         messages: conversation,
//         prompt: userPrompt,
//         status: 'completed',
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error('Error parsing stored projects', e);
//         }
//       }
      
//       const updated = [projectInfo, ...existingProjects.filter(p => p.id !== id)].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);
      
//       return updated;
//     } catch (error) {
//       console.error('Error saving project:', error);
//       return [];
//     }
//   };

//   // Save pending job to localStorage
//   const savePendingJob = (id, prompt) => {
//     try {
//       const pendingProject = {
//         id: id,
//         title: 'Processing...',
//         timestamp: new Date().toLocaleString(),
//         preview: `Building: "${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}"`,
//         files: null,
//         messages: [],
//         prompt: prompt,
//         status: 'processing',
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error('Error parsing stored projects', e);
//         }
//       }
      
//       const updated = [pendingProject, ...existingProjects.filter(p => p.id !== id)].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);
      
//       return updated;
//     } catch (error) {
//       console.error('Error saving pending job:', error);
//       return [];
//     }
//   };

//   // Update project status in localStorage
//   const updateProjectStatus = (id, status, files = null, messages = [], errorDetails = null) => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error('Error parsing stored projects', e);
//         }
//       }
      
//       const updated = existingProjects.map(project => {
//         if (project.id === id) {
//           if (status === 'completed' && files) {
//             const packageJson = files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//             let projectName = 'Project';
//             if (packageJson) {
//               try {
//                 const parsed = JSON.parse(packageJson.content);
//                 projectName = parsed.name || projectName;
//               } catch (e) {
//                 console.error('Error parsing package.json', e);
//               }
//             }
            
//             return {
//               ...project,
//               title: projectName,
//               status: 'completed',
//               files: files,
//               messages: messages,
//               preview: `${files.length} files generated`,
//               error: null,
//               errorDetails: null
//             };
//           } else if (status === 'failed') {
//             return {
//               ...project,
//               status: 'failed',
//               title: 'Failed Project',
//               preview: 'Generation failed',
//               files: null,
//               messages: messages,
//               error: errorDetails?.message || 'Unknown error',
//               errorDetails: errorDetails
//             };
//           } else {
//             return {
//               ...project,
//               status: status,
//               messages: messages
//             };
//           }
//         }
//         return project;
//       });
      
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);
//       console.log('Updated project status:', updated.find(p => p.id === id));
      
//       return updated;
//     } catch (error) {
//       console.error('Error updating project status:', error);
//       return [];
//     }
//   };

//   // Get project by ID from localStorage
//   const getProjectById = (id) => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         const project = projects.find(p => p.id === id);
//         console.log('Found project in localStorage:', project);
//         return project;
//       }
//     } catch (e) {
//       console.error('Error parsing stored projects', e);
//     }
//     return null;
//   };

//   // Stop polling function
//   const stopPolling = () => {
//     if (pollingIntervalRef.current) {
//       clearInterval(pollingIntervalRef.current);
//       pollingIntervalRef.current = null;
//     }

//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//       abortControllerRef.current = null;
//     }

//     isPollingRef.current = false;
//     setIsPollingActive(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//   };

//   // Check if response is for current job
//   const isResponseForCurrentJob = (id) => {
//     return id === currentJobIdRef.current;
//   };

//   // Poll status function
//   const pollStatus = async (id) => {
//     if (!isPollingRef.current || !isResponseForCurrentJob(id)) {
//       return;
//     }
    
//     try {
//       setPollingAttempts(prev => prev + 1);
      
//       const response = await axios.get(`${API_BASE_URL}/status/${id}`, {
//         timeout: 10000,
//         signal: abortControllerRef.current?.signal
//       });
      
//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }
      
//       if (response.data.status === 'completed') {
//         stopPolling();
        
//         const resultResponse = await axios.get(`${API_BASE_URL}/result/${id}`, {
//           signal: abortControllerRef.current?.signal
//         });
        
//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }
        
//         console.log('Received files:', resultResponse.data.files.length);
//         setProjectFiles(resultResponse.data.files);
//         setDownloadUrl(`${API_BASE_URL}/download/${id}`);
        
//         // Convert to Sandpack format
//         const sandpackFiles = convertToSandpackFiles(resultResponse.data.files);
//         console.log('Converted Sandpack files:', Object.keys(sandpackFiles));
//         setSandpackFiles(sandpackFiles);
//         setShowSandpack(true);
        
//         setJobStatus('completed');
//         setIsProcessing(false);
        
//         const packageJson = resultResponse.data.files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//         let projectName = 'Project';
//         if (packageJson) {
//           try {
//             const parsed = JSON.parse(packageJson.content);
//             projectName = parsed.name || projectName;
//           } catch (e) {
//             console.error('Error parsing package.json', e);
//           }
//         }
        
//         const successMessage = {
//           id: Date.now(),
//           text: `✅ **Project Generated Successfully!**
          
// I've created a complete ${projectName} project with ${resultResponse.data.files.length} files.

// **Quick Stats:**
// - Total Files: ${resultResponse.data.files.length}
// - Frontend Files: ${resultResponse.data.files.filter(f => f.filename.startsWith('frontend/')).length}
// - Backend Files: ${resultResponse.data.files.filter(f => f.filename.startsWith('backend/')).length}

// You can now browse, edit, and preview the code below!`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         const allMessages = [...messages, successMessage];
//         setMessages(allMessages);
//         saveProjectToStorage(id, resultResponse.data.files, allMessages);
        
//         scrollToBottom();
        
//       } else if (response.data.status === 'failed') {
//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }
        
//         stopPolling();
//         setJobStatus('failed');
//         setIsProcessing(false);
        
//         // Extract error message from response
//         const errorMsg = response.data.error?.message || 'Unknown error occurred during project generation';
//         const errorDetails = response.data.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);
        
//         // Add detailed error message to chat
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Generation Failed**

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Possible reasons:**
// - The AI couldn't generate valid code for your request
// - The request contained invalid syntax or requirements
// - There was a server-side processing error
// - The prompt was too complex or ambiguous

// **Suggestions:**
// - Try a simpler and more specific request
// - Check for any syntax errors in your prompt
// - Try one of the template projects first
// - Make sure your request includes specific features

// Click "New Project" to try again.`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);
//         updateProjectStatus(id, 'failed', null, allMessages, errorDetails);
        
//         scrollToBottom();
        
//       } else if (response.data.status === 'processing' || response.data.status === 'running') {
//         setJobStatus('processing');
//         updateProjectStatus(id, 'processing');
//       }
      
//       if (isResponseForCurrentJob(id) && pollingAttempts >= 60 && !showTimeoutWarning && !warningDismissed) {
//         setShowTimeoutWarning(true);
//       }
      
//     } catch (error) {
//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }
      
//       if (axios.isCancel(error) || error.name === 'AbortError' || error.code === 'ERR_CANCELED') {
//         return;
//       }
      
//       console.error('Status check error:', error);
      
//       // Handle network errors
//       if (pollingAttempts > 10) {
//         stopPolling();
//         setJobStatus('failed');
//         setIsProcessing(false);
//         setJobErrorMessage(error.message);
//         setJobErrorDetails({ type: 'network_error', message: error.message });
        
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Connection Error**

// Unable to reach the server. Please check:

// - The backend server is running at ${API_BASE_URL}
// - Your internet connection
// - No firewall blocking the connection

// **Error details:** ${error.message}

// **Technical Details:**
// \`\`\`
// Type: Network Error
// Code: ${error.code || 'N/A'}
// Status: ${error.response?.status || 'N/A'}
// \`\`\`

// **Solutions:**
// 1. Start the backend server with: \`uvicorn main:app --reload\`
// 2. Check if the server is running on port 8000
// 3. Disable any firewall temporarily
// 4. Try refreshing the page`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);
//         updateProjectStatus(id, 'failed', null, allMessages, { type: 'network_error', message: error.message });
        
//         scrollToBottom();
//       }
//     }
//   };

//   // Start continuous polling
//   const startPolling = (id) => {
//     stopPolling();
    
//     currentJobIdRef.current = id;
//     setJobId(id);
//     setJobStatus('processing');
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
    
//     isPollingRef.current = true;
//     setIsPollingActive(true);
    
//     abortControllerRef.current = new AbortController();
    
//     pollStatus(id);
    
//     pollingIntervalRef.current = setInterval(() => {
//       if (isPollingRef.current && isResponseForCurrentJob(id)) {
//         pollStatus(id);
//       }
//     }, 2000);
//   };

//   // Load project from localStorage or API
//   const loadProject = async (id) => {
//     // Prevent multiple loads
//     if (!id || id === 'null' || id === 'undefined') {
//       console.log('Invalid project ID');
//       setShowHelp(true);
//       setIsLoading(false);
//       setIsProcessing(false);
//       return;
//     }

//     console.log('Loading project:', id);
//     setIsLoading(true);
//     stopPolling();
    
//     setJobId(id);
//     setIsProcessing(false);
//     setShowHelp(false);
//     setJobStatus('loading');
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
//     setShowSandpack(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     currentJobIdRef.current = id;
    
//     try {
//       // FIRST: Check API for current status
//       console.log('Checking API for project status...');
//       let apiStatus = null;
//       let apiError = null;
      
//       try {
//         const statusResponse = await axios.get(`${API_BASE_URL}/status/${id}`);
//         apiStatus = statusResponse.data;
//         console.log('API status response:', apiStatus);
//       } catch (apiErr) {
//         console.log('API not available, will use localStorage only');
//         apiError = apiErr;
//       }
      
//       // SECOND: Check localStorage
//       const project = getProjectById(id);
//       console.log('Project from localStorage:', project);
      
//       // PRIORITY 1: If API says completed, use API data
//       if (apiStatus && apiStatus.status === 'completed') {
//         console.log('Project is completed according to API');
//         try {
//           const resultResponse = await axios.get(`${API_BASE_URL}/result/${id}`);
//           console.log('Received files from API:', resultResponse.data.files.length);
//           setProjectFiles(resultResponse.data.files);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);
          
//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(resultResponse.data.files);
//           console.log('Converted Sandpack files:', Object.keys(sandpackFiles));
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);
          
//           setJobStatus('completed');
          
//           const packageJson = resultResponse.data.files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//           let projectName = 'Project';
//           if (packageJson) {
//             try {
//               const parsed = JSON.parse(packageJson.content);
//               projectName = parsed.name || projectName;
//             } catch (e) {
//               console.error('Error parsing package.json', e);
//             }
//           }
          
//           const successMessage = {
//             id: Date.now(),
//             text: `✅ **Project Loaded Successfully!**
            
// Loaded ${projectName} with ${resultResponse.data.files.length} files.

// You can now browse, edit, and preview the code below!`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages([successMessage]);
//           saveProjectToStorage(id, resultResponse.data.files, [successMessage]);
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } catch (resultErr) {
//           console.error('Error fetching result:', resultErr);
//           // Fall through to other options
//         }
//       }
      
//       // PRIORITY 2: If API says processing
//       if (apiStatus && (apiStatus.status === 'processing' || apiStatus.status === 'running')) {
//         console.log('Project is processing according to API');
//         setJobStatus('processing');
//         setIsProcessing(true);
//         setIsLoading(false);
        
//         // Use messages from localStorage if available
//         if (project && project.messages) {
//           setMessages(project.messages);
//         } else {
//           const processingMessage = {
//             id: Date.now(),
//             text: `🔄 **Project is still processing...**

// Job ID: ${id}

// The project is still being built. This may take a few moments.

// I'll update you when it's ready!`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
//           setMessages([processingMessage]);
//         }
        
//         startPolling(id);
//         return;
//       }
      
//       // PRIORITY 3: If API says failed
//       if (apiStatus && apiStatus.status === 'failed') {
//         console.log('Project failed according to API');
//         setJobStatus('failed');
        
//         const errorMsg = apiStatus.error?.message || 'Project generation failed';
//         const errorDetails = apiStatus.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);
        
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Failed**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The request might have contained invalid syntax
// - There was a server-side processing error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         setMessages([errorMessage]);
        
//         // Update localStorage with failed status
//         if (project) {
//           updateProjectStatus(id, 'failed', null, [errorMessage], errorDetails);
//         } else {
//           // Create new failed project in localStorage
//           const failedProject = {
//             id: id,
//             title: 'Failed Project',
//             timestamp: new Date().toLocaleString(),
//             preview: 'Generation failed',
//             files: null,
//             messages: [errorMessage],
//             prompt: 'Unknown',
//             status: 'failed',
//             createdAt: new Date().toISOString(),
//             error: errorMsg,
//             errorDetails: errorDetails
//           };
          
//           const stored = localStorage.getItem(STORAGE_KEY);
//           let existingProjects = [];
//           if (stored) {
//             try {
//               existingProjects = JSON.parse(stored);
//             } catch (e) {
//               console.error('Error parsing stored projects', e);
//             }
//           }
          
//           const updated = [failedProject, ...existingProjects.filter(p => p.id !== id)].slice(0, 20);
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//           setRecentProjects(updated);
//         }
        
//         setIsLoading(false);
//         scrollToBottom();
//         return;
//       }
      
//       // PRIORITY 4: Use localStorage data if API is not available
//       if (project) {
//         if (project.files) {
//           // Completed project from localStorage
//           console.log('Loading completed project from localStorage');
//           setProjectFiles(project.files);
//           setMessages(project.messages || []);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);
          
//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(project.files);
//           console.log('Converted Sandpack files from localStorage:', Object.keys(sandpackFiles));
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);
          
//           setJobStatus('completed');
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } else if (project.status === 'processing') {
//           // Processing project from localStorage
//           console.log('Loading processing project from localStorage');
//           setMessages(project.messages || []);
//           setJobStatus('processing');
//           setIsProcessing(true);
//           setIsLoading(false);
//           startPolling(id);
//           return;
//         } else if (project.status === 'failed') {
//           // Failed project from localStorage
//           console.log('Loading failed project from localStorage');
//           setJobStatus('failed');
          
//           const errorMsg = project.error || 'This project failed to generate';
//           const errorDetails = project.errorDetails || { message: errorMsg };
          
//           setJobErrorMessage(errorMsg);
//           setJobErrorDetails(errorDetails);
          
//           const errorMessage = {
//             id: Date.now(),
//             text: `❌ **Project Failed to Load**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The project might have had syntax errors
// - The server might have encountered an error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages([errorMessage]);
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         }
//       }
      
//       // PRIORITY 5: No data found anywhere
//       console.log('No project found anywhere');
//       setJobStatus('failed');
//       setJobErrorMessage('Project not found');
      
//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Project Not Found**

// No project found with ID: ${id}

// The project may have expired or been deleted.

// **Troubleshooting:**
// - Check if the backend server is running at ${API_BASE_URL}
// - The project ID might be incorrect
// - Try creating a new project

// Click "New Project" to start a new one.`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
      
//     } catch (error) {
//       console.error('Error loading project:', error);
//       setJobStatus('failed');
//       setJobErrorMessage(error.message);
//       setJobErrorDetails({ type: 'load_error', message: error.message });
      
//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Error Loading Project**

// Could not load the project. The project may have expired or been deleted.

// **Error details:** ${error.message}

// **Possible reasons:**
// - The project ID is invalid
// - The project has been deleted from the server
// - The server is not responding

// **Solutions:**
// - Check if the backend server is running
// - Try creating a new project
// - Clear your browser cache and try again`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
//     }
//   };

//   const handleBuildRequest = async (prompt) => {
//     if (!prompt || prompt.trim().length < 3) {
//       setInputError('Please enter a valid request (minimum 3 characters)');
//       return;
//     }
    
//     setInputError('');
//     setIsProcessing(true);
//     setJobStatus('processing');
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setShowSandpack(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
    
//     try {
//       const buildResponse = await axios.post(`${API_BASE_URL}/build`, null, {
//         params: { prompt },
//         timeout: 30000
//       });
      
//       const { job_id } = buildResponse.data;
      
//       if (!job_id) {
//         throw new Error('No job ID returned from server');
//       }
      
//       savePendingJob(job_id, prompt);
//       setSearchParams({ project: job_id });
      
//       const processingMessage = {
//         id: Date.now(),
//         text: `🔄 **Processing your request...**\n\n**Job ID:** ${job_id}\n**Prompt:** "${prompt.substring(0, 100)}${prompt.length > 100 ? '...' : ''}"\n**Status:** Building your project...\n\nThis may take 30-60 seconds depending on complexity.`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages(prev => [...prev, processingMessage]);
//       scrollToBottom();
      
//       startPolling(job_id);
      
//     } catch (error) {
//       console.error('Build request failed:', error);
      
//       let errorMessage = 'Failed to start project generation.';
//       let errorDetails = {};
      
//       if (error.code === 'ECONNABORTED') {
//         errorMessage = 'Request timeout. The server took too long to respond.';
//         errorDetails = { type: 'timeout', code: 'ECONNABORTED' };
//       } else if (error.response) {
//         errorMessage = `Server error: ${error.response.status} - ${error.response.data?.detail || error.response.statusText}`;
//         errorDetails = { 
//           type: 'server_error', 
//           status: error.response.status,
//           data: error.response.data 
//         };
//       } else if (error.request) {
//         errorMessage = 'Cannot connect to server. Please check if the backend is running.';
//         errorDetails = { type: 'connection_error', message: error.message };
//       } else {
//         errorMessage = error.message;
//         errorDetails = { type: 'unknown_error', message: error.message };
//       }
      
//       const errorMsg = {
//         id: Date.now(),
//         text: `❌ **Build Request Failed**

// **Error:** ${errorMessage}

// **Technical Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Troubleshooting:**
// 1. Make sure the backend server is running at ${API_BASE_URL}
// 2. Check if the server is accessible (try opening ${API_BASE_URL}/docs in browser)
// 3. Verify there are no CORS issues
// 4. Try again with a simpler request

// Click "New Project" to try again.`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages(prev => [...prev, errorMsg]);
//       setIsProcessing(false);
//       setJobStatus('error');
//       scrollToBottom();
//     }
//   };

//   const handleSendMessage = () => {
//     if (message.trim() && !isProcessing) {
//       setInputError('');
      
//       const userMessageObj = {
//         id: Date.now(),
//         text: message,
//         sender: 'user',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages(prev => [...prev, userMessageObj]);
//       scrollToBottom();
      
//       const lowercaseMsg = message.toLowerCase();
      
//       const isProjectRequest = 
//         lowercaseMsg.includes('create') || 
//         lowercaseMsg.includes('build') || 
//         lowercaseMsg.includes('make') || 
//         lowercaseMsg.includes('generate') ||
//         lowercaseMsg.includes('develop') ||
//         lowercaseMsg.includes('website') ||
//         lowercaseMsg.includes('app') ||
//         lowercaseMsg.includes('application');
      
//       const matchedTemplate = allTemplates.find(t => 
//         lowercaseMsg.includes(t.name.toLowerCase())
//       );
      
//       if (isProjectRequest || matchedTemplate) {
//         setIsTyping(true);
//         setShowHelp(false);
        
//         const currentMessage = message;
//         setMessage('');
        
//         setTimeout(() => {
//           setIsTyping(false);
          
//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: `🔄 **Starting project generation...**\n\nI'll create a complete ${matchedTemplate ? matchedTemplate.name : 'custom'} project for you. This will take a few moments. Please wait...`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages(prev => [...prev, aiMessageObj]);
//           scrollToBottom();
//           handleBuildRequest(currentMessage);
//         }, 1000);
        
//       } else {
//         setMessage('');
//         setShowHelp(false);
//         setIsTyping(true);
        
//         setTimeout(() => {
//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: "I can help you build complete projects! Try asking me to create something specific like:\n\n• 'Create a modern education ERP website'\n• 'Build an e-commerce platform'\n• 'Make a social media dashboard'\n• 'Generate a chat application'\n\nWhat would you like me to build for you today?",
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages(prev => [...prev, aiMessageObj]);
//           setIsTyping(false);
//           scrollToBottom();
//         }, 1500);
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const handleNewChat = () => {
//     stopPolling();
    
//     setMessages([]);
//     setShowHelp(true);
//     setMessage('');
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobId(null);
//     setJobStatus(null);
//     setDownloadUrl(null);
//     setIsProcessing(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setInputError('');
//     setIsPollingActive(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
//     currentJobIdRef.current = null;
    
//     setSearchParams({});
    
//     scrollToBottom();
//   };

//   const handleTemplateClick = (templateName) => {
//     const templateMsg = {
//       id: Date.now(),
//       text: `I want to build a ${templateName} application`,
//       sender: 'user',
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };
//     setMessages([templateMsg]);
//     setShowHelp(false);
//     scrollToBottom();
    
//     let prompt = '';
    
//     switch(templateName) {
//       case 'Education ERP':
//         prompt = 'Create a complete Education ERP website with student management, teacher portal, attendance tracking, and grade books. Include responsive dashboard.';
//         break;
//       case 'E-commerce':
//         prompt = 'Build a full E-commerce website with product catalog, shopping cart, and user authentication.';
//         break;
//       case 'Social Media':
//         prompt = 'Create a Social Media platform with user profiles, posts, likes, and comments.';
//         break;
//       case 'Chat App':
//         prompt = 'Build a Real-time Chat Application with private messaging and group chats.';
//         break;
//       case 'Video App':
//         prompt = 'Create a Video Streaming Platform with video upload, video player, playlists, and subscriptions.';
//         break;
//       case 'Music App':
//         prompt = 'Build a Music Streaming App with audio playback, playlists, and album browsing.';
//         break;
//       case 'Food App':
//         prompt = 'Create a Food Delivery App with restaurant listings, menu browsing, and order tracking.';
//         break;
//       case 'Travel App':
//         prompt = 'Build a Travel Booking Platform with property listings, search filters, and booking calendar.';
//         break;
//       default:
//         prompt = `Create a complete ${templateName} application with modern UI and responsive design.`;
//     }
    
//     handleBuildRequest(prompt);
//   };

//   const handleDownload = () => {
//     if (downloadUrl) {
//       window.open(downloadUrl, '_blank');
//     }
//   };

//   // Handle project click from sidebar
//   const handleProjectClick = (jobId) => {
//     console.log('Project clicked:', jobId);
//     // Clear current state before loading new project
//     setMessages([]);
//     setShowHelp(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobStatus(null);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
//     // Set the URL parameter
//     setSearchParams({ project: jobId });
//   };

//   // Loading animation component
//   const ProcessingAnimation = () => {
//     const [dots, setDots] = useState('');
    
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setDots(prev => prev.length >= 3 ? '' : prev + '.');
//       }, 500);
//       return () => clearInterval(interval);
//     }, []);
    
//     return (
//       <div className="flex flex-col items-center justify-center p-8">
//         <div className="relative">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-t-transparent rounded-full"
//             style={{ borderColor: theme.green, borderTopColor: 'transparent' }}
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <BsRobot className="text-xl" style={{ color: theme.green }} />
//           </div>
//         </div>
//         <p className="mt-4 text-sm font-medium" style={{ color: theme.textPrimary }}>
//           Building your project{dots}
//         </p>
//         {pollingAttempts > 0 && (
//           <p className="mt-1 text-xs" style={{ color: theme.textSecondary }}>
//             Elapsed: {Math.floor(pollingAttempts * 2)} seconds
//           </p>
//         )}
//       </div>
//     );
//   };

//   // Enhanced Error Display Component
//   const ErrorDisplay = ({ message, details }) => {
//     const [showDetails, setShowDetails] = useState(false);
    
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{ borderColor: theme.red + '40', backgroundColor: theme.red + '10' }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: theme.red + '20' }}>
//             <BsExclamationTriangle className="text-2xl" style={{ color: theme.red }} />
//           </div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold mb-2" style={{ color: theme.red }}>
//               Project Generation Failed
//             </h3>
//             <div className="space-y-3">
//               <div className="p-3 rounded-lg" style={{ backgroundColor: theme.card, borderLeft: `4px solid ${theme.red}` }}>
//                 <p className="text-sm font-mono" style={{ color: theme.textPrimary }}>
//                   {message || 'Unknown error occurred'}
//                 </p>
//               </div>
              
//               {details && (
//                 <div>
//                   <button
//                     onClick={() => setShowDetails(!showDetails)}
//                     className="flex items-center gap-2 text-xs mb-2"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <BsBug className="text-xs" />
//                     {showDetails ? 'Hide technical details' : 'Show technical details'}
//                   </button>
                  
//                   {showDetails && (
//                     <pre className="p-3 rounded-lg text-xs overflow-auto max-h-40" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                       {JSON.stringify(details, null, 2)}
//                     </pre>
//                   )}
//                 </div>
//               )}
              
//               <div className="mt-4">
//                 <h4 className="text-sm font-semibold mb-2" style={{ color: theme.textPrimary }}>
//                   Common Solutions:
//                 </h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Try a simpler or more specific request</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Check if your request has valid syntax and clear requirements</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Try again with a different project type from the templates</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Make sure the backend server is running properly</span>
//                   </li>
//                 </ul>
//               </div>
              
//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleNewChat}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <HiOutlinePlus className="text-base" />
//                   New Project
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => window.location.reload()}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//                 >
//                   <HiOutlineRefresh className="text-base" />
//                   Refresh Page
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Diagnostic Display Component
//   const DiagnosticDisplay = ({ data, onClose, onFix }) => {
//     if (!data) return null;
    
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{ borderColor: theme.yellow + '40', backgroundColor: theme.yellow + '10' }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: theme.yellow + '20' }}>
//             <BsWrench className="text-2xl" style={{ color: theme.yellow }} />
//           </div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold mb-2" style={{ color: theme.yellow }}>
//               Diagnostic Information
//             </h3>
//             <div className="space-y-3">
//               <pre className="p-3 rounded-lg text-xs overflow-auto max-h-96" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                 {JSON.stringify(data, null, 2)}
//               </pre>
              
//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onFix}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <BsWrench className="text-base" />
//                   Fix localStorage
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onClose}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//                 >
//                   <HiOutlineX className="text-base" />
//                   Close
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Get template for Sandpack
//   const getSandpackTemplate = () => {
//     // Check if it's a React project
//     if (sandpackFiles['/src/App.jsx'] || sandpackFiles['/src/App.js'] || sandpackFiles['/src/main.jsx']) {
//       return 'react';
//     }
//     return 'react'; // Default to react
//   };

//   // Get dependencies from package.json and ensure Tailwind is included
//   const getDependencies = () => {
//     const packageJsonFile = projectFiles?.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//     let dependencies = {};
    
//     if (packageJsonFile) {
//       try {
//         const cleanContent = cleanCodeContent(packageJsonFile.content);
//         const packageJson = JSON.parse(cleanContent);
//         dependencies = packageJson.dependencies || {};
//       } catch (e) {
//         console.error('Error parsing package.json', e);
//       }
//     }
    
//     // Ensure Tailwind dependencies are present
//     return {
//   ...dependencies,
//   react: dependencies.react || "^18.2.0",
//   "react-dom": dependencies["react-dom"] || "^18.2.0",
//   "react-router-dom": dependencies["react-router-dom"] || "^6.3.0"
// };
//   };

//   // Prepare recent chats for sidebar
//   const recentChats = recentProjects.map((project) => {
//     let icon, color, title;
    
//     if (project.status === 'processing') {
//       icon = <HiOutlineRefresh className="animate-spin" />;
//       color = theme.yellow;
//       title = project.title || 'Processing...';
//     } else if (project.status === 'failed') {
//       icon = <HiOutlineExclamation />;
//       color = theme.red;
//       title = 'Failed Project';
//     } else if (project.status === 'completed') {
//       icon = <HiOutlineCheckCircle />;
//       color = theme.green;
//       title = project.title || 'Completed Project';
//     } else {
//       icon = <HiOutlineFolder />;
//       color = theme.textPrimary;
//       title = project.title || 'Project';
//     }
    
//     return {
//       id: project.id,
//       title: title,
//       preview: project.preview || project.prompt?.substring(0, 50) + '...' || 'No preview',
//       time: project.timestamp,
//       icon: icon,
//       color: color,
//       jobId: project.id,
//       status: project.status,
//       prompt: project.prompt,
//       error: project.error
//     };
//   });

//   return (
//     <div className="h-screen w-full overflow-hidden" style={{ backgroundColor: theme.bg }}>
//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile Sidebar */}
//       <motion.aside
//         initial={{ x: '-100%' }}
//         animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
//         transition={{ type: 'tween', duration: 0.3 }}
//         className="fixed inset-y-0 left-0 w-[280px] z-50 lg:hidden shadow-xl overflow-y-auto"
//         style={{ backgroundColor: theme.sidebar }}
//       >
//         <SidebarContent 
//           recentChats={recentChats}
//           templates={sidebarTemplates}
//           allTemplates={allTemplates}
//           onClose={() => setIsMobileMenuOpen(false)}
//           theme={theme}
//           hoveredChat={hoveredChat}
//           setHoveredChat={setHoveredChat}
//           onNewChat={handleNewChat}
//           onProjectClick={handleProjectClick}
//           onTemplateClick={handleTemplateClick}
//         />
//       </motion.aside>

//       {/* Desktop Layout */}
//       <div className="flex h-full w-full">
//         {/* Desktop Sidebar with Collapse Toggle */}
//         <motion.aside 
//           animate={{ width: sidebarCollapsed ? 80 : 288 }}
//           className="hidden lg:block h-full border-r relative transition-all duration-300"
//           style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}
//         >
//           <button
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="absolute -right-3 top-20 z-10 p-1.5 rounded-full border shadow-lg"
//             style={{ backgroundColor: theme.card, borderColor: theme.border, color: theme.textPrimary }}
//           >
//             {sidebarCollapsed ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
//           </button>
          
//           {sidebarCollapsed ? (
//             <CollapsedSidebar 
//               theme={theme}
//               onNewChat={handleNewChat}
//               recentChats={recentChats}
//               onProjectClick={handleProjectClick}
//             />
//           ) : (
//             <SidebarContent 
//               recentChats={recentChats}
//               templates={sidebarTemplates}
//               allTemplates={allTemplates}
//               theme={theme}
//               hoveredChat={hoveredChat}
//               setHoveredChat={setHoveredChat}
//               onNewChat={handleNewChat}
//               onProjectClick={handleProjectClick}
//               onTemplateClick={handleTemplateClick}
//             />
//           )}
//         </motion.aside>

//         {/* Main Content */}
//         <main className="flex-1 h-full flex flex-col w-full min-w-0">
//           {/* Fixed Header */}
//           <div className="flex-shrink-0 border-b w-full" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
//             <div className="flex items-center justify-between px-4 py-3">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(true)}
//                   className="lg:hidden p-2 rounded-full"
//                   style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//                 >
//                   <HiOutlineMenu className="text-lg" />
//                 </button>
//                 <h2 className="text-sm font-medium hidden sm:block" style={{ color: theme.textPrimary }}>
//                   AI Developer Assistant  
//                 </h2>
//                 {/* <button
//                   onClick={runDiagnostic}
//                   className="p-1.5 rounded-full text-xs"
//                   style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                   title="Run diagnostic"
//                 >
//                   <BsWrench className="text-sm" />
//                 </button> */}
//               </div>

//               {jobId && (
//                 <div className="flex items-center gap-2">
//                   <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                     Job: {jobId.substring(0, 8)}...
//                   </span>
//                   {jobStatus === 'processing' && isPollingActive && (
//                     <div className="flex items-center gap-1">
//                       <motion.div
//                         animate={{ rotate: 360 }}
//                         transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                       >
//                         <HiOutlineRefresh className="text-lg" style={{ color: theme.green }} />
//                       </motion.div>
//                       {pollingAttempts > 0 && (
//                         <span className="text-xs" style={{ color: theme.textSecondary }}>
//                           {Math.floor(pollingAttempts * 2)}s
//                         </span>
//                       )}
//                     </div>
//                   )}
//                   {jobStatus === 'completed' && (
//                     <span className="text-xs px-2 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: theme.green + '20', color: theme.green }}>
//                       <HiOutlineCheckCircle className="text-xs" />
//                       Completed
//                     </span>
//                   )}
//                   {jobStatus === 'failed' && (
//                     <span className="text-xs px-2 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: theme.red + '20', color: theme.red }}>
//                       <HiOutlineExclamation className="text-xs" />
//                       Failed
//                     </span>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Two Column Layout - Messages 40% on left, Workspace 60% on right */}
//           <div className="flex-1 flex overflow-hidden">
//             {/* Left Column - Messages Area (40%) */}
//             <div className={`w-2/5 ${jobStatus === "completed"?"w-2/5":"w-full"} border-r overflow-hidden flex flex-col`} style={{ borderColor: theme.border }}>
//               <div className="p-3 border-b" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
//                 <h3 className="text-xs font-semibold uppercase" style={{ color: theme.textSecondary }}>
//                   AI Conversation
//                 </h3>
//               </div>
//               <div 
//                 ref={messagesContainerRef}
//                 className="flex-1 overflow-y-auto" 
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 <div className="p-6">
//                   <div className="max-w-full mx-auto">
//                     {/* Timeout Warning Banner */}
//                     <AnimatePresence>
//                       {showTimeoutWarning && jobStatus === 'processing' && !warningDismissed && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -20 }}
//                           className="mb-4 p-4 rounded-lg border"
//                           style={{ 
//                             backgroundColor: theme.yellow + '20',
//                             borderColor: theme.yellow 
//                           }}
//                         >
//                           <div className="flex items-start gap-3">
//                             <BsHourglassSplit className="text-xl flex-shrink-0 animate-pulse" style={{ color: theme.yellow }} />
//                             <div className="flex-1">
//                               <h4 className="text-sm font-semibold" style={{ color: theme.yellow }}>
//                                 Taking longer than expected
//                               </h4>
//                               <p className="text-xs mt-1" style={{ color: theme.textSecondary }}>
//                                 Your project is still being built. Complex projects can take 2-5 minutes.
//                               </p>
//                               <div className="flex gap-2 mt-3">
//                                 <button
//                                   onClick={() => {
//                                     setWarningDismissed(true);
//                                     setShowTimeoutWarning(false);
//                                   }}
//                                   className="text-xs px-3 py-1.5 rounded-full"
//                                   style={{ backgroundColor: 'transparent', color: theme.textSecondary, border: `1px solid ${theme.border}` }}
//                                 >
//                                   Dismiss
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
                    
//                     {/* Diagnostic Display */}
//                     {showDiagnostic && diagnosticData && (
//                       <DiagnosticDisplay 
//                         data={diagnosticData} 
//                         onClose={() => setShowDiagnostic(false)}
//                         onFix={fixLocalStorage}
//                       />
//                     )}
                    
//                     <AnimatePresence mode="wait">
//                       {showHelp && messages.length === 0 ? (
//                         /* Help Section */
//                         <motion.div
//                           key="help"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: theme.textPrimary }}>
//                             What would you like to build today?
//                           </h2>
//                           <p className="text-sm mb-6" style={{ color: theme.textSecondary }}>
//                             Ask me to build complete projects and get a VS Code-like environment!
//                           </p>

//                           {/* Project Templates - Show all 8 templates in help section */}
//                           <div className="mb-8">
//                             <h3 className="text-sm font-semibold mb-2" style={{ color: theme.textPrimary }}>Popular Projects</h3>
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                               {allTemplates.map((template, index) => (
//                                 <motion.button
//                                   key={index}
//                                   whileHover={{ scale: 1.02 }}
//                                   whileTap={{ scale: 0.98 }}
//                                   className="text-white p-3 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all"
//                                   style={{ backgroundColor: template.bg }}
//                                   onClick={() => handleTemplateClick(template.name)}
//                                 >
//                                   <span className="text-xl">{template.icon}</span>
//                                   <span className="text-xs font-medium text-center">{template.name}</span>
//                                 </motion.button>
//                               ))}
//                             </div>
//                           </div>
//                         </motion.div>
//                       ) : (
//                         /* Messages */
//                         <motion.div
//                           key="messages"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                         >
//                           {messages.map((msg, index) => (
//                             <motion.div
//                               key={msg.id}
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.2, delay: index * 0.05 }}
//                               className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                             >
//                               <div
//                                 className={`max-w-[85%] rounded-2xl px-4 py-3 ${
//                                   msg.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
//                                 }`}
//                                 style={{
//                                   backgroundColor: msg.sender === 'user' ? theme.green : theme.card,
//                                   color: msg.sender === 'user' ? '#FFFFFF' : theme.textPrimary
//                                 }}
//                               >
//                                 {msg.sender === 'ai' && (
//                                   <div className="flex items-center gap-2 mb-2">
//                                     <BsRobot className="text-xs" />
//                                     <span className="text-xs font-medium">AI Developer Assistant</span>
//                                   </div>
//                                 )}
//                                 <div className="text-sm whitespace-pre-wrap font-mono">{msg.text}</div>
//                                 <p className="text-xs mt-2 opacity-70 text-right">{msg.timestamp}</p>
//                               </div>
//                             </motion.div>
//                           ))}
                          
//                           {/* Processing Animation */}
//                           {isProcessing && jobStatus === 'processing' && !projectFiles && isPollingActive && (
//                             <motion.div
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               exit={{ opacity: 0 }}
//                               className="flex justify-center"
//                             >
//                               <ProcessingAnimation />
//                             </motion.div>
//                           )}
                          
//                           {/* Error Display for Failed Jobs */}
//                           {jobStatus === 'failed' && jobErrorMessage && (
//                             <ErrorDisplay message={jobErrorMessage} details={jobErrorDetails} />
//                           )}
                          
//                           {/* Typing indicator */}
//                           {isTyping && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               className="flex justify-start"
//                             >
//                               <div className="rounded-2xl rounded-bl-none px-4 py-3" style={{ backgroundColor: theme.card }}>
//                                 <div className="flex gap-1">
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{ duration: 0.6, repeat: Infinity }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{ backgroundColor: theme.textSecondary }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{ backgroundColor: theme.textSecondary }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{ backgroundColor: theme.textSecondary }}
//                                   />
//                                 </div>
//                               </div>
//                             </motion.div>
//                           )}
                          
//                           <div ref={messagesEndRef} />
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>

//               {/* Fixed Input Area for Messages */}
//               <div className="flex-shrink-0 border-t w-full p-3" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
//                 <div className="max-w-full mx-auto">
//                   <div className="relative">
//                     <textarea
//                       ref={inputRef}
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Ask me to build any project..."
//                       className={`w-full pl-3 placeholder:text-xs pr-24 py-4 border rounded-md text-sm focus:outline-none focus:ring-2 resize-none ${
//                         inputError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#22C55E]'
//                       }`}
//                       style={{
//                         backgroundColor: theme.inputBg,
//                         borderColor: inputError ? theme.red : theme.border,
//                         color: theme.textPrimary,
//                         minHeight: '70px',
//                         maxHeight: '160px'
//                       }}
//                       rows="2"
//                       disabled={isProcessing && jobStatus === 'processing'}
//                     />
//                     <div className="absolute right-2 bottom-3 flex items-center gap-2">
//                       <button 
//                         onClick={handleSendMessage}
//                         disabled={isProcessing && jobStatus === 'processing'}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
//                         style={{ backgroundColor: (isProcessing && jobStatus === 'processing') ? theme.textSecondary : theme.green }}
//                         title={isProcessing ? "Currently building a project" : "Send message"}
//                       >
//                         <HiOutlinePaperAirplane className="text-sm" />
//                       </button>
//                       <button 
//                         onClick={handleNewChat}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0"
//                         style={{ backgroundColor: theme.card }}
//                         title="Start new chat"
//                       >
//                         <HiOutlinePlus className="text-sm" />
//                       </button>
//                     </div>
//                   </div>
//                   {inputError && (
//                     <p className="text-xs mt-1 text-red-500">{inputError}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Workspace Area (60%) - Only show when status is completed */}
//             {jobStatus === 'completed' && (
//               <div 
//                 ref={workspaceRef}
//                 className="w-3/5 overflow-hidden flex flex-col" 
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 {/* Workspace Header with View Toggles and Fullscreen */}
//                 <div className="p-3 border-b flex items-center justify-between" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
//                   <div className="flex items-center gap-2">
//                     <h3 className="text-xs font-semibold uppercase" style={{ color: theme.textSecondary }}>
//                       Project Workspace
//                     </h3>
//                     {downloadUrl && (
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handleDownload}
//                         className="flex items-center gap-1 px-2 py-1 rounded text-white text-xs"
//                         style={{ backgroundColor: theme.green }}
//                       >
//                         <HiOutlineDownload className="text-xs" />
//                         ZIP
//                       </motion.button>
//                     )}
//                     <button
//                       onClick={runDiagnostic}
//                       className="p-1.5 rounded-full text-xs"
//                       style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                       title="Run diagnostic"
//                     >
//                       <BsWrench className="text-sm" />
//                     </button>
//                   </div>
                  
//                   {/* View Toggle Buttons - Only 2 options: Preview and Code */}
//                   {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                     <div className="flex items-center gap-2">
//                       <div className="flex items-center gap-1 bg-gray-800 rounded-lg p-1">
//                         <button
//                           onClick={() => setWorkspaceView('preview')}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === 'preview' 
//                               ? 'bg-gray-700 text-white' 
//                               : 'text-gray-400 hover:text-white'
//                           }`}
//                           title="Preview View"
//                         >
//                           <BsEye className="text-sm inline mr-1" />
//                           Preview
//                         </button>
//                         <button
//                           onClick={() => setWorkspaceView('code')}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === 'code' 
//                               ? 'bg-gray-700 text-white' 
//                               : 'text-gray-400 hover:text-white'
//                           }`}
//                           title="Code View"
//                         >
//                           <BsCodeSquare className="text-sm inline mr-1" />
//                           Code
//                         </button>
//                       </div>
                      
//                       {/* Fullscreen Button */}
//                       <button
//                         onClick={toggleFullscreen}
//                         className="p-2 rounded-md text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 transition-all"
//                         title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
//                       >
//                         <HiOutlineArrowsExpand className="text-sm" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Workspace Content - Full height for preview */}
//                 <div className="flex-1 overflow-hidden">
//                   {!showSandpack || Object.keys(sandpackFiles).length === 0 ? (
//                     <div className="h-full flex items-center justify-center flex-col gap-4">
//                       {jobStatus === 'processing' ? (
//                         <ProcessingAnimation />
//                       ) : jobStatus === 'failed' ? (
//                         <div className="text-center">
//                           <BsExclamationTriangle className="text-4xl mx-auto mb-3" style={{ color: theme.red }} />
//                           <p className="text-sm" style={{ color: theme.textSecondary }}>Project generation failed</p>
//                         </div>
//                       ) : (
//                         <div className="text-center">
//                           <HiOutlineCode className="text-4xl mx-auto mb-3" style={{ color: theme.textSecondary }} />
//                           <p className="text-sm" style={{ color: theme.textSecondary }}>Your project will appear here</p>
//                           <p className="text-xs mt-2" style={{ color: theme.textSecondary }}>
//                             Ask me to build something to get started
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div className="h-full bg-[#1e1e1e] overflow-hidden">
//                    <SandpackProvider
//   key={jobId || 'sandpack-provider'}
//   template={getSandpackTemplate()}
//   theme="dark"
//   files={sandpackFiles}
//   customSetup={{
//     dependencies: getDependencies(),
//     entry:
//       sandpackFiles['/src/index.js'] ? '/src/index.js' :
//       sandpackFiles['/src/index.jsx'] ? '/src/index.jsx' :
//       sandpackFiles['/src/main.jsx'] ? '/src/main.jsx' :
//       '/src/index.js'
//   }}
//   options={{
//     externalResources: [
//       "https://cdn.tailwindcss.com"
//     ],

//     visibleFiles: Object.keys(sandpackFiles),

//     activeFile:
//       Object.keys(sandpackFiles).find(f =>
//         f.includes('App.jsx') ||
//         f.includes('App.js') ||
//         f.includes('main.jsx')
//       ) || Object.keys(sandpackFiles)[0]
//   }}
// >
//                         <SandpackLayout className="h-full">
//                           {workspaceView === 'preview' && (
//                             /* Preview View - Full height preview with console at bottom */
//                             <div className="flex flex-col h-full w-full">
//                               {/* Preview (80%) */}
//                               <div className="h-[80%] bg-[#0f0f0f] flex flex-col">
//                                 <div className="px-3 py-2 text-xs text-gray-400 border-b border-gray-800 font-semibold">
//                                   PREVIEW
//                                 </div>
//                                 <div className="flex-1">
//                                   <SandpackPreview
//                                     showOpenInCodeSandbox={false}
//                                     showRefreshButton={true}
//                                     className="h-[70vh]"
//                                   />
//                                 </div>
//                               </div>
                              
//                               {/* Console (20%) */}
//                               <div className="h-[20%] border-t border-gray-800 flex flex-col">
//                                 <div className="px-3 py-1 text-xs text-gray-400 border-b border-gray-800 font-semibold">
//                                   CONSOLE
//                                 </div>
//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackConsole />
//                                 </div>
//                               </div>
//                             </div>
//                           )}

//                           {workspaceView === 'code' && (
//                             /* Code View - Full height with file explorer and editor */
//                             <div className="flex flex-row h-full w-full">
//                               {/* FILE EXPLORER (20%) */}
//                               <div className="w-[20%] bg-[#252526] border-r border-gray-800 flex flex-col">
//                                 <div className="px-3 py-2 text-xs text-gray-400 border-b border-gray-800 font-semibold">
//                                   EXPLORER
//                                 </div>
//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackFileExplorer 
//                                     className="text-sm"
//                                     autoHiddenFiles={false}
//                                   />
//                                 </div>
//                               </div>

//                               {/* EDITOR (80%) */}
//                               <div className="w-[80%] bg-[#1e1e1e] flex flex-col">
//                                 <div className="px-3 py-2 text-xs text-gray-400 border-b border-gray-800 font-semibold">
//                                   EDITOR
//                                 </div>
//                                 <div className="flex-1">
//                                   <SandpackCodeEditor
//                                     showTabs={true}
//                                     showLineNumbers={true}
//                                     wrapContent={true}
//                                     closableTabs={false}
//                                     className="h-full"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </SandpackLayout>
//                       </SandpackProvider>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Workspace Footer */}
//                 {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                   <div className="px-4 py-2 text-xs border-t" style={{ backgroundColor: theme.card, borderColor: theme.border, color: theme.textSecondary }}>
//                     {Object.keys(sandpackFiles).length} files • {workspaceView === 'preview' ? 'Preview Mode' : 'Code Editor Mode'}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// // Sidebar Component
// const SidebarContent = ({ 
//   recentChats, 
//   templates,
//   allTemplates,
//   onClose, 
//   theme,
//   hoveredChat,
//   setHoveredChat,
//   onNewChat,
//   onProjectClick,
//   onTemplateClick
// }) => {
//   return (
//     <div className="h-full flex flex-col">
//       {/* Header */}
//       <div className="p-3 border-b flex-shrink-0" style={{ borderColor: theme.border }}>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3 min-w-0">
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
//               style={{ background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})` }}
//             >
//               <img src="/EVA.png" alt="" height={60}  className='rounded-full'/>
//             </motion.div>
//             <div className="min-w-0">
//               <h1 className="text-sm font-semibold truncate" style={{ color: theme.textPrimary }}>EVA AI</h1>
//               <p className="text-xs truncate" style={{ color: theme.textSecondary }}>Full-Stack AI</p>
//             </div>
//           </div>
//           {onClose && (
//             <motion.button
//               whileHover={{ rotate: 90 }}
//               transition={{ duration: 0.2 }}
//               onClick={onClose}
//               className="lg:hidden p-2 rounded-full flex-shrink-0"
//               style={{ backgroundColor: theme.card }}
//             >
//               <HiOutlineX style={{ color: theme.textPrimary }} />
//             </motion.button>
//           )}
//         </div>
//       </div>

//       {/* New Chat Button */}
//       <div className="p-4 mx-3 flex-shrink-0">
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={onNewChat}
//           className="w-full py-2.5 px-4 text-white rounded-full text-xs font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
//           style={{ backgroundColor: theme.green }}
//         >
//           <HiOutlinePlus className="text-base" />
//           <span className="truncate">New Project</span>
//         </motion.button>
//       </div>

//       {/* Templates Section */}
//       <div className="px-3 mb-4">
//         <h2 className="text-xs font-semibold uppercase tracking-wider px-3 mb-2" style={{ color: theme.textSecondary }}>
//           Quick Templates
//         </h2>
//         <div className="grid grid-cols-2 gap-2">
//           {templates.map((template, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="p-2 rounded-lg text-xs text-white flex items-center justify-center gap-1.5"
//               style={{ backgroundColor: template.bg }}
//               onClick={() => onTemplateClick(template.name)}
//             >
//               <span className="text-sm">{template.icon}</span>
//               <span className="truncate">{template.name}</span>
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Recent Projects Section */}
//       <div className="flex-1 px-3 overflow-y-auto no-scrollbar min-h-72">
//         <h2 className="text-xs font-semibold uppercase tracking-wider px-3 mb-2" style={{ color: theme.textSecondary }}>
//           Recent Projects
//         </h2>
//         <div className="space-y-1 pb-4">
//           {recentChats.length > 0 ? (
//             recentChats.map((chat) => (
//               <motion.div
//                 key={chat.id}
//                 whileHover={{ x: 4 }}
//                 className="flex items-start gap-3 p-3 rounded-xl cursor-pointer group"
//                 style={{ 
//                   backgroundColor: hoveredChat === chat.id ? theme.card : 'transparent',
//                   opacity: chat.status === 'processing' ? 0.8 : 1
//                 }}
//                 onMouseEnter={() => setHoveredChat(chat.id)}
//                 onMouseLeave={() => setHoveredChat(null)}
//                 onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//               >
//                 <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: theme.card }}>
//                   <span style={{ color: chat.color }} className="text-sm">
//                     {chat.icon}
//                   </span>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between gap-2">
//                     <h4 className="text-sm font-medium truncate" style={{ color: theme.textPrimary }}>
//                       {chat.title}
//                     </h4>
//                     <span className="text-xs flex-shrink-0" style={{ color: theme.textSecondary }}>{chat.time}</span>
//                   </div>
//                   <p className="text-xs truncate" style={{ color: theme.textSecondary }}>{chat.preview}</p>
//                   {chat.status === 'processing' && (
//                     <span className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded" style={{ backgroundColor: theme.yellow + '20', color: theme.yellow }}>
//                       Processing...
//                     </span>
//                   )}
//                   {chat.status === 'completed' && (
//                     <span className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded" style={{ backgroundColor: theme.green + '20', color: theme.green }}>
//                       Completed
//                     </span>
//                   )}
//                   {chat.status === 'failed' && (
//                     <span className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded" style={{ backgroundColor: theme.red + '20', color: theme.red }}>
//                       Failed
//                     </span>
//                   )}
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-8" style={{ color: theme.textSecondary }}>
//               <p className="text-xs">No recent projects</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Collapsed Sidebar Component
// const CollapsedSidebar = ({ theme, onNewChat, recentChats, onProjectClick }) => {
//   return (
//     <div className="h-full flex flex-col items-center py-3">
//       <motion.div 
//         whileHover={{ scale: 1.1 }}
//         className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md mb-6 cursor-pointer"
//         style={{ background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})` }}
//         onClick={onNewChat}
//         title="New Project"
//       >
//         <HiOutlinePlus className="text-white text-lg" />
//       </motion.div>

//       <div className="flex-1 w-full px-2">
//         {recentChats.slice(0, 5).map((chat) => (
//           <motion.div
//             key={chat.id}
//             whileHover={{ scale: 1.05 }}
//             className="w-full flex justify-center mb-2 cursor-pointer relative"
//             onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//             title={`${chat.title} - ${chat.status}`}
//           >
//             <div className="p-2 rounded-lg" style={{ backgroundColor: theme.card }}>
//               <span style={{ color: chat.color }} className="text-lg">
//                 {chat.icon}
//               </span>
//             </div>
//             {chat.status === 'processing' && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
//             )}
//             {chat.status === 'failed' && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState, useRef, useEffect } from 'react';
// import { motion, AnimatePresence } from 'motion/react';
// import { useSearchParams } from 'react-router-dom';
// import axios from 'axios';
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackCodeEditor,
//   SandpackPreview,
//   SandpackConsole,
//   SandpackFileExplorer
// } from "@codesandbox/sandpack-react";
// import { 
//   HiOutlineChat, 
//   HiOutlinePlus, 
//   HiOutlineX,
//   HiOutlinePaperAirplane,
//   HiOutlineShoppingCart,
//   HiOutlineUserGroup,
//   HiOutlineVideoCamera,
//   HiOutlinePhotograph,
//   HiOutlineLocationMarker,
//   HiOutlineMap,
//   HiOutlineCode,
//   HiOutlineDownload,
//   HiOutlineFolder,
//   HiOutlineCheckCircle,
//   HiOutlineRefresh,
//   HiOutlineFolderOpen,
//   HiOutlineChevronLeft,
//   HiOutlineChevronRight,
//   HiOutlineExclamation,
//   HiOutlineMenu,
//   HiOutlineEye,
//   HiOutlineCog,
//   HiOutlineArrowsExpand,
//   HiOutlineSun,
//   HiOutlineMoon
// } from 'react-icons/hi';
// import { 
//   BsRobot, 
//   BsHourglassSplit,
//   BsExclamationTriangle,
//   BsBug,
//   BsWrench,
//   BsCodeSquare,
//   BsEye
// } from 'react-icons/bs';

// const API_BASE_URL = 'http://127.0.0.1:8000';

// // Storage keys
// const STORAGE_KEY = 'ai_projects';
// const THEME_KEY = 'ai_theme';

// // Theme definitions
// const themes = {
//   dark: {
//     bg: '#0B0F0E',
//     sidebar: '#111413',
//     card: '#151918',
//     border: '#1F2A27',
//     green: '#22C55E',
//     greenSoft: '#16A34A',
//     textPrimary: '#E5E7EB',
//     textSecondary: '#9CA3AF',
//     inputBg: '#1A1F1D',
//     yellow: '#EAB308',
//     orange: '#F97316',
//     red: '#EF4444',
//     hover: '#1F2A27',
//     iconBg: '#1A1F1D',
//     sandpackBg: '#1e1e1e'
//   },
//   light: {
//     bg: '#F9FAFB',
//     sidebar: '#FFFFFF',
//     card: '#F3F4F6',
//     border: '#E5E7EB',
//     green: '#22C55E',
//     greenSoft: '#16A34A',
//     textPrimary: '#111827',
//     textSecondary: '#6B7280',
//     inputBg: '#FFFFFF',
//     yellow: '#EAB308',
//     orange: '#F97316',
//     red: '#EF4444',
//     hover: '#F3F4F6',
//     iconBg: '#F3F4F6',
//     sandpackBg: '#FFFFFF'
//   }
// };

// const Home = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredChat, setHoveredChat] = useState(null);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [showHelp, setShowHelp] = useState(true);
//   const [isTyping, setIsTyping] = useState(false);
  
//   // Theme State
//   const [currentTheme, setCurrentTheme] = useState('dark');
//   const theme = themes[currentTheme];
  
//   // API States
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [jobStatus, setJobStatus] = useState(null);
//   const [jobId, setJobId] = useState(null);
//   const [projectFiles, setProjectFiles] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState(null);
//   const [recentProjects, setRecentProjects] = useState([]);
//   const [pollingAttempts, setPollingAttempts] = useState(0);
//   const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
//   const [warningDismissed, setWarningDismissed] = useState(false);
//   const [inputError, setInputError] = useState('');
//   const [isPollingActive, setIsPollingActive] = useState(false);
//   const [jobErrorMessage, setJobErrorMessage] = useState('');
//   const [jobErrorDetails, setJobErrorDetails] = useState(null);
//   const [initialLoadDone, setInitialLoadDone] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showDiagnostic, setShowDiagnostic] = useState(false);
//   const [diagnosticData, setDiagnosticData] = useState(null);
  
//   // Sandpack Files
//   const [sandpackFiles, setSandpackFiles] = useState({});
//   const [showSandpack, setShowSandpack] = useState(false);
  
//   // Sidebar State
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
//   // View Toggle State (preview/code)
//   const [workspaceView, setWorkspaceView] = useState('preview');
  
//   // Fullscreen State
//   const [isFullscreen, setIsFullscreen] = useState(false);
  
//   const messagesEndRef = useRef(null);
//   const messagesContainerRef = useRef(null);
//   const inputRef = useRef(null);
//   const workspaceRef = useRef(null);

//   // Refs for polling management
//   const pollingIntervalRef = useRef(null);
//   const currentJobIdRef = useRef(null);
//   const isPollingRef = useRef(false);
//   const abortControllerRef = useRef(null);

//   // All 8 templates available
//   const allTemplates = [
//     { name: "Education ERP", icon: <HiOutlineCode />, bg: theme.green },
//     { name: "E-commerce", icon: <HiOutlineShoppingCart />, bg: theme.green },
//     { name: "Social Media", icon: <HiOutlineUserGroup />, bg: theme.green },
//     { name: "Chat App", icon: <HiOutlineChat />, bg: theme.green },
//     { name: "Video App", icon: <HiOutlineVideoCamera />, bg: theme.green },
//     { name: "Music App", icon: <HiOutlinePhotograph />, bg: theme.green },
//     { name: "Food App", icon: <HiOutlineLocationMarker />, bg: theme.green },
//     { name: "Travel App", icon: <HiOutlineMap />, bg: theme.green },
//   ];

//   // Only show 4 templates in sidebar
//   const sidebarTemplates = allTemplates.slice(0, 4);

//   // Load theme from localStorage on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem(THEME_KEY);
//     if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
//       setCurrentTheme(savedTheme);
//     }
//   }, []);

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
//     setCurrentTheme(newTheme);
//     localStorage.setItem(THEME_KEY, newTheme);
//   };

//   // Clean code content from markdown code blocks
//   const cleanCodeContent = (content) => {
//     const codeBlockRegex = /```[a-z]*\n([\s\S]*?)```/g;
//     const match = codeBlockRegex.exec(content);

//     let cleaned = match ? match[1].trim() : content;

//     // Remove Tailwind build directives (for Sandpack preview)
//     cleaned = cleaned
//       .replace(/@tailwind base;/g, "")
//       .replace(/@tailwind components;/g, "")
//       .replace(/@tailwind utilities;/g, "");

//     return cleaned;
//   };

//   // Convert API files to Sandpack format with Tailwind support
//   const convertToSandpackFiles = (files) => {
//     const sandpackFiles = {};
    
//     files.forEach(file => {
//       // Skip backend files for preview
//       if (file.filename.startsWith('backend/')) {
//         return;
//       }
      
//       // Handle frontend files
//       let filename = file.filename;
//       if (filename.startsWith('frontend/')) {
//         filename = filename.replace('frontend/', '');
//       }
      
//       // Only include relevant frontend files
//       if (filename.startsWith('src/') || 
//           filename === 'index.html' || 
//           filename === 'package.json' ||
//           filename === 'vite.config.js' ||
//           filename === 'postcss.config.js' ||
//           filename === 'tailwind.config.js') {
        
//         // Clean the content from markdown code blocks
//         let cleanContent = cleanCodeContent(file.content);
        
//         // Map the file path correctly
//         let sandpackPath = filename;
//         if (sandpackPath === 'index.html') {
//           sandpackPath = '/index.html';
//         } else if (!sandpackPath.startsWith('/')) {
//           sandpackPath = '/' + sandpackPath;
//         }
        
//         sandpackFiles[sandpackPath] = {
//           code: cleanContent,
//         };
//       }
//     });

//     // Ensure there's an entry file
//     if (!sandpackFiles['/src/index.js'] && !sandpackFiles['/src/index.jsx'] && !sandpackFiles['/src/main.jsx']) {
//       sandpackFiles['/src/main.jsx'] = {
//         code: `import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )`
//       };
//     }

//     // Ensure App.jsx exists
//     if (!sandpackFiles['/src/App.jsx'] && !sandpackFiles['/src/App.js']) {
//       sandpackFiles['/src/App.jsx'] = {
//         code: `import React from 'react'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <h1 className="text-3xl font-bold text-gray-800">Welcome to Your App</h1>
//     </div>
//   )
// }`
//       };
//     }

//     // Ensure index.css exists with Tailwind directives
//     if (!sandpackFiles['/src/index.css']) {
//       sandpackFiles['/src/index.css'] = {
//         code: `@tailwind base;
// @tailwind components;
// @tailwind utilities;`
//       };
//     }

//     // Ensure tailwind.config.js exists
//     if (!sandpackFiles['/tailwind.config.js']) {
//       sandpackFiles['/tailwind.config.js'] = {
//         code: `/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }`
//       };
//     }

//     // Ensure postcss.config.js exists
//     if (!sandpackFiles['/postcss.config.js']) {
//       sandpackFiles['/postcss.config.js'] = {
//         code: `export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }`
//       };
//     }

//     return sandpackFiles;
//   };

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, jobId, projectFiles]);

//   // Auto-show Sandpack when files are ready
//   useEffect(() => {
//     if (jobStatus === 'completed' && projectFiles && Object.keys(sandpackFiles).length > 0) {
//       setShowSandpack(true);
//     }
//   }, [jobStatus, projectFiles, sandpackFiles]);

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       if (messagesEndRef.current) {
//         messagesEndRef.current.scrollIntoView({ 
//           behavior: 'smooth', 
//           block: 'end' 
//         });
//       }
//     }, 100);
//   };

//   // Load recent projects from localStorage on mount
//   useEffect(() => {
//     loadRecentProjects();
//   }, []);

//   // Handle URL parameter on mount and when it changes
//   useEffect(() => {
//     const projectId = searchParams.get('project');
    
//     if (projectId && !isLoading) {
//       // Clear current state before loading new project
//       setMessages([]);
//       setShowHelp(false);
//       setProjectFiles(null);
//       setSandpackFiles({});
//       setShowSandpack(false);
//       setJobStatus(null);
//       setJobErrorMessage('');
//       setJobErrorDetails(null);
      
//       // Load the project
//       setTimeout(() => {
//         loadProject(projectId);
//       }, 100);
//     } else if (!projectId && !initialLoadDone) {
//       setShowHelp(true);
//       setInitialLoadDone(true);
//     }
//   }, [searchParams]);

//   // Cleanup polling on unmount
//   useEffect(() => {
//     return () => {
//       stopPolling();
//     };
//   }, []);

//   // Handle fullscreen toggle
//   const toggleFullscreen = () => {
//     if (!isFullscreen) {
//       if (workspaceRef.current.requestFullscreen) {
//         workspaceRef.current.requestFullscreen();
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//     setIsFullscreen(!isFullscreen);
//   };

//   // Listen for fullscreen change events
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     document.addEventListener('fullscreenchange', handleFullscreenChange);
//     return () => {
//       document.removeEventListener('fullscreenchange', handleFullscreenChange);
//     };
//   }, []);

//   // Diagnostic function to check localStorage
//   const runDiagnostic = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       const data = {
//         exists: !!stored,
//         raw: stored,
//         parsed: null,
//         currentProject: jobId,
//         projectData: null
//       };
      
//       if (stored) {
//         try {
//           data.parsed = JSON.parse(stored);
//           if (jobId) {
//             data.projectData = data.parsed.find(p => p.id === jobId);
//           }
//         } catch (e) {
//           data.parseError = e.message;
//         }
//       }
      
//       setDiagnosticData(data);
//       setShowDiagnostic(true);
//     } catch (e) {
//       console.error('Diagnostic error:', e);
//     }
//   };

//   // Fix localStorage data
//   const fixLocalStorage = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
        
//         // Fix any projects with missing fields
//         const fixed = projects.map(p => {
//           if (!p.messages) p.messages = [];
//           if (!p.error && p.status === 'failed') {
//             p.error = 'Unknown error';
//             p.errorDetails = { message: 'Unknown error' };
//           }
//           if (!p.preview) {
//             p.preview = p.status === 'failed' ? 'Generation failed' : 
//                        p.status === 'processing' ? 'Processing...' : 
//                        'No preview';
//           }
//           if (!p.prompt) p.prompt = 'Unknown prompt';
//           if (!p.totalFiles) p.totalFiles = p.files ? p.files.length : 0;
//           return p;
//         });
        
//         localStorage.setItem(STORAGE_KEY, JSON.stringify(fixed));
//         setRecentProjects(fixed);
        
//         // Reload current project if any
//         if (jobId) {
//           loadProject(jobId);
//         }
//       }
//     } catch (e) {
//       console.error('Fix error:', e);
//     }
//   };

//   const loadRecentProjects = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         setRecentProjects(projects);
//       }
//     } catch (e) {
//       console.error('Error parsing stored projects', e);
//     }
//   };

//   // Save project to localStorage
//   const saveProjectToStorage = (id, files, conversation, prompt = '') => {
//     try {
//       const packageJson = files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//       let projectName = 'Project';
//       if (packageJson) {
//         try {
//           const parsed = JSON.parse(packageJson.content);
//           projectName = parsed.name || projectName;
//         } catch (e) {
//           console.error('Error parsing package.json', e);
//         }
//       }

//       // Count frontend and backend files
//       const frontendFiles = files.filter(f => f.filename.startsWith('frontend/') || !f.filename.startsWith('backend/')).length;
//       const backendFiles = files.filter(f => f.filename.startsWith('backend/')).length;

//       const projectInfo = {
//         id: id,
//         title: projectName,
//         timestamp: new Date().toLocaleString(),
//         preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
//         files: files,
//         messages: conversation,
//         prompt: prompt || conversation.find(m => m.sender === 'user')?.text || 'Project generation',
//         status: 'completed',
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null,
//         totalFiles: files.length,
//         frontendFiles: frontendFiles,
//         backendFiles: backendFiles
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error('Error parsing stored projects', e);
//         }
//       }
      
//       const updated = [projectInfo, ...existingProjects.filter(p => p.id !== id)].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);
      
//       return updated;
//     } catch (error) {
//       console.error('Error saving project:', error);
//       return [];
//     }
//   };

//   // Save pending job to localStorage
//   const savePendingJob = (id, prompt) => {
//     try {
//       const pendingProject = {
//         id: id,
//         title: 'Processing...',
//         timestamp: new Date().toLocaleString(),
//         preview: `Building: "${prompt.substring(0, 50)}${prompt.length > 50 ? '...' : ''}"`,
//         files: null,
//         messages: [],
//         prompt: prompt,
//         status: 'processing',
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null,
//         totalFiles: 0,
//         frontendFiles: 0,
//         backendFiles: 0
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error('Error parsing stored projects', e);
//         }
//       }
      
//       const updated = [pendingProject, ...existingProjects.filter(p => p.id !== id)].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);
      
//       return updated;
//     } catch (error) {
//       console.error('Error saving pending job:', error);
//       return [];
//     }
//   };

//   // Update project status in localStorage
//   const updateProjectStatus = (id, status, files = null, messages = [], errorDetails = null, prompt = '') => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error('Error parsing stored projects', e);
//         }
//       }
      
//       const updated = existingProjects.map(project => {
//         if (project.id === id) {
//           if (status === 'completed' && files) {
//             const packageJson = files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//             let projectName = 'Project';
//             if (packageJson) {
//               try {
//                 const parsed = JSON.parse(packageJson.content);
//                 projectName = parsed.name || projectName;
//               } catch (e) {
//                 console.error('Error parsing package.json', e);
//               }
//             }

//             // Count frontend and backend files
//             const frontendFiles = files.filter(f => f.filename.startsWith('frontend/') || !f.filename.startsWith('backend/')).length;
//             const backendFiles = files.filter(f => f.filename.startsWith('backend/')).length;
            
//             return {
//               ...project,
//               title: projectName,
//               status: 'completed',
//               files: files,
//               messages: messages,
//               preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
//               error: null,
//               errorDetails: null,
//               prompt: prompt || project.prompt,
//               totalFiles: files.length,
//               frontendFiles: frontendFiles,
//               backendFiles: backendFiles
//             };
//           } else if (status === 'failed') {
//             return {
//               ...project,
//               status: 'failed',
//               title: 'Failed Project',
//               preview: 'Generation failed',
//               files: null,
//               messages: messages,
//               error: errorDetails?.message || 'Unknown error',
//               errorDetails: errorDetails,
//               prompt: prompt || project.prompt
//             };
//           } else {
//             return {
//               ...project,
//               status: status,
//               messages: messages
//             };
//           }
//         }
//         return project;
//       });
      
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);
      
//       return updated;
//     } catch (error) {
//       console.error('Error updating project status:', error);
//       return [];
//     }
//   };

//   // Get project by ID from localStorage
//   const getProjectById = (id) => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         const project = projects.find(p => p.id === id);
//         return project;
//       }
//     } catch (e) {
//       console.error('Error parsing stored projects', e);
//     }
//     return null;
//   };

//   // Stop polling function
//   const stopPolling = () => {
//     if (pollingIntervalRef.current) {
//       clearInterval(pollingIntervalRef.current);
//       pollingIntervalRef.current = null;
//     }

//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//       abortControllerRef.current = null;
//     }

//     isPollingRef.current = false;
//     setIsPollingActive(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//   };

//   // Check if response is for current job
//   const isResponseForCurrentJob = (id) => {
//     return id === currentJobIdRef.current;
//   };

//   // Poll status function
//   const pollStatus = async (id) => {
//     if (!isPollingRef.current || !isResponseForCurrentJob(id)) {
//       return;
//     }
    
//     try {
//       setPollingAttempts(prev => prev + 1);
      
//       const response = await axios.get(`${API_BASE_URL}/status/${id}`, {
//         timeout: 10000,
//         signal: abortControllerRef.current?.signal
//       });
      
//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }
      
//       if (response.data.status === 'completed') {
//         stopPolling();
        
//         const resultResponse = await axios.get(`${API_BASE_URL}/result/${id}`, {
//           signal: abortControllerRef.current?.signal
//         });
        
//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }
        
//         setProjectFiles(resultResponse.data.files);
//         setDownloadUrl(`${API_BASE_URL}/download/${id}`);
        
//         // Convert to Sandpack format
//         const sandpackFiles = convertToSandpackFiles(resultResponse.data.files);
//         setSandpackFiles(sandpackFiles);
//         setShowSandpack(true);
        
//         setJobStatus('completed');
//         setIsProcessing(false);
        
//         const packageJson = resultResponse.data.files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//         let projectName = 'Project';
//         if (packageJson) {
//           try {
//             const parsed = JSON.parse(packageJson.content);
//             projectName = parsed.name || projectName;
//           } catch (e) {
//             console.error('Error parsing package.json', e);
//           }
//         }

//         // Count frontend and backend files
//         const frontendFiles = resultResponse.data.files.filter(f => f.filename.startsWith('frontend/') || !f.filename.startsWith('backend/')).length;
//         const backendFiles = resultResponse.data.files.filter(f => f.filename.startsWith('backend/')).length;
        
//         const successMessage = {
//           id: Date.now(),
//           text: `✅ **Project Generated Successfully!**
          
// I've created a complete ${projectName} project with ${resultResponse.data.files.length} files.

// **Quick Stats:**
// - Total Files: ${resultResponse.data.files.length}
// - Frontend Files: ${frontendFiles}
// - Backend Files: ${backendFiles}

// You can now browse, edit, and preview the code below!`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         const allMessages = [...messages, successMessage];
//         setMessages(allMessages);
        
//         // Get the original prompt from messages
//         const userPrompt = messages.find(m => m.sender === 'user')?.text || '';
//         saveProjectToStorage(id, resultResponse.data.files, allMessages, userPrompt);
        
//         scrollToBottom();
        
//       } else if (response.data.status === 'failed') {
//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }
        
//         stopPolling();
//         setJobStatus('failed');
//         setIsProcessing(false);
        
//         // Extract error message from response
//         const errorMsg = response.data.error?.message || 'Unknown error occurred during project generation';
//         const errorDetails = response.data.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);
        
//         // Add detailed error message to chat
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Generation Failed**

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Possible reasons:**
// - The AI couldn't generate valid code for your request
// - The request contained invalid syntax or requirements
// - There was a server-side processing error
// - The prompt was too complex or ambiguous

// **Suggestions:**
// - Try a simpler and more specific request
// - Check for any syntax errors in your prompt
// - Try one of the template projects first
// - Make sure your request includes specific features

// Click "New Project" to try again.`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);
        
//         // Get the original prompt
//         const userPrompt = messages.find(m => m.sender === 'user')?.text || '';
//         updateProjectStatus(id, 'failed', null, allMessages, errorDetails, userPrompt);
        
//         scrollToBottom();
        
//       } else if (response.data.status === 'processing' || response.data.status === 'running') {
//         setJobStatus('processing');
//         updateProjectStatus(id, 'processing');
//       }
      
//       if (isResponseForCurrentJob(id) && pollingAttempts >= 60 && !showTimeoutWarning && !warningDismissed) {
//         setShowTimeoutWarning(true);
//       }
      
//     } catch (error) {
//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }
      
//       if (axios.isCancel(error) || error.name === 'AbortError' || error.code === 'ERR_CANCELED') {
//         return;
//       }
      
//       console.error('Status check error:', error);
      
//       // Handle network errors
//       if (pollingAttempts > 10) {
//         stopPolling();
//         setJobStatus('failed');
//         setIsProcessing(false);
//         setJobErrorMessage(error.message);
//         setJobErrorDetails({ type: 'network_error', message: error.message });
        
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Connection Error**

// Unable to reach the server. Please check:

// - The backend server is running at ${API_BASE_URL}
// - Your internet connection
// - No firewall blocking the connection

// **Error details:** ${error.message}

// **Technical Details:**
// \`\`\`
// Type: Network Error
// Code: ${error.code || 'N/A'}
// Status: ${error.response?.status || 'N/A'}
// \`\`\`

// **Solutions:**
// 1. Start the backend server with: \`uvicorn main:app --reload\`
// 2. Check if the server is running on port 8000
// 3. Disable any firewall temporarily
// 4. Try refreshing the page`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);
        
//         // Get the original prompt
//         const userPrompt = messages.find(m => m.sender === 'user')?.text || '';
//         updateProjectStatus(id, 'failed', null, allMessages, { type: 'network_error', message: error.message }, userPrompt);
        
//         scrollToBottom();
//       }
//     }
//   };

//   // Start continuous polling
//   const startPolling = (id) => {
//     stopPolling();
    
//     currentJobIdRef.current = id;
//     setJobId(id);
//     setJobStatus('processing');
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
    
//     isPollingRef.current = true;
//     setIsPollingActive(true);
    
//     abortControllerRef.current = new AbortController();
    
//     pollStatus(id);
    
//     pollingIntervalRef.current = setInterval(() => {
//       if (isPollingRef.current && isResponseForCurrentJob(id)) {
//         pollStatus(id);
//       }
//     }, 2000);
//   };

//   // Load project from localStorage or API
//   const loadProject = async (id) => {
//     // Prevent multiple loads
//     if (!id || id === 'null' || id === 'undefined') {
//       setShowHelp(true);
//       setIsLoading(false);
//       setIsProcessing(false);
//       return;
//     }

//     setIsLoading(true);
//     stopPolling();
    
//     setJobId(id);
//     setIsProcessing(false);
//     setShowHelp(false);
//     setJobStatus('loading');
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
//     setShowSandpack(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     currentJobIdRef.current = id;
    
//     try {
//       // FIRST: Check API for current status
//       let apiStatus = null;
//       let apiError = null;
      
//       try {
//         const statusResponse = await axios.get(`${API_BASE_URL}/status/${id}`);
//         apiStatus = statusResponse.data;
//       } catch (apiErr) {
//         apiError = apiErr;
//       }
      
//       // SECOND: Check localStorage
//       const project = getProjectById(id);
      
//       // PRIORITY 1: If API says completed, use API data
//       if (apiStatus && apiStatus.status === 'completed') {
//         try {
//           const resultResponse = await axios.get(`${API_BASE_URL}/result/${id}`);
//           setProjectFiles(resultResponse.data.files);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);
          
//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(resultResponse.data.files);
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);
          
//           setJobStatus('completed');
          
//           const packageJson = resultResponse.data.files.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//           let projectName = 'Project';
//           if (packageJson) {
//             try {
//               const parsed = JSON.parse(packageJson.content);
//               projectName = parsed.name || projectName;
//             } catch (e) {
//               console.error('Error parsing package.json', e);
//             }
//           }

//           // Count frontend and backend files
//           const frontendFiles = resultResponse.data.files.filter(f => f.filename.startsWith('frontend/') || !f.filename.startsWith('backend/')).length;
//           const backendFiles = resultResponse.data.files.filter(f => f.filename.startsWith('backend/')).length;
          
//           const successMessage = {
//             id: Date.now(),
//             text: `✅ **Project Loaded Successfully!**
            
// Loaded ${projectName} with ${resultResponse.data.files.length} files.

// **Quick Stats:**
// - Total Files: ${resultResponse.data.files.length}
// - Frontend Files: ${frontendFiles}
// - Backend Files: ${backendFiles}

// You can now browse, edit, and preview the code below!`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages([successMessage]);
          
//           // Get prompt from localStorage if available
//           const userPrompt = project?.prompt || '';
//           saveProjectToStorage(id, resultResponse.data.files, [successMessage], userPrompt);
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } catch (resultErr) {
//           // Fall through to other options
//         }
//       }
      
//       // PRIORITY 2: If API says processing
//       if (apiStatus && (apiStatus.status === 'processing' || apiStatus.status === 'running')) {
//         setJobStatus('processing');
//         setIsProcessing(true);
//         setIsLoading(false);
        
//         // Use messages from localStorage if available
//         if (project && project.messages) {
//           setMessages(project.messages);
//         } else {
//           const processingMessage = {
//             id: Date.now(),
//             text: `🔄 **Project is still processing...**

// Job ID: ${id}

// The project is still being built. This may take a few moments.

// I'll update you when it's ready!`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
//           setMessages([processingMessage]);
//         }
        
//         startPolling(id);
//         return;
//       }
      
//       // PRIORITY 3: If API says failed
//       if (apiStatus && apiStatus.status === 'failed') {
//         setJobStatus('failed');
        
//         const errorMsg = apiStatus.error?.message || 'Project generation failed';
//         const errorDetails = apiStatus.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);
        
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Failed**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The request might have contained invalid syntax
// - There was a server-side processing error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//           sender: 'ai',
//           timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//         };
        
//         setMessages([errorMessage]);
        
//         // Update localStorage with failed status
//         if (project) {
//           updateProjectStatus(id, 'failed', null, [errorMessage], errorDetails, project.prompt);
//         } else {
//           // Create new failed project in localStorage
//           const failedProject = {
//             id: id,
//             title: 'Failed Project',
//             timestamp: new Date().toLocaleString(),
//             preview: 'Generation failed',
//             files: null,
//             messages: [errorMessage],
//             prompt: 'Unknown',
//             status: 'failed',
//             createdAt: new Date().toISOString(),
//             error: errorMsg,
//             errorDetails: errorDetails,
//             totalFiles: 0,
//             frontendFiles: 0,
//             backendFiles: 0
//           };
          
//           const stored = localStorage.getItem(STORAGE_KEY);
//           let existingProjects = [];
//           if (stored) {
//             try {
//               existingProjects = JSON.parse(stored);
//             } catch (e) {
//               console.error('Error parsing stored projects', e);
//             }
//           }
          
//           const updated = [failedProject, ...existingProjects.filter(p => p.id !== id)].slice(0, 20);
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//           setRecentProjects(updated);
//         }
        
//         setIsLoading(false);
//         scrollToBottom();
//         return;
//       }
      
//       // PRIORITY 4: Use localStorage data if API is not available
//       if (project) {
//         if (project.files) {
//           // Completed project from localStorage
//           setProjectFiles(project.files);
//           setMessages(project.messages || []);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);
          
//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(project.files);
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);
          
//           setJobStatus('completed');
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } else if (project.status === 'processing') {
//           // Processing project from localStorage
//           setMessages(project.messages || []);
//           setJobStatus('processing');
//           setIsProcessing(true);
//           setIsLoading(false);
//           startPolling(id);
//           return;
//         } else if (project.status === 'failed') {
//           // Failed project from localStorage
//           setJobStatus('failed');
          
//           const errorMsg = project.error || 'This project failed to generate';
//           const errorDetails = project.errorDetails || { message: errorMsg };
          
//           setJobErrorMessage(errorMsg);
//           setJobErrorDetails(errorDetails);
          
//           const errorMessage = {
//             id: Date.now(),
//             text: `❌ **Project Failed to Load**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The project might have had syntax errors
// - The server might have encountered an error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages([errorMessage]);
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         }
//       }
      
//       // PRIORITY 5: No data found anywhere
//       setJobStatus('failed');
//       setJobErrorMessage('Project not found');
      
//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Project Not Found**

// No project found with ID: ${id}

// The project may have expired or been deleted.

// **Troubleshooting:**
// - Check if the backend server is running at ${API_BASE_URL}
// - The project ID might be incorrect
// - Try creating a new project

// Click "New Project" to start a new one.`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
      
//     } catch (error) {
//       console.error('Error loading project:', error);
//       setJobStatus('failed');
//       setJobErrorMessage(error.message);
//       setJobErrorDetails({ type: 'load_error', message: error.message });
      
//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Error Loading Project**

// Could not load the project. The project may have expired or been deleted.

// **Error details:** ${error.message}

// **Possible reasons:**
// - The project ID is invalid
// - The project has been deleted from the server
// - The server is not responding

// **Solutions:**
// - Check if the backend server is running
// - Try creating a new project
// - Clear your browser cache and try again`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
//     }
//   };

//   const handleBuildRequest = async (prompt) => {
//     if (!prompt || prompt.trim().length < 3) {
//       setInputError('Please enter a valid request (minimum 3 characters)');
//       return;
//     }
    
//     setInputError('');
//     setIsProcessing(true);
//     setJobStatus('processing');
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setShowSandpack(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
    
//     try {
//       const buildResponse = await axios.post(`${API_BASE_URL}/build`, null, {
//         params: { prompt },
//         timeout: 30000
//       });
      
//       const { job_id } = buildResponse.data;
      
//       if (!job_id) {
//         throw new Error('No job ID returned from server');
//       }
      
//       savePendingJob(job_id, prompt);
//       setSearchParams({ project: job_id });
      
//       const processingMessage = {
//         id: Date.now(),
//         text: `🔄 **Processing your request...**\n\n**Job ID:** ${job_id}\n**Prompt:** "${prompt.substring(0, 100)}${prompt.length > 100 ? '...' : ''}"\n**Status:** Building your project...\n\nThis may take 30-60 seconds depending on complexity.`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages(prev => [...prev, processingMessage]);
//       scrollToBottom();
      
//       startPolling(job_id);
      
//     } catch (error) {
//       console.error('Build request failed:', error);
      
//       let errorMessage = 'Failed to start project generation.';
//       let errorDetails = {};
      
//       if (error.code === 'ECONNABORTED') {
//         errorMessage = 'Request timeout. The server took too long to respond.';
//         errorDetails = { type: 'timeout', code: 'ECONNABORTED' };
//       } else if (error.response) {
//         errorMessage = `Server error: ${error.response.status} - ${error.response.data?.detail || error.response.statusText}`;
//         errorDetails = { 
//           type: 'server_error', 
//           status: error.response.status,
//           data: error.response.data 
//         };
//       } else if (error.request) {
//         errorMessage = 'Cannot connect to server. Please check if the backend is running.';
//         errorDetails = { type: 'connection_error', message: error.message };
//       } else {
//         errorMessage = error.message;
//         errorDetails = { type: 'unknown_error', message: error.message };
//       }
      
//       const errorMsg = {
//         id: Date.now(),
//         text: `❌ **Build Request Failed**

// **Error:** ${errorMessage}

// **Technical Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Troubleshooting:**
// 1. Make sure the backend server is running at ${API_BASE_URL}
// 2. Check if the server is accessible (try opening ${API_BASE_URL}/docs in browser)
// 3. Verify there are no CORS issues
// 4. Try again with a simpler request

// Click "New Project" to try again.`,
//         sender: 'ai',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages(prev => [...prev, errorMsg]);
//       setIsProcessing(false);
//       setJobStatus('error');
//       scrollToBottom();
//     }
//   };

//   const handleSendMessage = () => {
//     if (message.trim() && !isProcessing) {
//       setInputError('');
      
//       const userMessageObj = {
//         id: Date.now(),
//         text: message,
//         sender: 'user',
//         timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//       };
      
//       setMessages(prev => [...prev, userMessageObj]);
//       scrollToBottom();
      
//       const lowercaseMsg = message.toLowerCase();
      
//       const isProjectRequest = 
//         lowercaseMsg.includes('create') || 
//         lowercaseMsg.includes('build') || 
//         lowercaseMsg.includes('make') || 
//         lowercaseMsg.includes('generate') ||
//         lowercaseMsg.includes('develop') ||
//         lowercaseMsg.includes('website') ||
//         lowercaseMsg.includes('app') ||
//         lowercaseMsg.includes('application');
      
//       const matchedTemplate = allTemplates.find(t => 
//         lowercaseMsg.includes(t.name.toLowerCase())
//       );
      
//       if (isProjectRequest || matchedTemplate) {
//         setIsTyping(true);
//         setShowHelp(false);
        
//         const currentMessage = message;
//         setMessage('');
        
//         setTimeout(() => {
//           setIsTyping(false);
          
//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: `🔄 **Starting project generation...**\n\nI'll create a complete ${matchedTemplate ? matchedTemplate.name : 'custom'} project for you. This will take a few moments. Please wait...`,
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages(prev => [...prev, aiMessageObj]);
//           scrollToBottom();
//           handleBuildRequest(currentMessage);
//         }, 1000);
        
//       } else {
//         setMessage('');
//         setShowHelp(false);
//         setIsTyping(true);
        
//         setTimeout(() => {
//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: "I can help you build complete projects! Try asking me to create something specific like:\n\n• 'Create a modern education ERP website'\n• 'Build an e-commerce platform'\n• 'Make a social media dashboard'\n• 'Generate a chat application'\n\nWhat would you like me to build for you today?",
//             sender: 'ai',
//             timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//           };
          
//           setMessages(prev => [...prev, aiMessageObj]);
//           setIsTyping(false);
//           scrollToBottom();
//         }, 1500);
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const handleNewChat = () => {
//     stopPolling();
    
//     setMessages([]);
//     setShowHelp(true);
//     setMessage('');
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobId(null);
//     setJobStatus(null);
//     setDownloadUrl(null);
//     setIsProcessing(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setInputError('');
//     setIsPollingActive(false);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
//     currentJobIdRef.current = null;
    
//     setSearchParams({});
    
//     scrollToBottom();
//   };

//   const handleTemplateClick = (templateName) => {
//     const templateMsg = {
//       id: Date.now(),
//       text: `I want to build a ${templateName} application`,
//       sender: 'user',
//       timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//     };
//     setMessages([templateMsg]);
//     setShowHelp(false);
//     scrollToBottom();
    
//     let prompt = '';
    
//     switch(templateName) {
//       case 'Education ERP':
//         prompt = 'Create a complete Education ERP website with student management, teacher portal, attendance tracking, and grade books. Include responsive dashboard.';
//         break;
//       case 'E-commerce':
//         prompt = 'Build a full E-commerce website with product catalog, shopping cart, and user authentication.';
//         break;
//       case 'Social Media':
//         prompt = 'Create a Social Media platform with user profiles, posts, likes, and comments.';
//         break;
//       case 'Chat App':
//         prompt = 'Build a Real-time Chat Application with private messaging and group chats.';
//         break;
//       case 'Video App':
//         prompt = 'Create a Video Streaming Platform with video upload, video player, playlists, and subscriptions.';
//         break;
//       case 'Music App':
//         prompt = 'Build a Music Streaming App with audio playback, playlists, and album browsing.';
//         break;
//       case 'Food App':
//         prompt = 'Create a Food Delivery App with restaurant listings, menu browsing, and order tracking.';
//         break;
//       case 'Travel App':
//         prompt = 'Build a Travel Booking Platform with property listings, search filters, and booking calendar.';
//         break;
//       default:
//         prompt = `Create a complete ${templateName} application with modern UI and responsive design.`;
//     }
    
//     handleBuildRequest(prompt);
//   };

//   const handleDownload = () => {
//     if (downloadUrl) {
//       window.open(downloadUrl, '_blank');
//     }
//   };

//   // Handle project click from sidebar
//   const handleProjectClick = (jobId) => {
//     // Clear current state before loading new project
//     setMessages([]);
//     setShowHelp(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobStatus(null);
//     setJobErrorMessage('');
//     setJobErrorDetails(null);
//     // Set the URL parameter
//     setSearchParams({ project: jobId });
//   };

//   // Loading animation component
//   const ProcessingAnimation = () => {
//     const [dots, setDots] = useState('');
    
//     useEffect(() => {
//       const interval = setInterval(() => {
//         setDots(prev => prev.length >= 3 ? '' : prev + '.');
//       }, 500);
//       return () => clearInterval(interval);
//     }, []);
    
//     return (
//       <div className="flex flex-col items-center justify-center p-8">
//         <div className="relative">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-t-transparent rounded-full"
//             style={{ borderColor: theme.green, borderTopColor: 'transparent' }}
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <BsRobot className="text-xl" style={{ color: theme.green }} />
//           </div>
//         </div>
//         <p className="mt-4 text-sm font-medium" style={{ color: theme.textPrimary }}>
//           Building your project{dots}
//         </p>
//         {pollingAttempts > 0 && (
//           <p className="mt-1 text-xs" style={{ color: theme.textSecondary }}>
//             Elapsed: {Math.floor(pollingAttempts * 2)} seconds
//           </p>
//         )}
//       </div>
//     );
//   };

//   // Enhanced Error Display Component
//   const ErrorDisplay = ({ message, details }) => {
//     const [showDetails, setShowDetails] = useState(false);
    
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{ borderColor: theme.red + '40', backgroundColor: theme.red + '10' }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: theme.red + '20' }}>
//             <BsExclamationTriangle className="text-2xl" style={{ color: theme.red }} />
//           </div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold mb-2" style={{ color: theme.red }}>
//               Project Generation Failed
//             </h3>
//             <div className="space-y-3">
//               <div className="p-3 rounded-lg" style={{ backgroundColor: theme.card, borderLeft: `4px solid ${theme.red}` }}>
//                 <p className="text-sm font-mono" style={{ color: theme.textPrimary }}>
//                   {message || 'Unknown error occurred'}
//                 </p>
//               </div>
              
//               {details && (
//                 <div>
//                   <button
//                     onClick={() => setShowDetails(!showDetails)}
//                     className="flex items-center gap-2 text-xs mb-2"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <BsBug className="text-xs" />
//                     {showDetails ? 'Hide technical details' : 'Show technical details'}
//                   </button>
                  
//                   {showDetails && (
//                     <pre className="p-3 rounded-lg text-xs overflow-auto max-h-40" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                       {JSON.stringify(details, null, 2)}
//                     </pre>
//                   )}
//                 </div>
//               )}
              
//               <div className="mt-4">
//                 <h4 className="text-sm font-semibold mb-2" style={{ color: theme.textPrimary }}>
//                   Common Solutions:
//                 </h4>
//                 <ul className="space-y-2">
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Try a simpler or more specific request</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Check if your request has valid syntax and clear requirements</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Try again with a different project type from the templates</span>
//                   </li>
//                   <li className="flex items-start gap-2 text-xs" style={{ color: theme.textSecondary }}>
//                     <span className="inline-block w-1.5 h-1.5 rounded-full mt-1.5" style={{ backgroundColor: theme.green }}></span>
//                     <span>Make sure the backend server is running properly</span>
//                   </li>
//                 </ul>
//               </div>
              
//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleNewChat}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <HiOutlinePlus className="text-base" />
//                   New Project
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => window.location.reload()}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//                 >
//                   <HiOutlineRefresh className="text-base" />
//                   Refresh Page
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Diagnostic Display Component
//   const DiagnosticDisplay = ({ data, onClose, onFix }) => {
//     if (!data) return null;
    
//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{ borderColor: theme.yellow + '40', backgroundColor: theme.yellow + '10' }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div className="p-3 rounded-full flex-shrink-0" style={{ backgroundColor: theme.yellow + '20' }}>
//             <BsWrench className="text-2xl" style={{ color: theme.yellow }} />
//           </div>
//           <div className="flex-1">
//             <h3 className="text-lg font-semibold mb-2" style={{ color: theme.yellow }}>
//               Diagnostic Information
//             </h3>
//             <div className="space-y-3">
//               <pre className="p-3 rounded-lg text-xs overflow-auto max-h-96" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                 {JSON.stringify(data, null, 2)}
//               </pre>
              
//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onFix}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <BsWrench className="text-base" />
//                   Fix localStorage
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onClose}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//                 >
//                   <HiOutlineX className="text-base" />
//                   Close
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Get template for Sandpack
//   const getSandpackTemplate = () => {
//     // Check if it's a React project
//     if (sandpackFiles['/src/App.jsx'] || sandpackFiles['/src/App.js'] || sandpackFiles['/src/main.jsx']) {
//       return 'react';
//     }
//     return 'react'; // Default to react
//   };

//   // Get dependencies from package.json and ensure Tailwind is included
//   const getDependencies = () => {
//     const packageJsonFile = projectFiles?.find(f => f.filename === 'package.json' || f.filename === 'frontend/package.json');
//     let dependencies = {};
    
//     if (packageJsonFile) {
//       try {
//         const cleanContent = cleanCodeContent(packageJsonFile.content);
//         const packageJson = JSON.parse(cleanContent);
//         dependencies = packageJson.dependencies || {};
//       } catch (e) {
//         console.error('Error parsing package.json', e);
//       }
//     }
    
//     // Ensure Tailwind dependencies are present
//     return {
//       ...dependencies,
//       react: dependencies.react || "^18.2.0",
//       "react-dom": dependencies["react-dom"] || "^18.2.0",
//       "react-router-dom": dependencies["react-router-dom"] || "^6.3.0"
//     };
//   };

//   // Prepare recent chats for sidebar with enhanced information
//   const recentChats = recentProjects.map((project) => {
//     let icon, color, title;
    
//     if (project.status === 'processing') {
//       icon = <HiOutlineRefresh className="animate-spin" />;
//       color = theme.yellow;
//       title = project.title || 'Processing...';
//     } else if (project.status === 'failed') {
//       icon = <HiOutlineExclamation />;
//       color = theme.red;
//       title = 'Failed Project';
//     } else if (project.status === 'completed') {
//       icon = <HiOutlineCheckCircle />;
//       color = theme.green;
//       title = project.title || 'Completed Project';
//     } else {
//       icon = <HiOutlineFolder />;
//       color = theme.textPrimary;
//       title = project.title || 'Project';
//     }
    
//     // Create preview text without "frontend" word
//     let previewText = '';
//     if (project.status === 'completed' && project.totalFiles) {
//       previewText = `${project.totalFiles} files total (${project.frontendFiles || 0} frontend, ${project.backendFiles || 0} backend)`;
//     } else if (project.prompt) {
//       previewText = project.prompt.substring(0, 50) + (project.prompt.length > 50 ? '...' : '');
//     } else {
//       previewText = project.preview || 'No preview';
//     }
    
//     return {
//       id: project.id,
//       title: title,
//       preview: previewText,
//       time: project.timestamp,
//       icon: icon,
//       color: color,
//       jobId: project.id,
//       status: project.status,
//       prompt: project.prompt,
//       error: project.error,
//       totalFiles: project.totalFiles || 0,
//       frontendFiles: project.frontendFiles || 0,
//       backendFiles: project.backendFiles || 0
//     };
//   });

//   return (
//     <div className="h-screen w-full overflow-hidden transition-colors duration-300" style={{ backgroundColor: theme.bg }}>
//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile Sidebar */}
//       <motion.aside
//         initial={{ x: '-100%' }}
//         animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
//         transition={{ type: 'tween', duration: 0.3 }}
//         className="fixed inset-y-0 left-0 w-[280px] z-50 lg:hidden shadow-xl overflow-y-auto"
//         style={{ backgroundColor: theme.sidebar }}
//       >
//         <SidebarContent 
//           recentChats={recentChats}
//           templates={sidebarTemplates}
//           allTemplates={allTemplates}
//           onClose={() => setIsMobileMenuOpen(false)}
//           theme={theme}
//           hoveredChat={hoveredChat}
//           setHoveredChat={setHoveredChat}
//           onNewChat={handleNewChat}
//           onProjectClick={handleProjectClick}
//           onTemplateClick={handleTemplateClick}
//           currentTheme={currentTheme}
//           toggleTheme={toggleTheme}
//         />
//       </motion.aside>

//       {/* Desktop Layout */}
//       <div className="flex h-full w-full">
//         {/* Desktop Sidebar with Collapse Toggle */}
//         <motion.aside 
//           animate={{ width: sidebarCollapsed ? 80 : 288 }}
//           className="hidden lg:block h-full border-r relative transition-all duration-300"
//           style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}
//         >
//           <button
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="absolute -right-3 top-20 z-10 p-1.5 rounded-full border shadow-lg"
//             style={{ backgroundColor: theme.card, borderColor: theme.border, color: theme.textPrimary }}
//           >
//             {sidebarCollapsed ? <HiOutlineChevronRight /> : <HiOutlineChevronLeft />}
//           </button>
          
//           {sidebarCollapsed ? (
//             <CollapsedSidebar 
//               theme={theme}
//               onNewChat={handleNewChat}
//               recentChats={recentChats}
//               onProjectClick={handleProjectClick}
//             />
//           ) : (
//             <SidebarContent 
//               recentChats={recentChats}
//               templates={sidebarTemplates}
//               allTemplates={allTemplates}
//               theme={theme}
//               hoveredChat={hoveredChat}
//               setHoveredChat={setHoveredChat}
//               onNewChat={handleNewChat}
//               onProjectClick={handleProjectClick}
//               onTemplateClick={handleTemplateClick}
//               currentTheme={currentTheme}
//               toggleTheme={toggleTheme}
//             />
//           )}
//         </motion.aside>

//         {/* Main Content */}
//         <main className="flex-1 h-full flex flex-col w-full min-w-0">
//           {/* Fixed Header */}
//           <div className="flex-shrink-0 border-b w-full" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
//             <div className="flex items-center justify-between px-4 py-3">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(true)}
//                   className="lg:hidden p-2 rounded-full"
//                   style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//                 >
//                   <HiOutlineMenu className="text-lg" />
//                 </button>
//                 <h2 className="text-sm font-medium hidden sm:block" style={{ color: theme.textPrimary }}>
//                   AI Developer Assistant  
//                 </h2>
//                 {/* <button
//                   onClick={runDiagnostic}
//                   className="p-1.5 rounded-full text-xs"
//                   style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                   title="Run diagnostic"
//                 >
//                   <BsWrench className="text-sm" />
//                 </button> */}
//               </div>

//               <div className="flex items-center gap-2">
//                 {/* Theme Toggle Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={toggleTheme}
//                   className="p-2 rounded-full"
//                   style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//                   title={currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//                 >
//                   {currentTheme === 'dark' ? <HiOutlineSun className="text-lg" /> : <HiOutlineMoon className="text-lg" />}
//                 </motion.button>

//                 {jobId && (
//                   <>
//                     <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: theme.card, color: theme.textSecondary }}>
//                       Job: {jobId.substring(0, 8)}...
//                     </span>
//                     {jobStatus === 'processing' && isPollingActive && (
//                       <div className="flex items-center gap-1">
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                         >
//                           <HiOutlineRefresh className="text-lg" style={{ color: theme.green }} />
//                         </motion.div>
//                         {pollingAttempts > 0 && (
//                           <span className="text-xs" style={{ color: theme.textSecondary }}>
//                             {Math.floor(pollingAttempts * 2)}s
//                           </span>
//                         )}
//                       </div>
//                     )}
//                     {jobStatus === 'completed' && (
//                       <span className="text-xs px-2 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: theme.green + '20', color: theme.green }}>
//                         <HiOutlineCheckCircle className="text-xs" />
//                         Completed
//                       </span>
//                     )}
//                     {jobStatus === 'failed' && (
//                       <span className="text-xs px-2 py-1 rounded-full flex items-center gap-1" style={{ backgroundColor: theme.red + '20', color: theme.red }}>
//                         <HiOutlineExclamation className="text-xs" />
//                         Failed
//                       </span>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Two Column Layout - Messages 40% on left, Workspace 60% on right */}
//           <div className="flex-1 flex overflow-hidden">
//             {/* Left Column - Messages Area (40%) */}
//             <div className={`${jobStatus === "completed" ? "w-2/5" : "w-full"} border-r overflow-hidden flex flex-col transition-all duration-300`} style={{ borderColor: theme.border }}>
//               <div className="p-3 border-b" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
//                 <h3 className="text-xs font-semibold uppercase" style={{ color: theme.textSecondary }}>
//                   AI Conversation
//                 </h3>
//               </div>
//               <div 
//                 ref={messagesContainerRef}
//                 className="flex-1 overflow-y-auto" 
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 <div className="p-6">
//                   <div className="max-w-full mx-auto">
//                     {/* Timeout Warning Banner */}
//                     <AnimatePresence>
//                       {showTimeoutWarning && jobStatus === 'processing' && !warningDismissed && (
//                         <motion.div
//                           initial={{ opacity: 0, y: -20 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -20 }}
//                           className="mb-4 p-4 rounded-lg border"
//                           style={{ 
//                             backgroundColor: theme.yellow + '20',
//                             borderColor: theme.yellow 
//                           }}
//                         >
//                           <div className="flex items-start gap-3">
//                             <BsHourglassSplit className="text-xl flex-shrink-0 animate-pulse" style={{ color: theme.yellow }} />
//                             <div className="flex-1">
//                               <h4 className="text-sm font-semibold" style={{ color: theme.yellow }}>
//                                 Taking longer than expected
//                               </h4>
//                               <p className="text-xs mt-1" style={{ color: theme.textSecondary }}>
//                                 Your project is still being built. Complex projects can take 2-5 minutes.
//                               </p>
//                               <div className="flex gap-2 mt-3">
//                                 <button
//                                   onClick={() => {
//                                     setWarningDismissed(true);
//                                     setShowTimeoutWarning(false);
//                                   }}
//                                   className="text-xs px-3 py-1.5 rounded-full"
//                                   style={{ backgroundColor: 'transparent', color: theme.textSecondary, border: `1px solid ${theme.border}` }}
//                                 >
//                                   Dismiss
//                                 </button>
//                               </div>
//                             </div>
//                           </div>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
                    
//                     {/* Diagnostic Display */}
//                     {showDiagnostic && diagnosticData && (
//                       <DiagnosticDisplay 
//                         data={diagnosticData} 
//                         onClose={() => setShowDiagnostic(false)}
//                         onFix={fixLocalStorage}
//                       />
//                     )}
                    
//                     <AnimatePresence mode="wait">
//                       {showHelp && messages.length === 0 ? (
//                         /* Help Section */
//                         <motion.div
//                           key="help"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <h2 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: theme.textPrimary }}>
//                             What would you like to build today?
//                           </h2>
//                           <p className="text-sm mb-6" style={{ color: theme.textSecondary }}>
//                             Ask me to build complete projects and get a VS Code-like environment!
//                           </p>

//                           {/* Project Templates - Show all 8 templates in help section */}
//                           <div className="mb-8">
//                             <h3 className="text-sm font-semibold mb-2" style={{ color: theme.textPrimary }}>Popular Projects</h3>
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                               {allTemplates.map((template, index) => (
//                                 <motion.button
//                                   key={index}
//                                   whileHover={{ scale: 1.02 }}
//                                   whileTap={{ scale: 0.98 }}
//                                   className="text-white p-3 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all"
//                                   style={{ backgroundColor: template.bg }}
//                                   onClick={() => handleTemplateClick(template.name)}
//                                 >
//                                   <span className="text-xl">{template.icon}</span>
//                                   <span className="text-xs font-medium text-center">{template.name}</span>
//                                 </motion.button>
//                               ))}
//                             </div>
//                           </div>
//                         </motion.div>
//                       ) : (
//                         /* Messages */
//                         <motion.div
//                           key="messages"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                         >
//                           {messages.map((msg, index) => (
//                             <motion.div
//                               key={msg.id}
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.2, delay: index * 0.05 }}
//                               className={`mb-4 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
//                             >
//                               <div
//                                 className={`max-w-[85%] rounded-2xl px-4 py-3 ${
//                                   msg.sender === 'user' ? 'rounded-br-none' : 'rounded-bl-none'
//                                 }`}
//                                 style={{
//                                   backgroundColor: msg.sender === 'user' ? theme.green : theme.card,
//                                   color: msg.sender === 'user' ? '#FFFFFF' : theme.textPrimary
//                                 }}
//                               >
//                                 {msg.sender === 'ai' && (
//                                   <div className="flex items-center gap-2 mb-2">
//                                     <BsRobot className="text-xs" />
//                                     <span className="text-xs font-medium">AI Developer Assistant</span>
//                                   </div>
//                                 )}
//                                 <div className="text-sm whitespace-pre-wrap font-mono">{msg.text}</div>
//                                 <p className="text-xs mt-2 opacity-70 text-right">{msg.timestamp}</p>
//                               </div>
//                             </motion.div>
//                           ))}
                          
//                           {/* Processing Animation */}
//                           {isProcessing && jobStatus === 'processing' && !projectFiles && isPollingActive && (
//                             <motion.div
//                               initial={{ opacity: 0 }}
//                               animate={{ opacity: 1 }}
//                               exit={{ opacity: 0 }}
//                               className="flex justify-center"
//                             >
//                               <ProcessingAnimation />
//                             </motion.div>
//                           )}
                          
//                           {/* Error Display for Failed Jobs */}
//                           {jobStatus === 'failed' && jobErrorMessage && (
//                             <ErrorDisplay message={jobErrorMessage} details={jobErrorDetails} />
//                           )}
                          
//                           {/* Typing indicator */}
//                           {isTyping && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               className="flex justify-start"
//                             >
//                               <div className="rounded-2xl rounded-bl-none px-4 py-3" style={{ backgroundColor: theme.card }}>
//                                 <div className="flex gap-1">
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{ duration: 0.6, repeat: Infinity }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{ backgroundColor: theme.textSecondary }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{ backgroundColor: theme.textSecondary }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{ backgroundColor: theme.textSecondary }}
//                                   />
//                                 </div>
//                               </div>
//                             </motion.div>
//                           )}
                          
//                           <div ref={messagesEndRef} />
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>

//               {/* Fixed Input Area for Messages */}
//               <div className="flex-shrink-0 border-t w-full p-3" style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}>
//                 <div className="max-w-full mx-auto">
//                   <div className="relative">
//                     <textarea
//                       ref={inputRef}
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Ask me to build any project..."
//                       className={`w-full pl-3 placeholder:text-xs pr-24 py-4 border rounded-md text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${
//                         inputError ? 'border-red-500 focus:ring-red-500' : 'focus:ring-[#22C55E]'
//                       }`}
//                       style={{
//                         backgroundColor: theme.inputBg,
//                         borderColor: inputError ? theme.red : theme.border,
//                         color: theme.textPrimary,
//                         minHeight: '70px',
//                         maxHeight: '160px',
//                         resize:"none"
//                       }}
//                       rows="2"
//                        onInput={(e) => {
//                     e.target.style.height = "auto";
//                     e.target.style.height =
//                     Math.min(e.target.scrollHeight, 150) + "px";
//                     }}
//                       disabled={isProcessing && jobStatus === 'processing'}
//                     />
//                     <div className="absolute right-2 bottom-3 flex items-center gap-2">
//                       <button 
//                         onClick={handleSendMessage}
//                         disabled={isProcessing && jobStatus === 'processing'}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
//                         style={{ backgroundColor: (isProcessing && jobStatus === 'processing') ? theme.textSecondary : theme.green }}
//                         title={isProcessing ? "Currently building a project" : "Send message"}
//                       >
//                         <HiOutlinePaperAirplane className="text-sm" />
//                       </button>
//                       <button 
//                         onClick={handleNewChat}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0"
//                         style={{ backgroundColor: theme.card }}
//                         title="Start new chat"
//                       >
//                         <HiOutlinePlus className="text-sm" />
//                       </button>
//                     </div>
//                   </div>
//                   {inputError && (
//                     <p className="text-xs mt-1 text-red-500">{inputError}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Workspace Area (60%) - Only show when status is completed */}
//             {jobStatus === 'completed' && (
//               <div 
//                 ref={workspaceRef}
//                 className="w-3/5 overflow-hidden flex flex-col transition-all duration-300" 
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 {/* Workspace Header with View Toggles and Fullscreen */}
//                 <div className="p-3 border-b flex items-center justify-between" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
//                   <div className="flex items-center gap-2">
//                     <h3 className="text-xs font-semibold uppercase" style={{ color: theme.textSecondary }}>
//                       Project Workspace
//                     </h3>
//                     {downloadUrl && (
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handleDownload}
//                         className="flex items-center gap-1 px-2 py-1 rounded text-white text-xs"
//                         style={{ backgroundColor: theme.green }}
//                       >
//                         <HiOutlineDownload className="text-xs" />
//                         ZIP
//                       </motion.button>
//                     )}
//                     <button
//                       onClick={runDiagnostic}
//                       className="p-1.5 rounded-full text-xs"
//                       style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                       title="Run diagnostic"
//                     >
//                       <BsWrench className="text-sm" />
//                     </button>
//                   </div>
                  
//                   {/* View Toggle Buttons - Only 2 options: Preview and Code */}
//                   {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                     <div className="flex items-center gap-2">
//                       <div className="flex items-center gap-1 rounded-lg p-1" style={{ backgroundColor: theme.card }}>
//                         <button
//                           onClick={() => setWorkspaceView('preview')}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === 'preview' 
//                               ? 'bg-gray-700 text-white' 
//                               : 'text-gray-400 hover:text-white'
//                           }`}
//                           style={{ 
//                             backgroundColor: workspaceView === 'preview' ? theme.green + '40' : 'transparent',
//                             color: workspaceView === 'preview' ? theme.textPrimary : theme.textSecondary
//                           }}
//                           title="Preview View"
//                         >
//                           <BsEye className="text-sm inline mr-1" />
//                           Preview
//                         </button>
//                         <button
//                           onClick={() => setWorkspaceView('code')}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === 'code' 
//                               ? 'bg-gray-700 text-white' 
//                               : 'text-gray-400 hover:text-white'
//                           }`}
//                           style={{ 
//                             backgroundColor: workspaceView === 'code' ? theme.green + '40' : 'transparent',
//                             color: workspaceView === 'code' ? theme.textPrimary : theme.textSecondary
//                           }}
//                           title="Code View"
//                         >
//                           <BsCodeSquare className="text-sm inline mr-1" />
//                           Code
//                         </button>
//                       </div>
                      
//                       {/* Fullscreen Button */}
//                       <button
//                         onClick={toggleFullscreen}
//                         className="p-2 rounded-md transition-all"
//                         style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                         title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
//                       >
//                         <HiOutlineArrowsExpand className="text-sm" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Workspace Content - Full height for preview */}
//                 <div className="flex-1 overflow-hidden">
//                   {!showSandpack || Object.keys(sandpackFiles).length === 0 ? (
//                     <div className="h-full flex items-center justify-center flex-col gap-4">
//                       {jobStatus === 'processing' ? (
//                         <ProcessingAnimation />
//                       ) : jobStatus === 'failed' ? (
//                         <div className="text-center">
//                           <BsExclamationTriangle className="text-4xl mx-auto mb-3" style={{ color: theme.red }} />
//                           <p className="text-sm" style={{ color: theme.textSecondary }}>Project generation failed</p>
//                         </div>
//                       ) : (
//                         <div className="text-center">
//                           <HiOutlineCode className="text-4xl mx-auto mb-3" style={{ color: theme.textSecondary }} />
//                           <p className="text-sm" style={{ color: theme.textSecondary }}>Your project will appear here</p>
//                           <p className="text-xs mt-2" style={{ color: theme.textSecondary }}>
//                             Ask me to build something to get started
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div className="h-full overflow-hidden" style={{ backgroundColor: theme.sandpackBg }}>
//                       <SandpackProvider
//                         key={jobId || 'sandpack-provider'}
//                         template={getSandpackTemplate()}
//                         theme={currentTheme === 'dark' ? 'dark' : 'light'}
//                         files={sandpackFiles}
//                         customSetup={{
//                           dependencies: getDependencies(),
//                           entry:
//                             sandpackFiles['/src/index.js'] ? '/src/index.js' :
//                             sandpackFiles['/src/index.jsx'] ? '/src/index.jsx' :
//                             sandpackFiles['/src/main.jsx'] ? '/src/main.jsx' :
//                             '/src/index.js'
//                         }}
//                         options={{
//                           externalResources: [
//                             "https://cdn.tailwindcss.com"
//                           ],
//                           visibleFiles: Object.keys(sandpackFiles),
//                           activeFile:
//                             Object.keys(sandpackFiles).find(f =>
//                               f.includes('App.jsx') ||
//                               f.includes('App.js') ||
//                               f.includes('main.jsx')
//                             ) || Object.keys(sandpackFiles)[0]
//                         }}
//                       >
//                         <SandpackLayout className="h-full">
//                           {workspaceView === 'preview' && (
//                             /* Preview View - Full height preview with console at bottom */
//                             <div className="flex flex-col h-full w-full">
//                               {/* Preview (80%) */}
//                               <div className="h-[80%] flex flex-col" style={{ backgroundColor: theme.sandpackBg }}>
//                                 <div className="px-3 py-2 text-xs border-b font-semibold" style={{ color: theme.textSecondary, borderColor: theme.border }}>
//                                   PREVIEW
//                                 </div>
//                                 <div className="flex-1">
//                                   <SandpackPreview
//                                     showOpenInCodeSandbox={false}
//                                     showRefreshButton={true}
//                                     className="h-[70vh]"
//                                   />
//                                 </div>
//                               </div>
                              
//                               {/* Console (20%) */}
//                               <div className="h-[20%] border-t flex flex-col" style={{ borderColor: theme.border }}>
//                                 <div className="px-3 py-1 text-xs border-b font-semibold" style={{ color: theme.textSecondary, borderColor: theme.border }}>
//                                   CONSOLE
//                                 </div>
//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackConsole />
//                                 </div>
//                               </div>
//                             </div>
//                           )}

//                           {workspaceView === 'code' && (
//                             /* Code View - Full height with file explorer and editor */
//                             <div className="flex flex-row h-full w-full">
//                               {/* FILE EXPLORER (20%) */}
//                               <div className="w-[20%] border-r flex flex-col" style={{ backgroundColor: theme.card, borderColor: theme.border }}>
//                                 <div className="px-3 py-2 text-xs border-b font-semibold" style={{ color: theme.textSecondary, borderColor: theme.border }}>
//                                   EXPLORER
//                                 </div>
//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackFileExplorer 
//                                     className="text-sm"
//                                     autoHiddenFiles={false}
//                                   />
//                                 </div>
//                               </div>

//                               {/* EDITOR (80%) */}
//                               <div className="w-[80%] flex flex-col" style={{ backgroundColor: theme.sandpackBg }}>
//                                 <div className="px-3 py-2 text-xs border-b font-semibold" style={{ color: theme.textSecondary, borderColor: theme.border }}>
//                                   EDITOR
//                                 </div>
//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackCodeEditor
//                                     showTabs={true}
//                                     showLineNumbers={true}
//                                     wrapContent={true}
//                                     closableTabs={false}
//                                     className="h-full"
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </SandpackLayout>
//                       </SandpackProvider>
//                     </div>
//                   )}
//                 </div>
                
//                 {/* Workspace Footer */}
//                 {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                   <div className="px-4 py-2 text-xs border-t" style={{ backgroundColor: theme.card, borderColor: theme.border, color: theme.textSecondary }}>
//                     {Object.keys(sandpackFiles).length} files • {workspaceView === 'preview' ? 'Preview Mode' : 'Code Editor Mode'}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// // Sidebar Component
// const SidebarContent = ({ 
//   recentChats, 
//   templates,
//   allTemplates,
//   onClose, 
//   theme,
//   hoveredChat,
//   setHoveredChat,
//   onNewChat,
//   onProjectClick,
//   onTemplateClick,
//   currentTheme,
//   toggleTheme
// }) => {
//   return (
//     <div className="h-full flex flex-col">
//       {/* Header */}
//       <div className="p-3 border-b flex-shrink-0" style={{ borderColor: theme.border }}>
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3 min-w-0">
//             <motion.div 
//               whileHover={{ scale: 1.02 }}
//               className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
//               style={{ background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})` }}
//             >
//               <img src="/EVA.png" alt="EVA" height={60} className='rounded-full'/>
//             </motion.div>
//             <div className="min-w-0">
//               <h1 className="text-sm font-semibold truncate" style={{ color: theme.textPrimary }}>EVA AI</h1>
//               <p className="text-xs truncate" style={{ color: theme.textSecondary }}>Full-Stack AI</p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* Theme Toggle in Sidebar */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleTheme}
//               className="p-2 rounded-full"
//               style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//               title={currentTheme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
//             >
//               {currentTheme === 'dark' ? <HiOutlineSun className="text-sm" /> : <HiOutlineMoon className="text-sm" />}
//             </motion.button>
//             {onClose && (
//               <motion.button
//                 whileHover={{ rotate: 90 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={onClose}
//                 className="lg:hidden p-2 rounded-full flex-shrink-0"
//                 style={{ backgroundColor: theme.card }}
//               >
//                 <HiOutlineX style={{ color: theme.textPrimary }} />
//               </motion.button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* New Chat Button */}
//       <div className="p-4 mx-3 flex-shrink-0">
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={onNewChat}
//           className="w-full py-2.5 px-4 text-white rounded-full text-xs font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
//           style={{ backgroundColor: theme.green }}
//         >
//           <HiOutlinePlus className="text-base" />
//           <span className="truncate">New Project</span>
//         </motion.button>
//       </div>

//       {/* Templates Section */}
//       <div className="px-3 mb-4">
//         <h2 className="text-xs font-semibold uppercase tracking-wider px-3 mb-2" style={{ color: theme.textSecondary }}>
//           Quick Templates
//         </h2>
//         <div className="grid grid-cols-2 gap-2">
//           {templates.map((template, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="p-2 rounded-lg text-xs text-white flex items-center justify-center gap-1.5"
//               style={{ backgroundColor: template.bg }}
//               onClick={() => onTemplateClick(template.name)}
//             >
//               <span className="text-sm">{template.icon}</span>
//               <span className="truncate">{template.name}</span>
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Recent Projects Section */}
//       <div className="flex-1 px-3 overflow-y-auto no-scrollbar min-h-72">
//         <h2 className="text-xs font-semibold uppercase tracking-wider px-3 mb-2" style={{ color: theme.textSecondary }}>
//           Recent Projects
//         </h2>
//         <div className="space-y-1 pb-4">
//           {recentChats.length > 0 ? (
//             recentChats.map((chat) => (
//               <motion.div
//                 key={chat.id}
//                 whileHover={{ x: 4 }}
//                 className="flex items-start gap-3 p-3 rounded-xl cursor-pointer group"
//                 style={{ 
//                   backgroundColor: hoveredChat === chat.id ? theme.hover : 'transparent',
//                   opacity: chat.status === 'processing' ? 0.8 : 1
//                 }}
//                 onMouseEnter={() => setHoveredChat(chat.id)}
//                 onMouseLeave={() => setHoveredChat(null)}
//                 onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//               >
//                 <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: theme.iconBg }}>
//                   <span style={{ color: chat.color }} className="text-sm">
//                     {chat.icon}
//                   </span>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between gap-2">
//                     <h4 className="text-sm font-medium truncate" style={{ color: theme.textPrimary }}>
//                       {chat.title}
//                     </h4>
//                     <span className="text-xs flex-shrink-0" style={{ color: theme.textSecondary }}>{chat.time}</span>
//                   </div>
//                   <p className="text-xs truncate" style={{ color: theme.textSecondary }}>{chat.preview}</p>
//                   {chat.status === 'processing' && (
//                     <span className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded" style={{ backgroundColor: theme.yellow + '20', color: theme.yellow }}>
//                       Processing...
//                     </span>
//                   )}
//                   {chat.status === 'completed' && (
//                     <span className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded" style={{ backgroundColor: theme.green + '20', color: theme.green }}>
//                       Completed
//                     </span>
//                   )}
//                   {chat.status === 'failed' && (
//                     <span className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded" style={{ backgroundColor: theme.red + '20', color: theme.red }}>
//                       Failed
//                     </span>
//                   )}
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div className="text-center py-8" style={{ color: theme.textSecondary }}>
//               <p className="text-xs">No recent projects</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Collapsed Sidebar Component
// const CollapsedSidebar = ({ theme, onNewChat, recentChats, onProjectClick }) => {
//   return (
//     <div className="h-full flex flex-col items-center py-3">
//       <motion.div 
//         whileHover={{ scale: 1.1 }}
//         className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md mb-6 cursor-pointer"
//         style={{ background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})` }}
//         onClick={onNewChat}
//         title="New Project"
//       >
//         <HiOutlinePlus className="text-white text-lg" />
//       </motion.div>

//       <div className="flex-1 w-full px-2">
//         {recentChats.slice(0, 5).map((chat) => (
//           <motion.div
//             key={chat.id}
//             whileHover={{ scale: 1.05 }}
//             className="w-full flex justify-center mb-2 cursor-pointer relative"
//             onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//             title={`${chat.title} - ${chat.status}`}
//           >
//             <div className="p-2 rounded-lg" style={{ backgroundColor: theme.card }}>
//               <span style={{ color: chat.color }} className="text-lg">
//                 {chat.icon}
//               </span>
//             </div>
//             {chat.status === 'processing' && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
//             )}
//             {chat.status === 'failed' && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackCodeEditor,
//   SandpackPreview,
//   SandpackConsole,
//   SandpackFileExplorer,
// } from "@codesandbox/sandpack-react";
// import {
//   HiOutlineChat,
//   HiOutlinePlus,
//   HiOutlineX,
//   HiOutlinePaperAirplane,
//   HiOutlineShoppingCart,
//   HiOutlineUserGroup,
//   HiOutlineVideoCamera,
//   HiOutlinePhotograph,
//   HiOutlineLocationMarker,
//   HiOutlineMap,
//   HiOutlineCode,
//   HiOutlineDownload,
//   HiOutlineFolder,
//   HiOutlineCheckCircle,
//   HiOutlineRefresh,
//   HiOutlineFolderOpen,
//   HiOutlineChevronLeft,
//   HiOutlineChevronRight,
//   HiOutlineExclamation,
//   HiOutlineMenu,
//   HiOutlineEye,
//   HiOutlineCog,
//   HiOutlineArrowsExpand,
//   HiOutlineSun,
//   HiOutlineMoon,
// } from "react-icons/hi";
// import {
//   BsRobot,
//   BsHourglassSplit,
//   BsExclamationTriangle,
//   BsBug,
//   BsWrench,
//   BsCodeSquare,
//   BsEye,
// } from "react-icons/bs";

// const API_BASE_URL = "http://127.0.0.1:8000";

// // Storage keys
// const STORAGE_KEY = "ai_projects";
// const THEME_KEY = "ai_theme";

// // Theme definitions
// const themes = {
//   dark: {
//     bg: "#0B0F0E",
//     sidebar: "#111413",
//     card: "#151918",
//     border: "#1F2A27",
//     green: "#22C55E",
//     greenSoft: "#16A34A",
//     textPrimary: "#E5E7EB",
//     textSecondary: "#9CA3AF",
//     inputBg: "#1A1F1D",
//     yellow: "#EAB308",
//     orange: "#F97316",
//     red: "#EF4444",
//     hover: "#1F2A27",
//     iconBg: "#1A1F1D",
//     sandpackBg: "#1e1e1e",
//   },
//   light: {
//     bg: "#F9FAFB",
//     sidebar: "#FFFFFF",
//     card: "#F3F4F6",
//     border: "#E5E7EB",
//     green: "#22C55E",
//     greenSoft: "#16A34A",
//     textPrimary: "#111827",
//     textSecondary: "#6B7280",
//     inputBg: "#FFFFFF",
//     yellow: "#EAB308",
//     orange: "#F97316",
//     red: "#EF4444",
//     hover: "#F3F4F6",
//     iconBg: "#F3F4F6",
//     sandpackBg: "#FFFFFF",
//   },
// };

// const Home = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredChat, setHoveredChat] = useState(null);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [showHelp, setShowHelp] = useState(true);
//   const [isTyping, setIsTyping] = useState(false);

//   // Theme State
//   const [currentTheme, setCurrentTheme] = useState("dark");
//   const theme = themes[currentTheme];

//   // API States
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [jobStatus, setJobStatus] = useState(null);
//   const [jobId, setJobId] = useState(null);
//   const [projectFiles, setProjectFiles] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState(null);
//   const [recentProjects, setRecentProjects] = useState([]);
//   const [pollingAttempts, setPollingAttempts] = useState(0);
//   const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
//   const [warningDismissed, setWarningDismissed] = useState(false);
//   const [inputError, setInputError] = useState("");
//   const [isPollingActive, setIsPollingActive] = useState(false);
//   const [jobErrorMessage, setJobErrorMessage] = useState("");
//   const [jobErrorDetails, setJobErrorDetails] = useState(null);
//   const [initialLoadDone, setInitialLoadDone] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showDiagnostic, setShowDiagnostic] = useState(false);
//   const [diagnosticData, setDiagnosticData] = useState(null);

//   // Sandpack Files
//   const [sandpackFiles, setSandpackFiles] = useState({});
//   const [showSandpack, setShowSandpack] = useState(false);

//   // Sidebar State
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   // View Toggle State (preview/code)
//   const [workspaceView, setWorkspaceView] = useState("preview");

//   // Fullscreen State
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const messagesEndRef = useRef(null);
//   const messagesContainerRef = useRef(null);
//   const inputRef = useRef(null);
//   const workspaceRef = useRef(null);

//   // Refs for polling management
//   const pollingIntervalRef = useRef(null);
//   const currentJobIdRef = useRef(null);
//   const isPollingRef = useRef(false);
//   const abortControllerRef = useRef(null);

//   // All 8 templates available
//   const allTemplates = [
//     { name: "Education ERP", icon: <HiOutlineCode />, bg: theme.green },
//     { name: "E-commerce", icon: <HiOutlineShoppingCart />, bg: theme.green },
//     { name: "Social Media", icon: <HiOutlineUserGroup />, bg: theme.green },
//     { name: "Chat App", icon: <HiOutlineChat />, bg: theme.green },
//     { name: "Video App", icon: <HiOutlineVideoCamera />, bg: theme.green },
//     { name: "Music App", icon: <HiOutlinePhotograph />, bg: theme.green },
//     { name: "Food App", icon: <HiOutlineLocationMarker />, bg: theme.green },
//     { name: "Travel App", icon: <HiOutlineMap />, bg: theme.green },
//   ];

//   // Only show 4 templates in sidebar
//   const sidebarTemplates = allTemplates.slice(0, 4);

//   // Load theme from localStorage on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem(THEME_KEY);
//     if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
//       setCurrentTheme(savedTheme);
//     }
//   }, []);

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = currentTheme === "dark" ? "light" : "dark";
//     setCurrentTheme(newTheme);
//     localStorage.setItem(THEME_KEY, newTheme);
//   };

//   // Clean code content from markdown code blocks
//   const cleanCodeContent = (content) => {
//     const codeBlockRegex = /```[a-z]*\n([\s\S]*?)```/g;
//     const match = codeBlockRegex.exec(content);

//     let cleaned = match ? match[1].trim() : content;

//     // Remove Tailwind build directives (for Sandpack preview)
//     cleaned = cleaned
//       .replace(/@tailwind base;/g, "")
//       .replace(/@tailwind components;/g, "")
//       .replace(/@tailwind utilities;/g, "");

//     return cleaned;
//   };

//   // Convert API files to Sandpack format with Tailwind support
//   const convertToSandpackFiles = (files) => {
//     const sandpackFiles = {};

//     files.forEach((file) => {
//       // Skip backend files for preview
//       if (file.filename.startsWith("backend/")) {
//         return;
//       }

//       // Handle frontend files
//       let filename = file.filename;
//       if (filename.startsWith("frontend/")) {
//         filename = filename.replace("frontend/", "");
//       }

//       // Only include relevant frontend files
//       if (
//         filename.startsWith("src/") ||
//         filename === "index.html" ||
//         filename === "package.json" ||
//         filename === "vite.config.js" ||
//         filename === "postcss.config.js" ||
//         filename === "tailwind.config.js"
//       ) {
//         // Clean the content from markdown code blocks
//         let cleanContent = cleanCodeContent(file.content);

//         // Map the file path correctly
//         let sandpackPath = filename;
//         if (sandpackPath === "index.html") {
//           sandpackPath = "/index.html";
//         } else if (!sandpackPath.startsWith("/")) {
//           sandpackPath = "/" + sandpackPath;
//         }

//         sandpackFiles[sandpackPath] = {
//           code: cleanContent,
//         };
//       }
//     });

//     // Ensure there's an entry file
//     if (
//       !sandpackFiles["/src/index.js"] &&
//       !sandpackFiles["/src/index.jsx"] &&
//       !sandpackFiles["/src/main.jsx"]
//     ) {
//       sandpackFiles["/src/main.jsx"] = {
//         code: `import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )`,
//       };
//     }

//     // Ensure App.jsx exists
//     if (!sandpackFiles["/src/App.jsx"] && !sandpackFiles["/src/App.js"]) {
//       sandpackFiles["/src/App.jsx"] = {
//         code: `import React from 'react'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <h1 className="text-3xl font-bold text-gray-800">Welcome to Your App</h1>
//     </div>
//   )
// }`,
//       };
//     }

//     // Ensure index.css exists with Tailwind directives
//     if (!sandpackFiles["/src/index.css"]) {
//       sandpackFiles["/src/index.css"] = {
//         code: `@tailwind base;
// @tailwind components;
// @tailwind utilities;`,
//       };
//     }

//     // Ensure tailwind.config.js exists
//     if (!sandpackFiles["/tailwind.config.js"]) {
//       sandpackFiles["/tailwind.config.js"] = {
//         code: `/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }`,
//       };
//     }

//     // Ensure postcss.config.js exists
//     if (!sandpackFiles["/postcss.config.js"]) {
//       sandpackFiles["/postcss.config.js"] = {
//         code: `export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }`,
//       };
//     }

//     return sandpackFiles;
//   };

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, jobId, projectFiles]);

//   // Auto-show Sandpack when files are ready
//   useEffect(() => {
//     if (
//       jobStatus === "completed" &&
//       projectFiles &&
//       Object.keys(sandpackFiles).length > 0
//     ) {
//       setShowSandpack(true);
//     }
//   }, [jobStatus, projectFiles, sandpackFiles]);

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       if (messagesEndRef.current) {
//         messagesEndRef.current.scrollIntoView({
//           behavior: "smooth",
//           block: "end",
//         });
//       }
//     }, 100);
//   };

//   // Load recent projects from localStorage on mount
//   useEffect(() => {
//     loadRecentProjects();
//   }, []);

//   // Handle URL parameter on mount and when it changes
//   useEffect(() => {
//     const projectId = searchParams.get("project");

//     if (projectId && !isLoading) {
//       // Clear current state before loading new project
//       setMessages([]);
//       setShowHelp(false);
//       setProjectFiles(null);
//       setSandpackFiles({});
//       setShowSandpack(false);
//       setJobStatus(null);
//       setJobErrorMessage("");
//       setJobErrorDetails(null);

//       // Load the project
//       setTimeout(() => {
//         loadProject(projectId);
//       }, 100);
//     } else if (!projectId && !initialLoadDone) {
//       setShowHelp(true);
//       setInitialLoadDone(true);
//     }
//   }, [searchParams]);

//   // Cleanup polling on unmount
//   useEffect(() => {
//     return () => {
//       stopPolling();
//     };
//   }, []);

//   // Handle fullscreen toggle
//   const toggleFullscreen = () => {
//     if (!isFullscreen) {
//       if (workspaceRef.current.requestFullscreen) {
//         workspaceRef.current.requestFullscreen();
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//     setIsFullscreen(!isFullscreen);
//   };

//   // Listen for fullscreen change events
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   // Diagnostic function to check localStorage
//   const runDiagnostic = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       const data = {
//         exists: !!stored,
//         raw: stored,
//         parsed: null,
//         currentProject: jobId,
//         projectData: null,
//       };

//       if (stored) {
//         try {
//           data.parsed = JSON.parse(stored);
//           if (jobId) {
//             data.projectData = data.parsed.find((p) => p.id === jobId);
//           }
//         } catch (e) {
//           data.parseError = e.message;
//         }
//       }

//       setDiagnosticData(data);
//       setShowDiagnostic(true);
//     } catch (e) {
//       console.error("Diagnostic error:", e);
//     }
//   };

//   // Fix localStorage data
//   const fixLocalStorage = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);

//         // Fix any projects with missing fields
//         const fixed = projects.map((p) => {
//           if (!p.messages) p.messages = [];
//           if (!p.error && p.status === "failed") {
//             p.error = "Unknown error";
//             p.errorDetails = { message: "Unknown error" };
//           }
//           if (!p.preview) {
//             p.preview =
//               p.status === "failed"
//                 ? "Generation failed"
//                 : p.status === "processing"
//                   ? "Processing..."
//                   : "No preview";
//           }
//           if (!p.prompt) p.prompt = "Unknown prompt";
//           if (!p.totalFiles) p.totalFiles = p.files ? p.files.length : 0;
//           return p;
//         });

//         localStorage.setItem(STORAGE_KEY, JSON.stringify(fixed));
//         setRecentProjects(fixed);

//         // Reload current project if any
//         if (jobId) {
//           loadProject(jobId);
//         }
//       }
//     } catch (e) {
//       console.error("Fix error:", e);
//     }
//   };

//   const loadRecentProjects = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         setRecentProjects(projects);
//       }
//     } catch (e) {
//       console.error("Error parsing stored projects", e);
//     }
//   };

//   // Save project to localStorage
//   const saveProjectToStorage = (id, files, conversation, prompt = "") => {
//     try {
//       const packageJson = files.find(
//         (f) =>
//           f.filename === "package.json" ||
//           f.filename === "frontend/package.json",
//       );
//       let projectName = "Project";
//       if (packageJson) {
//         try {
//           const parsed = JSON.parse(packageJson.content);
//           projectName = parsed.name || projectName;
//         } catch (e) {
//           console.error("Error parsing package.json", e);
//         }
//       }

//       // Count frontend and backend files
//       const frontendFiles = files.filter(
//         (f) =>
//           f.filename.startsWith("frontend/") ||
//           !f.filename.startsWith("backend/"),
//       ).length;
//       const backendFiles = files.filter((f) =>
//         f.filename.startsWith("backend/"),
//       ).length;

//       const projectInfo = {
//         id: id,
//         title: projectName,
//         timestamp: new Date().toLocaleString(),
//         preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
//         files: files,
//         messages: conversation,
//         prompt:
//           prompt ||
//           conversation.find((m) => m.sender === "user")?.text ||
//           "Project generation",
//         status: "completed",
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null,
//         totalFiles: files.length,
//         frontendFiles: frontendFiles,
//         backendFiles: backendFiles,
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error("Error parsing stored projects", e);
//         }
//       }

//       const updated = [
//         projectInfo,
//         ...existingProjects.filter((p) => p.id !== id),
//       ].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);

//       return updated;
//     } catch (error) {
//       console.error("Error saving project:", error);
//       return [];
//     }
//   };

//   // Save pending job to localStorage
//   const savePendingJob = (id, prompt) => {
//     try {
//       const pendingProject = {
//         id: id,
//         title: "Processing...",
//         timestamp: new Date().toLocaleString(),
//         preview: `Building: "${prompt.substring(0, 50)}${prompt.length > 50 ? "..." : ""}"`,
//         files: null,
//         messages: [],
//         prompt: prompt,
//         status: "processing",
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null,
//         totalFiles: 0,
//         frontendFiles: 0,
//         backendFiles: 0,
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error("Error parsing stored projects", e);
//         }
//       }

//       const updated = [
//         pendingProject,
//         ...existingProjects.filter((p) => p.id !== id),
//       ].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);

//       return updated;
//     } catch (error) {
//       console.error("Error saving pending job:", error);
//       return [];
//     }
//   };

//   // Update project status in localStorage
//   const updateProjectStatus = (
//     id,
//     status,
//     files = null,
//     messages = [],
//     errorDetails = null,
//     prompt = "",
//   ) => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error("Error parsing stored projects", e);
//         }
//       }

//       const updated = existingProjects.map((project) => {
//         if (project.id === id) {
//           if (status === "completed" && files) {
//             const packageJson = files.find(
//               (f) =>
//                 f.filename === "package.json" ||
//                 f.filename === "frontend/package.json",
//             );
//             let projectName = "Project";
//             if (packageJson) {
//               try {
//                 const parsed = JSON.parse(packageJson.content);
//                 projectName = parsed.name || projectName;
//               } catch (e) {
//                 console.error("Error parsing package.json", e);
//               }
//             }

//             // Count frontend and backend files
//             const frontendFiles = files.filter(
//               (f) =>
//                 f.filename.startsWith("frontend/") ||
//                 !f.filename.startsWith("backend/"),
//             ).length;
//             const backendFiles = files.filter((f) =>
//               f.filename.startsWith("backend/"),
//             ).length;

//             return {
//               ...project,
//               title: projectName,
//               status: "completed",
//               files: files,
//               messages: messages,
//               preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
//               error: null,
//               errorDetails: null,
//               prompt: prompt || project.prompt,
//               totalFiles: files.length,
//               frontendFiles: frontendFiles,
//               backendFiles: backendFiles,
//             };
//           } else if (status === "failed") {
//             return {
//               ...project,
//               status: "failed",
//               title: "Failed Project",
//               preview: "Generation failed",
//               files: null,
//               messages: messages,
//               error: errorDetails?.message || "Unknown error",
//               errorDetails: errorDetails,
//               prompt: prompt || project.prompt,
//             };
//           } else {
//             return {
//               ...project,
//               status: status,
//               messages: messages,
//             };
//           }
//         }
//         return project;
//       });

//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);

//       return updated;
//     } catch (error) {
//       console.error("Error updating project status:", error);
//       return [];
//     }
//   };

//   // Get project by ID from localStorage
//   const getProjectById = (id) => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         const project = projects.find((p) => p.id === id);
//         return project;
//       }
//     } catch (e) {
//       console.error("Error parsing stored projects", e);
//     }
//     return null;
//   };

//   // Stop polling function
//   const stopPolling = () => {
//     if (pollingIntervalRef.current) {
//       clearInterval(pollingIntervalRef.current);
//       pollingIntervalRef.current = null;
//     }

//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//       abortControllerRef.current = null;
//     }

//     isPollingRef.current = false;
//     setIsPollingActive(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//   };

//   // Check if response is for current job
//   const isResponseForCurrentJob = (id) => {
//     return id === currentJobIdRef.current;
//   };

//   // Poll status function
//   const pollStatus = async (id) => {
//     if (!isPollingRef.current || !isResponseForCurrentJob(id)) {
//       return;
//     }

//     try {
//       setPollingAttempts((prev) => prev + 1);

//       const response = await axios.get(`${API_BASE_URL}/status/${id}`, {
//         timeout: 10000,
//         signal: abortControllerRef.current?.signal,
//       });

//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }

//       if (response.data.status === "completed") {
//         stopPolling();

//         const resultResponse = await axios.get(`${API_BASE_URL}/result/${id}`, {
//           signal: abortControllerRef.current?.signal,
//         });

//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }

//         setProjectFiles(resultResponse.data.files);
//         setDownloadUrl(`${API_BASE_URL}/download/${id}`);

//         // Convert to Sandpack format
//         const sandpackFiles = convertToSandpackFiles(resultResponse.data.files);
//         setSandpackFiles(sandpackFiles);
//         setShowSandpack(true);

//         setJobStatus("completed");
//         setIsProcessing(false);

//         const packageJson = resultResponse.data.files.find(
//           (f) =>
//             f.filename === "package.json" ||
//             f.filename === "frontend/package.json",
//         );
//         let projectName = "Project";
//         if (packageJson) {
//           try {
//             const parsed = JSON.parse(packageJson.content);
//             projectName = parsed.name || projectName;
//           } catch (e) {
//             console.error("Error parsing package.json", e);
//           }
//         }

//         // Count frontend and backend files
//         const frontendFiles = resultResponse.data.files.filter(
//           (f) =>
//             f.filename.startsWith("frontend/") ||
//             !f.filename.startsWith("backend/"),
//         ).length;
//         const backendFiles = resultResponse.data.files.filter((f) =>
//           f.filename.startsWith("backend/"),
//         ).length;

//         const successMessage = {
//           id: Date.now(),
//           text: `✅ **Project Generated Successfully!**
          
// I've created a complete ${projectName} project with ${resultResponse.data.files.length} files.

// **Quick Stats:**
// - Total Files: ${resultResponse.data.files.length}
// - Frontend Files: ${frontendFiles}
// - Backend Files: ${backendFiles}

// You can now browse, edit, and preview the code below!`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         const allMessages = [...messages, successMessage];
//         setMessages(allMessages);

//         // Get the original prompt from messages
//         const userPrompt =
//           messages.find((m) => m.sender === "user")?.text || "";
//         saveProjectToStorage(
//           id,
//           resultResponse.data.files,
//           allMessages,
//           userPrompt,
//         );

//         scrollToBottom();
//       } else if (response.data.status === "failed") {
//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }

//         stopPolling();
//         setJobStatus("failed");
//         setIsProcessing(false);

//         // Extract error message from response
//         const errorMsg =
//           response.data.error?.message ||
//           "Unknown error occurred during project generation";
//         const errorDetails = response.data.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);

//         // Add detailed error message to chat
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Generation Failed**

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Possible reasons:**
// - The AI couldn't generate valid code for your request
// - The request contained invalid syntax or requirements
// - There was a server-side processing error
// - The prompt was too complex or ambiguous

// **Suggestions:**
// - Try a simpler and more specific request
// - Check for any syntax errors in your prompt
// - Try one of the template projects first
// - Make sure your request includes specific features

// Click "New Project" to try again.`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);

//         // Get the original prompt
//         const userPrompt =
//           messages.find((m) => m.sender === "user")?.text || "";
//         updateProjectStatus(
//           id,
//           "failed",
//           null,
//           allMessages,
//           errorDetails,
//           userPrompt,
//         );

//         scrollToBottom();
//       } else if (
//         response.data.status === "processing" ||
//         response.data.status === "running"
//       ) {
//         setJobStatus("processing");
//         updateProjectStatus(id, "processing");
//       }

//       if (
//         isResponseForCurrentJob(id) &&
//         pollingAttempts >= 60 &&
//         !showTimeoutWarning &&
//         !warningDismissed
//       ) {
//         setShowTimeoutWarning(true);
//       }
//     } catch (error) {
//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }

//       if (
//         axios.isCancel(error) ||
//         error.name === "AbortError" ||
//         error.code === "ERR_CANCELED"
//       ) {
//         return;
//       }

//       console.error("Status check error:", error);

//       // Handle network errors
//       if (pollingAttempts > 10) {
//         stopPolling();
//         setJobStatus("failed");
//         setIsProcessing(false);
//         setJobErrorMessage(error.message);
//         setJobErrorDetails({ type: "network_error", message: error.message });

//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Connection Error**

// Unable to reach the server. Please check:

// - The backend server is running at ${API_BASE_URL}
// - Your internet connection
// - No firewall blocking the connection

// **Error details:** ${error.message}

// **Technical Details:**
// \`\`\`
// Type: Network Error
// Code: ${error.code || "N/A"}
// Status: ${error.response?.status || "N/A"}
// \`\`\`

// **Solutions:**
// 1. Start the backend server with: \`uvicorn main:app --reload\`
// 2. Check if the server is running on port 8000
// 3. Disable any firewall temporarily
// 4. Try refreshing the page`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);

//         // Get the original prompt
//         const userPrompt =
//           messages.find((m) => m.sender === "user")?.text || "";
//         updateProjectStatus(
//           id,
//           "failed",
//           null,
//           allMessages,
//           { type: "network_error", message: error.message },
//           userPrompt,
//         );

//         scrollToBottom();
//       }
//     }
//   };

//   // Start continuous polling
//   const startPolling = (id) => {
//     stopPolling();

//     currentJobIdRef.current = id;
//     setJobId(id);
//     setJobStatus("processing");
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);

//     isPollingRef.current = true;
//     setIsPollingActive(true);

//     abortControllerRef.current = new AbortController();

//     pollStatus(id);

//     pollingIntervalRef.current = setInterval(() => {
//       if (isPollingRef.current && isResponseForCurrentJob(id)) {
//         pollStatus(id);
//       }
//     }, 2000);
//   };

//   // Load project from localStorage or API
//   const loadProject = async (id) => {
//     // Prevent multiple loads
//     if (!id || id === "null" || id === "undefined") {
//       setShowHelp(true);
//       setIsLoading(false);
//       setIsProcessing(false);
//       return;
//     }

//     setIsLoading(true);
//     stopPolling();

//     setJobId(id);
//     setIsProcessing(false);
//     setShowHelp(false);
//     setJobStatus("loading");
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);
//     setShowSandpack(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     currentJobIdRef.current = id;

//     try {
//       // FIRST: Check API for current status
//       let apiStatus = null;
//       let apiError = null;

//       try {
//         const statusResponse = await axios.get(`${API_BASE_URL}/status/${id}`);
//         apiStatus = statusResponse.data;
//       } catch (apiErr) {
//         apiError = apiErr;
//       }

//       // SECOND: Check localStorage
//       const project = getProjectById(id);

//       // PRIORITY 1: If API says completed, use API data
//       if (apiStatus && apiStatus.status === "completed") {
//         try {
//           const resultResponse = await axios.get(
//             `${API_BASE_URL}/result/${id}`,
//           );
//           setProjectFiles(resultResponse.data.files);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);

//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(
//             resultResponse.data.files,
//           );
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);

//           setJobStatus("completed");

//           const packageJson = resultResponse.data.files.find(
//             (f) =>
//               f.filename === "package.json" ||
//               f.filename === "frontend/package.json",
//           );
//           let projectName = "Project";
//           if (packageJson) {
//             try {
//               const parsed = JSON.parse(packageJson.content);
//               projectName = parsed.name || projectName;
//             } catch (e) {
//               console.error("Error parsing package.json", e);
//             }
//           }

//           // Count frontend and backend files
//           const frontendFiles = resultResponse.data.files.filter(
//             (f) =>
//               f.filename.startsWith("frontend/") ||
//               !f.filename.startsWith("backend/"),
//           ).length;
//           const backendFiles = resultResponse.data.files.filter((f) =>
//             f.filename.startsWith("backend/"),
//           ).length;

//           const successMessage = {
//             id: Date.now(),
//             text: `✅ **Project Loaded Successfully!**
            
// Loaded ${projectName} with ${resultResponse.data.files.length} files.

// **Quick Stats:**
// - Total Files: ${resultResponse.data.files.length}
// - Frontend Files: ${frontendFiles}
// - Backend Files: ${backendFiles}

// You can now browse, edit, and preview the code below!`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages([successMessage]);

//           // Get prompt from localStorage if available
//           const userPrompt = project?.prompt || "";
//           saveProjectToStorage(
//             id,
//             resultResponse.data.files,
//             [successMessage],
//             userPrompt,
//           );
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } catch (resultErr) {
//           // Fall through to other options
//         }
//       }

//       // PRIORITY 2: If API says processing
//       if (
//         apiStatus &&
//         (apiStatus.status === "processing" || apiStatus.status === "running")
//       ) {
//         setJobStatus("processing");
//         setIsProcessing(true);
//         setIsLoading(false);

//         // Use messages from localStorage if available
//         if (project && project.messages) {
//           setMessages(project.messages);
//         } else {
//           const processingMessage = {
//             id: Date.now(),
//             text: `🔄 **Project is still processing...**

// Job ID: ${id}

// The project is still being built. This may take a few moments.

// I'll update you when it's ready!`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };
//           setMessages([processingMessage]);
//         }

//         startPolling(id);
//         return;
//       }

//       // PRIORITY 3: If API says failed
//       if (apiStatus && apiStatus.status === "failed") {
//         setJobStatus("failed");

//         const errorMsg =
//           apiStatus.error?.message || "Project generation failed";
//         const errorDetails = apiStatus.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);

//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Failed**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The request might have contained invalid syntax
// - There was a server-side processing error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         setMessages([errorMessage]);

//         // Update localStorage with failed status
//         if (project) {
//           updateProjectStatus(
//             id,
//             "failed",
//             null,
//             [errorMessage],
//             errorDetails,
//             project.prompt,
//           );
//         } else {
//           // Create new failed project in localStorage
//           const failedProject = {
//             id: id,
//             title: "Failed Project",
//             timestamp: new Date().toLocaleString(),
//             preview: "Generation failed",
//             files: null,
//             messages: [errorMessage],
//             prompt: "Unknown",
//             status: "failed",
//             createdAt: new Date().toISOString(),
//             error: errorMsg,
//             errorDetails: errorDetails,
//             totalFiles: 0,
//             frontendFiles: 0,
//             backendFiles: 0,
//           };

//           const stored = localStorage.getItem(STORAGE_KEY);
//           let existingProjects = [];
//           if (stored) {
//             try {
//               existingProjects = JSON.parse(stored);
//             } catch (e) {
//               console.error("Error parsing stored projects", e);
//             }
//           }

//           const updated = [
//             failedProject,
//             ...existingProjects.filter((p) => p.id !== id),
//           ].slice(0, 20);
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//           setRecentProjects(updated);
//         }

//         setIsLoading(false);
//         scrollToBottom();
//         return;
//       }

//       // PRIORITY 4: Use localStorage data if API is not available
//       if (project) {
//         if (project.files) {
//           // Completed project from localStorage
//           setProjectFiles(project.files);
//           setMessages(project.messages || []);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);

//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(project.files);
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);

//           setJobStatus("completed");
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } else if (project.status === "processing") {
//           // Processing project from localStorage
//           setMessages(project.messages || []);
//           setJobStatus("processing");
//           setIsProcessing(true);
//           setIsLoading(false);
//           startPolling(id);
//           return;
//         } else if (project.status === "failed") {
//           // Failed project from localStorage
//           setJobStatus("failed");

//           const errorMsg = project.error || "This project failed to generate";
//           const errorDetails = project.errorDetails || { message: errorMsg };

//           setJobErrorMessage(errorMsg);
//           setJobErrorDetails(errorDetails);

//           const errorMessage = {
//             id: Date.now(),
//             text: `❌ **Project Failed to Load**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The project might have had syntax errors
// - The server might have encountered an error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages([errorMessage]);
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         }
//       }

//       // PRIORITY 5: No data found anywhere
//       setJobStatus("failed");
//       setJobErrorMessage("Project not found");

//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Project Not Found**

// No project found with ID: ${id}

// The project may have expired or been deleted.

// **Troubleshooting:**
// - Check if the backend server is running at ${API_BASE_URL}
// - The project ID might be incorrect
// - Try creating a new project

// Click "New Project" to start a new one.`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
//     } catch (error) {
//       console.error("Error loading project:", error);
//       setJobStatus("failed");
//       setJobErrorMessage(error.message);
//       setJobErrorDetails({ type: "load_error", message: error.message });

//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Error Loading Project**

// Could not load the project. The project may have expired or been deleted.

// **Error details:** ${error.message}

// **Possible reasons:**
// - The project ID is invalid
// - The project has been deleted from the server
// - The server is not responding

// **Solutions:**
// - Check if the backend server is running
// - Try creating a new project
// - Clear your browser cache and try again`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
//     }
//   };

//   const handleBuildRequest = async (prompt) => {
//     if (!prompt || prompt.trim().length < 3) {
//       setInputError("Please enter a valid request (minimum 3 characters)");
//       return;
//     }

//     setInputError("");
//     setIsProcessing(true);
//     setJobStatus("processing");
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setShowSandpack(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);

//     try {
//       const buildResponse = await axios.post(`${API_BASE_URL}/build`, null, {
//         params: { prompt },
//         timeout: 30000,
//       });

//       const { job_id } = buildResponse.data;

//       if (!job_id) {
//         throw new Error("No job ID returned from server");
//       }

//       savePendingJob(job_id, prompt);
//       setSearchParams({ project: job_id });

//       const processingMessage = {
//         id: Date.now(),
//         text: `🔄 **Processing your request...**\n\n**Job ID:** ${job_id}\n**Prompt:** "${prompt.substring(0, 100)}${prompt.length > 100 ? "..." : ""}"\n**Status:** Building your project...\n\nThis may take 30-60 seconds depending on complexity.`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, processingMessage]);
//       scrollToBottom();

//       startPolling(job_id);
//     } catch (error) {
//       console.error("Build request failed:", error);

//       let errorMessage = "Failed to start project generation.";
//       let errorDetails = {};

//       if (error.code === "ECONNABORTED") {
//         errorMessage = "Request timeout. The server took too long to respond.";
//         errorDetails = { type: "timeout", code: "ECONNABORTED" };
//       } else if (error.response) {
//         errorMessage = `Server error: ${error.response.status} - ${error.response.data?.detail || error.response.statusText}`;
//         errorDetails = {
//           type: "server_error",
//           status: error.response.status,
//           data: error.response.data,
//         };
//       } else if (error.request) {
//         errorMessage =
//           "Cannot connect to server. Please check if the backend is running.";
//         errorDetails = { type: "connection_error", message: error.message };
//       } else {
//         errorMessage = error.message;
//         errorDetails = { type: "unknown_error", message: error.message };
//       }

//       const errorMsg = {
//         id: Date.now(),
//         text: `❌ **Build Request Failed**

// **Error:** ${errorMessage}

// **Technical Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Troubleshooting:**
// 1. Make sure the backend server is running at ${API_BASE_URL}
// 2. Check if the server is accessible (try opening ${API_BASE_URL}/docs in browser)
// 3. Verify there are no CORS issues
// 4. Try again with a simpler request

// Click "New Project" to try again.`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, errorMsg]);
//       setIsProcessing(false);
//       setJobStatus("error");
//       scrollToBottom();
//     }
//   };

//   const handleSendMessage = () => {
//     if (message.trim() && !isProcessing) {
//       setInputError("");

//       const userMessageObj = {
//         id: Date.now(),
//         text: message,
//         sender: "user",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, userMessageObj]);
//       scrollToBottom();

//       const lowercaseMsg = message.toLowerCase();

//       const isProjectRequest =
//         lowercaseMsg.includes("create") ||
//         lowercaseMsg.includes("build") ||
//         lowercaseMsg.includes("make") ||
//         lowercaseMsg.includes("generate") ||
//         lowercaseMsg.includes("develop") ||
//         lowercaseMsg.includes("website") ||
//         lowercaseMsg.includes("app") ||
//         lowercaseMsg.includes("application");

//       const matchedTemplate = allTemplates.find((t) =>
//         lowercaseMsg.includes(t.name.toLowerCase()),
//       );

//       if (isProjectRequest || matchedTemplate) {
//         setIsTyping(true);
//         setShowHelp(false);

//         const currentMessage = message;
//         setMessage("");

//         setTimeout(() => {
//           setIsTyping(false);

//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: `🔄 **Starting project generation...**\n\nI'll create a complete ${matchedTemplate ? matchedTemplate.name : "custom"} project for you. This will take a few moments. Please wait...`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages((prev) => [...prev, aiMessageObj]);
//           scrollToBottom();
//           handleBuildRequest(currentMessage);
//         }, 1000);
//       } else {
//         setMessage("");
//         setShowHelp(false);
//         setIsTyping(true);

//         setTimeout(() => {
//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: "I can help you build complete projects! Try asking me to create something specific like:\n\n• 'Create a modern education ERP website'\n• 'Build an e-commerce platform'\n• 'Make a social media dashboard'\n• 'Generate a chat application'\n\nWhat would you like me to build for you today?",
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages((prev) => [...prev, aiMessageObj]);
//           setIsTyping(false);
//           scrollToBottom();
//         }, 1500);
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const handleNewChat = () => {
//     stopPolling();

//     setMessages([]);
//     setShowHelp(true);
//     setMessage("");
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobId(null);
//     setJobStatus(null);
//     setDownloadUrl(null);
//     setIsProcessing(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setInputError("");
//     setIsPollingActive(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);
//     currentJobIdRef.current = null;

//     setSearchParams({});

//     scrollToBottom();
//   };

//   const handleTemplateClick = (templateName) => {
//     const templateMsg = {
//       id: Date.now(),
//       text: `I want to build a ${templateName} application`,
//       sender: "user",
//       timestamp: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };
//     setMessages([templateMsg]);
//     setShowHelp(false);
//     scrollToBottom();

//     let prompt = "";

//     switch (templateName) {
//       case "Education ERP":
//         prompt =
//           "Create a complete Education ERP website with student management, teacher portal, attendance tracking, and grade books. Include responsive dashboard.";
//         break;
//       case "E-commerce":
//         prompt =
//           "Build a full E-commerce website with product catalog, shopping cart, and user authentication.";
//         break;
//       case "Social Media":
//         prompt =
//           "Create a Social Media platform with user profiles, posts, likes, and comments.";
//         break;
//       case "Chat App":
//         prompt =
//           "Build a Real-time Chat Application with private messaging and group chats.";
//         break;
//       case "Video App":
//         prompt =
//           "Create a Video Streaming Platform with video upload, video player, playlists, and subscriptions.";
//         break;
//       case "Music App":
//         prompt =
//           "Build a Music Streaming App with audio playback, playlists, and album browsing.";
//         break;
//       case "Food App":
//         prompt =
//           "Create a Food Delivery App with restaurant listings, menu browsing, and order tracking.";
//         break;
//       case "Travel App":
//         prompt =
//           "Build a Travel Booking Platform with property listings, search filters, and booking calendar.";
//         break;
//       default:
//         prompt = `Create a complete ${templateName} application with modern UI and responsive design.`;
//     }

//     handleBuildRequest(prompt);
//   };

//   const handleDownload = () => {
//     if (downloadUrl) {
//       window.open(downloadUrl, "_blank");
//     }
//   };

//   // Handle project click from sidebar
//   const handleProjectClick = (jobId) => {
//     // Clear current state before loading new project
//     setMessages([]);
//     setShowHelp(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobStatus(null);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);
//     // Set the URL parameter
//     setSearchParams({ project: jobId });
//   };

//   // Loading animation component
//   const ProcessingAnimation = () => {
//     const [dots, setDots] = useState("");

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
//       }, 500);
//       return () => clearInterval(interval);
//     }, []);

//     return (
//       <div className="flex flex-col items-center justify-center p-8">
//         <div className="relative">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-t-transparent rounded-full"
//             style={{ borderColor: theme.green, borderTopColor: "transparent" }}
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <BsRobot className="text-xl" style={{ color: theme.green }} />
//           </div>
//         </div>
//         <p
//           className="mt-4 text-sm font-medium"
//           style={{ color: theme.textPrimary }}
//         >
//           Building your project{dots}
//         </p>
//         {pollingAttempts > 0 && (
//           <p className="mt-1 text-xs" style={{ color: theme.textSecondary }}>
//             Elapsed: {Math.floor(pollingAttempts * 2)} seconds
//           </p>
//         )}
//       </div>
//     );
//   };

//   // Enhanced Error Display Component
//   const ErrorDisplay = ({ message, details }) => {
//     const [showDetails, setShowDetails] = useState(false);

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{
//           borderColor: theme.red + "40",
//           backgroundColor: theme.red + "10",
//         }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div
//             className="p-3 rounded-full flex-shrink-0"
//             style={{ backgroundColor: theme.red + "20" }}
//           >
//             <BsExclamationTriangle
//               className="text-2xl"
//               style={{ color: theme.red }}
//             />
//           </div>
//           <div className="flex-1">
//             <h3
//               className="text-lg font-semibold mb-2"
//               style={{ color: theme.red }}
//             >
//               Project Generation Failed
//             </h3>
//             <div className="space-y-3">
//               <div
//                 className="p-3 rounded-lg"
//                 style={{
//                   backgroundColor: theme.card,
//                   borderLeft: `4px solid ${theme.red}`,
//                 }}
//               >
//                 <p
//                   className="text-sm font-mono"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   {message || "Unknown error occurred"}
//                 </p>
//               </div>

//               {details && (
//                 <div>
//                   <button
//                     onClick={() => setShowDetails(!showDetails)}
//                     className="flex items-center gap-2 text-xs mb-2"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <BsBug className="text-xs" />
//                     {showDetails
//                       ? "Hide technical details"
//                       : "Show technical details"}
//                   </button>

//                   {showDetails && (
//                     <pre
//                       className="p-3 rounded-lg text-xs overflow-auto max-h-40"
//                       style={{
//                         backgroundColor: theme.card,
//                         color: theme.textSecondary,
//                       }}
//                     >
//                       {JSON.stringify(details, null, 2)}
//                     </pre>
//                   )}
//                 </div>
//               )}

//               <div className="mt-4">
//                 <h4
//                   className="text-sm font-semibold mb-2"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   Common Solutions:
//                 </h4>
//                 <ul className="space-y-2">
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>Try a simpler or more specific request</span>
//                   </li>
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>
//                       Check if your request has valid syntax and clear
//                       requirements
//                     </span>
//                   </li>
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>
//                       Try again with a different project type from the templates
//                     </span>
//                   </li>
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>
//                       Make sure the backend server is running properly
//                     </span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleNewChat}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <HiOutlinePlus className="text-base" />
//                   New Project
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => window.location.reload()}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                 >
//                   <HiOutlineRefresh className="text-base" />
//                   Refresh Page
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Diagnostic Display Component
//   const DiagnosticDisplay = ({ data, onClose, onFix }) => {
//     if (!data) return null;

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{
//           borderColor: theme.yellow + "40",
//           backgroundColor: theme.yellow + "10",
//         }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div
//             className="p-3 rounded-full flex-shrink-0"
//             style={{ backgroundColor: theme.yellow + "20" }}
//           >
//             <BsWrench className="text-2xl" style={{ color: theme.yellow }} />
//           </div>
//           <div className="flex-1">
//             <h3
//               className="text-lg font-semibold mb-2"
//               style={{ color: theme.yellow }}
//             >
//               Diagnostic Information
//             </h3>
//             <div className="space-y-3">
//               <pre
//                 className="p-3 rounded-lg text-xs overflow-auto max-h-96"
//                 style={{
//                   backgroundColor: theme.card,
//                   color: theme.textSecondary,
//                 }}
//               >
//                 {JSON.stringify(data, null, 2)}
//               </pre>

//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onFix}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <BsWrench className="text-base" />
//                   Fix localStorage
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onClose}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                 >
//                   <HiOutlineX className="text-base" />
//                   Close
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Get template for Sandpack
//   const getSandpackTemplate = () => {
//     // Check if it's a React project
//     if (
//       sandpackFiles["/src/App.jsx"] ||
//       sandpackFiles["/src/App.js"] ||
//       sandpackFiles["/src/main.jsx"]
//     ) {
//       return "react";
//     }
//     return "react"; // Default to react
//   };

//   // Get dependencies from package.json and ensure Tailwind is included
//   const getDependencies = () => {
//     const packageJsonFile = projectFiles?.find(
//       (f) =>
//         f.filename === "package.json" || f.filename === "frontend/package.json",
//     );
//     let dependencies = {};

//     if (packageJsonFile) {
//       try {
//         const cleanContent = cleanCodeContent(packageJsonFile.content);
//         const packageJson = JSON.parse(cleanContent);
//         dependencies = packageJson.dependencies || {};
//       } catch (e) {
//         console.error("Error parsing package.json", e);
//       }
//     }

//     // Ensure Tailwind dependencies are present
//     return {
//       ...dependencies,
//       react: dependencies.react || "^18.2.0",
//       "react-dom": dependencies["react-dom"] || "^18.2.0",
//       "react-router-dom": dependencies["react-router-dom"] || "^6.3.0",
//     };
//   };

//   // Prepare recent chats for sidebar with enhanced information
//   const recentChats = recentProjects.map((project) => {
//     let icon, color, title;

//     if (project.status === "processing") {
//       icon = <HiOutlineRefresh className="animate-spin" />;
//       color = theme.yellow;
//       title = project.title || "Processing...";
//     } else if (project.status === "failed") {
//       icon = <HiOutlineExclamation />;
//       color = theme.red;
//       title = "Failed Project";
//     } else if (project.status === "completed") {
//       icon = <HiOutlineCheckCircle />;
//       color = theme.green;
//       title = project.title || "Completed Project";
//     } else {
//       icon = <HiOutlineFolder />;
//       color = theme.textPrimary;
//       title = project.title || "Project";
//     }

//     // Create preview text without "frontend" word
//     let previewText = "";
//     if (project.status === "completed" && project.totalFiles) {
//       previewText = `${project.totalFiles} files total (${project.frontendFiles || 0} frontend, ${project.backendFiles || 0} backend)`;
//     } else if (project.prompt) {
//       previewText =
//         project.prompt.substring(0, 50) +
//         (project.prompt.length > 50 ? "..." : "");
//     } else {
//       previewText = project.preview || "No preview";
//     }

//     return {
//       id: project.id,
//       title: title,
//       preview: previewText,
//       time: project.timestamp,
//       icon: icon,
//       color: color,
//       jobId: project.id,
//       status: project.status,
//       prompt: project.prompt,
//       error: project.error,
//       totalFiles: project.totalFiles || 0,
//       frontendFiles: project.frontendFiles || 0,
//       backendFiles: project.backendFiles || 0,
//     };
//   });

//   return (
//     <div
//       className="h-screen w-full overflow-hidden transition-colors duration-300"
//       style={{ backgroundColor: theme.bg }}
//     >
//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile Sidebar */}
//       <motion.aside
//         initial={{ x: "-100%" }}
//         animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
//         transition={{ type: "tween", duration: 0.3 }}
//         className="fixed inset-y-0 left-0 w-[280px] z-50 lg:hidden shadow-xl overflow-y-auto"
//         style={{ backgroundColor: theme.sidebar }}
//       >
//         <SidebarContent
//           recentChats={recentChats}
//           templates={sidebarTemplates}
//           allTemplates={allTemplates}
//           onClose={() => setIsMobileMenuOpen(false)}
//           theme={theme}
//           hoveredChat={hoveredChat}
//           setHoveredChat={setHoveredChat}
//           onNewChat={handleNewChat}
//           onProjectClick={handleProjectClick}
//           onTemplateClick={handleTemplateClick}
//           currentTheme={currentTheme}
//           toggleTheme={toggleTheme}
//         />
//       </motion.aside>

//       {/* Desktop Layout */}
//       <div className="flex h-full w-full">
//         {/* Desktop Sidebar with Collapse Toggle */}
//         <motion.aside
//           animate={{ width: sidebarCollapsed ? 80 : 288 }}
//           className="hidden lg:block h-full border-r relative transition-all duration-300"
//           style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}
//         >
//           <button
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="absolute -right-3 top-20 z-10 p-1.5 rounded-full border shadow-lg"
//             style={{
//               backgroundColor: theme.card,
//               borderColor: theme.border,
//               color: theme.textPrimary,
//             }}
//           >
//             {sidebarCollapsed ? (
//               <HiOutlineChevronRight />
//             ) : (
//               <HiOutlineChevronLeft />
//             )}
//           </button>

//           {sidebarCollapsed ? (
//             <CollapsedSidebar
//               theme={theme}
//               onNewChat={handleNewChat}
//               recentChats={recentChats}
//               onProjectClick={handleProjectClick}
//             />
//           ) : (
//             <SidebarContent
//               recentChats={recentChats}
//               templates={sidebarTemplates}
//               allTemplates={allTemplates}
//               theme={theme}
//               hoveredChat={hoveredChat}
//               setHoveredChat={setHoveredChat}
//               onNewChat={handleNewChat}
//               onProjectClick={handleProjectClick}
//               onTemplateClick={handleTemplateClick}
//               currentTheme={currentTheme}
//               toggleTheme={toggleTheme}
//             />
//           )}
//         </motion.aside>

//         {/* Main Content */}
//         <main className="flex-1 h-full flex flex-col w-full min-w-0">
//           {/* Fixed Header */}
//           <div
//             className="flex-shrink-0 border-b w-full"
//             style={{
//               backgroundColor: theme.sidebar,
//               borderColor: theme.border,
//             }}
//           >
//             <div className="flex items-center justify-between px-4 py-3">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(true)}
//                   className="lg:hidden p-2 rounded-full"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                 >
//                   <HiOutlineMenu className="text-lg" />
//                 </button>
//                 <h2
//                   className="text-sm font-medium hidden sm:block"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   AI Developer Assistant
//                 </h2>
//                 {/* <button
//                   onClick={runDiagnostic}
//                   className="p-1.5 rounded-full text-xs"
//                   style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                   title="Run diagnostic"
//                 >
//                   <BsWrench className="text-sm" />
//                 </button> */}
//               </div>

//               <div className="flex items-center gap-2">
//                 {/* Theme Toggle Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={toggleTheme}
//                   className="p-2 rounded-full"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                   title={
//                     currentTheme === "dark"
//                       ? "Switch to Light Mode"
//                       : "Switch to Dark Mode"
//                   }
//                 >
//                   {currentTheme === "dark" ? (
//                     <HiOutlineSun className="text-lg" />
//                   ) : (
//                     <HiOutlineMoon className="text-lg" />
//                   )}
//                 </motion.button>

//                 {jobId && (
//                   <>
//                     <span
//                       className="text-xs px-2 py-1 rounded-full"
//                       style={{
//                         backgroundColor: theme.card,
//                         color: theme.textSecondary,
//                       }}
//                     >
//                       Job: {jobId.substring(0, 8)}...
//                     </span>
//                     {jobStatus === "processing" && isPollingActive && (
//                       <div className="flex items-center gap-1">
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: "linear",
//                           }}
//                         >
//                           <HiOutlineRefresh
//                             className="text-lg"
//                             style={{ color: theme.green }}
//                           />
//                         </motion.div>
//                         {pollingAttempts > 0 && (
//                           <span
//                             className="text-xs"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             {Math.floor(pollingAttempts * 2)}s
//                           </span>
//                         )}
//                       </div>
//                     )}
//                     {jobStatus === "completed" && (
//                       <span
//                         className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
//                         style={{
//                           backgroundColor: theme.green + "20",
//                           color: theme.green,
//                         }}
//                       >
//                         <HiOutlineCheckCircle className="text-xs" />
//                         Completed
//                       </span>
//                     )}
//                     {jobStatus === "failed" && (
//                       <span
//                         className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
//                         style={{
//                           backgroundColor: theme.red + "20",
//                           color: theme.red,
//                         }}
//                       >
//                         <HiOutlineExclamation className="text-xs" />
//                         Failed
//                       </span>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Two Column Layout - Messages 40% on left, Workspace 60% on right */}
//           <div className="flex-1 flex overflow-hidden">
//             {/* Left Column - Messages Area (40%) */}
//             <div
//               className={`${jobStatus === "completed" ? "w-2/5" : "w-full"} border-r overflow-hidden flex flex-col transition-all duration-300`}
//               style={{ borderColor: theme.border }}
//             >
//               <div
//                 className="p-3 border-b"
//                 style={{
//                   backgroundColor: theme.card,
//                   borderColor: theme.border,
//                 }}
//               >
//                 <h3
//                   className="text-xs font-semibold uppercase"
//                   style={{ color: theme.textSecondary }}
//                 >
//                   AI Conversation
//                 </h3>
//               </div>
//               <div
//                 ref={messagesContainerRef}
//                 className="flex-1 overflow-y-auto"
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 <div className="p-6">
//                   <div className="max-w-full mx-auto">
//                     {/* Timeout Warning Banner */}
//                     <AnimatePresence>
//                       {showTimeoutWarning &&
//                         jobStatus === "processing" &&
//                         !warningDismissed && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             className="mb-4 p-4 rounded-lg border"
//                             style={{
//                               backgroundColor: theme.yellow + "20",
//                               borderColor: theme.yellow,
//                             }}
//                           >
//                             <div className="flex items-start gap-3">
//                               <BsHourglassSplit
//                                 className="text-xl flex-shrink-0 animate-pulse"
//                                 style={{ color: theme.yellow }}
//                               />
//                               <div className="flex-1">
//                                 <h4
//                                   className="text-sm font-semibold"
//                                   style={{ color: theme.yellow }}
//                                 >
//                                   Taking longer than expected
//                                 </h4>
//                                 <p
//                                   className="text-xs mt-1"
//                                   style={{ color: theme.textSecondary }}
//                                 >
//                                   Your project is still being built. Complex
//                                   projects can take 2-5 minutes.
//                                 </p>
//                                 <div className="flex gap-2 mt-3">
//                                   <button
//                                     onClick={() => {
//                                       setWarningDismissed(true);
//                                       setShowTimeoutWarning(false);
//                                     }}
//                                     className="text-xs px-3 py-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: "transparent",
//                                       color: theme.textSecondary,
//                                       border: `1px solid ${theme.border}`,
//                                     }}
//                                   >
//                                     Dismiss
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </motion.div>
//                         )}
//                     </AnimatePresence>

//                     {/* Diagnostic Display */}
//                     {showDiagnostic && diagnosticData && (
//                       <DiagnosticDisplay
//                         data={diagnosticData}
//                         onClose={() => setShowDiagnostic(false)}
//                         onFix={fixLocalStorage}
//                       />
//                     )}

//                     <AnimatePresence mode="wait">
//                       {showHelp && messages.length === 0 ? (
//                         /* Help Section */
//                         <motion.div
//                           key="help"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <h2
//                             className="text-lg sm:text-xl font-semibold mb-2"
//                             style={{ color: theme.textPrimary }}
//                           >
//                             What would you like to build today?
//                           </h2>
//                           <p
//                             className="text-sm mb-6"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Ask me to build complete projects and get a VS
//                             Code-like environment!
//                           </p>

//                           {/* Project Templates - Show all 8 templates in help section */}
//                           <div className="mb-8">
//                             <h3
//                               className="text-sm font-semibold mb-2"
//                               style={{ color: theme.textPrimary }}
//                             >
//                               Popular Projects
//                             </h3>
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                               {allTemplates.map((template, index) => (
//                                 <motion.button
//                                   key={index}
//                                   whileHover={{ scale: 1.02 }}
//                                   whileTap={{ scale: 0.98 }}
//                                   className="text-white p-3 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all"
//                                   style={{ backgroundColor: template.bg }}
//                                   onClick={() =>
//                                     handleTemplateClick(template.name)
//                                   }
//                                 >
//                                   <span className="text-xl">
//                                     {template.icon}
//                                   </span>
//                                   <span className="text-xs font-medium text-center">
//                                     {template.name}
//                                   </span>
//                                 </motion.button>
//                               ))}
//                             </div>
//                           </div>
//                         </motion.div>
//                       ) : (
//                         /* Messages */
//                         <motion.div
//                           key="messages"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                         >
//                           {messages.map((msg, index) => (
//                             <motion.div
//                               key={msg.id}
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{
//                                 duration: 0.2,
//                                 delay: index * 0.05,
//                               }}
//                               className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//                             >
//                               <div
//                                 className={`max-w-[85%] rounded-2xl px-4 py-3 ${
//                                   msg.sender === "user"
//                                     ? "rounded-br-none"
//                                     : "rounded-bl-none"
//                                 }`}
//                                 style={{
//                                   backgroundColor:
//                                     msg.sender === "user"
//                                       ? theme.green
//                                       : theme.card,
//                                   color:
//                                     msg.sender === "user"
//                                       ? "#FFFFFF"
//                                       : theme.textPrimary,
//                                 }}
//                               >
//                                 {msg.sender === "ai" && (
//                                   <div className="flex items-center gap-2 mb-2">
//                                     <BsRobot className="text-xs" />
//                                     <span className="text-xs font-medium">
//                                       AI Developer Assistant
//                                     </span>
//                                   </div>
//                                 )}
//                                 <div className="text-sm whitespace-pre-wrap font-mono">
//                                   {msg.text}
//                                 </div>
//                                 <p className="text-xs mt-2 opacity-70 text-right">
//                                   {msg.timestamp}
//                                 </p>
//                               </div>
//                             </motion.div>
//                           ))}

//                           {/* Processing Animation */}
//                           {isProcessing &&
//                             jobStatus === "processing" &&
//                             !projectFiles &&
//                             isPollingActive && (
//                               <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 className="flex justify-center"
//                               >
//                                 <ProcessingAnimation />
//                               </motion.div>
//                             )}

//                           {/* Error Display for Failed Jobs */}
//                           {jobStatus === "failed" && jobErrorMessage && (
//                             <ErrorDisplay
//                               message={jobErrorMessage}
//                               details={jobErrorDetails}
//                             />
//                           )}

//                           {/* Typing indicator */}
//                           {isTyping && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               className="flex justify-start"
//                             >
//                               <div
//                                 className="rounded-2xl rounded-bl-none px-4 py-3"
//                                 style={{ backgroundColor: theme.card }}
//                               >
//                                 <div className="flex gap-1">
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{
//                                       duration: 0.6,
//                                       repeat: Infinity,
//                                     }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: theme.textSecondary,
//                                     }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{
//                                       duration: 0.6,
//                                       repeat: Infinity,
//                                       delay: 0.2,
//                                     }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: theme.textSecondary,
//                                     }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{
//                                       duration: 0.6,
//                                       repeat: Infinity,
//                                       delay: 0.4,
//                                     }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: theme.textSecondary,
//                                     }}
//                                   />
//                                 </div>
//                               </div>
//                             </motion.div>
//                           )}

//                           <div ref={messagesEndRef} />
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>

//               {/* Fixed Input Area for Messages */}
//               <div
//                 className="flex-shrink-0 border-t w-full p-3"
//                 style={{
//                   backgroundColor: theme.sidebar,
//                   borderColor: theme.border,
//                 }}
//               >
//                 <div className="max-w-full mx-auto">
//                   <div className="relative">
//                     <textarea
//                       ref={inputRef}
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Ask me to build any project..."
//                       className={`w-full pl-3 placeholder:text-xs pr-24 py-4 border rounded-md text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${
//                         inputError
//                           ? "border-red-500 focus:ring-red-500"
//                           : "focus:ring-[#22C55E]"
//                       }`}
//                       style={{
//                         backgroundColor: theme.inputBg,
//                         borderColor: inputError ? theme.red : theme.border,
//                         color: theme.textPrimary,
//                         minHeight: "70px",
//                         maxHeight: "160px",
//                         resize: "none",
//                       }}
//                       rows="2"
//                       onInput={(e) => {
//                         e.target.style.height = "auto";
//                         e.target.style.height =
//                           Math.min(e.target.scrollHeight, 150) + "px";
//                       }}
//                       disabled={isProcessing && jobStatus === "processing"}
//                     />
//                     <div className="absolute right-2 bottom-3 flex items-center gap-2">
//                       <button
//                         onClick={handleSendMessage}
//                         disabled={isProcessing && jobStatus === "processing"}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
//                         style={{
//                           backgroundColor:
//                             isProcessing && jobStatus === "processing"
//                               ? theme.textSecondary
//                               : theme.green,
//                         }}
//                         title={
//                           isProcessing
//                             ? "Currently building a project"
//                             : "Send message"
//                         }
//                       >
//                         <HiOutlinePaperAirplane className="text-sm" />
//                       </button>
//                       <button
//                         onClick={handleNewChat}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0"
//                         style={{ backgroundColor: theme.card }}
//                         title="Start new chat"
//                       >
//                         <HiOutlinePlus className="text-sm" />
//                       </button>
//                     </div>
//                   </div>
//                   {inputError && (
//                     <p className="text-xs mt-1 text-red-500">{inputError}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Workspace Area (60%) - Only show when status is completed */}
//             {jobStatus === "completed" && (
//               <div
//                 ref={workspaceRef}
//                 className="w-3/5 overflow-hidden flex flex-col transition-all duration-300"
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 {/* Workspace Header with View Toggles and Fullscreen */}
//                 <div
//                   className="p-3 border-b flex items-center justify-between"
//                   style={{
//                     backgroundColor: theme.card,
//                     borderColor: theme.border,
//                   }}
//                 >
//                   <div className="flex items-center gap-2">
//                     <h3
//                       className="text-xs font-semibold uppercase"
//                       style={{ color: theme.textSecondary }}
//                     >
//                       Project Workspace
//                     </h3>
//                     {downloadUrl && (
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handleDownload}
//                         className="flex items-center gap-1 px-2 py-1 rounded text-white text-xs"
//                         style={{ backgroundColor: theme.green }}
//                       >
//                         <HiOutlineDownload className="text-xs" />
//                         ZIP
//                       </motion.button>
//                     )}
//                     <button
//                       onClick={runDiagnostic}
//                       className="p-1.5 rounded-full text-xs"
//                       style={{
//                         backgroundColor: theme.card,
//                         color: theme.textSecondary,
//                       }}
//                       title="Run diagnostic"
//                     >
//                       <BsWrench className="text-sm" />
//                     </button>
//                   </div>

//                   {/* View Toggle Buttons - Only 2 options: Preview and Code */}
//                   {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                     <div className="flex items-center gap-2">
//                       <div
//                         className="flex items-center gap-1 rounded-lg p-1"
//                         style={{ backgroundColor: theme.card }}
//                       >
//                         <button
//                           onClick={() => setWorkspaceView("preview")}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === "preview"
//                               ? "bg-gray-700 text-white"
//                               : "text-gray-400 hover:text-white"
//                           }`}
//                           style={{
//                             backgroundColor:
//                               workspaceView === "preview"
//                                 ? theme.green + "40"
//                                 : "transparent",
//                             color:
//                               workspaceView === "preview"
//                                 ? theme.textPrimary
//                                 : theme.textSecondary,
//                           }}
//                           title="Preview View"
//                         >
//                           <BsEye className="text-sm inline mr-1" />
//                           Preview
//                         </button>
//                         <button
//                           onClick={() => setWorkspaceView("code")}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === "code"
//                               ? "bg-gray-700 text-white"
//                               : "text-gray-400 hover:text-white"
//                           }`}
//                           style={{
//                             backgroundColor:
//                               workspaceView === "code"
//                                 ? theme.green + "40"
//                                 : "transparent",
//                             color:
//                               workspaceView === "code"
//                                 ? theme.textPrimary
//                                 : theme.textSecondary,
//                           }}
//                           title="Code View"
//                         >
//                           <BsCodeSquare className="text-sm inline mr-1" />
//                           Code
//                         </button>
//                       </div>

//                       {/* Fullscreen Button */}
//                       <button
//                         onClick={toggleFullscreen}
//                         className="p-2 rounded-md transition-all"
//                         style={{
//                           backgroundColor: theme.card,
//                           color: theme.textSecondary,
//                         }}
//                         title={
//                           isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"
//                         }
//                       >
//                         <HiOutlineArrowsExpand className="text-sm" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Workspace Content - Full height for preview */}
//                 <div className="flex-1 overflow-hidden">
//                   {!showSandpack || Object.keys(sandpackFiles).length === 0 ? (
//                     <div className="h-full flex items-center justify-center flex-col gap-4">
//                       {jobStatus === "processing" ? (
//                         <ProcessingAnimation />
//                       ) : jobStatus === "failed" ? (
//                         <div className="text-center">
//                           <BsExclamationTriangle
//                             className="text-4xl mx-auto mb-3"
//                             style={{ color: theme.red }}
//                           />
//                           <p
//                             className="text-sm"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Project generation failed
//                           </p>
//                         </div>
//                       ) : (
//                         <div className="text-center">
//                           <HiOutlineCode
//                             className="text-4xl mx-auto mb-3"
//                             style={{ color: theme.textSecondary }}
//                           />
//                           <p
//                             className="text-sm"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Your project will appear here
//                           </p>
//                           <p
//                             className="text-xs mt-2"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Ask me to build something to get started
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div
//                       className="h-full overflow-hidden"
//                       style={{ backgroundColor: theme.sandpackBg }}
//                     >
//                       <SandpackProvider
//                         key={jobId || "sandpack-provider"}
//                         template={getSandpackTemplate()}
//                         theme={currentTheme === "dark" ? "dark" : "light"}
//                         files={sandpackFiles}
//                         customSetup={{
//                           dependencies: getDependencies(),
//                           entry: sandpackFiles["/src/index.js"]
//                             ? "/src/index.js"
//                             : sandpackFiles["/src/index.jsx"]
//                               ? "/src/index.jsx"
//                               : sandpackFiles["/src/main.jsx"]
//                                 ? "/src/main.jsx"
//                                 : "/src/index.js",
//                         }}
//                         options={{
//                           externalResources: ["https://cdn.tailwindcss.com"],
//                           visibleFiles: Object.keys(sandpackFiles),
//                           activeFile:
//                             Object.keys(sandpackFiles).find(
//                               (f) =>
//                                 f.includes("App.jsx") ||
//                                 f.includes("App.js") ||
//                                 f.includes("main.jsx"),
//                             ) || Object.keys(sandpackFiles)[0],
//                         }}
//                       >
//                         <SandpackLayout className="h-full">
//                           {workspaceView === "preview" && (
//                             /* Preview View - Full height preview with console at bottom */
//                             <div className="flex flex-col h-full w-full">
//                               {/* Preview (80%) */}
//                               <div
//                                 className="h-[80%] flex flex-col"
//                                 style={{ backgroundColor: theme.sandpackBg }}
//                               >
//                                 <div
//                                   className="px-3 py-2 text-xs border-b font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                                   PREVIEW
//                                 </div>
//                                 <div className="flex-1">
//                                   <SandpackPreview
//                                     showOpenInCodeSandbox={false}
//                                     showRefreshButton={true}
//                                     className="h-[70vh]"
//                                   />
//                                 </div>
//                               </div>

//                               {/* Console (20%) */}
//                               <div
//                                 className="h-[20%] border-t flex flex-col"
//                                 style={{ borderColor: theme.border }}
//                               >
//                                 <div
//                                   className="px-3 py-1 text-xs border-b font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                                   CONSOLE
//                                 </div>
//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackConsole />
//                                 </div>
//                               </div>
//                             </div>
//                           )}

//                           {workspaceView === "code" && (
//                             /* Code View - Full height with file explorer and editor */
//                             <div className="flex flex-row h-full w-full">
//                               {/* FILE EXPLORER (20%) */}
//                               <div
//                                 className="w-[20%] border-r flex flex-col h-full"
//                                 style={{
//                                   backgroundColor: theme.card,
//                                   borderColor: theme.border,
//                                 }}
//                               >
//                                 <div
//                                   className="px-3 py-2 text-xs border-b font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                                   EXPLORER
//                                 </div>

//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackFileExplorer
//                                     className="text-xs"
//                                     autoHiddenFiles={false}
//                                   />
//                                 </div>
//                               </div>
//                               {/* EDITOR (80%) */}
//                               <div
//                                 className="w-[80%] flex flex-col"
//                                 style={{ backgroundColor: theme.sandpackBg }}
//                               >
//                                 <div
//                                   className="px-3 py-2 text-xs border-b font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                                   EDITOR
//                                 </div>

//                                 <div className="flex-1">
//                                   <SandpackCodeEditor
//                                     showTabs
//                                     showLineNumbers
//                                     wrapContent={false}
//                                     closableTabs={false}
//                                     style={{
//                                       height: "100%",
//                                       overflow: "auto",
//                                     }}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </SandpackLayout>
//                       </SandpackProvider>
//                     </div>
//                   )}
//                 </div>

//                 {/* Workspace Footer */}
//                 {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                   <div
//                     className="px-4 py-2 text-xs border-t"
//                     style={{
//                       backgroundColor: theme.card,
//                       borderColor: theme.border,
//                       color: theme.textSecondary,
//                     }}
//                   >
//                     {Object.keys(sandpackFiles).length} files •{" "}
//                     {workspaceView === "preview"
//                       ? "Preview Mode"
//                       : "Code Editor Mode"}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// // Sidebar Component
// const SidebarContent = ({
//   recentChats,
//   templates,
//   allTemplates,
//   onClose,
//   theme,
//   hoveredChat,
//   setHoveredChat,
//   onNewChat,
//   onProjectClick,
//   onTemplateClick,
//   currentTheme,
//   toggleTheme,
// }) => {
//   return (
//     <div className="h-full flex flex-col">
//       {/* Header */}
//       <div
//         className="p-3 border-b flex-shrink-0"
//         style={{ borderColor: theme.border }}
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3 min-w-0">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
//               style={{
//                 background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})`,
//               }}
//             >
//               <img
//                 src="/EVA.png"
//                 alt="EVA"
//                 height={60}
//                 className="rounded-full"
//               />
//             </motion.div>
//             <div className="min-w-0">
//               <h1
//                 className="text-sm font-semibold truncate"
//                 style={{ color: theme.textPrimary }}
//               >
//                 EVA AI
//               </h1>
//               <p
//                 className="text-xs truncate"
//                 style={{ color: theme.textSecondary }}
//               >
//                 Full-Stack AI
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* Theme Toggle in Sidebar */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleTheme}
//               className="p-2 rounded-full"
//               style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//               title={
//                 currentTheme === "dark"
//                   ? "Switch to Light Mode"
//                   : "Switch to Dark Mode"
//               }
//             >
//               {currentTheme === "dark" ? (
//                 <HiOutlineSun className="text-sm" />
//               ) : (
//                 <HiOutlineMoon className="text-sm" />
//               )}
//             </motion.button>
//             {onClose && (
//               <motion.button
//                 whileHover={{ rotate: 90 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={onClose}
//                 className="lg:hidden p-2 rounded-full flex-shrink-0"
//                 style={{ backgroundColor: theme.card }}
//               >
//                 <HiOutlineX style={{ color: theme.textPrimary }} />
//               </motion.button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* New Chat Button */}
//       <div className="p-4 mx-3 flex-shrink-0">
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={onNewChat}
//           className="w-full py-2.5 px-4 text-white rounded-full text-xs font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
//           style={{ backgroundColor: theme.green }}
//         >
//           <HiOutlinePlus className="text-base" />
//           <span className="truncate">New Project</span>
//         </motion.button>
//       </div>

//       {/* Templates Section */}
//       <div className="px-3 mb-4">
//         <h2
//           className="text-xs font-semibold uppercase tracking-wider px-3 mb-2"
//           style={{ color: theme.textSecondary }}
//         >
//           Quick Templates
//         </h2>
//         <div className="grid grid-cols-2 gap-2">
//           {templates.map((template, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="p-2 rounded-lg text-xs text-white flex items-center justify-center gap-1.5"
//               style={{ backgroundColor: template.bg }}
//               onClick={() => onTemplateClick(template.name)}
//             >
//               <span className="text-sm">{template.icon}</span>
//               <span className="truncate">{template.name}</span>
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Recent Projects Section */}
//       <div className="flex-1 px-3 overflow-y-auto no-scrollbar min-h-72">
//         <h2
//           className="text-xs font-semibold uppercase tracking-wider px-3 mb-2"
//           style={{ color: theme.textSecondary }}
//         >
//           Recent Projects
//         </h2>
//         <div className="space-y-1 pb-4">
//           {recentChats.length > 0 ? (
//             recentChats.map((chat) => (
//               <motion.div
//                 key={chat.id}
//                 whileHover={{ x: 4 }}
//                 className="flex items-start gap-3 p-3 rounded-xl cursor-pointer group"
//                 style={{
//                   backgroundColor:
//                     hoveredChat === chat.id ? theme.hover : "transparent",
//                   opacity: chat.status === "processing" ? 0.8 : 1,
//                 }}
//                 onMouseEnter={() => setHoveredChat(chat.id)}
//                 onMouseLeave={() => setHoveredChat(null)}
//                 onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//               >
//                 <div
//                   className="p-2 rounded-full flex-shrink-0"
//                   style={{ backgroundColor: theme.iconBg }}
//                 >
//                   <span style={{ color: chat.color }} className="text-sm">
//                     {chat.icon}
//                   </span>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between gap-2">
//                     <h4
//                       className="text-sm font-medium truncate"
//                       style={{ color: theme.textPrimary }}
//                     >
//                       {chat.title}
//                     </h4>
//                     <span
//                       className="text-xs flex-shrink-0"
//                       style={{ color: theme.textSecondary }}
//                     >
//                       {chat.time}
//                     </span>
//                   </div>
//                   <p
//                     className="text-xs truncate"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     {chat.preview}
//                   </p>
//                   {chat.status === "processing" && (
//                     <span
//                       className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
//                       style={{
//                         backgroundColor: theme.yellow + "20",
//                         color: theme.yellow,
//                       }}
//                     >
//                       Processing...
//                     </span>
//                   )}
//                   {chat.status === "completed" && (
//                     <span
//                       className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
//                       style={{
//                         backgroundColor: theme.green + "20",
//                         color: theme.green,
//                       }}
//                     >
//                       Completed
//                     </span>
//                   )}
//                   {chat.status === "failed" && (
//                     <span
//                       className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
//                       style={{
//                         backgroundColor: theme.red + "20",
//                         color: theme.red,
//                       }}
//                     >
//                       Failed
//                     </span>
//                   )}
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div
//               className="text-center py-8"
//               style={{ color: theme.textSecondary }}
//             >
//               <p className="text-xs">No recent projects</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Collapsed Sidebar Component
// const CollapsedSidebar = ({
//   theme,
//   onNewChat,
//   recentChats,
//   onProjectClick,
// }) => {
//   return (
//     <div className="h-full flex flex-col items-center py-3">
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md mb-6 cursor-pointer"
//         style={{
//           background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})`,
//         }}
//         onClick={onNewChat}
//         title="New Project"
//       >
//         <HiOutlinePlus className="text-white text-lg" />
//       </motion.div>

//       <div className="flex-1 w-full px-2">
//         {recentChats.slice(0, 5).map((chat) => (
//           <motion.div
//             key={chat.id}
//             whileHover={{ scale: 1.05 }}
//             className="w-full flex justify-center mb-2 cursor-pointer relative"
//             onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//             title={`${chat.title} - ${chat.status}`}
//           >
//             <div
//               className="p-2 rounded-lg"
//               style={{ backgroundColor: theme.card }}
//             >
//               <span style={{ color: chat.color }} className="text-lg">
//                 {chat.icon}
//               </span>
//             </div>
//             {chat.status === "processing" && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
//             )}
//             {chat.status === "failed" && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;



// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "motion/react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import {
//   SandpackProvider,
//   SandpackLayout,
//   SandpackCodeEditor,
//   SandpackPreview,
//   SandpackConsole,
//   SandpackFileExplorer,
// } from "@codesandbox/sandpack-react";
// import {
//   HiOutlineChat,
//   HiOutlinePlus,
//   HiOutlineX,
//   HiOutlinePaperAirplane,
//   HiOutlineShoppingCart,
//   HiOutlineUserGroup,
//   HiOutlineVideoCamera,
//   HiOutlinePhotograph,
//   HiOutlineLocationMarker,
//   HiOutlineMap,
//   HiOutlineCode,
//   HiOutlineDownload,
//   HiOutlineFolder,
//   HiOutlineCheckCircle,
//   HiOutlineRefresh,
//   HiOutlineFolderOpen,
//   HiOutlineChevronLeft,
//   HiOutlineChevronRight,
//   HiOutlineExclamation,
//   HiOutlineMenu,
//   HiOutlineEye,
//   HiOutlineCog,
//   HiOutlineArrowsExpand,
//   HiOutlineSun,
//   HiOutlineMoon,
// } from "react-icons/hi";
// import {
//   BsRobot,
//   BsHourglassSplit,
//   BsExclamationTriangle,
//   BsBug,
//   BsWrench,
//   BsCodeSquare,
//   BsEye,
// } from "react-icons/bs";

// const API_BASE_URL = "http://127.0.0.1:8000";

// // Storage keys
// const STORAGE_KEY = "ai_projects";
// const THEME_KEY = "ai_theme";

// // Theme definitions
// const themes = {
//   dark: {
//     bg: "#0B0F0E",
//     sidebar: "#111413",
//     card: "#151918",
//     border: "#1F2A27",
//     green: "#22C55E",
//     greenSoft: "#16A34A",
//     textPrimary: "#E5E7EB",
//     textSecondary: "#9CA3AF",
//     inputBg: "#1A1F1D",
//     yellow: "#EAB308",
//     orange: "#F97316",
//     red: "#EF4444",
//     hover: "#1F2A27",
//     iconBg: "#1A1F1D",
//     sandpackBg: "#1e1e1e",
//   },
//   light: {
//     bg: "#F9FAFB",
//     sidebar: "#FFFFFF",
//     card: "#F3F4F6",
//     border: "#E5E7EB",
//     green: "#22C55E",
//     greenSoft: "#16A34A",
//     textPrimary: "#111827",
//     textSecondary: "#6B7280",
//     inputBg: "#FFFFFF",
//     yellow: "#EAB308",
//     orange: "#F97316",
//     red: "#EF4444",
//     hover: "#F3F4F6",
//     iconBg: "#F3F4F6",
//     sandpackBg: "#FFFFFF",
//   },
// };

// const Home = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [hoveredChat, setHoveredChat] = useState(null);
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [showHelp, setShowHelp] = useState(true);
//   const [isTyping, setIsTyping] = useState(false);

//   // Theme State
//   const [currentTheme, setCurrentTheme] = useState("dark");
//   const theme = themes[currentTheme];

//   // API States
//   const [isProcessing, setIsProcessing] = useState(false);
//   const [jobStatus, setJobStatus] = useState(null);
//   const [jobId, setJobId] = useState(null);
//   const [projectFiles, setProjectFiles] = useState(null);
//   const [downloadUrl, setDownloadUrl] = useState(null);
//   const [recentProjects, setRecentProjects] = useState([]);
//   const [pollingAttempts, setPollingAttempts] = useState(0);
//   const [showTimeoutWarning, setShowTimeoutWarning] = useState(false);
//   const [warningDismissed, setWarningDismissed] = useState(false);
//   const [inputError, setInputError] = useState("");
//   const [isPollingActive, setIsPollingActive] = useState(false);
//   const [jobErrorMessage, setJobErrorMessage] = useState("");
//   const [jobErrorDetails, setJobErrorDetails] = useState(null);
//   const [initialLoadDone, setInitialLoadDone] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [showDiagnostic, setShowDiagnostic] = useState(false);
//   const [diagnosticData, setDiagnosticData] = useState(null);

//   // Sandpack Files
//   const [sandpackFiles, setSandpackFiles] = useState({});
//   const [showSandpack, setShowSandpack] = useState(false);

//   // Sidebar State
//   const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

//   // View Toggle State (preview/code)
//   const [workspaceView, setWorkspaceView] = useState("preview");

//   // Fullscreen State
//   const [isFullscreen, setIsFullscreen] = useState(false);

//   const messagesEndRef = useRef(null);
//   const messagesContainerRef = useRef(null);
//   const inputRef = useRef(null);
//   const workspaceRef = useRef(null);

//   // Refs for polling management
//   const pollingIntervalRef = useRef(null);
//   const currentJobIdRef = useRef(null);
//   const isPollingRef = useRef(false);
//   const abortControllerRef = useRef(null);

//   // All 8 templates available
//   const allTemplates = [
//     { name: "Education ERP", icon: <HiOutlineCode />, bg: theme.green },
//     { name: "E-commerce", icon: <HiOutlineShoppingCart />, bg: theme.green },
//     { name: "Social Media", icon: <HiOutlineUserGroup />, bg: theme.green },
//     { name: "Chat App", icon: <HiOutlineChat />, bg: theme.green },
//     { name: "Video App", icon: <HiOutlineVideoCamera />, bg: theme.green },
//     { name: "Music App", icon: <HiOutlinePhotograph />, bg: theme.green },
//     { name: "Food App", icon: <HiOutlineLocationMarker />, bg: theme.green },
//     { name: "Travel App", icon: <HiOutlineMap />, bg: theme.green },
//   ];

//   // Only show 4 templates in sidebar
//   const sidebarTemplates = allTemplates.slice(0, 4);

//   // Load theme from localStorage on mount
//   useEffect(() => {
//     const savedTheme = localStorage.getItem(THEME_KEY);
//     if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
//       setCurrentTheme(savedTheme);
//     }
//   }, []);

//   // Toggle theme function
//   const toggleTheme = () => {
//     const newTheme = currentTheme === "dark" ? "light" : "dark";
//     setCurrentTheme(newTheme);
//     localStorage.setItem(THEME_KEY, newTheme);
//   };

//   // Clean code content from markdown code blocks
//   const cleanCodeContent = (content) => {
//     const codeBlockRegex = /```[a-z]*\n([\s\S]*?)```/g;
//     const match = codeBlockRegex.exec(content);

//     let cleaned = match ? match[1].trim() : content;

//     // Remove Tailwind build directives (for Sandpack preview)
//     cleaned = cleaned
//       .replace(/@tailwind base;/g, "")
//       .replace(/@tailwind components;/g, "")
//       .replace(/@tailwind utilities;/g, "");

//     return cleaned;
//   };

//   // Convert API files to Sandpack format with Tailwind support
//   const convertToSandpackFiles = (files) => {
//     const sandpackFiles = {};

//     files.forEach((file) => {
//       // Skip backend files for preview
//       if (file.filename.startsWith("backend/")) {
//         return;
//       }

//       // Handle frontend files
//       let filename = file.filename;
//       if (filename.startsWith("frontend/")) {
//         filename = filename.replace("frontend/", "");
//       }

//       // Only include relevant frontend files
//       if (
//         filename.startsWith("src/") ||
//         filename === "index.html" ||
//         filename === "package.json" ||
//         filename === "vite.config.js" ||
//         filename === "postcss.config.js" ||
//         filename === "tailwind.config.js"
//       ) {
//         // Clean the content from markdown code blocks
//         let cleanContent = cleanCodeContent(file.content);

//         // Map the file path correctly
//         let sandpackPath = filename;
//         if (sandpackPath === "index.html") {
//           sandpackPath = "/index.html";
//         } else if (!sandpackPath.startsWith("/")) {
//           sandpackPath = "/" + sandpackPath;
//         }

//         sandpackFiles[sandpackPath] = {
//           code: cleanContent,
//         };
//       }
//     });

//     // Ensure there's an entry file
//     if (
//       !sandpackFiles["/src/index.js"] &&
//       !sandpackFiles["/src/index.jsx"] &&
//       !sandpackFiles["/src/main.jsx"]
//     ) {
//       sandpackFiles["/src/main.jsx"] = {
//         code: `import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )`,
//       };
//     }

//     // Ensure App.jsx exists
//     if (!sandpackFiles["/src/App.jsx"] && !sandpackFiles["/src/App.js"]) {
//       sandpackFiles["/src/App.jsx"] = {
//         code: `import React from 'react'

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <h1 className="text-3xl font-bold text-gray-800">Welcome to Your App</h1>
//     </div>
//   )
// }`,
//       };
//     }

//     // Ensure index.css exists with Tailwind directives
//     if (!sandpackFiles["/src/index.css"]) {
//       sandpackFiles["/src/index.css"] = {
//         code: `@tailwind base;
// @tailwind components;
// @tailwind utilities;`,
//       };
//     }

//     // Ensure tailwind.config.js exists
//     if (!sandpackFiles["/tailwind.config.js"]) {
//       sandpackFiles["/tailwind.config.js"] = {
//         code: `/** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }`,
//       };
//     }

//     // Ensure postcss.config.js exists
//     if (!sandpackFiles["/postcss.config.js"]) {
//       sandpackFiles["/postcss.config.js"] = {
//         code: `export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// }`,
//       };
//     }

//     return sandpackFiles;
//   };

//   // Auto-scroll to bottom when messages change
//   useEffect(() => {
//     scrollToBottom();
//   }, [messages, jobId, projectFiles]);

//   // Auto-show Sandpack when files are ready
//   useEffect(() => {
//     if (
//       jobStatus === "completed" &&
//       projectFiles &&
//       Object.keys(sandpackFiles).length > 0
//     ) {
//       setShowSandpack(true);
//     }
//   }, [jobStatus, projectFiles, sandpackFiles]);

//   const scrollToBottom = () => {
//     setTimeout(() => {
//       if (messagesEndRef.current) {
//         messagesEndRef.current.scrollIntoView({
//           behavior: "smooth",
//           block: "end",
//         });
//       }
//     }, 100);
//   };

//   // Load recent projects from localStorage on mount
//   useEffect(() => {
//     loadRecentProjects();
//   }, []);

//   // Handle URL parameter on mount and when it changes
//   useEffect(() => {
//     const projectId = searchParams.get("project");

//     if (projectId && !isLoading) {
//       // Clear current state before loading new project
//       setMessages([]);
//       setShowHelp(false);
//       setProjectFiles(null);
//       setSandpackFiles({});
//       setShowSandpack(false);
//       setJobStatus(null);
//       setJobErrorMessage("");
//       setJobErrorDetails(null);

//       // Load the project
//       setTimeout(() => {
//         loadProject(projectId);
//       }, 100);
//     } else if (!projectId && !initialLoadDone) {
//       setShowHelp(true);
//       setInitialLoadDone(true);
//     }
//   }, [searchParams]);

//   // Cleanup polling on unmount
//   useEffect(() => {
//     return () => {
//       stopPolling();
//     };
//   }, []);

//   // Handle fullscreen toggle
//   const toggleFullscreen = () => {
//     if (!isFullscreen) {
//       if (workspaceRef.current.requestFullscreen) {
//         workspaceRef.current.requestFullscreen();
//       }
//     } else {
//       if (document.exitFullscreen) {
//         document.exitFullscreen();
//       }
//     }
//     setIsFullscreen(!isFullscreen);
//   };

//   // Listen for fullscreen change events
//   useEffect(() => {
//     const handleFullscreenChange = () => {
//       setIsFullscreen(!!document.fullscreenElement);
//     };

//     document.addEventListener("fullscreenchange", handleFullscreenChange);
//     return () => {
//       document.removeEventListener("fullscreenchange", handleFullscreenChange);
//     };
//   }, []);

//   // Diagnostic function to check localStorage
//   const runDiagnostic = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       const data = {
//         exists: !!stored,
//         raw: stored,
//         parsed: null,
//         currentProject: jobId,
//         projectData: null,
//       };

//       if (stored) {
//         try {
//           data.parsed = JSON.parse(stored);
//           if (jobId) {
//             data.projectData = data.parsed.find((p) => p.id === jobId);
//           }
//         } catch (e) {
//           data.parseError = e.message;
//         }
//       }

//       setDiagnosticData(data);
//       setShowDiagnostic(true);
//     } catch (e) {
//       console.error("Diagnostic error:", e);
//     }
//   };

//   // Fix localStorage data
//   const fixLocalStorage = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);

//         // Fix any projects with missing fields
//         const fixed = projects.map((p) => {
//           if (!p.messages) p.messages = [];
//           if (!p.error && p.status === "failed") {
//             p.error = "Unknown error";
//             p.errorDetails = { message: "Unknown error" };
//           }
//           if (!p.preview) {
//             p.preview =
//               p.status === "failed"
//                 ? "Generation failed"
//                 : p.status === "processing"
//                   ? "Processing..."
//                   : "No preview";
//           }
//           if (!p.prompt) p.prompt = "Unknown prompt";
//           if (!p.totalFiles) p.totalFiles = p.files ? p.files.length : 0;
//           return p;
//         });

//         localStorage.setItem(STORAGE_KEY, JSON.stringify(fixed));
//         setRecentProjects(fixed);

//         // Reload current project if any
//         if (jobId) {
//           loadProject(jobId);
//         }
//       }
//     } catch (e) {
//       console.error("Fix error:", e);
//     }
//   };

//   const loadRecentProjects = () => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         setRecentProjects(projects);
//       }
//     } catch (e) {
//       console.error("Error parsing stored projects", e);
//     }
//   };

//   // Save project to localStorage
//   const saveProjectToStorage = (id, files, conversation, prompt = "") => {
//     try {
//       const packageJson = files.find(
//         (f) =>
//           f.filename === "package.json" ||
//           f.filename === "frontend/package.json",
//       );
//       let projectName = "Project";
//       if (packageJson) {
//         try {
//           const parsed = JSON.parse(packageJson.content);
//           projectName = parsed.name || projectName;
//         } catch (e) {
//           console.error("Error parsing package.json", e);
//         }
//       }

//       // Count frontend and backend files
//       const frontendFiles = files.filter(
//         (f) =>
//           f.filename.startsWith("frontend/") ||
//           !f.filename.startsWith("backend/"),
//       ).length;
//       const backendFiles = files.filter((f) =>
//         f.filename.startsWith("backend/"),
//       ).length;

//       const projectInfo = {
//         id: id,
//         title: projectName,
//         timestamp: new Date().toLocaleString(),
//         preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
//         files: files,
//         messages: conversation,
//         prompt:
//           prompt ||
//           conversation.find((m) => m.sender === "user")?.text ||
//           "Project generation",
//         status: "completed",
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null,
//         totalFiles: files.length,
//         frontendFiles: frontendFiles,
//         backendFiles: backendFiles,
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error("Error parsing stored projects", e);
//         }
//       }

//       const updated = [
//         projectInfo,
//         ...existingProjects.filter((p) => p.id !== id),
//       ].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);

//       return updated;
//     } catch (error) {
//       console.error("Error saving project:", error);
//       return [];
//     }
//   };

//   // Save pending job to localStorage
//   const savePendingJob = (id, prompt) => {
//     try {
//       const pendingProject = {
//         id: id,
//         title: "Processing...",
//         timestamp: new Date().toLocaleString(),
//         preview: `Building: "${prompt.substring(0, 50)}${prompt.length > 50 ? "..." : ""}"`,
//         files: null,
//         messages: [],
//         prompt: prompt,
//         status: "processing",
//         createdAt: new Date().toISOString(),
//         error: null,
//         errorDetails: null,
//         totalFiles: 0,
//         frontendFiles: 0,
//         backendFiles: 0,
//       };

//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error("Error parsing stored projects", e);
//         }
//       }

//       const updated = [
//         pendingProject,
//         ...existingProjects.filter((p) => p.id !== id),
//       ].slice(0, 20);
//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);

//       return updated;
//     } catch (error) {
//       console.error("Error saving pending job:", error);
//       return [];
//     }
//   };

//   // Update project status in localStorage
//   const updateProjectStatus = (
//     id,
//     status,
//     files = null,
//     messages = [],
//     errorDetails = null,
//     prompt = "",
//   ) => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       let existingProjects = [];
//       if (stored) {
//         try {
//           existingProjects = JSON.parse(stored);
//         } catch (e) {
//           console.error("Error parsing stored projects", e);
//         }
//       }

//       const updated = existingProjects.map((project) => {
//         if (project.id === id) {
//           if (status === "completed" && files) {
//             const packageJson = files.find(
//               (f) =>
//                 f.filename === "package.json" ||
//                 f.filename === "frontend/package.json",
//             );
//             let projectName = "Project";
//             if (packageJson) {
//               try {
//                 const parsed = JSON.parse(packageJson.content);
//                 projectName = parsed.name || projectName;
//               } catch (e) {
//                 console.error("Error parsing package.json", e);
//               }
//             }

//             // Count frontend and backend files
//             const frontendFiles = files.filter(
//               (f) =>
//                 f.filename.startsWith("frontend/") ||
//                 !f.filename.startsWith("backend/"),
//             ).length;
//             const backendFiles = files.filter((f) =>
//               f.filename.startsWith("backend/"),
//             ).length;

//             return {
//               ...project,
//               title: projectName,
//               status: "completed",
//               files: files,
//               messages: messages,
//               preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
//               error: null,
//               errorDetails: null,
//               prompt: prompt || project.prompt,
//               totalFiles: files.length,
//               frontendFiles: frontendFiles,
//               backendFiles: backendFiles,
//             };
//           } else if (status === "failed") {
//             return {
//               ...project,
//               status: "failed",
//               title: "Failed Project",
//               preview: "Generation failed",
//               files: null,
//               messages: messages,
//               error: errorDetails?.message || "Unknown error",
//               errorDetails: errorDetails,
//               prompt: prompt || project.prompt,
//             };
//           } else {
//             return {
//               ...project,
//               status: status,
//               messages: messages,
//             };
//           }
//         }
//         return project;
//       });

//       localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//       setRecentProjects(updated);

//       return updated;
//     } catch (error) {
//       console.error("Error updating project status:", error);
//       return [];
//     }
//   };

//   // Get project by ID from localStorage
//   const getProjectById = (id) => {
//     try {
//       const stored = localStorage.getItem(STORAGE_KEY);
//       if (stored) {
//         const projects = JSON.parse(stored);
//         const project = projects.find((p) => p.id === id);
//         return project;
//       }
//     } catch (e) {
//       console.error("Error parsing stored projects", e);
//     }
//     return null;
//   };

//   // Stop polling function
//   const stopPolling = () => {
//     if (pollingIntervalRef.current) {
//       clearInterval(pollingIntervalRef.current);
//       pollingIntervalRef.current = null;
//     }

//     if (abortControllerRef.current) {
//       abortControllerRef.current.abort();
//       abortControllerRef.current = null;
//     }

//     isPollingRef.current = false;
//     setIsPollingActive(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//   };

//   // Check if response is for current job
//   const isResponseForCurrentJob = (id) => {
//     return id === currentJobIdRef.current;
//   };

//   // Poll status function
//   const pollStatus = async (id) => {
//     if (!isPollingRef.current || !isResponseForCurrentJob(id)) {
//       return;
//     }

//     try {
//       setPollingAttempts((prev) => prev + 1);

//       const response = await axios.get(`${API_BASE_URL}/status/${id}`, {
//         timeout: 10000,
//         signal: abortControllerRef.current?.signal,
//       });

//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }

//       if (response.data.status === "completed") {
//         stopPolling();

//         const resultResponse = await axios.get(`${API_BASE_URL}/result/${id}`, {
//           signal: abortControllerRef.current?.signal,
//         });

//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }

//         setProjectFiles(resultResponse.data.files);
//         setDownloadUrl(`${API_BASE_URL}/download/${id}`);

//         // Convert to Sandpack format
//         const sandpackFiles = convertToSandpackFiles(resultResponse.data.files);
//         setSandpackFiles(sandpackFiles);
//         setShowSandpack(true);

//         setJobStatus("completed");
//         setIsProcessing(false);

//         const packageJson = resultResponse.data.files.find(
//           (f) =>
//             f.filename === "package.json" ||
//             f.filename === "frontend/package.json",
//         );
//         let projectName = "Project";
//         if (packageJson) {
//           try {
//             const parsed = JSON.parse(packageJson.content);
//             projectName = parsed.name || projectName;
//           } catch (e) {
//             console.error("Error parsing package.json", e);
//           }
//         }

//         // Count frontend and backend files
//         const frontendFiles = resultResponse.data.files.filter(
//           (f) =>
//             f.filename.startsWith("frontend/") ||
//             !f.filename.startsWith("backend/"),
//         ).length;
//         const backendFiles = resultResponse.data.files.filter((f) =>
//           f.filename.startsWith("backend/"),
//         ).length;

//         const successMessage = {
//           id: Date.now(),
//           text: `✅ **Project Generated Successfully!**
          
// I've created a complete ${projectName} project with ${resultResponse.data.files.length} files.

// **Quick Stats:**
// - Total Files: ${resultResponse.data.files.length}
// - Frontend Files: ${frontendFiles}
// - Backend Files: ${backendFiles}

// You can now browse, edit, and preview the code below!`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         const allMessages = [...messages, successMessage];
//         setMessages(allMessages);

//         // Get the original prompt from messages
//         const userPrompt =
//           messages.find((m) => m.sender === "user")?.text || "";
//         saveProjectToStorage(
//           id,
//           resultResponse.data.files,
//           allMessages,
//           userPrompt,
//         );

//         scrollToBottom();
//       } else if (response.data.status === "failed") {
//         if (!isResponseForCurrentJob(id)) {
//           return;
//         }

//         stopPolling();
//         setJobStatus("failed");
//         setIsProcessing(false);

//         // Extract error message from response
//         const errorMsg =
//           response.data.error?.message ||
//           "Unknown error occurred during project generation";
//         const errorDetails = response.data.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);

//         // Add detailed error message to chat
//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Generation Failed**

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Possible reasons:**
// - The AI couldn't generate valid code for your request
// - The request contained invalid syntax or requirements
// - There was a server-side processing error
// - The prompt was too complex or ambiguous

// **Suggestions:**
// - Try a simpler and more specific request
// - Check for any syntax errors in your prompt
// - Try one of the template projects first
// - Make sure your request includes specific features

// Click "New Project" to try again.`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);

//         // Get the original prompt
//         const userPrompt =
//           messages.find((m) => m.sender === "user")?.text || "";
//         updateProjectStatus(
//           id,
//           "failed",
//           null,
//           allMessages,
//           errorDetails,
//           userPrompt,
//         );

//         scrollToBottom();
//       } else if (
//         response.data.status === "processing" ||
//         response.data.status === "running"
//       ) {
//         setJobStatus("processing");
//         updateProjectStatus(id, "processing");
//       }

//       if (
//         isResponseForCurrentJob(id) &&
//         pollingAttempts >= 60 &&
//         !showTimeoutWarning &&
//         !warningDismissed
//       ) {
//         setShowTimeoutWarning(true);
//       }
//     } catch (error) {
//       if (!isResponseForCurrentJob(id)) {
//         return;
//       }

//       if (
//         axios.isCancel(error) ||
//         error.name === "AbortError" ||
//         error.code === "ERR_CANCELED"
//       ) {
//         return;
//       }

//       console.error("Status check error:", error);

//       // Handle network errors
//       if (pollingAttempts > 10) {
//         stopPolling();
//         setJobStatus("failed");
//         setIsProcessing(false);
//         setJobErrorMessage(error.message);
//         setJobErrorDetails({ type: "network_error", message: error.message });

//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Connection Error**

// Unable to reach the server. Please check:

// - The backend server is running at ${API_BASE_URL}
// - Your internet connection
// - No firewall blocking the connection

// **Error details:** ${error.message}

// **Technical Details:**
// \`\`\`
// Type: Network Error
// Code: ${error.code || "N/A"}
// Status: ${error.response?.status || "N/A"}
// \`\`\`

// **Solutions:**
// 1. Start the backend server with: \`uvicorn main:app --reload\`
// 2. Check if the server is running on port 8000
// 3. Disable any firewall temporarily
// 4. Try refreshing the page`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         const allMessages = [...messages, errorMessage];
//         setMessages(allMessages);

//         // Get the original prompt
//         const userPrompt =
//           messages.find((m) => m.sender === "user")?.text || "";
//         updateProjectStatus(
//           id,
//           "failed",
//           null,
//           allMessages,
//           { type: "network_error", message: error.message },
//           userPrompt,
//         );

//         scrollToBottom();
//       }
//     }
//   };

//   // Start continuous polling
//   const startPolling = (id) => {
//     stopPolling();

//     currentJobIdRef.current = id;
//     setJobId(id);
//     setJobStatus("processing");
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);

//     isPollingRef.current = true;
//     setIsPollingActive(true);

//     abortControllerRef.current = new AbortController();

//     pollStatus(id);

//     pollingIntervalRef.current = setInterval(() => {
//       if (isPollingRef.current && isResponseForCurrentJob(id)) {
//         pollStatus(id);
//       }
//     }, 2000);
//   };

//   // Load project from localStorage or API
//   const loadProject = async (id) => {
//     // Prevent multiple loads
//     if (!id || id === "null" || id === "undefined") {
//       setShowHelp(true);
//       setIsLoading(false);
//       setIsProcessing(false);
//       return;
//     }

//     setIsLoading(true);
//     stopPolling();

//     setJobId(id);
//     setIsProcessing(false);
//     setShowHelp(false);
//     setJobStatus("loading");
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);
//     setShowSandpack(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     currentJobIdRef.current = id;

//     try {
//       // FIRST: Check API for current status
//       let apiStatus = null;
//       let apiError = null;

//       try {
//         const statusResponse = await axios.get(`${API_BASE_URL}/status/${id}`);
//         apiStatus = statusResponse.data;
//       } catch (apiErr) {
//         apiError = apiErr;
//       }

//       // SECOND: Check localStorage
//       const project = getProjectById(id);

//       // PRIORITY 1: If API says completed, use API data
//       if (apiStatus && apiStatus.status === "completed") {
//         try {
//           const resultResponse = await axios.get(
//             `${API_BASE_URL}/result/${id}`,
//           );
//           setProjectFiles(resultResponse.data.files);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);

//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(
//             resultResponse.data.files,
//           );
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);

//           setJobStatus("completed");

//           const packageJson = resultResponse.data.files.find(
//             (f) =>
//               f.filename === "package.json" ||
//               f.filename === "frontend/package.json",
//           );
//           let projectName = "Project";
//           if (packageJson) {
//             try {
//               const parsed = JSON.parse(packageJson.content);
//               projectName = parsed.name || projectName;
//             } catch (e) {
//               console.error("Error parsing package.json", e);
//             }
//           }

//           // Count frontend and backend files
//           const frontendFiles = resultResponse.data.files.filter(
//             (f) =>
//               f.filename.startsWith("frontend/") ||
//               !f.filename.startsWith("backend/"),
//           ).length;
//           const backendFiles = resultResponse.data.files.filter((f) =>
//             f.filename.startsWith("backend/"),
//           ).length;

//           const successMessage = {
//             id: Date.now(),
//             text: `✅ **Project Loaded Successfully!**
            
// Loaded ${projectName} with ${resultResponse.data.files.length} files.

// **Quick Stats:**
// - Total Files: ${resultResponse.data.files.length}
// - Frontend Files: ${frontendFiles}
// - Backend Files: ${backendFiles}

// You can now browse, edit, and preview the code below!`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages([successMessage]);

//           // Get prompt from localStorage if available
//           const userPrompt = project?.prompt || "";
//           saveProjectToStorage(
//             id,
//             resultResponse.data.files,
//             [successMessage],
//             userPrompt,
//           );
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } catch (resultErr) {
//           // Fall through to other options
//         }
//       }

//       // PRIORITY 2: If API says processing
//       if (
//         apiStatus &&
//         (apiStatus.status === "processing" || apiStatus.status === "running")
//       ) {
//         setJobStatus("processing");
//         setIsProcessing(true);
//         setIsLoading(false);

//         // Use messages from localStorage if available
//         if (project && project.messages) {
//           setMessages(project.messages);
//         } else {
//           const processingMessage = {
//             id: Date.now(),
//             text: `🔄 **Project is still processing...**

// Job ID: ${id}

// The project is still being built. This may take a few moments.

// I'll update you when it's ready!`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };
//           setMessages([processingMessage]);
//         }

//         startPolling(id);
//         return;
//       }

//       // PRIORITY 3: If API says failed
//       if (apiStatus && apiStatus.status === "failed") {
//         setJobStatus("failed");

//         const errorMsg =
//           apiStatus.error?.message || "Project generation failed";
//         const errorDetails = apiStatus.error || { message: errorMsg };
//         setJobErrorMessage(errorMsg);
//         setJobErrorDetails(errorDetails);

//         const errorMessage = {
//           id: Date.now(),
//           text: `❌ **Project Failed**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Error Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The request might have contained invalid syntax
// - There was a server-side processing error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//           sender: "ai",
//           timestamp: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         setMessages([errorMessage]);

//         // Update localStorage with failed status
//         if (project) {
//           updateProjectStatus(
//             id,
//             "failed",
//             null,
//             [errorMessage],
//             errorDetails,
//             project.prompt,
//           );
//         } else {
//           // Create new failed project in localStorage
//           const failedProject = {
//             id: id,
//             title: "Failed Project",
//             timestamp: new Date().toLocaleString(),
//             preview: "Generation failed",
//             files: null,
//             messages: [errorMessage],
//             prompt: "Unknown",
//             status: "failed",
//             createdAt: new Date().toISOString(),
//             error: errorMsg,
//             errorDetails: errorDetails,
//             totalFiles: 0,
//             frontendFiles: 0,
//             backendFiles: 0,
//           };

//           const stored = localStorage.getItem(STORAGE_KEY);
//           let existingProjects = [];
//           if (stored) {
//             try {
//               existingProjects = JSON.parse(stored);
//             } catch (e) {
//               console.error("Error parsing stored projects", e);
//             }
//           }

//           const updated = [
//             failedProject,
//             ...existingProjects.filter((p) => p.id !== id),
//           ].slice(0, 20);
//           localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
//           setRecentProjects(updated);
//         }

//         setIsLoading(false);
//         scrollToBottom();
//         return;
//       }

//       // PRIORITY 4: Use localStorage data if API is not available
//       if (project) {
//         if (project.files) {
//           // Completed project from localStorage
//           setProjectFiles(project.files);
//           setMessages(project.messages || []);
//           setDownloadUrl(`${API_BASE_URL}/download/${id}`);

//           // Convert to Sandpack format
//           const sandpackFiles = convertToSandpackFiles(project.files);
//           setSandpackFiles(sandpackFiles);
//           setShowSandpack(true);

//           setJobStatus("completed");
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         } else if (project.status === "processing") {
//           // Processing project from localStorage
//           setMessages(project.messages || []);
//           setJobStatus("processing");
//           setIsProcessing(true);
//           setIsLoading(false);
//           startPolling(id);
//           return;
//         } else if (project.status === "failed") {
//           // Failed project from localStorage
//           setJobStatus("failed");

//           const errorMsg = project.error || "This project failed to generate";
//           const errorDetails = project.errorDetails || { message: errorMsg };

//           setJobErrorMessage(errorMsg);
//           setJobErrorDetails(errorDetails);

//           const errorMessage = {
//             id: Date.now(),
//             text: `❌ **Project Failed to Load**

// This project failed to generate properly.

// **Error:** ${errorMsg}

// **Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **What happened:**
// - The AI was unable to generate valid code for this request
// - The project might have had syntax errors
// - The server might have encountered an error

// **Next steps:**
// - Try creating a new project with a different prompt
// - Use one of the template projects below
// - Make your request more specific

// Click "New Project" to start fresh.`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages([errorMessage]);
//           setIsLoading(false);
//           scrollToBottom();
//           return;
//         }
//       }

//       // PRIORITY 5: No data found anywhere
//       setJobStatus("failed");
//       setJobErrorMessage("Project not found");

//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Project Not Found**

// No project found with ID: ${id}

// The project may have expired or been deleted.

// **Troubleshooting:**
// - Check if the backend server is running at ${API_BASE_URL}
// - The project ID might be incorrect
// - Try creating a new project

// Click "New Project" to start a new one.`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
//     } catch (error) {
//       console.error("Error loading project:", error);
//       setJobStatus("failed");
//       setJobErrorMessage(error.message);
//       setJobErrorDetails({ type: "load_error", message: error.message });

//       const errorMessage = {
//         id: Date.now(),
//         text: `❌ **Error Loading Project**

// Could not load the project. The project may have expired or been deleted.

// **Error details:** ${error.message}

// **Possible reasons:**
// - The project ID is invalid
// - The project has been deleted from the server
// - The server is not responding

// **Solutions:**
// - Check if the backend server is running
// - Try creating a new project
// - Clear your browser cache and try again`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages([errorMessage]);
//       setIsLoading(false);
//       scrollToBottom();
//     }
//   };

//   const handleBuildRequest = async (prompt) => {
//     if (!prompt || prompt.trim().length < 3) {
//       setInputError("Please enter a valid request (minimum 3 characters)");
//       return;
//     }

//     setInputError("");
//     setIsProcessing(true);
//     setJobStatus("processing");
//     setWarningDismissed(false);
//     setShowTimeoutWarning(false);
//     setShowSandpack(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);

//     try {
//       const buildResponse = await axios.post(`${API_BASE_URL}/build`, null, {
//         params: { prompt },
//         timeout: 30000,
//       });

//       const { job_id } = buildResponse.data;

//       if (!job_id) {
//         throw new Error("No job ID returned from server");
//       }

//       savePendingJob(job_id, prompt);
//       setSearchParams({ project: job_id });

//       const processingMessage = {
//         id: Date.now(),
//         text: `🔄 **Processing your request...**\n\n**Job ID:** ${job_id}\n**Prompt:** "${prompt.substring(0, 100)}${prompt.length > 100 ? "..." : ""}"\n**Status:** Building your project...\n\nThis may take 30-60 seconds depending on complexity.`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, processingMessage]);
//       scrollToBottom();

//       startPolling(job_id);
//     } catch (error) {
//       console.error("Build request failed:", error);

//       let errorMessage = "Failed to start project generation.";
//       let errorDetails = {};

//       if (error.code === "ECONNABORTED") {
//         errorMessage = "Request timeout. The server took too long to respond.";
//         errorDetails = { type: "timeout", code: "ECONNABORTED" };
//       } else if (error.response) {
//         errorMessage = `Server error: ${error.response.status} - ${error.response.data?.detail || error.response.statusText}`;
//         errorDetails = {
//           type: "server_error",
//           status: error.response.status,
//           data: error.response.data,
//         };
//       } else if (error.request) {
//         errorMessage =
//           "Cannot connect to server. Please check if the backend is running.";
//         errorDetails = { type: "connection_error", message: error.message };
//       } else {
//         errorMessage = error.message;
//         errorDetails = { type: "unknown_error", message: error.message };
//       }

//       const errorMsg = {
//         id: Date.now(),
//         text: `❌ **Build Request Failed**

// **Error:** ${errorMessage}

// **Technical Details:**
// \`\`\`json
// ${JSON.stringify(errorDetails, null, 2)}
// \`\`\`

// **Troubleshooting:**
// 1. Make sure the backend server is running at ${API_BASE_URL}
// 2. Check if the server is accessible (try opening ${API_BASE_URL}/docs in browser)
// 3. Verify there are no CORS issues
// 4. Try again with a simpler request

// Click "New Project" to try again.`,
//         sender: "ai",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, errorMsg]);
//       setIsProcessing(false);
//       setJobStatus("error");
//       scrollToBottom();
//     }
//   };

//   const handleSendMessage = () => {
//     if (message.trim() && !isProcessing) {
//       setInputError("");

//       const userMessageObj = {
//         id: Date.now(),
//         text: message,
//         sender: "user",
//         timestamp: new Date().toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         }),
//       };

//       setMessages((prev) => [...prev, userMessageObj]);
//       scrollToBottom();

//       const lowercaseMsg = message.toLowerCase();

//       const isProjectRequest =
//         lowercaseMsg.includes("create") ||
//         lowercaseMsg.includes("build") ||
//         lowercaseMsg.includes("make") ||
//         lowercaseMsg.includes("generate") ||
//         lowercaseMsg.includes("develop") ||
//         lowercaseMsg.includes("website") ||
//         lowercaseMsg.includes("app") ||
//         lowercaseMsg.includes("application");

//       const matchedTemplate = allTemplates.find((t) =>
//         lowercaseMsg.includes(t.name.toLowerCase()),
//       );

//       if (isProjectRequest || matchedTemplate) {
//         setIsTyping(true);
//         setShowHelp(false);

//         const currentMessage = message;
//         setMessage("");

//         setTimeout(() => {
//           setIsTyping(false);

//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: `🔄 **Starting project generation...**\n\nI'll create a complete ${matchedTemplate ? matchedTemplate.name : "custom"} project for you. This will take a few moments. Please wait...`,
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages((prev) => [...prev, aiMessageObj]);
//           scrollToBottom();
//           handleBuildRequest(currentMessage);
//         }, 1000);
//       } else {
//         setMessage("");
//         setShowHelp(false);
//         setIsTyping(true);

//         setTimeout(() => {
//           const aiMessageObj = {
//             id: Date.now() + 1,
//             text: "I can help you build complete projects! Try asking me to create something specific like:\n\n• 'Create a modern education ERP website'\n• 'Build an e-commerce platform'\n• 'Make a social media dashboard'\n• 'Generate a chat application'\n\nWhat would you like me to build for you today?",
//             sender: "ai",
//             timestamp: new Date().toLocaleTimeString([], {
//               hour: "2-digit",
//               minute: "2-digit",
//             }),
//           };

//           setMessages((prev) => [...prev, aiMessageObj]);
//           setIsTyping(false);
//           scrollToBottom();
//         }, 1500);
//       }
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSendMessage();
//     }
//   };

//   const handleNewChat = () => {
//     stopPolling();

//     setMessages([]);
//     setShowHelp(true);
//     setMessage("");
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobId(null);
//     setJobStatus(null);
//     setDownloadUrl(null);
//     setIsProcessing(false);
//     setPollingAttempts(0);
//     setShowTimeoutWarning(false);
//     setWarningDismissed(false);
//     setInputError("");
//     setIsPollingActive(false);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);
//     currentJobIdRef.current = null;

//     setSearchParams({});

//     scrollToBottom();
//   };

//   const handleTemplateClick = (templateName) => {
//     const templateMsg = {
//       id: Date.now(),
//       text: `I want to build a ${templateName} application`,
//       sender: "user",
//       timestamp: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     };
//     setMessages([templateMsg]);
//     setShowHelp(false);
//     scrollToBottom();

//     let prompt = "";

//     switch (templateName) {
//       case "Education ERP":
//         prompt =
//           "Create a complete Education ERP website with student management, teacher portal, attendance tracking, and grade books. Include responsive dashboard.";
//         break;
//       case "E-commerce":
//         prompt =
//           "Build a full E-commerce website with product catalog, shopping cart, and user authentication.";
//         break;
//       case "Social Media":
//         prompt =
//           "Create a Social Media platform with user profiles, posts, likes, and comments.";
//         break;
//       case "Chat App":
//         prompt =
//           "Build a Real-time Chat Application with private messaging and group chats.";
//         break;
//       case "Video App":
//         prompt =
//           "Create a Video Streaming Platform with video upload, video player, playlists, and subscriptions.";
//         break;
//       case "Music App":
//         prompt =
//           "Build a Music Streaming App with audio playback, playlists, and album browsing.";
//         break;
//       case "Food App":
//         prompt =
//           "Create a Food Delivery App with restaurant listings, menu browsing, and order tracking.";
//         break;
//       case "Travel App":
//         prompt =
//           "Build a Travel Booking Platform with property listings, search filters, and booking calendar.";
//         break;
//       default:
//         prompt = `Create a complete ${templateName} application with modern UI and responsive design.`;
//     }

//     handleBuildRequest(prompt);
//   };

//   const handleDownload = () => {
//     if (downloadUrl) {
//       window.open(downloadUrl, "_blank");
//     }
//   };

//   // Handle project click from sidebar
//   const handleProjectClick = (jobId) => {
//     // Clear current state before loading new project
//     setMessages([]);
//     setShowHelp(false);
//     setProjectFiles(null);
//     setSandpackFiles({});
//     setShowSandpack(false);
//     setJobStatus(null);
//     setJobErrorMessage("");
//     setJobErrorDetails(null);
//     // Set the URL parameter
//     setSearchParams({ project: jobId });
//   };

//   // Loading animation component
//   const ProcessingAnimation = () => {
//     const [dots, setDots] = useState("");

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
//       }, 500);
//       return () => clearInterval(interval);
//     }, []);

//     return (
//       <div className="flex flex-col items-center justify-center p-8">
//         <div className="relative">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-t-transparent rounded-full"
//             style={{ borderColor: theme.green, borderTopColor: "transparent" }}
//           />
//           <div className="absolute inset-0 flex items-center justify-center">
//             <BsRobot className="text-xl" style={{ color: theme.green }} />
//           </div>
//         </div>
//         <p
//           className="mt-4 text-sm font-medium"
//           style={{ color: theme.textPrimary }}
//         >
//           Building your project{dots}
//         </p>
//         {pollingAttempts > 0 && (
//           <p className="mt-1 text-xs" style={{ color: theme.textSecondary }}>
//             Elapsed: {Math.floor(pollingAttempts * 2)} seconds
//           </p>
//         )}
//       </div>
//     );
//   };

//   // Enhanced Error Display Component
//   const ErrorDisplay = ({ message, details }) => {
//     const [showDetails, setShowDetails] = useState(false);

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{
//           borderColor: theme.red + "40",
//           backgroundColor: theme.red + "10",
//         }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div
//             className="p-3 rounded-full flex-shrink-0"
//             style={{ backgroundColor: theme.red + "20" }}
//           >
//             <BsExclamationTriangle
//               className="text-2xl"
//               style={{ color: theme.red }}
//             />
//           </div>
//           <div className="flex-1">
//             <h3
//               className="text-lg font-semibold mb-2"
//               style={{ color: theme.red }}
//             >
//               Project Generation Failed
//             </h3>
//             <div className="space-y-3">
//               <div
//                 className="p-3 rounded-lg"
//                 style={{
//                   backgroundColor: theme.card,
//                   borderLeft: `4px solid ${theme.red}`,
//                 }}
//               >
//                 <p
//                   className="text-sm font-mono"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   {message || "Unknown error occurred"}
//                 </p>
//               </div>

//               {details && (
//                 <div>
//                   <button
//                     onClick={() => setShowDetails(!showDetails)}
//                     className="flex items-center gap-2 text-xs mb-2"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <BsBug className="text-xs" />
//                     {showDetails
//                       ? "Hide technical details"
//                       : "Show technical details"}
//                   </button>

//                   {showDetails && (
//                     <pre
//                       className="p-3 rounded-lg text-xs overflow-auto max-h-40"
//                       style={{
//                         backgroundColor: theme.card,
//                         color: theme.textSecondary,
//                       }}
//                     >
//                       {JSON.stringify(details, null, 2)}
//                     </pre>
//                   )}
//                 </div>
//               )}

//               <div className="mt-4">
//                 <h4
//                   className="text-sm font-semibold mb-2"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   Common Solutions:
//                 </h4>
//                 <ul className="space-y-2">
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>Try a simpler or more specific request</span>
//                   </li>
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>
//                       Check if your request has valid syntax and clear
//                       requirements
//                     </span>
//                   </li>
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>
//                       Try again with a different project type from the templates
//                     </span>
//                   </li>
//                   <li
//                     className="flex items-start gap-2 text-xs"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     <span
//                       className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
//                       style={{ backgroundColor: theme.green }}
//                     ></span>
//                     <span>
//                       Make sure the backend server is running properly
//                     </span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={handleNewChat}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <HiOutlinePlus className="text-base" />
//                   New Project
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => window.location.reload()}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                 >
//                   <HiOutlineRefresh className="text-base" />
//                   Refresh Page
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Diagnostic Display Component
//   const DiagnosticDisplay = ({ data, onClose, onFix }) => {
//     if (!data) return null;

//     return (
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="mt-6 rounded-xl overflow-hidden border"
//         style={{
//           borderColor: theme.yellow + "40",
//           backgroundColor: theme.yellow + "10",
//         }}
//       >
//         <div className="flex items-start gap-4 p-6">
//           <div
//             className="p-3 rounded-full flex-shrink-0"
//             style={{ backgroundColor: theme.yellow + "20" }}
//           >
//             <BsWrench className="text-2xl" style={{ color: theme.yellow }} />
//           </div>
//           <div className="flex-1">
//             <h3
//               className="text-lg font-semibold mb-2"
//               style={{ color: theme.yellow }}
//             >
//               Diagnostic Information
//             </h3>
//             <div className="space-y-3">
//               <pre
//                 className="p-3 rounded-lg text-xs overflow-auto max-h-96"
//                 style={{
//                   backgroundColor: theme.card,
//                   color: theme.textSecondary,
//                 }}
//               >
//                 {JSON.stringify(data, null, 2)}
//               </pre>

//               <div className="flex gap-3 mt-4">
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onFix}
//                   className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
//                   style={{ backgroundColor: theme.green }}
//                 >
//                   <BsWrench className="text-base" />
//                   Fix localStorage
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={onClose}
//                   className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                 >
//                   <HiOutlineX className="text-base" />
//                   Close
//                 </motion.button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     );
//   };

//   // Get template for Sandpack
//   const getSandpackTemplate = () => {
//     // Check if it's a React project
//     if (
//       sandpackFiles["/src/App.jsx"] ||
//       sandpackFiles["/src/App.js"] ||
//       sandpackFiles["/src/main.jsx"]
//     ) {
//       return "react";
//     }
//     return "react"; // Default to react
//   };

//   // Get dependencies from package.json and ensure Tailwind is included
//   const getDependencies = () => {
//     const packageJsonFile = projectFiles?.find(
//       (f) =>
//         f.filename === "package.json" || f.filename === "frontend/package.json",
//     );
//     let dependencies = {};

//     if (packageJsonFile) {
//       try {
//         const cleanContent = cleanCodeContent(packageJsonFile.content);
//         const packageJson = JSON.parse(cleanContent);
//         dependencies = packageJson.dependencies || {};
//       } catch (e) {
//         console.error("Error parsing package.json", e);
//       }
//     }

//     // Ensure Tailwind dependencies are present
//     return {
//       ...dependencies,
//       react: dependencies.react || "^18.2.0",
//       "react-dom": dependencies["react-dom"] || "^18.2.0",
//       "react-router-dom": dependencies["react-router-dom"] || "^6.3.0",
//     };
//   };

//   // Prepare recent chats for sidebar with enhanced information
//   const recentChats = recentProjects.map((project) => {
//     let icon, color, title;

//     if (project.status === "processing") {
//       icon = <HiOutlineRefresh className="animate-spin" />;
//       color = theme.yellow;
//       title = project.title || "Processing...";
//     } else if (project.status === "failed") {
//       icon = <HiOutlineExclamation />;
//       color = theme.red;
//       title = "Failed Project";
//     } else if (project.status === "completed") {
//       icon = <HiOutlineCheckCircle />;
//       color = theme.green;
//       title = project.title || "Completed Project";
//     } else {
//       icon = <HiOutlineFolder />;
//       color = theme.textPrimary;
//       title = project.title || "Project";
//     }

//     // Create preview text without "frontend" word
//     let previewText = "";
//     if (project.status === "completed" && project.totalFiles) {
//       previewText = `${project.totalFiles} files total (${project.frontendFiles || 0} frontend, ${project.backendFiles || 0} backend)`;
//     } else if (project.prompt) {
//       previewText =
//         project.prompt.substring(0, 50) +
//         (project.prompt.length > 50 ? "..." : "");
//     } else {
//       previewText = project.preview || "No preview";
//     }

//     return {
//       id: project.id,
//       title: title,
//       preview: previewText,
//       time: project.timestamp,
//       icon: icon,
//       color: color,
//       jobId: project.id,
//       status: project.status,
//       prompt: project.prompt,
//       error: project.error,
//       totalFiles: project.totalFiles || 0,
//       frontendFiles: project.frontendFiles || 0,
//       backendFiles: project.backendFiles || 0,
//     };
//   });

//   return (
//     <div
//       className="h-screen w-full overflow-hidden transition-colors duration-300"
//       style={{ backgroundColor: theme.bg }}
//     >
//       {/* Mobile Menu Overlay */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 z-40 lg:hidden"
//             onClick={() => setIsMobileMenuOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile Sidebar */}
//       <motion.aside
//         initial={{ x: "-100%" }}
//         animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
//         transition={{ type: "tween", duration: 0.3 }}
//         className="fixed inset-y-0 left-0 w-[280px] z-50 lg:hidden shadow-xl overflow-y-auto"
//         style={{ backgroundColor: theme.sidebar }}
//       >
//         <SidebarContent
//           recentChats={recentChats}
//           templates={sidebarTemplates}
//           allTemplates={allTemplates}
//           onClose={() => setIsMobileMenuOpen(false)}
//           theme={theme}
//           hoveredChat={hoveredChat}
//           setHoveredChat={setHoveredChat}
//           onNewChat={handleNewChat}
//           onProjectClick={handleProjectClick}
//           onTemplateClick={handleTemplateClick}
//           currentTheme={currentTheme}
//           toggleTheme={toggleTheme}
//         />
//       </motion.aside>

//       {/* Desktop Layout */}
//       <div className="flex h-full w-full">
//         {/* Desktop Sidebar with Collapse Toggle */}
//         <motion.aside
//           animate={{ width: sidebarCollapsed ? 80 : 288 }}
//           className="hidden lg:block h-full border-r relative transition-all duration-300"
//           style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}
//         >
//           <button
//             onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
//             className="absolute -right-3 top-20 z-10 p-1.5 rounded-full border shadow-lg"
//             style={{
//               backgroundColor: theme.card,
//               borderColor: theme.border,
//               color: theme.textPrimary,
//             }}
//           >
//             {sidebarCollapsed ? (
//               <HiOutlineChevronRight />
//             ) : (
//               <HiOutlineChevronLeft />
//             )}
//           </button>

//           {sidebarCollapsed ? (
//             <CollapsedSidebar
//               theme={theme}
//               onNewChat={handleNewChat}
//               recentChats={recentChats}
//               onProjectClick={handleProjectClick}
//             />
//           ) : (
//             <SidebarContent
//               recentChats={recentChats}
//               templates={sidebarTemplates}
//               allTemplates={allTemplates}
//               theme={theme}
//               hoveredChat={hoveredChat}
//               setHoveredChat={setHoveredChat}
//               onNewChat={handleNewChat}
//               onProjectClick={handleProjectClick}
//               onTemplateClick={handleTemplateClick}
//               currentTheme={currentTheme}
//               toggleTheme={toggleTheme}
//             />
//           )}
//         </motion.aside>

//         {/* Main Content */}
//         <main className="flex-1 h-full flex flex-col w-full min-w-0">
//           {/* Fixed Header */}
//           <div
//             className="flex-shrink-0 border-b w-full"
//             style={{
//               backgroundColor: theme.sidebar,
//               borderColor: theme.border,
//             }}
//           >
//             <div className="flex items-center justify-between px-4 py-3">
//               <div className="flex items-center gap-3">
//                 <button
//                   onClick={() => setIsMobileMenuOpen(true)}
//                   className="lg:hidden p-2 rounded-full"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                 >
//                   <HiOutlineMenu className="text-lg" />
//                 </button>
//                 <h2
//                   className="text-sm font-medium hidden sm:block"
//                   style={{ color: theme.textPrimary }}
//                 >
//                   AI Developer Assistant
//                 </h2>
//                 {/* <button
//                   onClick={runDiagnostic}
//                   className="p-1.5 rounded-full text-xs"
//                   style={{ backgroundColor: theme.card, color: theme.textSecondary }}
//                   title="Run diagnostic"
//                 >
//                   <BsWrench className="text-sm" />
//                 </button> */}
//               </div>

//               <div className="flex items-center gap-2">
//                 {/* Theme Toggle Button */}
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={toggleTheme}
//                   className="p-2 rounded-full"
//                   style={{
//                     backgroundColor: theme.card,
//                     color: theme.textPrimary,
//                   }}
//                   title={
//                     currentTheme === "dark"
//                       ? "Switch to Light Mode"
//                       : "Switch to Dark Mode"
//                   }
//                 >
//                   {currentTheme === "dark" ? (
//                     <HiOutlineSun className="text-lg" />
//                   ) : (
//                     <HiOutlineMoon className="text-lg" />
//                   )}
//                 </motion.button>

//                 {jobId && (
//                   <>
//                     <span
//                       className="text-xs px-2 py-1 rounded-full"
//                       style={{
//                         backgroundColor: theme.card,
//                         color: theme.textSecondary,
//                       }}
//                     >
//                       Job: {jobId.substring(0, 8)}...
//                     </span>
//                     {jobStatus === "processing" && isPollingActive && (
//                       <div className="flex items-center gap-1">
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{
//                             duration: 2,
//                             repeat: Infinity,
//                             ease: "linear",
//                           }}
//                         >
//                           <HiOutlineRefresh
//                             className="text-lg"
//                             style={{ color: theme.green }}
//                           />
//                         </motion.div>
//                         {pollingAttempts > 0 && (
//                           <span
//                             className="text-xs"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             {Math.floor(pollingAttempts * 2)}s
//                           </span>
//                         )}
//                       </div>
//                     )}
//                     {jobStatus === "completed" && (
//                       <span
//                         className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
//                         style={{
//                           backgroundColor: theme.green + "20",
//                           color: theme.green,
//                         }}
//                       >
//                         <HiOutlineCheckCircle className="text-xs" />
//                         Completed
//                       </span>
//                     )}
//                     {jobStatus === "failed" && (
//                       <span
//                         className="text-xs px-2 py-1 rounded-full flex items-center gap-1"
//                         style={{
//                           backgroundColor: theme.red + "20",
//                           color: theme.red,
//                         }}
//                       >
//                         <HiOutlineExclamation className="text-xs" />
//                         Failed
//                       </span>
//                     )}
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Two Column Layout - Messages 40% on left, Workspace 60% on right */}
//           <div className="flex-1 flex  overflow-hidden">
//             {/* Left Column - Messages Area (40%) */}
//             <div
//               className={`${jobStatus === "completed" ? "w-2/5" : "w-full"} border-r overflow-hidden flex flex-col transition-all duration-300`}
//               style={{ borderColor: theme.border }}
//             >
//               <div
//                 className="p-3 border-b"
//                 style={{
//                   backgroundColor: theme.card,
//                   borderColor: theme.border,
//                 }}
//               >
//                 <h3
//                   className="text-xs font-semibold uppercase"
//                   style={{ color: theme.textSecondary }}
//                 >
//                   AI Conversation
//                 </h3>
//               </div>
//               <div
//                 ref={messagesContainerRef}
//                 className="flex-1 overflow-y-auto"
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 <div className="p-6">
//                   <div className="max-w-full mx-auto">
//                     {/* Timeout Warning Banner */}
//                     <AnimatePresence>
//                       {showTimeoutWarning &&
//                         jobStatus === "processing" &&
//                         !warningDismissed && (
//                           <motion.div
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             className="mb-4 p-4 rounded-lg border"
//                             style={{
//                               backgroundColor: theme.yellow + "20",
//                               borderColor: theme.yellow,
//                             }}
//                           >
//                             <div className="flex items-start gap-3">
//                               <BsHourglassSplit
//                                 className="text-xl flex-shrink-0 animate-pulse"
//                                 style={{ color: theme.yellow }}
//                               />
//                               <div className="flex-1">
//                                 <h4
//                                   className="text-sm font-semibold"
//                                   style={{ color: theme.yellow }}
//                                 >
//                                   Taking longer than expected
//                                 </h4>
//                                 <p
//                                   className="text-xs mt-1"
//                                   style={{ color: theme.textSecondary }}
//                                 >
//                                   Your project is still being built. Complex
//                                   projects can take 2-5 minutes.
//                                 </p>
//                                 <div className="flex gap-2 mt-3">
//                                   <button
//                                     onClick={() => {
//                                       setWarningDismissed(true);
//                                       setShowTimeoutWarning(false);
//                                     }}
//                                     className="text-xs px-3 py-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: "transparent",
//                                       color: theme.textSecondary,
//                                       border: `1px solid ${theme.border}`,
//                                     }}
//                                   >
//                                     Dismiss
//                                   </button>
//                                 </div>
//                               </div>
//                             </div>
//                           </motion.div>
//                         )}
//                     </AnimatePresence>

//                     {/* Diagnostic Display */}
//                     {showDiagnostic && diagnosticData && (
//                       <DiagnosticDisplay
//                         data={diagnosticData}
//                         onClose={() => setShowDiagnostic(false)}
//                         onFix={fixLocalStorage}
//                       />
//                     )}

//                     <AnimatePresence mode="wait">
//                       {showHelp && messages.length === 0 ? (
//                         /* Help Section */
//                         <motion.div
//                           key="help"
//                           initial={{ opacity: 0, y: 10 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: -10 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <h2
//                             className="text-lg sm:text-xl font-semibold mb-2"
//                             style={{ color: theme.textPrimary }}
//                           >
//                             What would you like to build today?
//                           </h2>
//                           <p
//                             className="text-sm mb-6"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Ask me to build complete projects and get a VS
//                             Code-like environment!
//                           </p>

//                           {/* Project Templates - Show all 8 templates in help section */}
//                           <div className="mb-8">
//                             <h3
//                               className="text-sm font-semibold mb-2"
//                               style={{ color: theme.textPrimary }}
//                             >
//                               Popular Projects
//                             </h3>
//                             <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
//                               {allTemplates.map((template, index) => (
//                                 <motion.button
//                                   key={index}
//                                   whileHover={{ scale: 1.02 }}
//                                   whileTap={{ scale: 0.98 }}
//                                   className="text-white p-3 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all"
//                                   style={{ backgroundColor: template.bg }}
//                                   onClick={() =>
//                                     handleTemplateClick(template.name)
//                                   }
//                                 >
//                                   <span className="text-xl">
//                                     {template.icon}
//                                   </span>
//                                   <span className="text-xs font-medium text-center">
//                                     {template.name}
//                                   </span>
//                                 </motion.button>
//                               ))}
//                             </div>
//                           </div>
//                         </motion.div>
//                       ) : (
//                         /* Messages */
//                         <motion.div
//                           key="messages"
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                         >
//                           {messages.map((msg, index) => (
//                             <motion.div
//                               key={msg.id}
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               transition={{
//                                 duration: 0.2,
//                                 delay: index * 0.05,
//                               }}
//                               className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
//                             >
//                               <div
//                                 className={`max-w-[85%] rounded-2xl px-4 py-3 ${
//                                   msg.sender === "user"
//                                     ? "rounded-br-none"
//                                     : "rounded-bl-none"
//                                 }`}
//                                 style={{
//                                   backgroundColor:
//                                     msg.sender === "user"
//                                       ? theme.green
//                                       : theme.card,
//                                   color:
//                                     msg.sender === "user"
//                                       ? "#FFFFFF"
//                                       : theme.textPrimary,
//                                 }}
//                               >
//                                 {msg.sender === "ai" && (
//                                   <div className="flex items-center gap-2 mb-2">
//                                     <BsRobot className="text-xs" />
//                                     <span className="text-xs font-medium">
//                                       AI Developer Assistant
//                                     </span>
//                                   </div>
//                                 )}
//                                 <div className="text-sm whitespace-pre-wrap font-mono">
//                                   {msg.text}
//                                 </div>
//                                 <p className="text-xs mt-2 opacity-70 text-right">
//                                   {msg.timestamp}
//                                 </p>
//                               </div>
//                             </motion.div>
//                           ))}

//                           {/* Processing Animation */}
//                           {isProcessing &&
//                             jobStatus === "processing" &&
//                             !projectFiles &&
//                             isPollingActive && (
//                               <motion.div
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 exit={{ opacity: 0 }}
//                                 className="flex justify-center"
//                               >
//                                 <ProcessingAnimation />
//                               </motion.div>
//                             )}

//                           {/* Error Display for Failed Jobs */}
//                           {jobStatus === "failed" && jobErrorMessage && (
//                             <ErrorDisplay
//                               message={jobErrorMessage}
//                               details={jobErrorDetails}
//                             />
//                           )}

//                           {/* Typing indicator */}
//                           {isTyping && (
//                             <motion.div
//                               initial={{ opacity: 0, y: 10 }}
//                               animate={{ opacity: 1, y: 0 }}
//                               className="flex justify-start"
//                             >
//                               <div
//                                 className="rounded-2xl rounded-bl-none px-4 py-3"
//                                 style={{ backgroundColor: theme.card }}
//                               >
//                                 <div className="flex gap-1">
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{
//                                       duration: 0.6,
//                                       repeat: Infinity,
//                                     }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: theme.textSecondary,
//                                     }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{
//                                       duration: 0.6,
//                                       repeat: Infinity,
//                                       delay: 0.2,
//                                     }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: theme.textSecondary,
//                                     }}
//                                   />
//                                   <motion.span
//                                     animate={{ y: [0, -3, 0] }}
//                                     transition={{
//                                       duration: 0.6,
//                                       repeat: Infinity,
//                                       delay: 0.4,
//                                     }}
//                                     className="w-1.5 h-1.5 rounded-full"
//                                     style={{
//                                       backgroundColor: theme.textSecondary,
//                                     }}
//                                   />
//                                 </div>
//                               </div>
//                             </motion.div>
//                           )}

//                           <div ref={messagesEndRef} />
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 </div>
//               </div>

//               {/* Fixed Input Area for Messages */}
//               <div
//                 className="flex-shrink-0 border-t w-full p-3"
//                 style={{
//                   backgroundColor: theme.sidebar,
//                   borderColor: theme.border,
//                 }}
//               >
//                 <div className="max-w-full mx-auto">
//                   <div className="relative">
//                     <textarea
//                       ref={inputRef}
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                       onKeyPress={handleKeyPress}
//                       placeholder="Ask me to build any project..."
//                       className={`w-full pl-3 placeholder:text-xs pr-24 py-4 border rounded-md text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${
//                         inputError
//                           ? "border-red-500 focus:ring-red-500"
//                           : "focus:ring-[#22C55E]"
//                       }`}
//                       style={{
//                         backgroundColor: theme.inputBg,
//                         borderColor: inputError ? theme.red : theme.border,
//                         color: theme.textPrimary,
//                         minHeight: "70px",
//                         maxHeight: "160px",
//                         resize: "none",
//                       }}
//                       rows="2"
//                       onInput={(e) => {
//                         e.target.style.height = "auto";
//                         e.target.style.height =
//                           Math.min(e.target.scrollHeight, 150) + "px";
//                       }}
//                       disabled={isProcessing && jobStatus === "processing"}
//                     />
//                     <div className="absolute right-2 bottom-3 flex items-center gap-2">
//                       <button
//                         onClick={handleSendMessage}
//                         disabled={isProcessing && jobStatus === "processing"}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
//                         style={{
//                           backgroundColor:
//                             isProcessing && jobStatus === "processing"
//                               ? theme.textSecondary
//                               : theme.green,
//                         }}
//                         title={
//                           isProcessing
//                             ? "Currently building a project"
//                             : "Send message"
//                         }
//                       >
//                         <HiOutlinePaperAirplane className="text-sm" />
//                       </button>
//                       <button
//                         onClick={handleNewChat}
//                         className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0"
//                         style={{ backgroundColor: theme.card }}
//                         title="Start new chat"
//                       >
//                         <HiOutlinePlus className="text-sm" />
//                       </button>
//                     </div>
//                   </div>
//                   {inputError && (
//                     <p className="text-xs mt-1 text-red-500">{inputError}</p>
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Right Column - Workspace Area (60%) - Only show when status is completed */}
//             {jobStatus === "completed" && (
//               <div
//                 ref={workspaceRef}
//                 className="w-3/5 overflow-hidden flex flex-col transition-all duration-300"
//                 style={{ backgroundColor: theme.bg }}
//               >
//                 {/* Workspace Header with View Toggles and Fullscreen */}
//                 <div
//                   className="px-3 p-1/2 border-b flex items-center justify-between"
//                   style={{
//                     backgroundColor: theme.card,
//                     borderColor: theme.border,
//                   }}
//                 >
//                   <div className="flex items-center gap-2">
//                     <h3
//                       className="text-xs font-semibold uppercase"
//                       style={{ color: theme.textSecondary }}
//                     >
//                       Project Workspace
//                     </h3>
//                     {downloadUrl && (
//                       <motion.button
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                         onClick={handleDownload}
//                         className="flex items-center gap-1 px-2 py-1 rounded text-white text-xs"
//                         style={{ backgroundColor: theme.green }}
//                       >
//                         <HiOutlineDownload className="text-xs" />
//                         ZIP
//                       </motion.button>
//                     )}
//                     <button
//                       onClick={runDiagnostic}
//                       className="p-1.5 rounded-full text-xs"
//                       style={{
//                         backgroundColor: theme.card,
//                         color: theme.textSecondary,
//                       }}
//                       title="Run diagnostic"
//                     >
//                       <BsWrench className="text-sm" />
//                     </button>
//                   </div>

//                   {/* View Toggle Buttons - Only 2 options: Preview and Code */}
//                   {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                     <div className="flex items-center gap-2">
//                       <div
//                         className="flex items-center gap-1 rounded-lg p-1"
//                         style={{ backgroundColor: theme.card }}
//                       >
//                         <button
//                           onClick={() => setWorkspaceView("preview")}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === "preview"
//                               ? "bg-gray-700 text-white"
//                               : "text-gray-400 hover:text-white"
//                           }`}
//                           style={{
//                             backgroundColor:
//                               workspaceView === "preview"
//                                 ? theme.green + "40"
//                                 : "transparent",
//                             color:
//                               workspaceView === "preview"
//                                 ? theme.textPrimary
//                                 : theme.textSecondary,
//                           }}
//                           title="Preview View"
//                         >
//                           <BsEye className="text-sm inline mr-1" />
//                           Preview
//                         </button>
//                         <button
//                           onClick={() => setWorkspaceView("code")}
//                           className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
//                             workspaceView === "code"
//                               ? "bg-gray-700 text-white"
//                               : "text-gray-400 hover:text-white"
//                           }`}
//                           style={{
//                             backgroundColor:
//                               workspaceView === "code"
//                                 ? theme.green + "40"
//                                 : "transparent",
//                             color:
//                               workspaceView === "code"
//                                 ? theme.textPrimary
//                                 : theme.textSecondary,
//                           }}
//                           title="Code View"
//                         >
//                           <BsCodeSquare className="text-sm inline mr-1" />
//                           Code
//                         </button>
//                       </div>

//                       {/* Fullscreen Button */}
//                       <button
//                         onClick={toggleFullscreen}
//                         className="p-2 rounded-md transition-all"
//                         style={{
//                           backgroundColor: theme.card,
//                           color: theme.textSecondary,
//                         }}
//                         title={
//                           isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"
//                         }
//                       >
//                         <HiOutlineArrowsExpand className="text-sm" />
//                       </button>
//                     </div>
//                   )}
//                 </div>

//                 {/* Workspace Content - Full height for preview */}
//                 <div className="flex-1 overflow-hidden">
//                   {!showSandpack || Object.keys(sandpackFiles).length === 0 ? (
//                     <div className="h-full flex items-center justify-center flex-col gap-4">
//                       {jobStatus === "processing" ? (
//                         <ProcessingAnimation />
//                       ) : jobStatus === "failed" ? (
//                         <div className="text-center">
//                           <BsExclamationTriangle
//                             className="text-4xl mx-auto mb-3"
//                             style={{ color: theme.red }}
//                           />
//                           <p
//                             className="text-sm"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Project generation failed
//                           </p>
//                         </div>
//                       ) : (
//                         <div className="text-center">
//                           <HiOutlineCode
//                             className="text-4xl mx-auto mb-3"
//                             style={{ color: theme.textSecondary }}
//                           />
//                           <p
//                             className="text-sm"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Your project will appear here
//                           </p>
//                           <p
//                             className="text-xs mt-2"
//                             style={{ color: theme.textSecondary }}
//                           >
//                             Ask me to build something to get started
//                           </p>
//                         </div>
//                       )}
//                     </div>
//                   ) : (
//                     <div
//                       className="h-full overflow-hidden"
//                       style={{ backgroundColor: theme.sandpackBg }}
//                     >
//                       <SandpackProvider
//                         key={jobId || "sandpack-provider"}
//                         template={getSandpackTemplate()}
//                         theme={currentTheme === "dark" ? "dark" : "light"}
//                         files={sandpackFiles}
//                         customSetup={{
//                           dependencies: getDependencies(),
//                           entry: sandpackFiles["/src/index.js"]
//                             ? "/src/index.js"
//                             : sandpackFiles["/src/index.jsx"]
//                               ? "/src/index.jsx"
//                               : sandpackFiles["/src/main.jsx"]
//                                 ? "/src/main.jsx"
//                                 : "/src/index.js",
//                         }}
//                         options={{
//                           externalResources: ["https://cdn.tailwindcss.com"],
//                           visibleFiles: Object.keys(sandpackFiles),
//                           activeFile:
//                             Object.keys(sandpackFiles).find(
//                               (f) =>
//                                 f.includes("App.jsx") ||
//                                 f.includes("App.js") ||
//                                 f.includes("main.jsx"),
//                             ) || Object.keys(sandpackFiles)[0],
//                         }}
//                       >
//                         <SandpackLayout className="h-full">
//                           {workspaceView === "preview" && (
//                             /* Preview View - Full height preview with console at bottom */
//                             <div className="flex flex-col h-full w-full">
//                               {/* Preview (80%) */}
//                               <div
//                                 className="h-[80%] flex flex-col"
//                                 style={{ backgroundColor: theme.sandpackBg }}
//                               >
//                                 <div
//                                   className="px-3 py-2 text-xs border-b font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                                   PREVIEW
//                                 </div>
//                                 <div className="flex-1">
//                                   <SandpackPreview
//                                     showOpenInCodeSandbox={false}
//                                     showRefreshButton={true}
//                                     className="h-[70vh]"
//                                   />
//                                 </div>
//                               </div>

//                               {/* Console (20%) */}
//                               <div
//                                 className="h-[20%] border-t flex flex-col"
//                                 style={{ borderColor: theme.border }}
//                               >
//                                 <div
//                                   className="px-3 py-1 text-xs border-b font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                                   CONSOLE
//                                 </div>
//                                 <div className="flex-1 overflow-auto">
//                                   <SandpackConsole />
//                                 </div>
//                               </div>
//                             </div>
//                           )}

//                           {workspaceView === "code" && (
//                             /* Code View - Full height with file explorer and editor */
//                             <div className="flex flex-row h-full w-full">
//                               {/* FILE EXPLORER (20%) */}
//                               <div
//                                 className="w-[25%] border-r flex flex-col overflow-auto h-screen "
//                                 style={{
//                                   backgroundColor: theme.card,
//                                   borderColor: theme.border,
//                                 }}
//                               >
//                                 <div
//                                   className="px-3 py-2 text-xs border-b flex justify-between items-center  font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                               <h4> EXPLORER</h4>
                        

//                                    {showSandpack && Object.keys(sandpackFiles).length > 0 && (
//                   <div
//                     className="px-2  flex justify-center items-center  text-[10px]"
//                     style={{
//                       backgroundColor: theme.card,
//                       borderColor: theme.border,
//                       color: theme.textSecondary,
//                     }}
//                   >
//                     {Object.keys(sandpackFiles).length} files {" "}
                   
//                   </div>
//                 )}
//                                 </div>
                               
//                                 <div className="flex-1">
//                                   <SandpackFileExplorer
//                                     className="text-xs"
//                                     autoHiddenFiles={false}
//                                     style={{
//                                       height: "100%",
//                                       overflow: "auto",
//                                     }}
//                                   />
//                                 </div>
//                               </div>
//                               {/* EDITOR (80%) */}
//                               <div
//                                 className="w-[75%] h-[95vh] flex flex-col overflow-auto"
//                                 style={{ backgroundColor: theme.sandpackBg }}
//                               >
//                                 <div
//                                   className="px-3 py-2 text-xs border-b font-semibold"
//                                   style={{
//                                     color: theme.textSecondary,
//                                     borderColor: theme.border,
//                                   }}
//                                 >
//                                   EDITOR
//                                 </div>

//                                 <div className="flex-1">
//                                   <SandpackCodeEditor
//                                     showTabs
//                                     showLineNumbers
//                                     wrapContent={false}
//                                     closableTabs={true}
//                                     style={{
//                                       height: "100%",
//                                       overflow: "auto",
//                                     }}
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           )}
//                         </SandpackLayout>
//                       </SandpackProvider>
//                     </div>
//                   )}
//                 </div>

//                 {/* Workspace Footer */}
                
//               </div>
//             )}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// // Sidebar Component
// const SidebarContent = ({
//   recentChats,
//   templates,
//   allTemplates,
//   onClose,
//   theme,
//   hoveredChat,
//   setHoveredChat,
//   onNewChat,
//   onProjectClick,
//   onTemplateClick,
//   currentTheme,
//   toggleTheme,
// }) => {
//   return (
//     <div className="h-full flex flex-col">
//       {/* Header */}
//       <div
//         className="p-3 border-b flex-shrink-0"
//         style={{ borderColor: theme.border }}
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3 min-w-0">
//             <motion.div
//               whileHover={{ scale: 1.02 }}
//               className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
//               style={{
//                 background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})`,
//               }}
//             >
//               <img
//                 src="/EVA.png"
//                 alt="EVA"
//                 height={60}
//                 className="rounded-full"
//               />
//             </motion.div>
//             <div className="min-w-0">
//               <h1
//                 className="text-sm font-semibold truncate"
//                 style={{ color: theme.textPrimary }}
//               >
//                 EVA AI
//               </h1>
//               <p
//                 className="text-xs truncate"
//                 style={{ color: theme.textSecondary }}
//               >
//                 Full-Stack AI
//               </p>
//             </div>
//           </div>
//           <div className="flex items-center gap-2">
//             {/* Theme Toggle in Sidebar */}
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               onClick={toggleTheme}
//               className="p-2 rounded-full"
//               style={{ backgroundColor: theme.card, color: theme.textPrimary }}
//               title={
//                 currentTheme === "dark"
//                   ? "Switch to Light Mode"
//                   : "Switch to Dark Mode"
//               }
//             >
//               {currentTheme === "dark" ? (
//                 <HiOutlineSun className="text-sm" />
//               ) : (
//                 <HiOutlineMoon className="text-sm" />
//               )}
//             </motion.button>
//             {onClose && (
//               <motion.button
//                 whileHover={{ rotate: 90 }}
//                 transition={{ duration: 0.2 }}
//                 onClick={onClose}
//                 className="lg:hidden p-2 rounded-full flex-shrink-0"
//                 style={{ backgroundColor: theme.card }}
//               >
//                 <HiOutlineX style={{ color: theme.textPrimary }} />
//               </motion.button>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* New Chat Button */}
//       <div className="p-4 mx-3 flex-shrink-0">
//         <motion.button
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           onClick={onNewChat}
//           className="w-full py-2.5 px-4 text-white rounded-full text-xs font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
//           style={{ backgroundColor: theme.green }}
//         >
//           <HiOutlinePlus className="text-base" />
//           <span className="truncate">New Project</span>
//         </motion.button>
//       </div>

//       {/* Templates Section */}
//       <div className="px-3 mb-4">
//         <h2
//           className="text-xs font-semibold uppercase tracking-wider px-3 mb-2"
//           style={{ color: theme.textSecondary }}
//         >
//           Quick Templates
//         </h2>
//         <div className="grid grid-cols-2 gap-2">
//           {templates.map((template, index) => (
//             <motion.button
//               key={index}
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="p-2 rounded-lg text-xs text-white flex items-center justify-center gap-1.5"
//               style={{ backgroundColor: template.bg }}
//               onClick={() => onTemplateClick(template.name)}
//             >
//               <span className="text-sm">{template.icon}</span>
//               <span className="truncate">{template.name}</span>
//             </motion.button>
//           ))}
//         </div>
//       </div>

//       {/* Recent Projects Section */}
//       <div className="flex-1 px-3 overflow-y-auto no-scrollbar min-h-72">
//         <h2
//           className="text-xs font-semibold uppercase tracking-wider px-3 mb-2"
//           style={{ color: theme.textSecondary }}
//         >
//           Recent Projects
//         </h2>
//         <div className="space-y-1 pb-4">
//           {recentChats.length > 0 ? (
//             recentChats.map((chat) => (
//               <motion.div
//                 key={chat.id}
//                 whileHover={{ x: 4 }}
//                 className="flex items-start gap-3 p-3 rounded-xl cursor-pointer group"
//                 style={{
//                   backgroundColor:
//                     hoveredChat === chat.id ? theme.hover : "transparent",
//                   opacity: chat.status === "processing" ? 0.8 : 1,
//                 }}
//                 onMouseEnter={() => setHoveredChat(chat.id)}
//                 onMouseLeave={() => setHoveredChat(null)}
//                 onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//               >
//                 <div
//                   className="p-2 rounded-full flex-shrink-0"
//                   style={{ backgroundColor: theme.iconBg }}
//                 >
//                   <span style={{ color: chat.color }} className="text-sm">
//                     {chat.icon}
//                   </span>
//                 </div>
//                 <div className="flex-1 min-w-0">
//                   <div className="flex items-center justify-between gap-2">
//                     <h4
//                       className="text-sm font-medium truncate"
//                       style={{ color: theme.textPrimary }}
//                     >
//                       {chat.title}
//                     </h4>
//                     <span
//                       className="text-xs flex-shrink-0"
//                       style={{ color: theme.textSecondary }}
//                     >
//                       {chat.time}
//                     </span>
//                   </div>
//                   <p
//                     className="text-xs truncate"
//                     style={{ color: theme.textSecondary }}
//                   >
//                     {chat.preview}
//                   </p>
//                   {chat.status === "processing" && (
//                     <span
//                       className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
//                       style={{
//                         backgroundColor: theme.yellow + "20",
//                         color: theme.yellow,
//                       }}
//                     >
//                       Processing...
//                     </span>
//                   )}
//                   {chat.status === "completed" && (
//                     <span
//                       className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
//                       style={{
//                         backgroundColor: theme.green + "20",
//                         color: theme.green,
//                       }}
//                     >
//                       Completed
//                     </span>
//                   )}
//                   {chat.status === "failed" && (
//                     <span
//                       className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
//                       style={{
//                         backgroundColor: theme.red + "20",
//                         color: theme.red,
//                       }}
//                     >
//                       Failed
//                     </span>
//                   )}
//                 </div>
//               </motion.div>
//             ))
//           ) : (
//             <div
//               className="text-center py-8"
//               style={{ color: theme.textSecondary }}
//             >
//               <p className="text-xs">No recent projects</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // Collapsed Sidebar Component
// const CollapsedSidebar = ({
//   theme,
//   onNewChat,
//   recentChats,
//   onProjectClick,
// }) => {
//   return (
//     <div className="h-full flex flex-col items-center py-3">
//       <motion.div
//         whileHover={{ scale: 1.1 }}
//         className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md mb-6 cursor-pointer"
//         style={{
//           background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})`,
//         }}
//         onClick={onNewChat}
//         title="New Project"
//       >
//         <HiOutlinePlus className="text-white text-lg" />
//       </motion.div>

//       <div className="flex-1 w-full px-2">
//         {recentChats.slice(0, 5).map((chat) => (
//           <motion.div
//             key={chat.id}
//             whileHover={{ scale: 1.05 }}
//             className="w-full flex justify-center mb-2 cursor-pointer relative"
//             onClick={() => onProjectClick && onProjectClick(chat.jobId)}
//             title={`${chat.title} - ${chat.status}`}
//           >
//             <div
//               className="p-2 rounded-lg"
//               style={{ backgroundColor: theme.card }}
//             >
//               <span style={{ color: chat.color }} className="text-lg">
//                 {chat.icon}
//               </span>
//             </div>
//             {chat.status === "processing" && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
//             )}
//             {chat.status === "failed" && (
//               <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
//             )}
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
  SandpackFileExplorer,
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
} from "react-icons/hi";
import {
  BsRobot,
  BsHourglassSplit,
  BsExclamationTriangle,
  BsBug,
  BsWrench,
  BsCodeSquare,
  BsEye,
} from "react-icons/bs";

const API_BASE_URL = "http://127.0.0.1:8011";

// Storage keys
const STORAGE_KEY = "ai_projects";
const THEME_KEY = "ai_theme";
const EXPLORER_WIDTH_KEY = "explorer_width";

// Theme definitions
const themes = {
  dark: {
    bg: "#0B0F0E",
    sidebar: "#111413",
    card: "#151918",
    border: "#1F2A27",
    green: "#22C55E",
    greenSoft: "#16A34A",
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
    inputBg: "#1A1F1D",
    yellow: "#EAB308",
    orange: "#F97316",
    red: "#EF4444",
    hover: "#1F2A27",
    iconBg: "#1A1F1D",
    sandpackBg: "#1e1e1e",
    blue: "#3B82F6",
  },
  light: {
    bg: "#F9FAFB",
    sidebar: "#FFFFFF",
    card: "#F3F4F6",
    border: "#E5E7EB",
    green: "#22C55E",
    greenSoft: "#16A34A",
    textPrimary: "#111827",
    textSecondary: "#6B7280",
    inputBg: "#FFFFFF",
    yellow: "#EAB308",
    orange: "#F97316",
    red: "#EF4444",
    hover: "#F3F4F6",
    iconBg: "#F3F4F6",
    sandpackBg: "#FFFFFF",
    blue: "#3B82F6",
  },
};

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredChat, setHoveredChat] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showHelp, setShowHelp] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  // Theme State
  const [currentTheme, setCurrentTheme] = useState("dark");
  const theme = themes[currentTheme];

  // API States
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

  // Sandpack Files
  const [sandpackFiles, setSandpackFiles] = useState({});
  const [showSandpack, setShowSandpack] = useState(false);

  // Sidebar State
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // View Toggle State (preview/code)
  const [workspaceView, setWorkspaceView] = useState("preview");

  // Fullscreen State
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Mobile Workspace Toggle
  const [showMobileWorkspace, setShowMobileWorkspace] = useState(false);

  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const inputRef = useRef(null);
  const workspaceRef = useRef(null);

  // Refs for polling management
  const pollingIntervalRef = useRef(null);
  const currentJobIdRef = useRef(null);
  const isPollingRef = useRef(false);
  const abortControllerRef = useRef(null);

  // All 8 templates available
  const allTemplates = [
    { name: "Education ERP", icon: <HiOutlineCode />, bg: theme.green },
    { name: "E-commerce", icon: <HiOutlineShoppingCart />, bg: theme.green },
    { name: "Social Media", icon: <HiOutlineUserGroup />, bg: theme.green },
    { name: "Chat App", icon: <HiOutlineChat />, bg: theme.green },
    { name: "Video App", icon: <HiOutlineVideoCamera />, bg: theme.green },
    { name: "Music App", icon: <HiOutlinePhotograph />, bg: theme.green },
    { name: "Food App", icon: <HiOutlineLocationMarker />, bg: theme.green },
    { name: "Travel App", icon: <HiOutlineMap />, bg: theme.green },
  ];

  // Only show 4 templates in sidebar
  const sidebarTemplates = allTemplates.slice(0, 4);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);
    if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };

  // Clean code content from markdown code blocks
  const cleanCodeContent = (content) => {
    const codeBlockRegex = /```[a-z]*\n([\s\S]*?)```/g;
    const match = codeBlockRegex.exec(content);

    let cleaned = match ? match[1].trim() : content;

    // Remove Tailwind build directives (for Sandpack preview)
    cleaned = cleaned
      .replace(/@tailwind base;/g, "")
      .replace(/@tailwind components;/g, "")
      .replace(/@tailwind utilities;/g, "");

    return cleaned;
  };

  // Convert API files to Sandpack format with Tailwind support
  const convertToSandpackFiles = (files) => {
    const sandpackFiles = {};

    files.forEach((file) => {
      // Skip backend files for preview
      if (file.filename.startsWith("backend/")) {
        return;
      }

      // Handle frontend files
      let filename = file.filename;
      if (filename.startsWith("frontend/")) {
        filename = filename.replace("frontend/", "");
      }

      // Only include relevant frontend files
      if (
        filename.startsWith("src/") ||
        filename === "index.html" ||
        filename === "package.json" ||
        filename === "vite.config.js" ||
        filename === "postcss.config.js" ||
        filename === "tailwind.config.js"
      ) {
        // Clean the content from markdown code blocks
        let cleanContent = cleanCodeContent(file.content);

        // Map the file path correctly
        let sandpackPath = filename;
        if (sandpackPath === "index.html") {
          sandpackPath = "/index.html";
        } else if (!sandpackPath.startsWith("/")) {
          sandpackPath = "/" + sandpackPath;
        }

        sandpackFiles[sandpackPath] = {
          code: cleanContent,
        };
      }
    });

    // Ensure there's an entry file
    if (
      !sandpackFiles["/src/index.js"] &&
      !sandpackFiles["/src/index.jsx"] &&
      !sandpackFiles["/src/main.jsx"]
    ) {
      sandpackFiles["/src/main.jsx"] = {
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

    // Ensure App.jsx exists
    if (!sandpackFiles["/src/App.jsx"] && !sandpackFiles["/src/App.js"]) {
      sandpackFiles["/src/App.jsx"] = {
        code: `import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to Your App</h1>
    </div>
  )
}`,
      };
    }

    // Ensure index.css exists with Tailwind directives
    if (!sandpackFiles["/src/index.css"]) {
      sandpackFiles["/src/index.css"] = {
        code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
      };
    }

    // Ensure tailwind.config.js exists
    if (!sandpackFiles["/tailwind.config.js"]) {
      sandpackFiles["/tailwind.config.js"] = {
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

    // Ensure postcss.config.js exists
    if (!sandpackFiles["/postcss.config.js"]) {
      sandpackFiles["/postcss.config.js"] = {
        code: `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}`,
      };
    }

    return sandpackFiles;
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, jobId, projectFiles]);

  // Auto-show Sandpack when files are ready
  useEffect(() => {
    if (
      jobStatus === "completed" &&
      projectFiles &&
      Object.keys(sandpackFiles).length > 0
    ) {
      setShowSandpack(true);
    }
  }, [jobStatus, projectFiles, sandpackFiles]);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current) {
        messagesEndRef.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }
    }, 100);
  };

  // Load recent projects from localStorage on mount
  useEffect(() => {
    loadRecentProjects();
  }, []);

  // Handle URL parameter on mount and when it changes
  useEffect(() => {
    const projectId = searchParams.get("project");

    if (projectId && !isLoading) {
      // Clear current state before loading new project
      setMessages([]);
      setShowHelp(false);
      setProjectFiles(null);
      setSandpackFiles({});
      setShowSandpack(false);
      setJobStatus(null);
      setJobErrorMessage("");
      setJobErrorDetails(null);

      // Load the project
      setTimeout(() => {
        loadProject(projectId);
      }, 100);
    } else if (!projectId && !initialLoadDone) {
      setShowHelp(true);
      setInitialLoadDone(true);
    }
  }, [searchParams]);

  // Cleanup polling on unmount
  useEffect(() => {
    return () => {
      stopPolling();
    };
  }, []);

  // Handle fullscreen toggle
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (workspaceRef.current.requestFullscreen) {
        workspaceRef.current.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(!isFullscreen);
  };

  // Listen for fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  // Diagnostic function to check localStorage
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
          if (jobId) {
            data.projectData = data.parsed.find((p) => p.id === jobId);
          }
        } catch (e) {
          data.parseError = e.message;
        }
      }

      setDiagnosticData(data);
      setShowDiagnostic(true);
    } catch (e) {
      console.error("Diagnostic error:", e);
    }
  };

  // Fix localStorage data
  const fixLocalStorage = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const projects = JSON.parse(stored);

        // Fix any projects with missing fields
        const fixed = projects.map((p) => {
          if (!p.messages) p.messages = [];
          if (!p.error && p.status === "failed") {
            p.error = "Unknown error";
            p.errorDetails = { message: "Unknown error" };
          }
          if (!p.preview) {
            p.preview =
              p.status === "failed"
                ? "Generation failed"
                : p.status === "processing"
                  ? "Processing..."
                  : "No preview";
          }
          if (!p.prompt) p.prompt = "Unknown prompt";
          if (!p.totalFiles) p.totalFiles = p.files ? p.files.length : 0;
          return p;
        });

        localStorage.setItem(STORAGE_KEY, JSON.stringify(fixed));
        setRecentProjects(fixed);

        // Reload current project if any
        if (jobId) {
          loadProject(jobId);
        }
      }
    } catch (e) {
      console.error("Fix error:", e);
    }
  };

  const loadRecentProjects = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const projects = JSON.parse(stored);
        setRecentProjects(projects);
      }
    } catch (e) {
      console.error("Error parsing stored projects", e);
    }
  };

  // Save project to localStorage
  const saveProjectToStorage = (id, files, conversation, prompt = "") => {
    try {
      const packageJson = files.find(
        (f) =>
          f.filename === "package.json" ||
          f.filename === "frontend/package.json",
      );
      let projectName = "Project";
      if (packageJson) {
        try {
          const parsed = JSON.parse(packageJson.content);
          projectName = parsed.name || projectName;
        } catch (e) {
          console.error("Error parsing package.json", e);
        }
      }

      // Count frontend and backend files
      const frontendFiles = files.filter(
        (f) =>
          f.filename.startsWith("frontend/") ||
          !f.filename.startsWith("backend/"),
      ).length;
      const backendFiles = files.filter((f) =>
        f.filename.startsWith("backend/"),
      ).length;

      const projectInfo = {
        id: id,
        title: projectName,
        timestamp: new Date().toLocaleString(),
        preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
        files: files,
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
        frontendFiles: frontendFiles,
        backendFiles: backendFiles,
      };

      const stored = localStorage.getItem(STORAGE_KEY);
      let existingProjects = [];
      if (stored) {
        try {
          existingProjects = JSON.parse(stored);
        } catch (e) {
          console.error("Error parsing stored projects", e);
        }
      }

      const updated = [
        projectInfo,
        ...existingProjects.filter((p) => p.id !== id),
      ].slice(0, 20);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setRecentProjects(updated);

      return updated;
    } catch (error) {
      console.error("Error saving project:", error);
      return [];
    }
  };

  // Save pending job to localStorage
  const savePendingJob = (id, prompt) => {
    try {
      const pendingProject = {
        id: id,
        title: "Processing...",
        timestamp: new Date().toLocaleString(),
        preview: `Building: "${prompt.substring(0, 50)}${prompt.length > 50 ? "..." : ""}"`,
        files: null,
        messages: [],
        prompt: prompt,
        status: "processing",
        createdAt: new Date().toISOString(),
        error: null,
        errorDetails: null,
        totalFiles: 0,
        frontendFiles: 0,
        backendFiles: 0,
      };

      const stored = localStorage.getItem(STORAGE_KEY);
      let existingProjects = [];
      if (stored) {
        try {
          existingProjects = JSON.parse(stored);
        } catch (e) {
          console.error("Error parsing stored projects", e);
        }
      }

      const updated = [
        pendingProject,
        ...existingProjects.filter((p) => p.id !== id),
      ].slice(0, 20);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setRecentProjects(updated);

      return updated;
    } catch (error) {
      console.error("Error saving pending job:", error);
      return [];
    }
  };

  // Update project status in localStorage
  const updateProjectStatus = (
    id,
    status,
    files = null,
    messages = [],
    errorDetails = null,
    prompt = "",
  ) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      let existingProjects = [];
      if (stored) {
        try {
          existingProjects = JSON.parse(stored);
        } catch (e) {
          console.error("Error parsing stored projects", e);
        }
      }

      const updated = existingProjects.map((project) => {
        if (project.id === id) {
          if (status === "completed" && files) {
            const packageJson = files.find(
              (f) =>
                f.filename === "package.json" ||
                f.filename === "frontend/package.json",
            );
            let projectName = "Project";
            if (packageJson) {
              try {
                const parsed = JSON.parse(packageJson.content);
                projectName = parsed.name || projectName;
              } catch (e) {
                console.error("Error parsing package.json", e);
              }
            }

            // Count frontend and backend files
            const frontendFiles = files.filter(
              (f) =>
                f.filename.startsWith("frontend/") ||
                !f.filename.startsWith("backend/"),
            ).length;
            const backendFiles = files.filter((f) =>
              f.filename.startsWith("backend/"),
            ).length;

            return {
              ...project,
              title: projectName,
              status: "completed",
              files: files,
              messages: messages,
              preview: `${files.length} files total (${frontendFiles} frontend, ${backendFiles} backend)`,
              error: null,
              errorDetails: null,
              prompt: prompt || project.prompt,
              totalFiles: files.length,
              frontendFiles: frontendFiles,
              backendFiles: backendFiles,
            };
          } else if (status === "failed") {
            return {
              ...project,
              status: "failed",
              title: "Failed Project",
              preview: "Generation failed",
              files: null,
              messages: messages,
              error: errorDetails?.message || "Unknown error",
              errorDetails: errorDetails,
              prompt: prompt || project.prompt,
            };
          } else {
            return {
              ...project,
              status: status,
              messages: messages,
            };
          }
        }
        return project;
      });

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setRecentProjects(updated);

      return updated;
    } catch (error) {
      console.error("Error updating project status:", error);
      return [];
    }
  };

  // Get project by ID from localStorage
  const getProjectById = (id) => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const projects = JSON.parse(stored);
        const project = projects.find((p) => p.id === id);
        return project;
      }
    } catch (e) {
      console.error("Error parsing stored projects", e);
    }
    return null;
  };

  // Stop polling function
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

  // Check if response is for current job
  const isResponseForCurrentJob = (id) => {
    return id === currentJobIdRef.current;
  };

  // Poll status function
  const pollStatus = async (id) => {
    if (!isPollingRef.current || !isResponseForCurrentJob(id)) {
      return;
    }

    try {
      setPollingAttempts((prev) => prev + 1);

      const response = await axios.get(`${API_BASE_URL}/status/${id}`, {
        timeout: 10000,
        signal: abortControllerRef.current?.signal,
      });

      if (!isResponseForCurrentJob(id)) {
        return;
      }

      if (response.data.status === "completed") {
        stopPolling();

        const resultResponse = await axios.get(`${API_BASE_URL}/result/${id}`, {
          signal: abortControllerRef.current?.signal,
        });

        if (!isResponseForCurrentJob(id)) {
          return;
        }

        setProjectFiles(resultResponse.data.files);
        setDownloadUrl(`${API_BASE_URL}/download/${id}`);

        // Convert to Sandpack format
        const sandpackFiles = convertToSandpackFiles(resultResponse.data.files);
        setSandpackFiles(sandpackFiles);
        setShowSandpack(true);

        setJobStatus("completed");
        setIsProcessing(false);

        const packageJson = resultResponse.data.files.find(
          (f) =>
            f.filename === "package.json" ||
            f.filename === "frontend/package.json",
        );
        let projectName = "Project";
        if (packageJson) {
          try {
            const parsed = JSON.parse(packageJson.content);
            projectName = parsed.name || projectName;
          } catch (e) {
            console.error("Error parsing package.json", e);
          }
        }

        // Count frontend and backend files
        const frontendFiles = resultResponse.data.files.filter(
          (f) =>
            f.filename.startsWith("frontend/") ||
            !f.filename.startsWith("backend/"),
        ).length;
        const backendFiles = resultResponse.data.files.filter((f) =>
          f.filename.startsWith("backend/"),
        ).length;

        const successMessage = {
          id: Date.now(),
          text: `✅ **Project Generated Successfully!**
          
I've created a complete ${projectName} project with ${resultResponse.data.files.length} files.

**Quick Stats:**
- Total Files: ${resultResponse.data.files.length}
- Frontend Files: ${frontendFiles}
- Backend Files: ${backendFiles}

You can now browse, edit, and preview the code below!`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        const allMessages = [...messages, successMessage];
        setMessages(allMessages);

        // Get the original prompt from messages
        const userPrompt =
          messages.find((m) => m.sender === "user")?.text || "";
        saveProjectToStorage(
          id,
          resultResponse.data.files,
          allMessages,
          userPrompt,
        );

        scrollToBottom();
      } else if (response.data.status === "failed") {
        if (!isResponseForCurrentJob(id)) {
          return;
        }

        stopPolling();
        setJobStatus("failed");
        setIsProcessing(false);

        // Extract error message from response
        const errorMsg =
          response.data.error?.message ||
          "Unknown error occurred during project generation";
        const errorDetails = response.data.error || { message: errorMsg };
        setJobErrorMessage(errorMsg);
        setJobErrorDetails(errorDetails);

        // Add detailed error message to chat
        const errorMessage = {
          id: Date.now(),
          text: `❌ **Project Generation Failed**

**Error:** ${errorMsg}

**Error Details:**
\`\`\`json
${JSON.stringify(errorDetails, null, 2)}
\`\`\`

**Possible reasons:**
- The AI couldn't generate valid code for your request
- The request contained invalid syntax or requirements
- There was a server-side processing error
- The prompt was too complex or ambiguous

**Suggestions:**
- Try a simpler and more specific request
- Check for any syntax errors in your prompt
- Try one of the template projects first
- Make sure your request includes specific features

Click "New Project" to try again.`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        const allMessages = [...messages, errorMessage];
        setMessages(allMessages);

        // Get the original prompt
        const userPrompt =
          messages.find((m) => m.sender === "user")?.text || "";
        updateProjectStatus(
          id,
          "failed",
          null,
          allMessages,
          errorDetails,
          userPrompt,
        );

        scrollToBottom();
      } else if (
        response.data.status === "processing" ||
        response.data.status === "running"
      ) {
        setJobStatus("processing");
        updateProjectStatus(id, "processing");
      }

      if (
        isResponseForCurrentJob(id) &&
        pollingAttempts >= 60 &&
        !showTimeoutWarning &&
        !warningDismissed
      ) {
        setShowTimeoutWarning(true);
      }
    } catch (error) {
      if (!isResponseForCurrentJob(id)) {
        return;
      }

      if (
        axios.isCancel(error) ||
        error.name === "AbortError" ||
        error.code === "ERR_CANCELED"
      ) {
        return;
      }

      console.error("Status check error:", error);

      // Handle network errors
      if (pollingAttempts > 10) {
        stopPolling();
        setJobStatus("failed");
        setIsProcessing(false);
        setJobErrorMessage(error.message);
        setJobErrorDetails({ type: "network_error", message: error.message });

        const errorMessage = {
          id: Date.now(),
          text: `❌ **Connection Error**

Unable to reach the server. Please check:

- The backend server is running at ${API_BASE_URL}
- Your internet connection
- No firewall blocking the connection

**Error details:** ${error.message}

**Technical Details:**
\`\`\`
Type: Network Error
Code: ${error.code || "N/A"}
Status: ${error.response?.status || "N/A"}
\`\`\`

**Solutions:**
1. Start the backend server with: \`uvicorn main:app --reload\`
2. Check if the server is running on port 8000
3. Disable any firewall temporarily
4. Try refreshing the page`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        const allMessages = [...messages, errorMessage];
        setMessages(allMessages);

        // Get the original prompt
        const userPrompt =
          messages.find((m) => m.sender === "user")?.text || "";
        updateProjectStatus(
          id,
          "failed",
          null,
          allMessages,
          { type: "network_error", message: error.message },
          userPrompt,
        );

        scrollToBottom();
      }
    }
  };

  // Start continuous polling
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
      if (isPollingRef.current && isResponseForCurrentJob(id)) {
        pollStatus(id);
      }
    }, 2000);
  };

  // Load project from localStorage or API
  const loadProject = async (id) => {
    // Prevent multiple loads
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
      // FIRST: Check API for current status
      let apiStatus = null;
      let apiError = null;

      try {
        const statusResponse = await axios.get(`${API_BASE_URL}/status/${id}`);
        apiStatus = statusResponse.data;
      } catch (apiErr) {
        apiError = apiErr;
      }

      // SECOND: Check localStorage
      const project = getProjectById(id);

      // PRIORITY 1: If API says completed, use API data
      if (apiStatus && apiStatus.status === "completed") {
        try {
          const resultResponse = await axios.get(
            `${API_BASE_URL}/result/${id}`,
          );
          setProjectFiles(resultResponse.data.files);
          setDownloadUrl(`${API_BASE_URL}/download/${id}`);

          // Convert to Sandpack format
          const sandpackFiles = convertToSandpackFiles(
            resultResponse.data.files,
          );
          setSandpackFiles(sandpackFiles);
          setShowSandpack(true);

          setJobStatus("completed");

          const packageJson = resultResponse.data.files.find(
            (f) =>
              f.filename === "package.json" ||
              f.filename === "frontend/package.json",
          );
          let projectName = "Project";
          if (packageJson) {
            try {
              const parsed = JSON.parse(packageJson.content);
              projectName = parsed.name || projectName;
            } catch (e) {
              console.error("Error parsing package.json", e);
            }
          }

          // Count frontend and backend files
          const frontendFiles = resultResponse.data.files.filter(
            (f) =>
              f.filename.startsWith("frontend/") ||
              !f.filename.startsWith("backend/"),
          ).length;
          const backendFiles = resultResponse.data.files.filter((f) =>
            f.filename.startsWith("backend/"),
          ).length;

          const successMessage = {
            id: Date.now(),
            text: `✅ **Project Loaded Successfully!**
            
Loaded ${projectName} with ${resultResponse.data.files.length} files.

**Quick Stats:**
- Total Files: ${resultResponse.data.files.length}
- Frontend Files: ${frontendFiles}
- Backend Files: ${backendFiles}

You can now browse, edit, and preview the code below!`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };

          setMessages([successMessage]);

          // Get prompt from localStorage if available
          const userPrompt = project?.prompt || "";
          saveProjectToStorage(
            id,
            resultResponse.data.files,
            [successMessage],
            userPrompt,
          );
          setIsLoading(false);
          scrollToBottom();
          return;
        } catch (resultErr) {
          // Fall through to other options
        }
      }

      // PRIORITY 2: If API says processing
      if (
        apiStatus &&
        (apiStatus.status === "processing" || apiStatus.status === "running")
      ) {
        setJobStatus("processing");
        setIsProcessing(true);
        setIsLoading(false);

        // Use messages from localStorage if available
        if (project && project.messages) {
          setMessages(project.messages);
        } else {
          const processingMessage = {
            id: Date.now(),
            text: `🔄 **Project is still processing...**

Job ID: ${id}

The project is still being built. This may take a few moments.

I'll update you when it's ready!`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
          setMessages([processingMessage]);
        }

        startPolling(id);
        return;
      }

      // PRIORITY 3: If API says failed
      if (apiStatus && apiStatus.status === "failed") {
        setJobStatus("failed");

        const errorMsg =
          apiStatus.error?.message || "Project generation failed";
        const errorDetails = apiStatus.error || { message: errorMsg };
        setJobErrorMessage(errorMsg);
        setJobErrorDetails(errorDetails);

        const errorMessage = {
          id: Date.now(),
          text: `❌ **Project Failed**

This project failed to generate properly.

**Error:** ${errorMsg}

**Error Details:**
\`\`\`json
${JSON.stringify(errorDetails, null, 2)}
\`\`\`

**What happened:**
- The AI was unable to generate valid code for this request
- The request might have contained invalid syntax
- There was a server-side processing error

**Next steps:**
- Try creating a new project with a different prompt
- Use one of the template projects below
- Make your request more specific

Click "New Project" to start fresh.`,
          sender: "ai",
          timestamp: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        setMessages([errorMessage]);

        // Update localStorage with failed status
        if (project) {
          updateProjectStatus(
            id,
            "failed",
            null,
            [errorMessage],
            errorDetails,
            project.prompt,
          );
        } else {
          // Create new failed project in localStorage
          const failedProject = {
            id: id,
            title: "Failed Project",
            timestamp: new Date().toLocaleString(),
            preview: "Generation failed",
            files: null,
            messages: [errorMessage],
            prompt: "Unknown",
            status: "failed",
            createdAt: new Date().toISOString(),
            error: errorMsg,
            errorDetails: errorDetails,
            totalFiles: 0,
            frontendFiles: 0,
            backendFiles: 0,
          };

          const stored = localStorage.getItem(STORAGE_KEY);
          let existingProjects = [];
          if (stored) {
            try {
              existingProjects = JSON.parse(stored);
            } catch (e) {
              console.error("Error parsing stored projects", e);
            }
          }

          const updated = [
            failedProject,
            ...existingProjects.filter((p) => p.id !== id),
          ].slice(0, 20);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
          setRecentProjects(updated);
        }

        setIsLoading(false);
        scrollToBottom();
        return;
      }

      // PRIORITY 4: Use localStorage data if API is not available
      if (project) {
        if (project.files) {
          // Completed project from localStorage
          setProjectFiles(project.files);
          setMessages(project.messages || []);
          setDownloadUrl(`${API_BASE_URL}/download/${id}`);

          // Convert to Sandpack format
          const sandpackFiles = convertToSandpackFiles(project.files);
          setSandpackFiles(sandpackFiles);
          setShowSandpack(true);

          setJobStatus("completed");
          setIsLoading(false);
          scrollToBottom();
          return;
        } else if (project.status === "processing") {
          // Processing project from localStorage
          setMessages(project.messages || []);
          setJobStatus("processing");
          setIsProcessing(true);
          setIsLoading(false);
          startPolling(id);
          return;
        } else if (project.status === "failed") {
          // Failed project from localStorage
          setJobStatus("failed");

          const errorMsg = project.error || "This project failed to generate";
          const errorDetails = project.errorDetails || { message: errorMsg };

          setJobErrorMessage(errorMsg);
          setJobErrorDetails(errorDetails);

          const errorMessage = {
            id: Date.now(),
            text: `❌ **Project Failed to Load**

This project failed to generate properly.

**Error:** ${errorMsg}

**Details:**
\`\`\`json
${JSON.stringify(errorDetails, null, 2)}
\`\`\`

**What happened:**
- The AI was unable to generate valid code for this request
- The project might have had syntax errors
- The server might have encountered an error

**Next steps:**
- Try creating a new project with a different prompt
- Use one of the template projects below
- Make your request more specific

Click "New Project" to start fresh.`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };

          setMessages([errorMessage]);
          setIsLoading(false);
          scrollToBottom();
          return;
        }
      }

      // PRIORITY 5: No data found anywhere
      setJobStatus("failed");
      setJobErrorMessage("Project not found");

      const errorMessage = {
        id: Date.now(),
        text: `❌ **Project Not Found**

No project found with ID: ${id}

The project may have expired or been deleted.

**Troubleshooting:**
- Check if the backend server is running at ${API_BASE_URL}
- The project ID might be incorrect
- Try creating a new project

Click "New Project" to start a new one.`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages([errorMessage]);
      setIsLoading(false);
      scrollToBottom();
    } catch (error) {
      console.error("Error loading project:", error);
      setJobStatus("failed");
      setJobErrorMessage(error.message);
      setJobErrorDetails({ type: "load_error", message: error.message });

      const errorMessage = {
        id: Date.now(),
        text: `❌ **Error Loading Project**

Could not load the project. The project may have expired or been deleted.

**Error details:** ${error.message}

**Possible reasons:**
- The project ID is invalid
- The project has been deleted from the server
- The server is not responding

**Solutions:**
- Check if the backend server is running
- Try creating a new project
- Clear your browser cache and try again`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages([errorMessage]);
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
      const buildResponse = await axios.post(`${API_BASE_URL}/build`, null, {
        params: { prompt },
        timeout: 30000,
      });

      const { job_id } = buildResponse.data;

      if (!job_id) {
        throw new Error("No job ID returned from server");
      }

      savePendingJob(job_id, prompt);
      setSearchParams({ project: job_id });

      const processingMessage = {
        id: Date.now(),
        text: `🔄 **Processing your request...**\n\n**Job ID:** ${job_id}\n**Prompt:** "${prompt.substring(0, 100)}${prompt.length > 100 ? "..." : ""}"\n**Status:** Building your project...\n\nThis may take 30-60 seconds depending on complexity.`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, processingMessage]);
      scrollToBottom();

      startPolling(job_id);
    } catch (error) {
      console.error("Build request failed:", error);

      let errorMessage = "Failed to start project generation.";
      let errorDetails = {};

      if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout. The server took too long to respond.";
        errorDetails = { type: "timeout", code: "ECONNABORTED" };
      } else if (error.response) {
        errorMessage = `Server error: ${error.response.status} - ${error.response.data?.detail || error.response.statusText}`;
        errorDetails = {
          type: "server_error",
          status: error.response.status,
          data: error.response.data,
        };
      } else if (error.request) {
        errorMessage =
          "Cannot connect to server. Please check if the backend is running.";
        errorDetails = { type: "connection_error", message: error.message };
      } else {
        errorMessage = error.message;
        errorDetails = { type: "unknown_error", message: error.message };
      }

      const errorMsg = {
        id: Date.now(),
        text: `❌ **Build Request Failed**

**Error:** ${errorMessage}

**Technical Details:**
\`\`\`json
${JSON.stringify(errorDetails, null, 2)}
\`\`\`

**Troubleshooting:**
1. Make sure the backend server is running at ${API_BASE_URL}
2. Check if the server is accessible (try opening ${API_BASE_URL}/docs in browser)
3. Verify there are no CORS issues
4. Try again with a simpler request

Click "New Project" to try again.`,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, errorMsg]);
      setIsProcessing(false);
      setJobStatus("error");
      scrollToBottom();
    }
  };

  const handleSendMessage = () => {
    if (message.trim() && !isProcessing) {
      setInputError("");

      const userMessageObj = {
        id: Date.now(),
        text: message,
        sender: "user",
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      setMessages((prev) => [...prev, userMessageObj]);
      scrollToBottom();

      const lowercaseMsg = message.toLowerCase();

      const isProjectRequest =
        lowercaseMsg.includes("create") ||
        lowercaseMsg.includes("build") ||
        lowercaseMsg.includes("make") ||
        lowercaseMsg.includes("generate") ||
        lowercaseMsg.includes("develop") ||
        lowercaseMsg.includes("website") ||
        lowercaseMsg.includes("app") ||
        lowercaseMsg.includes("application");

      const matchedTemplate = allTemplates.find((t) =>
        lowercaseMsg.includes(t.name.toLowerCase()),
      );

      if (isProjectRequest || matchedTemplate) {
        setIsTyping(true);
        setShowHelp(false);

        const currentMessage = message;
        setMessage("");

        setTimeout(() => {
          setIsTyping(false);

          const aiMessageObj = {
            id: Date.now() + 1,
            text: `🔄 **Starting project generation...**\n\nI'll create a complete ${matchedTemplate ? matchedTemplate.name : "custom"} project for you. This will take a few moments. Please wait...`,
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };

          setMessages((prev) => [...prev, aiMessageObj]);
          scrollToBottom();
          handleBuildRequest(currentMessage);
        }, 1000);
      } else {
        setMessage("");
        setShowHelp(false);
        setIsTyping(true);

        setTimeout(() => {
          const aiMessageObj = {
            id: Date.now() + 1,
            text: "I can help you build complete projects! Try asking me to create something specific like:\n\n• 'Create a modern education ERP website'\n• 'Build an e-commerce platform'\n• 'Make a social media dashboard'\n• 'Generate a chat application'\n\nWhat would you like me to build for you today?",
            sender: "ai",
            timestamp: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };

          setMessages((prev) => [...prev, aiMessageObj]);
          setIsTyping(false);
          scrollToBottom();
        }, 1500);
      }
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
    currentJobIdRef.current = null;

    setSearchParams({});

    scrollToBottom();
  };

  const handleTemplateClick = (templateName) => {
    const templateMsg = {
      id: Date.now(),
      text: `I want to build a ${templateName} application`,
      sender: "user",
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages([templateMsg]);
    setShowHelp(false);
    scrollToBottom();

    let prompt = "";

    switch (templateName) {
      case "Education ERP":
        prompt =
          "Create a complete Education ERP website with student management, teacher portal, attendance tracking, and grade books. Include responsive dashboard.";
        break;
      case "E-commerce":
        prompt =
          "Build a full E-commerce website with product catalog, shopping cart, and user authentication.";
        break;
      case "Social Media":
        prompt =
          "Create a Social Media platform with user profiles, posts, likes, and comments.";
        break;
      case "Chat App":
        prompt =
          "Build a Real-time Chat Application with private messaging and group chats.";
        break;
      case "Video App":
        prompt =
          "Create a Video Streaming Platform with video upload, video player, playlists, and subscriptions.";
        break;
      case "Music App":
        prompt =
          "Build a Music Streaming App with audio playback, playlists, and album browsing.";
        break;
      case "Food App":
        prompt =
          "Create a Food Delivery App with restaurant listings, menu browsing, and order tracking.";
        break;
      case "Travel App":
        prompt =
          "Build a Travel Booking Platform with property listings, search filters, and booking calendar.";
        break;
      default:
        prompt = `Create a complete ${templateName} application with modern UI and responsive design.`;
    }

    handleBuildRequest(prompt);
  };

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
    }
  };

  // Handle project click from sidebar
  const handleProjectClick = (jobId) => {
    // Clear current state before loading new project
    setMessages([]);
    setShowHelp(false);
    setProjectFiles(null);
    setSandpackFiles({});
    setShowSandpack(false);
    setJobStatus(null);
    setJobErrorMessage("");
    setJobErrorDetails(null);
    setShowMobileWorkspace(false);
    // Set the URL parameter
    setSearchParams({ project: jobId });
  };

  // Loading animation component
  const ProcessingAnimation = () => {
    const [dots, setDots] = useState("");

    useEffect(() => {
      const interval = setInterval(() => {
        setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
      }, 500);
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="relative">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-t-transparent rounded-full"
            style={{ borderColor: theme.green, borderTopColor: "transparent" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <BsRobot className="text-xl" style={{ color: theme.green }} />
          </div>
        </div>
        <p
          className="mt-4 text-sm font-medium"
          style={{ color: theme.textPrimary }}
        >
          Building your project{dots}
        </p>
        {pollingAttempts > 0 && (
          <p className="mt-1 text-xs" style={{ color: theme.textSecondary }}>
            Elapsed: {Math.floor(pollingAttempts * 2)} seconds
          </p>
        )}
      </div>
    );
  };

  // Enhanced Error Display Component
  const ErrorDisplay = ({ message, details }) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 rounded-xl overflow-hidden border"
        style={{
          borderColor: theme.red + "40",
          backgroundColor: theme.red + "10",
        }}
      >
        <div className="flex items-start gap-4 p-6">
          <div
            className="p-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: theme.red + "20" }}
          >
            <BsExclamationTriangle
              className="text-2xl"
              style={{ color: theme.red }}
            />
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: theme.red }}
            >
              Project Generation Failed
            </h3>
            <div className="space-y-3">
              <div
                className="p-3 rounded-lg"
                style={{
                  backgroundColor: theme.card,
                  borderLeft: `4px solid ${theme.red}`,
                }}
              >
                <p
                  className="text-sm font-mono"
                  style={{ color: theme.textPrimary }}
                >
                  {message || "Unknown error occurred"}
                </p>
              </div>

              {details && (
                <div>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-xs mb-2"
                    style={{ color: theme.textSecondary }}
                  >
                    <BsBug className="text-xs" />
                    {showDetails
                      ? "Hide technical details"
                      : "Show technical details"}
                  </button>

                  {showDetails && (
                    <pre
                      className="p-3 rounded-lg text-xs overflow-auto max-h-40"
                      style={{
                        backgroundColor: theme.card,
                        color: theme.textSecondary,
                      }}
                    >
                      {JSON.stringify(details, null, 2)}
                    </pre>
                  )}
                </div>
              )}

              <div className="mt-4">
                <h4
                  className="text-sm font-semibold mb-2"
                  style={{ color: theme.textPrimary }}
                >
                  Common Solutions:
                </h4>
                <ul className="space-y-2">
                  <li
                    className="flex items-start gap-2 text-xs"
                    style={{ color: theme.textSecondary }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{ backgroundColor: theme.green }}
                    ></span>
                    <span>Try a simpler or more specific request</span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-xs"
                    style={{ color: theme.textSecondary }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{ backgroundColor: theme.green }}
                    ></span>
                    <span>
                      Check if your request has valid syntax and clear
                      requirements
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-xs"
                    style={{ color: theme.textSecondary }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{ backgroundColor: theme.green }}
                    ></span>
                    <span>
                      Try again with a different project type from the templates
                    </span>
                  </li>
                  <li
                    className="flex items-start gap-2 text-xs"
                    style={{ color: theme.textSecondary }}
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full mt-1.5"
                      style={{ backgroundColor: theme.green }}
                    ></span>
                    <span>
                      Make sure the backend server is running properly
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleNewChat}
                  className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
                  style={{ backgroundColor: theme.green }}
                >
                  <HiOutlinePlus className="text-base" />
                  New Project
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.reload()}
                  className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                  style={{
                    backgroundColor: theme.card,
                    color: theme.textPrimary,
                  }}
                >
                  <HiOutlineRefresh className="text-base" />
                  Refresh Page
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Diagnostic Display Component
  const DiagnosticDisplay = ({ data, onClose, onFix }) => {
    if (!data) return null;

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-6 rounded-xl overflow-hidden border"
        style={{
          borderColor: theme.yellow + "40",
          backgroundColor: theme.yellow + "10",
        }}
      >
        <div className="flex items-start gap-4 p-6">
          <div
            className="p-3 rounded-full flex-shrink-0"
            style={{ backgroundColor: theme.yellow + "20" }}
          >
            <BsWrench className="text-2xl" style={{ color: theme.yellow }} />
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: theme.yellow }}
            >
              Diagnostic Information
            </h3>
            <div className="space-y-3">
              <pre
                className="p-3 rounded-lg text-xs overflow-auto max-h-96"
                style={{
                  backgroundColor: theme.card,
                  color: theme.textSecondary,
                }}
              >
                {JSON.stringify(data, null, 2)}
              </pre>

              <div className="flex gap-3 mt-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onFix}
                  className="px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2"
                  style={{ backgroundColor: theme.green }}
                >
                  <BsWrench className="text-base" />
                  Fix localStorage
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onClose}
                  className="px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2"
                  style={{
                    backgroundColor: theme.card,
                    color: theme.textPrimary,
                  }}
                >
                  <HiOutlineX className="text-base" />
                  Close
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  // Get template for Sandpack
  const getSandpackTemplate = () => {
    // Check if it's a React project
    if (
      sandpackFiles["/src/App.jsx"] ||
      sandpackFiles["/src/App.js"] ||
      sandpackFiles["/src/main.jsx"]
    ) {
      return "react";
    }
    return "react"; // Default to react
  };

  // Get dependencies from package.json and ensure Tailwind is included
  const getDependencies = () => {
    const packageJsonFile = projectFiles?.find(
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

    // Ensure Tailwind dependencies are present
    return {
      ...dependencies,
      react: dependencies.react || "^18.2.0",
      "react-dom": dependencies["react-dom"] || "^18.2.0",
      "react-router-dom": dependencies["react-router-dom"] || "^6.3.0",
    };
  };

  // Prepare recent chats for sidebar with enhanced information
  const recentChats = recentProjects.map((project) => {
    let icon, color, title;

    if (project.status === "processing") {
      icon = <HiOutlineRefresh className="animate-spin" />;
      color = theme.yellow;
      title = project.title || "Processing...";
    } else if (project.status === "failed") {
      icon = <HiOutlineExclamation />;
      color = theme.red;
      title = "Failed Project";
    } else if (project.status === "completed") {
      icon = <HiOutlineCheckCircle />;
      color = theme.green;
      title = project.title || "Completed Project";
    } else {
      icon = <HiOutlineFolder />;
      color = theme.textPrimary;
      title = project.title || "Project";
    }

    // Create preview text without "frontend" word
    let previewText = "";
    if (project.status === "completed" && project.totalFiles) {
      previewText = `${project.totalFiles} files total (${project.frontendFiles || 0} frontend, ${project.backendFiles || 0} backend)`;
    } else if (project.prompt) {
      previewText =
        project.prompt.substring(0, 50) +
        (project.prompt.length > 50 ? "..." : "");
    } else {
      previewText = project.preview || "No preview";
    }

    return {
      id: project.id,
      title: title,
      preview: previewText,
      time: project.timestamp,
      icon: icon,
      color: color,
      jobId: project.id,
      status: project.status,
      prompt: project.prompt,
      error: project.error,
      totalFiles: project.totalFiles || 0,
      frontendFiles: project.frontendFiles || 0,
      backendFiles: project.backendFiles || 0,
    };
  });

  // Resizable Panel Component (moved inside Home to access theme)
  const ResizablePanel = ({ children, defaultWidth = 25, minWidth = 15, maxWidth = 40, direction = "right", storageKey = "panel_width" }) => {
    const [width, setWidth] = useState(() => {
      const saved = localStorage.getItem(storageKey);
      return saved ? parseInt(saved) : defaultWidth;
    });
    const [isResizing, setIsResizing] = useState(false);
    const panelRef = useRef(null);

    useEffect(() => {
      const handleMouseMove = (e) => {
        if (!isResizing) return;

        const container = panelRef.current?.parentElement;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        let newWidth;

        if (direction === "right") {
          newWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        } else {
          newWidth = ((containerRect.right - e.clientX) / containerRect.width) * 100;
        }

        // Clamp width between min and max
        newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
        
        setWidth(newWidth);
        localStorage.setItem(storageKey, Math.round(newWidth));
      };

      const handleMouseUp = () => {
        setIsResizing(false);
        document.body.style.cursor = "default";
        document.body.style.userSelect = "auto";
      };

      if (isResizing) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        document.body.style.cursor = "col-resize";
        document.body.style.userSelect = "none";
      }

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isResizing, direction, minWidth, maxWidth]);

    return (
      <div
        ref={panelRef}
        className="relative h-full"
        style={{ width: `${width}%` }}
      >
        {children}
        <div
          className={`absolute top-0 bottom-0 w-1 cursor-col-resize hover:bg-opacity-50 transition-colors ${
            direction === "right" ? "-right-0.5" : "-left-0.5"
          } ${isResizing ? "bg-blue-500" : "hover:bg-blue-500"}`}
          style={{
            backgroundColor: isResizing ? theme.blue : "transparent",
            zIndex: 20,
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsResizing(true);
          }}
        />
      </div>
    );
  };

  return (
    <div
      className="h-screen w-full overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: theme.bg }}
    >
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isMobileMenuOpen ? 0 : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed inset-y-0 left-0 w-[280px] z-50 lg:hidden shadow-xl overflow-y-auto"
        style={{ backgroundColor: theme.sidebar }}
      >
        <SidebarContent
          recentChats={recentChats}
          templates={sidebarTemplates}
          allTemplates={allTemplates}
          onClose={() => setIsMobileMenuOpen(false)}
          theme={theme}
          hoveredChat={hoveredChat}
          setHoveredChat={setHoveredChat}
          onNewChat={handleNewChat}
          onProjectClick={handleProjectClick}
          onTemplateClick={handleTemplateClick}
          currentTheme={currentTheme}
          toggleTheme={toggleTheme}
        />
      </motion.aside>

      {/* Desktop Layout */}
      <div className="flex h-full w-full">
        {/* Desktop Sidebar with Collapse Toggle */}
        <motion.aside
          animate={{ width: sidebarCollapsed ? 80 : 288 }}
          className="hidden lg:block h-full border-r relative transition-all duration-300"
          style={{ backgroundColor: theme.sidebar, borderColor: theme.border }}
        >
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="absolute -right-3 top-20 z-10 p-1.5 rounded-full border shadow-lg"
            style={{
              backgroundColor: theme.card,
              borderColor: theme.border,
              color: theme.textPrimary,
            }}
          >
            {sidebarCollapsed ? (
              <HiOutlineChevronRight />
            ) : (
              <HiOutlineChevronLeft />
            )}
          </button>

          {sidebarCollapsed ? (
            <CollapsedSidebar
              theme={theme}
              onNewChat={handleNewChat}
              recentChats={recentChats}
              onProjectClick={handleProjectClick}
            />
          ) : (
            <SidebarContent
              recentChats={recentChats}
              templates={sidebarTemplates}
              allTemplates={allTemplates}
              theme={theme}
              hoveredChat={hoveredChat}
              setHoveredChat={setHoveredChat}
              onNewChat={handleNewChat}
              onProjectClick={handleProjectClick}
              onTemplateClick={handleTemplateClick}
              currentTheme={currentTheme}
              toggleTheme={toggleTheme}
            />
          )}
        </motion.aside>

        {/* Main Content */}
        <main className="flex-1 h-full flex flex-col w-full min-w-0">
          {/* Fixed Header */}
          <div
            className="flex-shrink-0 border-b w-full"
            style={{
              backgroundColor: theme.sidebar,
              borderColor: theme.border,
            }}
          >
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsMobileMenuOpen(true)}
                  className="lg:hidden p-2 rounded-full"
                  style={{
                    backgroundColor: theme.card,
                    color: theme.textPrimary,
                  }}
                >
                  <HiOutlineMenu className="text-lg" />
                </button>
                <h2
                  className="text-sm font-medium hidden sm:block"
                  style={{ color: theme.textPrimary }}
                >
                  AI Developer Assistant
                </h2>
              </div>

              <div className="flex items-center gap-2">
                {/* Theme Toggle Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={toggleTheme}
                  className="p-2 rounded-full"
                  style={{
                    backgroundColor: theme.card,
                    color: theme.textPrimary,
                  }}
                  title={
                    currentTheme === "dark"
                      ? "Switch to Light Mode"
                      : "Switch to Dark Mode"
                  }
                >
                  {currentTheme === "dark" ? (
                    <HiOutlineSun className="text-lg" />
                  ) : (
                    <HiOutlineMoon className="text-lg" />
                  )}
                </motion.button>

                {/* Mobile Workspace Toggle Button */}
                {jobStatus === "completed" && (
                  <button
                    onClick={() => setShowMobileWorkspace(!showMobileWorkspace)}
                    className="lg:hidden p-2 rounded-full"
                    style={{
                      backgroundColor: theme.card,
                      color: showMobileWorkspace ? theme.green : theme.textPrimary,
                    }}
                    title={showMobileWorkspace ? "Show Chat" : "Show Workspace"}
                  >
                    {showMobileWorkspace ? (
                      <HiOutlineChat className="text-lg" />
                    ) : (
                      <HiOutlineCode className="text-lg" />
                    )}
                  </button>
                )}

                {jobId && (
                  <>
                    <span
                      className="text-xs px-2 py-1 rounded-full hidden sm:inline-block"
                      style={{
                        backgroundColor: theme.card,
                        color: theme.textSecondary,
                      }}
                    >
                      Job: {jobId.substring(0, 8)}...
                    </span>
                    {jobStatus === "processing" && isPollingActive && (
                      <div className="flex items-center gap-1">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        >
                          <HiOutlineRefresh
                            className="text-lg"
                            style={{ color: theme.green }}
                          />
                        </motion.div>
                        {pollingAttempts > 0 && (
                          <span
                            className="text-xs hidden sm:inline"
                            style={{ color: theme.textSecondary }}
                          >
                            {Math.floor(pollingAttempts * 2)}s
                          </span>
                        )}
                      </div>
                    )}
                    {jobStatus === "completed" && (
                      <span
                        className="text-xs px-2 py-1 rounded-full flex items-center gap-1 hidden sm:flex"
                        style={{
                          backgroundColor: theme.green + "20",
                          color: theme.green,
                        }}
                      >
                        <HiOutlineCheckCircle className="text-xs" />
                        Completed
                      </span>
                    )}
                    {jobStatus === "failed" && (
                      <span
                        className="text-xs px-2 py-1 rounded-full flex items-center gap-1 hidden sm:flex"
                        style={{
                          backgroundColor: theme.red + "20",
                          color: theme.red,
                        }}
                      >
                        <HiOutlineExclamation className="text-xs" />
                        Failed
                      </span>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Two Column Layout - Responsive */}
          <div className="flex-1 flex overflow-hidden">
            {/* Left Column - Messages Area */}
            <div
              className={`
                ${jobStatus === "completed" ? "lg:w-2/5" : "w-full"} 
                ${jobStatus === "completed" && showMobileWorkspace ? "hidden lg:flex" : "flex"}
                border-r overflow-hidden flex-col transition-all duration-300
              `}
              style={{ borderColor: theme.border }}
            >
              <div
                className="p-3 border-b"
                style={{
                  backgroundColor: theme.card,
                  borderColor: theme.border,
                }}
              >
                <h3
                  className="text-xs font-semibold uppercase"
                  style={{ color: theme.textSecondary }}
                >
                  AI Conversation
                </h3>
              </div>
              <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto"
                style={{ backgroundColor: theme.bg }}
              >
                <div className="p-6">
                  <div className="max-w-full mx-auto">
                    {/* Timeout Warning Banner */}
                    <AnimatePresence>
                      {showTimeoutWarning &&
                        jobStatus === "processing" &&
                        !warningDismissed && (
                          <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="mb-4 p-4 rounded-lg border"
                            style={{
                              backgroundColor: theme.yellow + "20",
                              borderColor: theme.yellow,
                            }}
                          >
                            <div className="flex items-start gap-3">
                              <BsHourglassSplit
                                className="text-xl flex-shrink-0 animate-pulse"
                                style={{ color: theme.yellow }}
                              />
                              <div className="flex-1">
                                <h4
                                  className="text-sm font-semibold"
                                  style={{ color: theme.yellow }}
                                >
                                  Taking longer than expected
                                </h4>
                                <p
                                  className="text-xs mt-1"
                                  style={{ color: theme.textSecondary }}
                                >
                                  Your project is still being built. Complex
                                  projects can take 2-5 minutes.
                                </p>
                                <div className="flex gap-2 mt-3">
                                  <button
                                    onClick={() => {
                                      setWarningDismissed(true);
                                      setShowTimeoutWarning(false);
                                    }}
                                    className="text-xs px-3 py-1.5 rounded-full"
                                    style={{
                                      backgroundColor: "transparent",
                                      color: theme.textSecondary,
                                      border: `1px solid ${theme.border}`,
                                    }}
                                  >
                                    Dismiss
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Diagnostic Display */}
                    {showDiagnostic && diagnosticData && (
                      <DiagnosticDisplay
                        data={diagnosticData}
                        onClose={() => setShowDiagnostic(false)}
                        onFix={fixLocalStorage}
                      />
                    )}

                    <AnimatePresence mode="wait">
                      {showHelp && messages.length === 0 ? (
                        /* Help Section */
                        <motion.div
                          key="help"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h2
                            className="text-lg sm:text-xl font-semibold mb-2"
                            style={{ color: theme.textPrimary }}
                          >
                            What would you like to build today?
                          </h2>
                          <p
                            className="text-sm mb-6"
                            style={{ color: theme.textSecondary }}
                          >
                            Ask me to build complete projects and get a VS
                            Code-like environment!
                          </p>

                          {/* Project Templates - Show all 8 templates in help section */}
                          <div className="mb-8">
                            <h3
                              className="text-sm font-semibold mb-2"
                              style={{ color: theme.textPrimary }}
                            >
                              Popular Projects
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                              {allTemplates.map((template, index) => (
                                <motion.button
                                  key={index}
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.98 }}
                                  className="text-white p-3 rounded-xl flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-all"
                                  style={{ backgroundColor: template.bg }}
                                  onClick={() =>
                                    handleTemplateClick(template.name)
                                  }
                                >
                                  <span className="text-xl">
                                    {template.icon}
                                  </span>
                                  <span className="text-xs font-medium text-center">
                                    {template.name}
                                  </span>
                                </motion.button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        /* Messages */
                        <motion.div
                          key="messages"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          {messages.map((msg, index) => (
                            <motion.div
                              key={msg.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: index * 0.05,
                              }}
                              className={`mb-4 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                                  msg.sender === "user"
                                    ? "rounded-br-none"
                                    : "rounded-bl-none"
                                }`}
                                style={{
                                  backgroundColor:
                                    msg.sender === "user"
                                      ? theme.green
                                      : theme.card,
                                  color:
                                    msg.sender === "user"
                                      ? "#FFFFFF"
                                      : theme.textPrimary,
                                }}
                              >
                                {msg.sender === "ai" && (
                                  <div className="flex items-center gap-2 mb-2">
                                    <BsRobot className="text-xs" />
                                    <span className="text-xs font-medium">
                                      AI Developer Assistant
                                    </span>
                                  </div>
                                )}
                                <div className="text-sm whitespace-pre-wrap font-mono">
                                  {msg.text}
                                </div>
                                <p className="text-xs mt-2 opacity-70 text-right">
                                  {msg.timestamp}
                                </p>
                              </div>
                            </motion.div>
                          ))}

                          {/* Processing Animation */}
                          {isProcessing &&
                            jobStatus === "processing" &&
                            !projectFiles &&
                            isPollingActive && (
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex justify-center"
                              >
                                <ProcessingAnimation />
                              </motion.div>
                            )}

                          {/* Error Display for Failed Jobs */}
                          {jobStatus === "failed" && jobErrorMessage && (
                            <ErrorDisplay
                              message={jobErrorMessage}
                              details={jobErrorDetails}
                            />
                          )}

                          {/* Typing indicator */}
                          {isTyping && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="flex justify-start"
                            >
                              <div
                                className="rounded-2xl rounded-bl-none px-4 py-3"
                                style={{ backgroundColor: theme.card }}
                              >
                                <div className="flex gap-1">
                                  <motion.span
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Infinity,
                                    }}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{
                                      backgroundColor: theme.textSecondary,
                                    }}
                                  />
                                  <motion.span
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Infinity,
                                      delay: 0.2,
                                    }}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{
                                      backgroundColor: theme.textSecondary,
                                    }}
                                  />
                                  <motion.span
                                    animate={{ y: [0, -3, 0] }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Infinity,
                                      delay: 0.4,
                                    }}
                                    className="w-1.5 h-1.5 rounded-full"
                                    style={{
                                      backgroundColor: theme.textSecondary,
                                    }}
                                  />
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
              </div>

              {/* Fixed Input Area for Messages */}
              <div
                className="flex-shrink-0 border-t w-full p-3"
                style={{
                  backgroundColor: theme.sidebar,
                  borderColor: theme.border,
                }}
              >
                <div className="max-w-full mx-auto">
                  <div className="relative">
                    <textarea
                      ref={inputRef}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me to build any project..."
                      className={`w-full pl-3 placeholder:text-xs pr-24 py-4 border rounded-md text-sm focus:outline-none focus:ring-2 resize-none transition-colors ${
                        inputError
                          ? "border-red-500 focus:ring-red-500"
                          : "focus:ring-[#22C55E]"
                      }`}
                      style={{
                        backgroundColor: theme.inputBg,
                        borderColor: inputError ? theme.red : theme.border,
                        color: theme.textPrimary,
                        minHeight: "70px",
                        maxHeight: "160px",
                        resize: "none",
                      }}
                      rows="2"
                      onInput={(e) => {
                        e.target.style.height = "auto";
                        e.target.style.height =
                          Math.min(e.target.scrollHeight, 150) + "px";
                      }}
                      disabled={isProcessing && jobStatus === "processing"}
                    />
                    <div className="absolute right-2 bottom-3 flex items-center gap-2">
                      <button
                        onClick={handleSendMessage}
                        disabled={isProcessing && jobStatus === "processing"}
                        className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                        style={{
                          backgroundColor:
                            isProcessing && jobStatus === "processing"
                              ? theme.textSecondary
                              : theme.green,
                        }}
                        title={
                          isProcessing
                            ? "Currently building a project"
                            : "Send message"
                        }
                      >
                        <HiOutlinePaperAirplane className="text-sm" />
                      </button>
                      <button
                        onClick={handleNewChat}
                        className="p-2 text-white rounded-full transition-colors hover:opacity-90 flex-shrink-0"
                        style={{ backgroundColor: theme.card }}
                        title="Start new chat"
                      >
                        <HiOutlinePlus className="text-sm" />
                      </button>
                    </div>
                  </div>
                  {inputError && (
                    <p className="text-xs mt-1 text-red-500">{inputError}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Workspace Area - Responsive */}
            {jobStatus === "completed" && (
              <div
                ref={workspaceRef}
                className={`
                  lg:w-3/5 
                  ${showMobileWorkspace ? "w-full" : "hidden lg:block"}
                  overflow-hidden flex flex-col transition-all duration-300
                `}
                style={{ backgroundColor: theme.bg }}
              >
                {/* Workspace Header with View Toggles and Fullscreen */}
                <div
                  className="px-3 p-1/2 border-b flex items-center justify-between"
                  style={{
                    backgroundColor: theme.card,
                    borderColor: theme.border,
                  }}
                >
                  <div className="flex items-center gap-2">
                    <h3
                      className="text-xs font-semibold uppercase"
                      style={{ color: theme.textSecondary }}
                    >
                      Project Workspace
                    </h3>
                    {downloadUrl && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleDownload}
                        className="flex items-center gap-1 px-2 py-1 rounded text-white text-xs"
                        style={{ backgroundColor: theme.green }}
                      >
                        <HiOutlineDownload className="text-xs" />
                        ZIP
                      </motion.button>
                    )}
                    <button
                      onClick={runDiagnostic}
                      className="p-1.5 rounded-full text-xs hidden sm:inline-block"
                      style={{
                        backgroundColor: theme.card,
                        color: theme.textSecondary,
                      }}
                      title="Run diagnostic"
                    >
                      <BsWrench className="text-sm" />
                    </button>
                  </div>

                  {/* View Toggle Buttons */}
                  {showSandpack && Object.keys(sandpackFiles).length > 0 && (
                    <div className="flex items-center gap-2">
                      <div
                        className="flex items-center gap-1 rounded-lg p-1"
                        style={{ backgroundColor: theme.card }}
                      >
                        <button
                          onClick={() => setWorkspaceView("preview")}
                          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                            workspaceView === "preview"
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                          style={{
                            backgroundColor:
                              workspaceView === "preview"
                                ? theme.green + "40"
                                : "transparent",
                            color:
                              workspaceView === "preview"
                                ? theme.textPrimary
                                : theme.textSecondary,
                          }}
                          title="Preview View"
                        >
                          <BsEye className="text-sm inline mr-1" />
                          <span className="hidden sm:inline">Preview</span>
                        </button>
                        <button
                          onClick={() => setWorkspaceView("code")}
                          className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                            workspaceView === "code"
                              ? "bg-gray-700 text-white"
                              : "text-gray-400 hover:text-white"
                          }`}
                          style={{
                            backgroundColor:
                              workspaceView === "code"
                                ? theme.green + "40"
                                : "transparent",
                            color:
                              workspaceView === "code"
                                ? theme.textPrimary
                                : theme.textSecondary,
                          }}
                          title="Code View"
                        >
                          <BsCodeSquare className="text-sm inline mr-1" />
                          <span className="hidden sm:inline">Code</span>
                        </button>
                      </div>

                      {/* Fullscreen Button */}
                      <button
                        onClick={toggleFullscreen}
                        className="p-2 rounded-md transition-all hidden sm:inline-block"
                        style={{
                          backgroundColor: theme.card,
                          color: theme.textSecondary,
                        }}
                        title={
                          isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"
                        }
                      >
                        <HiOutlineArrowsExpand className="text-sm" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Workspace Content */}
                <div className="flex-1 overflow-hidden">
                  {!showSandpack || Object.keys(sandpackFiles).length === 0 ? (
                    <div className="h-full flex items-center justify-center flex-col gap-4">
                      {jobStatus === "processing" ? (
                        <ProcessingAnimation />
                      ) : jobStatus === "failed" ? (
                        <div className="text-center">
                          <BsExclamationTriangle
                            className="text-4xl mx-auto mb-3"
                            style={{ color: theme.red }}
                          />
                          <p
                            className="text-sm"
                            style={{ color: theme.textSecondary }}
                          >
                            Project generation failed
                          </p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <HiOutlineCode
                            className="text-4xl mx-auto mb-3"
                            style={{ color: theme.textSecondary }}
                          />
                          <p
                            className="text-sm"
                            style={{ color: theme.textSecondary }}
                          >
                            Your project will appear here
                          </p>
                          <p
                            className="text-xs mt-2"
                            style={{ color: theme.textSecondary }}
                          >
                            Ask me to build something to get started
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className="h-full overflow-hidden"
                      style={{ backgroundColor: theme.sandpackBg }}
                    >
                      <SandpackProvider
                        key={jobId || "sandpack-provider"}
                        template={getSandpackTemplate()}
                        theme={currentTheme === "dark" ? "dark" : "light"}
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
                          externalResources: ["https://cdn.tailwindcss.com"],
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
                        <SandpackLayout className="h-full">
                          {workspaceView === "preview" && (
                            /* Preview View - Full height preview with console at bottom */
                            <div className="flex flex-col h-full w-full">
                              {/* Preview (80%) */}
                              <div
                                className="h-[80%] flex flex-col"
                                style={{ backgroundColor: theme.sandpackBg }}
                              >
                                <div
                                  className="px-3 py-2 text-xs border-b font-semibold"
                                  style={{
                                    color: theme.textSecondary,
                                    borderColor: theme.border,
                                  }}
                                >
                                  PREVIEW
                                </div>
                                <div className="flex-1">
                                  <SandpackPreview
                                    showOpenInCodeSandbox={false}
                                    showRefreshButton={true}
                                    className="h-[70vh]"
                                  />
                                </div>
                              </div>

                              {/* Console (20%) */}
                              <div
                                className="h-[20%] border-t flex flex-col"
                                style={{ borderColor: theme.border }}
                              >
                                <div
                                  className="px-3 py-1 text-xs border-b font-semibold"
                                  style={{
                                    color: theme.textSecondary,
                                    borderColor: theme.border,
                                  }}
                                >
                                  CONSOLE
                                </div>
                                <div className="flex-1 overflow-auto">
                                  <SandpackConsole />
                                </div>
                              </div>
                            </div>
                          )}

                          {workspaceView === "code" && (
                            /* Code View - Full height with resizable file explorer and editor */
                            <div className="flex flex-row h-[95vh] w-full">
                              {/* FILE EXPLORER - Resizable Panel */}
                              <ResizablePanel
                                defaultWidth={25}
                                minWidth={16}
                                maxWidth={50}
                                direction="right"
                                storageKey={EXPLORER_WIDTH_KEY}
                              >
                                <div
                                  className="h-full border-r flex flex-col"
                                  style={{
                                    backgroundColor: theme.card,
                                    borderColor: theme.border,
                                  }}
                                >
                                  <div
                                    className="px-3 py-2 text-xs border-b flex justify-between items-center font-semibold"
                                    style={{
                                      color: theme.textSecondary,
                                      borderColor: theme.border,
                                    }}
                                  >
                                    <h4>EXPLORER</h4>
                                    {showSandpack && Object.keys(sandpackFiles).length > 0 && (
                                      <div
                                        className="px-2 flex justify-center items-center text-[10px]"
                                        style={{
                                          backgroundColor: theme.card,
                                          borderColor: theme.border,
                                          color: theme.textSecondary,
                                        }}
                                      >
                                        {Object.keys(sandpackFiles).length} files
                                      </div>
                                    )}
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
                              
                              {/* EDITOR - Takes remaining width */}
                              <div
                                className="flex-1 h-full flex flex-col overflow-hidden"
                                style={{ backgroundColor: theme.sandpackBg }}
                              >
                                <div
                                  className="px-3 py-2 text-xs border-b font-semibold flex-shrink-0"
                                  style={{
                                    color: theme.textSecondary,
                                    borderColor: theme.border,
                                  }}
                                >
                                  EDITOR
                                </div>
                                <div className="flex-1 overflow-hidden">
                                  <SandpackCodeEditor
                                    showTabs
                                    showLineNumbers
                                    wrapContent={false}
                                    closableTabs={true}
                                    style={{
                                      height: "100%",
                                      overflow: "auto",
                                    }}
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
    </div>
  );
};

// Sidebar Component
const SidebarContent = ({
  recentChats,
  templates,
  allTemplates,
  onClose,
  theme,
  hoveredChat,
  setHoveredChat,
  onNewChat,
  onProjectClick,
  onTemplateClick,
  currentTheme,
  toggleTheme,
}) => {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div
        className="p-3 border-b flex-shrink-0"
        style={{ borderColor: theme.border }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
              style={{
                background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})`,
              }}
            >
              <img
                src="/EVA.png"
                alt="EVA"
                height={60}
                className="rounded-full"
              />
            </motion.div>
            <div className="min-w-0">
              <h1
                className="text-sm font-semibold truncate"
                style={{ color: theme.textPrimary }}
              >
                EVA AI
              </h1>
              <p
                className="text-xs truncate"
                style={{ color: theme.textSecondary }}
              >
                Full-Stack AI
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Theme Toggle in Sidebar */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleTheme}
              className="p-2 rounded-full"
              style={{ backgroundColor: theme.card, color: theme.textPrimary }}
              title={
                currentTheme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"
              }
            >
              {currentTheme === "dark" ? (
                <HiOutlineSun className="text-sm" />
              ) : (
                <HiOutlineMoon className="text-sm" />
              )}
            </motion.button>
            {onClose && (
              <motion.button
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
                onClick={onClose}
                className="lg:hidden p-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: theme.card }}
              >
                <HiOutlineX style={{ color: theme.textPrimary }} />
              </motion.button>
            )}
          </div>
        </div>
      </div>

      {/* New Chat Button */}
      <div className="p-4 mx-3 flex-shrink-0">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNewChat}
          className="w-full py-2.5 px-4 text-white rounded-full text-xs font-medium flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
          style={{ backgroundColor: theme.green }}
        >
          <HiOutlinePlus className="text-base" />
          <span className="truncate">New Project</span>
        </motion.button>
      </div>

      {/* Templates Section */}
      <div className="px-3 mb-4">
        <h2
          className="text-xs font-semibold uppercase tracking-wider px-3 mb-2"
          style={{ color: theme.textSecondary }}
        >
          Quick Templates
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {templates.map((template, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="p-2 rounded-lg text-xs text-white flex items-center justify-center gap-1.5"
              style={{ backgroundColor: template.bg }}
              onClick={() => onTemplateClick(template.name)}
            >
              <span className="text-sm">{template.icon}</span>
              <span className="truncate">{template.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="flex-1 px-3 overflow-y-auto no-scrollbar min-h-72">
        <h2
          className="text-xs font-semibold uppercase tracking-wider px-3 mb-2"
          style={{ color: theme.textSecondary }}
        >
          Recent Projects
        </h2>
        <div className="space-y-1 pb-4">
          {recentChats.length > 0 ? (
            recentChats.map((chat) => (
              <motion.div
                key={chat.id}
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 p-3 rounded-xl cursor-pointer group"
                style={{
                  backgroundColor:
                    hoveredChat === chat.id ? theme.hover : "transparent",
                  opacity: chat.status === "processing" ? 0.8 : 1,
                }}
                onMouseEnter={() => setHoveredChat(chat.id)}
                onMouseLeave={() => setHoveredChat(null)}
                onClick={() => onProjectClick && onProjectClick(chat.jobId)}
              >
                <div
                  className="p-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: theme.iconBg }}
                >
                  <span style={{ color: chat.color }} className="text-sm">
                    {chat.icon}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4
                      className="text-sm font-medium truncate"
                      style={{ color: theme.textPrimary }}
                    >
                      {chat.title}
                    </h4>
                    <span
                      className="text-xs flex-shrink-0"
                      style={{ color: theme.textSecondary }}
                    >
                      {chat.time}
                    </span>
                  </div>
                  <p
                    className="text-xs truncate"
                    style={{ color: theme.textSecondary }}
                  >
                    {chat.preview}
                  </p>
                  {chat.status === "processing" && (
                    <span
                      className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: theme.yellow + "20",
                        color: theme.yellow,
                      }}
                    >
                      Processing...
                    </span>
                  )}
                  {chat.status === "completed" && (
                    <span
                      className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: theme.green + "20",
                        color: theme.green,
                      }}
                    >
                      Completed
                    </span>
                  )}
                  {chat.status === "failed" && (
                    <span
                      className="text-xs mt-1 inline-block px-1.5 py-0.5 rounded"
                      style={{
                        backgroundColor: theme.red + "20",
                        color: theme.red,
                      }}
                    >
                      Failed
                    </span>
                  )}
                </div>
              </motion.div>
            ))
          ) : (
            <div
              className="text-center py-8"
              style={{ color: theme.textSecondary }}
            >
              <p className="text-xs">No recent projects</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Collapsed Sidebar Component
const CollapsedSidebar = ({
  theme,
  onNewChat,
  recentChats,
  onProjectClick,
}) => {
  return (
    <div className="h-full flex flex-col items-center py-3">
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md mb-6 cursor-pointer"
        style={{
          background: `linear-gradient(to bottom right, ${theme.green}, ${theme.greenSoft})`,
        }}
        onClick={onNewChat}
        title="New Project"
      >
        <HiOutlinePlus className="text-white text-lg" />
      </motion.div>

      <div className="flex-1 w-full px-2">
        {recentChats.slice(0, 5).map((chat) => (
          <motion.div
            key={chat.id}
            whileHover={{ scale: 1.05 }}
            className="w-full flex justify-center mb-2 cursor-pointer relative"
            onClick={() => onProjectClick && onProjectClick(chat.jobId)}
            title={`${chat.title} - ${chat.status}`}
          >
            <div
              className="p-2 rounded-lg"
              style={{ backgroundColor: theme.card }}
            >
              <span style={{ color: chat.color }} className="text-lg">
                {chat.icon}
              </span>
            </div>
            {chat.status === "processing" && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            )}
            {chat.status === "failed" && (
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Home;