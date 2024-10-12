import { useState } from "react";
import { View, Button, StyleSheet, TextInput, Text, TouchableOpacity } from "react-native";
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
    const { login } = useAuth();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin() {
        // Chama a função login passando as credenciais
        login(username, password);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.logoutButton} onPress={handleLogin}>
                <Text style={styles.logoutText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5b88a5',
        padding: 20
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#D9DEFF',
        borderWidth: 1,
        borderRadius: 4,
        marginBottom: 12,
        paddingHorizontal: 10,
        backgroundColor: '#f4f4f2'
    },
    logoutButton: {
        backgroundColor: '#ffffff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        elevation: 3,
    },
    logoutText: {
        color: '#5b88a5',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
