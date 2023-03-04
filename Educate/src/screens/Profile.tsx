/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {TouchableOpacity} from 'react-native';
import {ScreenWidth} from '@rneui/base';
import CustomInput from '../components/CustomInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
const Profile = () => {
  const [name, setName] = useState('');
  const [enrol, setEnrol] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [branch, setBranch] = useState('');
  const [course, setCourse] = useState('');
  const ID = auth().currentUser?.uid;
  console.log(ID);
  const handleSubmit = async () => {
    const response = {
      name: name,
      enrollment: enrol,
      phone: phone,
      course: course,
      branch: branch,
    };
    await firestore().collection('Users').doc(ID).set(response);
  };
  const temp = async () => {
    const apk = await firestore().collection('Users').doc(ID).get();
    console.log(apk);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color:'black',fontSize:30,fontWeight:'600'}}>
        Profile
      </Text>
      <View
        style={{
          flex: 0.7,
          backgroundColor: 'white',
          width: '90%',
          borderRadius: 10,
          elevation: 10,
        }}>
        <CustomInput
          onChangeText={value => setName(value)}
          value={name}
          heading={'Name'}
          leftIconType={
            <MaterialCommunityIcons
              name={'face-man-profile'}
              size={24}
              color={'black'}
            />
          }
        />
        <CustomInput
          onChangeText={value => setEnrol(value)}
          value={enrol}
          heading={'Enrollment No.'}
          leftIconType={<Octicons name={'number'} size={24} color={'black'} />}
        />
        <CustomInput
          onChangeText={value => setPhone(value)}
          value={phone}
          heading={'Phone No.'}
          leftIconType={
            <MaterialCommunityIcons
              name={'card-account-phone-outline'}
              size={24}
              color={'black'}
            />
          }
        />
        <CustomInput
          onChangeText={value => setCourse(value)}
          value={course}
          heading={'Course'}
          leftIconType={
            <MaterialCommunityIcons
              name={'account-tie-outline'}
              size={24}
              color={'black'}
            />
          }
        />
        <CustomInput
          onChangeText={value => setBranch(value)}
          value={branch}
          heading={'Branch'}
          leftIconType={
            <MaterialCommunityIcons
              name={'source-branch'}
              size={24}
              color={'black'}
            />
          }
        />
        <View
          style={{
            height: 60,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={{
              height: 40,
              width: 140,
              backgroundColor: '#1b62bf',
              borderRadius: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white',fontWeight:'600',fontSize:17}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});