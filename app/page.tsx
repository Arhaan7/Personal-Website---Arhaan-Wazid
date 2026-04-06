import Layout from '../components/layout'
import Hero from '../components/hero'
import HiringBanner from '../components/hiring-banner'
import ExperienceHighlights from '../components/experience-highlights'
import TechStack from '../components/tech-stack'
import Skills from '../components/skills'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <HiringBanner />
      <ExperienceHighlights />
      <TechStack />
      <Skills />
    </Layout>
  )
}
