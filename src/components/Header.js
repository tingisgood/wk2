import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}> MAMAMOO </Text>
        <Text style={styles.textStyle2}> ALBUMS </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#D4D4D4",
    justifyContent: "center",
    alignItems: "center",
    height: 85,
    shadowColor: "#000",
  
  },
  textStyle: {
    fontSize: 24,
    fontWeight:"600",
    color:"#000",
  },
  textStyle2: {
    fontSize: 16,
    fontWeight:"200",
    color:"#000",
  },
});

export default Header;