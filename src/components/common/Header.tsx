"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./Header.css";
import { 
  Calendar, 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  Stethoscope, 
  UserCheck, 
  Building2, 
  Bed, 
  ShieldPlus, 
  Heart 
} from "lucide-react";

interface HeaderProps {
  onOpenModal?: (type?: "b2b" | "patient") => void;
  activeNav?: string;
}

export default function Header({ 
  onOpenModal = () => {},
  activeNav
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const navigationId = useId();

  useEffect(() => {
    if (!activeDropdown && !mobileMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, [activeDropdown, mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/", hasDropdown: false },
    { 
      name: "About Us", 
      href: "/about-us", 
      hasDropdown: true,
      items: [
        { title: "About Dr. AllCare", href: "/about-us", desc: "Corporate background and national healthcare platform." },
        { title: "Vision & Mission", href: "/vision-and-mission", desc: "Our ethical clinical mission and pan-India expansion." },
        { title: "Corporate Partnerships", href: "/corporate-partnerships", desc: "Institutional healthcare contracts & strategic tie-ups." }
      ]
    },
    { 
      name: "Our Services", 
      href: "/services", 
      hasDropdown: true,
      items: [
        { title: "Hospital Management", href: "/hospital-management", desc: "Complete operations, billing and administration." },
        { title: "Corporate Healthcare", href: "/corporate-healthcare", desc: "Factory OHCs, industrial medical teams & SLAs." },
        { title: "Healthcare Staffing", href: "/healthcare-staffing", desc: "Verified doctors, surgeons and ICU nurses." },
        { title: "Hospital Setup & Consultancy", href: "/hospital-setup-consultancy", desc: "Planning, architecture & licensing." },
        { title: "Medical Equipment Solutions", href: "/medical-equipment", desc: "Procurement, leasing & biomedical maintenance." }
      ]
    },
    { 
      name: "For Businesses", 
      href: "/corporate-healthcare", 
      hasDropdown: true,
      items: [
        { title: "Hospital Operations Outsourcing", href: "/hospital-management", desc: "Turnkey management & revenue turnaround." },
        { title: "Corporate Healthcare Solutions", href: "/corporate-healthcare", desc: "On-site doctors, OHCs & emergency care." },
        { title: "Doctor Recruitment", href: "/doctor-recruitment", desc: "Specialist surgeons and consultant doctors." },
        { title: "Nursing & Technical Staff", href: "/nursing-staffing", desc: "ICU nurses, OT techs and paramedics." },
        { title: "Corporate Partnerships", href: "/corporate-partnerships", desc: "Enterprise SLAs and healthcare agreements." }
      ]
    },
    { 
      name: "For Patients", 
      href: "/find-treatment", 
      hasDropdown: true,
      items: [
        { 
          title: "Find Treatment", 
          href: "/find-treatment", 
          desc: "Super-specialty care in cardiology, oncology &..",
          icon: <Stethoscope className="w-5 h-5 text-blue-600" />
        },
        { 
          title: "Find Doctors", 
          href: "/find-doctors", 
          desc: "Top verified specialists across Indian metro centers.",
          icon: <UserCheck className="w-5 h-5 text-blue-600" />
        },
        { 
          title: "Find Hospitals", 
          href: "/find-hospitals", 
          desc: "Compare accredited partner hospitals in major...",
          icon: <Building2 className="w-5 h-5 text-blue-600" />
        },
        { 
          title: "Surgery Packages", 
          href: "/surgery-packages", 
          desc: "Transparent surgical estimates with bedside...",
          icon: <Bed className="w-5 h-5 text-blue-600" />
        },
        { 
          title: "Domestic Patient Care", 
          href: "/domestic-patients", 
          desc: "Interstate patient logistics from Bihar, UP, etc..",
          icon: <ShieldPlus className="w-5 h-5 text-blue-600" />
        },
        { 
          title: "Patient Concierge", 
          href: "/patient-care-coordination", 
          desc: "Dedicated coordinator managing hospital stays..",
          icon: <Heart className="w-5 h-5 text-blue-600" />
        }
      ]
    },
    { 
      name: "International Patients", 
      href: "/international-patients", 
      hasDropdown: true,
      items: [
        { title: "Medical Visa Assistance", href: "/international-patients", desc: "Official visa invitation letters within 24 hours." },
        { title: "International Concierge", href: "/international-patients", desc: "Airport reception, guest house & multilingual translators." },
        { title: "Surgery Cost Estimates", href: "/surgery-packages", desc: "Transparent quotes for international travelers." }
      ]
    },
    { name: "Careers", href: "/careers", hasDropdown: false },
    { name: "Contact", href: "/contact-us", hasDropdown: false },
  ];

  return (
    <header
      ref={headerRef}
      className="site-navigation-header w-full"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          const target = event.target as HTMLElement;
          target.closest("[data-navigation-group]")?.querySelector<HTMLButtonElement>("button")?.focus();
          setActiveDropdown(null);
          setMobileMenuOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setActiveDropdown(null);
          setMobileMenuOpen(false);
        }
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-3">
        
        {/* Brand Logo with Dr. AllCare Logo + Tagline */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative h-14 w-[112px] flex-shrink-0 flex items-center sm:w-[128px]">
            <Image
              src="/images/dr-all-care-logo.png"
              alt="Dr. AllCare - We Care Always For You"
              fill
              sizes="(max-width: 640px) 112px, 128px"
              className="object-contain object-left"
              priority
            />
          </div>
          <div className="hidden 2xl:flex flex-col border-l border-slate-200 pl-3 shrink-0">
            <span className="text-[11px] font-bold text-teal-700 tracking-wide">
              We Care Always For You
            </span>
            <span className="text-[9px] text-slate-500 uppercase tracking-widest font-semibold">
              Healthcare Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links - Single-line, No text wrap */}
        <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 shrink-0">
          {navLinks.map((item) => (
            <div 
              key={item.name}
              data-navigation-group
              className="relative shrink-0"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-full transition-colors whitespace-nowrap shrink-0 ${
                      activeNav === item.name
                        ? "text-teal-800 bg-teal-50 border border-teal-200/80 font-bold shadow-sm"
                        : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                  <button
                    type="button"
                    aria-label={`Toggle ${item.name} links`}
                    aria-expanded={activeDropdown === item.name}
                    aria-controls={`${navigationId}-${item.name.replaceAll(" ", "-")}`}
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="rounded-lg p-1.5 text-slate-600 hover:bg-teal-50 hover:text-teal-800 focus-visible:outline-2 focus-visible:outline-teal-600"
                  >
                    <ChevronDown className={`h-3.5 w-3.5 ${activeDropdown === item.name ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-colors inline-block whitespace-nowrap shrink-0 ${
                    activeNav === item.name
                      ? "text-teal-700 bg-teal-50/90 font-bold shadow-sm"
                      : "text-slate-700 hover:text-teal-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                </Link>
              )}

              {/* Dropdown Menu */}
              {item.hasDropdown && activeDropdown === item.name && item.items && (
                <div className="site-navigation-dropdown" id={`${navigationId}-${item.name.replaceAll(" ", "-")}`}>
                  <div className="site-navigation-panel">
                    {item.items.map((sub: { title: string; href: string; desc: string; icon?: React.ReactNode }) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setActiveDropdown(null)}
                        className="site-navigation-item"
                      >
                        {sub.icon && (
                          <div className="text-blue-600 mt-0.5 flex-shrink-0 group-hover/item:text-teal-700 transition-colors">
                            {sub.icon}
                          </div>
                        )}
                        <div className="min-w-0">
                          <div className="site-navigation-title">
                            {sub.title}
                          </div>
                          <p className="site-navigation-description">
                            {sub.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Button: "Get a Consultation ->" */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenModal("b2b")}
            className="px-4 sm:px-5 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-semibold text-xs sm:text-sm rounded-xl transition shadow-md shadow-teal-700/20 flex items-center gap-2 group whitespace-nowrap shrink-0"
          >
            <Calendar className="w-4 h-4 text-teal-100 shrink-0" />
            <span className="whitespace-nowrap">Get a Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="site-navigation-mobilePanel xl:hidden border-t border-slate-200 p-5 space-y-4 max-h-[85vh] overflow-y-auto">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal("b2b");
            }}
            className="w-full py-3 bg-teal-600 text-white font-semibold text-xs rounded-xl flex items-center justify-center gap-2 shadow"
          >
            <Calendar className="w-4 h-4" />
            <span>Get a Consultation</span>
          </button>

          <div className="space-y-1">
            {navLinks.map((item) => (
              <div key={item.name} className="border-b border-slate-100 pb-1">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-3 text-sm font-bold text-slate-800 hover:text-teal-700"
                  >
                    {item.name}
                  </Link>
                  {item.items && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.name} links`}
                      aria-expanded={activeDropdown === item.name}
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.name ? null : item.name)
                      }
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-teal-50 hover:text-teal-700"
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          activeDropdown === item.name ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  )}
                </div>
                {item.items && activeDropdown === item.name && (
                  <div className="space-y-1 pb-2 pl-3">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-lg px-2 py-2 text-xs text-slate-600 transition hover:bg-teal-50 hover:text-teal-700"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
