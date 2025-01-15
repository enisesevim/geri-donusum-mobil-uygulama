import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MapScreen() {
  const [selectedMapType, setSelectedMapType] = useState('recycling');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="map" size={24} color="white" />
        <Text style={styles.headerTitle}>Harita</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <Text style={styles.placeholderText}>Harita burada gösterilecek</Text>
        <Text style={styles.infoText}>Google Maps API kullanılarak eklenecek</Text>
      </View>
      
      <View style={styles.mapTypeContainer}>
        <TouchableOpacity
          style={[styles.mapTypeButton, selectedMapType === 'recycling' && styles.selectedMapType]}
          onPress={() => setSelectedMapType('recycling')}
        >
          <Ionicons name="leaf" size={24} color={selectedMapType === 'recycling' ? 'white' : '#4A90E2'} />
          <Text style={[styles.mapTypeText, selectedMapType === 'recycling' && styles.selectedMapTypeText]}>Geri Dönüşüm Noktaları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.mapTypeButton, selectedMapType === 'emergency' && styles.selectedMapType]}
          onPress={() => setSelectedMapType('emergency')}
        >
          <Ionicons name="warning" size={24} color={selectedMapType === 'emergency' ? 'white' : '#4A90E2'} />
          <Text style={[styles.mapTypeText, selectedMapType === 'emergency' && styles.selectedMapTypeText]}>Acil Toplanma Alanları</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.infoCard}>
        <Text style={styles.infoCardTitle}>
          {selectedMapType === 'recycling' ? 'Geri Dönüşüm Noktaları' : 'Acil Toplanma Alanları'}
        </Text>
        <Text style={styles.infoCardDescription}>
          {selectedMapType === 'recycling'
            ? 'Haritada size en yakın geri dönüşüm noktalarını görebilirsiniz. Bu noktalarda atıklarınızı güvenle geri dönüştürebilirsiniz.'
            : 'Haritada size en yakın acil toplanma alanlarını görebilirsiniz. Acil bir durumda bu alanlara gitmeniz önemlidir.'}
        </Text>
      </View>
    </View>
  );
}

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
  mapContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 18,
    color: '#666',
  },
  infoText: {
    fontSize: 14,
    color: '#888',
    marginTop: 10,
  },
  mapTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
  },
  mapTypeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  selectedMapType: {
    backgroundColor: '#4A90E2',
  },
  mapTypeText: {
    marginLeft: 5,
    color: '#4A90E2',
  },
  selectedMapTypeText: {
    color: 'white',
  },
  infoCard: {
    backgroundColor: 'white',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  infoCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  infoCardDescription: {
    color: '#666',
  },
});