import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Button} from 'react-native';
import firestore from '@react-native-firebase/firestore';
const Profile = () => {
  const [name, setName] = useState('');
  const [enrol, setEnrol] = useState('');
  const [phone, setPhone] = useState('');
  const ID = auth().currentUser?.uid;
  console.log(ID);
  const handleSubmit = async () => {
    const response = {
      name: name,
      enrollment: enrol,
      phone: phone,
    };
    await firestore().collection('Users').doc(ID).set(response);
  };
  return (
    <View style={{flex: 1}}>
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
      <Button title="Submit" onPress={() => handleSubmit()} />
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
