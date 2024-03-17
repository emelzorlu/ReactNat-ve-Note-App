import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ADDNOTE,
  MYNOTES,
  NOTEDETAIL,
  SECONDSCREEN,
  STATEXAMPLE,
  USEFFECTEXAMPLE,
} from '../utils/routes';
import MyNotes from '../screens/myNotes';
import AddNote from '../screens/addNote';
import NoteDetail from '../screens/noteDetail';
import {AppColors} from '../theme/colors';
import HeaderRight from '../components/ui/headerRight';
import StateExample from '../screens/stateExample';
import UseEffectExample from '../screens/useEffectExample';
import SecondScreen from '../screens/useEffectExample/secondScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={MYNOTES}
      screenOptions={{
        headerTintColor: AppColors.SECONDARY,

        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        options={{
          headerRight: props => <HeaderRight />,
          headerShadowVisible: false,
          headerTransparent: true,
        }}
        name={ADDNOTE}
        component={AddNote}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={MYNOTES}
        component={MyNotes}
      />
      <Stack.Screen
        options={{
          headerShadowVisible: false,
          headerTransparent: true,
        }}
        name={NOTEDETAIL}
        component={NoteDetail}
      />
      <Stack.Screen name={STATEXAMPLE} component={StateExample} />
      <Stack.Screen name={USEFFECTEXAMPLE} component={UseEffectExample} />
      <Stack.Screen name={SECONDSCREEN} component={SecondScreen} />
    </Stack.Navigator>
  );
}

export default RootNavigator;