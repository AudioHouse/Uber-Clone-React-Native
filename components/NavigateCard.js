import React from "react";
import tw from "tailwind-react-native-classnames";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Afternoon, Austin</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
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
            navigation.navigate('RideOptionsCard');
          }}
          fetchDetails={true}
          minLength={2}
          enablePoweredByContainer={false}
          placeholder="Where To?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
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
    borderRadius: 0,
    fontSize: 18
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
});
