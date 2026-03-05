import Link from 'next/link'
import React from 'react'

function HomePage() {
  return (
    <div>
      <section>
        <h1 className='text-slate-800 font-bold text-5xl'>
          Home Page
        </h1>
        <div className='text-center mt-7'>
          <Link href="/login" className='text-blue-800 underline text-2xl rounded-lg' >
          Go to login page
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage
