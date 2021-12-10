import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FlatListF from '../../component/FlatListF/FlatListF';
import InputField from '../../component/InputField/InputField';


function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                     Welcome to React native world !!!!!
            </Text>
            <InputField></InputField>
            <FlatListF></FlatListF>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop : 190,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     
      padding: 20,
    },
    header : {
        fontSize : 40,
        justifyContent: 'center',
        color: 'blue',
    },
});

export default Home;