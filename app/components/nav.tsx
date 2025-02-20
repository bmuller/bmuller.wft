import Link from 'next/link'

const NavLink = ({ children, ...props }) => (
  <a className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100 hover:underline" rel="noopener noreferrer" target="_blank" {...props}>
    <ArrowIcon />
    <p className="ml-2 h-7">{children}</p>
  </a>
)

const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor" />
  </svg>
)

export const Navbar = () => (
  <aside className="-ml-[8px] mb-16 tracking-tight">
    <div className="lg:sticky lg:top-20">
      <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative" id="nav">
        <div className="flex flex-row space-x-5 pr-10">
          <NavLink href='https://www.linkedin.com/in/bamuller'>LinkedIn</NavLink>
          <NavLink href='https://github.com/bmuller'>GitHub</NavLink>
          <NavLink href='https://x.com/bmuller'>X</NavLink>
          <NavLink href='https://scholar.google.com/citations?user=xMH2gUMAAAAJ&hl=en'>Google Scholar</NavLink>
        </div>
      </nav>
    </div>
  </aside>
)
