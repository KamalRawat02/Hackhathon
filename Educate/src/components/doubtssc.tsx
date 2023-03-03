/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
interface propTypes {
  songname: string;
  imageUrl: string;
  navigation: any;
}

const Doubtssc = (props: propTypes) => {
  return (
    <View style={{backgroundColor: '#cddef8', borderRadius: 13}}>
      <View
        style={{height: '70%', alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            height: '98%',
            width: '98%',
            backgroundColor: '#458be7',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 14,
            marginTop: 4,
          }}>
          <Image
            source={{
              uri: props.imageUrl,
            }}
            style={{
              width: '80%',
              height: '90%',
              borderRadius: 12,
              marginTop: 3,
            }}
          />
        </View>
      </View>
      <View style={{height: 40, marginStart: 7}}>
        <Text style={{fontWeight: '500', color: '#5f6565', fontSize: 12}}>
          {props.songname}
        </Text>
      </View>

      <View
        style={{height: 42, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: '#f0f4fa',
            height: 30,
            width: '90%',
            borderRadius: 8,
          }}>
          <Text
            style={{
              color: 'gray',
              marginStart: 10,
              marginTop: 2,
              fontWeight: '500',
            }}>
            Comment..
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Doubtssc;
