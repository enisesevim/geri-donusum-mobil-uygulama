import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SupportScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [message, setMessage] = useState('');

  const categories = [
    { name: 'Hesap', icon: 'person-circle' },
    { name: 'Uygulama', icon: 'phone-portrait' },
    { name: 'Afet Bilgileri', icon: 'warning' },
    { name: 'Geri Dönüşüm', icon: 'leaf' },
  ];

  const faqs = [
    { question: 'Şifremi nasıl değiştirebilirim?', answer: 'Profil sayfanızdan "Şifre Değiştir" seçeneğine tıklayarak şifrenizi güncelleyebilirsiniz.' },
    { question: 'Uygulama bildirimlerini nasıl kapatırım?', answer: 'Ayarlar > Bildirimler yolunu izleyerek bildirim tercihlerinizi düzenleyebilirsiniz.' },
    { question: 'En yakın afet toplanma alanını nasıl bulurum?', answer: 'Ana sayfadaki "Harita" sekmesinden size en yakın afet toplanma alanlarını görebilirsiniz.' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Destek</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nasıl yardımcı olabiliriz?</Text>
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index} 
              style={[styles.categoryItem, selectedCategory === category.name && styles.selectedCategory]}
              onPress={() => setSelectedCategory(category.name)}
            >
              <Ionicons name={category.icon} size={24} color={selectedCategory === category.name ? "#FFF" : "#333"} />
              <Text style={[styles.categoryText, selectedCategory === category.name && styles.selectedCategoryText]}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sık Sorulan Sorular</Text>
        {faqs.map((faq, index) => (
          <TouchableOpacity key={index} style={styles.faqItem}>
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <Ionicons name="chevron-down" size={24} color="#666" />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bize Ulaşın</Text>
        <TextInput
          style={styles.messageInput}
          multiline
          numberOfLines={4}
          placeholder="Mesajınızı buraya yazın..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Gönder</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.contactInfo}>
        <Text style={styles.contactInfoText}>Acil durumlar için: 112</Text>
        <Text style={styles.contactInfoText}>E-posta: destek@afetapp.com</Text>
        <Text style={styles.contactInfoText}>Telefon: +90 123 456 7890</Text>
      </View>
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
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedCategory: {
    backgroundColor: '#4A90E2',
  },
  categoryText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#333',
  },
  selectedCategoryText: {
    color: '#FFF',
  },
  faqItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  faqQuestion: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  messageInput: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  sendButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactInfo: {
    marginTop: 20,
    alignItems: 'center',
  },
  contactInfoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});

export default SupportScreen;