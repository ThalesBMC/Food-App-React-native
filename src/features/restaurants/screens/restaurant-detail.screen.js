import React, { useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List, Divider } from "react-native-paper";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styled from "styled-components/native";
const BackButton = styled(View)`
  position: relative;

  z-index: -1;
`;
export const RestaurantDetailScreen = ({ route, navigation }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <TouchableOpacity onPress={() => navigation.navigate("Restaurants")}>
        <BackButton>
          <AntDesign name="back" size={28} color="black" />
        </BackButton>
      </TouchableOpacity>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Pão com queijo" />
          <Divider />
          <List.Item title="Cuscuz" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="X-tudo" />
          <Divider />
          <List.Item title="Americano" />
          <Divider />
          <List.Item title="X-Vegano" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Frango a parmegiana" />
          <Divider />
          <List.Item title="Pizza de banana" />
          <Divider />
          <List.Item title="Espetinho de carne" />
        </List.Accordion>
        <Divider />
        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Café" />
          <Divider />
          <List.Item title="Ice Tea" />
          <Divider />
          <List.Item title="Guarana" />
          <Divider />
          <List.Item title="Coquinha gelada" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
