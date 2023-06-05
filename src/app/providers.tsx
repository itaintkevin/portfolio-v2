"use client"
import { ReactNode, FC } from 'react'
import { ThemeProvider } from 'next-themes'

type ProvidersProps = {
    children: ReactNode;
  };

  const Providers: FC<ProvidersProps> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
  };
  
  export default Providers;