import { Link } from '@/components/ui/Link';
import DeltaLogo from '@/components/icons/DeltaLogo';

import { socialLinks } from '@/data/social-links';
import ModeToggle from './ModeToggle';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-card/80 shadow backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link className="flex items-center gap-3" href="/">
          <DeltaLogo className="h-5 w-5" />
          <span className="text-xl font-bold">Delta</span>
        </Link>

        <div className="flex items-center gap-6">
          <ul className="font-semibold">
            <li>
              <Link
                className="hover:text-primary"
                href="https://docs.rs/deltaml/latest/deltaml/"
              >
                Docs
              </Link>
            </li>
          </ul>

          <ModeToggle />

          <ul className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href }, idx) => (
              <li key={`social-link-${idx}`}>
                <Link className="hover:text-primary" href={href}>
                  <Icon className="h-5 w-5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
