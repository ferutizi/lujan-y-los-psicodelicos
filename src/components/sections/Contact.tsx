import Form from "../Form";

export default function Contact() {
  return(
    <section id="contact" className="p-4 bg-background_light rounded-lg">
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
  )
}