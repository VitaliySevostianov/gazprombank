import React, {useState, useContext} from 'react';
// import { connect } from 'react-redux';
import {FlatList, TouchableOpacity, View, Text} from 'react-native';
import {Toolbar} from 'react-native-material-ui';
const MyToolbar = ({backButton, title, navigation}) => {
  return (
    <Toolbar
      leftElement={backButton ? 'arrow-back' : ''}
      onLeftElementPress={() => navigation.pop()}
      style={{
        container: {
          backgroundColor: '#00000000',
        },
        rightElement: {
          color: 'black',
        },
        leftElement: {
          color: 'black',
        },
      }}
      centerElement={
        <Text
          style={{
            flex: 1,
            // textAlign: 'center',
            fontSize: 38,
            // alignSelf: 'center',
            // marginRight: 'auto',
          }}>
          {title}
        </Text>
        // <View
        //   style={{
        //     marginLeft: 25,
        //     width: 300,
        //     height: 35,
        //     backgroundColor: '#22335550',
        //     borderRadius: 20,
        //   }}
        // />
      }
      rightElement={backButton ? '' : 'menu'}
      onRightElementPress={() => navigation.toggleDrawer()}
    />
  );
};

export default MyToolbar;
