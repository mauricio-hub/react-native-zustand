import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/home/HomeScreen';
import { SettingsScreen } from '../screens/stettings/SettingsScreen';
import { ProfileScreen } from '../screens/Profile/ProfileSceen';

const Tab = createBottomTabNavigator();

export const BottonTabNavigation = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}