import React, { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NewsContext } from "../API/Context";

const TopNavigation = ({ index, setIndex }) => {
  const { fetchNews } = useContext(NewsContext);

  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: "#455A64"
      }}
    >
      <Text style={{ ...styles.center, color: "white" }}>
        {index ? "Haberler" : "Keşfet"}
      </Text>

      {index ? (
        <TouchableOpacity
          style={styles.right}
          onPress={() => fetchNews("general")}
        >
          <Text style={styles.text}>

          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
        </TouchableOpacity>
      )}

      {index === 0 ? (
        <TouchableOpacity >
          <Text></Text>
        </TouchableOpacity>

      ) : (
        <TouchableOpacity
          style={styles.left}
          onPress={() => setIndex(index === 0 ? 1 : 0)}
        >
          
          <Text
            style={{ ...styles.text, color: "lightgrey" }}
          >
            Keşfet
          </Text>
          <SimpleLineIcons name="arrow-right" size={15} color="lightgrey" />
        </TouchableOpacity>
      )}      
    </View>
  );
};

export default TopNavigation;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    borderBottomColor: "black",
    borderBottomWidth: 0.5,
  },
  center: {
    paddingBottom: 6,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 5,
    borderRadius: 10,
    fontSize: 16,
    fontWeight: "700",
    marginLeft:150
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    width: 80,
    justifyContent: "space-around",
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    justifyContent: "flex-end",
    alignContent:"flex-end"
  },
  right: {
    width: 80,
    alignItems: "center",
  },
});
