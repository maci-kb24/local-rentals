import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className='pt-16 pb-8'>
        <h1 className={`text-2xl font-semibold text-slate-800`}>Discover Local   Rentals Worldwide for Remote Work & Nomad Life</h1>
      </div>
      <div className='search-rentals'>Main Feature</div>
    </main>
  )
}
