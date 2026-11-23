import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Globe2, 
  ArrowUpRight 
} from "lucide-react";
import { FOOTER_LINKS } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="bg-[#061226] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Brand & Corporate Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="space-y-2">
              <Link href="/" className="inline-block">
                <div className="relative h-12 w-48 sm:w-52 bg-white px-3 py-1 rounded-2xl shadow-sm">
                  <Image
                    src="/images/dr-all-care-logo.png"
                    alt="Dr. AllCare - We Care Always For You"
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </Link>
              <div className="text-teal-400 font-bold text-xs tracking-wider uppercase">
                We Care Always For You
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Dr. AllCare is an enterprise healthcare management and solutions platform headquartered in India. 
              We deliver institutional hospital operations, industrial occupational health, certified medical 
              workforce staffing, turnkey hospital setup consultancy, and structured domestic & international 
              patient treatment coordination.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>Headquarters: Plot No 284, Sector 6, Pocket 5, Jasola Vihar, New Delhi, Delhi 110025</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <a href="tel:+917050011164" className="hover:text-white transition-colors">
                  Mobile / Helpline: +91 7050011164
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>Corporate Enquiries: solutions@drallcare.com</span>
              </div>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              B2B & Hospital Solutions
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.solutions.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-white transition flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Care Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Patient Care & Tourism
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.patients.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-white transition flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Governance Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400">
              Governance & Company
            </h4>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="text-slate-400 hover:text-white transition flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Regulatory & Ethical Disclaimer Strip */}
        <div className="py-6 border-b border-slate-800/80 text-xs text-slate-500 leading-relaxed space-y-2">
          <div className="flex items-center gap-2 text-slate-400 font-medium">
            <ShieldCheck className="w-4 h-4 text-teal-500" />
            <span>Statutory Compliance & Clinical Boundaries Disclosure:</span>
          </div>
          <p>
            Dr. AllCare Healthcare Solutions acts as an institutional management enterprise, healthcare staffing facilitator, 
            and patient coordination partner. Clinical decisions, surgical procedures, and medical advice remain strictly 
            the sovereign responsibility of registered, licensed medical practitioners and accredited clinical establishments 
            registered under the Clinical Establishments Act and respective State Medical Councils. All patient data is managed 
            in alignment with India&apos;s Digital Personal Data Protection (DPDP) Act.
          </p>
        </div>

        {/* Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Dr. AllCare Healthcare Solutions Pvt. Ltd. All rights reserved. • Tagline: We Care Always For You</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-400 transition">Terms of Service</Link>
            <span className="flex items-center gap-1 text-teal-500">
              <Globe2 className="w-3.5 h-3.5" /> India & Global Operations
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
