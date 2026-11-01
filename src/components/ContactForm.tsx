"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import type { Dictionary } from "@/lib/i18n";
import { pillClass } from "./Section";

type Status = "idle" | "sending" | "success" | "error" | "invalid";

const fieldClass =
  "mt-2 w-full rounded-2xl border-2 border-field-border bg-field px-4 py-3 text-base text-ink";
const labelClass = "text-sm font-bold text-ink";

export function ContactForm({ t }: { t: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle");
  // Bots tend to submit instantly; the server ignores forms sent too fast.
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      });
      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setStatus(res.status === 400 ? "invalid" : "error");
      }
    } catch {
      setStatus("error");
    }
  }

  const message =
    status === "success" ? t.success : status === "error" ? t.error : status === "invalid" ? t.invalid : "";

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="contact-name" className={labelClass}>{t.name}</label>
        <input id="contact-name" name="name" required maxLength={100} autoComplete="name" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-email" className={labelClass}>{t.email}</label>
        <input id="contact-email" name="email" type="email" required maxLength={200} autoComplete="email" className={fieldClass} />
      </div>
      <div>
        <label htmlFor="contact-type" className={labelClass}>{t.type}</label>
        <select id="contact-type" name="type" defaultValue="dev" className={fieldClass}>
          <option value="dev">{t.types.dev}</option>
          <option value="setting">{t.types.setting}</option>
          <option value="other">{t.types.other}</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className={labelClass}>{t.message}</label>
        <textarea id="contact-message" name="message" required maxLength={5000} rows={5} className={fieldClass} />
      </div>
      {/* Honeypot: hidden from people and assistive tech, filled by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company">{t.honeypot}</label>
        <input id="contact-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <button type="submit" disabled={status === "sending"} className={`w-full disabled:opacity-70 ${pillClass("solid")}`}>
        {status === "sending" ? t.sending : t.submit}
      </button>
      <p role="status" aria-live="polite" className={`min-h-6 text-[15px] ${status === "success" ? "text-ink" : "font-bold text-ink"}`}>
        {message}
      </p>
    </form>
  );
}
