import React, {Component, useContext, useState} from 'react';
import {View, SafeAreaView, Text, TextInput} from 'react-native';
import {screenStyle} from '../../styles/screenStyle';
import Button from '../../components/ui/button';
import {AppColors} from '../../theme/colors';
import getRandomNumber from '../../utils/functions';
import MyContext from '../../context';
import {useNavigation} from '@react-navigation/native';

const AddNote = ({route}) => {
  const {addNote, updateNote} = useContext(MyContext);

  const navigation = useNavigation();

  const {note} = route?.params;
  const {type} = route?.params;

  const [title, setTitle] = useState(note?.title);
  const [description, setDescription] = useState(note?.description);

  const [titleRequired, setTitleRequired] = useState(false);
  const [descriptionRequired, setDescriptionRequired] = useState(false);

  const saveNote = () => {
    if (!title) {
      setTitleRequired(true);
    }
    if (!description) {
      setDescriptionRequired(true);
    }
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: getRandomNumber(1, 100),
        title: title,
        description: description,
        date: '17:00',
        read: false,
      };

      addNote(form);

      navigation.goBack();
    }
  };

  const editNote = () => {
    if (!title) {
      setTitleRequired(true);
    }
    if (!description) {
      setDescriptionRequired(true);
    }
    if (title && description) {
      setTitleRequired(false);
      setDescriptionRequired(false);
      const form = {
        id: note.id,
        title: title,
        description: description,
        date: '17:00',
        read: false,
      };

      updateNote(note.id, form);

      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: 500, padding: 15, fontSize: 20}}>
            Title
          </Text>
          <TextInput
            multiline={true}
            textAlignVertical="top"
            style={{
              backgroundColor: '#fff',
              marginHorizontal: 15,
              borderRadius: 6,
              padding: 8,
              borderWidth: 1,
              borderColor: AppColors.GRAY,
              height: 100,
            }}
            onChangeText={text => setTitle(text)}
            value={title}
            placeholder="Enter title"
          />
          {titleRequired && (
            <Text
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: 'red',
                marginHorizontal: 10,
                padding: 5,
              }}>
              Please fill in the Title field
            </Text>
          )}

          <Text style={{fontWeight: 500, padding: 15, fontSize: 20}}>
            Explanation
          </Text>
          <TextInput
            multiline={true}
            textAlignVertical="top"
            style={{
              backgroundColor: '#fff',
              marginHorizontal: 15,
              borderRadius: 6,
              padding: 8,
              borderWidth: 1,
              borderColor: AppColors.GRAY,
              height: 390,
            }}
            onChangeText={text => setDescription(text)}
            value={description}
            placeholder="Enter your note"
          />
          {descriptionRequired && (
            <Text
              style={{
                fontWeight: 500,
                fontSize: 15,
                color: 'red',
                marginHorizontal: 10,
                padding: 5,
              }}>
              Please fill in the Explanation field
            </Text>
          )}
        </View>

        <View>
          <Button
            onPress={type === 'update' ? editNote : saveNote}
            title={type === 'update' ? 'Update' : 'Save Note'}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddNote;