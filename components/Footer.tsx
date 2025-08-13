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
    { name: 'Videos', href: '/core' },
    { name: 'Quotes', href: '#' },
    { name: 'Resources', href: '/resources' },
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
      <div className='w-full max-w-[1280px]'>
        <div className='w-full text-base'>
          <div className='md:flex md:justify-between'>
            <div className='flex flex-col md:flex-row w-fit md:gap-4 lg:gap-x-8'>
              <h3 className='mb-2 md:mb-0 flex font-extralight text-sm'>Navigation</h3>
              {menu.map((item, index) => (
                <a key={index} href={item.href} className="group relative flex w-fit overflow-hidden font-medium ">
                  <span className='relative inline-flex overflow-hidden'>
                    <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>{item.name}</div>
                    <div className='absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>{item.name}</div>
                  </span>
                </a>
              ))}
            </div>
            <div className='flex flex-col md:flex-row my-8 md:my-0 md:w-fit'>
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
          </div>
          <div className='flex w-full justify-center items-center gap-x-5 mt-10 mb-10'>
            <span className='flex text-[3rem] md:text-[4rem] lg:text-[6rem] leading-[80%] text-[var(--foreground)]'>
              LiftUp.
            </span>
          </div>
        </div>
        <div className="">
          <div className="border-t border-gray-200 py-8">
            <div className="flex flex-col-reverse items-center md:flex-row md:justify-between">
              <p className="text-sm mt-6 md:mt-0">
                &copy; {new Date().getFullYear()} LiftUp. Made by <Link href="https://ersinadilkhan.vercel.app/" className="hover:cursor-pointer hover:text-[var(--foreground)]">Adilkhan</Link>. All rights reserved.
              </p>
              {/* Legal Links */}
              <div className="flex space-x-6">
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
          </div>
        </div>
        {/* <div className='md:flex w-full mt-1.5 md:justify-between'>
          <div className='flex justify-between w-full'>
            <div className='flex justify-between w-full md:w-fit md:justify-normal'>
              {legals.map((item, index) => (
                <a key={index} href={item.href} className="pb-1 relative flex h-fit w-fit overflow-hidden font-light ">
                  <span className='relative overflow-hidden text-sm md:text-base'>
                    <div className='translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12'>{item.name}</div>
                    <div className='absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0'>{item.name}</div>
                  </span>
                </a>
              ))}
            </div>
            <div className='flex justify-between items-center md:justify-normal'>
              <span className='flex text-[1rem] font-light text-[var(--foreground)]'>
                © 2025 LiftUp.
              </span>
              <span className='flex text-[0.8rem] md:ms-4 font-light text-[var(--foreground)]'>
                Made by<Link href='https://ersinadilkhan.vercel.app/' className='ml-1'>Adilkhan</Link>
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  )
}