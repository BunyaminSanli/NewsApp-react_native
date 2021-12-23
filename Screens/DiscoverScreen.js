import React, { useContext } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { categories } from "../API/api";
import { NewsContext } from "../API/Context";


const DiscoverScreen = () => {
  const { setCategory } = useContext(NewsContext);

 
  return (
    <View style={styles.discover}>
       <Text
        style={{ ...styles.subtitle, color: "white" }}
      >
        Kategoriler
      </Text>      
      <View style={styles.sources}>
      
        {categories.map((s) => (
          <TouchableOpacity
            onPress={() => setCategory(s.name)}
            key={s.name}
            style={styles.sourceContainer}
          >
            <Image source={{ uri: s.pic }} style={styles.sourceImage} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );  
};


export default DiscoverScreen;

const styles = StyleSheet.create({
  discover: {
    padding: 10,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingBottom: 8,
    marginHorizontal: 5,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 5,
    alignSelf: "flex-start",
    borderRadius: 10,
  },
  category: {
    height: 130,
    margin: 10,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  categoryImage: {
    height: "60%",
    width: "100%",
    resizeMode: "contain",
  },
  name: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  sources: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    paddingVertical: 15,
  },
  sourceContainer: {
    height: 160,
    width: "41%",
    borderRadius: 15,
    margin: 15,
    backgroundColor: "white",
  },
  sourceImage: {
    height: "100%",
    borderRadius: 10,
    resizeMode: "cover",
  },
});
