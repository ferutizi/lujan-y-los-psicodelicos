import CarouselCover from './components/sections/CarouselCover'
import Music from './components/sections/Music'
import Concerts from './components/sections/Concerts'
import Gallery from './components/sections/Gallery'
import Members from './components/sections/Members'
import Contact from './components/sections/Contact'
import Interviews from './components/sections/Interviews'

function App() {
  return (  
    <main className="flex min-h-screen flex-col justify-between">
      <div className="bg-background text-white">
        <header className="flex items-center justify-between p-4 bg-background_light">
          <div className="flex items-center">
            <img
              src="/placeholder.svg"
              alt="Band Logo"
              className="h-12 w-12"
              width="50"
              height="50"
              style={{ aspectRatio: "50/50", objectFit: "cover" }}
            />
          </div>
          <nav className="flex space-x-4">
            <a href="#" className="hover:underline">
              Spotify
            </a>
{/*             <a href="#" className="hover:underline">
              Conciertos
            </a>
            <a href="#" className="hover:underline">
              Galería
            </a>
            <a href="#" className="hover:underline">
              Integrantes
            </a> */}
          </nav>
        </header>
        <main className="space-y-8 p-4">
          <CarouselCover />
          <div className='max-w-[1280px] flex flex-col my-0 mx-auto gap-4'>
            <Music />
            <div className="grid grid-cols-7 grid-rows-3 gap-4">
              <Concerts />
              <Gallery />
              <Interviews />
            </div>
            <Members />
          </div>
          <Contact />
        </main>
      </div>
    </main>
  )
}

export default App
