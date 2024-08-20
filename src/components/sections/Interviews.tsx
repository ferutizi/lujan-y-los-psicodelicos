export default function Interviews() {
  return(
    <section id="interviews" className="col-span-3 col-start-5 row-start-3">
      <h2 className="text-2xl font-bold">Entrevistas</h2>
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
  )
}