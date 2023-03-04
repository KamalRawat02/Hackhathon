/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Com = props => {
  return (
    <View>
      <View style={styles.item}>
        <View style={styles.itemleft}>
          <TouchableOpacity />
          <Feather name={'user'} size={20} color={'black'} />
          <Text style={styles.itemText}> {props.text}</Text>
        </View>
        {/* <View style={{flex: 0.1}}>
        <View style={styles.circular} />
      </View>

      <View style={{flex: 0.1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={{
            height: 18,
            width: 18,
            backgroundColor: 'red',
            borderRadius: 8,
          }}
        />
      </View> */}
      </View>
      <Text style={{fontWeight: '700', marginStart: 6}}>
        ______________________________________________________
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#9cb6d9',
    padding: 15,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomEndRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    marginBottom: 10,
    elevation: 6,
    marginTop: 10,
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 1,
  },
  itemText: {
    color: '#3b3f3f',
    fontSize: 16,
    marginStart: 3,
  },
  //   circular: {
  //     width: 17,
  //     height: 17,
  //     borderColor: '#ffffff',
  //     borderWidth: 2,

  //     marginEnd: 5,
  //     //flex:0.1,
  //   },
});

export default Com;
