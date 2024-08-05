import Image from 'next/image'
import { BadgeLink, Heading } from 'app/components/content'

export default () => (
  <section>
    <Heading>It's Muller Time</Heading>
    <div className='prose prose-neutral dark:prose-invert'>
      <p>
        {`My name is Brian Muller, and I'm the CTO and Co-founder of `}
        <BadgeLink href='https://parallelmarkets.com' imgSrc='/logos/parallel.png'>
          Parallel Markets
        </BadgeLink>
        {`. Parallel Markets provides portable investor identity and accreditation services to make investing online easier.`}
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
  )
