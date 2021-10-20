import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const NavigateCard = () => {
    return (
        <SafeAreaView style={tw`bg-white flex-1`}>
            <Text style={tw`text-center py-5 text-xl`}>Good Afternoon, Austin</Text>
        </SafeAreaView>
    )
}

export default NavigateCard

const styles = StyleSheet.create({})
