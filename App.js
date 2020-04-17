import React from 'react';
import {View, Image, ScrollView, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const height = width * 0.6;

const images = ["https://i.imgur.com/ad0cUuB.jpg","https://i.imgur.com/7gdtIyN.jpg","https://i.imgur.com/V6bBVyF.jpg","https://i.imgur.com/WQ3gkSo.jpg","https://i.imgur.com/XAGtg4a.jpg","https://i.imgur.com/JMcV63z.jpg"]


export default class App extends React.Component{
render() {
  return(
    <View style={{marginTop: 50, width, height}}>
       <ScrollView pagingEnabled horizontal style={{width, height}}>
{
  images.map((image, index) => (
<Image 
     key={index}
     source={{uri: image}} style={{width, height, resizeMode: 'contain'}}/> 
  ))
}
    </ScrollView>
    </View>
    )
  }
}