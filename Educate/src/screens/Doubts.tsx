/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Text} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Doubtssc from '../components/doubtssc';
import Sslist from '../components/list2';

const Doubts = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      songname:
        'I was facing some issues with this for loop code,Its just wont work kindly someone check the code please',
      imageUrl:
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/c-for-loop.JPG',
    },
    {
      id: '2',
      songname:
        'I am having some kind odf issue with this if else code, I cheacked it already but unable to find code problem',
      imageUrl:
        'https://linuxhint.com/wp-content/uploads/2021/09/Programming-examples-cpp-02.png',
    },
    {
      id: '3',
      songname:
        'can someone look for the  problem in the code its just dosent work',
      imageUrl:
        'https://www.tutorialgateway.org/wp-content/uploads/C-Program-to-Calculate-Profit-or-Loss-1-1.png?ezimgfmt=ng:webp/ngcb214',
    },
    {
      id: '4',
      songname:
        'I was facing some issues with this for loop code,Its just wont work kindly someone check the code please',
      imageUrl:
        'https://www.simplilearn.com/ice9/free_resources_article_thumb/c-for-loop.JPG',
    },
    {
      id: '5',
      songname:
        'I am having some kind odf issue with this if else code, I cheacked it already but unable to find code problem',
      imageUrl:
        'https://linuxhint.com/wp-content/uploads/2021/09/Programming-examples-cpp-02.png',
    },
    {
      id: '6',
      songname:
        'can someone look for the  problem in the code its just dosent work',
      imageUrl:
        'https://www.tutorialgateway.org/wp-content/uploads/C-Program-to-Calculate-Profit-or-Loss-1-1.png?ezimgfmt=ng:webp/ngcb214',
    },
  ];
  const renderItem2 = ({item}) => {
    return (
      <View style={styles.cardView2}>
        <TouchableOpacity onPress={() => navigation.navigate('Comment')}>
          <Doubtssc
            songname={item.songname}
            navigation={undefined}
            imageUrl={item.imageUrl}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 0.125, flexDirection: 'row'}}>
        <View style={{flex: 0.15}}>
          <View
            style={{
              width: 45,
              height: 45,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 25,
              marginStart: '15%',
            }}>
            <View
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 50,
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://i.pinimg.com/originals/d1/94/d7/d194d7193cd245643591d6e90c8bfdbc.jpg',
                }}
                style={styles.logoStyle}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            //backgroundColor: 'blue',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              color: '#343333',
              fontSize: 25,
              fontWeight: '600',
              marginStart: '5%',
              marginBottom: '5%',
            }}>
            Hi, Kate
          </Text>
        </View>
        <View
          style={{
            flex: 0.45,
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              flex: 0.3,
              // backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Feather name={'bell'} size={27} color={'black'} />
          </View>
          <View
            style={{
              flex: 0.3,
              //backgroundColor: 'green',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Octicons name={'three-bars'} size={27} color={'black'} />
          </View>
        </View>
      </View>
      <View style={{flex: 0.08}}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '600',
            marginStart: '3%',
            color: '#343333',
          }}>
          Lets Resolve,
        </Text>
        <Text style={{marginStart: '4%', fontSize: 11, color: '#343333'}}>
          One stop solution...
        </Text>
      </View>
      <View style={{flex: 0.85}}>
        <FlatList
          data={DATA}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default Doubts;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoStyle: {
    width: '95%',
    height: '95%',
    //elevation: 10,
    borderRadius: 50,
  },
  cardView2: {
    width: '95%',
    marginTop: 10,
    height: 270,
    marginHorizontal: 10,
    borderRadius: 5,
  },
});
