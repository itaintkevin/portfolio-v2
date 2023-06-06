"use client"
import { useEffect } from 'react';
import { ImSpinner8 } from 'react-icons/im'

type SplashScreenProps = {
    finishLoading: () => void;
  };

const SplashScreen: React.FC<SplashScreenProps> = ({ finishLoading }) => {

    useEffect(() => {
        setTimeout(() => {   
            finishLoading()
        }, 1000)    
    }, [finishLoading])
    
    return (
    <div className={`flex justify-center items-center text-3xl font-bold h-screen`}>
        <span className="text-primary dark:text-white">kevinpaul</span>
        <span className="text-accent-1">.</span>
        <span className="text-primary dark:text-white">xyz</span>
        <span className="text-accent-1 animate-spin ml-2"><ImSpinner8/></span>
    </div>
  )
}

export default SplashScreen