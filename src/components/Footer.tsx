import { hero } from "@/content/resume";

export default function Footer() {
  return (
    <footer data-testid="site-footer" className="bg-midnight-deep border-t border-white/5">
      <div className="max-w-content mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <p className="text-paper-muted text-sm">© 2026 Paul-Valentin Mini · San Francisco, CA</p>
        <ul className="flex gap-6">
          <li>
            <a href={`mailto:${hero.email}`} className="text-paper-muted hover:text-paper text-sm">
              Email
            </a>
          </li>
          <li>
            <a
              href={hero.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="text-paper-muted hover:text-paper text-sm"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={hero.github}
              target="_blank"
              rel="noreferrer noopener"
              className="text-paper-muted hover:text-paper text-sm"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
