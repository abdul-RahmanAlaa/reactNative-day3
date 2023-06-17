import { StyleSheet } from "react-native";

const dominantColor = "#242424";
const complementaryColor = "#505050";
const accentColor = "#F2ECFF";
const discreetColor = "#00C896";

module.exports = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: dominantColor,
    justifyContent: "center",

    alignItems: "center",
  },

  // home page

  // in the root navigation

  navbar: {
    backgroundColor: dominantColor,
  },

  // the start of SectionList style

  user: {
    flexDirection: "row",
    height: 50,
    minWidth: "90%",
    backgroundColor: complementaryColor,
    borderBottomColor: dominantColor,
    borderBottomWidth: 1,
  },
  userText: {
    marginVertical: 14,
    marginStart: 20,
    maxWidth: "40%",
    color: accentColor,
  },
  usersHeader: {
    marginVertical: 14,
    color: accentColor,
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginLeft: 10,
    marginTop: 10,
  },
  userImage: {
    width: "100%",
    height: "100%",
  },

  // the end of SectionList style

  // the navigation button
  next: {
    justifyContent: "center",
    // minWidth: "100%",
    flexDirection: "row-reverse",
  },
  taskBtn: {
    backgroundColor: complementaryColor,
    borderRadius: 50,
    width: 150,
    height: 50,
    justifyContent: "center",
    marginVertical: "2%",
    marginHorizontal: "auto",
  },
  taskBtnText: {
    color: discreetColor,
    fontSize: 20,
    textAlign: "center",
  },

  // the end of the home page

  inputField: {
    backgroundColor: accentColor,
    color: complementaryColor,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    width: "75%",
    height: 50,
    borderBottomColor: accentColor,
    borderBottomWidth: 2,
  },
  userSection: {
    backgroundColor: complementaryColor,
    flex: 1,
    margin: 20,
    borderRadius: 20,
    width: "80%",
  },
  apiUser: {
    flexDirection: "row",
    height: 50,
    minWidth: "55%",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: dominantColor,
    borderBottomColor: accentColor,
    borderBottomWidth: 1,
    justifyContent: "space-between",
  },
  userButton: {
    flex: 2,
    flexDirection: "row-reverse",
    marginHorizontal: "auto",
    maxWidth: 50,
    maxHeight: 90,
    // marginLeft: 10,
    // marginTop: 10,
  },
  btnText: {
    color: discreetColor,
    marginTop: 5,
    marginRight: -10,
  },
  userSVG: {
    transform: "rotate(270deg)",
    width: "100%",
    height: "100%",
  },
  apiUsersHeader: {
    margin: 15,
    color: accentColor,
  },
  // the end of the all users page
  //the begin of a single user data page
  singleUser: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: complementaryColor,
    borderRadius: 10,
    borderWidth: 1,
    borderTopColor: discreetColor,
    borderBottomColor: accentColor,
    borderLeftColor: discreetColor,
    borderRightColor: accentColor,
    minHeight: "50%",
  },
  warningText: {
    color: discreetColor,
  },
  fixedText: {
    color: accentColor,
  },
  textContainer: {
    flexDirection: "row",
    marginHorizontal: "20%",
  },
  singleUserImage: {
    width: "100%",
    height: "100%",
    width: 200,
    height: 200,
    marginBottom: 30,
  },
});
