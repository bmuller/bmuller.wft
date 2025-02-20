import Image from 'next/image'

export const Heading = (props) => <h1 className='mb-6 text-2xl font-semibold tracking-tighter' {...props} />
export const SubHeading = (props) => <h2 className='mb-6 text-xl font-semibold tracking-tighter' {...props} />

const BADGE_LINK_CLASSES = 'items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 !no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 hover:bg-sky-700 hover:text-white'

export const BadgeLink = ({ imgSrc, href, children }) => (
  <a href={href} target='_blank' className={BADGE_LINK_CLASSES}>
    <Image alt={`${href} logo`} src={imgSrc} className='!mr-2 inline-flex' width='14' height='14' />
    {children}
  </a>
)
