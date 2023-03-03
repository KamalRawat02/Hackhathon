/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
interface propTypes {
  songname: string;
  imageUrl: string;
  navigation: any;
  date: string;
}

const Sslist = (props: propTypes) => {
  return (
    <View style={{backgroundColor: '#A9CBFF',borderRadius:13}}>
      <View style={{height: '70%',alignItems:"center",justifyContent:'center'}}>
        <Image
          source={{
            uri: props.imageUrl,
          }}
          style={{width: '98%', height: '98%', borderRadius: 12,marginTop:3}}
        />
      </View>
      <View style={{height: 40,marginStart:7}}>
        <Text style={{fontWeight: '500', color: '#5f6565'}}>
          {props.songname}
        </Text>
      </View>

      <View style={{height: 42, flexDirection: 'row'}}>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: 30,
              backgroundColor: '#3b3f3f',
              width: 100,
              marginStart: 10,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontWeight: '400'}}>Register</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.5,
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <View
            style={{
              height: 30,
              backgroundColor: '#dfe6ea',
              width: 100,
              marginEnd: 10,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color:'gray',fontSize:12,fontWeight:'600'}}>{props.date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Sslist;
