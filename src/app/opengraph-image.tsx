import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — Paarl's Premium Vape Destination`;
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
          background:
            "radial-gradient(circle at 30% 20%, #10222b 0%, #030304 55%, #030304 100%)",
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
              "radial-gradient(circle, rgba(163,91,255,0.55) 0%, rgba(163,91,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 26,
            letterSpacing: 10,
            color: "#2ee6ff",
            fontWeight: 600,
            marginBottom: 18,
            display: "flex",
          }}
        >
          PAARL · WESTERN CAPE
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#f5f7f8",
            letterSpacing: 2,
            textAlign: "center",
            display: "flex",
          }}
        >
          SMOKE MACHINE EXPRESS
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a4adb8",
            marginTop: 22,
            display: "flex",
          }}
        >
          Paarl&apos;s Premium Vape Destination
        </div>
      </div>
    ),
    { ...size }
  );
}
