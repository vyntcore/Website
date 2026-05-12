import Link from "next/link";

const SocialIcon = ({ path }: { path: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={path} />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-1 mb-6 group">
              <img src="/logo/logo.png" alt="VyntCore Logo" className="h-10 md:h-14 w-auto object-contain mix-blend-screen group-hover:scale-105 transition-all duration-300" />
              <span className="font-heading text-3xl font-bold tracking-tighter text-white -ml-1">
                Vynt<span className="text-[var(--color-emerald-accent)]">Core</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating digital presence for modern businesses. We build high-performance, conversion-optimized web experiences.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SocialIcon path="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SocialIcon path="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SocialIcon path="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <SocialIcon path="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Web Development</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">SEO & AEO</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Premium Hosting</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="#portfolio" className="text-gray-400 hover:text-white transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold text-white mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} VyntCore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
