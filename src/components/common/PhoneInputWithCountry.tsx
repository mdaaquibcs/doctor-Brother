"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import "./PhoneInputWithCountry.css";

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
  placeholder = "Mobile number",
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

  const selectedCountry = POPULAR_COUNTRY_CODES.find((item) => item.code === countryCode);
  return (
    <div className={`phone-control phone-control-${size} ${className}`}>
      <div className="phone-country">
        <span className="phone-country-display" aria-hidden="true"><span>{selectedCountry?.flag}</span>{countryCode}<ChevronDown size={14} /></span>
        <select value={countryCode} onChange={(e) => onChangeCountryCode(e.target.value)} aria-label="Country calling code" autoComplete="tel-country-code">
          {POPULAR_COUNTRY_CODES.map((item) => <option key={item.code} value={item.code}>{item.name} ({item.code})</option>)}
        </select>
      </div>
      <input id={id} name={name} aria-label={id ? undefined : "Phone / WhatsApp"} required={required} type="tel" inputMode="numeric" autoComplete="tel-national" pattern="[0-9]{10}" maxLength={10} minLength={10} title="Enter a 10-digit mobile number" placeholder={placeholder} value={value} onKeyDown={handleKeyDown} onChange={handleChange} onPaste={handlePaste} />
    </div>
  );
}
