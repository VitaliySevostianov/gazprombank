import React from 'react';
import {View, Text, Button} from 'react-native';

// import {connect} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import MainScreen from '../Components/Home/MainScreen';
import MyToolbar from '../Components/MyToolbar';

import {createStackNavigator} from '@react-navigation/stack';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
const MainStack = createStackNavigator();

// import {store} from '../Redux/reducer';
import {uploadNewIdea} from '../Redux/actions';

import {Idea, IdeaSecondStep} from '../Components/Home/IdeaCreator';

import InDevelopment from '../Components/FuncComponents/InDevelopment';
// const mapStateToProps = state => {
//   return {
//     ideas: state.ideas,
//   };
// };

const Project = ({navigation}) => {
  return <InDevelopment section="Проекты" navigation={navigation} />;
};

const Survey = ({navigation}) => {
  return <InDevelopment section="Опросы" navigation={navigation} />;
};
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

const IdeasList = () => {
  return <InDevelopment section="Список идей" />;
};

const IdeaContent = ({
  ideas,
  route: {
    params: {title, description, tags, section, likes},
  },
  navigation,
}) => {
  //   console.log(store.dispatch(uploadNewIdea(1)));
  //   console.log(store.getState());
  return (
    <View style={{margin: 5, flex: 1}}>
      <MyToolbar navigation={navigation} backButton={true} title="Идея" />
      <View>
        <View
          style={{
            // flexDirection: 'row',
            padding: 5,
            backgroundColor: '#508BE2',
          }}>
          <Text style={{fontSize: 20}}>{title}</Text>
          <Text>Идея на уровне: {section}</Text>
        </View>
        <TouchableOpacity
          style={{
            // width: 130,
            // flex: 1,
            flexDirection: 'row',
            padding: 5,
            backgroundColor: '#CEDFF4',
          }}>
          <Text style={{textAlignVertical: 'center'}}>{likes}</Text>
          <Icon name="favorite" size={30} />
          <Text style={{textAlignVertical: 'center'}}>{}Оценить</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          // flexDirection: 'row',
          flex: 1,
          padding: 5,
          backgroundColor: '#0057B6',
        }}>
        <Text>{description}</Text>
      </View>
      <Text style={{backgroundColor: '#F5984E'}}>Тэги {tags}</Text>
    </View>
  );
};

const HomeDrawer = () => {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Главная" component={HomeScreen} />
      {/* <Drawer.Screen name="Список идей" component={IdeasList} /> */}
      {/* <Drawer.Screen name="SurveyList" component={SurveyList} /> */}
    </Drawer.Navigator>
  );
};

import {styles} from '../styles';

const MainStackScreen = () => {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Main" component={HomeDrawer} />
      <MainStack.Screen name="Idea" component={Idea} />
      <MainStack.Screen name="IdeaSecondStep" component={IdeaSecondStep} />
      <MainStack.Screen name="Project" component={Project} />
      <MainStack.Screen name="Survey" component={Survey} />
      <MainStack.Screen name="IdeaContent" component={IdeaContent} />
    </MainStack.Navigator>
  );
};

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.toolbarAbsolutePosition}>
        <MyToolbar navigation={navigation} title="Главная" />
      </View>
      <View style={styles.contentListAbsolutePosition}>
        <MainScreen navigation={navigation} />
      </View>
    </View>
  );
};
export default MainStackScreen;
// export default ;
