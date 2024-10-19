import React from "react"
import {useParams} from "react-router-dom"
import DATA from '../Data';


function ProductView() {
    const {productId} = useParams()
    const thisProduct = DATA.find(prod => prod.id === productId)
    
    return (
        <div className="h-[100vh]">
            <h1>{thisProduct.Title}</h1>
            <p>Price: ${thisProduct.price}</p>
            <p>{thisProduct.about}</p>
        </div>
    )
}

export default ProductView