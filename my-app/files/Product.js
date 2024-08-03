import React, { useEffect, useState } from "react";
import { View,Text } from "react-native";
import ProductItem from "../files/ProductItem"
import ModalItem  from "../files/Modal";
function Product(){

    let [data,setData]  =useState("")
    let [getError,setGetError] =useState()
    const getData=async()=>{
      const response= await fetch("https://fakestoreapi.com/products")
      const res= await response.json()
     if(!response.ok){
         setGetError("data is not found")
    }else{
         setData(res)
     }
    }
    useEffect(()=>{
        try{
            getData()
        }catch(error){
            console.log(error)
        }
    },[])
    console.log(data)
return(
    <View>
        <ProductItem products={data}/>
    </View>
    )
}

export default Product

