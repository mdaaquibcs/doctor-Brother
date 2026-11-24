"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Building2,
  Globe2,
  Heart,
  Search,
  ShieldPlus,
  Stethoscope,
  Users,
  type LucideIcon
} from "lucide-react";
import Header from "@/components/common/Header";
import PageHeader from "@/components/common/PageHeader";

interface HomeExperienceProps {
  onOpenModal: (type?: "b2b" | "patient") => void;
}

const services: {
  title: string;
  description: string;
  href: string;
  category: string;
  icon: LucideIcon;
  iconStyle: string;
  illustrationStyle: string;
}[] = [
  {
    title: "Find Treatment",
    description: "Explore specialist treatment options and trusted care pathways.",
    href: "/find-treatment",
    category: "Patient care",
    icon: Activity,
    iconStyle: "from-blue-500 to-cyan-500",
    illustrationStyle: "text-blue-200",
  },
  {
    title: "Find Doctors",
    description: "Connect with verified specialists and experienced surgeons.",
    href: "/find-doctors",
    category: "Patient care",
    icon: Stethoscope,
    iconStyle: "from-violet-500 to-purple-500",
    illustrationStyle: "text-violet-200",
  },
  {
    title: "Find Hospitals",
    description: "Explore accredited hospitals and care centers across India.",
    href: "/find-hospitals",
    category: "Patient care",
    icon: Building2,
    iconStyle: "from-teal-500 to-emerald-400",
    illustrationStyle: "text-teal-200",
  },
  {
    title: "Hospital Management",
    description: "Strengthen hospital operations with experienced management teams.",
    href: "/hospital-management",
    category: "For organizations",
    icon: Building2,
    iconStyle: "from-cyan-500 to-blue-500",
    illustrationStyle: "text-cyan-200",
  },
  {
    title: "Healthcare Staffing",
    description: "Find credential-verified doctors, nurses, and medical staff.",
    href: "/healthcare-staffing",
    category: "For organizations",
    icon: Users,
    iconStyle: "from-purple-500 to-fuchsia-500",
    illustrationStyle: "text-purple-200",
  },
  {
    title: "Patient Coordination",
    description: "Get practical support with treatment, admission, and follow-up.",
    href: "/patient-care-coordination",
    category: "Patient care",
    icon: Heart,
    iconStyle: "from-teal-500 to-emerald-500",
    illustrationStyle: "text-emerald-200",
  },
  {
    title: "International Patients",
    description: "Coordinate treatment and travel support for care in India.",
    href: "/international-patients",
    category: "Patient care",
    icon: Globe2,
    iconStyle: "from-blue-500 to-indigo-500",
    illustrationStyle: "text-indigo-200",
  },
  {
    title: "Corporate Healthcare",
    description: "Build workplace clinics and occupational health programs.",
    href: "/corporate-healthcare",
    category: "For organizations",
    icon: ShieldPlus,
    iconStyle: "from-teal-500 to-cyan-500",
    illustrationStyle: "text-cyan-200",
  },
];

export default function HomeExperience({ onOpenModal }: HomeExperienceProps) {
  const [search, setSearch] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredServices = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return services;
    return services.filter((service) =>
      `${service.title} ${service.description} ${service.category}`
        .toLowerCase()
        .includes(query),
    );
  }, [search]);

  return (
    <div className="min-h-screen care-surface selection:bg-teal-500 selection:text-white">
      <Header activeNav="Home" onOpenModal={onOpenModal} />

      <PageHeader
        ctaLabel="Find care"
        onCtaClick={() => searchInputRef.current?.focus()}
        secondaryLabel="Talk to our team"
        onSecondaryClick={() => onOpenModal("patient")}
      />

      <section className="care-content relative z-20 mx-auto -mt-6 w-full max-w-7xl px-4 sm:-mt-7 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3 rounded-2xl border glass-panel p-2 sm:flex-row sm:rounded-full sm:p-2.5">
          <label className="care-search flex min-w-0 w-full flex-1 items-center gap-3 pl-3 sm:pl-4">
            <Search className="h-5 w-5 shrink-0 text-slate-400" aria-hidden="true" />
            <input
              ref={searchInputRef}
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search healthcare services…"
              aria-label="Search healthcare services"
              className="min-w-0 w-full bg-transparent py-2 text-xs text-slate-800 outline-none placeholder:text-slate-400 sm:text-sm"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="px-2 text-xs text-slate-400 transition hover:text-slate-600"
              >
                Clear
              </button>
            )}
          </label>
          <button
            type="button"
            onClick={() => onOpenModal("patient")}
            className="flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-[#009688] px-6 py-3 text-xs font-bold text-white shadow-sm transition hover:bg-[#00796B] sm:w-auto sm:rounded-full sm:px-7 sm:text-sm"
          >
            Request a consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="care-content mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-700">
              Your care, your way
            </p>
            <h2 className="mt-1 text-xl font-bold tracking-tight text-[#0A1E3F] sm:text-2xl">
              Explore healthcare services
            </h2>
          </div>
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-1.5 text-xs font-bold text-blue-600 transition hover:text-blue-800"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  href={service.href}
                  key={service.title}
                  className="group relative flex min-h-52 flex-col justify-between overflow-hidden rounded-3xl border glass-panel glass-service-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl sm:p-6"
                >
                  <div className="pointer-events-none absolute -bottom-12 -right-10 h-40 w-40 rounded-full bg-blue-100/50 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                  <div className="relative z-10 flex items-start justify-between gap-4">
                    <div className="max-w-[75%]">
                      <span className="inline-flex rounded-md border border-teal-200/80 bg-teal-50 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-teal-800">
                        {service.category}
                      </span>
                      <h3 className="mt-2 text-lg font-bold leading-tight text-[#0A1E3F] sm:text-xl">
                        {service.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-500 sm:text-sm">
                        {service.description}
                      </p>
                    </div>
                    <Icon
                      className={`h-16 w-16 shrink-0 drop-shadow-md transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20 ${service.illustrationStyle}`}
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="relative z-10 mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 transition-all group-hover:gap-2.5 group-hover:text-blue-800">
                      Explore service
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span className={`flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-md transition-transform group-hover:scale-105 ${service.iconStyle}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed glass-panel px-5 py-12 text-center">
            <Search className="mx-auto h-6 w-6 text-slate-400" aria-hidden="true" />
            <p className="mt-3 text-sm font-semibold text-slate-700">
              No services match your search.
            </p>
            <button
              type="button"
              onClick={() => setSearch("")}
              className="mt-2 text-xs font-bold text-teal-700 hover:text-teal-900"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      <section className="care-content mx-auto mb-12 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl glass-panel-dark px-6 py-8 text-white sm:px-9 sm:py-10">
          <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-teal-300">
                For hospitals & organizations
              </p>
              <h2 className="mt-2 text-xl font-bold leading-tight sm:text-2xl">
                Building better healthcare, together.
              </h2>
              <p className="mt-2 text-xs leading-5 text-slate-300 sm:text-sm">
                Discover hospital management, corporate healthcare, staffing, and infrastructure solutions.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenModal("b2b")}
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-teal-500 px-5 py-3 text-xs font-bold text-white transition hover:bg-teal-600 sm:text-sm"
            >
              Discuss your requirements
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
