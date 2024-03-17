import React, {Component, useState, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import EditButtons from '../../components/addNote/editButtons';
import {screenStyle} from '../../styles/screenStyle';
import MyContext from '../../context';

const NoteDetail = ({route}) => {
  const {updateNote} = useContext(MyContext);

  const [selectStyle, setSelectStyle] = useState(styles.normal);

  const {note} = route?.params;

  const changeStyleText = style => {
    switch (style) {
      case 'bold':
        setSelectStyle(styles.bold);
        break;

      case 'italic':
        setSelectStyle(styles.italic);
        break;

      case 'underline':
        setSelectStyle(styles.underline);
        break;

      case 'left':
        setSelectStyle(styles.left);
        break;

      case 'center':
        setSelectStyle(styles.center);
        break;

      case 'justify':
        setSelectStyle(styles.justify);
        break;

      default:
        setSelectStyle(styles.normal);
        break;
    }
  };

  useEffect(() => {
    updateNote(note.id, note);
    return () => {
      updateNote(note.id, note);
    };
  }, []);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <View>
          <EditButtons onChangeStyle={value => changeStyleText(value)} />
        </View>

        <View
          style={{
            flex: 1,
            marginHorizontal: 15,
            padding: 10,
            backgroundColor: '#fff',
            borderRadius: 6,
            borderWidth: 1,
            borderColor: AppColors.GRAY,
          }}>
          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Title</Text>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 500,
                color: AppColors.PRIMARY,
                marginBottom: 22,
                marginTop: 5,
              }}>
              {note.title}
            </Text>
          </View>

          <View>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Not</Text>
            <Text
              style={[
                {
                  fontSize: 22,
                  fontWeight: 300,
                  color: AppColors.SECONDARY,
                  marginBottom: 22,
                  marginTop: 5,
                },
                selectStyle,
              ]}>
              {note.description}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
  italic: {
    fontStyle: 'italic',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  justify: {
    textAlign: 'justify',
  },
  normal: {},
});

export default NoteDetail;