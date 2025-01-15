import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NewsFeedScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const newsItems = [
    {
      title: 'Deprem Bölgesinde Yeniden Yapılanma Çalışmaları Hızlandı',
      source: 'Afet Haberleri',
      time: '2 saat önce',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Sel Riski: Meteoroloji\'den Kritik Uyarı',
      source: 'Hava Durumu',
      time: '5 saat önce',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Yeni Afet Yönetim Merkezi Açıldı',
      source: 'Yerel Haberler',
      time: '1 gün önce',
      image: 'https://via.placeholder.com/300x200',
    },
    {
      title: 'Afet Farkındalık Eğitimleri Başlıyor',
      source: 'Eğitim Haberleri',
      time: '2 gün önce',
      image: 'https://via.placeholder.com/300x200',
    },
  ];

  return (
    <ScrollView 
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <Text style={styles.header}>Haber Akışı</Text>
      
      {newsItems.map((item, index) => (
        <View key={index} style={styles.newsItem}>
          <Image source={{ uri: item.image }} style={styles.newsImage} />
          <View style={styles.newsContent}>
            <Text style={styles.newsTitle}>{item.title}</Text>
            <View style={styles.newsInfo}>
              <Text style={styles.newsSource}>{item.source}</Text>
              <Text style={styles.newsTime}>{item.time}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Daha Fazla</Text>
            <Ionicons name="chevron-forward" size={16} color="#4A90E2" />
          </TouchableOpacity>
        </View>
      ))}
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
  newsItem: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  newsImage: {
    width: '100%',
    height: 200,
  },
  newsContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  newsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  newsSource: {
    color: '#666',
    fontSize: 14,
  },
  newsTime: {
    color: '#666',
    fontSize: 14,
  },
  readMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  readMoreText: {
    color: '#4A90E2',
    fontSize: 16,
    marginRight: 5,
  },
});

export default NewsFeedScreen;