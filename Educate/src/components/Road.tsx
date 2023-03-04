/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View, Linking} from 'react-native';
interface propTypes {
  songname: string;
  imageUrl: string;
  low: string;
  navigation: any;
}

const Road = (props: propTypes) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#cddef8',
        borderRadius: 13,
        height: 80,
        alignItems: 'center',
        // justifyContent: 'center',
      }}
      onPress={() => Linking.openURL(props.imageUrl)}>
      <View
        style={{
          height: '65%',
          width: '98%',
          backgroundColor: '#458be7',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1%',
          borderRadius: 10,
        }}>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
          {props.songname}
        </Text>
      </View>
      <Text style={{color: 'gray'}}>{props.low}</Text>
    </TouchableOpacity>
  );
};

export default Road;
