import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { Heading } from 'app/components/content'

const YearGrouping = ({ year, posts }) => {
  const sorted = posts.sort((a, b) => (new Date(a.metadata.date) > new Date(b.metadata.date)) ? -1 : 1)
  
  return (
    <div className='my-8'>
      <h2>{year}</h2>
      {sorted.map((post) => (
        <Link key={post.slug} className='flex flex-col space-y-1 mb-4' href={`/blog/${post.slug}`}>
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-600 dark:text-neutral-400 w-[140px] tabular-nums">
              {formatDate(post.metadata.date, false)}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {post.metadata.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const metadata = { title: 'blog' }

export default () => {
  const postsByYear = {}
  getBlogPosts().forEach((post) => {
    const { metadata: { date: pat }} = post
    const year = (new Date(pat)).getFullYear()
    if (!(year in postsByYear)) postsByYear[year] = []
    postsByYear[year].push(post)
  })
  
  const years = Object.keys(postsByYear).sort((a, b) => parseInt(b) - parseInt(a))

  return (
    <section>
      <Heading>Posts</Heading>
      {years.map((year) => <YearGrouping key={year} year={year} posts={postsByYear[year]} />)}
    </section>
  )
}
