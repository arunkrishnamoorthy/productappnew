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
import { Rating } from "react-native-ratings";
import ReactNativeDisqus from "react-native-disqus";

function ListingDetailsScreen({ route }) {
  const listing = route.params;

  const ratingCompleted = (rating) => {
    console.log("Rating Updated");
  };
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
          {/* <Text style={styles.price}>${listing.price}</Text> */}
        </View>
        <View style={styles.menuWrapper}>
          <Rating
            ratingColor="#FF6347"
            ratingBackgroundColor="#c8c7c8"
            ratingCount={5}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          {/* <TouchableRipple onPress={() => {}}>
            <View style={styles.menuItem}>
              <Icon name="heart-outline" color="#FF6347" size={25} />
              
            </View>
          </TouchableRipple> */}
        </View>
      </View>
      {/* <View>
        <Rating
          ratingColor="#FF6347"
          ratingBackgroundColor="#c8c7c8"
          ratingCount={5}
          onFinishRating={ratingCompleted}
          style={{ paddingVertical: 10 }}
        />
      </View> */}
      {/* User Section */}
      <View style={styles.dateContainer}>
        <View>
          <Title>30/02/2021</Title>
          <Caption>Availability Date</Caption>
        </View>
        <View>
          <Title>30/02/2021</Title>
          <Caption>Back order Date</Caption>
        </View>
      </View>
      <View>
        <View>
          <Text style={{ color: "green", marginLeft: 5, padding: 10 }}>
            Available
          </Text>
        </View>
        <View>
          <Text style={{ color: "#777777", marginLeft: 5, padding: 10 }}>
            Finished Product / Automobile
          </Text>
        </View>
      </View>
      {/* <View style={styles.infoBoxWrapper}>
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
      </View> */}

      <View style={styles.materialDetails}>
        <View>
          <Title>48 * 50 * 12 cm</Title>
          <Caption>Dimensions</Caption>
        </View>
        <View>
          <Title>₹140.50</Title>
          <Caption>INR</Caption>
        </View>
        <View>
          <Title>12</Title>
          <Caption>Orders</Caption>
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
      <ReactNativeDisqus id="1" shortname="productapp" />
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
  },
  materialDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    margin: 5,
  },
});

export default ListingDetailsScreen;
