import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
// 1. Importamos los iconos y el hook del carrito
import { Ionicons } from '@expo/vector-icons'; 
import { useCart } from "../ui/CartContext"; 

export default function Header() {
  const router = useRouter();
  const { items } = useCart(); // 2. Obtenemos los productos para el contador

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>KING´S STORE HN</Text>

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

        {/* BOTÓN DEL CARRITO CON CONTADOR */}
        <TouchableOpacity 
          onPress={() => router.push("/cart")} 
          style={styles.cartContainer}
        >
          <Ionicons name="cart-outline" size={24} color="#91843c" />
          {items.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{items.length}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70, 
    backgroundColor: "#000000", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#FFD700", 
    zIndex: 10
  },
  logo: {
    color: "#FFD700", 
    fontSize: 40,
    fontWeight: "bold",
  },
  menu: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20, // Más espacio entre links
  },
  link: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  cartContainer: {
    marginLeft: 5,
    position: "relative", // Necesario para posicionar el badge
    padding: 5,
  },
  badge: {
    position: "absolute",
    right: -4,
    top: -2,
    backgroundColor: "#FF4444", // Rojo para que resalte
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  badgeText: {
    color: "white",
    fontSize: 10,
    fontWeight: "bold",
  },
});