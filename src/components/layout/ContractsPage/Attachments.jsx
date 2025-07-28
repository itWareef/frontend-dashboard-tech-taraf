import { svgIcons } from "@/components/shared/svgIcons";

const Attachments = ({ openAttachments, handleAttachments }) => {
  return (
    <>
      <main
        className={`h-svh  absolute top-0 left-0 right-0 bottom-0 z-[999999] backdrop-blur bg-background/80
          transition-all duration-300
            ${
              openAttachments
                ? "translate-y-0 opacity-100   "
                : "translate-y-full opacity-0   "
            }
        
        `}
      >
        <div className="w-[90%] mx-auto">
          <div className="flex sticky top-0 bg-background pb-2 z-40 items-center justify-between px-5 pt-5 ">
            <div>
              <h2 className="text-primary flex items-center gap-2 font-bold text-2xl md:text-[40px]">
                {svgIcons.attachmentIcon}
                <span className="pb-2"> مرفقات العقد</span>
              </h2>
            </div>
            <div className="flex items-center">
              <button onClick={handleAttachments} className="cursor-pointer">
                {svgIcons.close}
              </button>
            </div>
          </div>{" "}
          <div className="bg-card h-[calc(100vh-165px)] relative  p-3 rounded-2xl my-3">
            {/* Table Container with scroll */}
            <div className="relative h-full">
              <div
                className="absolute inset-0 overflow-y-auto rounded-[6px] 
              [-ms-overflow-style:none]
              [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden"
              >
                {svgIcons.file}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Attachments;
