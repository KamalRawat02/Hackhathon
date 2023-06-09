/* eslint-disable react-native/no-inline-styles */
import {StackActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Alert,
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Doubtssc from '../components/doubtssc';
import Sslist from '../components/list2';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import ModelComp from '../components/ModComp';

const Doubts = ({navigation}) => {
  const [doubtModal, setDoubtModal] = useState(false);
  const [text, setText] = useState('');
  const [imageData, setImageData] = useState();

  const [DATA, setData] = useState([
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
  ]);
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
  const cameraPermission = async () => {
    try {
      const result = await launchImageLibrary({mediaType: 'photo'});
      setImageData(result);
      // console.log(url);
    } catch (err) {
      console.warn(err);
    }
  };
  const [modalVisible, setModalVisible] = useState(false);
  const submitDoubt = () => {
    const temp = {
      id: '7',
      songname: text,
      imageUrl:
        'https://user-images.githubusercontent.com/49961658/106075478-4fe97d00-60d3-11eb-9522-0b87eb266b65.png',
    };
    setData([...DATA, temp]);
  };
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="height" enabled={false}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={doubtModal}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setDoubtModal(!doubtModal);
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#00000060',
            }}>
            <View
              style={{
                height: '40%',
                width: '80%',
                backgroundColor: 'white',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                borderRadius: 10,
                elevation: 20,
              }}>
              <Button title="Select Image" onPress={() => cameraPermission()} />
              <TextInput
                style={{
                  width: '90%',
                  height: '15%',
                  borderWidth: 1,
                  padding: 10,
                }}
                onChangeText={value => setText(value)}
                value={text}
              />
              <Button title="Submit" onPress={() => submitDoubt()} />
            </View>
          </View>
        </Modal>
      </KeyboardAvoidingView>
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

      <View style={{flex: 0.85}}>
        <FlatList
          data={DATA}
          renderItem={renderItem2}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        onPress={() => setDoubtModal(!doubtModal)}
        style={{
          position: 'absolute',
          top: '90%',
          left: '86%',
          //backgroundColor: 'white',
        }}>
        <Feather name={'plus-circle'} size={40} color={'black'} />
      </TouchableOpacity>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#00000050',
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
