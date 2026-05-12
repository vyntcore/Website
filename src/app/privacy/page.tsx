import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | VyntCore",
  description: "Privacy Policy for VyntCore web development agency.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-[#050505] min-h-screen text-white selection:bg-[var(--color-emerald-accent)] selection:text-black">
      <Navbar />
      
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 px-6 md:px-12 container mx-auto max-w-4xl">
        <div className="mb-16">
          <Link href="/" className="text-[var(--color-emerald-accent)] hover:underline text-sm font-medium mb-6 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-12 text-gray-300 leading-relaxed prose prose-invert prose-emerald max-w-none">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">1. Introduction</h2>
            <p>
              Welcome to VyntCore. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">4. Data Security</h2>
            <p>
              We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, to object to processing, to portability of data and (where the lawful ground of processing is consent) to withdraw consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 font-heading">6. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
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
