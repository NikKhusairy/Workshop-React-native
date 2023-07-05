import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
    Alert,
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import TextInputComponent from '../components/TextInputComponent';

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

const LoginScreen = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        createTable();
        getData();
    })

    const createTable = () => {
        db.transaction((tx) => {
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS ' +
                'Users' + 
                '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Username TEXT, Password TEXT'
            );
        });
    };

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData').then((value) => {
                if(value != null) {
                    navigation.navigate('WelcomeScreen');
                }
            });
        }
        catch (error) {
            console.log(error);
        }
    };

    const loginData = async () => {
        if(username.length == 0 || password.length == 0) {
            Alert.alert('Warning!, Please write your Username and password.');
        }
        else {
            try {
                db.transaction((tx) => {
                    tx.executeSql(
                        'SELECT Username, Password FROM Users WHERE Username = ?',
                        [username],
                        async (tx, results) => {
                            var len = results.rows.length;
                            if(len > 0) {
                                var username = results.rows.item(0).Username;
                                var password = results.rows.item(0).Password;
                            }
                            var user = {
                                Username: username,
                                Password: password
                            };
                            await AsyncStorage.setItem('UserData', JSON.stringify(user));
                            navigation.navigate('WelcomeScreen');
                        }
                    );
                });
            }
            catch (error) {
                console.log(error)
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
                    <Button title="Enter" onPress={loginData} />
                </View>
                <View style={styles.btn}>
                    <Button title="Clear" onPress={() => onClear()} />
                </View>
                <View style={{paddingTop: 10}}>
                    <Text onPress={() => navigation.navigate('RegisterScreen')}>
                        Register New User
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    )
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

export default LoginScreen;