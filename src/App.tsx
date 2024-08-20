import CarouselCover from './components/sections/CarouselCover'
import Music from './components/sections/Music'
import Concerts from './components/sections/Concerts'
import Gallery from './components/sections/Gallery'
import Members from './components/sections/Members'
import Contact from './components/sections/Contact'

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
          <Music />
          <Concerts />
          <Gallery />
          <Members />
          <Contact />
        </main>
      </div>
    </main>
  )
}

export default App
