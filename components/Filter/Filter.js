import React from 'react';
import {TouchableOpacity,
         View, 
         Picker,
         Image} from 'react-native';
import { styles } from './../styles';   
import { Search } from '../../assets/images/images'; 
    

export default class Filter extends React.Component { 
 render() {
   return (
     <View style={styles.containerfilter}>
  
      <Picker style={{width:'60%', marginLeft:15}} >
      
      <Picker label='Select Filter' value='' />
  <Picker label='Area 60~80 mts²' value='usableAreaTipo1' />
  <Picker label='Area 80~100 mts²' value='usableAreaTipo2' />
  <Picker label='Area 100~120 mts²' value='usableAreaTipo3'/>

  <Picker label='01 Bedroom' value='bedroomsTipo1' />
  <Picker label='02 Bedroom(s)' value='bedroomsTipo2' />
  <Picker label='03 Bedroom(s)' value='bedroomsTipo3'/>

  <Picker label='01 Bathroom' value='bathroomsTipo1' />
  <Picker label='02 Bathroom(s)' value='bathroomsTipo2' />

  <Picker label='01 Parking Space' value='parkingSpacesTipo1' />
  <Picker label='02 Parking Space(s)' value='parkingSpacesTipo2' />
  <Picker label='03 Parking Space(s)' value='parkingSpacesTipo3'/>  
      
      </Picker>
    
        <TouchableOpacity onPress={() => console.warn('Go!!!!!')}>

           <Image source={ Search } style={styles.icon} />
           
       </TouchableOpacity>
      
           </View>
   );
 }
}
