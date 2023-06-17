import React, { useContext, useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import styles from "../common/styles";
import { TextInput } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import axios from "axios";
import routes from "../common/routes";
import { userContext } from "../contexts/userContextProvider";

const Users = ({ navigation }) => {
  const { users } = useContext(userContext);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const handleSearchInput = (input) => {
    setSearchInput(input);
  };

  const searchData = (input) => {
    const newData = users.filter((user) => {
      const lowerCaseUser = user.name.toLocaleLowerCase();
      const lowerCaseInput = input.toLocaleLowerCase();
      return lowerCaseUser.indexOf(lowerCaseInput) > -1;
    });
    setFilteredUsers(newData);
  };

  const handleSearch = (input) => {
    handleSearchInput(input);
    searchData(input);
  };

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#242424" barStyle="light-contact" />
      <TextInput
        style={styles.inputField}
        placeholder="Search"
        placeholderTextColor={styles.complementaryColor}
        onChangeText={handleSearch}
        value={searchInput}
      />

      <ScrollView style={styles.userSection}>
        {filteredUsers.map((user) => (
          <View style={styles.apiUser} key={user.id}>
            <Text style={styles.apiUsersHeader}>{user.name}</Text>
            <TouchableOpacity
              style={styles.userButton}
              onPress={() => navigation.navigate(routes.details, user.id)}
            >
              <Image
                style={styles.userSVG}
                source={require("../assets/arrow.png")}
              />
              <Text style={styles.btnText}>more details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Users;
