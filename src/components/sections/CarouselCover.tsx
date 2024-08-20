export default function CarouselCover() {
  return(
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
  )
}