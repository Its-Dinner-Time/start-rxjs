import { internalSiteLinks } from '@/libs/links';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex justify-center pt-24">
      <nav className="flex flex-col gap-y-4 w-full max-w-screen-sm">
        {internalSiteLinks.map(({ pageName, path }) => (
          <Link
            href={path}
            className="p-4 border border-white rounded text-center 
              transition-all duration-500 
              hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-600"
          >
            {pageName}
          </Link>
        ))}
      </nav>
    </main>
  );
}
