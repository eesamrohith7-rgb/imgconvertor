import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Image Converter & Enhancer.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 shadow-sm space-y-6">
        <header className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600">
            Privacy Policy
          </p>
          <h1 className="text-3xl font-bold text-gray-900">How we handle your data</h1>
          <p className="text-gray-600">
            This policy explains how Image Converter &amp; Enhancer handles information when you
            use the website.
          </p>
        </header>

        <section className="space-y-3 text-gray-700 leading-7">
          <p>
            We are designed to process images in your browser whenever possible. Your uploaded
            image files are not intentionally stored on our servers for conversion or editing.
          </p>
          <p>
            We may collect standard analytics and diagnostic information such as browser type,
            device information, pages visited, and approximate usage patterns to improve the
            service and keep it reliable.
          </p>
          <p>
            If advertising is enabled, third-party advertising partners such as Google AdSense may
            use cookies or similar technologies to show relevant ads, limit repeated ads, and
            measure performance. Those third parties may collect and process information according
            to their own privacy policies.
          </p>
          <p>
            We do not sell your personal information. If you contact us directly, we may retain the
            message and your contact details so we can respond.
          </p>
        </section>

        <section className="space-y-3 text-gray-700 leading-7">
          <h2 className="text-xl font-semibold text-gray-900">Cookies and advertising</h2>
          <p>
            Cookies may be used for essential site functions, analytics, and advertising. You can
            control cookies through your browser settings and, where available, ad preference tools.
          </p>
        </section>

        <section className="space-y-3 text-gray-700 leading-7">
          <h2 className="text-xl font-semibold text-gray-900">Changes to this policy</h2>
          <p>
            We may update this policy from time to time. The latest version will always be posted on
            this page.
          </p>
        </section>
      </div>
    </div>
  );
}