import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='text-white-800 flex-between body-text w-full gap-y-10
    border-black-400 bg-black-100 px-20 py-1 max-md:flex-col'>
      <p>Copyright © 2023 O'technologies | All  Rights Reserved</p>
      <div className='flex gap-x-9'>
        <Link href='/terms-of-use'>Terms & Conditions</Link>
        <Link href='/privacy-policies'>Privacy Policies</Link>
      </div>
    </footer>

  )
}

export default Footer