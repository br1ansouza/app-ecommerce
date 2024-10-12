import { createContext, useState, useContext } from "react";

// contexto de autenticação
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // estado para armazenar o usuário autenticado
    const [user, setUser] = useState(null);   

    // login com verificação correta de credenciais
    function login(username, password) {
        // checagem se o username e password estão corretos
        if (username === 'Brian' && password === '1234') {
            const fakeUser = { username: 'Brian', nome: 'Brian', foto: 'https://'}; // Usuário fake para simular dados
            setUser(fakeUser);  // Atualiza o estado com os dados do usuário
        } else {
            alert('Usuário ou senha inválidos');
        }
    }

    function logout() {
        setUser(null);  // Define o usuário como não autenticado
    }

    return (
       
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook personalizado para acessar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
