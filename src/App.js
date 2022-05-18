import React from 'react'
import './App.css'
import { Navbar } from './components'
import { Blog, Brand, CTA, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features/>
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
