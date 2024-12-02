import React from 'react'
import Slider from '../components/Slider.js'
import { FlipWordsDemo } from '../components/FlipWords.js'
import { ProductOverview } from '../components/ProductOverview.js'
import Ad from '../components/Ad.js'

const Home = () => {
  return (
    <div>
       <FlipWordsDemo/>
        <Slider />
        <ProductOverview/>
        <Ad />
        
    </div>
  )
}

export default Home