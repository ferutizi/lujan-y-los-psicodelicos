import InstagramIcon from "./InstagramIcon"

interface MemberProps {
  name: string,
  rol: string,
  instagram: string
}

export default function Member({name, rol, instagram}: MemberProps) {
  return(
    <article className="flex flex-col gap-4 mt-4 md:grid-cols-4">
      <div className="text-center">
        <img src="/placeholder-user.jpg" alt="Member 1" />
        <div>
          <h2>{name}</h2>
          <h3 className="mt-2 text-lg font-bold text-pink-500">{rol}</h3>
          <a href={`/${instagram}`}>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </article>
  )
}