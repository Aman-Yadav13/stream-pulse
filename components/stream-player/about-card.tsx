"use client";

import { BioModal } from "./bio-modal";
import { VerifiedMark } from "./verified-mark";

interface AboutCardProps {
  viewerIdentity: string;
  hostIdentity: string;
  hostName: string;
  bio: string | null;
  followedByCount: number;
}

export const AboutCard = ({
  viewerIdentity,
  hostIdentity,
  hostName,
  bio,
  followedByCount,
}: AboutCardProps) => {
  const hostAsViewer = `host-${hostIdentity}`;
  const isHost = viewerIdentity === hostAsViewer;
  const followedByLabel = followedByCount === 1 ? "follower" : "followers";

  return (
    <div className="px-4">
      <div className="group rounded-xl bg-background p-6 lg:p-10 flex flex-col gap-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-2 font-semibold text-lg lg:text-2xl">
            About {hostName}
            <VerifiedMark />
          </div>
          {isHost && <BioModal initialValue={bio} />}
        </div>
        <div className="text-sm text-muted-foreground">
          <span className="font-semibold text-primary">{followedByCount}</span>{" "}
          {followedByLabel}
        </div>
        <p>
          {bio || (
            <p>
              This user prefers to not share information about him, or maybe he
              just isn&apos;t creative.
            </p>
          )}
        </p>
      </div>
    </div>
  );
};
