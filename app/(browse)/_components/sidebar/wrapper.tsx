"use client";
//Client component -> but still we are going to do server side rendering

import { cn } from "@/lib/utils";
import { useSidebar } from "@/store/use-sidebar";
import { RecommendedSkeleton } from "./recommended";
import { ToggleSkeleton } from "./toggle";
import { useIsClient } from "usehooks-ts";
import { FollowingSkeleton } from "./following";
// import { useEffect, useState } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  const { collapsed } = useSidebar((state) => state);
  // const [isClient, setIsClient] = useState(false); //Server side rendering -> by default is not client
  const isClient = useIsClient();

  //UseEffect can only happen on client , server side rendering has no access to useEffect
  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  //Collapsed not use in class name as this is server side rendering.
  if (!isClient)
    return (
      <aside className="fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50">
        <ToggleSkeleton />
        <FollowingSkeleton />
        <RecommendedSkeleton />
      </aside>
    );

  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50",
        collapsed && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
};
