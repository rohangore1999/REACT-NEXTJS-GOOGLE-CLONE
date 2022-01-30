import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { ViewGridIcon, MicrophoneIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import { useRouter } from 'next/router'



export default function Home() {
  // to point search value
  const searchInputRef = useRef(null)

  const router = useRouter()

  const search = (e) => {
    e.preventDefault()

    // term will get input text
    const term = searchInputRef.current.value

    // if no term then simply return
    if(!term) return;

    // else
    // it will redirect to /search
    router.push(`/search?term=${term}`)
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <Head>
        <title>Google - Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className='flex w-full justify-between p-5 text-sm text-gray-700'>
        {/* left */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>About</p>
          <p className='link'>Store</p>
        </div>

        {/* right */}
        <div className='flex space-x-4 items-center'>
          <p className='link'>Gmail</p>
          <p className='link'>Images</p>

          {/* Icons */}
          <ViewGridIcon className='h-10 w-10 cursor-pointer rounded-full hover:bg-gray-100 p-2 transition duration-150 transform hover:scale-110' />

          {/* Avatar */}
          <Avatar url={'https://avatars.githubusercontent.com/u/39983195?v=4'} />
        </div>
      </header>

      {/* body */}
      <form className='flex flex-col mt-44 flex-grow items-center w-4/5'>
        <Image src={'https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'} height={100} width={300} objectFit='contain' />

        <div className='flex w-full mt-5 hover:shadow-lg justify-between focus-within:shadow-lg max-w-md border rounded-full border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl'>
          {/* focus-within:shadow-lg >>> means when you click shadow will stay */}
          <SearchIcon className='h-5 mr-3 text-gray-500' />

          {/* ref={searchInputRef} >> it will pointing to input field */}
          <input ref={searchInputRef} type="text" className='focus:outline-none flex-grow' />

          <MicrophoneIcon className='h-5 ' />
        </div>

        <div className='flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4'>
          <button onClick={search} className='btn'>Google Search</button>
          <button onClick={search} className='btn'>Im Feeling Lucky</button>
        </div>

      </form>

      {/* footer */}
      <Footer />
    </div>
  )
}
