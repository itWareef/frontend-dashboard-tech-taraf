import React from "react";

const Loader = () => {
  return (
    <div
      style={{ zIndex: 9999999999 }}
      className="backdrop-blur-sm bg-background/50 flex-col gap-4 w-full flex items-center justify-center fixed left-0 right-0 bottom-0 top-0 min-h-screen"
    >
      <div className="relative w-28 h-28">
        <div
          className="w-full h-full rounded-full animate-spin absolute duration-3000"
          style={{
            border: "8px solid transparent",
            background: `
              conic-gradient(
                from 0deg,
                transparent 0deg 90deg,
                #013b41 90deg 180deg,
                transparent 180deg 270deg,
                #1c7e68 270deg 360deg
              ) border-box
            `,
            mask: "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
            WebkitMaskComposite: "xor",
          }}
        ></div>

        <div className="w-full h-full flex items-center justify-center animate-pulse duration-1000">
          <img src="/Icons/Taraf for 3d.svg" alt="" className="w-16 h-16" />
        </div>
      </div>
    </div>
  );
};

export default Loader;
