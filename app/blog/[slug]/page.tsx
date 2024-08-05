import { notFound } from 'next/navigation'
import { CustomMDX } from 'app/components/mdx'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { baseUrl } from 'app/sitemap'
import { Heading } from 'app/components/content'
import Image from 'next/image'

export const generateStaticParams = () => getBlogPosts().map((post) => ({ slug: post.slug }))

export function generateMetadata({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug)
  if (!post) {
    return
  }

  let {
    title,
    date: publishedTime,
    summary: description,
    image,
  } = post.metadata
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default ({ params }) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.date,
            dateModified: post.metadata.date,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Brian Muller',
            },
          }),
        }}
      />
      <Heading>{post.metadata.title}</Heading>
      <div className="flex justify-between items-center mt-0 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.date)}
        </p>
      </div>
      {post.metadata.image && (
        <>
          <Image src={post.metadata.image} width='600' height='200' alt='blog image' className='rounded' />
          {post.metadata.imageCredit && (
            <p className='prose text-right text-sm mt-1 text-slate-400'>
              via <a href={post.metadata.imageCreditLink}>{post.metadata.imageCredit}</a>
            </p>
          )}
        </>
      )}
      <article className="prose">
        <CustomMDX source={post.content} />
      </article>
    </section>
  )
}
