/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Alert,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import ButtonFormat from '../components/ButtonFormate';
import CustomInput from '../components/CustomInput';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const SignUpScreen = ({navigation}) => {
  const [vivi, setVivi] = useState(false);
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailMessage, setEmailMesage] = useState('');
  const [passMessage, setPassMessage] = useState('');
  const [message, setMessage] = useState('');
  const handleSignIn = async () => {
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
      setPassMessage('* Please Set a Password');
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
        const isUserCreated = await auth().createUserWithEmailAndPassword(
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
  function setVisible(arg0: boolean): void {
    throw new Error('Function not implemented.');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled={false}>
      <View style={{flex: 1}}>
        <View style={styles.upperView}>
          <View style={styles.topUpperView}>
            <TouchableOpacity
              style={styles.backButtonStyle}
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../assests/left-chevron.png')}
                style={styles.logoStyle}
              />
            </TouchableOpacity>
            <Text style={styles.signTextStyle}> Sign Up</Text>
          </View>
        </View>
        <View style={styles.middleView}>
          <View style={styles.topMiddleView}>
            {/* <CustomInput
              heading={'Name'}
              value={name}
              onChangeText={value => setName(value)}
              leftIconType={
                <Ionicons name={'person-outline'} size={24} color={'black'} />
              }
            />
            {nameError ? (
              <Text style={{color: 'red', marginLeft: 15, marginBottom: 5}}>
                {nameMessage}
              </Text>
            ) : null} */}
            <CustomInput
              heading={'Email'}
              value={email}
              onChangeText={value => setEmail(value)}
              leftIconType={
                <MaterialIcons
                  name={'mail-outline'}
                  size={25}
                  color={'black'}
                />
              }
            />
            {emailError ? <Text>{emailMessage}</Text> : null}
            <TouchableOpacity onPress={() => setVivi(!vivi)}>
              <CustomInput
                heading={'Password'}
                value={pass}
                onChangeText={value => setPass(value)}
                // leftIconType={
                //   <MaterialCommunityIcons
                //     name={'lock-open-outline'}
                //     size={24}
                //     color={'black'}
                //   />
                // }
                secureTextEntry={vivi}
                // rightIconType={
                //   <Ionicons name={'eye-off'} size={20} color={'black'} />
                // }
              />
            </TouchableOpacity>
            {passError ? <Text>{passMessage}</Text> : null}
          </View>
        </View>
        <View style={styles.lowerView}>
          <ButtonFormat
            buttonStyle={styles.signUpView}
            onpress={() => handleSignIn()}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </ButtonFormat>
          <Text style={{color: '#DFDFDF'}}>__________________</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  signUpView: {
    width: '75%',
    height: '22%',
    backgroundColor: '#1b62bf',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleView: {
    width: '75%',
    height: '22%',
    backgroundColor: '#ffffff',
    elevation: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: '10%',
    marginTop: '4%',
  },
  googleIcon: {height: '97%', width: '20%'},
  googleText: {color: '#7b7d80', fontSize: 17, fontWeight: '700'},
  logoStyle: {
    width: '95%',
    height: '95%',
    //elevation: 10,
  },
  upperView: {flex: 0.3, alignItems: 'center'},
  middleView: {flex: 0.4, alignItems: 'center'},
  lowerView: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topUpperView: {
    width: '90%',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  backButtonStyle: {width: '17%', height: '27%', elevation: 15},
  signTextStyle: {fontSize: 45, fontWeight: 'bold', color: 'black'},
  topMiddleView: {width: '90%'},
  signUpText: {
    color: '#ffffff',
    fontSize: 20,
    elevation: 10,
    shadowColor: 'blue',
    fontWeight: '500',
  },
});

export default SignUpScreen;
