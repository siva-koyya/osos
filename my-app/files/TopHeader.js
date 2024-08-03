import React from "react"
import { View,Text,StyleSheet } from "react-native";
export default function Topheader(){
    return(
     <View>
       <View style={styles.headerContainer}>
         <Text style={styles.headerTitle}>Shopping</Text>
       </View>
     </View>
    )
   }

   const styles = StyleSheet.create({
    headerContainer:{
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      margin:2,
      width:"auto",
      height:70,
      backgroundColor:"#80D9E1",
      borderColor:"gray"
    },
    headerTitle: {
      textDecorationLine:"underline",
      fontSize:28,
    },
    
  });
  