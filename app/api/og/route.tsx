import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f8fafc",
          backgroundImage: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
            borderRadius: "24px",
            padding: "60px 80px",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: "bold",
              color: "#1e293b",
              marginBottom: "16px",
            }}
          >
            Image Converter
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#64748b",
            }}
          >
            & Enhancer
          </p>
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "32px",
            }}
          >
            {["PNG", "JPEG", "WebP", "AVIF", "GIF"].map((fmt) => (
              <span
                key={fmt}
                style={{
                  backgroundColor: "#f1f5f9",
                  color: "#3b82f6",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {fmt}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
