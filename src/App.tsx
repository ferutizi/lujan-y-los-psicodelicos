import Form from './componentes/Form'
import Member from './componentes/Member'
import { Button } from './components/ui/button'

function App() {
  return (  
    <main className="flex min-h-screen flex-col justify-between">
      <div className="bg-black text-white">
        <header className="flex items-center justify-between p-4 bg-[#1a1a1a]">
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
          <section className="relative">
            <img
              src="/i3.jpeg"
              alt="Cover Image"
              className="w-full h-[800px] object-cover"
              height={800}
              style={{ aspectRatio: "800/400", objectFit: "cover" }}
            />
            <h1 className="absolute bottom-4 left-4 text-3xl font-bold">Luján y Los Psicodélicos</h1>
          </section>
          <section id="spotify" className="p-4 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400">Spotify</h2>
            <div className="mt-4">
              <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/5CaZWiLNp9aFDhqNEktbuH?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </section>
          <section id="concerts" className="p-4 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400">Conciertos</h2>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <div className="p-4 bg-[#1a1a1a] rounded-lg">
                <h3 className="text-xl font-bold">Palo Alto Pop-Up Show</h3>
                <p className="mt-2 text-sm text-gray-400">Sat, Jul 24</p>
                <Button className="mt-4">Comprar</Button>
              </div>
{/*               <div className="p-4 bg-[#1a1a1a] rounded-lg">
                <h3 className="text-xl font-bold">Breaking with the Blues</h3>
                <p className="mt-2 text-sm text-gray-400">Wed, Aug 18</p>
                <Button className="mt-4">Comprar</Button>
              </div>
              <div className="p-4 bg-[#1a1a1a] rounded-lg">
                <h3 className="text-xl font-bold">All Night Synth Party</h3>
                <p className="mt-2 text-sm text-gray-400">Mon, Sep 20</p>
                <Button className="mt-4">Comprar</Button>
              </div> */}
            </div>
          </section>
          <section id="gallery" className="p-4 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-2xl font-bold">Galería</h2>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <img
                src="/placeholder.svg"
                alt="Gallery Image 1"
                className="w-full h-[200px] object-cover rounded-lg"
                width="400"
                height="200"
                style={{ aspectRatio: "400/200", objectFit: "cover" }}
              />
              <img
                src="/placeholder.svg"
                alt="Gallery Image 2"
                className="w-full h-[200px] object-cover rounded-lg"
                width="400"
                height="200"
                style={{ aspectRatio: "400/200", objectFit: "cover" }}
              />
            </div>
          </section>
          <section id="members" className="flex flex-col bg-[#2a2a2a] rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400">Integrantes</h2>
            <div className="flex flex-row justify-around w-full">
              <Member name="lujan" rol="cantante" instagram="ig" />
              <Member name="lujan" rol="cantante" instagram="ig" />
              <Member name="lujan" rol="cantante" instagram="ig" />
              <Member name="lujan" rol="cantante" instagram="ig" />
              <Member name="lujan" rol="cantante" instagram="ig" />
            </div>
          </section>
          <section id="contact" className="p-4 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-2xl font-bold text-cyan-400">Contacto</h2>
            <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
              <img
                src="/placeholder.svg"
                alt="Contact Image"
                className="w-full h-[200px] object-cover rounded-lg"
                width="200"
                height="200"
                style={{ aspectRatio: "200/200", objectFit: "cover" }}
              />
              <Form />
            </div>
          </section>
        </main>
      </div>
    </main>
  )
}

export default App
