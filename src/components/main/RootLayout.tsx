import Navbar from "@components/main/Navbar";
import Sidebar from "@components/main/Sidebar";
import React, { useRef } from "react";
import { Outlet } from "react-router-dom";
// import { Contex } from "@context/User";

const Root: React.FC = () => {
  // const { assetTerm } = useContext(Contex);

  // Explicitly type the containerRef to refer to a div
  const containerRef = useRef<HTMLDivElement | null>(null);
  // const isFirstRender = useRef<boolean>(true);

  // Optional: Uncomment if you want scroll behavior
  // useEffect(() => {
  //   if (isFirstRender.current) {
  //     isFirstRender.current = false;
  //     return;
  //   }
  //   if (containerRef.current) {
  //     containerRef.current.scrollTo({
  //       top: containerRef.current.scrollHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // }, [assetTerm]);

  return (
    <div className="h-full overflow-hidden">
      <div className="flex items-start h-full">
        <Sidebar />
        <div className="h-full w-full">
          <Navbar />
          <div
            className="overflow-y-scroll h-[90%] bg-[var(--background)]"
            ref={containerRef}
          >
            <div className="mt-[64px] ml-8">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
