import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';

const InDevelopment = ({section, navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text
        style={{
          textAlignVertical: 'center',
          fontSize: 28,
          margin: 20,
        }}
        numberOfLines={3}>
        {section} в разработке
      </Text>
      <TouchableOpacity onPress={() => navigation.pop()}>
        <Text
          style={{
            flex: 1,
            textAlignVertical: 'center',
            color: '#2196f3',
            fontSize: 20,
          }}>
          Вернуться
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default InDevelopment;
