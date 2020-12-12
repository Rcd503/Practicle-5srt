import * as React from 'react';
import { Button, View, Text } from 'react-native';
import {HomeScreen} from './Components/Homescreen'
import App from './App'
import UserPage from './Components/Userpage'
export function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <UserPage/>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    );
  }
  