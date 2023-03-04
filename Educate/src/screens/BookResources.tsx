/* eslint-disable react-native/no-inline-styles */
import {StackActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Book from '../components/Books';
import Video from '../components/VideoUrl';

const BookResources = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      id: '1',
      songname: 'Machine Learning',
      imageUrl:
        'https://www.amazon.in/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/9355421982',
      poet: 'Aurllien sauce',
    },
    {
      id: '2',
      songname: 'Coding Interview',
      imageUrl:
        'https://www.amazon.in/Cracking-Coding-Interview-Programing-Questions/dp/0984782850',
        poet: 'Gayle Laakmaan',
    },
    {
      id: '3',
      songname: 'Alorithum',
      imageUrl:
        'https://mitpress.mit.edu/9780262533058/introduction-to-algorithms/',
        poet: 'MIT Press',
      },
    {
      id: '4',
      songname: 'Let Us C',
      imageUrl:
        'https://www.amazon.in/Let-Us-C-Yashavant-Kanetkar/dp/8183331637',
        poet: 'YashWant kanetkar',
    },
    {
      id: '5',
      songname: 'Python Programming',
      imageUrl:
        'https://www.amazon.in/b?ie=UTF8&node=14447053031',
        poet: 'J.K Rolling',
    },
    {
      id: '6',
      songname: 'Think like a programmer',
      imageUrl:
        'https://www.amazon.in/Think-Like-Programmer-Introduction-Creative/dp/1593274246',
        poet: 'Dr.Chinmay Pathak',
      },
  ];
  const renderItem2 = ({item}) => {
    return (
      <View style={styles.cardView2}>
        <Book
          songname={item.songname}
          navigation={undefined}
          imageUrl={item.imageUrl}
          poet={item.poet}
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
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
                  // navigation.navigate('Login');
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
            Hi, there
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
          Books to Refer,
        </Text>
        <Text style={{marginStart: '4%', fontSize: 11, color: '#343333'}}>
          Good Books can make your brain work,
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

export default BookResources;
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
