import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Image Converter & Enhancer",
    short_name: "ImgConvert",
    description:
      "Convert image formats and apply professional edits like brightness, contrast, saturation and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8fafc",
    theme_color: "#3b82f6",
    categories: ["photography", "utilities"],
  };
}
