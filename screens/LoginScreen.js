import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Bu kısımda normalde bir API çağrısı yapılır ve kullanıcı bilgileri kontrol edilir
    // Şimdilik basit bir kontrol yapıyoruz
    if (username === '' || password === '') {
      Alert.alert('Hata', 'Kullanıcı adı ve şifre boş bırakılamaz.');
    } else if (username === global.registeredUsername && password === global.registeredPassword) {
      navigation.navigate('MainTabs');
    } else {
      Alert.alert('Hata', 'Kullanıcı adı veya şifre hatalı.');
    }
  };

  return (
    <ImageBackground 
      source={require('../assets/background.png')} 
      style={styles.backgroundImage}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={styles.container}
      >
        <Text style={styles.title}>Hoş Geldiniz</Text>
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Kullanıcı Adı"
            placeholderTextColor="#ccc"
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Şifre"
            placeholderTextColor="#ccc"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Giriş Yap</Text>
        </TouchableOpacity>
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-google" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-facebook" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Ionicons name="logo-twitter" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.linkText}>Hesabınız yok mu? Kaydolun</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    paddingVertical: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  socialButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  linkText: {
    color: '#fff',
    marginTop: 20,
    fontSize: 16,
  },
});