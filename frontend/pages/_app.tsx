// pages/_app.tsx

import React from 'react';
import '../styles/globals.css';
import { AppProps } from 'next/app'; 

const App = ({ Component, pageProps }: AppProps) => {
  return (
    
    <Component {...pageProps} />
  );
};

export default App;
