
import React, { useEffect, useState } from 'react'
import '../css/NavBar.css'

function NavBar() {
    const [show, handleshow] = useState(false)

    const transitionNavbar = () =>{
        if(window.scrollY > 100){
            handleshow(true);
        }else{
            handleshow(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', transitionNavbar)
        return () => window.removeEventListener('scroll', transitionNavbar)
    }, [])
    return (

        <div className = {`navBar ${show && "navBar__black"}`}>
            <div className="navBar__content">
                <img 
                    className = 'navBar__logo'           
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <img
                    className = 'navBar_avatar'
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt=""
                />
            </div>          
            
        </div>
    )
}

export default NavBar
