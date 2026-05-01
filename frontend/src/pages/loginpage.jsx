import React, { useState,useEffect  } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const C = {
  violet:     "#7466FA",
  violetDim:  "#5a4de0",
  violetGlow: "rgba(116,102,250,0.20)",
  violetSoft: "rgba(116,102,250,0.08)",
  bg:         "#ffffff",
  surface:    "#f8f7ff",
  surfaceHi:  "#f0eeff",
  border:     "rgba(116,102,250,0.22)",
  borderSub:  "rgba(116,102,250,0.10)",
  text:       "#16113a",
  textSub:    "#5b5380",
  textMuted:  "#9d98b8",
  error:      "#e53e3e",
};

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { background: #ffffff; color: #16113a; font-family: 'DM Sans', sans-serif; -webkit-font-smoothing: antialiased; }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-track { background: #ffffff; }
    ::-webkit-scrollbar-thumb { background: rgba(116,102,250,0.4); border-radius: 3px; }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus {
      -webkit-box-shadow: 0 0 0px 1000px #f8f7ff inset;
      -webkit-text-fill-color: #16113a;
      transition: background-color 5000s ease-in-out 0s;
    }

    .eva-input:focus {
      outline: none;
      border-color: ${C.violet} !important;
      box-shadow: 0 0 0 3px rgba(116,102,250,0.12) !important;
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-12px); }
    }

    @keyframes spin-slow {
      to { transform: rotate(360deg); }
    }
  `}</style>
);

const Logo = ({ onClick }) => (
  <div
    onClick={onClick}
    style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", textDecoration: "none" }}
  >
    <div style={{
      width: 34, height: 34, borderRadius: 10,
      background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: `0 0 20px ${C.violetGlow}`,
    }}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="8" cy="8" r="2" fill="white"/>
      </svg>
    </div>
    <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: C.text, letterSpacing: "-0.02em" }}>EVA AI</span>
  </div>
);

const InputField = ({ label, type = "text", placeholder, value, onChange, error }) => {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div style={{ marginBottom: 18 }}>
      <label style={{
        display: "block", marginBottom: 7,
        fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: C.text,
      }}>{label}</label>
      <div style={{ position: "relative" }}>
        <input
          className="eva-input"
          type={isPassword ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            width: "100%", padding: "12px 16px",
            paddingRight: isPassword ? 44 : 16,
            borderRadius: 10, fontSize: 14,
            fontFamily: "'DM Sans', sans-serif",
            background: C.surface,
            border: `1.5px solid ${error ? C.error : focused ? C.violet : C.border}`,
            color: C.text,
            boxShadow: focused ? `0 0 0 3px rgba(116,102,250,0.12)` : "none",
            transition: "all 0.2s",
          }}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShow(s => !s)}
            style={{
              position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
              background: "none", border: "none", cursor: "pointer", padding: 4,
              color: C.textMuted, display: "flex", alignItems: "center",
            }}
          >
            {show ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <p style={{ color: C.error, fontSize: 12, marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>{error}</p>}
    </div>
  );
};

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 6) e.password = "Password must be at least 6 characters";
    return e;
  };

   // Load saved credentials on mount (optional - for "remember me" feature)
  
   const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { 
      setErrors(errs); 
      return; 
    }
    setErrors({});
    setLoading(true);

    setTimeout(() => {
      // Get the stored user data from registration
      const userData = JSON.parse(localStorage.getItem("userFormData") || "{}");
      
      // Check if credentials match the stored user data
      if (userData.email === form.email && userData.password === form.password) {
        // Store current user session
        localStorage.setItem("currentUser", JSON.stringify({
          email: userData.email,
          name: userData.name,
          loginTime: new Date().toISOString()
        }));
        
        setLoading(false);
        setSuccess(true);
        
        setTimeout(() => { 
         navigate('/app')
        }, 1200);
      } else {
        alert("please enter valid email and password ")
        setLoading(false);
        
        setErrors({ 
          general: "Invalid email or password" 
        });
      }
    }, 1500);
  };

  const goHome = () => { window.location.href = "/"; };
  const goRegister = () => { window.location.href = "/register"; };

  return (
    <>
      <GlobalStyle />
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", position: "relative", overflow: "hidden" }}>

        {/* ── Left decorative panel ── */}
        <div style={{
          display: "none", width: "45%", background: `linear-gradient(145deg, ${C.violet} 0%, ${C.violetDim} 60%, #3a2fb8 100%)`,
          position: "relative", overflow: "hidden", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: 60,
        }} className="login-panel">
          {/* Floating orbs */}
          <div style={{ position: "absolute", top: "10%", right: "10%", width: 200, height: 200, borderRadius: "50%", background: "rgba(255,255,255,0.08)", animation: "float 6s ease-in-out infinite" }} />
          <div style={{ position: "absolute", bottom: "15%", left: "5%", width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,0.06)", animation: "float 8s ease-in-out infinite 2s" }} />
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.04)" }} />

          {/* Grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          <div style={{ position: "relative", textAlign: "center" }}>
            {/* Spinning ring */}
            <div style={{ position: "relative", width: 120, height: 120, margin: "0 auto 40px" }}>
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.2)",
                borderTopColor: "rgba(255,255,255,0.8)",
                animation: "spin-slow 8s linear infinite",
              }} />
              <div style={{
                position: "absolute", inset: 12, borderRadius: "50%",
                background: "rgba(255,255,255,0.12)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="40" height="40" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1L14 4.5V11.5L8 15L2 11.5V4.5L8 1Z" stroke="white" strokeWidth="1.2" fill="none"/>
                  <circle cx="8" cy="8" r="2.5" fill="white"/>
                </svg>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 36, color: "white", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16 }}>
              Build apps at<br />the speed of thought
            </h2>
            <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 15, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, maxWidth: 320 }}>
              Describe your idea. EVA generates a complete, production-ready app in seconds.
            </p>

            {/* Stats row */}
            <div style={{ display: "flex", gap: 32, justifyContent: "center", marginTop: 48 }}>
              {[["10k+", "Apps Built"], ["< 60s", "Generation"], ["99%", "Uptime"]].map(([n, l]) => (
                <div key={n} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: "white" }}>{n}</div>
                  <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: form panel ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 24px", position: "relative" }}>
          {/* Subtle bg glow */}
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.violetGlow} 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(60px)" }} />

          <div style={{ width: "100%", maxWidth: 420, position: "relative" }}>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: 40 }}
            >
              <Logo onClick={goHome} />
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "#fff",
                border: `1px solid ${C.border}`,
                borderRadius: 20,
                padding: "40px 36px",
                boxShadow: `0 8px 60px rgba(116,102,250,0.10)`,
              }}
            >
              {success ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{ textAlign: "center", padding: "20px 0" }}
                >
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                    boxShadow: `0 8px 30px ${C.violetGlow}`,
                  }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 22, color: C.text, marginBottom: 8 }}>Welcome back!</h3>
                  <p style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>Redirecting you to the dashboard…</p>
                </motion.div>
              ) : (
                <>
                  <div style={{ marginBottom: 28 }}>
                    <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 26, color: C.text, letterSpacing: "-0.02em", marginBottom: 6 }}>
                      Welcome back
                    </h1>
                    <p style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                      Log in to your EVA AI account
                    </p>
                  </div>

                  {/* Social login */}
                  <div style={{ display: "flex", gap: 10, marginBottom: 24 }}>
                    {[
                      { label: "Google", icon: <svg width="16" height="16" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg> },
                      { label: "GitHub", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill={C.text}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> },
                    ].map(({ label, icon }) => (
                      <button key={label} style={{
                        flex: 1, padding: "10px 16px", borderRadius: 10, border: `1.5px solid ${C.border}`,
                        background: C.surface, cursor: "pointer", display: "flex", alignItems: "center",
                        justifyContent: "center", gap: 8, fontFamily: "'DM Sans', sans-serif",
                        fontSize: 13, fontWeight: 600, color: C.text, transition: "all 0.2s",
                      }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = C.violet; e.currentTarget.style.background = C.surfaceHi; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
                      >
                        {icon} {label}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                    <span style={{ color: C.textMuted, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>or continue with email</span>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <InputField
                      label="Email address"
                      type="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      error={errors.email}
                    />
                    <InputField
                      label="Password"
                      type="password"
                      placeholder="Enter your password"
                      value={form.password}
                      onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                      error={errors.password}
                    />

                    <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 22, marginTop: -8 }}>
                      <a href="#" style={{ color: C.violet, fontSize: 13, fontFamily: "'DM Sans', sans-serif", textDecoration: "none", fontWeight: 500 }}>
                        Forgot password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        width: "100%", padding: "13px 20px", borderRadius: 10, border: "none",
                        background: loading ? C.textMuted : `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
                        color: "white", fontSize: 15, fontWeight: 700,
                        fontFamily: "'DM Sans', sans-serif", cursor: loading ? "not-allowed" : "pointer",
                        boxShadow: loading ? "none" : `0 8px 30px ${C.violetGlow}`,
                        transition: "all 0.25s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      }}
                      onMouseEnter={e => { if (!loading) e.currentTarget.style.transform = "translateY(-1px)"; }}
                      onMouseLeave={e => { e.currentTarget.style.transform = ""; }}
                    >
                      {loading ? (
                        <>
                          <div style={{ width: 16, height: 16, border: "2px solid rgba(255,255,255,0.4)", borderTopColor: "white", borderRadius: "50%", animation: "spin-slow 0.8s linear infinite" }} />
                          Signing in…
                        </>
                      ) : "Sign In →"}
                    </button>
                  </form>

                  <p style={{ textAlign: "center", marginTop: 24, color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                    Don't have an account?{" "}
                    <span
                      onClick={goRegister}
                      style={{ color: C.violet, fontWeight: 600, cursor: "pointer" }}
                    >Create one free</span>
                  </p>
                </>
              )}
            </motion.div>

            <p style={{ textAlign: "center", marginTop: 24, color: C.textMuted, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
              By signing in you agree to our{" "}
              <a href="#" style={{ color: C.textSub }}>Terms</a> &amp;{" "}
              <a href="#" style={{ color: C.textSub }}>Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>

      {/* Responsive: show left panel on lg+ */}
      <style>{`
        @media (min-width: 900px) {
          .login-panel { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default LoginPage;