import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput, Button} from 'react-native';
import { BlurView } from 'expo-blur';


const bgImage = require('./assets/img-fondo-app-kodda.png')
const koddaImg = require('../kodda-app1/assets/koda-logo-w.png')


export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ bgImage }} ></Image>
      <ScrollView contentContainerStyle= {{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BlurView intensity={90} style={styles.BlurView}>
          <View style={styles.login}>
            <Image source={{koddaImg}} style={styles.profilePicture} ></Image>
            <View>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>
                Email
              </Text>
              <TextInput style={styles.input} placeholder="ejemplo@kodda.com"></TextInput>
              <Text style={{fontSize: 17, fontWeight: '400', color: 'white'}}>
                Password
              </Text>
              <TextInput style={styles.input} placeholder="password" secureTextEntry={true}></TextInput>
            </View>
          </View>
        </BlurView>
      </ScrollView>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b637fb',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  login:{
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  BlurView:{
    borderRadius: 10,
  },
  profilePicture:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 2,
    marginVertical: 30,
  },
  input:{
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },
});
