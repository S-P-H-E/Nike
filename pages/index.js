import Head from 'next/head'
import { Inter } from '@next/font/google'
import { SiNike } from 'react-icons/si'
import { BsBag } from 'react-icons/bs'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Item from '@/components/item'
import { useSpring, animated, config } from 'react-spring';

import img1 from '@/public/images/img1.webp'
import img2 from '@/public/images/img2.webp'
import img3 from '@/public/images/img3.webp'
import img4 from '@/public/images/img4.webp'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // Navbar Animation
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 10
  })
  const navAnimation1 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 200
  })
  const navAnimation2 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 250
  })
  const navAnimation3 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 300
  })
  const shopIconAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 550
  })

  // Hero Animation
  const heroh2Animation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1300
  })
  const heroh1Animation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1500
  })
  const heropAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1700
  })
  const herobuttonAnimation1 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1900
  })
  const herobuttonAnimation2 = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 2000
  })
  const heroImageAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 2100
  })
  // Trending Animation
  const heroTrendAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 3000
  })

  return (
    <>
      <Head>
        <title>Nike</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Navar */}
      <nav className='flex justify-between m-5 items-center'>
        <div className='mask'>
          <animated.div style={logoAnimation}>
            <SiNike size={45} className='cursor-pointer'/>
          </animated.div>
        </div>
        <div className='flex gap-5'>
          <div className='mask'>
            <animated.h1 style={navAnimation1} className='cursor-pointer hover:underline'>Men</animated.h1>
          </div>
          <div className='mask'>
            <animated.h1 style={navAnimation2} className='cursor-pointer hover:underline'>Women</animated.h1>
          </div>
          <div className='mask'>
            <animated.h1 style={navAnimation3} className='cursor-pointer hover:underline'>Kids</animated.h1>
          </div>
        </div>
        <div className='mask'>
          <animated.div style={shopIconAnimation}>
            <BsBag size={20} className='cursor-pointer'/>
          </animated.div>
        </div>
      </nav>
      {/* Hero */}
      <div className='flex-col justify-center pt-[100px] text-[#111111]'>
        <div className='mask'>
          <animated.h2 style={heroh2Animation} className='text-center'>Just In: Nike Invincible 3</animated.h2>
        </div>
        <div className='mask'>
          <animated.h1 style={heroh1Animation} className='text-center font-bold text-6xl'>FEEL IT TO BELIEVE IT</animated.h1>
        </div>
        <div className='mask'>
          <animated.p style={heropAnimation} className='text-center my-6'>Our most cushioned road-running shoe gives you extraordinary comfort,<br/>supreme softness and lightweight support through every mile.</animated.p>
        </div>
          <div className='text-center mask'>
            <animated.button style={herobuttonAnimation1} className='bg-[#111111] p-2 px-5 mx-2 text-white rounded-full'>Shop Mens</animated.button>
            <animated.button style={herobuttonAnimation2} className='bg-[#111111] p-2 px-5 mx-2 text-white rounded-full'>Shop Womens</animated.button>
          </div>
      </div>
      <div className='flex justify-center items-center pt-[50px]'>
        <div className='m-20'>
          <h1> </h1>

        </div>
        <animated.img style={heroImageAnimation} className='h-[650px] rounded-3xl' src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="hero image"/>
        <div className='m-20'>
          <h1></h1>
        </div>
      </div>
      {/* Featured Items */}
      <animated.div style={heroTrendAnimation} >
        <div className='mx-10 my-6 flex justify-between items-center'>
          <h1 className='text-xl font-medium'>Trending This Week</h1>
          {/* <div className='flex'>
            <MdArrowBackIosNew size={45} className='bg-[#E5E5E5] rounded-full p-4 m-2'/>
            <MdArrowForwardIos size={45} className='bg-[#E5E5E5] rounded-full p-4 m-2'/>
          </div> */}
        </div>
        <div style={{ height: '500px', overflow: 'auto' }}>
  <div className='flex gap-10 mx-10 my-6'>
    <Item 
      image={img1}
      title='Jordan 6 Rings'
      price='R 2 299,95'
      category='Older Kids Shoes'
    />
    <Item 
      image={img2}
      title="Nike Air Force 1 07"
      price='R 2 299,95'
      category="Mens Shoe"
    />
    <Item 
      image={img3}
      title="Air jordan 3 Retro SE"
      price='R 2 799,95'
      category="Older Kids Shoes"
    />
    <Item 
      image={img4}
      title="Nike Air Force 1 07"
      price='R 2 299,95'
      category="Womens shoes"
    />
  </div>
</div>

      </animated.div>
    </>
  )
}
