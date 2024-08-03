
import { FlatList, SafeAreaView, View,StyleSheet,Text,Image, TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "@/store/cartSlice/cartSlice";

function Cart(){
   let [data,setData] = useState([])
   let items =useSelector(state=>state.cart.items)
  
  
   return(
       <View>
           <CartItem products={items}/>
       </View>
   )
}
export default Cart
const CartItem=({products})=>{
   let totalQuantity = useSelector(state=>state.cart.totalQuantity)
   let dispatch = useDispatch()
//    console.log(products,"------><><<>")
   return(
       <>
       <SafeAreaView>
           <View style={{height:60,backgroundColor:"#3D4665",alignItems:"center",
           display:"flex",flexDirection:"row", justifyContent:"space-around",}}>
               <Text style={{fontSize:20,color:"white"}}>Cart Items</Text>
               <Text style={{fontSize:20,width:65,height:40,backgroundColor:"brown",textAlign:"center",
               textAlignVertical:"middle",paddingTop:5,borderRadius:10,
               }}>{totalQuantity}</Text>
           </View>
           <FlatList  data={products} renderItem={({item})=>
       <View>
           <TouchableOpacity style={Cstyle.proContainer} onPress={()=>{}} >
           <Image style={Cstyle.proImg} source={{uri:item.image}} />
        <View style={Cstyle.Pcontent}>
           <Text style={Cstyle.titleText} numberOfLines={2}>{item.name}</Text>
           <Text style={Cstyle.rate}>{`Rs:${item.totalPrice.toFixed(2)}`}</Text>
           <Text style={Cstyle.category}>{`Category:${item.category}`}</Text>
       <View style={Cstyle.Bcontainer}>
               <TouchableOpacity>
                   <Text style={Cstyle.button2} onPress={()=>{dispatch(cartAction.addToCart(item))}}>
                       +
                   </Text>
               </TouchableOpacity>
               <Text style={{fontWeight:"600",fontSize:20}}>{item.quantity}</Text>
               <TouchableOpacity>
                   <Text style={Cstyle.button2} onPress={()=>{dispatch(cartAction.removeItemCart(item.id))}}>
                       -
                   </Text>
               </TouchableOpacity>
       </View>
       </View>
           </TouchableOpacity>
       </View>
           
       }
       keyExtractor={item => item.id}/>
      </SafeAreaView>
       </>
   )
}

const Cstyle =StyleSheet.create({
   Bcontainer:{
           display:"flex",
           flexDirection:"row",
           alignItems:"center",
           justifyContent:"space-around"
   },
   button2:{
       width:60,
       backgroundColor:"gray",
       height:50,
       fontSize:20,
       textAlign:"center",
       borderRadius:5,
       paddingTop:10,
       textAlignVertical:"center"
   },
   proImg:{
       objectFit:"fill",
       borderRadius:10,
       position:"relative",
       width:130,
       height:130,
       backgroundColor:"gray",
       aspectRatio:1/1
   },
   proContainer:{
       // marginTop:10,
       borderRadius:10,
       borderWidth:1,
       borderColor:"gray",
       backgroundColor:"white",
       margin:7,
       padding:10,
       display:"flex",
       flexDirection:"row",
       gap:20,
   },
   titleText:{
       color:"blue",
       wordWrap: "break-word",
       lineHeight: 20,
       width:180
   },
   rate:{
       fontSize:18,
       fontWeight:"600",
   },
   category:{
       fontSize:15,
       color:"gray",
       textAlign:"bottom"
   },
   Pcontent:{
       display:"flex",
       justifyContent:"space-evenly",
       gap:6
   }
})


