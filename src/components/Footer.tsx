const footerSections = [
  {
    heading: "Explore",
    links: [
      { text: "Mac", href: "/mac" },
      { text: "iPad", href: "/ipad" },
      { text: "iPhone", href: "/iphone" },
      { text: "Watch", href: "/watch" },
    ],
  },
  {
    heading: "Account",
    links: [
      { text: "Manage Your Apple Account", href: "https://account.apple.com/za/" },
      { text: "iCloud.com", href: "https://www.icloud.com" },
    ],
  },
  {
    heading: "For Business",
    links: [
      { text: "Apple and Business", href: "https://www.apple.com/za/business/" },
    ],
  },
  {
    heading: "For Education",
    links: [
      { text: "Apple and Education", href: "https://www.apple.com/za/education/" },
    ],
  },
  {
    heading: "Apple Values",
    links: [
      { text: "Privacy", href: "https://www.apple.com/za/legal/privacy/" },
    ],
  },
  {
    heading: "About Apple",
    links: [
      { text: "Newsroom", href: "https://www.apple.com/za/newsroom/" },
      { text: "Apple Leadership", href: "https://www.apple.com/za/leadership/" },
      { text: "Investors", href: "https://investor.apple.com/" },
      { text: "Ethics & Compliance", href: "https://www.apple.com/compliance/" },
      { text: "Contact Apple", href: "https://www.apple.com/za/contact/" },
    ],
  },
];

const legalLinks = [
  { text: "Privacy Policy", href: "https://www.apple.com/za/legal/privacy/" },
  { text: "Terms of Use", href: "https://www.apple.com/za/legal/terms/site.html" },
  { text: "Legal", href: "https://www.apple.com/za/legal/" },
  { text: "Site Map", href: "https://www.apple.com/za/sitemap/" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-100 border-t border-neutral-300 text-xs text-neutral-500">
      <div className="max-w-[980px] mx-auto px-6 py-4">
        {/* Disclaimer */}
        <p className="leading-relaxed pb-4">
          Not all Apple Watch straps are available in all regions.
        </p>

        <hr className="border-neutral-300" />

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 py-6">
          {footerSections.map((section) => (
            <div key={section.heading}>
              <h3 className="font-semibold text-neutral-800 mb-2">{section.heading}</h3>
              <ul className="space-y-1">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:text-neutral-900 transition-colors">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-neutral-300" />

        {/* Find a retailer */}
        <div className="py-3">
          <a href="https://locate.apple.com/za/en/" className="text-neutral-900 hover:underline">
            Find a retailer
          </a>{" "}
          near you.
        </div>

        <hr className="border-neutral-300" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-2">
          <p>Copyright &copy; 2026 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {legalLinks.map((link, i) => (
              <span key={link.text}>
                <a href={link.href} className="hover:text-neutral-900 transition-colors">
                  {link.text}
                </a>
                {i < legalLinks.length - 1 && <span className="ml-2">|</span>}
              </span>
            ))}
          </div>
        </div>

        <p className="text-neutral-400 pb-2">South Africa</p>
      </div>
    </footer>
  );
}
