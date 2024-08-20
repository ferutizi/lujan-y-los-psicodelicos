import { Button } from "../ui/button";

export default function Concerts() {
  return(
    <section id="concerts" className="p-4 bg-background_light rounded-lg col-span-4 row-span-3">
      <h2 className="text-2xl font-bold text-cyan-400">Conciertos</h2>
      <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
        <div className="p-4 bg-[#1a1a1a] rounded-lg">
          <h3 className="text-xl font-bold">Palo Alto Pop-Up Show</h3>
          <p className="mt-2 text-sm text-gray-400">Sat, Jul 24</p>
          <Button className="mt-4">Comprar</Button>
        </div>
      </div>
    </section>
  )
}