/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ScrollView,
  ScrollViewBase,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Com from '../components/Com';
import Task from '../components/Task';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
export default function Comment() {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    setTaskItems([...taskItems, task]);
    setTask('');
    console.log(taskItems);
  };
  //   const completeTask = index => {
  //     let itemsCopy = [...taskItems];
  //     itemsCopy.splice(index, 1);
  //     setTaskItems(itemsCopy);
  //   };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.taskWrapper}>
          <Text style={styles.TodaysFnt}>Top Comment</Text>
          <Text style={{fontWeight: '700'}}>
            ___________________________________________
          </Text>
          <View style={styles.Item}>
            {taskItems.map((item, index) => {
              return (
                <TouchableOpacity
                  disabled={true}
                  key={index}
                  //onPress={() => completeTask(index)}
                >
                  <Com text={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>

      <View style={styles.LastView}>
        <TextInput
          style={styles.input}
          placeholder={'Write a Task'}
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.Addwrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9CCE3 ',
  },
  taskWrapper: {
    paddingTop: '10%',
    paddingHorizontal: '2%',
    // backgroundColor: '#2980B9',
    // borderBottomEndRadius: 45,
    // borderBottomStartRadius: 45,
  },
  TodaysFnt: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#212F3C',
    // fontStyle:'Cochin',
  },
  Item: {
    marginTop: '30%',
  },
  // writeatask: {
  //   position: 'absolute',
  //   bottom: 60,
  //   width: '100',
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  input: {
    paddingVertical: '2%',
    paddingHorizontal: '5%',
    backgroundColor: '#FFF',
    borderRadius: 10,
   // borderColor: 'gray',
    //borderWidth: 1,
    width: '75%',
    elevation: 6,
    height: '65%',
    marginTop: 10,
    marginStart: 15,
    marginEnd: 10,
  },
  Addwrapper: {
    width: 50,
    height: 48,
    backgroundColor: '#3b3f3f',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
   // borderColor: 'gray',
    //borderWidth: 1,
    elevation: 6,
    marginTop: 10,
  },
  addText: {
    fontWeight: 'bold',
    fontSize: 30,
    color:'white'
  },
  LastView: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: 'stretch',
    flexDirection: 'row',
    //justifyContent: 'space-evenly',
    // marginBottom: 10,
    backgroundColor: '#458be7',
    height: 70,
    // eslint-disable-next-line no-dupe-keys
    alignItems: 'center',
    borderTopEndRadius:15,
    borderTopStartRadius:15
  },
});
