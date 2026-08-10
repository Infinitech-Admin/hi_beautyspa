"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  CheckCircle,
  Shield,
  Loader2,
} from "lucide-react";
import { MainLayout } from "@/components/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const BRAND = {
  bg: "#fdf8f5",
  surface: "#ffffff",
  accent: "#a84f35",
  accentDark: "#3a1f14",
  soft: "#f5ede7",
  border: "#e4cfc4",
  text: "#a84f35",
  muted: "#7a5548",
  heroGradientFrom: "#e8b9a3",
  heroGradientTo: "#fdf8f5",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [phoneError, setPhoneError] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // Strip non-digits
      const digitsOnly = value.replace(/\D/g, "");
      setFormData((prev) => ({ ...prev, phone: digitsOnly }));

      // Validate
      if (digitsOnly.length > 0 && !digitsOnly.startsWith("09")) {
        setPhoneError("Phone number must start with 09");
      } else if (digitsOnly.length > 11) {
        // Don't update beyond 11 digits
        return;
      } else if (digitsOnly.length === 11 && !digitsOnly.startsWith("09")) {
        setPhoneError("Phone number must start with 09");
      } else {
        setPhoneError("");
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validatePhone = (): boolean => {
    const phone = formData.phone;
    if (!phone.startsWith("09")) {
      setPhoneError("Phone number must start with 09");
      return false;
    }
    if (phone.length !== 11) {
      setPhoneError("Phone number must be exactly 11 digits");
      return false;
    }
    setPhoneError("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setFormData({ name: "", phone: "", subject: "", message: "" });
      setPhoneError("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <MainLayout>
      {/* HERO */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: `linear-gradient(105deg, ${BRAND.heroGradientFrom} 0%, ${BRAND.heroGradientTo} 60%)`,
        }}
      >
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4"
            style={{ color: BRAND.muted }}
          >
            Contact • Booking • Support
          </p>
          <h1
            className="font-serif text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-tight"
            style={{ color: BRAND.accentDark }}
          >
            Let&apos;s Connect
            <br />
            <span className="italic" style={{ color: BRAND.text }}>
              Ready When You Are
            </span>
          </h1>
          <p
            className="max-w-xl mx-auto text-lg leading-relaxed font-serif"
            style={{ color: BRAND.muted }}
          >
            Whether you're booking a session or just have a question — we're
            here for you.
          </p>
          <div
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm"
            style={{ color: BRAND.muted }}
          >
            <div className="flex items-center gap-2">
              <CheckCircle size={16} style={{ color: BRAND.accent }} />
              Fast Response
            </div>
            <div className="flex items-center gap-2">
              <Shield size={16} style={{ color: BRAND.accent }} />
              Secure & Private
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} style={{ color: BRAND.accent }} />
              Same-Day Replies
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section
        className="py-10 border-y"
        style={{ borderColor: BRAND.border, background: BRAND.bg }}
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 text-center">
          {[
            ["1,000+", "Happy Clients"],
            ["24/7", "Message Support Window"],
            ["< 2 hrs", "Average Response Time"],
          ].map(([stat, label], i) => (
            <div key={i}>
              <p
                className="text-3xl font-bold tracking-tight"
                style={{ color: BRAND.accentDark }}
              >
                {stat}
              </p>
              <p
                className="text-xs uppercase tracking-wider"
                style={{ color: BRAND.muted }}
              >
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-16" style={{ background: BRAND.bg }}>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          {/* LEFT - FORM */}
          <div
            className="p-10 rounded-3xl shadow-xl"
            style={{
              background: BRAND.surface,
              border: `1px solid ${BRAND.border}`,
            }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-2"
              style={{ color: BRAND.muted }}
            >
              Send Message
            </p>
            <h2
              className="font-serif text-3xl font-bold tracking-tight mb-2"
              style={{ color: BRAND.accentDark }}
            >
              Send us a message
            </h2>
            <p
              className="text-sm mb-6 leading-relaxed font-serif"
              style={{ color: BRAND.muted }}
            >
              Tell us what you need and we'll respond as soon as possible.
            </p>

            {status === "success" && (
              <div
                className="mb-5 flex items-center gap-2 p-4 rounded-xl text-sm"
                style={{
                  background: "#f0fdf4",
                  color: "#166534",
                  border: "1px solid #bbf7d0",
                }}
              >
                <CheckCircle size={16} />
                Message sent! We'll get back to you shortly.
              </div>
            )}

            {status === "error" && (
              <div
                className="mb-5 p-4 rounded-xl text-sm"
                style={{
                  background: "#fef2f2",
                  color: "#991b1b",
                  border: "1px solid #fecaca",
                }}
              >
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form className="grid gap-5" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

                <div className="flex flex-col gap-1">
                  <Input
                    name="phone"
                    placeholder="09XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    inputMode="numeric"
                    maxLength={11}
                    style={phoneError ? { borderColor: "#dc2626" } : {}}
                  />
                  {phoneError && (
                    <p className="text-xs" style={{ color: "#dc2626" }}>
                      {phoneError}
                    </p>
                  )}
                  {!phoneError && formData.phone.length > 0 && (
                    <p className="text-xs" style={{ color: BRAND.muted }}>
                      {formData.phone.length}/11 digits
                    </p>
                  )}
                </div>
              </div>

              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Write your message here..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl outline-none resize-none"
                style={{
                  border: `1px solid ${BRAND.border}`,
                  background: "rgba(255,255,255,0.7)",
                }}
              />
              <Button
                type="submit"
                disabled={status === "loading"}
                className="font-semibold py-3 rounded-full shadow-lg hover:scale-[1.02] transition-all duration-300 uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                style={{
                  background: BRAND.accent,
                  color: "white",
                  border: "none",
                }}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>

            <p
              className="font-serif text-xs mt-4 leading-relaxed"
              style={{ color: BRAND.muted }}
            >
              Your information is kept private and only used to respond to your
              inquiry.
            </p>
          </div>

          {/* RIGHT - INFO */}
          <div className="grid gap-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: Phone, label: "Call Us", value: "09128777453" },
                {
                  icon: MapPin,
                  label: "Location",
                  value:
                    "4/F ,Antel Spa residences, 7829 salamanca makati city",
                },
                {
                  icon: Clock,
                  label: "Open Daily",
                  value: "2:00 PM – 2:00 AM",
                },
                {
                  icon: Mail,
                  label: "Email",
                  value: "hibeautyspa81@gmail.com",
                },
              ].map(({ icon: Icon, label, value }, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl shadow-md hover:shadow-xl transition"
                  style={{
                    background: BRAND.surface,
                    border: `1px solid ${BRAND.border}`,
                  }}
                >
                  <Icon className="mb-3" style={{ color: BRAND.accent }} />
                  <p
                    className="font-semibold"
                    style={{ color: BRAND.accentDark }}
                  >
                    {label}
                  </p>
                  <p className="text-sm" style={{ color: BRAND.muted }}>
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="p-6 rounded-2xl shadow-md"
              style={{
                background: BRAND.surface,
                border: `1px solid ${BRAND.border}`,
              }}
            >
              <h3
                className="font-serif font-bold text-2xl mb-4 tracking-tight"
                style={{ color: BRAND.accentDark }}
              >
                What happens next
              </h3>
              <div className="space-y-3 text-sm" style={{ color: BRAND.muted }}>
                {[
                  "We review your message",
                  "We respond within the same day",
                  "We guide you to the right service",
                ].map((item, i) => (
                  <p key={i} className="flex gap-2 items-start">
                    <CheckCircle
                      size={16}
                      style={{ color: BRAND.accent, flexShrink: 0 }}
                    />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <Button
              asChild
              className="w-full font-semibold py-3 rounded-full shadow-md hover:opacity-90 transition uppercase tracking-widest text-xs"
              style={{
                background: BRAND.accent,
                color: "white",
                border: "none",
              }}
            >
              <a
                href="tel:09128777453"
                className="flex items-center justify-center gap-2"
              >
                <Phone size={16} /> Call Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-16 border-t"
        style={{ background: BRAND.bg, borderColor: BRAND.border }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <p
            className="text-xs uppercase tracking-widest text-center mb-3"
            style={{ color: BRAND.muted }}
          >
            Support
          </p>
          <h2
            className="font-serif text-3xl font-bold tracking-tight text-center mb-10"
            style={{ color: BRAND.accentDark }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 text-sm" style={{ color: BRAND.muted }}>
            {[
              [
                "How fast do you respond?",
                "We usually respond within a few hours during business hours.",
              ],
              [
                "Can I book directly here?",
                "Yes, just send your preferred service and schedule through the form.",
              ],
              [
                "Is my information private?",
                "Yes, all messages are kept strictly confidential.",
              ],
            ].map(([q, a], i) => (
              <div
                key={i}
                className="p-4 border rounded-xl"
                style={{ background: BRAND.surface, borderColor: BRAND.border }}
              >
                <p
                  className="font-serif text-xl font-bold mb-1"
                  style={{ color: BRAND.text }}
                >
                  {q}
                </p>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="px-6 pb-20" style={{ background: BRAND.surface }}>
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ border: `1px solid ${BRAND.border}` }}
          >
            <iframe
              src="https://www.google.com/maps?q=Antel+Spa+Residences+Makati&output=embed"
              className="w-full h-[450px] md:h-[550px] lg:h-[600px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-16 relative overflow-hidden"
        style={{
          background: `linear-gradient(105deg, ${BRAND.heroGradientFrom} 0%, ${BRAND.heroGradientTo} 60%)`,
        }}
      >
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <p
            className="text-xs uppercase tracking-[0.3em] mb-4"
            style={{ color: BRAND.muted }}
          >
            Limited Availability
          </p>
          <h2
            className="font-serif text-3xl md:text-4xl font-bold tracking-tight leading-tight"
            style={{ color: BRAND.accentDark }}
          >
            Ready to feel the difference?
            <span className="block mt-2" style={{ color: BRAND.text }}>
              Book your session today
            </span>
          </h2>
          <p
            className="font-serif max-w-2xl mx-auto mt-4 text-lg leading-relaxed"
            style={{ color: BRAND.muted }}
          >
            Secure your preferred schedule now. Our slots fill quickly,
            especially during peak hours.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-[1.03] transition uppercase tracking-widest text-xs"
              style={{
                background: BRAND.accent,
                color: "white",
                border: "none",
              }}
            >
              <Link href="/services">View Our Services</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-semibold px-8 py-3 rounded-full transition uppercase tracking-widest text-xs"
              style={{
                borderColor: BRAND.accent,
                color: BRAND.accent,
                background: "rgba(255,255,255,0.7)",
              }}
            >
              <a href="tel:09128777453">Book Now</a>
            </Button>
          </div>
          <div
            className="mt-6 text-xs flex flex-wrap justify-center gap-4"
            style={{ color: BRAND.muted }}
          >
            <span>✓ No commitment</span>
            <span>✓ Fast confirmation</span>
            <span>✓ Private &amp; secure</span>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
