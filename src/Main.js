import React from 'react';
import {SafeAreaView, StatusBar, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MainScreen from './Components/Home/MainScreen';

// import {persistor} from './Redux/reducer';
// import {PersistGate} from 'redux-persist/integration/react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainStackScreen from './Pages/HomeScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#2196f3',
      }}>
      <Tab.Screen
        name="Главная"
        component={MainStackScreen}
        options={{
          //   tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" size={28} color={color} />
          ),
        }}
        // tabBarOptions={() => }
        // tabBarIcon=
      />
      <Tab.Screen
        name="Оповещения"
        component={MainStackScreen}
        options={{
          //   tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Чат"
        component={MainStackScreen}
        options={{
          //   tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <Icon name="chat" size={28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name={`Аккаунт`}
        component={MainStackScreen}
        options={{
          //   tabBarLabel: 'Главная',
          tabBarIcon: ({color, size}) => (
            <Icon name="account-box" size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Main = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#0057B6',
        color: 'white',
      }}>
      <StatusBar barStyle="light-content" backgroundColor={'#0057B6'} />

      {/* <PersistGate
        loading={
          <View>
            <Text>Загрузка...</Text>
          </View>
        }
        persistor={persistor}> */}
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
      {/* </PersistGate> */}
    </SafeAreaView>
  );
};

export default Main;
