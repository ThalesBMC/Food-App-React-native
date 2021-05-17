import React from "react";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <ScrollView>
        <RestaurantInfoCard restaurant={restaurant} />
        <List.Section title="cardapio">
          <List.Accordion
            title="Almoço"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>

          <List.Accordion
            title="Café da manhã"
            left={(props) => <List.Icon {...props} icon="folder" />}
          >
            <List.Item title="First item" />
            <List.Item title="Second item" />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeArea>
  );
};
