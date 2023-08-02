import React from 'react';
import { motion } from 'framer-motion';
import Popular from '../components/Popular';
import Veggie from '../components/Veggie';

const Home = () => {
  return (
    <div className='mx-16 py-1'>
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-3xl'>
        Popupar Pick
      </motion.h1>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Popular />
      </motion.div>
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='text-3xl'>
        Vegan Section
      </motion.h1>
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Veggie />
      </motion.div>
    </div>
  );
};

export default Home;
