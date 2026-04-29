"use client";

import { Player } from "@remotion/player";
import { MarkerHighlight } from "@/components/ui/marker-highlight";

function FullStackMarkerScene() {
  return (
    <MarkerHighlight
      before="And I'm a "
      highlight="Full Stack Developer"
      markerColor="#c42e2e"
      baseColor="#e8e4db"
      highlightedTextColor="#e8e4db"
      backgroundColor="#0b0b0c"
      fontSize={60}
      fontWeight={700}
      speed={0.5}
      className="uppercase"
    />
  );
}

export function FullStackMarker() {
  return (
    <div className="mt-8 h-20 w-full max-w-3xl overflow-hidden sm:h-24">
      <Player
        component={FullStackMarkerScene}
        durationInFrames={90}
        fps={30}
        compositionWidth={960}
        compositionHeight={144}
        controls={false}
        autoPlay
        loop
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
