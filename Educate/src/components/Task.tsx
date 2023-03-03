import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Task = props => {
  return (
    <View style={styles.item}>
      <View style={styles.itemleft}>
        <TouchableOpacity />
        <Text style={styles.itemText}> {props.text}</Text>
      </View>
      <View style={{flex: 0.1}}>
        <View style={styles.circular} />
      </View>

      <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
        <View
          style={{height: 18, width: 18, backgroundColor: 'red',borderRadius:8}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#8db1e0',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'space-between',
    marginBottom: 10,
    elevation: 6,
  },
  itemleft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    flex: 0.8,
  },
  itemText: {
    color: 'black',
    fontSize: 16,
    marginStart: 3,
  },
  circular: {
    width: 17,
    height: 17,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 10,
    marginEnd: 5,
    //flex:0.1,
  },
});

export default Task;
