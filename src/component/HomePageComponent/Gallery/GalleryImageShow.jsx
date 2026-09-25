import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import { useLocation } from "react-router-dom"

import image1 from "../../../assets/OurGallery/Image1.png"
import image2 from "../../../assets/OurGallery/Image2.png"
import image3 from "../../../assets/OurGallery/Image3.png"
import image4 from "../../../assets/OurGallery/Image4.png"
import image5 from "../../../assets/OurGallery/Image5.png"
import image6 from "../../../assets/OurGallery/Image6.png"

import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react"


const image = [
    [image1,1], [image2,2], [image3,3], [image4,4], [image5,5], [image6,6]
]

export default function GalleryImageShow() {

    const [swiper, setSwiper] = useState(null)
    const location= useLocation()
    console.log(location)
    const clickedId= location.state?.id
    

    useEffect(()=>{
        document.body.classList.add('overflow-hidden')

        return(
            ()=>{
                document.body.classList.remove('overflow-hidden')
            }
        )
    },[])

    useEffect(()=>{

        if (!swiper || clickedId == null) return;

        const index= image.findIndex(([image, id])=>{
            return id === clickedId
        })

        if(index !== -1)
        {
            swiper.slideTo(index)
        }
        
    },[swiper, clickedId])
    
    return (
        <section className="fixed inset-0 z-50 h-screen w-full! overflow-hidden bg-black/80">
            <Swiper
                modules={[Navigation]}
                navigation
                slidesPerView={1}
                onSwiper={setSwiper}
                className="h-full! w-full!"
            >
                {
                    image.map(([image,id]) => (

                        <SwiperSlide  className="flex! h-full! w-full! items-center justify-center">
                            <img

                                key={id}
                                src={image}
                                alt=""
                                className="h-100 w-100 object-contain"
                            />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </section>
    )
}
