import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 mb-5 w-full">
      <div className="bg-white mt-auto mb-auto rounded-full h-32 w-32 flex justify-center items-center">
        <Image src="/sp_svg.svg" alt="Stream Pulse" height="100" width="100" />
      </div>
      <div className="flex flex-col items-center w-full">
        <p className={cn("text-xl font-semibold text-white", font.className)}>
          Unleash the pulse of{" "}
          <span style={{ color: "rgba(184, 255, 79, 0.99)" }}>
            live entertainment
          </span>
          , your way.
        </p>
      </div>
    </div>
  );
};
