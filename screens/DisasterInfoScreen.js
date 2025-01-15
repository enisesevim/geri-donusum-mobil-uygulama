import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DisasterInfoScreen = () => {
  const disasterTypes = [
    { title: 'Deprem', icon: 'earth', color: '#FF6B6B' },
    { title: 'Sel', icon: 'water', color: '#4ECDC4' },
    { title: 'Yangın', icon: 'flame', color: '#FF9F1C' },
    { title: 'Fırtına', icon: 'thunderstorm', color: '#45B7D1' },
  ];

  const emergencyKit = [
    'Su ve yiyecek',
    'İlk yardım çantası',
    'El feneri ve yedek piller',
    'Battaniye',
    'Önemli belgeler',
    'Hijyen malzemeleri',
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Afet Bilgilendirme</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Afet Türleri</Text>
        <View style={styles.disasterGrid}>
          {disasterTypes.map((disaster, index) => (
            <TouchableOpacity key={index} style={styles.disasterItem}>
              <View style={[styles.iconContainer, { backgroundColor: disaster.color }]}>
                <Ionicons name={disaster.icon} size={32} color="#FFF" />
              </View>
              <Text style={styles.disasterTitle}>{disaster.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acil Durum Çantası</Text>
        {emergencyKit.map((item, index) => (
          <View key={index} style={styles.kitItem}>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
            <Text style={styles.kitItemText}>{item}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.emergencyButton}>
        <Ionicons name="call" size={24} color="#FFF" />
        <Text style={styles.emergencyButtonText}>Acil Durum Çağrısı</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  disasterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  disasterItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  disasterTitle: {
    fontSize: 16,
    color: '#333',
  },
  kitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  kitItemText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  emergencyButton: {
    backgroundColor: '#FF6B6B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  emergencyButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default DisasterInfoScreen;