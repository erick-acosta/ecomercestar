import React, { useRef, useState } from 'react'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from "swiper/modules";



const ProductZoom = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <div className="productZoom">
            <div className="productZoom position-relative">
                <div className="badge badge-primary">23%</div>

                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    navigation={false}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="zoomSliderBig"
                    ref={zoomSliderBig}
                >
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/282671660_2092295574286526_7414430525195255114_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=yOABgyzzmdsQ7kNvgGm5lPu&_nc_ht=scontent-lim1-1.xx&_nc_gid=AKRa6hOWN9gNf_LmdlOcK5O&oh=00_AYBv9KPCmS_t3GjJBuBJU3p92OhAmQ4z9r0CC0vh7Ref8g&oe=66EEDE07" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/282671660_2092295574286526_7414430525195255114_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=yOABgyzzmdsQ7kNvgGm5lPu&_nc_ht=scontent-lim1-1.xx&_nc_gid=AKRa6hOWN9gNf_LmdlOcK5O&oh=00_AYBv9KPCmS_t3GjJBuBJU3p92OhAmQ4z9r0CC0vh7Ref8g&oe=66EEDE07" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <InnerImageZoom zoomType="hover" zoomScale={1} src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/282671660_2092295574286526_7414430525195255114_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=yOABgyzzmdsQ7kNvgGm5lPu&_nc_ht=scontent-lim1-1.xx&_nc_gid=AKRa6hOWN9gNf_LmdlOcK5O&oh=00_AYBv9KPCmS_t3GjJBuBJU3p92OhAmQ4z9r0CC0vh7Ref8g&oe=66EEDE07" />
                        </div>
                    </SwiperSlide>
                </Swiper>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    navigation={true}
                    slidesPerGroup={1}
                    modules={[Navigation]}
                    className="zoomSlider"
                    ref={zoomSlider}
                >
                    <SwiperSlide>
                        <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                            <img src="https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8" className="w-100" onClick={() => goto(0)} />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                            <img src="https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8" className="w-100" onClick={() => goto(1)} />
                        </div>
                        <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                            <img src="https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8" className="w-100" onClick={() => goto(1)} />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}






export default ProductZoom
