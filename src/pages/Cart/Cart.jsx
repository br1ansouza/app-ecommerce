import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView } from "react-native";
import { useCart } from "../../context/CartContext";

export const CartPage = () => {
    const { items, removeItem, getTotalItems, valorTotal, clearCart, addItem } = useCart();

    const renderProduct = (item) => {
        return (
            <View style={styles.card}>
                <Image source={{ uri: item.image }} style={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
                <TouchableOpacity style={styles.button} onPress={() => removeItem(item.id)}>
                    <Text style={styles.buttonText}>Remover do Carrinho</Text>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {getTotalItems() === 0 && <Text style={styles.emptyCartText}>Não existem itens no carrinho</Text>}
                {items.map(item => renderProduct(item))}
                <Text style={styles.totalText}>Valor Total: R$ {valorTotal().toFixed(2)}</Text>
                <Text style={styles.totalText}>Quantidade de Itens no Carrinho: {getTotalItems()}</Text>
                <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
                    <Text style={styles.buttonText}>Limpar Carrinho</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={() => addItem(sampleProduct)}>
                    <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5b88a5',
    },
    scrollContainer: {
        padding: 16,
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        marginBottom: 16,
        width: '100%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#333',
    },
    price: {
        fontSize: 16,
        color: '#888',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    clearButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    addButton: {
        backgroundColor: '#243a69',
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
        width: '80%',
        alignItems: 'center',
    },
    emptyCartText: {
        fontSize: 18,
        color: '#f4f4f2',
        marginBottom: 20,
    },
    totalText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
});
