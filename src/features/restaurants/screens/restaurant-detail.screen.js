import React, { useState } from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Pão com queijo" />
          <List.Item title="Cuscuz" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="X-tudo" />
          <List.Item title="Americano" />
          <List.Item title="X-Vegano" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinnerExpanded}
          onPress={() => setDinnerExpanded(!dinnerExpanded)}
        >
          <List.Item title="Frango a parmegiana" />
          <List.Item title="Pizza de banana" />
          <List.Item title="Espetinho de carne" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpanded}
          onPress={() => setDrinksExpanded(!drinksExpanded)}
        >
          <List.Item title="Café" />
          <List.Item title="Ice Tea" />
          <List.Item title="Guarana" />
          <List.Item title="Coquinha gelada" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};
