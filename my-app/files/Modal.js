import React, { useState } from "react"
import { View,Text,StyleSheet,Modal,Image, SafeAreaView, TouchableOpacity } from "react-native"
import Feather from '@expo/vector-icons/Feather';
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "@/store/cartSlice/cartSlice";


function ModalItem({Mdata,toggle}){
 let items =  useSelector(state=>state.cart.items)
         let dispatch=useDispatch()
         console.log(items,"--->items")
    return(
        <>
        {  <Modal transparent animationType="fade" visible={true} >
        <View style={Mstyle.mConatiner2}>
            <View style={Mstyle.mItems}>
            <Image style={Mstyle.mImg} source={{uri : Mdata.image}} />
            <Text  style={{fontSize:18, width:"auto"}} numberOfLines={2}>{Mdata.title}</Text>
            <Text  style={{fontSize:18,fontWeight:500}}>Price : Rs.{Mdata.price}</Text>
            <Text  style={{fontSize:18}}>Category :  {Mdata.category}</Text>
            <Text  style={{fontSize:16,fontWeight:500}} numberOfLines={4}>Description:Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            </Text>
            <View style={Mstyle.Bcontainer}>
                <TouchableOpacity onPress={()=>{
                    dispatch(cartAction.addToCart(Mdata))
                    alert("added to cart");
                }}>
                    <Text style={Mstyle.button1}>
                    <Feather  name="shopping-cart" size={23} color="white" />
                       <Text>Add To Cart</Text> 
                    </Text>
                </TouchableOpacity>
             <TouchableOpacity>
                <Text style={Mstyle.button2} onPress={()=>{toggle(false)}}>
                    close
                </Text>
            </TouchableOpacity>
            </View>
            </View>
        </View>
    </Modal>}
    </>
    
    )
}

const Mstyle=StyleSheet.create({
   
    mConatiner2:{
        borderWidth:1,
        borderColor:"green",
        backgroundColor: 'rgba(0,0,0,0.5)',
        filter: 'blur(10)',
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
    },
    mItems:{
        boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.75)",
        backgroundColor:"white",
        width:350,
        height:"auto",
        borderRadius:8,
        // margin:10,
        padding:18,
        textAlign:"start",
        display:"flex",
        alignItems:"center",
        borderColor:"gray",
        gap:5
    },
    mImg:{
        objectFit:"contain",
        width:200,
        height:200,
         resizeMode: "contain"
        // borderRadius:10,
    },
    Bcontainer:{
        display:"flex",
        flexDirection:"row",
        gap:20,
    },
    button1:{
        color:"white",
        width:180,
        display:"flex",
        justifyContent:"space-evenly",
        alignItems:"center",
        backgroundColor:"#FC0001",
        height:50,
        textAlign:"center",
        fontSize:20,
        borderRadius:8
    },
    button2:{
        width:90,
        backgroundColor:"#D5D5D5",
        height:50,
        fontSize:20,
        textAlign:"center",
        borderRadius:8,
        paddingTop:10,
        textAlignVertical:"center"
    }
  
});

export default ModalItem;

