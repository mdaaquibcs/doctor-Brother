import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumb?: { label: string; href?: string }[];
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumb = [],
  ctaLabel,
  onCtaClick
}: PageHeaderProps) {
  return (
    <div className="relative bg-gradient-to-b from-[#0A1E3F] via-[#0D254C] to-[#0A1E3F] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#122A54] overflow-hidden">
      {/* Background Glows & Patterns */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2dd4bf_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10 space-y-4">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-300">
          <Link href="/" className="hover:text-teal-400 transition flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              <ChevronRight className="w-3 h-3 text-slate-500" />
              {item.href ? (
                <Link href={item.href} className="hover:text-teal-400 transition">
                  {item.label}
                </Link>
              ) : (
                <span className="text-teal-400 font-semibold">{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold text-teal-300 bg-teal-500/20 border border-teal-500/30">
          {badge}
        </div>

        {/* Title & Subtitle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              {subtitle}
            </p>
          </div>

          {ctaLabel && (
            <button
              onClick={onCtaClick}
              className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-bold text-xs sm:text-sm rounded-xl transition shadow flex-shrink-0"
            >
              {ctaLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
