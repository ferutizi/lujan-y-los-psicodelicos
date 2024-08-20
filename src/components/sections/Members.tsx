import Member from "../Member";

export default function Members() {
  return(
    <section id="members" className="flex flex-col bg-background_light rounded-lg">
      <h2 className="text-2xl font-bold text-cyan-400">Integrantes</h2>
      <div className="flex flex-row justify-around w-full">
        <Member name="lujan" rol="cantante" instagram="ig" />
        <Member name="lujan" rol="cantante" instagram="ig" />
        <Member name="lujan" rol="cantante" instagram="ig" />
        <Member name="lujan" rol="cantante" instagram="ig" />
      </div>
  </section>
  )
}