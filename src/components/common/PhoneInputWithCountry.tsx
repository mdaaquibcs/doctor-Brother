"use client";

import React from "react";
import { Phone, ChevronDown } from "lucide-react";

export interface CountryCodeOption {
  code: string;
  flag: string;
  name: string;
}

export const POPULAR_COUNTRY_CODES: CountryCodeOption[] = [
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+1", flag: "🇺🇸", name: "USA / Canada" },
  { code: "+44", flag: "🇬🇧", name: "UK" },
  { code: "+971", flag: "🇦🇪", name: "UAE" },
  { code: "+966", flag: "🇸🇦", name: "Saudi Arabia" },
  { code: "+880", flag: "🇧🇩", name: "Bangladesh" },
  { code: "+977", flag: "🇳🇵", name: "Nepal" },
  { code: "+968", flag: "🇴🇲", name: "Oman" },
  { code: "+974", flag: "🇶🇦", name: "Qatar" },
  { code: "+965", flag: "🇰🇼", name: "Kuwait" },
  { code: "+65", flag: "🇸🇬", name: "Singapore" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
];

interface PhoneInputWithCountryProps {
  value: string; // Exactly up to 10 digits
  countryCode: string; // e.g. "+91"
  onChangePhone: (digitsOnly: string) => void;
  onChangeCountryCode: (code: string) => void;
  required?: boolean;
  placeholder?: string;
  size?: "sm" | "md";
  className?: string;
  id?: string;
  name?: string;
}

export default function PhoneInputWithCountry({
  value,
  countryCode = "+91",
  onChangePhone,
  onChangeCountryCode,
  required = true,
  placeholder = "Enter 10-digit mobile number",
  size = "md",
  className = "",
  id,
  name = "phone",
}: PhoneInputWithCountryProps) {
  // Prevent any non-digit character from being typed
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Standard navigation and editing keys allowed
    const allowedKeys = [
      "Backspace",
      "Delete",
      "Tab",
      "Enter",
      "Escape",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "ArrowDown",
      "Home",
      "End",
    ];

    if (allowedKeys.includes(e.key)) {
      return;
    }

    // Allow keyboard shortcuts (Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+Z)
    if ((e.ctrlKey || e.metaKey) && ["a", "c", "v", "x", "z"].includes(e.key.toLowerCase())) {
      return;
    }

    // Disallow everything except numbers 0-9 (Blocks alphabets a-z, symbols, space)
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Strip non-digits and cap strictly at 10 digits
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const digitsOnly = rawVal.replace(/\D/g, "").slice(0, 10);
    onChangePhone(digitsOnly);
  };

  // Handle paste events safely
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedText = e.clipboardData.getData("text");
    const digitsOnly = pastedText.replace(/\D/g, "").slice(0, 10);
    onChangePhone(digitsOnly);
  };

  const isSmall = size === "sm";

  return (
    <div
      className={`relative flex items-center w-full border border-slate-300 rounded-xl bg-white transition focus-within:ring-2 focus-within:ring-teal-500 focus-within:border-teal-500 overflow-hidden shadow-xs ${className}`}
    >
      {/* Left Icon */}
      <div className="pl-3 text-slate-400 flex items-center pointer-events-none select-none">
        <Phone className={isSmall ? "w-3.5 h-3.5" : "w-4 h-4"} />
      </div>

      {/* 10-Digit Numeric Input */}
      <input
        id={id}
        name={name}
        required={required}
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        pattern="[0-9]{10}"
        maxLength={10}
        minLength={10}
        placeholder={placeholder}
        value={value}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        onPaste={handlePaste}
        className={`flex-1 pl-2.5 pr-2 outline-none bg-transparent text-slate-900 placeholder-slate-400 font-medium tracking-wide ${
          isSmall ? "py-2 text-xs" : "py-2 text-sm"
        }`}
      />

      {/* Dynamic Digit Counter */}
      {value.length > 0 && (
        <span
          className={`text-[10px] font-bold px-1.5 py-0.5 rounded mr-1.5 transition select-none ${
            value.length === 10
              ? "text-emerald-700 bg-emerald-50 border border-emerald-200"
              : "text-amber-700 bg-amber-50 border border-amber-200"
          }`}
          title={`${value.length} of 10 digits`}
        >
          {value.length}/10
        </span>
      )}

      {/* Right-Side Country Code Select */}
      <div className="relative border-l border-slate-200 bg-slate-50/90 hover:bg-slate-100 transition-colors flex items-center self-stretch">
        <select
          value={countryCode}
          onChange={(e) => onChangeCountryCode(e.target.value)}
          aria-label="Country Code"
          title="Select Country Code"
          className={`bg-transparent appearance-none font-semibold text-slate-700 cursor-pointer outline-none pl-2.5 pr-6 ${
            isSmall ? "py-2 text-xs" : "py-2 text-sm"
          }`}
        >
          {POPULAR_COUNTRY_CODES.map((item) => (
            <option key={item.code} value={item.code} className="text-slate-900 py-1">
              {item.flag} {item.code} ({item.name})
            </option>
          ))}
        </select>
        {/* Dropdown Chevron */}
        <ChevronDown className="w-3.5 h-3.5 text-slate-400 pointer-events-none absolute right-1.5 top-1/2 -translate-y-1/2" />
      </div>
    </div>
  );
}
