"use client";

import Image from "next/image";
import { Plus } from "lucide-react";

import React from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export const Component = () => {
  return (
    <div>
      <div className="relative mx-auto my-6 flex h-[336px] max-w-[250px] flex-col items-start border border-secondary/35 p-4 md:h-[28rem] md:max-w-sm">
        <Plus
          strokeWidth={0.5}
          className="absolute -left-4 -top-4 h-8 w-8 text-accent"
        />
        <Plus
          strokeWidth={0.5}
          className="absolute -bottom-4 -left-4 h-8 w-8 text-accent"
        />
        <Plus
          strokeWidth={0.5}
          className="absolute -right-4 -top-4 h-8 w-8 text-accent"
        />
        <Plus
          strokeWidth={0.5}
          className="absolute -bottom-4 -right-4 h-8 w-8 text-accent"
        />
        <ImageZoom>
          <Image
            src="/jerry-robayo-portrait-1821.jpeg"
            alt="Portrait of Jerry Robayo"
            height={700}
            width={700}
            priority
            className="h-[300px] w-full object-cover md:h-[404px]"
          />
          <div className="relative -mt-14 bg-gradient-to-b from-black/0 to-black text-white md:-mt-24">
            <h1 className="z-20 text-center font-display text-[40px] font-black uppercase tracking-normal md:text-[70px]">
              Jerry
            </h1>{" "}
          </div>
        </ImageZoom>
      </div>
    </div>
  );
};

type ImageZoomProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<typeof Zoom>;

const ImageZoom = (props: ImageZoomProps) => {
  const { children, ...rest } = props;

  return (
    <Zoom zoomMargin={10} {...rest}>
      {children}
    </Zoom>
  );
};

export { ImageZoom };
