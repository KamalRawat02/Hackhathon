/* eslint-disable react-native/no-inline-styles */
import {Image} from '@rneui/base';
import React, {Component} from 'react';
import {ImageBackground} from 'react-native';
import {View, Text} from 'react-native';

class SmartID extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            flex: 0.25,
          }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: '600',
              marginTop: '30%',
              marginStart: '5%',
            }}>
            Smart ID
          </Text>
        </View>
        <View
          style={{
            flex: 0.75,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 270,
              width: '90%',
              borderRadius: 15,
              elevation: 10,
              backgroundColor: 'white',
            }}>
            <View
              style={{
                flex: 0.075,
                backgroundColor: '#458BE7',
                borderTopEndRadius: 15,
                borderTopStartRadius: 15,
              }}
            />
            <View
              style={{
                flex: 0.925,

                borderBottomEndRadius: 15,
                borderBottomStartRadius: 15,
                flexDirection: 'row',
              }}>
              <View
                style={{
                  flex: 0.6,

                  borderBottomStartRadius: 15,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: '500',
                    marginLeft: 18,
                    marginTop: 25,
                  }}>
                  John Wick
                </Text>
                <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 18}}>
                  s/o Robert D. Junior
                </Text>
                <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 18}}>
                  9876543210
                </Text>
                <Text style={{fontSize: 20, fontWeight: '500', marginLeft: 18}}>
                  0818CS201085
                </Text>
                <Text style={{fontSize: 17, fontWeight: '500', marginLeft: 18}}>
                  IIST Boys Hostel,Rau ,Indore
                </Text>
              </View>
              <View
                style={{
                  flex: 0.4,
                  borderBottomRightRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{width: 120, height: 200}}>
                  <Image
                    style={{height: '100%', width: '100%', borderRadius: 15}}
                    source={{
                      uri: 'https://i.pinimg.com/originals/d1/94/d7/d194d7193cd245643591d6e90c8bfdbc.jpg',
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default SmartID;
