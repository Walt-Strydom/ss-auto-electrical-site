import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-black mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-y-6 items-center text-center md:text-left">
        {/* Left: Copyright */}
        <div className="text-sm text-gray-600 text-center md:text-left">
          © {year} SS Auto Electrical
        </div>

        {/* Center: Navigation */}
        <div className="flex justify-center gap-8 text-sm">
          <Link href="/" className="hover:text-[#ffb200] transition">
            Home
          </Link>
          <Link href="/services" className="hover:text-[#ffb200] transition">
            Services
          </Link>
          <Link href="/about" className="hover:text-[#ffb200] transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#ffb200] transition">
            Contact
          </Link>
        </div>

        {/* Right: Branding */}
        <div className="text-sm text-gray-600 flex justify-center md:justify-end">
          Powered by{" "}
          <span className="text-[#ffb200] font-semibold ml-1">BrandFlow</span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 text-sm text-gray-500 py-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p>We use cookies to enhance your experience.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[#ffb200]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#ffb200]">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-[#ffb200]">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
