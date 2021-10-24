import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectTravelTimeInformation } from "../slices/navSlice";

const data = [
  {
    id: "Uber-X-123",
    title: "UberX     ",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "UberXL  ",
    multiplier: 1.64,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "UberLUX",
    multiplier: 2.7,
    image: "https://links.papareact.com/7pf",
  },
];

const SURGE_CHARGE_RATE = 1.95;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(data[0]);
  const travelInfo = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`z-50 absolute top-4 left-4 p-2 bg-gray-200 rounded-full`}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-left" type="fontawesome" color="black" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelInfo?.distance.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-10 ${
              item === selected && "bg-gray-200"
            }`}
            onPress={() => setSelected(item)}
          >
            <Image
              style={{ width: 90, height: 90, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text style={item === selected && {color: "#3881f5"}}>{travelInfo?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl pb-4`}>
              {new Intl.NumberFormat("en-us", {
                style: "currency",
                currency: "USD",
              }).format(
                (travelInfo?.duration.value *
                  SURGE_CHARGE_RATE *
                  item.multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-200"}`}
        >
          <Text style={[tw`text-white text-center`, { fontSize: 20 }]}>
            Confirm {selected.title.trim()}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
