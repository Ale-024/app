import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useCart } from '../../components/ui/CartContext'; //
import { Ionicons } from '@expo/vector-icons';

export default function CartScreen() {
  // Obtenemos las funciones y datos del contexto
  const { items, removeFromCart, total } = useCart();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.mainTitle}>Mi carrito</Text>

      <View style={styles.contentLayout}>
        {/* LISTA DE PRODUCTOS (Lado izquierdo/central) */}
        <View style={styles.itemsSection}>
          {items.length === 0 ? (
            <Text style={{ color: '#888', textAlign: 'center', marginTop: 20 }}>
              Tu carrito está vacío.
            </Text>
          ) : (
            items.map((item) => (
              <View key={item.id} style={styles.productCard}>
                {/* Imagen del producto corregida para TypeScript */}
                <Image source={item.image} style={styles.itemImage} />
                
                <View style={styles.itemInfo}>
                  <View style={styles.badgeRow}>
                    <Text style={styles.editionBadge}>Edición</Text>
                    {/* Solo muestra el badge de descuento si existe oldPrice */}
                    {item.oldPrice && (
                      <View style={styles.discountBadge}>
                        <Text style={styles.discountText}>
                          -{Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100)}%
                        </Text>
                      </View>
                    )}
                  </View>

                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.offerEnd}>La oferta termina el 23/3/2026</Text>

                  {/* Estilo actionRow definido abajo para evitar errores */}
                  <View style={styles.actionRow}>
                    <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                      <Text style={styles.removeText}>Eliminar</Text>
                    </TouchableOpacity>
                  </View>
                </View>

                <View style={styles.priceSection}>
                  {/* Precio anterior tachado */}
                  {item.oldPrice && (
                    <Text style={styles.oldPrice}>L {item.oldPrice.toFixed(2)}</Text>
                  )}
                  <Text style={styles.newPrice}>L {item.price.toFixed(2)}</Text>
                </View>
              </View>
            ))
          )}
        </View>

        {/* RESUMEN DE COMPRA (Lado derecho) */}
        <View style={styles.summarySection}>
          <Text style={styles.summaryTitle}>Resumen de compra</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Precio original</Text>
            <Text style={styles.summaryValue}>L {total.toFixed(2)}</Text>
          </View>
          
          <View style={[styles.summaryRow, styles.totalRow]}>
            <Text style={styles.totalLabel}>Subtotal</Text>
            <Text style={styles.totalValue}>L {total.toFixed(2)}</Text>
          </View>

          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutText}>Ir a pantalla de compra</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#121212', 
    padding: 20 
  },
  mainTitle: { 
    color: 'white', 
    fontSize: 32, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  contentLayout: { 
    flexDirection: 'row', 
    gap: 20, 
    flexWrap: 'wrap' 
  },
  itemsSection: { 
    flex: 2, 
    minWidth: 300 
  },
  productCard: { 
    backgroundColor: '#202020', 
    flexDirection: 'row', 
    padding: 15, 
    borderRadius: 8, 
    marginBottom: 10 
  },
  itemImage: { 
    width: 80, 
    height: 110, 
    borderRadius: 4 
  },
  itemInfo: { 
    flex: 1, 
    marginLeft: 15 
  },
  badgeRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 5 
  },
  editionBadge: { 
    color: '#888', 
    backgroundColor: '#333', 
    alignSelf: 'flex-start', 
    paddingHorizontal: 6, 
    fontSize: 10, 
    borderRadius: 2 
  },
  discountBadge: { 
    backgroundColor: '#0074e4', 
    paddingHorizontal: 6, 
    borderRadius: 10, 
    marginLeft: 8 
  },
  discountText: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 12 
  },
  itemName: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold' 
  },
  offerEnd: { 
    color: '#888', 
    fontSize: 12, 
    marginTop: 5 
  },
  // Definición de actionRow corregida
  actionRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginTop: 10, 
  },
  removeText: { 
    color: '#ccc', 
    textDecorationLine: 'underline', 
    fontSize: 14 
  },
  priceSection: { 
    alignItems: 'flex-end' 
  },
  oldPrice: { 
    color: '#888', 
    textDecorationLine: 'line-through', 
    fontSize: 14 
  },
  newPrice: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 16 
  },
  summarySection: { 
    flex: 1, 
    minWidth: 300, 
    backgroundColor: '#121212',
    paddingBottom: 40
  },
  summaryTitle: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginBottom: 15 
  },
  summaryRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginBottom: 10 
  },
  summaryLabel: { 
    color: '#888' 
  },
  summaryValue: { 
    color: 'white' 
  },
  totalRow: { 
    borderTopWidth: 1, 
    borderTopColor: '#333', 
    paddingTop: 15, 
    marginTop: 10 
  },
  totalLabel: { 
    color: 'white', 
    fontWeight: 'bold' 
  },
  totalValue: { 
    color: 'white', 
    fontWeight: 'bold', 
    fontSize: 18 
  },
  checkoutButton: { 
    backgroundColor: '#0074e4', 
    padding: 15, 
    borderRadius: 8, 
    alignItems: 'center', 
    marginTop: 20 
  },
  checkoutText: { 
    color: 'white', 
    fontWeight: 'bold' 
  }
});