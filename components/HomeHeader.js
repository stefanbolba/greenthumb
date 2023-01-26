import React, { useState } from "react";
import { SafeAreaView, TextInput, Text, StyleSheet } from "react-native-web";

const HomeHeader = () => {
  const [search, setSearch] = useState("");
  //Add a search bar here
  return (
    <SafeAreaView>
      <TextInput
        style={styles.search}
        placeholder="Search"
        onChangeText={(search) => setSearch(search)}
        value={search}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  search: {
    height: 40,
    width: "80vw",
    padding: 10,
    borderWidth: 1,
  },
});

export default HomeHeader;
