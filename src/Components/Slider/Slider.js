import React, { useEffect, useState } from 'react';
import styles from './Slider.module.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {sliderItems} from '../../data'
const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    
    
    const handleClick = (direction) => {
        if(direction === 'left'){
            const wrapper = document.getElementById('wrapper')
            console.log(wrapper)
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
            wrapper.style.transform = `translateX(${slideIndex * -100}vw)`
        }
        else{
            const wrapper = document.getElementById('wrapper')
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
            wrapper.style.transform = `translateX(${slideIndex * -100}vw)`

        }
        
        

    }


    return (
        <div className={styles.container}>
            <div onClick={() => handleClick('left')} className={`${styles.arrow} ${styles.arrowLeft}`}>
                <ArrowLeftIcon></ArrowLeftIcon>
            </div>
            <div id='wrapper' className={styles.wrapper}>

                {
                    sliderItems.map(item => (
                        <div key={item.id} style={{backgroundColor: item.bg}}  className={`${styles.slide} `}>
                            <div className={styles.imgContainer}>
                                <img className={styles.image} src={item.img} />
                            </div>
                            <div className={styles.infoContainer}>
                                <h1 className={styles.title}>{item.title}</h1>
                                <p className={styles.des}>{item.desc}</p>
                                <button className={styles.button}>SHOP NOW</button>
                            </div>
                        </div>
                    ))
                }



                

                


            </div>
            <div onClick={() => handleClick('right')} className={`${styles.arrow} ${styles.arrowRight}`}>
                <ArrowRightIcon></ArrowRightIcon>
            </div>
        </div>
    );
};

export default Slider;