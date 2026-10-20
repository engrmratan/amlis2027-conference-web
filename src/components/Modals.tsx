import React, { useState } from 'react';
import { X, Download, FileText, ExternalLink, CheckCircle2, AlertCircle, Info, ShieldCheck } from 'lucide-react';
import { useConference } from '../context';

export const Modals: React.FC = () => {
  const { config, activeModal, setActiveModal } = useConference();
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!activeModal) return null;

  const handleDownload = (format: string) => {
    // Generate actual file blob download
    const content = `% IEEE Manuscript Template for AMLIS 2027
% 2027 IEEE International Conference on Advancements of Machine Learning and Intelligent Systems
\\documentclass[conference]{IEEEtran}
\\IEEEoverridecommandlockouts
\\usepackage{cite}
\\usepackage{amsmath,amssymb,amsfonts}
\\usepackage{algorithmic}
\\usepackage{graphicx}
\\usepackage{textcomp}
\\usepackage{xcolor}

\\def\\BibTeX{{\\rm B\\kern-.05em{\\sc i\\kern-.025em b}\\kern-.08em
    T\\kern-.1667em\\lower.7ex\\hbox{E}\\kern-.125emX}}

\\begin{document}

\\title{Manuscript Title for AMLIS 2027 Conference*\\\\
{\\footnotesize \\textsuperscript{*}Note: Submissions must be blind for review.}
}

\\author{\\IEEEauthorblockN{Anonymous Authors}
\\IEEEauthorblockA{\\textit{Double-Blind Peer Review} \\\\
AMLIS 2027 Conference Submission}}

\\maketitle

\\begin{abstract}
This document serves as the official IEEE paper formatting template for AMLIS 2027.
\\end{abstract}

\\begin{IEEEkeywords}
machine learning, artificial intelligence, intelligent systems.
\\end{IEEEkeywords}

\\section{Introduction}
Please submit your manuscripts formatted according to IEEE conference standards.

\\end{document}
`;

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AMLIS_2027_IEEE_Template_${format.replace(/\s+/g, '_')}.tex`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(format);
    setTimeout(() => setDownloadSuccess(null), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Background click to close */}
      <div className="absolute inset-0" onClick={() => setActiveModal(null)} />

      {/* Template Modal */}
      {activeModal === 'template' && (
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[88vh] overflow-y-auto p-5 sm:p-8 z-10 border border-slate-100">
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">IEEE Manuscript Templates</h3>
              <p className="text-xs text-slate-500">Official preparation formats for AMLIS 2027</p>
            </div>
          </div>

          <div className="text-xs text-slate-600 space-y-2 mb-6">
            <p>
              All manuscripts submitted to AMLIS 2027 must conform strictly to the standard IEEE two-column conference format.
            </p>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/70 text-slate-700 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                <strong>Blind Submissions:</strong> Do not include author names, affiliations, or acknowledgments in the initial submission version to maintain double-blind review integrity.
              </span>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-colors flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-900">LaTeX Template (Recommended)</p>
                <p className="text-[11px] text-slate-500">IEEEtran.cls package with BibTeX style</p>
              </div>
              <button
                onClick={() => handleDownload('LaTeX')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-colors flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-900">Microsoft Word (A4 Format)</p>
                <p className="text-[11px] text-slate-500">Formatted .docx styles for A4 paper</p>
              </div>
              <button
                onClick={() => handleDownload('Word_A4')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>

            <div className="p-3.5 rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-colors flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-slate-900">Microsoft Word (US Letter)</p>
                <p className="text-[11px] text-slate-500">Formatted .docx styles for Letter paper</p>
              </div>
              <button
                onClick={() => handleDownload('Word_Letter')}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-900 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download</span>
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs flex items-center gap-2 mb-4 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{downloadSuccess} template package generated and downloaded!</span>
            </div>
          )}

          <div className="flex justify-end">
            <button
              onClick={() => setActiveModal(null)}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Submission Portal Modal */}
      {activeModal === 'submissionPortal' && (
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[88vh] overflow-y-auto p-5 sm:p-8 z-10 border border-slate-100 text-center">
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
            <FileText className="w-7 h-7" />
          </div>

          {config.submissionPortalReady ? (
            <>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Official Submission Portal</h3>
              <p className="text-xs text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
                You are proceeding to the official AMLIS 2027 paper submission management system. Ensure your manuscript follows the double-blind review format.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={config.submissionPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-full shadow-sm"
                >
                  <span>Go to Submission System</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setActiveModal(null)}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-full"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 border border-amber-200 text-amber-800 text-[11px] font-semibold rounded-full mb-3">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>Notice for Authors</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Submission Portal Status</h3>
              <p className="text-xs text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
                The online manuscript submission portal for AMLIS 2027 is actively receiving submissions. The full manuscript submission deadline is <strong>31 December 2026 (23:59 AoE)</strong>.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2 mb-6">
                <div className="flex items-center gap-2 font-semibold text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Author Checklist in the Meantime:</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-slate-600 pl-1">
                  <li>Download and format with the official IEEE template</li>
                  <li>Prepare your paper within 6 pages (excluding references)</li>
                  <li>Anonymize all author details for double-blind review</li>
                  <li>Bookmark this site for the portal launch announcement</li>
                </ul>
              </div>

              <div className="flex justify-center gap-3">
                <button
                  onClick={() => setActiveModal('template')}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-full transition-colors"
                >
                  Download Paper Template
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded-full transition-colors"
                >
                  Understood
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Contact Success Modal */}
      {activeModal === 'contactSuccess' && (
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 z-10 border border-slate-100 text-center">
          <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Message Received</h3>
          <p className="text-xs text-slate-600 mb-6 leading-relaxed">
            Thank you for reaching out to the AMLIS 2027 Organizing Committee. Your message has been logged in our secretariat system and our team will respond shortly.
          </p>
          <button
            onClick={() => setActiveModal(null)}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-full transition-colors"
          >
            Done
          </button>
        </div>
      )}
    </div>
  );
};
