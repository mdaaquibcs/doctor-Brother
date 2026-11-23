import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Dr. AllCare | We Care Always For You - Integrated Healthcare Solutions",
  description:
    "Dr. AllCare Healthcare Solutions - We Care Always For You. National healthcare management and solutions platform headquartered in India. Enterprise hospital operations, corporate healthcare contracts, specialized medical staffing, equipment procurement, and end-to-end patient care coordination.",
  keywords: [
    "Dr. AllCare",
    "Dr. AllCare Healthcare Solutions",
    "We Care Always For You",
    "Hospital Management Services India",
    "Corporate Healthcare Solutions",
    "Healthcare Staffing & Doctor Recruitment",
    "Medical Equipment Procurement",
    "Hospital Setup Consultancy",
    "Domestic Medical Tourism India",
    "International Patient Healthcare India"
  ],
  authors: [{ name: "Dr. AllCare Healthcare Solutions" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-teal-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
