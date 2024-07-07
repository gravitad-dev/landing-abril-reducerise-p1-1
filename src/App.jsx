import Contact from './components/Contact';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Layout from './components/ui/Layout';
import Solutions from './components/Solutions';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Quotes from './components/Quotes';
import Projects from './components/Projects';
import JoinUs from './components/JoinUs';

function App() {
  return (
    <main className=' main-gradient w-full min-h-screen min-w-[250px]'>
      <NavBar />
      <section>
        <Hero />
      </section>
      <Layout>
        <section className='py-[70px]'>
          <Solutions />
        </section>
      </Layout>

      <Gallery />

      <Layout>
        <section className='py-[90px]'>
          <Projects />
        </section>
      </Layout>
      
      
      <section className=''>
        <Contact />
      </section>

      <Layout>
        <section className='py-[90px]'>
          <JoinUs />
        </section>

        <section className='py-[90px]'>
          <Quotes />
        </section>
      </Layout>
      <Footer />
    </main>
  );
}

export default App;
