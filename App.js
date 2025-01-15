import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomNavbar from './components/BottomNavBar';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DisasterInfoScreen from './screens/DisasterInfoScreen';
import NewsFeedScreen from './screens/NewsFeedScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import RecyclingScreen from './screens/RecyclingScreen';
import DetaylıHavaDurumuScreen from './screens/DetaylıHavaDurumuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Signup" 
          component={SignupScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="MainTabs" 
          component={BottomNavbar} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Recycling" component={RecyclingScreen} />
        <Stack.Screen name="UserProfile" component={UserProfileScreen} />
        <Stack.Screen name="AfetBilgisi" component={DisasterInfoScreen} />
        <Stack.Screen name="HaberAkışı" component={NewsFeedScreen} />
        <Stack.Screen name="DetaylıHavaDurumu" component={DetaylıHavaDurumuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}