import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const UserProfileScreen = () => {
  // Normally, you'd fetch this data from your app's state or an API
  const userData = {
    name: 'Doffie Tural',
    age: 28,
    occupation: 'Çevre Mühendisi',
    email: 'doffie.tural@email.com',
    phone: '+90 555 123 4567',
    address: 'İstanbul, Türkiye',
    recyclingScore: 99,
    performanceScore: 95,
    recyclingDetails: [
      { label: 'Plastik', score: 95 },
      { label: 'Kağıt', score: 90 },
      { label: 'Cam', score: 85 },
      { label: 'Metal', score: 92 },
      { label: 'Organik', score: 88 },
    ],
    emergencyPreparedness: [
      { month: 'Oca', score: 85 },
      { month: 'Şub', score: 90 },
      { month: 'Mar', score: 88 },
      { month: 'Nis', score: 92 },
      { month: 'May', score: 95 },
    ],
    badges: [
      { name: 'Çevre Dostu', icon: 'leaf' },
      { name: 'Geri Dönüşüm Uzmanı', icon: 'reload' },
      { name: 'Su Tasarrufu', icon: 'water' },
      { name: 'Enerji Verimliliği', icon: 'flash' },
    ],
  };

  const renderPerformanceBar = (score, color) => (
    <View style={styles.performanceBarContainer}>
      <View style={[styles.performanceBar, { width: `${score}%`, backgroundColor: color }]} />
    </View>
  );

  const renderRecyclingDetails = () => (
    userData.recyclingDetails.map((item, index) => (
      <View key={index} style={styles.recyclingDetailItem}>
        <Text style={styles.recyclingDetailLabel}>{item.label}</Text>
        {renderPerformanceBar(item.score, '#4A90E2')}
        <Text style={styles.recyclingDetailScore}>{item.score}%</Text>
      </View>
    ))
  );

  const renderEmergencyPreparednessChart = () => (
    <View style={styles.chartContainer}>
      {userData.emergencyPreparedness.map((item, index) => (
        <View key={index} style={styles.chartBar}>
          <View style={[styles.chartBarFill, { height: `${item.score}%` }]} />
          <Text style={styles.chartLabel}>{item.month}</Text>
        </View>
      ))}
    </View>
  );

  const renderBadges = () => (
    <View style={styles.badgesContainer}>
      {userData.badges.map((badge, index) => (
        <View key={index} style={styles.badgeItem}>
          <Ionicons name={badge.icon} size={32} color="#4A90E2" />
          <Text style={styles.badgeText}>{badge.name}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <LinearGradient colors={['#4A90E2', '#50E3C2']} style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.occupation}>{userData.occupation}</Text>
        <View style={styles.scoreContainer}>
          <View style={styles.scoreItem}>
            <Ionicons name="leaf" size={24} color="#FFF" />
            <Text style={styles.scoreText}>{userData.recyclingScore}</Text>
            <Text style={styles.scoreLabel}>Geri Dönüşüm</Text>
          </View>
          <View style={styles.scoreItem}>
            <Ionicons name="star" size={24} color="#FFF" />
            <Text style={styles.scoreText}>{userData.performanceScore}</Text>
            <Text style={styles.scoreLabel}>Performans</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kişisel Bilgiler</Text>
        <View style={styles.infoItem}>
          <Ionicons name="mail" size={20} color="#4A90E2" />
          <Text style={styles.infoText}>{userData.email}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="call" size={20} color="#4A90E2" />
          <Text style={styles.infoText}>{userData.phone}</Text>
        </View>
        <View style={styles.infoItem}>
          <Ionicons name="location" size={20} color="#4A90E2" />
          <Text style={styles.infoText}>{userData.address}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Geri Dönüşüm Performansı</Text>
        {renderRecyclingDetails()}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acil Durum Hazırlık Skoru</Text>
        {renderEmergencyPreparednessChart()}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Başarı Rozetleri</Text>
        {renderBadges()}
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Ionicons name="create" size={20} color="#FFF" />
        <Text style={styles.editButtonText}>Profili Düzenle</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
  },
  occupation: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 15,
  },
  scoreContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  scoreItem: {
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  scoreLabel: {
    fontSize: 14,
    color: '#FFF',
  },
  section: {
    backgroundColor: '#FFF',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#4A90E2',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoText: {
    marginLeft: 10,
    fontSize: 16,
  },
  performanceBarContainer: {
    height: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
    marginVertical: 5,
  },
  performanceBar: {
    height: '100%',
    borderRadius: 5,
  },
  recyclingDetailItem: {
    marginBottom: 10,
  },
  recyclingDetailLabel: {
    marginBottom: 5,
  },
  recyclingDetailScore: {
    textAlign: 'right',
    fontSize: 12,
    color: '#888',
  },
  chartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 200,
  },
  chartBar: {
    width: 30,
    alignItems: 'center',
  },
  chartBarFill: {
    width: '100%',
    backgroundColor: '#4A90E2',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  chartLabel: {
    marginTop: 5,
    fontSize: 12,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  badgeItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#F0F8FF',
    padding: 10,
    borderRadius: 10,
  },
  badgeText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
  },
  editButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 10,
  },
  editButtonText: {
    color: '#FFF',
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserProfileScreen;