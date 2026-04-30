import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for Image Converter & Enhancer.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm space-y-6">
        <header className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Terms and Conditions
          </p>
          <h1 className="text-3xl font-bold text-gray-900">Terms for using this website</h1>
          <p className="text-gray-600">
            By using Image Converter &amp; Enhancer, you agree to the terms below.
          </p>
        </header>

        <section className="space-y-3 text-gray-700 leading-7">
          <p>
            This website is provided for general informational and image processing purposes only.
            We make no guarantees about uninterrupted availability, output quality, or fitness for
            a particular purpose.
          </p>
          <p>
            You are responsible for the files you upload and for making sure you have the legal
            right to use them. Do not upload content that is illegal, infringing, harmful, or
            otherwise prohibited by law.
          </p>
          <p>
            We may display advertising through third-party networks. Those networks may have their
            own terms and policies, which you agree to review and follow when interacting with ads.
          </p>
          <p>
            We may change, suspend, or discontinue the website or any feature at any time.
          </p>
        </section>

        <section className="space-y-3 text-gray-700 leading-7">
          <h2 className="text-xl font-semibold text-gray-900">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, we are not liable for damages arising from use
            of the site, including data loss, corrupted output, or issues caused by third-party
            services.
          </p>
        </section>

        <section className="space-y-3 text-gray-700 leading-7">
          <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
          <p>
            If you have questions about these terms, use your site contact channel or the email
            address you publish alongside the website.
          </p>
        </section>
      </div>
    </div>
  );
}