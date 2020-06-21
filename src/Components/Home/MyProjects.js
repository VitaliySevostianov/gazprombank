import React from 'react';
import {View, Text} from 'react-native';

import {styles} from '../../styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
const ArrowForwardIcon = () => (
  <Icon name="arrow-forward" size={30} color="white" />
);
const ProjectElements = ({text}) => {
  return (
    <View style={styles.containerContentElements}>
      <View
        style={[
          styles.inlineContainerElements,
          {
            flexDirection: 'row-reverse',
          },
        ]}>
        <Text
          style={{
            flex: 1,
            width: 50,
            color: 'white',
            textAlign: 'center',
            textAlignVertical: 'center',
          }}>
          100%
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Text
          style={{textAlign: 'center', color: 'white', fontSize: 14}}
          numberOfLines={3}
          ellipsizeMode="tail">
          {text}
        </Text>
      </View>
    </View>
  );
};
const MyProjects = ({title, content}) => {
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
        <ProjectElements text="Контракт с РЖД" />
        <ProjectElements text="Квартальный отчет" />
        <ProjectElements text="Экспорт в Китай в июне" />
      </View>
    </View>
  );
};

export default MyProjects;
