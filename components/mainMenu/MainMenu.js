import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const ProdukPage = ({ navigation }) => {
  const [products, setProducts] = useState([]);

  // Fetch data from external API
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Produk Terbaru</Text>
      
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.productContainer}
      >
        {products.map(product => (
          <TouchableOpacity 
            key={product.id} 
            style={styles.productItem} 
            onPress={() => navigation.navigate('ProductDetail', { productId: product.id })}
          >
            <Image source={{ uri: product.thumbnail }} style={styles.productImage} />
            <Text style={styles.productTitle}>{product.title}</Text>
            <Text style={styles.productPrice}>Rp {product.price}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },

  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },

  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  productItem: {
    width: 150,
    marginRight: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },

  productImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
  },

  productTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },

  productPrice: {
    fontSize: 14,
    color: 'green',
    textAlign: 'center',
  },
});

export default ProdukPage;
