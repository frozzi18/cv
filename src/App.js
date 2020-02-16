import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <main>
      <section className='relative flex items-center w-screen h-screen px-20 bg-yellow-100 4xl:justify-center 4xl:px-0'>
        <motion.div
          initial={{ y: '-50vh' }}
          animate={{ y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className='absolute top-0 left-0 right-0 h-s-50 bg-white z-0'
        />
        <div className='relative flex flex-col justify-center w-full h-s-84 4xl:w-1760'>
          <div className='flex justify-between items-end'>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className='giant-heading text-gray-900'
            >
              Hello
              <span className='isolated-comma'>,</span>
            </motion.h1>
            <div className='mr-40 w-64 pb-5 xl:mr-64 2xl:pb-10'>
              <p className='max-w-2xs leading-relaxed'>
                <span className='font-semibold text-blue-900'>
                  A full-stack web developer.
                </span>{' '}
                Coming from an engineering background, I make things work
                correctly and beautifully.
              </p>
            </div>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1.5 }}
              className='giant-heading text-gray-900'
            >
              I am Fahrur
            </motion.h1>
          </div>
          <div className='flex justify-between items-baseline'>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 1.5 }}
              className='giant-heading text-gray-900'
            >
              Rozzi.
            </motion.h1>
            <div className='mr-24 w-80 xl:mr-48'>
              <nav className='grid grid-flow-col col-gap-10 font-semibold uppercase text-blue-900'>
                <a href='/' className='hover:text-orange-700 hover'>
                  Explore projects
                </a>
                <a href='/' className='hover:text-orange-700 hover'>
                  Know me more
                </a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
