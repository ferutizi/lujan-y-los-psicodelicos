export default function Music() {
  return(
    <section id="spotify" className="p-4 bg-background_light rounded-lg">
      <div className="flex gap-4 mt-4">
        <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/artist/5yf0ocJ6rtYkK8JMtkY3wS?utm_source=generator" width="50%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe style={{borderRadius: "12px"}} src="https://open.spotify.com/embed/track/5CaZWiLNp9aFDhqNEktbuH?utm_source=generator" width="100%" height="352" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </section>
  )
}