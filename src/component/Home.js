import React from 'react'
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';
import {useProductContext} from "../context/Appcontext"
import FeatureProduct from './FeatureProduct';

const Home=()=> {
  const data={
    name:"My Store",
  }
  const {myname}=useProductContext()
  return( 
    <>
    {myname}
    <HeroSection myData={data}/>
    <FeatureProduct />
    <Services />
    <Trusted />
    </>
  )
};

export default Home
