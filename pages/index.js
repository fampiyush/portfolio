import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'


export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Piyush Gupta | Full Stack Developer </title>
        <meta name="description" content="Piyush Gupta's portfolio website" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
