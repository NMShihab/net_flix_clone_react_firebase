import React from 'react'
import '../css/HomeScreen.css'
import Banner from './Banner'
import NavBar from './NavBar'

function HomeScreen() {
    
    return (
        <div className = "homeScreen">
            {/* Navbar */}
            <NavBar />
            
            {/* Banner */}
            <Banner />

            {/* Row */}
            
        </div>
    )
}

export default HomeScreen
