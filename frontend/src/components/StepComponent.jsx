// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const generationSteps = [
//   { id: 1, title: "Initializing Project", description: "Setting up project structure and analyzing requirements...", status: "pending" },
//   { id: 2, title: "Building Frontend", description: "Creating UI components, pages, navigation, and forms...", status: "pending" },
//   { id: 3, title: "Styling & Animations", description: "Applying modern design, responsiveness, and smooth transitions...", status: "pending" },
//   { id: 4, title: "Building Backend & Database", description: "Setting up APIs, server, database schema, and authentication...", status: "pending" },
//   { id: 5, title: "Integration & Optimization", description: "Connecting frontend & backend, state management, error handling, and performance tuning...", status: "pending" },
//   { id: 6, title: "Testing & Deployment", description: "Running tests, fixing issues, and preparing deployment...", status: "pending" },
//   { id: 7, title: "Project Ready 🚀", description: "Your project is successfully generated and ready to use!", status: "pending" },
//   { id: 8, title: "Waiting for Response...", description: "Almost done, fetching final result...", status: "pending" }
// ];

// const StepComponent = ({ jobId }) => {
//   const [visibleSteps, setVisibleSteps] = useState([]);
//   const [isComplete, setIsComplete] = useState(false);
//   const [startTime, setStartTime] = useState(null);
//   const [isWaiting, setIsWaiting] = useState(true);
//   const generationStartedRef = useRef(false);

//   const addNewStep = useCallback((index) => {
//     setVisibleSteps(prev => {
//       // Check if step already exists to prevent duplicates
//       if (prev.some(step => step.id === generationSteps[index].id)) {
//         return prev;
//       }
//       return [...prev, {
//         ...generationSteps[index],
//         status: 'active'
//       }];
//     });
//   }, []);

//   const updateStepStatus = useCallback((stepId, status) => {
//     setVisibleSteps(prev => prev.map(step => 
//       step.id === stepId ? { ...step, status } : step
//     ));
//   }, []);

//   const startGeneration = useCallback(async () => {
//     if (!jobId || generationStartedRef.current) return;
    
//     generationStartedRef.current = true;
//     setIsWaiting(false);
//     setStartTime(Date.now());

//     // Total time: 4 minutes = 240 seconds
//     // 7 steps, average ~34 seconds per step
//     const totalSteps = generationSteps.length;
    
//     for (let i = 0; i < totalSteps; i++) {
//       // Add new step
//       addNewStep(i);
      
//       // Calculate delay based on step position to complete in 4 minutes
//       let delay;
//       if (i === 0) delay = 20000; // Initial setup: 20 seconds
//       else if (i === 1) delay = 30000; // Frontend: 30 seconds
//       else if (i === 2) delay = 25000; // Styling: 25 seconds
//       else if (i === 3) delay = 35000; // Backend & DB: 35 seconds
//       else if (i === 4) delay = 30000; // Integration: 30 seconds
//       else if (i === 5) delay = 30000; // Testing: 30 seconds
//       else delay = 20000; // Final step: 20 seconds
      
//       await new Promise(resolve => setTimeout(resolve, delay));
      
//       // Mark current step as completed
//       updateStepStatus(generationSteps[i].id, 'completed');
//     }
    
//     setIsComplete(true);
//   }, [jobId, addNewStep, updateStepStatus]);

//   // Wait 3 seconds after jobId comes, then start
//   useEffect(() => {
//     if (jobId && !generationStartedRef.current && !isComplete) {
//       setIsWaiting(true);
//       const timer = setTimeout(() => {
//         startGeneration();
//       }, 3000); // 3 seconds delay
      
//       return () => clearTimeout(timer);
//     }
//   }, [jobId, startGeneration, isComplete]);


 

//   if (!jobId) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-center p-8 bg-white rounded-xl shadow-lg"
//         >
//           <div className="text-6xl mb-4">⏳</div>
//           <h2 className="text-2xl font-bold text-gray-800">Waiting for Job ID</h2>
//           <p className="text-gray-600 mt-2">No job ID provided</p>
//         </motion.div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-fit -mt-8  bg-transparent px-4">
//       <div className="max-w-4xl mx-auto">
       
