"use client"
import { useEffect } from 'react';
import { ImSpinner8 } from 'react-icons/im'

// type SplashScreenProps = {
//     finishLoading: () => void;
//   };

const SplashScreen = () => {    
    return (
    <div className="z-50 fixed top-0 left-0 flex justify-center items-center bg-white dark:bg-primary text-3xl font-bold w-screen h-screen animate-splashScreen">
        <div className="flex items-center animate-splashScreenText">
          <span className="text-primary dark:text-white">kevinpaul</span>
          <span className="text-accent-1">.</span>
          <span className="text-primary dark:text-white">xyz</span>
          <span className="text-accent-1 animate-spin ml-2"><ImSpinner8/></span>
        </div>
    </div>
  )
}

export default SplashScreen