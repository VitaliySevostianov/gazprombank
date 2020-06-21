import React from 'react';
import {ScrollView, Text, TextInput, Button} from 'react-native';

import {styles} from '../../styles';
import Top from './Top';
import MyProjects from './MyProjects';
import Create from './Create';

const MainScreen = ({navigation}) => {
  return (
    <ScrollView style={{flex: 1, margin: 10}}>
      <Create navigation={navigation} />
      <Top title="Лучшие идеи" navigation={navigation} />
      <MyProjects title="Мои проекты" navigation={navigation} />
    </ScrollView>
  );
};

export default MainScreen;
