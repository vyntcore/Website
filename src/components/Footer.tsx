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
              <img src="/logo/logo.PNG" alt="VyntCore Logo" className="h-10 md:h-14 w-auto object-contain mix-blend-screen group-hover:scale-105 transition-all duration-300" />
              <span className="font-heading text-3xl font-bold tracking-tighter text-white -ml-1">
                Vynt<span className="text-[var(--color-emerald-accent)]">Core</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Elevating digital presence for modern businesses. We build high-performance, conversion-optimized web experiences.
            </p>
            <div className="flex items-center gap-5">
  {/* Facebook */}
  <Link
    href="https://www.facebook.com/profile.php?id=61591201212317"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[var(--color-emerald-accent)] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.686 4.533-4.686 1.312 0 2.686.235 2.686.235v2.96h-1.514c-1.491 0-1.956.93-1.956 1.885v2.269h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z"/>
    </svg>
  </Link>

  {/* Instagram */}
  <Link
    href="https://www.instagram.com/vynt.core/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-[var(--color-emerald-accent)] transition-colors"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M7.75 2C4.574 2 2 4.574 2 7.75v8.5C2 19.426 4.574 22 7.75 22h8.5C19.426 22 22 19.426 22 16.25v-8.5C22 4.574 19.426 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 16.5 5zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6a3 3 0 0 1 0-6z"/>
    </svg>
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
