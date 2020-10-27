import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, FlatList, TextInput, ImageBackground, Dimensions } from "react-native";

import cityData from "./city.json";

import { main } from "../style";

const App = (props) => {
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState([]);

  useEffect(() => {
    const filteredCity = cityData.filter(item => {
      const text = city.toUpperCase();
      const cityTitle = item.title.toUpperCase();

      return cityTitle.indexOf(text) > -1
    })
    setDisplayCity(filteredCity)
    console.log(filteredCity)
  }, [city])



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <ImageBackground source={require("../images/OC.jpg")} style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height / 3, }}>
          <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: "flex-start" }}>
            <Text style={main.banner}>Best Restaurants in Orange County</Text>
          </View>
        </ImageBackground>

        <TextInput
          style={main.textInput}

          placeholder="Search for a city.."
          onChangeText={value => setCity(value)}
        />

        <FlatList
          keyExtractor={(_, index) => index.toString()}
          data={displayCity}
          renderItem={({ item }) => (<Text 
            onPress={() => props.navigation.navigate("FirstPage", { val : item.restaurants[0]})} style={main.flatlistItems}>{item.title}</Text>)}
        />

      </View>
    </SafeAreaView>
  )
}

export default App;


