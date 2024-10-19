import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import axios from "axios";
import DATA from '../Data';

export const useProductsDetails = () => {
    const {id: productid} = useParams()
    const [product, setProduct]=useState({});
    const [selectedColor, setSelectedColor]=useState("");
    const [selectedSize, setSelectedSize]=useState("");
    const [selectedQuantity, setSelectedQuantity]=useState(1)

    const handleQuantiyChange=({target:{value}})=>{
      setSelectedQuantity(value);

    };
    const getImage=(color)=>{
      const {attributes}=DATA;
      const image=attributes.image.data.find(image==image.attributes.url.name.inc(color))
      return image.attributes.url|| "";
    }
    useEffect(()=>{
      if(product && product.attributes){
        const {attributes}=DATA;
        setSelectedColor(attributes.color[0]);
        setSelectedSize(attributes.size[0])
      }
    }, [product,setSelectedColor, setSelectedSize]);

    
    useEffect(()=>{
      const fetchCategories=async()=>{
        try {
          const {data:{data}}=await axios.get(`http://localhost:5173/${productid}:populate`)
          setProduct(data)
        } catch (error) {
        }
          console.log({error })
      }
      if(productid){ 
        fetchCategories();
      }
    },[productid])
    const thisProduct = DATA.find(prod => prod.id === productid)
  return (
    product,
    getImage,
    selectedSize,
    selectedColor,
    selectedQuantity,
    setSelectedSize,
    setSelectedColor,
    handleQuantiyChange
  )
}


