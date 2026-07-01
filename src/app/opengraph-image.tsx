import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} Vape Shop — Paarl, Western Cape`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#faf9f7",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 90,
            left: 640,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(47,95,216,0.14) 0%, rgba(47,95,216,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 22,
            letterSpacing: 6,
            color: "#2f5fd8",
            fontWeight: 600,
            marginBottom: 20,
            display: "flex",
          }}
        >
          PAARL · WESTERN CAPE
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            color: "#26241f",
            letterSpacing: -1,
            textAlign: "center",
            display: "flex",
          }}
        >
          Smoke Machine
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#605c53",
            marginTop: 24,
            display: "flex",
          }}
        >
          Vape Shop &amp; Product Catalogue
        </div>
      </div>
    ),
    { ...size }
  );
}
