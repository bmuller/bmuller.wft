import Image from 'next/image'
import { BadgeLink, Heading, SubHeading } from 'app/components/content'

const Investment = ({ name, imgSrc, href }) => (
  <a href={href} className='flex rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800 hover:bg-sky-700 hover:text-white hover:from-sky-700 min-w-50 h-14 m-2'>
    <Image alt={`${name} logomark`} src={imgSrc} className='!mr-2' width='30' height='30' /> {name}
  </a>
)

export default () => (
  <>
    <section className='mb-8'>
      <Heading>It's Muller Time</Heading>
      <div className='prose prose-neutral dark:prose-invert'>
        <p>
          {`My name is Brian Muller, and I'm an operator, investor, and founder with two exits.`}
        </p>
        <p>
          {`💻 Most recently, I was the CTO and Co-founder of `}
          <BadgeLink href='https://parallelmarkets.com' imgSrc='/logos/parallel.png'>
          Parallel Markets
        </BadgeLink>
          {` which provided portable investor identity and accreditation services to make investing online easier. Parallel Markets was `}
          <a target='_blank' href='https://www.businesswire.com/news/home/20250115839401/en/iCapital%C2%AE-to-Acquire-Parallel-Markets-to-Streamline-Digital-Identity-Investment-Onboarding-and-Compliance-Verification'>acquired by iCapital</a>
          {` in early 2025.`}
      </p>
    </div>
    <div className='prose prose-neutral dark:prose-invert'>
      <p>
        {`📰 Before that, I was the VP of Data and Growth at the magazine `}
        <BadgeLink href='http://theatlantic.com' imgSrc='/logos/atlantic.jpg'>The Atlantic</BadgeLink>
        {`, and prior to that I was the Director of Data Science at `}
        <BadgeLink href='https://voxmedia.com' imgSrc='/logos/vox.jpg'>Vox Media</BadgeLink>
        {`. At both publications I founded, grew, and led the Data Science and Data Infrastructure teams.`}
      </p>
    </div>
    <div className='prose prose-neutral dark:prose-invert'>    
      <p>
        {`📈 Before that, I was CTO and Co-founder of `}
        <BadgeLink href='https://www.crunchbase.com/organization/opbandit' imgSrc='/logos/opbandit.jpg'>OpBandit</BadgeLink>
        {`, which optimized content on major publishers’ sites across 7 countries.  OpBandit was `}
        <a target='_blank' href='http://www.ft.com/intl/cms/s/0/fa3f68a0-d957-11e4-a8f1-00144feab7de.html'>acquired by Vox Media</a>
        {` in April of 2015.`}
      </p>
    </div>
    <div className='prose prose-neutral dark:prose-invert'>    
      <p>
        {`🎟️  Prior to that, I ran the Data Science, Data Products, and Data Infrastructure teams at `}
        <BadgeLink href='https://livingsocial.com' imgSrc='/logos/livingsocial.jpg'>LivingSocial</BadgeLink>
        {` in Washington, DC.`}
      </p>
    </div>
    <div className='prose prose-neutral dark:prose-invert'>          
      <p>
        {`🇺🇸 Before that I worked as the the Web Director for `}
        <BadgeLink href='https://foreignpolicy.com' imgSrc='/logos/foreignpolicy.jpg'>Foreign Policy Magazine</BadgeLink>
        {` in Washington, DC.`}
      </p>
    </div>
    <div className='prose prose-neutral dark:prose-invert'>          
      <p>
        {`🔬 Prior to that I was a research assistant in the `}
        <BadgeLink href='https://ccb.jhu.edu/' imgSrc='/logos/genomics.jpg'>Center for Computational Genomics</BadgeLink>
        {` at `}
        <BadgeLink href='https://www.jhu.edu' imgSrc='/logos/jhu.png'>Johns Hopkins University</BadgeLink>
        {` in Baltimore, MD.`}
      </p>
    </div>
    <div className='prose prose-neutral dark:prose-invert'>
      <p>
        {`🎓 Before that I was a graduate student at the `}
        <BadgeLink href='https://musc.edu' imgSrc='/logos/musc.jpg'>Medical University of South Carolina</BadgeLink>
        {` in Charleston, SC where I received a MS degree in `}
        <a target='_blank' href='https://en.wikipedia.org/wiki/Bioinformatics'>bioinformatics</a>
        {`.`}
      </p>
    </div>
    </section>
    <section>
      <Heading>Investing</Heading>
      <SubHeading>Direct</SubHeading>
      <div className='my-8 flex w-full flex-row flex-wrap'>
        <Investment name='Type Five' imgSrc='/logos/type-five.svg' href='https://www.typefive.com' />
        <Investment name='Poppy Flowers' imgSrc='/logos/poppy.png' href='https://www.poppyflowers.com' />
        <Investment name='Big Sugar Podcast' imgSrc='/logos/big-sugar.jpg' href='https://podcasts.apple.com/us/podcast/big-sugar/id1707777341' />        
      </div>
    </section>
    <section>
      <SubHeading>Secondary</SubHeading>
      <div className='my-8 flex w-full flex-row flex-wrap'>
        <Investment name='Cedar' imgSrc='/logos/cedar.png' href='https://www.cedarai.com' />
      </div>
    </section>
    <section>
      <Heading>Advisory</Heading>
      <div className='my-8 flex w-full flex-row flex-wrap'>
        <Investment name='Muse' imgSrc='/logos/muse.svg' href='https://muse.io' />
        <Investment name='@hotel' imgSrc='/logos/athotel.jpg' href='https://athotel.com' />
        <Investment name='Augie' imgSrc='/logos/augie.png' href='https://augie.studio' />
      </div>
    </section>
    <section>
      <Heading>Funds</Heading>
      <div className='my-8 flex w-full flex-row flex-wrap'>
        <Investment name='Treble' imgSrc='/logos/treble.jpg' href='https://www.crunchbase.com/organization/treble-415d' />
        <Investment name='Generalist Capital' imgSrc='/logos/generalist.png' href='https://www.generalist.com/briefing/generalist-capital' />        
      </div>
    </section>
    <section>
      <div className='rounded border border-neutral-200 bg-neutral-50 px-4 py-4 dark:border-neutral-600 dark:bg-neutral-900 mx-0 my-8'>
        <h2 className='mb-4 text-xl'>🚀 Exits</h2>
        <div className='flex items-center justify-between'>
          <Investment name='High Snobiety' imgSrc='/logos/high-snobiety.png' href='https://www.highsnobiety.com' />
        </div>
      </div>
    </section>    
</>
  )
