import React, { useState } from "react";

function LoginSignup() {
  const [status, setStatus] = useState("Login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({ email, password, otp });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f8f9fa",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
          backgroundColor: "white",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative elements */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "8px",
            background: "linear-gradient(90deg, #4f46e5, #10b981, #f59e0b)",
          }}
        ></div>
        
        <div
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            zIndex: 0,
          }}
        ></div>
        
        <div
          style={{
            position: "absolute",
            bottom: "-30px",
            left: "-30px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            zIndex: 0,
          }}
        ></div>

        {/* Main content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h1
            style={{
              fontSize: "32px",
              color: "#1f2937",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            Welcome Back
          </h1>
          <p style={{ color: "#6b7280", marginBottom: "32px" }}>
            {status === "Login" 
              ? "Login to access your account" 
              : "Create a new account to get started"}
          </p>

          {/* Tab switcher */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "32px",
              backgroundColor: "#f3f4f6",
              borderRadius: "12px",
              padding: "6px",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "6px",
                left: status === "Login" ? "6px" : "calc(50% + 6px)",
                width: "calc(50% - 12px)",
                height: "calc(100% - 12px)",
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                transition: "all 0.3s ease",
              }}
            ></div>
            <button
              onClick={() => setStatus("Login")}
              style={{
                flex: 1,
                padding: "12px",
                border: "none",
                background: "transparent",
                color: status === "Login" ? "#4f46e5" : "#6b7280",
                fontWeight: "600",
                cursor: "pointer",
                position: "relative",
                zIndex: 1,
                borderRadius: "8px",
              }}
            >
              Login
            </button>
            <button
              onClick={() => setStatus("Signup")}
              style={{
                flex: 1,
                padding: "12px",
                border: "none",
                background: "transparent",
                color: status === "Signup" ? "#4f46e5" : "#6b7280",
                fontWeight: "600",
                cursor: "pointer",
                position: "relative",
                zIndex: 1,
                borderRadius: "8px",
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "20px", textAlign: "left" }}>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontWeight: "500",
                }}
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#f9fafb",
                  color: "#1f2937",
                  fontSize: "16px",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
              />
            </div>

            <div style={{ marginBottom: "24px", textAlign: "left" }}>
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: "#374151",
                  fontWeight: "500",
                }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                style={{
                  width: "100%",
                  padding: "14px",
                  borderRadius: "10px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "#f9fafb",
                  color: "#1f2937",
                  fontSize: "16px",
                  transition: "all 0.2s ease",
                  outline: "none",
                }}
              />
            </div>

            {status === "Signup" && (
              <div style={{ marginBottom: "24px", textAlign: "left" }}>
                <label
                  htmlFor="otp"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#374151",
                    fontWeight: "500",
                  }}
                >
                  OTP Verification
                </label>
                <input
                  id="otp"
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter 6-digit OTP"
                  required
                  style={{
                    width: "100%",
                    padding: "14px",
                    borderRadius: "10px",
                    border: "1px solid #e5e7eb",
                    backgroundColor: "#f9fafb",
                    color: "#1f2937",
                    fontSize: "16px",
                    transition: "all 0.2s ease",
                    outline: "none",
                  }}
                />
                <p style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px" }}>
                  We'll send a verification code to your email
                </p>
              </div>
            )}

            {status === "Login" && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginBottom: "24px",
                }}
              >
                <a
                  href="#"
                  style={{
                    color: "#4f46e5",
                    fontSize: "14px",
                    fontWeight: "500",
                    textDecoration: "none",
                  }}
                >
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px",
                backgroundColor: "#4f46e5",
                color: "white",
                borderRadius: "10px",
                border: "none",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 6px rgba(79, 70, 229, 0.2)",
                marginBottom: "24px",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#4338ca")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#4f46e5")}
            >
              {status === "Login" ? "Sign In" : "Create Account"}
            </button>

            <div style={{ position: "relative", marginBottom: "24px" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  right: 0,
                  height: "1px",
                  backgroundColor: "#e5e7eb",
                }}
              ></div>
              <div
                style={{
                  position: "relative",
                  display: "inline-block",
                  padding: "0 16px",
                  backgroundColor: "white",
                  color: "#6b7280",
                  fontSize: "14px",
                }}
              >
                Or continue with
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "16px",
                marginBottom: "24px",
              }}
            >
              <button
                type="button"
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                Facebook
              </button>
              <button
                type="button"
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseOver={(e) => (e.target.style.backgroundColor = "#f9fafb")}
                onMouseOut={(e) => (e.target.style.backgroundColor = "white")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"></path>
                </svg>
                Instagram
              </button>
            </div>

            <p style={{ color: "#6b7280", fontSize: "14px" }}>
              {status === "Login" ? (
                <>
                  Don't have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setStatus("Signup")}
                    style={{
                      color: "#4f46e5",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Sign up
                  </a>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <a
                    href="#"
                    onClick={() => setStatus("Login")}
                    style={{
                      color: "#4f46e5",
                      fontWeight: "500",
                      textDecoration: "none",
                    }}
                  >
                    Sign in
                  </a>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;