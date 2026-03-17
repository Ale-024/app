import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useCart } from "./CartContext"; 

type CardProps = {
  id: string;
  title: string;
  price: string;
  image: ImageSourcePropType; // Para usar require() de tus imágenes locales
};

export default function Card({ id, title, price, image }: CardProps) {
  const { addToCart } = useCart();

  return (
    <View style={styles.card}>
      <Image source={image} style={styles.productImage} />
      
      <View style={styles.infoContainer}>
        <Text style={styles.category}> </Text>
        <Text style={styles.title} numberOfLines={1}>{title}</Text>
        
        <View style={styles.footerRow}>
          <Text style={styles.price}>HN {price}</Text>
          
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => addToCart({ id, name: title, price: parseFloat(price), image: image })}
          >
            <Ionicons name="add" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "transparent", // Como en tu imagen de referencia
    width: 220,
    marginRight: 20,
    borderRadius: 8,
  },
  productImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    backgroundColor: '#1e293b',
  },
  infoContainer: {
    paddingVertical: 10,
  },
  category: {
    color: "#666",
    fontSize: 12,
    marginBottom: 2,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: {
    color: "white",
    fontSize: 14,
  },
  addButton: {
    backgroundColor: "#FFD700", // El dorado de King's Store
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
});