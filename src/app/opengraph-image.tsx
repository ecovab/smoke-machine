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
            "radial-gradient(circle at 30% 15%, #16202b 0%, #06080a 55%, #06080a 100%)",
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
              "radial-gradient(circle, rgba(111,214,255,0.24) 0%, rgba(111,214,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 24,
            letterSpacing: 10,
            color: "#6fd6ff",
            fontWeight: 500,
            marginBottom: 20,
            display: "flex",
          }}
        >
          PAARL · WESTERN CAPE
        </div>
        <div
          style={{
            fontSize: 80,
            fontWeight: 500,
            color: "#eef2f6",
            letterSpacing: 1,
            textAlign: "center",
            display: "flex",
          }}
        >
          Smoke Machine Express
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#9aa7b5",
            marginTop: 24,
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
