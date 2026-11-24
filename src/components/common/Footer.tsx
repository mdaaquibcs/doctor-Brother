import Link from "next/link";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Services", href: "/services" },
  { label: "For Businesses", href: "/corporate-healthcare" },
  { label: "For Patients", href: "/find-treatment" },
  { label: "International Patients", href: "/international-patients" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact-us" },
];

export default function Footer() {
  return (
    <footer className="site-footer relative isolate overflow-hidden px-4 pb-5 pt-8 text-teal-50 sm:px-6 sm:pt-10 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="footer-glass rounded-[28px] p-6 sm:p-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_1fr] lg:gap-10">
            <div>
              <Link href="/" aria-label="Dr. AllCare home" className="inline-flex transition hover:-translate-y-0.5">
                <Image src="/images/dr-all-care-logo-footer.svg" alt="Dr. AllCare" width={172} height={72} className="h-[72px] w-[172px] object-contain" />
              </Link>
              <p className="mt-4 text-lg font-semibold tracking-tight text-white">We care. Always for you.</p>
              <p className="mt-2 max-w-[26ch] text-sm leading-6 text-teal-50">Connecting you to better healthcare.</p>
            </div>
            <nav aria-label="Footer navigation">
              <h2 className="mb-3 text-sm font-semibold text-white">Explore Dr. AllCare</h2>
              <ul className="grid grid-cols-2 gap-x-5 gap-y-0.5">
                {footerLinks.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-flex min-h-11 items-center py-2 text-sm leading-5 text-teal-50 transition-colors hover:text-white hover:underline underline-offset-4">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="md:col-span-2 lg:col-span-1">
              <h2 className="mb-3 text-sm font-semibold text-white">Let’s connect</h2>
              <address className="space-y-2 not-italic">
                <a href="tel:+917050011164" className="footer-contact flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white transition-colors">
                  <Phone className="h-4 w-4 shrink-0 text-teal-200" aria-hidden="true" />
                  <span>+91 70500 11164</span>
                </a>
                <a href="mailto:solutions@drallcare.com" className="footer-contact flex min-h-12 items-center gap-3 rounded-2xl px-4 py-3 text-sm text-white transition-colors">
                  <Mail className="h-4 w-4 shrink-0 text-teal-200" aria-hidden="true" />
                  <span className="break-all">solutions@drallcare.com</span>
                </a>
              </address>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-1 pt-5 text-xs leading-5 text-teal-50 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dr. AllCare Healthcare Solutions Pvt. Ltd.</p>
          <div className="flex gap-5">
            <Link href="/privacy-policy" className="py-2 transition hover:text-white">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="py-2 transition hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
