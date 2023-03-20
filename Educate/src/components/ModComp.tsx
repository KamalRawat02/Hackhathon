/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, FlatList, Modal, TouchableOpacity} from 'react-native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const ModelComp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  function Auth() {
    throw new Error('Function not implemented.');
  }

  return (
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <View style={{flex: 0.05}}>
          <TouchableOpacity
            style={{marginStart: '2%'}}
            onPress={() => setModalVisible(!modalVisible)}>
            <Entypo name={'cross'} size={35} color={'black'} />
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.3, marginTop: '5%'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              fontWeight: '600',
              marginStart: '2%',
            }}>
            Time Table
          </Text>

          <Text style={{marginStart: '2%'}}>Let's Organize Yourself,</Text>
          <View
            style={{
              height: '70%',
              width: '85%',
              //backgroundColor: 'red',
              marginHorizontal: '7.5%',
              marginVertical: '5%',
              borderRadius: 10,
            }}>
            <Image
              source={require('../assests/time.png')}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: 10,
                //marginTop: 3,
              }}
            />
          </View>
        </View>
        <View style={{flex: 0.4, marginTop: '5%'}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: '600',
              color: 'black',
              marginHorizontal: '5%',
              marginTop: '5%',
            }}>
            Resouces
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('VideoResources')}>
            <View
              style={{
                height: 43,
                width: 220,
                backgroundColor: '#c0cdde',
                marginHorizontal: '10%',
                marginTop: '8%',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  marginStart: '8%',
                }}>
                Video Resources
              </Text>
              <Text style={{fontSize: 8, marginStart: '5%'}}>
                Video to help you grow
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookResources')}>
            <View
              style={{
                height: 43,
                width: 220,
                backgroundColor: '#c0cdde',
                marginHorizontal: '10%',
                marginTop: '8%',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  marginStart: '5%',
                }}>
                Book Resources
              </Text>
              <Text style={{fontSize: 8, marginStart: '5%'}}>
                Books to Refer
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Roadmaps')}>
            <View
              style={{
                height: 43,
                width: 220,
                backgroundColor: '#c0cdde',
                marginHorizontal: '10%',
                marginTop: '8%',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  marginStart: '5%',
                }}>
                Roadmaps
              </Text>
              <Text style={{fontSize: 8, marginStart: '5%'}}>
                A guide to help you out
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Cheat')}>
            <View
              style={{
                height: 43,
                width: 220,
                backgroundColor: '#c0cdde',
                marginHorizontal: '10%',
                marginTop: '8%',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: '600',
                  marginStart: '5%',
                }}>
                Cheat-Sheets
              </Text>
              <Text style={{fontSize: 8, marginStart: '5%'}}>
                To learn on the Go.
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={async () => {
              await Auth().signOut();
              navigation.dispatch(StackActions.replace('SignUpScreen'));
            }}>
            <Text
              style={{
                color: 'gray',
                fontSize: 20,
                fontWeight: '500',
                marginStart: '6%',
                marginTop: '3%',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ModelComp;
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
    height: 100,
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
