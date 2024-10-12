import { useState } from "react"
import { View, Button, StyleSheet, TextInput, Text } from "react-native"
import { useAuth } from "../../context/AuthContext"

export const Login = () => {

    const { login } = useAuth()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleLogin() {
        login(username, password)
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Username"
                value={username}
                onChangeText={setUsername} />

            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={password}
                onChangeText={setPassword} />

            <Button title="Login" onPress={handleLogin} />
        </View>
    )
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
    }
})