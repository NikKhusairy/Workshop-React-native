import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

function FlatListItem() {
    const DATA = [
        {
            id: '1',
            title: 'First Item'
        },
        {
            id: '2',
            title: 'Second Item'
        },
        {
            id: '3',
            title: 'Third Item'
        }
    ];

    const Item = ({title}) => (
        <View style={styles.item}>
            <Text>{title}</Text>
        </View>
    );
    
    return (
        <View style={{ flex: 1, padding: 5 }}>
            <FlatList 
                data={DATA} 
                // renderItem={ ({item}) => <Item title={item.title}/> } 
                renderItem={ ({item}) => <Item title={item.title}/> } 
                keyExtractor={(item) => item.id}     
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8, 
        marginHorizontal: 16
    },
    title: { 
        fontSize: 32
    }
});

export default FlatListItem