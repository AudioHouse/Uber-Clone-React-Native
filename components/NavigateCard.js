import React from "react";
import tw from "tailwind-react-native-classnames";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDestination,
  setDestination,
  setOrigin,
} from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
import NavFavorites from "./NavFavorites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const destination = useSelector(selectDestination);

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Afternoon, Austin</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete
            styles={inputGooglePlacesStyle}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            onPress={(data, details = null) => {
              console.log(details.geometry.location);
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
            }}
            fetchDetails={true}
            minLength={2}
            enablePoweredByContainer={false}
            placeholder="Where To?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        <NavFavorites />
      </View>

      <View style={tw`bg-white py-2 mt-auto flex-row justify-evenly`}>
        <TouchableOpacity
          disabled={!destination}
          onPress={() => navigation.navigate("RideOptionsCard")}
          style={tw`bg-black flex flex-row w-1/3 px-4 py-3 justify-center rounded-full ${
            !destination && `bg-gray-200`
          }`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center ml-3`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={!destination}
          style={tw`bg-white flex flex-row w-1/3 px-4 py-3 justify-center rounded-full border border-black ${
            !destination && `border-gray-200`
          }`}
        >
          <Icon
            name="fast-food"
            type="ionicon"
            color={!destination ? "lightgray" : "black"}
            size={16}
          />
          <Text
            style={tw`text-black text-center ml-2 ${
              !destination && `text-gray-300`
            }`}
          >
            Eats
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const inputGooglePlacesStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
