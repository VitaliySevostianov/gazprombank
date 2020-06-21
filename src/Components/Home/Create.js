import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';

import {styles} from '../../styles';

import {createStackNavigator} from '@react-navigation/stack';

const CreateButton = ({title, navigateTo, image, navigation}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
        <View
          style={[
            styles.inlineContainerRoundElements,
            {backgroundColor: 'white', zIndex: -10},
          ]}>
          <Image
            source={image}
            style={{
              flex: 1,
              width: 60,
              height: 60,
              resizeMode: 'contain',
              alignSelf: 'center',

              // zIndex: -100,
              // position: 'absolute',
              // borderRadius: 500,
            }}
          />
        </View>
      </TouchableOpacity>
      <Text>{title}</Text>
    </View>
  );
};
const IdeaCreator = () => {
  return (
    <View>
      <Text>123</Text>
    </View>
  );
};

const MainStack = createStackNavigator();
const ModalStack = createStackNavigator();
const IdeaStack = createStackNavigator();

const Create = ({title, content, navigation}) => {
  return (
    <View
      style={{
        // flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 5,
        padding: 15,
        // backgroundColor: '#22334430',
        borderRadius: 20,
      }}>
      <CreateButton
        title={`Новая
 идея`}
        navigateTo="Idea"
        image={require('../../pics/idea_pic.jpg')}
        navigation={navigation}
      />
      <CreateButton
        title={`Новый
проект`}
        navigateTo="Project"
        image={require('../../pics/project_pic.jpg')}
        navigation={navigation}
      />
      <CreateButton
        title={`Новый
 опрос`}
        navigateTo="Survey"
        image={require('../../pics/survey_pic.jpg')}
        navigation={navigation}
      />
    </View>
  );
};

export default Create;
