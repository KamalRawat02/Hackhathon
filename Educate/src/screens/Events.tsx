/* eslint-disable react-native/no-inline-styles */
import {StackActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {Alert, FlatList, Modal, TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Sslist from '../components/list2';
import ModelComp from '../components/ModComp';

const Events = ({navigation}) => {
  const DATA = [
    {
      id: '1',
      songname: 'Hackathon 2023,Indore Institute of science and technology',
      imageUrl:
        'https://media.istockphoto.com/id/1189767039/vector/hackathon-concept-card-poster-paper-art-design-vector.jpg?s=612x612&w=0&k=20&c=WDdWorasVBtvfMziuL51DjRMQRz9wVd1yPtBp1y3Ey8=',
      date: '04/03/2023',
    },
    {
      id: '2',
      songname: 'Cultural Fest 2023,Indore Institute of science and Technology',
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-color-atmosphere-campus-singing-program-background-design-backgroundsinging-program-backgroundmicrophonesingergeometric-image_70039.jpg',
      date: '04/03/2023',
    },
    {
      id: '3',
      songname:
        'Debate competition 2023,Indore Institute of science and technology',
      imageUrl:
        'https://www.shutterstock.com/image-vector/political-debate-concept-candidates-speaking-260nw-2252935865.jpg',
      date: '04/03/2023',
    },
    {
      id: '4',
      songname: 'Cultural Fest 2023,Indore Institute of science and Technology',
      imageUrl:
        'https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-color-atmosphere-campus-singing-program-background-design-backgroundsinging-program-backgroundmicrophonesingergeometric-image_70039.jpg',
      date: '04/03/2023',
    },
    {
      id: '5',
      songname:
        'Debate competition 2023,Indore Institute of science and technology',
      imageUrl:
        'https://www.shutterstock.com/image-vector/political-debate-concept-candidates-speaking-260nw-2252935865.jpg',
      date: '04/03/2023',
    },
    {
      id: '6',
      songname: 'Hackathon 2023,Indore Institute of science and technology',
      imageUrl:
        'https://media.istockphoto.com/id/1189767039/vector/hackathon-concept-card-poster-paper-art-design-vector.jpg?s=612x612&w=0&k=20&c=WDdWorasVBtvfMziuL51DjRMQRz9wVd1yPtBp1y3Ey8=',
      date: '04/03/2023',
    },
  ];
  const renderItem2 = ({item}) => {
    return (
      <View style={styles.cardView2}>
        <Sslist
          songname={item.songname}
          navigation={undefined}
          imageUrl={item.imageUrl}
          date={item.date}
        />
      </View>
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            //Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <ModelComp naviagtion={undefined} />
        </Modal>
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
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                flex: 0.3,
                //backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Octicons name={'three-bars'} size={27} color={'black'} />
            </TouchableOpacity>
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
            Upcoming Events,
          </Text>
          <Text style={{marginStart: '4%', fontSize: 11, color: '#343333'}}>
            Get updates on upcoming events..!
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
    </>
  );
};

export default Events;

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
  modalView: {
    margin: '3%',
    backgroundColor: 'white',
    borderRadius: 10,
    //padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '95%',
    width: '65%',
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#00000050',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
