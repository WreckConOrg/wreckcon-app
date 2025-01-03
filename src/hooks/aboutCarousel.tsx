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
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

const useCarousel = () => {
    const images = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6, carousel7, carousel8, carousel9, carousel10]
    let [currentIndex, setCurrentIndex] = useState(1);
    let [currentImage, setCurrentImage] = useState(images[currentIndex]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < images.length - 1) {
                setCurrentIndex(currentIndex + 1);
            } else {
                setCurrentIndex(2);
            }
            console.log(currentIndex);
            setCurrentImage(images[currentIndex - 1]);
            clearInterval(interval);
        }, 3000);
        return () => clearInterval(interval)    
    }, [currentImage, currentIndex, images])

    const imageStyle = {
        opacity: 1, // Fade out for 2 seconds, then fade in for 2 seconds
    };

    return <>
        <img src={currentImage} alt='image could not load' className={classNames(`translate-y-[15%]`,
            { "w-[40vw]" : !isMobile},
            { "h-[30vh]" : isMobile}
        )} style={imageStyle}/>
    </>
};

// timer < 1000 ? timer / 1000 : timer < 2000 ? 1 : 1 - (timer - 2000) / 1000 fading stuff
export { useCarousel };