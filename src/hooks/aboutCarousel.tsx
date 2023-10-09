import { useEffect, useState } from 'react';
import carousel1 from './../assets/about_carousel/1.jpg'
import carousel2 from './../assets/about_carousel/2.jpg'
import carousel3 from './../assets/about_carousel/3.jpg'
import carousel4 from './../assets/about_carousel/4.jpg'
import carousel5 from './../assets/about_carousel/5.jpg'
import carousel6 from './../assets/about_carousel/6.jpg'
import carousel7 from './../assets/about_carousel/4.jpg'
import carousel8 from './../assets/about_carousel/5.jpg'
import carousel9 from './../assets/about_carousel/6.jpg'
import carousel10 from './../assets/about_carousel/6.jpg'

const useCarousel = () => {
    const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10]
    let [timer, setTimer] = useState(0);
    let [currentIndex, setCurrentIndex] = useState(1);
    let [currentImage, setCurrentImage] = useState(images[currentIndex - 1]);
    const interval = setInterval(() => {
        setTimer(timer + 10)
        if (timer > 7000) {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(0);
            }
            console.log(currentIndex);
            setCurrentImage(images[currentIndex]);

        }
        clearInterval(interval)
    }, 10);

    useEffect(() => {
        setTimer(0)
    }, [currentImage])

    const imageStyle = {
        opacity: timer < 2000 ? timer / 2000 : timer < 5000 ? 1 : 1 - (timer - 5000) / 2000, // Fade out for 2 seconds, then fade in for 2 seconds
    };

    return <>
        <img src={currentImage} alt='test' className={`w-[25vw] translate-y-[25%]`} style={imageStyle}/>
    </>
};

export { useCarousel };