import { Button, View, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export const HomePage = () => {
    const { logout } = useAuth();

    return (
        <View style={styles.container}>
            <Button title="Logout" onPress={logout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});
