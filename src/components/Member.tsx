import './Member.css'
import { useEffect } from "react"
import InstagramIcon from "./InstagramIcon"

interface MemberProps {
  name: string,
  rol: string,
  instagram: string
}

export default function Member({name, rol, instagram}: MemberProps) {
  useEffect(() => {
    const memberCards = document.querySelectorAll('.member-card');
    const cleanupFns: (() => void)[] = [];

    memberCards.forEach(card => {
      const handleMouseMove = (e: MouseEvent) => {
        const target = card as HTMLElement;
        const x = e.pageX - target.offsetLeft;
        const y = e.pageY - target.offsetTop;

        target.style.setProperty('--x', x + 'px');
        target.style.setProperty('--y', y + 'px');
      };

      if (card instanceof HTMLElement) {
        card.addEventListener('mousemove', handleMouseMove);

        cleanupFns.push(() => {
          card.removeEventListener('mousemove', handleMouseMove);
        });
      }
    });

    // Cleanup
    return () => {
      cleanupFns.forEach(cleanup => cleanup());
    };
  }, []);

  return(
    <article className="member-card">
      <div className="text-center">
        <img src="/placeholder-user.jpg" alt="Member 1" />
        <div>
          <h2>{name}</h2>
          <h3 className="mt-2 text-lg font-bold text-primary">{rol}</h3>
          <a href={`/${instagram}`}>
            <InstagramIcon />
          </a>
        </div>
      </div>
    </article>
  )
}