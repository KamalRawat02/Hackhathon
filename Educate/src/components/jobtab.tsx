/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, View} from 'react-native';
interface propTypes {
  title: string;
  companyname: string;
  address: string;
  stipend: string;
  jobtype: string;
  navigation: any;
  date: string;
}

const Joblist = (props: propTypes) => {
  return (
    <View style={{backgroundColor: '#A9CBFF', borderRadius: 13, height: 150}}>
      <View style={{marginStart: 6, marginTop: 4}}>
        <Text style={{color: 'black', fontSize: 17, fontWeight: '500'}}>
          {props.title}
        </Text>
        <Text style={{color: 'gray', fontSize: 12}}>{props.companyname}</Text>
        <Text style={{color: 'gray', fontSize: 12}}>{props.address}</Text>
        <Text style={{color: 'black', fontSize: 12, fontWeight: '600'}}>
          From ₹{props.stipend} a month
        </Text>
      </View>
      <View style={{flexDirection: 'row', height: 65}}>
        <View
          style={{
            flex: 0.5,
            //backgroundColor: 'yellow',
            justifyContent: 'flex-end',
          }}>
          <View
            style={{
              height: 30,
              width: 85,
              backgroundColor: '#3b3f3f',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              margin: 6,
            }}>
            <Text style={{color: 'white'}}>Apply</Text>
          </View>
        </View>
        <View style={{flex: 0.5, flexDirection: 'column'}}>
          <View style={{flex: 0.5, alignItems: 'flex-end', marginEnd: 6}}>
            <View
              style={{
                height: 30,
                width: 90,
                backgroundColor: '#dfe6ea',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#3b3f3f', fontSize: 13, fontWeight: '500'}}>
                {props.jobtype}
              </Text>
            </View>
          </View>
          <View style={{flex: 0.5, alignItems: 'flex-end', marginEnd: 6}}>
            <View
              style={{
                height: 30,
                width: 90,
                backgroundColor: '#dfe6ea',
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={{color: '#3b3f3f', fontSize: 13, fontWeight: '500'}}>
                {props.date}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Joblist;
