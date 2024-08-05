import Link from 'next/link'

export const Navbar = () => (
  <aside className="-ml-[8px] mb-16 tracking-tight">
    <div className="lg:sticky lg:top-20">
      <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
        <div className="flex flex-row space-x-0 pr-10">
          <Link href='/' className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 hover:underline">
            home
          </Link>
    <Link href='/investing' className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 hover:underline">
            investing
          </Link>
          <Link href='/blog' className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1 hover:underline">
            blog
          </Link>          
        </div>
      </nav>
    </div>
  </aside>
)
