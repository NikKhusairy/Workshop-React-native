import React from "react";
import { Text, View } from 'react-native';

export default function Student(props) {
    const {studentName} = props;
    const {studentAge} = props;
    console.log('Props ', props);
    return (
        <View style={{ height: 100, width: 200 }}> 
            <Text>{studentName} {studentAge}</Text> 
        </View>
    );
}