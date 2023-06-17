import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "../common/styles.js";
import { StatusBar } from "react-native";
import { SectionList } from "react-native";
import routes from "../common/routes.js";

const Home = ({ navigation }) => {
  const DATA = [
    {
      title: "A",
      data: ["user 1", "user 2", "user 3"],
    },
    {
      title: "B",
      data: ["user 1", "user 2"],
    },
    {
      title: "c",
      data: ["user 1"],
    },
    {
      title: "D",
      data: ["user 1"],
    },
    {
      title: "A",
      data: ["user 1", "user 2", "user 3"],
    },
    {
      title: "B",
      data: ["user 1", "user 2"],
    },
    {
      title: "c",
      data: ["user 1"],
    },
    {
      title: "D",
      data: ["user 1"],
    },
    {
      title: "A",
      data: ["user 1", "user 2", "user 3"],
    },
    {
      title: "B",
      data: ["user 1", "user 2"],
    },
    {
      title: "c",
      data: ["user 1"],
    },
    {
      title: "D",
      data: ["user 1"],
    },
    {
      title: "A",
      data: ["user 1", "user 2", "user 3"],
    },
    {
      title: "B",
      data: ["user 1", "user 2"],
    },
    {
      title: "c",
      data: ["user 1"],
    },
    {
      title: "D",
      data: ["user 1"],
    },
  ];

  return (
    <View style={styles.main}>
      <StatusBar backgroundColor="#242424" barStyle="light-contact" />
      <SafeAreaView>
        <SectionList
          sections={DATA}
          keyExtractor={(index) => index}
          renderItem={({ item }) => (
            <View style={styles.user}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.userImage}
                  source={require("../assets/User-Avatar.png")}
                />
              </View>
              <Text style={styles.userText}>{item}</Text>
            </View>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.usersHeader}>{title}</Text>
          )}
        />
        <View style={styles.next}>
          <TouchableOpacity
            style={styles.taskBtn}
            onPress={() => navigation.navigate(routes.users)}
          >
            <Text style={styles.taskBtnText}>Next Task</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
