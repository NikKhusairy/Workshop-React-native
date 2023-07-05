import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const TextInputComponent = ({
    onChangeText,
    secureTextEntry,
    value,
    placeHolder,
    ...props
}) => {
    return (
        <TextInput
            style={styles.textInput}
            placeholder={placeHolder}
            value={value}
            secureTextEntry={secureTextEntry}
            onChangeText={onChangeText}
            {...props}
        />
    );
};

const styles = StyleSheet.create({
    textInput: {
        marginTop: 10,
        height: 48,
        width: 300,
        borderWidth: 1,
        borderColor: 'gray',
        color: 'black',
        paddingHorizontal: 16
    }
});

export default TextInputComponent;