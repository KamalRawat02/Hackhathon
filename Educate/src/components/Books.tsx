/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Linking} from 'react-native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
interface propTypes {
  songname: string;
  imageUrl: string;
  photoUrl: string;
  navigation: any;
  poet: string;
}

const Book = (props: propTypes) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: '#cddef8',
        borderRadius: 13,
        height: 235,
        alignItems: 'center',
        // justifyContent: 'center',
      }}
      onPress={() => Linking.openURL(props.imageUrl)}>
      <View
        style={{
          height: '80%',
          width: '98%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={{
            uri: props.photoUrl,
          }}
          style={{width: '98%', height: '98%', borderRadius: 5}}
        />
      </View>
      <View
        style={{
          height: '20%',
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
      <Text style={{color: 'gray'}}>{props.poet}</Text>
    </TouchableOpacity>
  );
};

export default Book;
