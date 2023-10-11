'use client';
import React from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';




const Navbar = () => {
  const currentPathName = usePathname();
  const router = useRouter();

  return (
    <nav className="p-4  flex items-center justify-between ">
      <ul className='flex space-x-8'>
        <Link href="/">Home</Link>
        <Link href="/auditors">Auditors</Link>
      </ul>
      <ConnectButton />
    </nav>
  )
}


export default Navbar
