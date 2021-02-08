import React from 'react'
import '../css/Banner.css'

function Banner() {

    // This function will minimize description and add ....
    function truncate(string,number) {
        return string?.length > number ? string.substring(0,number-1) +'....' : string
        
    }

    return (
        <header
         className = "banner"
         style={{
             backgroundSize : "cover",
             backgroundImage : `url("https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/1200px-Black_flag.svg.png")`,
             backgroundPosition : "center center"
            }}
        
        >
            <div className="banner__contents">
                <h1 className="banner_title">
                    Movie Name
                </h1>
                <div className="banner__buttons">
                    <button className = "banner__button">Play</button>
                    <button className = "banner__button">My List</button>
                </div>
                <h1 className="banner_description">
                    {truncate(`This is descriptionThis is descriptionThis is description
                        This is descriptionThis is descriptionThis is descriptionThis is description
                        This is descriptionThis is descriptionThis is description`,150)}
                </h1>
            </div>

            <div className="banner--fadeBottom"/>



            
        </header>
    )
}

export default Banner
