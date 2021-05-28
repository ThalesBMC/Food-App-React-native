import React, { useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

export const Search = ({ isFavoriteToggled, onFavouritesToggle }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearch] = React.useState(keyword);

  useEffect(() => {
    setSearch(keyword);
  }, [keyword]);
  return (
    <SearchContainer>
      <Searchbar
        icon={isFavoriteToggled ? "heart" : "heart-outline"}
        onIconPress={onFavouritesToggle}
        placeholder="Search"
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => {
          setSearch(text);
        }}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
