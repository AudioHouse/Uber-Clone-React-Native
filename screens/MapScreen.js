import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'

const MapScreen = () => {
    return (
        <View>
            <View style={tw`h-1/2 bg-red-100`}><Map /></View>
            <View style={tw`h-1/2 bg-blue-100`}></View>
        </View>
    )
}

export default MapScreen

const styles = StyleSheet.create({})
