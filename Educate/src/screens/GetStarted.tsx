import React from 'react';
import {Text, View, Image, StyleSheet, ImageBackground} from 'react-native';
import ButtonFormat from '../components/ButtonFormate';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.container}
      source={require('../assests/grad.jpg')}
      resizeMode="cover">
      <View style={styles.upperView}>
        <View style={styles.upperInsideView}>
          <Text style={styles.welcomeText}>Welcome to</Text>
          <Text style={{color:'white',fontSize:60,fontWeight:'600'}}>
            Educate
          </Text>
          <Image
            source={require('../assests/rafiki.png')}
            style={styles.photostyle}
          />
        </View>
      </View>
      <View style={styles.lastView}>
        <ButtonFormat
          buttonStyle={styles.RegisterBu}
          onpress={() => navigation.navigate('SignUpScreen')}>
          <Text style={styles.RegisterText}>Register</Text>
        </ButtonFormat>
      </View>
      <View style={styles.lowerView}>
        <ButtonFormat
          buttonStyle={styles.forwardButton}
          onpress={() => navigation.navigate('LogInScreen')}>
          <Text style={styles.startedText}>Log in</Text>
        </ButtonFormat>
      </View>
    </ImageBackground>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperView: {flex: 0.7},
  upperInsideView: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    marginTop: '20%',
  },
  welcomeText: {color: 'white', fontSize: 20, fontWeight: 'bold'},
  logoStyle: {height: '14%', width: '60%'},
  lowerView: {flex: 0.15, alignItems: 'center'},
  lastView: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photostyle: {
    height: '49%',
    width: '70%',
    marginTop: '23%',
  },
  forwardButton: {
    height: '38%',
    width: '65%',
    backgroundColor: 'white',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 9,
    shadowColor: 'white',
  },

  RegisterBu: {
    height: '38%',
    width: '65%',
    backgroundColor: '#2a66c7',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    elevation: 9,
    shadowColor: '#4577c8',
  },
  startedText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#063a8d',
    marginRight: 5,
  },
  RegisterText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    marginRight: 5,
  },
  arrowStyle: {height: '40%', width: '10%'},
});
