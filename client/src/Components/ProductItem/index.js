import Rating from '@mui/material/Rating';
import { SlSizeFullscreen } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import  Button  from "@mui/material/Button";
import ProductModal from '../ProductModal';
import { useState } from 'react';

const ProductItem = (props) => {

    const [isOpenProductModal,setisOpenProductModal] = useState(false);
    const viewProductDetails = (id) => {    
            setisOpenProductModal(true);
    }
    const closeProductModal = () => {
        setisOpenProductModal(false)
    }
    return(
        <>
            <div className={`productItem ${props.itemView}`}>
        <div className="imgWrapper">
        <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/282671660_2092295574286526_7414430525195255114_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=3a1ebe&_nc_ohc=yOABgyzzmdsQ7kNvgGm5lPu&_nc_ht=scontent-lim1-1.xx&_nc_gid=AKRa6hOWN9gNf_LmdlOcK5O&oh=00_AYBv9KPCmS_t3GjJBuBJU3p92OhAmQ4z9r0CC0vh7Ref8g&oe=66EEDE07" className="w-100"></img>
    <span className="badge badge-primary">25%</span>

        <div className="actions">

            <Button onClick={()=>viewProductDetails(1)}> <SlSizeFullscreen /></Button>
            <Button> <IoIosHeartEmpty style={{fontSize:'20px'}} /></Button>

        </div>


    </div>

    <div className="info">
    <h4>Nombre del Producto</h4>
    <span className="text-success d-block">En Stock</span>                            
    <Rating className="mt-2 mb-2" name="read-only" value={5} readOnly size="small" precision={0.5} />
    <div className="d-flex">
        <span className="oldPrice">$20.00</span>
        <span className="netPrice text-danger ml-2">$15.00</span>

    </div>
    
    </div>  
        </div>

        {
            isOpenProductModal===true && <ProductModal closeProductModal={closeProductModal}/>
        }
       
        </>

       
    )

}


export default ProductItem