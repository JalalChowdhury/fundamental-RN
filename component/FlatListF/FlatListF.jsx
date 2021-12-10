import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';



const FlatListF = () => {
  let i=1;
  return (
    <View style={styles.container}>
        <Text style={styles.header}>
            Top Programmers Name
        </Text>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Julie'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'oJulie'},
          {key: 'oDominic'},
          {key: 'oJackson'},
          {key: 'Joames'},
          {key: 'oJoel'},
          {key: 'oJohn'},
          {key: 'oJillian'},
          {key: 'oJimmy'},
          {key: 'oJulie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{i++}. {item.key}</Text>}
      />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {

   
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
     
      padding: 20,
    },
    header : {
        fontSize : 24,
        justifyContent: 'center',
        margin:15,
        color: 'navy',
    },
});

export default FlatListF;