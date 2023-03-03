/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  Modal,
  Pressable,
} from 'react-native';
import Auth from '@react-native-firebase/auth';
import {useNavigation, StackActions} from '@react-navigation/native';
import {KeyboardAvoidingView} from 'react-native';
import {Image, ScreenWidth} from '@rneui/base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import Task from '../components/Task';
import {BackHandler} from 'react-native/Libraries/Utilities/BackHandler';
import VideoResources from './VideoResources';
const Dashboard = ({navigation}) => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
    console.log(taskItems);
  };
  const completeTask = index => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled={false}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{flex: 0.05}}>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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
                    height: 40,
                    width: 220,
                    backgroundColor: '#c0cdde',
                    marginHorizontal: '10%',
                    marginTop: '5%',
                    borderRadius: 10,
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      marginStart: '5%',
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
                    height: 40,
                    width: 220,
                    backgroundColor: '#c0cdde',
                    marginHorizontal: '10%',
                    marginTop: '5%',
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
              <TouchableOpacity>
                <View
                  style={{
                    height: 40,
                    width: 220,
                    backgroundColor: '#c0cdde',
                    marginHorizontal: '10%',
                    marginTop: '5%',
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
              <TouchableOpacity>
                <View
                  style={{
                    height: 40,
                    width: 220,
                    backgroundColor: '#c0cdde',
                    marginHorizontal: '10%',
                    marginTop: '5%',
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
            </View>
            <View
              style={{
                flex: 0.1,
                // backgroundColor: 'blue',
              }}>
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
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image
                  source={{
                    uri: 'https://i.pinimg.com/originals/d1/94/d7/d194d7193cd245643591d6e90c8bfdbc.jpg',
                  }}
                  style={styles.logoStyle}
                />
              </TouchableOpacity>
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
      <View style={{flex: 0.25}}>
        <Text
          style={{
            color: '#343333',
            fontSize: 26,
            fontWeight: '600',
            marginStart: '5%',
          }}>
          What's New Today,
        </Text>
        <View
          style={{
            flex: 0.9,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 0.9,
              backgroundColor: '#458BE7',
              width: '92%',
              borderRadius: 13,
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 0.7,
                  backgroundColor: '#458BE7',
                  borderWidth: 1,
                  width: '50%',
                  borderColor: 'black',
                  borderRadius: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: 'white', fontWeight: '400', fontSize: 45}}>
                  A
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 10}}>Attendance</Text>
              <Text style={{color: 'white', fontSize: 45}}>82%</Text>
              <View
                style={{
                  height: 30,
                  width: 60,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#454747',
                  borderRadius: 10,
                }}>
                <Text style={{color: 'white'}}>Score</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{flex: 0.55}}>
        <View style={{flex: 0.15}}>
          <Text
            style={{
              color: '#343333',
              fontSize: 20,
              fontWeight: '500',
              marginStart: '5%',
            }}>
            Things to do,
          </Text>
          <Text style={{color: '#343333', fontSize: 13, marginStart: '5%'}}>
            update yourself for better
          </Text>
        </View>
        <View style={{flex: 0.85}}>
          <ScrollView>
            <View style={styles.Item}>
              {taskItems.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => completeTask(index)}>
                    <Task text={item} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>

      <View style={{flex: 0.075, flexDirection: 'row'}}>
        <View
          style={{
            // backgroundColor: 'yellow',
            flex: 0.7,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              height: '80%',
              width: '95%',
              backgroundColor: '#a9cbff',
              borderRadius: 10,
            }}
            value={task}
            onChangeText={text => setTask(text)}
            placeholder="Write Task"
          />
        </View>
        <View
          style={{flex: 0.3, justifyContent: 'center', alignContent: 'center'}}>
          <TouchableOpacity onPress={() => handleAddTask()}>
            <View
              style={{
                height: '87%',
                width: '95%',
                borderRadius: 10,
                backgroundColor: '#4E5254',
                marginTop: '2%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '500'}}>
                Add Task
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoStyle: {
    width: '95%',
    height: '99%',
    //elevation: 10,
    borderRadius: 50,
  },
  Item: {
    marginHorizontal: '5%',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#00000050',
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
