import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const initialProducts = [
  { id: '1', name: 'Camisa', price: 29.99, image: 'https://cdn-icons-png.flaticon.com/128/1805/1805035.png' },
  { id: '2', name: 'Camisa', price: 19.99, image: 'https://cdn-icons-png.flaticon.com/128/1805/1805059.png' },
  { id: '3', name: 'Calça', price: 49.99, image: 'https://cdn-icons-png.flaticon.com/128/1811/1811437.png' },
  { id: '4', name: 'Calça Jeans', price: 49.99, image: 'https://cdn-icons-png.flaticon.com/128/2806/2806058.png' },
  { id: '5', name: 'Tênis', price: 89.99, image: 'https://cdn-icons-png.flaticon.com/128/1795/1795426.png' },
  { id: '6', name: 'Chuteira', price: 89.99, image: 'https://cdn-icons-png.flaticon.com/128/1785/1785020.png' },
  { id: '7', name: 'Jaqueta', price: 99.99, image: 'https://cdn-icons-png.flaticon.com/128/5987/5987724.png' },
  { id: '8', name: 'Jaqueta Jeans', price: 99.99, image: 'https://cdn-icons-png.flaticon.com/128/2806/2806051.png' },
  { id: '9', name: 'Boné', price: 19.99, image: 'https://cdn-icons-png.flaticon.com/128/1812/1812080.png' },
  { id: '10', name: 'Chapéu', price: 19.99, image: 'https://cdn-icons-png.flaticon.com/128/5635/5635689.png' },
];

export const ProductPage = () => {
  const { addItem } = useCart();

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = initialProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(initialProducts);
    }
  };

  function handleAddCart(item) {
    addItem(item);
    alert(`${item.name} adicionado ao carrinho!`);
  }

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => handleAddCart(item)} />
    </View>
  );

  const loadMoreProducts = () => {
    if (loading) return; // evitar chamadas duplicadas
    setLoading(true);
    
    // simula uma chamada para carregar mais produtos
    setTimeout(() => {
      const newProducts = initialProducts.map((product) => ({
        ...product,
        id: `${parseInt(product.id) + page * 10}`, // Gerar IDs únicos
      }));
      
      setFilteredProducts((prev) => [...prev, ...newProducts]);
      setLoading(false);
      setPage((prev) => prev + 1); // incrementa página
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produto..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        onEndReached={loadMoreProducts}
        onEndReachedThreshold={0.4} // Carregar mais produtos quando chegar a 40% do final
        ListFooterComponent={loading ? ( // componente de mensagem de carregamento ao chegar no final da lista
          <View style={styles.loadingContainer}> 
            <ActivityIndicator size="large" color="#5b88a5" />
            <Text style={styles.loadingText}>Carregando...</Text>
          </View>
        ) : null} // mostra o indicador de carregamento
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#5b88a5',
  },
  searchInput: {
    marginTop: 8,
    height: 40,
    backgroundColor: '#f4f4f2',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f4f4f2',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  loadingText: {
    fontSize: 18,
    color: '#CCC',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});
