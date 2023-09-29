import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { auth, db, storage } from '../../firebase'
import { Image } from 'react-native-elements'
import { collection, collectionGroup, getCountFromServer, onSnapshot, query, where } from '@firebase/firestore'

const ProfInfo = ({userInfo}) => {

  const postCollectionRef = collection(db, 'posts');
  const userPostsRef = query(postCollectionRef, where('owner_uid', '==', auth.currentUser.uid));

  const snapshot = getCountFromServer(userPostsRef);

  // console.log('count: ', snapshot.data().count);

  // useEffect(() => {
  //   onSnapshot(snapshot, (snap) => {
  //     console.log(snap );
  //   });
  // }, []);
  
  const username = userInfo.username;
  const profile_picture = userInfo.profile_picture;

  console.log(profile_picture);

  return (
    <View style={styles.container}>

      <View style={{
          width: 100,
          height: 100,
        }}>
       <Image source={{ uri: profile_picture }} style={styles.pfp}/>
      </View>

      <View style={styles.infoContainer}>

        <View style={styles.info}>
        <Text style={{color: 'white', textAlign: 'center'}}>0</Text>
          <Text style={{color: 'white'}}>Posts</Text>
        </View>

        <View style={styles.info}>
        <Text style={{color: 'white', textAlign: 'center'}}>0</Text>
          <Text style={{color: 'white'}}>Followers</Text>
        </View>

        <View style={styles.info}>
          <Text style={{color: 'white', textAlign: 'center'}}>0</Text>
          <Text style={{color: 'white'}}>Following</Text>
        </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
    
  container: { 
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderColor: 'white',
    borderWidth: 1,
    // borderRadius: 10
    
  },

  infoContainer: {
    flexDirection: 'row',
    borderColor: 'white',
    // borderWidth: 1,
  },
  
  info: {
    margin: 10,
    flexDirection: 'column',
    borderColor: 'white',
    // borderWidth: 1,
  },

  pfp: {
    height: '100%', 
    width: '100%', 
    borderRadius: 100, 
    borderColor: 'white', 
    borderWidth: 1.5
  }
});

export default ProfInfo