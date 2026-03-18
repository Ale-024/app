import { Image } from 'expo-image';
import { StyleSheet, ScrollView, Dimensions } from 'react-native'; 

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Header from '@/components/ui/Header';
import Card from '@/components/ui/cards';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <>
      <Header />

      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/logo 1.jpg')}
            style={styles.reactLogo}
          />
        }>
        
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={{ color: '#FFD700' }}> </ThemedText>
          
        </ThemedView>

        {/* SECCIÓN DE PRODUCTOS HORIZONTALES */}
        <ThemedView style={{ paddingVertical: 20 }}>
          <ThemedText type="subtitle" style={{ marginLeft: 15, marginBottom: 15, color: '#FFD700' }}>
            Descubre algo nuevo
          </ThemedText>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false} 
            contentContainerStyle={{ paddingLeft: 15 }}
          >
            <Card 
              id="1"
              title="Camisa Manga Larga" 
              price="185.00" 
              image={require('../../assets/images/61owdlDd7wL._AC_SL400_.jpg')} 
            />
            <Card 
              id="2"
              title="PANTALON FORMAL" 
              price="250.00" 
              image={require('../../assets/images/pantalon formal.jpg')} 
            />
             <Card 
              id="3"
              title="PANTALON JEANS" 
              price="299.00" 
              image={require('../../assets/images/pantalon jeans.jpg')} 
            />
            <Card 
              id="4"
              title="SANDALIAS PUMA" 
              price="299.00" 
              image={require('../../assets/images/zandalias puma.jpg')}
            />
              <Card 
              id="5"
              title="ZAPATOS NIKE" 
              price="299.00" 
              image={require('../../assets/images/zapatos nike.jpg')}
            />
              <Card 
              id="6"
              title="ZAPATOS PUMA" 
              price="299.00" 
              image={require('../../assets/images/zapato puma.jpg')}
            />
              <Card 
              id="7"
              title="SANDALIAS DE SURF" 
              price="299.00" 
              image={require('../../assets/images/sandalia surf puma.jpg')}
            />
            <Card 
              id="8"
              title="SHORT PUMA" 
              price="299.00" 
              image={require('../../assets/images/short puma.jpg')}
            />
              <Card 
              id="9"
              title="CHAQUETA DE CUERO" 
              price="299.00" 
              image={require('../../assets/images/chaqueta cuero.jpg')}
            />
              <Card 
              id="10"
              title="CAMISA DE ALGODON" 
              price="299.00" 
              image={require('../../assets/images/camisa normal.jpg')}
            />
            
          </ScrollView>
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle">Nueva Colección 2026</ThemedText>
        </ThemedView>

      </ParallaxScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    paddingHorizontal: 15,
  },
  reactLogo: {
    
    width: '100%', // Ocupa el 80% del ancho de la pantalla
    alignSelf: 'center', // Centra el logo horizontalmente
    marginTop: 0, // Lo baja un poco para que no pegue con el Header
    aspectRatio: 1900 / 310,
  },
});