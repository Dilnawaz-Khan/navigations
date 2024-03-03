import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Notifications, Profile} from '../../screens';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      screenOptions={{
        tabBarLabelPosition: 'below-icon',
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'pink',
        tabBarBackground: () => <View style={{backgroundColor: 'black'}} />,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarBadge: 10,
        }}
      />
    </Tab.Navigator>
  );
};

export {TabNavigator};
