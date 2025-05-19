import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, TouchableOpacity, Image, Pressable} from 'react-native';
const ImagenFondo = {uri: 'https://i.pinimg.com/736x/89/3b/52/893b52dc9efa9306b40394ed3206e574.jpg'}
const FotoPerfilSantiago = {uri: 'https://cdn-icons-png.flaticon.com/512/1785/1785911.png'}
export default function App() {
  return (
  <SafeAreaView style={styles.container} >
    <StatusBar style="auto"/> 
    <ImageBackground source={ImagenFondo} style={styles.backgroundImage}>
      <View style={styles.tarjeta}>
        <View style={styles.subcontainer}>
          <Image style={styles.imagen} source={FotoPerfilSantiago}/>
          <Text style={styles.nombretexto}>Santiago Varela</Text>
          <Text style={styles.titulotexto}>Desarrollador Web</Text>
        </View>
        <TextInput style={styles.input} placeholder="Ingrese un mensaje..." keyboardType="default"/>
        <View style={styles.botones}>
          <TouchableOpacity style={styles.boton}><Text style={styles.textoboton}>Contactar</Text></TouchableOpacity>
          <Pressable style={styles.boton} onPress={() => alert('Abriendo portfolio...')}><Text style={styles.textoboton}>Ver Portfolio</Text></Pressable>
        </View>
      </View>
    </ImageBackground>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
 
  container: {
    flex: 1,
  },
  backgroundImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
 
  },
  tarjeta:{
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    padding: 1,
    borderColor: '#cecece',
    borderRadius: 7,
    fontSize: 18
  },
  imagen:
  {
    resizeMode: 'contain',
    height: 100,
    width: 105,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 50,
    marginBottom: 10,
    borderColor: '#cecece'
  },
  subcontainer:
  {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  botones:
  {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  boton:
  {
    margin: 10,
    borderWidth: 1,
    width: 200,
    height: 40,
    borderRadius: 7,
    justifyContent: 'center',
    borderColor: '#cecece',
    backgroundColor: '#163fad'
  },
  textoboton:
  {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  },
  nombretexto:
  {
    fontSize: 25,
    fontWeight: '600',
    marginBottom: 2
  },
  titulotexto:{
    fontSize: 17,
    fontStyle: 'italic'
  },
});


