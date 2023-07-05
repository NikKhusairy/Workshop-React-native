import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';

function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center'}}>
                <Text>Welcome Screen</Text>
            </View>
        </SafeAreaView>
    );
}

export default WelcomeScreen;