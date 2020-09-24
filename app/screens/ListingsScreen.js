import React, { useEffect } from "react";
import { View, Text, TextInput, SectionList, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
import { color } from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";
import { Caption } from "react-native-paper";

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

  const handleDelete = (item) => {
    console.log(item);
    sheetRef.current.snapTo(0);
  };

  const deleteItem = () => {
    // alert("The Product has been triggered for deletion");
    console.log("Delete item triggered");
  };

  const renderContent = () => (
    <View
      style={{
        backgroundColor: "#fff",
        padding: 16,
        height: "100%",
      }}
    >
      <Text>Choose the Appropriate action for deleting the Product</Text>
      <View>
        <Button
          // color={colors.medium}
          title="Product Discontinued"
          onPress={deleteItem}
        />
        <Button title="Warrant Not Supported" onPress={deleteItem} />
        <Button title="Other Reasons" onPress={deleteItem} />
      </View>
    </View>
  );

  const sheetRef = React.useRef(null);

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

        {/* <TextInput></TextInput> */}
        <View style={styles.searchbox}>
          <MaterialCommunityIcons
            name="filter"
            size={20}
            color={colors.secondary}
            style={styles.icon}
          />
          <TextInput style={styles.input}></TextInput>
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
        <BottomSheet
          ref={sheetRef}
          snapPoints={[450, 300, 0]}
          borderRadius={10}
          renderContent={renderContent}
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
  searchbox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: color.primary,
    borderStyle: "solid",
    borderRadius: 15,
    borderWidth: 0.25,
  },
  input: {
    height: 30,
    // padding: 8,
    margin: 5,
    width: "100%",
  },
});

export default ListingsScreen;
