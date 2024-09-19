
import { Dialog, Button } from "@mui/material"

import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import { useRef } from "react";
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import { IoIosHeartEmpty } from "react-icons/io";
import { MdOutlineCompareArrows } from "react-icons/md";

import Quantilybox from "../Quantilybox";


const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const  zoomSlider = useRef();


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow:5,
        slidesToScroll:1,
        fade: false,
        arrows:true,
    };


    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow:1,
        slidesToScroll:1,
        fade: false,
        arrows:false,
    };

    const goto = (index) => {
        zoomSliderBig.current.slickGoTo(index);
        zoomSlider.current.slickGoTo(index);
    }

    return (

        <>
            <Dialog open={true} className="productModal" onClose={() =>props.closeProductModal()}>
                
            
                
                <h4 class="mb-1 font-weight-bold"> nombre del producto</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                    <span> <b>Modelo:</b></span>
                    <span className="ml-2"> tallas</span>
                    </div>

                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />

                </div>


                <hr/>

                <div className="row  mt-2 productDetaileModal">

                    <div className="col-md-5">
                    <div className="productZoon position-relative">
                    <div className="badge badge-primary">23%</div>
                        <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>

                    
                            <div className="item">
                                <InnerImageZoom zoomType="hover" zoomScale={1} src="https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"/>
                      
                            </div>
                            <div className="item">
                                <InnerImageZoom zoomType="hover" zoomScale={1} src="https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"/>
                      
                            </div>
                            <div className="item">
                                <InnerImageZoom zoomType="hover" zoomScale={1} src="https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"/>
                      
                            </div>
                            <div className="item">
                                <InnerImageZoom zoomType="hover" zoomScale={1} src="https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"/>
                      
                            </div>

                   
                         </Slider>

                         <Slider {...settings} className="zoomSlider" ref={zoomSlider}>

                    
                            <div className="item">
                                <img src={"https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"} className="w-100" onClick={()=> goto(0)}/>
                      
                            </div>
                            <div className="item">
                                <img src={"https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"} className="w-100" onClick={()=> goto(1)}/>
                      
                            </div>
                            <div className="item">
                                <img src={"https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"} className="w-100" onClick={()=> goto(2)}/>
                      
                            </div>
                            <div className="item">
                                <img src={"https://srv.carbonads.net/static/30242/3f9dd4826d3163d7c3130ae8f98a774c487bccb8"} className="w-100" onClick={()=> goto(3)}/>
                      
                            </div>

                   
                         </Slider>
 
                    </div>
                    </div>

                    
                    
                    <div className="col-md-7">
                    <div className="d-flex info align-items-center mb-3">
                        <span className="oldPrice lg mr-2">$9.35</span>
                        <span className="netPrice text-danger lg">$9.35</span>
                    </div>
                    
                    <span className="badge bg-success"> En Stock</span>
                    <p className="mt-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>


                    <div className="d-flex align-items-center ">

                    <Quantilybox/>
                        
                    <Button className="btn-blue btn-lg btn-big btn-round ml-3"> Agregar Al Carrito</Button>
                        
                     </div>

                     <div className="d-flex align-items-center mt-5 actions">
                     <Button className="btn-round btn-sml" variant="outlined"> <IoIosHeartEmpty  /> &nbsp; Agregar a Lista</Button>
                     
                     
                     <Button className="btn-round btn-sml ml-3" variant="outlined"> <MdOutlineCompareArrows /> &nbsp; Comparar</Button>
                     
                       
                        
                    </div>
                    </div>


                </div>


            </Dialog>



        </>

    )
}

export default ProductModal