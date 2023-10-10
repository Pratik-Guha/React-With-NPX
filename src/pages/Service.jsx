import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from '../assets/3.jpg'
import img2 from '../assets/4.jpg'

const Service = () => {
  return (
    <div>
        <Carousel infiniteLoop showStatus={false} autoPlay showArrows={false} interval={2000}>
            <div>
                <img src='https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg' alt="Item1" />
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/01/09/02/45/laptop-593673_1280.jpg' alt="Item2" />
                <p className='legend'>React Devolopment</p>
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_1280.jpg' alt="Item2" />
                <p className='legend'>Backend Devolopment</p>
            </div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924_1280.jpg' alt="Item2" />
                <p className='legend'>Complete Work</p>
            </div>
        </Carousel>
    </div>
  )
}

export default Service