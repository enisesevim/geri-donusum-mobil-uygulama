import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import HomeScreen from '../screens/HomeScreen';
import RecyclingScreen from '../screens/RecyclingScreen';
import MapScreen from '../screens/MapScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import SupportScreen from '../screens/SupportScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavbar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Anasayfa') {
            iconName = 'home';
          } else if (route.name === 'Geri Dönüşüm') {
            iconName = 'recycle';
          } else if (route.name === 'Harita') {
            iconName = 'map';
          } else if (route.name === 'Profil') {
            iconName = 'user';
          } else if (route.name === 'Destek') {
            iconName = 'question-circle';
          }

          return <Icon name={iconName} type="font-awesome" color={color} size={size} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Anasayfa" component={HomeScreen} />
      <Tab.Screen name="Geri Dönüşüm" component={RecyclingScreen} />
      <Tab.Screen name="Harita" component={MapScreen} />
      <Tab.Screen name="Profil" component={UserProfileScreen} />
      <Tab.Screen name="Destek" component={SupportScreen} />
    </Tab.Navigator>
  );
}
