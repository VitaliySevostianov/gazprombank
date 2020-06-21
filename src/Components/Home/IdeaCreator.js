import React, {useState} from 'react';
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {styles} from '../../styles';

// import {store} from '../../Redux/reducer';

import RNPickerSelect from 'react-native-picker-select';
import {uploadNewIdea} from '../../Redux/actions';

export const Idea = ({navigation}) => {
  const [title, useChangeTitle] = useState('Введите заголовок');
  const [description, useChangeDescription] = useState('Введите описание');
  return (
    <ScrollView
      style={{
        margin: 20,
        // justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 40}}>Новая идея</Text>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 28}}>Заголовок</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text>{title === 'Введите заголовок' ? 0 : title.length}</Text>
            <Text>/40</Text>
          </View>
        </View>
        <TextInput
          value={title}
          onTouchEnd={text => {
            // console.log(text);
            title == 'Введите заголовок'
              ? useChangeTitle('')
              : console.log('Ups');
          }}
          onEndEditing={() => {
            title == ''
              ? useChangeTitle('Введите заголовок')
              : console.log('Nothing');
          }}
          onChangeText={text => useChangeTitle(text)}
          numberOfLines={1}
          maxLength={40}
          style={{backgroundColor: '#CEDFF4'}}
        />
      </View>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 28}}>Описание</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text>
              {description === 'Введите описание' ? 0 : description.length}
            </Text>
            <Text>/280</Text>
          </View>
        </View>
        <TextInput
          value={description}
          onTouchEnd={text => {
            // console.log(text);
            description == 'Введите описание'
              ? useChangeDescription('')
              : console.log('Ups');
          }}
          onEndEditing={() => {
            description == ''
              ? useChangeDescription('Введите описание')
              : console.log('Nothing');
          }}
          onChangeText={text => useChangeDescription(text)}
          style={{
            backgroundColor: '#CEDFF4',
            height: 150,
            // width: 100,
            textAlignVertical: 'top',
          }}
          multiline
          maxLength={280}
          numberOfLines={10}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 28}}>Добавьте фото</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity>
              <View
                style={[
                  styles.inlineContainerRoundElements,
                  {backgroundColor: '#508BE2'},
                ]}>
                <Text
                  style={{
                    flex: 1,
                    color: 'white',
                    alignSelf: 'center',
                    textAlignVertical: 'center',
                    fontSize: 50,
                  }}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity>
              <View
                style={[
                  styles.inlineContainerRoundElements,
                  {backgroundColor: '#508BE2'},
                ]}>
                <Text
                  style={{
                    flex: 1,
                    color: 'white',
                    alignSelf: 'center',
                    textAlignVertical: 'center',
                    fontSize: 50,
                  }}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <View
          style={{
            // flex: 1,
            marginTop: 40,
            height: 40,
            flexDirection: 'row',
            // justifyContent: 'space-between',
          }}>
          <Button
            title="Дальше"
            color="#0057B6"
            style={{width: 120}}
            width="250"
            onPress={() => {
              console.log(title, description);
              if (title != 'Введите заголовок' && title != ' ' && title != '') {
                navigation.navigate('IdeaSecondStep', {
                  title: title,
                  description:
                    description == 'Введите описание' || description == ''
                      ? ''
                      : description,
                });
              } else {
                console.log('!!!!!!!');
                Alert.alert('Ошибка', 'Не забывайте про название', [
                  {cancelable: false},
                ]);
              }
            }}
          />
        </View>
        <View
          style={{
            // flex: 1,
            marginTop: 40,
            height: 40,
            flexDirection: 'row',
            // justifyContent: 'space-between',
          }}>
          <Button
            title="Отмена"
            color="#0057B6"
            style={{width: 120}}
            width="250"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export const IdeaSecondStep = ({navigation, route}) => {
  console.log(route.params);
  const [tags, useChangeTags] = useState('Выберите теги*');
  const [section, useChangeSection] = useState('');
  return (
    <ScrollView
      style={{
        margin: 20,
        // justifyContent: 'space-between',
      }}>
      <Text style={{fontSize: 40}}>Дополнительно</Text>
      <View style={{marginTop: 20}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{fontSize: 28}}>Теги</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text>{tags === 'Выберите теги*' ? 0 : tags.length}</Text>
            <Text>/40</Text>
          </View>
        </View>
        <TextInput
          value={tags}
          onTouchEnd={text => {
            // console.log(text);
            tags == 'Выберите теги*' ? useChangeTags('') : console.log('Ups');
          }}
          onEndEditing={() => {
            tags == ''
              ? useChangeTags('Выберите теги*')
              : console.log('Nothing');
          }}
          onChangeText={text => useChangeTags(text)}
          style={{
            backgroundColor: '#CEDFF4',
          }}
          multiline
          maxLength={40}
          numberOfLines={1}
        />
        <TouchableOpacity onPress={() => console.log(1)}>
          <Text style={{fontSize: 28, color: '#508BE2'}}>+ добавить тег</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 28}}>Охват</Text>
        <RNPickerSelect
          useNativeAndroidPickerStyle={true}
          placeholder={{
            label: 'Выбрать охват опроса:',
            value: null,
            color: '#262C40',
          }}
          // style={}
          onValueChange={value => useChangeSection(value)}
          items={[
            {label: 'Отдел', value: 'Отдел'},
            {label: 'Управление', value: 'Управление'},
            {label: 'Департамент', value: 'Департамент'},
            {label: 'Вся компания', value: 'Вся компания'},
          ]}
        />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{fontSize: 28}}>Добавить документ</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{alignItems: 'center'}}>
            <TouchableOpacity onPress={() => console.log(1)}>
              <View
                style={[
                  styles.inlineContainerRoundElements,
                  {backgroundColor: '#508BE2'},
                ]}>
                <Text
                  style={{
                    flex: 1,
                    alignSelf: 'center',
                    textAlignVertical: 'center',
                    color: 'white',
                    fontSize: 50,
                  }}>
                  +
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View
        style={{flexDirection: 'row-reverse', justifyContent: 'space-between'}}>
        <View
          style={{
            // flex: 1,
            marginTop: 40,
            height: 40,
            flexDirection: 'row',
            // justifyContent: 'space-between',
          }}>
          <Button
            title="Опубликовать"
            color="#0057B6"
            style={{width: 120}}
            width="250"
            onPress={() => {
              console.log(route.params.title);
              console.log(route.params.description);
              console.log(tags);
              console.log(section);
              if (section !== '') {
                // store.dispatch(
                //   uploadNewIdea({
                //     title: route.params.title,
                //     description: route.params.description,
                //     tags: tags,
                //     section: section,
                //     name: 'Anonim',
                //     likes: 0,
                //   }),
                // );
                Alert.alert(
                  'Результат:',
                  `
Название: ${route.params.title}
Описание:  ${route.params.description}
Теги: ${tags}
Охват: ${section}`,
                  [
                    {
                      text: 'Отмена',
                      onPress: () => null,
                    },
                    {
                      text: 'Ок',
                      onPress: () => navigation.navigate('Main'),
                    },
                    ,
                    {cancelable: false},
                  ],
                );
              } else {
                Alert.alert('Ошибка', 'Не забывайте про охват', [
                  {cancelable: false},
                ]);
              }
            }}
          />
        </View>
        <View
          style={{
            // flex: 1,
            marginTop: 40,
            height: 40,
            flexDirection: 'row',
            // justifyContent: 'space-between',
          }}>
          <Button
            title="Назад"
            color="#0057B6"
            style={{width: 120}}
            width="250"
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};
