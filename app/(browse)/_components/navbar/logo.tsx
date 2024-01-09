import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white mt-auto mb-auto rounded-full h-12 w-12 p-1 mr-12 shrink-0 flex justify-center items-center lg:mr-0 lg:shrink">
          <Image
            src="/sp_svg.svg"
            alt="Stream Pulse"
            height="40"
            width="40"
            className="ml-1"
          />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Streampulse</p>
          <p className="text-blue-400/60 text-xs ">Let&apos;s play</p>
        </div>
      </div>
    </Link>
  );
};
