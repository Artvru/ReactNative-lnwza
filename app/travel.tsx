import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Signup from '@/components/week3/singup';

export default function Travel() {
    return (        
        <ScrollView style={{ flex: 1, paddingTop : 50 }}>
            {/* <Text> Week 3 </Text> */}
            <Signup />
        </ScrollView>
    );
}
