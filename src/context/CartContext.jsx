import { createContext, useContext, useState, useEffect } from 'react'

// Criacao do contexto
const CartContext = createContext()

// Criacao do Provider e exportar funcoes e variaveis
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    // Caso for chamar uma API para recuperar o carrinho do usuario salvo no banco de dados
    useEffect(() => {
        async function getData() {
            // await fetch()
        }
        getData()
    }, [])
    
    // Numero de itens no carrinho
    function getTotalItems() {
        return items.length // [1, 2, 3].length => 3
    }

    // Add Item
    function addItem(item) {
        // [...existente,  novo]
        setItems(prev => [...prev, item])
    }
  
    function removeItem(id) {
        // const novoCarrinho = items.filter(item => item.id !== id)
        // setItems(novoCarrinho)
        setItems((prevItems) => prevItems.filter(item => item.id !== id))
    }

    function valorTotal() {
        const total = items.reduce((acc, product) => { return acc + product.price }, 0)
        return total
    }

    // Clear Cart    
    function clearCart() {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, getTotalItems, addItem, clearCart, removeItem, valorTotal }}>
            {children}
        </CartContext.Provider>
    )
}

// Criar o hook personalizado
export const useCart = () => useContext(CartContext)
// const { getTotalItems, clearCart } = useCart()