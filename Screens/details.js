import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "../common/styles";
import { useRoute } from "@react-navigation/native";
import { userContext } from "../contexts/userContextProvider";

const Details = () => {
  const { params } = useRoute();
  const { users } = useContext(userContext);
  const [user, setUser] = useState();

  useEffect(() => {
    users.map((user) => {
      user.id === params ? setUser(user) : user;
    });
  }, []);

  if (!user)
    return (
      <View style={[styles.main, styles.singleUser]}>
        <Text style={styles.warningText}>
          hold up wait a minute something ain't right
        </Text>
      </View>
    );

  return (
    <View style={styles.main}>
      <View style={styles.singleUser}>
        <Image
          style={styles.singleUserImage}
          source={require("../assets/User-Avatar.png")}
          alt="there is no image in this json use this as a placeholder for now"
        />
        <View style={styles.textContainer}>
          <Text style={styles.fixedText}>user name : </Text>
          <Text style={styles.warningText}>{user.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.fixedText}>user email : </Text>
          <Text style={styles.warningText}>{user.email}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.fixedText}>user phone : </Text>
          <Text style={styles.warningText}>{user.phone}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.fixedText}>user website : </Text>
          <Text style={styles.warningText}>{user.website}</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
