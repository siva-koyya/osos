import React, { useState } from "react"
import { FlatList, SafeAreaView, View,StyleSheet,Text,Image,TouchableOpacity } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
import ModalItem  from "../files/Modal";

export default function ProductItem({products}){
    let [mdata,setMdata]=useState("")
    let [modalToggle,setModalToggle]=useState(false)
    return(
       <SafeAreaView>
            <FlatList  scrollEnabled={true}  data={products} renderItem={({item})=>
            <View>
            <TouchableOpacity style={Pstyle.proContainer} onPress={()=>{
                setModalToggle(true)
                setMdata(item)
            }} >
        <Image style={Pstyle.proImg} source={{uri:item.image}} />
        <View style={Pstyle.Pcontent}>
            <Text style={Pstyle.titleText} numberOfLines={2}>{item.title}</Text>
            {/* here rating item.rating.rate */}
            <Text style={{backgroundColor:"",}}> 
            <AntDesign name="staro" size={24} color="black"  style={{backgroundColor:"yellow",
                  WebkitBackgroundClip: "text", 
                  backgroundClip: "text", 
                  color: "transparent"
            }}/>
            <AntDesign name="staro" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
            <Text>    {item.rating.count}</Text>
            </Text>
            <Text style={Pstyle.rate}>{`Rs:${item.price}`}</Text>
            <Text style={Pstyle.category}>{`category:${item.category}`}</Text>
        </View>
            </TouchableOpacity>
        </View>
            
          }
        keyExtractor={item => item.id}/>
          <View style={{padding:10}}>
             {  modalToggle && <ModalItem Mdata={mdata} toggle={setModalToggle}></ModalItem>}
        </View>
       </SafeAreaView>
       
    )
};
const ProductList=({items})=>{
    let item=items
    return(
        <TouchableOpacity style={Pstyle.proContainer}  >
        <Image style={Pstyle.proImg} source={{uri:item.image}} />
        <View style={Pstyle.Pcontent}>
            <Text style={Pstyle.titleText} numberOfLines={2}>{item.title}</Text>
            <Text>{item.name} 
            <AntDesign name="staro" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
            <AntDesign name="staro" size={24} color="black" />
            </Text>
            <Text style={Pstyle.rate}>{`Rs:${item.price}`}</Text>
            <Text style={Pstyle.category}>{`category:${item.category}`}</Text>
        </View>
        </TouchableOpacity>
    )
}

const Pstyle =StyleSheet.create({
    proImg:{
        resizeMode: "contain",
        borderRadius:10,
        position:"relative",
        width:130,
        height:130,
        // backgroundColor:"gray",
        // aspectRatio:1/1
    },
    proContainer:{
        // position :"absolute",
        borderRadius:10,
        borderWidth:1,
        borderColor:"gray",
        // flexWrap:"wrap",
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
        justifyContent:"space-evenly"
    }
})



