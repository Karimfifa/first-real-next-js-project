import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


export default function Nav() {
  return (
    <header class="">
  <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <Link class="block text-teal-600" href="/">
      <span class="sr-only">About</span>
        <Image width={30} height={30} className='rounded-lg ' src={"http://filles.rf.gd/files/0e4183d5-8125-44b2-a273-26953713f8fc.jpg"} alt="prf" />
    </Link>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="hidden md:block">
        <ul class="flex items-center gap-6 text-sm">
          <li>
            <Link class="text-gray-500 transition hover:text-gray-500/75" href="about"> About </Link>
          </li>

          <li>
            <Link class="text-gray-500 transition hover:text-gray-500/75" href="career"> Careers </Link>
          </li>

         
        </ul>
      </nav>

     
    </div>
  </div>
</header>
  )
}
