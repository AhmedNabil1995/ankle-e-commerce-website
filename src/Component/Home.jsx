import React from 'react'
import Landing from './Landing';
import './Home.css';

import Terending from './Terending';
import CompanyLogo from './CompanyLogo';
import Slider from './Slider';
import NewSeletter from './NewSeletter';

export default function Home() {
  return (
    <>
    <Landing />
    <Terending />  
    <Slider />
    <NewSeletter />
    <CompanyLogo />  
    </>
  )
}
