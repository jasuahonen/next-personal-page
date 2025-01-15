import Header from '../components/Header'
import Hero from '../components/Hero'
import GithubContributions from '../components/GithubContributions'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-24 space-y-24">
        <Hero />
        <GithubContributions />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

