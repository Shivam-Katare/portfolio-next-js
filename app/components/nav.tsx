import Link from 'next/link'

const navItems = {
  '/': {
    name: 'About',
    newTab: false
  },
  '/skills': {
    name: 'Skills',
    newTab: false
  },
  '/work': {
    name: 'Work',
    newTab: false
  },
  'https://shivamkatareblog.vercel.app/': {
    name: 'Blog',
    newTab: true,
  },
  '/contact-me': {
    name: 'Contact me',
    newTab: false
  }
}

export function Navbar() {
  return (
    <aside className="-ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name, newTab }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all hover:text-neutral-800 flex align-middle relative py-1 px-2 m-1"
                  prefetch={true}
                  target={newTab ? '_blank' : '_self'}
                >
                  {name}
                </Link>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}