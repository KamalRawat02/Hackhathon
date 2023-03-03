import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  PermissionsAndroid,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {utils} from '@react-native-firebase/app';
import storage from '@react-native-firebase/storage';
const Profile = () => {
  const [name, setName] = useState('');
  const [enrol, setEnrol] = useState('');
  const [phone, setPhone] = useState('');
  const [imageData, setImageData] = useState();
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
  // const cameraPermission = async () => {
  //   try {
  //     const result = await launchImageLibrary({mediaType: 'photo'});
  //     setImageData(result);
  //     console.log(imageData);
  //     const reference = storage().ref(imageData.assests[0].fileName);
  //     const pathfile = imageData.assests[0].uri;
  //     await reference.putFile(pathfile);
  //     const url = await storage()
  //       .ref(imageData.assests[0].fileName)
  //       .getDownloadURL();
  //     console.log(url);
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };
  return (
    <View style={{flex: 1}}>
      <View
        style={{flex: 0.3, alignItems: 'center', justifyContent: 'flex-end'}}>
        {/* {imageData !== null ? (
          <Image source={{uri: imageData?.assests[0]?.uri}} />
        ) : null} */}
        <Button title="Select Image" onPress={() => cameraPermission()} />
      </View>
      <View>
        <TextInput
          style={styles.input}
          onChangeText={value => setName(value)}
          value={name}
          placeholder={'Name'}
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setEnrol(value)}
          value={enrol}
          placeholder={'Enrollment No.'}
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setPhone(value)}
          value={phone}
          placeholder={'Phone No.'}
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setCourse(value)}
          value={course}
          placeholder={'Course'}
        />
        <TextInput
          style={styles.input}
          onChangeText={value => setBranch(value)}
          value={branch}
          placeholder={'Branch'}
        />
        <Button title="Submit" onPress={() => handleSubmit()} />
        {/* <Button title="GET" onPress={() => temp()} /> */}
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
