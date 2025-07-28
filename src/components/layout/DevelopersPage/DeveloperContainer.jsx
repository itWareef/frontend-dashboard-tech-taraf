import { useState } from "react";

import DeveloperTH from "./DeveloperTH";
import DeveloperTBody from "./DeveloperTBody";

const DeveloperContainer = () => {
  const [developers, setDevelopers] = useState(
    Array.from({ length: 20 }, (_, index) => ({
      developerLogo: "/Icons/Taraf for 3d.svg",
      developerName: `Modern Real Estate Developer Co. #${index + 1}`,
      projectsCount: 12,
      unitsCount: 340,
      taxNumber: "1234567890",
      bankAccount: "SA1234567890123456789012",
      email: `developer${index + 1}@example.com`,
    }))
  );

  return (
    <>
      <section className="bg-card p-3 rounded-[20px] my-3 space-y-4">
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <table className="w-full border-separate border-spacing-y-6">
            <DeveloperTH />
            <DeveloperTBody developers={developers} />
          </table>
        </div>
      </section>
    </>
  );
};

export default DeveloperContainer;
