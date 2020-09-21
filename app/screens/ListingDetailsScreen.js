import React from "react";
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ScrollView,
} from "react-native";
import { Image } from "react-native-expo-image-cache";
import { Avatar, Title, Caption, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ContactSellerForm from "../components/ContactSellerForm";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image
        style={styles.image}
        // preview={{ uri: listing.images[0].thumbnailUrl }}
        tint="light"
        uri={listing.images[0].fileName}
      />
      <View style={styles.detailsContainer}>
        <View>
          <Text style={styles.title}>{listing.title}</Text>
          <Text style={styles.price}>${listing.price}</Text>
        </View>
        <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25} />
              {/* <Text style={styles.menuItemText}>Set as Favorites</Text> */}
            </View>
          </TouchableRipple>
        </View>
      </View>
      {/* User Section */}
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Text style={{ color: "green", marginLeft: 20 }}>Available</Text>
        </View>
        <View style={styles.row}>
          <Text style={{ color: "#777777", marginLeft: 20 }}>
            Finished Product / Automobile
          </Text>
        </View>
      </View>
      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBoxFull,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>48 * 50 * 12 cm</Title>
          <Caption>Dimensions</Caption>
        </View>
      </View>

      <View style={styles.infoBoxWrapper}>
        <View
          style={[
            styles.infoBox,
            {
              borderRightColor: "#dddddd",
              borderRightWidth: 1,
            },
          ]}
        >
          <Title>₹140.50</Title>
          <Caption>INR</Caption>
        </View>
        <View style={styles.infoBox}>
          <Title>12</Title>
          <Caption>Orders</Caption>
        </View>
      </View>

      <View style={styles.dateContainer}>
        <View>
          <Caption>Availability Date</Caption>
          <Title>30/02/2021</Title>
        </View>
        <View>
          <Caption>Back order Date</Caption>
          <Title>30/02/2021</Title>
        </View>
      </View>

      {/* <View style={styles.menuWrapper}>
          <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25} />
              <Text style={styles.menuItemText}>Set as Favorites</Text>
            </View>
          </TouchableRipple>
        </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
  userInfoSection: {
    // paddingHorizontal: 30,
    // marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: "#dddddd",
    borderBottomWidth: 1,
    borderTopColor: "#dddddd",
    borderTopWidth: 1,
    flexDirection: "row",
    height: 100,
  },
  infoBox: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  infoBoxFull: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  dateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default ListingDetailsScreen;