//         {/* Completion Banner */}
//         <AnimatePresence>
//           {isComplete && (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               exit={{ opacity: 0, scale: 0.9 }}
//               className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg p-6 mb-6 text-white text-center"
//             >
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 10 }}
//                 className="text-xs mb-1.5"
//               >
//                 🎉
//               </motion.div>
//               <h2 className="text-2xl font-bold mb-2">Generation Complete!</h2>
//               <p>
//                 Completed in {((Date.now() - startTime) / 1000).toFixed(0)} seconds
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {/* Steps List - Shows one by one */}
//         <div className="">
//           <AnimatePresence>
//             {visibleSteps.map((step) => {
//               const isActive = step.status === 'active';
//               const isCompleted = step.status === 'completed';
              
//               return (
//                 <motion.div
//                   key={step.id}
//                   initial={{ opacity: 0, x: -50, height: 0 }}
//                   animate={{ opacity: 1, x: 0, height: 'auto' }}
//                   exit={{ opacity: 0, x: 50, height: 0 }}
//                   transition={{ 
//                     duration: 0.4,
//                     height: { duration: 0.3 }
//                   }}
//                   className={`
//                     rounded-lg p-1.5 transition-all duration-300 overflow-hidden
//                     ${isCompleted ? 'bg-transparent ' : ''}
//                     ${isActive ? 'bg-transparent' : ''}
//                   `}
//                 >
//                   <div className="flex items-center ">
//                     {/* Icon */}
//                     <div className="relative flex-shrink-0">
                    
                      
//                       {/* Pulse effect for active step */}
//                       {isActive && (
//                         <motion.div
//                           animate={{ scale: [1, 1.4, 1] }}
//                           transition={{ duration: 1.5, repeat: Infinity }}
//                           className="absolute inset-0 rounded-full bg-blue-400 opacity-30"
//                         />
//                       )}
//                     </div>

//                     {/* Content */}
//                     <div className="flex-1">
//                       <h3 className={`
//                         font-semibold text-xs
//                         ${isCompleted ? 'text-green-600' : ''}
//                         ${isActive ? 'text-[#835EF5]' : ''}
//                       `}>
//                         {step.title}
//                       </h3>
//                       <p className={`
//                         text-[10px]
//                         ${isCompleted ? 'text-gray-500' : ''}
//                         ${isActive ? 'text-gray-500' : ''}
//                       `}>
//                         {step.description}
//                       </p>
                      
//                       {/* Progress bar for active step */}
//                       {isActive && (
//                         <motion.div
//                           initial={{ width: 0 }}
//                           animate={{ width: '100%' }}
//                           transition={{ duration: 0.5, repeat: Infinity }}
//                           className="mt-1.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
//                         />
//                       )}
//                     </div>

//                     {/* Status */}
//                     <div className="flex-shrink-0">
//                       {isCompleted && (
//                         <motion.div
//                           initial={{ scale: 0 }}
//                           animate={{ scale: 1 }}
//                           className="text-green-500"
//                         >
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </motion.div>
//                       )}
//                       {isActive && (
//                         <motion.div
//                           animate={{ rotate: 360 }}
//                           transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//                           className="text-blue-500"
//                         >
//                           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
//                           </svg>
//                         </motion.div>
//                       )}
//                     </div>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepComponent;


import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const generationSteps = [
  {
    id: 1,
    title: "Initializing Project",
    description: "Setting up project structure and analyzing requirements...",
    status: "pending",
  },
  {
    id: 2,
    title: "Building Frontend",
    description: "Creating UI components, pages, navigation, and forms...",
    status: "pending",
  },
  {
    id: 3,
    title: "Styling & Animations",
    description:
      "Applying modern design, responsiveness, and smooth transitions...",
    status: "pending",
  },
  {
    id: 4,
    title: "Building Backend & Database",
    description:
      "Setting up APIs, server, database schema, and authentication...",
    status: "pending",
  },
  {
    id: 5,
    title: "Integration & Optimization",
    description:
      "Connecting frontend & backend, state management, error handling, and performance tuning...",
    status: "pending",
  },
  {
    id: 6,
    title: "Testing & Deployment",
    description: "Running tests, fixing issues, and preparing deployment...",
    status: "pending",
  },
  {
    id: 7,
    title: "Project Ready 🚀",
    description: "Your project is successfully generated and ready to use!",
    status: "pending",
  },
  {
    id: 8,
    title: "Waiting for Response...",
    description: "Almost done, fetching final result...",
    status: "pending",
  },
];

