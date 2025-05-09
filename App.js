import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground} from 'react-native';
const ImagenFondo = {uri: 'https://i.pinimg.com/736x/89/3b/52/893b52dc9efa9306b40394ed3206e574.jpg'}
const FotoPerfilSantiago = {uri: 'https://cdn-icons-png.flaticon.com/512/1785/1785911.png'}
export default function App() {
  return (
  <SafeAreaView style={styles.container} >
  <View style={styles.tarjeta}>
    <Text>Santiago Varela</Text>
    <Text>Desarrollador Web</Text>
    <TextInput style={styles.input} placeholder="Ingrese un mensaje" keyboardType="default"/> 
    </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage:{
    flex: 1,
    justifyContent: 'center',
  },
  tarjeta:{

    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '90%',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    padding: 1
  }
  
});
