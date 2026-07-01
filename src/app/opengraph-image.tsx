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
            "radial-gradient(circle at 30% 15%, #2a2016 0%, #0b0906 55%, #0b0906 100%)",
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
              "radial-gradient(circle, rgba(200,162,92,0.28) 0%, rgba(200,162,92,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            fontSize: 24,
            letterSpacing: 10,
            color: "#c8a25c",
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
            color: "#f2e9d8",
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
            color: "#b7a996",
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
