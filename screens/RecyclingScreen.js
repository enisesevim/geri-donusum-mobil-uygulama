import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const RecyclingScreen = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('WasteRecognition');

  const renderWasteRecognition = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>Atık Tanıma</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Atık Tanıma</Text>
        <Text style={styles.infoDescription}>Atığınızın fotoğrafını çekin ve hangi geri dönüşüm kutusuna atmanız gerektiğini öğrenin!</Text>
      </View>
      <View style={styles.recyclingBins}>
        {[
          { type: 'Kağıt', image: require('../assets/kağıt1.png') },
          { type: 'Plastik', image: require('../assets/plastik1.png') },
          { type: 'Cam', image: require('../assets/cam1.png') },
          { type: 'Metal', image: require('../assets/metal1.png') },
        ].map((item, index) => (
          <View key={index} style={styles.binContainer}>
            <Image
              source={item.image}
              style={styles.binImage}
            />
            <Text style={styles.binText}>{item.type}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.cameraButton} onPress={() => navigation.navigate('CameraScreen')}>
        <Ionicons name="camera" size={24} color="white" />
        <Text style={styles.buttonText}>Fotoğraf Çek</Text>
      </TouchableOpacity>
    </View>
  );

  const renderRecyclingPoints = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>Geri Dönüşüm Puanları</Text>
      <View style={styles.pointsContainer}>
        <View style={styles.pointItem}>
          <Image source={require('../assets/şişe2.png')} style={styles.pointIcon} />
          <Text style={styles.pointValue}>23</Text>
          <Text style={styles.pointLabel}>Plastik Şişe</Text>
        </View>
        <View style={styles.pointItem}>
          <Image source={require('../assets/metal2.png')} style={styles.pointIcon} />
          <Text style={styles.pointValue}>15</Text>
          <Text style={styles.pointLabel}>Metal Kutu</Text>
        </View>
        <View style={styles.pointItem}>
          <Image source={require('../assets/kağıt2.png')} style={styles.pointIcon} />
          <Text style={styles.pointValue}>38</Text>
          <Text style={styles.pointLabel}>Kağıt</Text>
        </View>
        <View style={styles.pointItem}>
          <Image source={require('../assets/cam2.png')} style={styles.pointIcon} />
          <Text style={styles.pointValue}>12</Text>
          <Text style={styles.pointLabel}>Cam</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.redeemButton} onPress={() => navigation.navigate('RedeemPoints')}>
        <Text style={styles.buttonText}>Puanları Kullan</Text>
      </TouchableOpacity>
    </View>
  );
  
  const renderQRCode = () => (
    <View style={styles.tabContent}>
      <Text style={styles.tabTitle}>QR Kod</Text>
      <View style={styles.qrContainer}>
        <Image
          source={require('../assets/qr.png')}
          style={styles.qrImage}
        />
      </View>
      <Text style={styles.qrDescription}>Bu QR kodu geri dönüşüm noktalarında okutarak puanlarınızı kullanabilirsiniz.</Text>
      <TouchableOpacity style={styles.scanButton} onPress={() => navigation.navigate('QRScanner')}>
        <Ionicons name="qr-code-outline" size={24} color="white" />
        <Text style={styles.buttonText}>QR Kod Tara</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="leaf" size={24} color="white" />
        <Text style={styles.headerTitle}>Geri Dönüşüm</Text>
      </View>
      <View style={styles.tabBar}>
        {['WasteRecognition', 'RecyclingPoints', 'QRCode'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Ionicons
              name={tab === 'WasteRecognition' ? 'camera' : tab === 'RecyclingPoints' ? 'leaf' : 'qr-code'}
              size={24}
              color={activeTab === tab ? '#4A90E2' : '#888'}
            />
          </TouchableOpacity>
        ))}
      </View>
      {activeTab === 'WasteRecognition' && renderWasteRecognition()}
      {activeTab === 'RecyclingPoints' && renderRecyclingPoints()}
      {activeTab === 'QRCode' && renderQRCode()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    padding: 15,
  },
  headerTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  tab: {
    padding: 10,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A90E2',
  },
  tabContent: {
    padding: 20,
  },
  tabTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoCard: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoDescription: {
    color: '#666',
  },
  recyclingBins: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  binContainer: {
    alignItems: 'center',
    width: '48%',
    marginBottom: 15,
  },
  binImage: {
    width: 140,
    height: 140,
    marginBottom: -10,
  },
  binText: {
    color: '#666',
  },
  cameraButton: {
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  pointsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  pointItem: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: '45%',  
    marginBottom: 20,  
    elevation: 3,
  },
  pointIcon: {
    width: 140,
    height: 140,
    marginBottom: -5,
  },
  pointValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  pointLabel: {
    color: '#666',
    textAlign: 'center',
  },
  redeemButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  qrImage: {
    width: 300,
    height: 300,
    marginBottom: -20,
  },
  qrDescription: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  scanButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 25,
  },
});

export default RecyclingScreen;
