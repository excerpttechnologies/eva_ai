import React, { useState ,useEffect} from "react";
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
  success:    "#22c55e",
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
    @keyframes float2 {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-8px) rotate(5deg); }
    }
    @keyframes spin-slow {
      to { transform: rotate(360deg); }
    }
    @keyframes pulse-ring {
      0% { transform: scale(0.9); opacity: 1; }
      100% { transform: scale(1.4); opacity: 0; }
    }
  `}</style>
);

const Logo = ({ onClick }) => (
  <div onClick={onClick} style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}>
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

const InputField = ({ label, type = "text", placeholder, value, onChange, error, hint }) => {
  const [focused, setFocused] = useState(false);
  const [show, setShow] = useState(false);
  const isPassword = type === "password";

  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: "block", marginBottom: 7, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 13, color: C.text }}>{label}</label>
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
          <button type="button" onClick={() => setShow(s => !s)} style={{
            position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
            background: "none", border: "none", cursor: "pointer", padding: 4, color: C.textMuted, display: "flex",
          }}>
            {show ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            )}
          </button>
        )}
      </div>
      {error && <p style={{ color: C.error, fontSize: 12, marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>{error}</p>}
      {hint && !error && <p style={{ color: C.textMuted, fontSize: 12, marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>{hint}</p>}
    </div>
  );
};

// Password strength meter
const StrengthMeter = ({ password }) => {
  const getStrength = (pw) => {
    let s = 0;
    if (pw.length >= 8) s++;
    if (/[A-Z]/.test(pw)) s++;
    if (/[0-9]/.test(pw)) s++;
    if (/[^A-Za-z0-9]/.test(pw)) s++;
    return s;
  };
  const strength = getStrength(password);
  const labels = ["", "Weak", "Fair", "Good", "Strong"];
  const colors = ["", C.error, "#f59e0b", "#3b82f6", C.success];

  if (!password) return null;

  return (
    <div style={{ marginTop: -8, marginBottom: 16 }}>
      <div style={{ display: "flex", gap: 4, marginBottom: 5 }}>
        {[1,2,3,4].map(i => (
          <div key={i} style={{
            flex: 1, height: 3, borderRadius: 2,
            background: i <= strength ? colors[strength] : C.borderSub,
            transition: "background 0.3s",
          }} />
        ))}
      </div>
      <p style={{ fontSize: 12, color: colors[strength], fontFamily: "'DM Sans', sans-serif" }}>
        {labels[strength]}
      </p>
    </div>
  );
};

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Full name is required";
    if (!form.email) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Enter a valid email";
    if (!form.password) e.password = "Password is required";
    else if (form.password.length < 8) e.password = "Password must be at least 8 characters";
    if (!form.confirm) e.confirm = "Please confirm your password";
    else if (form.confirm !== form.password) e.confirm = "Passwords do not match";
    if (!agreed) e.terms = "You must agree to the terms";
    return e;
  };

  // Load from localStorage on component mount
useEffect(() => {
  const savedData = localStorage.getItem("userFormData");
  if (savedData) {
    setForm(JSON.parse(savedData));
  }
}, []);

const navigate=useNavigate()
const handleSubmit = (e) => {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length) { setErrors(errs); return; }
  setErrors({});
  
  // Store data in localStorage
  localStorage.setItem("userFormData", JSON.stringify(form));
  
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setSuccess(true);
    setTimeout(() => { 
      navigate("/login")
    }, 1800);
  }, 1800);
};

  const goHome = () => { window.location.href = "/"; };
  const goLogin = () => { window.location.href = "/login"; };

  const features = [
    "Generate full-stack apps in seconds",
    "Live preview & one-click deploy",
    "React, Node.js, Stripe — all built-in",
    "Production-ready code, every time",
  ];

  return (
    <>
      <GlobalStyle />
      <div style={{ minHeight: "100vh", background: C.bg, display: "flex", position: "relative", overflow: "hidden" }}>

        {/* ── Right decorative panel (shown on large screens) ── */}
        <div style={{
          display: "none", width: "42%", background: `linear-gradient(145deg, #3a2fb8 0%, ${C.violetDim} 40%, ${C.violet} 100%)`,
          position: "relative", overflow: "hidden", flexDirection: "column",
          justifyContent: "center", alignItems: "center", padding: 60, order: 2,
        }} className="register-panel">
          {/* Animated shapes */}
          <div style={{ position: "absolute", top: "8%", left: "8%", width: 80, height: 80, borderRadius: 20, background: "rgba(255,255,255,0.08)", animation: "float2 7s ease-in-out infinite" }} />
          <div style={{ position: "absolute", top: "20%", right: "10%", width: 50, height: 50, borderRadius: "50%", background: "rgba(255,255,255,0.1)", animation: "float 5s ease-in-out infinite 1s" }} />
          <div style={{ position: "absolute", bottom: "20%", right: "8%", width: 100, height: 100, borderRadius: 24, background: "rgba(255,255,255,0.06)", animation: "float2 9s ease-in-out infinite 2s" }} />
          <div style={{ position: "absolute", bottom: "10%", left: "15%", width: 60, height: 60, borderRadius: "50%", background: "rgba(255,255,255,0.08)", animation: "float 6s ease-in-out infinite 0.5s" }} />

          {/* Grid */}
          <div style={{
            position: "absolute", inset: 0, pointerEvents: "none",
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }} />

          <div style={{ position: "relative", textAlign: "left", width: "100%", maxWidth: 340 }}>
            {/* Pulse icon */}
            <div style={{ position: "relative", width: 64, height: 64, marginBottom: 36 }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "rgba(255,255,255,0.15)", animation: "pulse-ring 2s ease-out infinite" }} />
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
            </div>

            <h2 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 34, color: "white", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 14 }}>
              Start building<br />for free today
            </h2>
            <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 15, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.7, marginBottom: 36 }}>
              Join 10,000+ developers shipping production apps with the power of AI.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: 12 }}
                >
                  <div style={{
                    width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(255,255,255,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>{f}</span>
                </motion.div>
              ))}
            </div>

            {/* Social proof */}
            <div style={{ marginTop: 44, paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.15)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 0, marginBottom: 8 }}>
                {["SC","MR","EW","JP"].map((av, i) => (
                  <div key={i} style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: `hsl(${250 + i * 20}, 60%, 55%)`,
                    border: "2px solid rgba(255,255,255,0.3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 10, fontWeight: 700, color: "white",
                    fontFamily: "'Syne', sans-serif",
                    marginLeft: i > 0 ? -8 : 0,
                  }}>{av}</div>
                ))}
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 13, fontFamily: "'DM Sans', sans-serif", marginLeft: 12 }}>
                  +9,800 developers joined
                </span>
              </div>
              <div style={{ display: "flex", gap: 1 }}>
                {[...Array(5)].map((_, i) => <span key={i} style={{ color: "#fbbf24", fontSize: 14 }}>★</span>)}
                <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 12, fontFamily: "'DM Sans', sans-serif", marginLeft: 8, alignSelf: "center" }}>4.9 / 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Left: form panel ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "40px 24px", position: "relative", order: 1 }}>
          {/* Subtle bg glow */}
          <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 500, height: 500, borderRadius: "50%", background: `radial-gradient(circle, ${C.violetGlow} 0%, transparent 70%)`, pointerEvents: "none", filter: "blur(60px)" }} />

          <div style={{ width: "100%", maxWidth: 420, position: "relative" }}>
            {/* Logo */}
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 36 }}>
              <Logo onClick={goHome} />
            </motion.div>

            {/* Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: "#fff", border: `1px solid ${C.border}`,
                borderRadius: 20, padding: "36px 36px 32px",
                boxShadow: `0 8px 60px rgba(116,102,250,0.10)`,
              }}
            >
              {success ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: "center", padding: "24px 0" }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: "50%",
                    background: `linear-gradient(135deg, ${C.violet}, ${C.violetDim})`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px", boxShadow: `0 8px 30px ${C.violetGlow}`,
                  }}>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 24, color: C.text, marginBottom: 8 }}>Account Created! 🎉</h3>
                  <p style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.6 }}>
                    Welcome to EVA AI, {form.name.split(" ")[0]}!<br />Taking you home…
                  </p>
                </motion.div>
              ) : (
                <>
                  <div style={{ marginBottom: 24 }}>
                    <h1 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 25, color: C.text, letterSpacing: "-0.02em", marginBottom: 6 }}>
                      Create your account
                    </h1>
                    <p style={{ color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                      Free forever. No credit card required.
                    </p>
                  </div>

                  {/* Social signup */}
                  <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
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

                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                    <span style={{ color: C.textMuted, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>or with email</span>
                    <div style={{ flex: 1, height: 1, background: C.border }} />
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    <InputField
                      label="Full name"
                      placeholder="Ada Lovelace"
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      error={errors.name}
                    />
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
                      placeholder="Create a strong password"
                      value={form.password}
                      onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                      error={errors.password}
                    />
                    <StrengthMeter password={form.password} />
                    <InputField
                      label="Confirm password"
                      type="password"
                      placeholder="Repeat your password"
                      value={form.confirm}
                      onChange={e => setForm(f => ({ ...f, confirm: e.target.value }))}
                      error={errors.confirm}
                    />

                    {/* Terms checkbox */}
                    <div style={{ marginBottom: 20 }}>
                      <label style={{ display: "flex", alignItems: "flex-start", gap: 10, cursor: "pointer" }}>
                        <div
                          onClick={() => setAgreed(a => !a)}
                          style={{
                            width: 18, height: 18, borderRadius: 5, flexShrink: 0, marginTop: 1,
                            border: `2px solid ${errors.terms ? C.error : agreed ? C.violet : C.border}`,
                            background: agreed ? C.violet : "transparent",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            transition: "all 0.2s", cursor: "pointer",
                          }}
                        >
                          {agreed && <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5 3.5-4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <span style={{ color: C.textSub, fontSize: 13, fontFamily: "'DM Sans', sans-serif", lineHeight: 1.5 }}>
                          I agree to the{" "}
                          <a href="#" style={{ color: C.violet, fontWeight: 600 }}>Terms of Service</a>
                          {" "}and{" "}
                          <a href="#" style={{ color: C.violet, fontWeight: 600 }}>Privacy Policy</a>
                        </span>
                      </label>
                      {errors.terms && <p style={{ color: C.error, fontSize: 12, marginTop: 5, fontFamily: "'DM Sans', sans-serif" }}>{errors.terms}</p>}
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
                          Creating account…
                        </>
                      ) : "Create Free Account →"}
                    </button>
                  </form>

                  <p style={{ textAlign: "center", marginTop: 22, color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                    Already have an account?{" "}
                    <span onClick={goLogin} style={{ color: C.violet, fontWeight: 600, cursor: "pointer" }}>Sign in</span>
                  </p>
                   <button onClick={()=>navigate('/app')} style={{ textAlign: "center", marginTop: 22, color: C.textSub, fontSize: 14, fontFamily: "'DM Sans', sans-serif" }}>
                    skip {" "}
                    <span  style={{ color: C.violet, fontWeight: 600, cursor: "pointer" }}>go to app</span>
                  </button>
                </>
              )}
            </motion.div>

            <p style={{ textAlign: "center", marginTop: 20, color: C.textMuted, fontSize: 12, fontFamily: "'DM Sans', sans-serif" }}>
              🔒 Your data is encrypted and never shared.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .register-panel { display: flex !important; }
        }
      `}</style>
    </>
  );
};

export default RegisterPage;