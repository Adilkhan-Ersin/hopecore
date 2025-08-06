'use client'
import React from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

library.add(fab);

export default function Footer() {

  const menu = [
    { name: 'Core', href: '#' },
    { name: 'Motivational', href: '#' },
    { name: 'Peace', href: '#' },
    { name: 'Contact', href: '#contact' },
  ]

  interface SocialLink {
    name: IconName;
    href: string;
  }
  const social: SocialLink[] = [
    { name: 'telegram', href: 'https://t.me/Adilkhan51' },
    { name: 'instagram', href: 'https://www.instagram.com/adilikecious/' },
    { name: 'x-twitter', href: 'https://x.com/' },
    { name: 'youtube', href: 'https://www.youtube.com/@Smile.Spectrum' },
  ]

  const legals = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ]

  return (
    <footer id='contact' className="footer-padding mt-10 relative flex flex-col items-center justify-center gap-y-5">
      <div className='w-full px-3'>
        <div className='w-full text-base'>
          <div className='flex flex-col'>
            <h3 className='mb-2 flex font-extralight text-sm'>Navigation</h3>
            {menu.map((item, index) => (
              <a key={index} href={item.href} className="group relative flex w-fit overflow-hidden font-medium ">
                <span className='relative inline-flex overflow-hidden'>
                  <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>{item.name}</div>
                  <div className='absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>{item.name}</div>
                </span>
              </a>
            ))}
          </div>
          <div className='flex flex-col my-8'>
            <div className='flex flex-wrap justify-center gap-2'>
              {social.map((item, index) => (
                <a key={index} href={item.href} target='_blank' rel='noopener noreferrer' className="group pb-1 relative flex h-fit w-fit overflow-hidden font-medium ">
                  <span className='relative inline-flex overflow-hidden'>
                    <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'><FontAwesomeIcon size='lg' icon={['fab', item.name]} /></div>
                    <div className='absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'><FontAwesomeIcon size='lg' icon={['fab', item.name]} /></div>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div className='flex w-full justify-center items-center gap-x-5 mb-5'>
            <span className='flex text-[3rem] leading-[80%] text-[var(--foreground)]'>
              LiftUp.
            </span>
          </div>
          <div className='flex justify-between w-full'>
            {legals.map((item, index) => (
              <a key={index} href={item.href} className="pb-1 relative flex h-fit w-fit overflow-hidden font-light ">
                <span className='relative overflow-hidden text-sm md:text-base'>
                  <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>{item.name}</div>
                  <div className='absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>{item.name}</div>
                </span>
              </a>
            ))}
          </div>
        </div>
        <div className='flex w-full justify-between mt-1.5'>
          <span className='flex text-[1rem] font-light text-[var(--foreground)]'>
            © 2025 LiftUp.
          </span>
          <span className='flex text-[0.8rem] font-light text-[var(--foreground)]'>
            Made by<Link href='https://ersinadilkhan.vercel.app/' className='ml-1'>Adilkhan</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}