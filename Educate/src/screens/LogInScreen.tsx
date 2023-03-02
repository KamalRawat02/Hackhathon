import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const LogInScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailMessage, setEmailMesage] = useState('');
  const [passMessage, setPassMessage] = useState('');
  //   const [message, setMessage] = useState('');
  const handleLogIn = async () => {
    let res = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (email === '') {
      setEmailError(true);
      setEmailMesage('* Please Enter Email');
    } else if (res.test(email) === false) {
      setEmailError(true);
      setEmailMesage('* Please Enter Valid Email');
    } else if (pass === '') {
      setPassError(true);
      setEmailError(false);
      setEmailMesage('');
      setPassMessage('* Please Enter Password');
    } else if (pass.length < 6) {
      setEmailMesage('');
      setEmailError(false);
      setPassError(true);
      setPassMessage('* Password should be of minimum 6 character');
    } else {
      setEmailError(false);
      setPassError(false);
      console.log('hii');
      //   navigation.navigate('Dashboard');
      try {
        const isUserCreated = await auth().signInWithEmailAndPassword(
          email,
          pass,
        );
        console.log(isUserCreated);
        // alert('User Created');
        navigation.navigate('Dashboard');
      } catch (err) {
        console.log(err);

        //     // setMessage(err?.message);
      }
    }
  };
  return (
    <View>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} />
      {emailError ? <Text>{emailMessage}</Text> : null}
      <TextInput
        style={styles.input}
        onChangeText={setPass}
        value={pass}
        placeholder="useless placeholder"
      />
      {passError ? <Text>{passMessage}</Text> : null}
      <Button title="Submit" onPress={() => handleLogIn()} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LogInScreen;
