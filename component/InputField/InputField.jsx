import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


function InputField() {



    return (
        <View>

            <TextInput
                style={{
                    height: 40,
                    width : 300,
                    marginTop: 15,
                    borderLeftWidth: 1,
                    borderRightWidth: 1,
                    borderTopWidth: 4,
                    borderBottomWidth: 4,
                   
                }}
                placeholder="Search here to programmer anme!"

            >

            </TextInput>



        </View>
    );
}

export default InputField;