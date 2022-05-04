import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-xl sm:text-4xl text-pink-600'>Hello, mon nom est</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>J. Arumugam</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Développeur Full Stack.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>Titulaire d'un diplôme de développeur web (BTS). J'ai acquis des compétences en React, NodeJS, Sass et Tailwind. Je suis actuellement à la recherche de ma première expérience.</p>
            <div>
                <Link to="work" smooth={true} duration={500}>
                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>Voir mes projets
                        <span className='group-hover:rotate-90 duration-300'>
                            
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home