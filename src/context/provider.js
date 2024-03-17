import React, {useState} from 'react';
import MyContext from './index';
import {Alert} from 'react-native';

const Provider = ({children}) => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('ikinci sayfa');
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'Frontend Developer',
      description:
        'Web geliştirme sürecinde kullanıcı arayüzüyle ilgili tasarım ve kodlama işlemlerinden sorumlu  kişilerdir.',
      date: '19:05',
      read: false,
    },
    {
      id: 2,
      title: 'Design Engineer',
      description:
        'Estetik ve ergonomik ürünler ve konseptler tasarlayan meslek dalıdır.',
      date: '11:05',
      read: false,
    },
    {
      id: 3,
      title: 'React Developer',
      description:
        'React geliştiricisi, React kütüphanesini kullanarak android ve ios uygulamaları geliştirir.',
      date: '21:05',
      read: false,
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      description:
        'Front End ve Back End de dahil olmak üzere uçtan uca tüm yazılım geliştirme süreçlerini kapsar',
      date: '15:05',
      read: false,
    },
  ]);

  const addNote = item => {
    if (item) {
      setNotes([...notes, item]);
      Alert.alert('Note Added');
    }
  };

  const deleteNote = id => {
    if (id) {
      const updatedItems = notes.filter(item => item.id !== id.id);
      setNotes(updatedItems);
      Alert.alert('Note Deleted');
    } else {
      Alert.alert('Note Deleted');
    }
  };

  const updateNote = (id, item) => {
    const updatedItems = notes.map(note =>
      note.id === id
        ? {
            ...note,
            title: item.title,
            description: item.description,
            read: true,
            date: '20:30',
          }
        : note,
    );
    setNotes(updatedItems);
  };

  const changeCount = () => {
    setCount(count + 1);
  };

  const changeText = text => {
    setText(text);
  };

  return (
    <MyContext.Provider
      value={{
        count,
        changeCount,
        text,
        changeText,
        notes,
        setNotes,
        addNote,
        updateNote,
        deleteNote,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;