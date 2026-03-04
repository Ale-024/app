import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Mi App</Text>

      <View style={styles.menu}>
        <TouchableOpacity onPress={() => router.push("/")}>
          <Text style={styles.link}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/explore")}>
          <Text style={styles.link}>Explorar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/explore")}>
          <Text style={styles.link}>Buscar</Text>
        </TouchableOpacity>


      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#1e293b",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  logo: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
    gap: 15,
  },
  link: {
    color: "white",
    fontSize: 16,
  },
});
