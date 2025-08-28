// components/Navbar.tsx
'use client'
import Link from 'next/link'
import { gsap } from 'gsap'
import { useState, useRef, useEffect} from 'react'
import { useGSAP } from '@gsap/react'

//navbar
const Navbar = () => {
  useEffect(() => {
    gsap.registerPlugin(useGSAP);
    
    if (typeof window !== 'undefined') { // Ensure it's only running in the browser
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      };
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const overlay = useRef(null);
  const sosal = useRef(null);
  const topLineRef = useRef(null);
  const bottomLineRef = useRef(null);
  const timeline = useRef(gsap.timeline({ paused: true }));
  const iconTl = useRef(gsap.timeline({ paused: true }));
  // const hoverText = document.querySelector(".hover-text");

  const navigation = [
    { name: 'Videos', href: '/core' },
    { name: 'Quotes', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];
  
  const navsocial = [
    { name: 'Instagram. |', href: 'https://www.instagram.com/adilikecious/' },
    { name: 'YouTube. |', href: 'https://www.youtube.com/@smile.spectrum' },
    { name: 'Telegram.', href: 'https://t.me/Adilkhan51' },
  ];

  useGSAP(() => {
    gsap.set(".menu-item p", { y: 225 });
    //menu overlay
    timeline.current.to(overlay.current, {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });
    //menu items
    timeline.current.to(".menu-item p", {
      duration: 1.5,
      y: 0,
      stagger: 0.2,
      ease: "power4.out",
    }, "-=1");
    //social
    timeline.current.to(sosal.current, {
      bottom: "10%",
      opacity: 1,
      duration: 0.5,
      delay: 0.8,
    }, "<");
    
    iconTl.current.to(topLineRef.current, {
      rotate: 45,
      y: 3.5,
      duration: 0.5,
      ease: "power4.inOut",
    }).to(bottomLineRef.current, {
          rotate: -45,
          y: -3.5,
          duration: 0.5,
          ease: "power4.inOut",
        }, "<");
  }, []);

    const toggleMenu = () => {
      if (isOpen) {
        timeline.current.reverse();
        iconTl.current.reverse();
      } else {
        timeline.current.play();
        iconTl.current.play();
      }
      setIsOpen(!isOpen);
    };
  // const toggleMenu = () => {
  //   setIsOpen((prev) => {
  //     const newState = !prev;
  //     if (newState) {
  //       timeline.current.play();
  //     } else {
  //       timeline.current.reverse();
  //     }
  //     return newState;
  //   });
  // };

  return (
    <header className='flex justify-center'>
      <nav className='fixed max-w-[1440px] w-full flex justify-between items-center text-[var(--foreground)] mix-blend-difference z-50 px-4 py-3 lg:px-8 lg:py-6'>
        {/* <div className='text-center text-lg font-[Canopee] lg:text-2xl'>
          <p>Adok</p>
        </div> */}
        <div className="flex flex-col items-center justify-center gap-1.5 md:gap-3 transition-all duration-300 rounded-full cursor-pointer w-10 h-8 md:w-20 md:h-20"
        onClick={toggleMenu}>
          <span
            ref={topLineRef}
            className="block w-8 md:w-12 h-0.5 bg-[var(--foreground)] origin-center"
          ></span>
          <span
            ref={bottomLineRef}
            className="block w-8 md:w-12 h-0.5 bg-[var(--foreground)] origin-center"
          ></span>
        </div>
        <div className='text-center text-[22px] font-[Canopee] lg:text-4xl'>
          <p><Link href='/'>Hopecore - liftup</Link></p>
        </div>
      </nav>

      <div ref={overlay} className={'fixed top-0 left-0 w-screen h-screen flex bg-[var(--background)] z-10 [clip-path:polygon(0_0,100%_0,100%_0,0_0)]'}>
        <div className='fixed top-0 left-0 w-full h-screen flex gap-3 lg:gap-4 flex-col justify-center items-start px-4 lg:px-8'>
            {navigation.map((item) => (
              <Link 
              key={item.name}
              href={item.href}
              onClick={toggleMenu}
              className='menu-item [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)] relative text-center font-[Canopee] text-6xl lg:text-9xl leading-[80%] text-[var(--foreground)] transform-gpu'>
                <p className='hover-text tracking-normal transition-[letter-spacing] duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] hover:tracking-[8px]'>{item.name}</p>
              </Link>
            ))}
        </div>

        <div ref={sosal} className='absolute bottom-[5%] left-[50%] translate-x-[-50%] flex w-full justify-center gap-2 opacity-0'>
          {navsocial.map((sosal) => (
            <Link 
              key={sosal.name}
              href={sosal.href}
              target='_blank'
              rel='noopener noreferrer'
              onClick={toggleMenu}
              className='font-[Canopee] text-xl lg:text-3xl text-[var(--foreground)]'>{sosal.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  )
}
export default Navbar;