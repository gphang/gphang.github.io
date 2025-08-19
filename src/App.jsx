import HeaderLeft from './components/HeaderLeft';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';


function App() {
  return (
    <>
      <div className="flex min-h-screen w-full subpixel-antialiased">
        <HeaderLeft />

        <main className="flex-[3] h-screen overflow-y-scroll snap-y snap-proximity scroll-pt-20 md:scroll-pt-0">
          <Home />
          <Projects />
          <Experience />
          <Education />
        </main>
        
      </div>
    </>
  );
}

export default App;
