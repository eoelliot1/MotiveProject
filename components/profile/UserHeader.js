import {Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {auth, db} from '../../firebase';
import {doc, getDoc} from '@firebase/firestore';

const EditHeader = ({navigation, userInfo}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.backIcon}
              source={require('../../assets/icons/small-left.png')}
            />
          </View>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={{paddingRight: 10}}>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/bell.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.iconContainer}>
              <Image
                style={styles.icon}
                source={require('../../assets/icons/vert-settings.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
  },

  container: {
    justifyContent: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    marginHorizontal: 8,
  },

  iconContainer: {
    backgroundColor: '#082032',
    justifyContent: 'center',
    borderRadius: 100,
    width: 45,
    height: 45,
    elevation: 10,
  },

  backIcon: {
    tintColor: 'white',
    width: 30,
    height: 30,
    marginLeft: 6,
  },

  icon: {
    tintColor: 'white',
    width: 25,
    height: 25,
    alignSelf: 'center',
    // marginLeft: 6,
  },
});

export default EditHeader;
