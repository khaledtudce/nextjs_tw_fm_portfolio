import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue } from "framer-motion";
import Image, { StaticImageData } from "next/image";

export const FrameImage = motion(Image);

export type MovingImgProps = {
  img: StaticImageData;
  title: string;
  link: string;
};

export const MovingImg = ({ title, img, link }: MovingImgProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (event: any) => {
    imgRef.current!.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  };

  const handleMouseLeave = (event: any) => {
    imgRef.current!.style.display = "none";
    x.set(0);
    y.set(0);
  };

  return (
    <Link
      href={link}
      target="_blank"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FrameImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
      />
    </Link>
  );
};
