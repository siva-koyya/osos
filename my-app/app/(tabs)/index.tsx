import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { View ,Text} from 'react-native';
// import Header from './header';
import Heading from "../../files/TopHeader"
import Product from "../../files/Product"


export default function HomeScreen() {
  return (
    <View>
      <Heading/>
      <View >
          <Product/>
      </View>
    </View>
  );
}
export const TopHeader=()=>{
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
      borderRadius:8,
      width:"auto",
      height:50,
      backgroundColor:"#30F2F2",
      borderColor:"gray"
  },
  headerTitle: {
    fontSize:28,
    // fontFamily:""
  },
  // : {
  //   gap: 8,
  //   marginBottom: 8,
  // },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