const StepComponent = ({ jobId, onStepUpdate, messagesEndRef }) => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [isWaiting, setIsWaiting] = useState(true);
  const generationStartedRef = useRef(false);
  const containerRef = useRef(null);

  const addNewStep = useCallback((index) => {
    setVisibleSteps((prev) => {
      // Check if step already exists to prevent duplicates
      if (prev.some((step) => step.id === generationSteps[index].id)) {
        return prev;
      }
      return [
        ...prev,
        {
          ...generationSteps[index],
          status: "active",
        },
      ];
    });
  }, []);

  const updateStepStatus = useCallback((stepId, status) => {
    setVisibleSteps((prev) =>
      prev.map((step) => (step.id === stepId ? { ...step, status } : step)),
    );
  }, []);

  const startGeneration = useCallback(async () => {
    if (!jobId || generationStartedRef.current) return;

    generationStartedRef.current = true;
    setIsWaiting(false);
    setStartTime(Date.now());

    // Total time: 4 minutes = 240 seconds
    // 7 steps, average ~34 seconds per step
    const totalSteps = generationSteps.length;

    for (let i = 0; i < totalSteps; i++) {
      // Add new step
      addNewStep(i);

      // Calculate delay based on step position to complete in 4 minutes
      let delay;
      if (i === 0)
        delay = 20000; // Initial setup: 20 seconds
      else if (i === 1)
        delay = 30000; // Frontend: 30 seconds
      else if (i === 2)
        delay = 25000; // Styling: 25 seconds
      else if (i === 3)
        delay = 35000; // Backend & DB: 35 seconds
      else if (i === 4)
        delay = 30000; // Integration: 30 seconds
      else if (i === 5)
        delay = 30000; // Testing: 30 seconds
      else if (i === 6)
        delay = 50000; /// 50 seconds
      else delay = 40000; // Final step: 40 seconds

      await new Promise((resolve) => setTimeout(resolve, delay));

      // Mark current step as completed
      updateStepStatus(generationSteps[i].id, "completed");
    }

    setIsComplete(true);
  }, [jobId, addNewStep, updateStepStatus]);

  // Wait 3 seconds after jobId comes, then start
  useEffect(() => {
    if (jobId && !generationStartedRef.current && !isComplete) {
      setIsWaiting(true);
      const timer = setTimeout(() => {
        startGeneration();
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer);
    }
  }, [jobId, startGeneration, isComplete]);

  useEffect(() => {
    const container = messagesEndRef.current?.parentElement;

    if (container) {
      container.scrollBy({
        top: container.scrollHeight + 300,
        behavior: "smooth",
      });
    }
  }, [visibleSteps]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [visibleSteps]);

  useEffect(() => {
    onStepUpdate?.();
  }, [visibleSteps]);

  if (!jobId) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8 bg-white rounded-xl shadow-lg"
        >
          <div className="text-6xl mb-4">⏳</div>
          <h2 className="text-2xl font-bold text-gray-800">
            Waiting for Job ID
          </h2>
          <p className="text-gray-600 mt-2">No job ID provided</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-fit -mt-8  bg-transparent px-4">
      <div className="max-w-4xl mx-auto">
        {/* Steps List - Shows one by one */}
        <div className="">
          <AnimatePresence>
            {visibleSteps.map((step) => {
              const isActive = step.status === "active";
              const isCompleted = step.status === "completed";

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -50, height: 0 }}
                  animate={{ opacity: 1, x: 0, height: "auto" }}
                  exit={{ opacity: 0, x: 50, height: 0 }}
                  transition={{
                    duration: 0.4,
                    height: { duration: 0.3 },
                  }}
                  className={`
                    rounded-lg p-1.5 transition-all duration-300 overflow-hidden
                    ${isCompleted ? "bg-transparent " : ""}
                    ${isActive ? "bg-transparent" : ""}
                  `}
                >
                  <div className="flex items-center ">
                    {/* Icon */}
                    <div className="relative flex-shrink-0">
                      {/* Pulse effect for active step */}
                      {isActive && (
                        <motion.div
                          animate={{ scale: [1, 1.4, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 rounded-full bg-blue-400 opacity-30"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3
                        className={`
                        font-semibold text-xs
                        ${isCompleted ? "text-green-600" : ""}
                        ${isActive ? "text-[#835EF5]" : ""}
                      `}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`
                        text-[10px]
                        ${isCompleted ? "text-gray-500" : ""}
                        ${isActive ? "text-gray-500" : ""}
                      `}
                      >
                        {step.description}
                      </p>

                      {/* Progress bar for active step */}
                      {isActive && (
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                          className="mt-1.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                        />
                      )}
                    </div>

                    {/* Status */}
                    <div className="flex-shrink-0">
                      {isCompleted && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="text-green-500"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>
                      )}
                      {isActive && (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="text-blue-500"
                        >
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default StepComponent;
