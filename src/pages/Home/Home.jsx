import { Button, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export const HomePage = () => {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.logoutButton} onPress={logout}>
                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5b88a5',
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
