import React, { useEffect, useState } from 'react';
import { Alert, Button, SafeAreaView, StyleSheet, View } from 'react-native';

import TextInputComponent from '../components/TextInputComponent';

import SQLite from 'react-native-sqlite-storage';
const db = SQLite.openDatabase(
  {
    name: 'UserDB',
    location: 'default'
  },
  () => {},
  (error) => {
    console.log('Error Database', error);
  }
);

const RegisterScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    createTable();
  }, []);

  const createTable = () => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Users' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT);'
      );
    });
  };

  const setData = async () => {
    if (username.length == 0 || password.length == 0) {
      Alert.alert('Warning!', 'Please write your Username and Password.');
    } else {
      try {
        await db.transaction(async (tx) => {
          await tx.executeSql(
            'INSERT INTO Users (Username, Password) VALUES (?,?)',
            [username, password]
          );
          navigation.navigate('LoginScreen');
          console.log('Success');
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  const onClear = () => {
    setUsername('');
    setPassword('');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInputComponent
          placeHolder="Username"
          secureTextEntry={false}
          onChangeText={(value) => setUsername(value)}
          value={username}
        />
        <TextInputComponent
          placeHolder="Password"
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
        <View style={styles.btn}>
          <Button title="Enter" onPress={setData} />
        </View>
        <View style={styles.btn}>
          <Button title="Clear" onPress={() => onClear()} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },

  btn: {
    marginTop: 20,
    height: 48,
    width: 300
  }
});

export default RegisterScreen;