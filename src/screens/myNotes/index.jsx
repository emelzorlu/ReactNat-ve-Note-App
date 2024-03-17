import React, {Component, useState, useEffect, useContext} from 'react';
import {View, SafeAreaView, FlatList, Alert} from 'react-native';
import Header from '../../components/router/header';
import {screenStyle} from '../../styles/screenStyle';
import FloatActionButton from '../../components/ui/floatActionButton';
import NoteCard from '../../components/myNotes/noteCard';
import {ADDNOTE} from '../../utils/routes';
import MyContext from '../../context';

const MyNotes = ({navigation}) => {
  const {notes, setNotes} = useContext(MyContext);

  return (
    <SafeAreaView style={screenStyle.container}>
      <View style={screenStyle.container}>
        <Header />

        <FlatList
          data={notes}
          renderItem={({item}) => <NoteCard item={item} />}
          keyExtractor={item => item.id}
        />

        <FloatActionButton
          onPress={() => navigation.navigate(ADDNOTE, {type: 'add'})}
        />
      </View>
    </SafeAreaView>
  );
};

export default MyNotes;