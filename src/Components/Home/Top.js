import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../../styles';

import {store} from '../../Redux/reducer';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ArrowForwardIcon = () => (
  <Icon name="arrow-forward" size={30} color="white" />
);

const RoundTopElement = ({
  title,
  description,
  tags,
  section,
  place,
  likes,
  navigation,
}) => {
  console.log(store.getState());
  let style;
  let placedText = '';
  if (place == '1') {
    style = styles.firstPlaceElement;
    placedText = '#1 - ';
  } else if (place == '2') {
    style = styles.secondPlaceElement;
    placedText = '#2 - ';
  } else if (place == '3') {
    style = styles.thirdPlaceElement;
    placedText = '#3 - ';
  } else {
    style = styles.notTopElement;
  }
  let newTitle = placedText + title;
  return (
    <View style={styles.containerContentElements}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('IdeaContent', {
            title: title,
            description: description,
            tags: tags,
            section: section,
            likes: likes,
          });
        }}
        style={[
          style,
          {
            backgroundColor: '#0057B6',
            flexDirection: 'row-reverse',
            alignContent: 'center',
            // al,
          },
        ]}>
        {/* <View
        style={[
          style,
          {
            backgroundColor: '#0057B6',
            flexDirection: 'row-reverse',
            alignContent: 'center',
            // al,
          },
        ]}> */}

        <View
          style={{
            flex: 1,
            // backgroundColor: 'green',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Icon
            style={{
              // flex: 1,
              color: 'white',
              textAlign: 'center',
              textAlignVertical: 'center',
              // backgroundColor: 'red',
              // alignSelf: 'center',
              // flex: 1,
            }}
            name="favorite"
            size={20}
            color="#000"
          />
          <Text
            style={{
              // flex: 1,
              width: 50,
              // backgroundColor: 'blue',
              color: 'white',
              textAlign: 'center',
              textAlignVertical: 'center',
              // flex: 1,
            }}
            numberOfLines={2}>
            {likes}
          </Text>
        </View>
      </TouchableOpacity>

      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{textAlign: 'center', color: 'white', fontSize: 14}}
          numberOfLines={3}
          ellipsizeMode="tail">
          {newTitle}
        </Text>
      </View>
    </View>
  );
};

const Top = ({title, content, navigation}) => {
  console.log(title);
  return (
    <View
      style={{
        flexDirection: 'column',
        backgroundColor: '#508BE2',
        margin: 5,
      }}>
      <View style={styles.containerTitle}>
        <Text style={styles.containerTitleText}>{title}</Text>
        <ArrowForwardIcon />
      </View>
      <View style={styles.containerContent}>
        <RoundTopElement
          title="Агрегатор поставщиков"
          description="first place"
          tags=""
          section="Отдел"
          place="1"
          likes={1371}
          navigation={navigation}
        />
        <RoundTopElement
          title="Анализатор топлива"
          description="second place"
          tags=""
          section="Отдел"
          place="2"
          likes={852}
          navigation={navigation}
        />
        <RoundTopElement
          title="Конкурс на лучшего разработчика"
          description="third place"
          tags=""
          section="Отдел"
          place="3"
          likes={513}
          navigation={navigation}
        />
      </View>
    </View>
  );
};

export default Top;
