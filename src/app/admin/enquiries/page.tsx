"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Building2, 
  Users, 
  RefreshCw, 
  CheckCircle2, 
  Clock, 
  ArrowLeft,
  Search
} from "lucide-react";

interface BusinessEnquiry {
  id: string;
  reference_id: string;
  category: string;
  full_name: string;
  email: string;
  phone: string;
  organization: string;
  city: string | null;
  service_type: string;
  message: string | null;
  status: string;
  priority: string;
  created_at: string;
}

interface PatientEnquiry {
  id: string;
  reference_id: string;
  full_name: string;
  email: string | null;
  phone: string;
  city: string;
  country: string;
  is_international: boolean;
  specialty: string | null;
  medical_concern: string;
  timeline: string | null;
  status: string;
  priority: string;
  created_at: string;
}

export default function AdminEnquiriesPage() {
  const [loading, setLoading] = useState(true);
  const [isConfigured, setIsConfigured] = useState(false);
  const [businessEnquiries, setBusinessEnquiries] = useState<BusinessEnquiry[]>([]);
  const [patientEnquiries, setPatientEnquiries] = useState<PatientEnquiry[]>([]);
  const [stats, setStats] = useState({ totalBusiness: 0, totalPatients: 0, pendingReview: 0 });
  const [activeTab, setActiveTab] = useState<"all" | "business" | "patient">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const fetchEnquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/enquiries");
      const data = await res.json();
      setIsConfigured(Boolean(data.isConfigured));
      setBusinessEnquiries(data.business || []);
      setPatientEnquiries(data.patients || []);
      if (data.stats) {
        setStats(data.stats);
      }
    } catch (err) {
      console.error("Error fetching enquiries:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let isMounted = true;
    fetch("/api/admin/enquiries")
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setIsConfigured(Boolean(data.isConfigured));
        setBusinessEnquiries(data.business || []);
        setPatientEnquiries(data.patients || []);
        if (data.stats) setStats(data.stats);
        setLoading(false);
      })
      .catch(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  const filteredBusiness = businessEnquiries.filter((b) =>
    b.reference_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.service_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredPatients = patientEnquiries.filter((p) =>
    p.reference_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.medical_concern.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-sans">
      {/* Top Admin Header */}
      <header className="bg-[#0A1E3F] text-white border-b border-slate-700 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition flex items-center gap-1.5 text-xs font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Website</span>
            </Link>
            <div className="h-6 w-px bg-slate-700"></div>
            <div>
              <div className="text-sm font-black tracking-tight text-white flex items-center gap-2">
                <span>Dr. AllCare Admin</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  Operations Portal
                </span>
              </div>
              <div className="text-[11px] text-slate-300">
                Healthcare Management & Patient Coordination CRM
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={fetchEnquiries}
              disabled={loading}
              className="px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold transition flex items-center gap-1.5 shadow"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} />
              <span>Refresh</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1 space-y-6">
        
        {/* Connection Notice Banner */}
        {!isConfigured ? (
          <div className="bg-sky-50 border-l-4 border-teal-600 p-5 rounded-2xl shadow-sm space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-teal-600 flex-shrink-0 mt-0.5" />
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-[#0A1E3F]">
                    Local Database Engine Active (Ready for Demo Testing)
                  </h3>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-100 text-teal-800">
                    Live Local Store
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Every enquiry submitted via the website forms or modals is being verified and saved to disk. To switch to cloud-hosted Supabase PostgreSQL, add your credentials in{" "}
                  <code className="font-mono bg-white px-1.5 py-0.5 rounded font-bold border border-slate-200">.env.local</code>.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-3 rounded-2xl flex items-center justify-between text-xs text-emerald-800">
            <div className="flex items-center gap-2 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Connected to live Supabase PostgreSQL database. Real records are actively synchronized.</span>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded-full">
              Production Mode
            </span>
          </div>
        )}

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0 border border-teal-100">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                B2B Corporate Leads
              </div>
              <div className="text-2xl font-black text-[#0A1E3F] mt-0.5">
                {stats.totalBusiness}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Hospitals, OHCs & Staffing
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0 border border-sky-100">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Patient Consultations
              </div>
              <div className="text-2xl font-black text-[#0A1E3F] mt-0.5">
                {stats.totalPatients}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Surgery & Treatment Inquiries
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0 border border-amber-100">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Pending Review
              </div>
              <div className="text-2xl font-black text-[#0A1E3F] mt-0.5">
                {stats.pendingReview}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                Awaiting Clinical / BD Follow-up
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                activeTab === "all"
                  ? "bg-white text-[#0A1E3F] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Inquiries ({stats.totalBusiness + stats.totalPatients})
            </button>
            <button
              onClick={() => setActiveTab("business")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                activeTab === "business"
                  ? "bg-white text-[#0A1E3F] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Corporate & Hospital ({stats.totalBusiness})
            </button>
            <button
              onClick={() => setActiveTab("patient")}
              className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                activeTab === "patient"
                  ? "bg-white text-[#0A1E3F] shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Patients ({stats.totalPatients})
            </button>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              placeholder="Search reference, name, org..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-teal-500 outline-none"
            />
          </div>
        </div>

        {/* Enquiries Tables */}
        <div className="space-y-6">
          {/* Business Section */}
          {(activeTab === "all" || activeTab === "business") && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-teal-600" />
                  <h3 className="text-sm font-bold text-[#0A1E3F]">
                    Corporate & Hospital Management Enquiries
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold">
                  {filteredBusiness.length} Records
                </span>
              </div>

              {filteredBusiness.length === 0 ? (
                <div className="text-center py-12 px-4 text-slate-500 text-xs">
                  {isConfigured
                    ? "No corporate enquiries found matching your search."
                    : "No corporate enquiries loaded. Connect your Supabase database in .env.local to see live submissions."}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/50 text-slate-500 uppercase tracking-wider font-bold">
                        <th className="py-3 px-4">Ref ID</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Contact & Organization</th>
                        <th className="py-3 px-4">Service Required</th>
                        <th className="py-3 px-4">Contact Details</th>
                        <th className="py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredBusiness.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 px-4 font-mono font-bold text-teal-700">
                            {item.reference_id}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500">
                            {formatDate(item.created_at)}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-[#0A1E3F]">{item.full_name}</div>
                            <div className="text-[11px] text-slate-500">{item.organization}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-slate-800">{item.service_type}</div>
                            {item.city && (
                              <div className="text-[11px] text-slate-500">Location: {item.city}</div>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-slate-600">
                            <div>{item.phone}</div>
                            <div className="text-[11px] text-slate-400">{item.email}</div>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* Patients Section */}
          {(activeTab === "all" || activeTab === "patient") && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-600" />
                  <h3 className="text-sm font-bold text-[#0A1E3F]">
                    Patient Treatment & Consultation Enquiries
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-semibold">
                  {filteredPatients.length} Records
                </span>
              </div>

              {filteredPatients.length === 0 ? (
                <div className="text-center py-12 px-4 text-slate-500 text-xs">
                  {isConfigured
                    ? "No patient enquiries found matching your search."
                    : "No patient enquiries loaded. Connect your Supabase database in .env.local to see live submissions."}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/50 text-slate-500 uppercase tracking-wider font-bold">
                        <th className="py-3 px-4">Ref ID</th>
                        <th className="py-3 px-4">Date</th>
                        <th className="py-3 px-4">Patient Name & City</th>
                        <th className="py-3 px-4">Medical Concern</th>
                        <th className="py-3 px-4">Contact Phone</th>
                        <th className="py-3 px-4">Type</th>
                        <th className="py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredPatients.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50 transition">
                          <td className="py-3.5 px-4 font-mono font-bold text-sky-700">
                            {item.reference_id}
                          </td>
                          <td className="py-3.5 px-4 text-slate-500">
                            {formatDate(item.created_at)}
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-bold text-[#0A1E3F]">{item.full_name}</div>
                            <div className="text-[11px] text-slate-500">
                              {item.city}, {item.country}
                            </div>
                          </td>
                          <td className="py-3.5 px-4">
                            <div className="font-semibold text-slate-800 line-clamp-1">
                              {item.medical_concern}
                            </div>
                            <div className="text-[11px] text-slate-500">{item.specialty}</div>
                          </td>
                          <td className="py-3.5 px-4 text-slate-600">
                            <div>{item.phone}</div>
                            {item.email && (
                              <div className="text-[11px] text-slate-400">{item.email}</div>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            {item.is_international ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-purple-50 text-purple-700 border border-purple-200">
                                International
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-700">
                                Domestic
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4">
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-50 text-sky-800 border border-sky-200">
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
