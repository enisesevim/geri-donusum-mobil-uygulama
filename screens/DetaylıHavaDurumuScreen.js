import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

export default function DetaylıHavaDurumuScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.city}>İstanbul</Text>
        <Text style={styles.date}>15 Ekim 2024</Text>
      </View>

      <View style={styles.currentWeather}>
        <Icon name="sun" type="feather" size={80} color="#FDB813" />
        <Text style={styles.temperature}>30°C</Text>
        <Text style={styles.description}>Güneşli</Text>
      </View>

      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Icon name="droplet" type="feather" size={24} color="#4A90E2" />
          <Text style={styles.detailText}>Nem: %50</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="wind" type="feather" size={24} color="#7CB342" />
          <Text style={styles.detailText}>Rüzgar: 10 km/s</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="sunrise" type="feather" size={24} color="#FF9800" />
          <Text style={styles.detailText}>Gün Doğumu: 06:15</Text>
        </View>
        <View style={styles.detailItem}>
          <Icon name="sunset" type="feather" size={24} color="#FF5722" />
          <Text style={styles.detailText}>Gün Batımı: 18:45</Text>
        </View>
      </View>

      <View style={styles.forecast}>
        <Text style={styles.forecastTitle}>5 Günlük Tahmin</Text>
        {[1, 2, 3, 4, 5].map((day) => (
          <View key={day} style={styles.forecastDay}>
            <Text style={styles.forecastDate}>16 Ekim</Text>
            <Icon name="cloud" type="feather" size={24} color="#4A90E2" />
            <Text style={styles.forecastTemp}>28°C / 22°C</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    backgroundColor: '#4A90E2',
  },
  city: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
  },
  date: {
    fontSize: 18,
    color: '#FFF',
    opacity: 0.8,
  },
  currentWeather: {
    alignItems: 'center',
    padding: 20,
  },
  temperature: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  description: {
    fontSize: 24,
    color: '#666',
  },
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    width: '45%',
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  forecast: {
    margin: 10,
    padding: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  forecastTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  forecastDay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  forecastDate: {
    fontSize: 16,
    color: '#333',
  },
  forecastTemp: {
    fontSize: 16,
    color: '#666',
  },
});