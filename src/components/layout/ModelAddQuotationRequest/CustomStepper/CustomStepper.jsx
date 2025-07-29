import { svgIcons } from "@/components/shared/svgIcons";

export default function CustomStepper({ steps, currentStep }) {
  const totalSteps = steps.length;
  const progressPercentage =
    totalSteps > 1 ? currentStep / (totalSteps - 1) : 0;

  return (
    <div className="relative flex items-start justify-between w-full ">
      <div className="absolute top-1/2 left-0  right-0 h-2 bg-muted transform -translate-y-1/2 mx-6" />
      <div
        className="absolute top-1/2 h-2 bg-primary transition-transform duration-300 transform  origin-right"
        style={{
          left: "24px",

          width: `calc(100% - 48px)`,
          transform: `translateY(-50%) scaleX(${progressPercentage})`,
        }}
      />
      <div className="flex  justify-between w-full">
        {steps.map((step, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index} className="relative z-10 flex flex-col  ">
              <span
                className={`w-12 h-12 relative  mt-12 rounded-full flex items-center justify-center text-lg font-bold
                            ${
                              isActive || isCompleted
                                ? "bg-primary text-primary-foreground border-primary"
                                : "bg-gray-200 text-gray-600 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
                            }
                            border-2 transition-colors duration-300 shrink-0`}
              >
                <div className="absolute  w-15 h-15 rounded-full border-10 border-background  " />
                {isActive || isCompleted ? svgIcons.saveIcon : ""}
              </span>

              <h6
                className={`mt-5 -ms-9 text-center whitespace-nowrap px-1 text-xl md:text-3xl
                            ${
                              isActive
                                ? "text-primary font-bold  l"
                                : isCompleted
                                ? "text-primary"
                                : "text-gray-600 dark:text-gray-400"
                            }
                            transition-colors duration-300`}
              >
                {step.label}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// export default function CustomStepper({ steps, currentStep }) {
//   const totalSteps = steps.length;

//   // بدلاً من انتظار الانتقال للخطوة التالية
//   const progressPercentage =
//     totalSteps > 1 ? (currentStep + 1) / totalSteps : 0;

//   return (
//     <div
//       dir="rtl"
//       className="relative flex items-center justify-between w-full px-4 sm:px-8 pt-10"
//     >
//       {/* الخط الرمادي الكامل */}
//       <div className="absolute top-1/2 left-[5%] right-[5%] h-2 bg-gray-300 dark:bg-gray-700 -translate-y-1/2 z-0 rounded" />

//       <div
//         className="absolute top-1/2 h-2 bg-primary transition-all duration-300 transform -translate-y-1/2 origin-right z-10 rounded"
//         style={{
//           right: "5%",
//           width: `calc(${progressPercentage * 90}%)`,
//         }}
//       />

//       {/* الدوائر */}
//       <div className="flex justify-between w-full relative z-20">
//         {steps.map((step, index) => {
//           const isActive = index === currentStep;
//           const isCompleted = index < currentStep;

//           return (
//             <div
//               key={index}
//               className="flex flex-col items-center text-center flex-1"
//             >
//               <div
//                 className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2
//                   ${
//                     isCompleted
//                       ? "bg-primary text-white border-primary"
//                       : isActive
//                       ? "bg-gray-200 text-gray-700 border-gray-400"
//                       : "bg-gray-200 text-gray-600 border-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600"
//                   } transition-all duration-300`}
//               >
//                 {index + 1}
//               </div>
//               <div
//                 className={`mt-2 text-sm px-1 ${
//                   isActive
//                     ? "text-gray-700 font-medium"
//                     : isCompleted
//                     ? "text-primary"
//                     : "text-gray-600 dark:text-gray-400"
//                 }`}
//               >
//                 {step.label}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
