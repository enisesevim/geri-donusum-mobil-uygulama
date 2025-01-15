import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, ScrollView, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (name === '' || surname === '' || username === '' || age === '' || email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
    } else if (password !== confirmPassword) {
      Alert.alert('Hata', 'Şifreler eşleşmiyor.');
    } else {
      // Normalde burada bir API çağrısı yapılır ve kullanıcı kaydedilir
      // Şimdilik global değişkenlere kaydediyoruz
      global.registeredName = name;
      global.registeredSurname = surname;
      global.registeredUsername = username;
      global.registeredAge = age;
      global.registeredEmail = email;
      global.registeredPassword = password;

      Alert.alert('Başarılı', 'Kayıt işlemi tamamlandı. Şimdi giriş yapabilirsiniz.', [
        { text: 'Tamam', onPress: () => navigation.navigate('Login') }
      ]);
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Text style={styles.title}>Hesap Oluştur</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Ad"
              placeholderTextColor="#ccc"
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="person-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Soyad"
              placeholderTextColor="#ccc"
              value={surname}
              onChangeText={setSurname}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="at-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Kullanıcı Adı"
              placeholderTextColor="#ccc"
              value={username}
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="calendar-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Yaş"
              placeholderTextColor="#ccc"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="E-posta"
              placeholderTextColor="#ccc"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
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
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed-outline" size={24} color="#fff" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Şifre Onayı"
              placeholderTextColor="#ccc"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Kaydol</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.linkText}>Zaten bir hesabınız var mı? Giriş yapın</Text>
          </TouchableOpacity>
        </ScrollView>
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
  },
  scrollView: {
    flexGrow: 1,
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
    width: '100%',
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