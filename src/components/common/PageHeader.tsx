"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronRight, Home, ShieldPlus } from "lucide-react";
import { PAGE_VISUALS } from "@/data/page-visuals";

interface PageHeaderProps {
  badge?: string;
  title?: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
  ctaLabel?: string;
  onCtaClick?: () => void;
  ctaHref?: string;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  compact?: boolean;
}

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumb = [],
  ctaLabel,
  onCtaClick,
  ctaHref,
  secondaryLabel,
  onSecondaryClick,
  compact = false,
}: PageHeaderProps) {
  const pathname = usePathname();
  const visual = PAGE_VISUALS[pathname];
  const isHome = pathname === "/";

  return (
    <section className={`care-page-hero care-hero ${compact ? "care-page-hero-compact" : ""}`}>
      <div className="care-hero-decoration" aria-hidden="true">
        <span>+</span><span>+</span><span>+</span>
      </div>
      <div className="care-hero-container">
        {!isHome && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="care-breadcrumb">
            <Link href="/"><Home size={14} aria-hidden="true" />Home</Link>
            {breadcrumb.map((item, index) => (
              <React.Fragment key={`${item.label}-${index}`}>
                <ChevronRight size={14} aria-hidden="true" />
                {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
              </React.Fragment>
            ))}
          </nav>
        )}
        <div className="care-hero-grid">
          <div className="care-hero-copy">
            <div className="care-eyebrow"><ShieldPlus size={16} aria-hidden="true" />{visual?.badge || badge}</div>
            <h1>{visual?.title || title}{visual?.accent && <span>{visual.accent}</span>}</h1>
            <p className="care-hero-description">{visual?.description || subtitle}</p>
            {(ctaLabel || secondaryLabel) && (
              <div className="care-hero-actions">
                {ctaLabel && (ctaHref ? (
                  <Link href={ctaHref} className="care-button-primary">{ctaLabel}</Link>
                ) : (
                  <button type="button" onClick={onCtaClick} className="care-button-primary">{ctaLabel}</button>
                ))}
                {secondaryLabel && <button type="button" onClick={onSecondaryClick} className="care-button-secondary">{secondaryLabel}</button>}
              </div>
            )}
          </div>
          <div className="care-hero-emblem" aria-hidden="true">
            <div className="care-emblem-orbit" />
            <div className="care-emblem-shield"><ShieldPlus strokeWidth={1.5} /></div>
          </div>
          {visual && (
            <figure className="care-hero-figure">
              <div className="care-hero-photo">
                <Image
                  src={visual.image}
                  alt={visual.alt}
                  fill
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 400px"
                  className="object-cover"
                  priority
                />
              </div>
              <figcaption><span>{visual.caption}</span><small>Illustrative image</small></figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>
  );
}
