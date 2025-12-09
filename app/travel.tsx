
import Card from '@/components/week3/card';
import Hotel from '@/components/week3/hotel';
import Menu from '@/components/week3/Menu';
import Signup from '@/components/week3/Signup';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';



export default function Travel() {
    return (
        <ScrollView>
            <View style={{ flex: 1, paddingTop: 50 }}>
                <Text>Week 3 </Text>
                <Menu />
                <Card />
                <Hotel />
                <Signup />

            </View>
        </ScrollView>
    );
}
