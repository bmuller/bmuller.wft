import Image from 'next/image'
import { Heading } from 'app/components/content'

const Investment = ({ name, imgSrc, href }) => (
  <a href={href} className='flex items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 hover:bg-sky-700 hover:text-white dark:bg-gradient-to-r from-sky-800 hover:from-sky-700'>
    <Image alt={`${name} logomark`} src={imgSrc} className='!mr-2' width='30' height='30' /> {name}
  </a>
)

export const metadata = { title: 'investing' }

export default () => (
  <>
    <section>
      <Heading>Direct</Heading>
      <div className='my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto'>
        <Investment name='Type Five' imgSrc='/logos/type-five.svg' href='https://www.typefive.com' />
        <Investment name='Poppy Flowers' imgSrc='/logos/poppy.png' href='https://www.poppyflowers.com' />
        <Investment name='Big Sugar Podcast' imgSrc='/logos/big-sugar.jpg' href='https://podcasts.apple.com/us/podcast/big-sugar/id1707777341' />        
      </div>
    </section>
    <section>
      <Heading>Secondary</Heading>
      <div className='my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto'>
        <Investment name='Cedar' imgSrc='/logos/cedar.png' href='https://www.cedarai.com' />
      </div>
    </section>
    <section>
      <Heading>Advisory</Heading>
      <div className='my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto'>
        <Investment name='Muse' imgSrc='/logos/muse.svg' href='https://muse.io' />
        <Investment name='@hotel' imgSrc='/logos/athotel.jpg' href='https://athotel.com' />
        <Investment name='Augie' imgSrc='/logos/augie.png' href='https://augie.studio' />
      </div>
    </section>
    <section>
      <Heading>Funds</Heading>
      <div className='my-8 flex h-14 w-full flex-row space-x-2 overflow-x-auto'>
        <Investment name='Treble' imgSrc='/logos/treble.jpg' href='https://www.crunchbase.com/organization/treble-415d' />
        <Investment name='Generalist Capital' imgSrc='/logos/generalist.png' href='https://www.generalist.com/briefing/generalist-capital' />        
      </div>
    </section>
    <section>
      <div className='rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-600 dark:bg-neutral-900 mx-5 my-8'>
        <h2 className='mb-4 text-xl'>🚀 Exits</h2>
        <div className='flex items-center justify-between'>
          <Investment name='High Snobiety' imgSrc='/logos/high-snobiety.png' href='https://www.highsnobiety.com' />
        </div>
      </div>
    </section>    
  </>
)
