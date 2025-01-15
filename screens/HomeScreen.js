import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      {/* Weather and Disaster Risk */}
      <TouchableOpacity 
        style={styles.weatherContainer}
        onPress={() => navigation.navigate('DetaylıHavaDurumu')}
      >
        <Text style={styles.sectionTitle}>Günlük Hava Durumu</Text>
        <View style={styles.weatherInfo}>
          <View style={styles.weatherItem}>
            <Icon name="sun" type="feather" size={40} color="#FDB813" />
            <Text style={styles.weatherText}>30°C</Text>
            <Text style={styles.weatherSubText}>Güneşli</Text>
          </View>
          <View style={styles.weatherItem}>
            <Icon name="droplet" type="feather" size={40} color="#4A90E2" />
            <Text style={styles.weatherText}>%50</Text>
            <Text style={styles.weatherSubText}>Nem</Text>
          </View>
        </View>
        <View style={styles.disasterInfo}>
          <Text style={styles.sectionTitle}>Afet Riski</Text>
          <View style={styles.riskLevel}>
            <Icon name="check-circle" type="feather" size={24} color="#4CAF50" />
            <Text style={[styles.disasterText, { color: '#4CAF50' }]}>Düşük Risk</Text>
          </View>
        </View>
      </TouchableOpacity>

      {/* Disaster Information Cards */}
      <TouchableOpacity 
        style={styles.disasterCard}
        onPress={() => navigation.navigate('AfetBilgisi')}
      >
        <Text style={styles.sectionTitle}>Afet Bilgilendirme</Text>
        <Text style={styles.cardText}>Bugün için önemli bir afet riski bulunmamaktadır.</Text>
        <Icon name="chevron-right" type="feather" size={24} color="#888" style={styles.cardIcon} />
      </TouchableOpacity>

      {/* News Feed */}
      <TouchableOpacity 
        style={styles.newsContainer}
        onPress={() => navigation.navigate('HaberAkışı')}
      >
        <Text style={styles.sectionTitle}>Haber Akışı</Text>
        <View style={styles.newsItem}>
          <Icon name="alert-circle" type="feather" size={16} color="#FF6347" style={styles.newsIcon} />
          <Text style={styles.newsText}>İstanbul'da sıcaklıkların artması bekleniyor.</Text>
        </View>
        <View style={styles.newsItem}>
          <Icon name="map" type="feather" size={16} color="#4A90E2" style={styles.newsIcon} />
          <Text style={styles.newsText}>Yeni afet risk haritası yayımlandı.</Text>
        </View>
        <Icon name="chevron-right" type="feather" size={24} color="#888" style={styles.cardIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  weatherContainer: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  weatherInfo: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  weatherItem: {
    alignItems: 'center',
  },
  weatherText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  weatherSubText: {
    fontSize: 16,
    color: '#666',
  },
  disasterInfo: {
    marginTop: 10,
  },
  riskLevel: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  disasterText: {
    fontSize: 18,
    marginLeft: 10,
  },
  disasterCard: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  newsContainer: {
    marginBottom: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  newsIcon: {
    marginRight: 10,
  },
  newsText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  cardIcon: {
    position: 'absolute',
    right: 20,
    top: '50%',
  },
});