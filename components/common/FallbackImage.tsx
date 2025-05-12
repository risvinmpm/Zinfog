"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

const FallbackImage: React.FC<ImageProps> = (props) => {
  const [src, setSrc] = useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      onError={() => setSrc("/dummy.jpg")}
      alt={props.alt || "image"}
    />
  );
};

export default FallbackImage;
