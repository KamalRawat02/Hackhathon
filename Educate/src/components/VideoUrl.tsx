/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, TouchableOpacity, View, Linking} from 'react-native';
interface propTypes {
  songname: string;
  imageUrl: string;
  navigation: any;
}

const Video = (props: propTypes) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#cddef8',
        borderRadius: 13,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => Linking.openURL(props.imageUrl)}>
      <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
        {props.songname}
      </Text>
    </TouchableOpacity>
  );
};

export default Video;
