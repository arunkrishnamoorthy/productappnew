import React, { useEffect } from "react";
import {
  View,
  TextInput,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
} from "react-native";

import ActivityIndicator from "../components/ActivityIndicator";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import routes from "../navigation/routes";
import Screen from "../components/Screen";
import AppText from "../components/Text";
import useApi from "../hooks/useApi";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
} from "../components/lists";
// import { TextInput } from "react-native-gesture-handler";

function ListingsScreen({ navigation }) {
  const getListingsApi = useApi(listingsApi.getListings);

  useEffect(() => {
    getListingsApi.request();
  }, []);

  const DATA = [
    {
      title: "Favorites",
      data: [
        {
          title: "Pizza",
          description: "Pizza",
        },
        {
          title: "Burger",
          description: "Burger",
        },
        {
          title: "Hamburger",
          description: "Hamburger",
        },
      ],
    },
    {
      title: "Main dishes",
      data: [
        {
          title: "Pizza",
          description: "Pizza",
        },
        {
          title: "Burger",
          description: "Burger",
        },
        {
          title: "Hamburger",
          description: "Hamburger",
        },
      ],
    },
    // {
    //   title: "Sides",
    //   data: ["French Fries", "Onion Rings", "Fried Shrimps"],
    // },
    // {
    //   title: "Drinks",
    //   data: ["Water", "Coke", "Beer"],
    // },
    // {
    //   title: "Desserts",
    //   data: ["Cheese Cake", "Ice Cream"],
    // },
  ];

  return (
    <>
      <ActivityIndicator visible={getListingsApi.loading} />
      <Screen style={styles.screen}>
        {getListingsApi.error && (
          <>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Retry" onPress={getListingsApi.request} />
          </>
        )}

        {/*  <Card
               title={item.title}
               subTitle={"$" + item.price}
               imageUrl={item.images[0].url}
               onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
               thumbnailUrl={item.images[0].thumbnailUrl}
             /> */}

        {/* <FlatList
          data={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={{ uri: item.images[0].url }}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
        /> */}
        <View>
          <TextInput></TextInput>
        </View>
        <SectionList
          sections={getListingsApi.data}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.description}
              image={{ uri: item.images[0].fileName }}
              onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
            />
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 5,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
