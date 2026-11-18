import { useEffect, useState, memo } from 'react';
import carousel1 from './../assets/about_carousel/1.jpg'
import carousel2 from './../assets/about_carousel/2.jpg'
import carousel3 from './../assets/about_carousel/3.jpg'
import carousel4 from './../assets/about_carousel/4.jpg'
import carousel5 from './../assets/about_carousel/5.jpg'
import carousel6 from './../assets/about_carousel/6.jpg'



const AboutCarousel = memo(function useCarousel( ) {
    const images = [carousel4, carousel5, carousel6]
    let [currentIndex, setCurrentIndex] = useState(0);
    let [currentImage, setCurrentImage] = useState(images[currentIndex]);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
            setCurrentImage(images[currentIndex]);
            clearInterval(interval);
        }, 3000);
        return () => clearInterval(interval)
    }, [currentImage, currentIndex, images])

    const imageStyle = {
        opacity: 1, // Fade out for 2 seconds, then fade in for 2 seconds
    };

    return <>
        <img src={currentImage} alt='image could not load' style={imageStyle} />
    </>
})

// timer < 1000 ? timer / 1000 : timer < 2000 ? 1 : 1 - (timer - 2000) / 1000 fading stuff
export { AboutCarousel };