import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | VyntCore",
  description: "Terms of Service for VyntCore web development agency.",
};

export default function TermsOfService() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-emerald-accent)] selection:text-black">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 container mx-auto max-w-4xl">
        <div className="mb-16">
          <Link href="/" className="text-[var(--color-emerald-accent)] hover:underline text-sm font-medium mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed prose prose-invert prose-emerald max-w-none">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the website and services of VyntCore, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on VyntCore&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on VyntCore&apos;s website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or &quot;mirror&quot; the materials on any other server.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">3. Disclaimer</h2>
            <p>
              The materials on VyntCore&apos;s website are provided on an &apos;as is&apos; basis. VyntCore makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">4. Limitations</h2>
            <p>
              In no event shall VyntCore or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on VyntCore&apos;s website, even if VyntCore or a VyntCore authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">5. Revisions and Errata</h2>
            <p>
              The materials appearing on VyntCore&apos;s website could include technical, typographical, or photographic errors. VyntCore does not warrant that any of the materials on its website are accurate, complete or current. VyntCore may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">6. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">7. Contact Information</h2>
            <p>
              If you have any questions regarding these Terms of Service, please contact us at:
            </p>
            <p className="mt-4">
              <a href="mailto:hello@vyntcore.com" className="text-[var(--color-emerald-accent)] hover:underline">
                hello@vyntcore.com
              </a>
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
