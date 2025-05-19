import { Contex } from "@context/User";
import React, { useContext, useEffect, useRef } from "react";

const Root:React.FC= () => {
  const { assetTerm } = useContext(Contex);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: containerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [assetTerm]);

  return (
    <div className="h-full overflow-hidden bg-[var(--background)]">
      <div className="flex items-start h-full">
        {/* <Sidebar /> */}
        <div className="h-full w-full">
          {/* <Navbar /> */}
          <div
            className="overflow-y-scroll h-[90%] bg-[var(--background)]"
            ref={containerRef}
          >
            <div className="ml-8">{/* <Outlet /> */}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
