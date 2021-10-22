import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import tw from "tailwind-react-native-classnames";

const data = [
  {
    id: "123",
    icon: "home",
    location: "Home",
    destination: "345 Coast Blvd, San Diego, CA",
  },
  {
    id: "456",
    icon: "briefcase",
    location: "Work",
    destination: "3500 Deer Creek Rd, Palo Alto, CA",
  },
];

const NavFavorites = () => {
  return (
    <FlatList 
    data={data}
    keyExtractor={(item) => item.id}
    ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, {height: 1}]}/>
  )}
    renderItem={({item: {location, destination, icon}}) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon 
            style={tw`bg-gray-300 p-3 rounded-full mr-4`}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
            />
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
    )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});
