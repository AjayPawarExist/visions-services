/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log error for monitoring services (Sentry, etc.)
    // In production, replace with actual error reporting
    if (process.env.NODE_ENV === "development") {
      console.error("Global Error:", error);
    }
  }, [error]);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Error | Auxify</title>
      </head>
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          fontFamily: "system-ui, -apple-system, sans-serif",
          backgroundColor: "#fafafa",
          color: "#171717",
        }}
      >
        <div
          style={{
            maxWidth: "28rem",
            width: "100%",
            padding: "2rem",
            borderRadius: "0.75rem",
            backgroundColor: "#ffffff",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
            textAlign: "center",
          }}
        >
          {/* Error Icon */}
          <div
            style={{
              width: "3rem",
              height: "3rem",
              margin: "0 auto 1rem",
              borderRadius: "50%",
              backgroundColor: "#fef2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "0.5rem",
              color: "#171717",
            }}
          >
            Something went wrong
          </h1>

          <p
            style={{
              fontSize: "0.875rem",
              color: "#737373",
              marginBottom: "1.5rem",
              lineHeight: 1.5,
            }}
          >
            An unexpected error occurred. Please try again or refresh the page.
          </p>

          {/* Show error digest in development */}
          {process.env.NODE_ENV === "development" && error.digest && (
            <p
              style={{
                fontSize: "0.75rem",
                color: "#a3a3a3",
                marginBottom: "1rem",
                fontFamily: "monospace",
                backgroundColor: "#f5f5f5",
                padding: "0.5rem",
                borderRadius: "0.25rem",
                wordBreak: "break-all",
              }}
            >
              Digest: {error.digest}
            </p>
          )}

          <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
            <button
              onClick={reset}
              style={{
                padding: "0.625rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#ffffff",
                backgroundColor: "#171717",
                border: "none",
                borderRadius: "0.5rem",
                cursor: "pointer",
                transition: "background-color 0.15s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#404040")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#171717")}
            >
              Try Again
            </button>

            <a
              href="/"
              style={{
                padding: "0.625rem 1.25rem",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "#171717",
                backgroundColor: "#ffffff",
                border: "1px solid #e5e5e5",
                borderRadius: "0.5rem",
                textDecoration: "none",
                transition: "background-color 0.15s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#f5f5f5")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
            >
              Go Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
