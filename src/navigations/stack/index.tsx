import {createStackNavigator} from '@react-navigation/stack';
import {getHeaderTitle} from '@react-navigation/elements';
import {Home, Notifications, Profile} from '../../screens';
import {NavigationHeader} from '../../components';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const goBack = (back: any, navigation: any) => {
    if (back) navigation.goBack();
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerMode: 'screen',
        header: ({navigation, route, options, back}) => {
          const title = getHeaderTitle(options, route.name);
          return (
            <NavigationHeader
              title={title}
              showBackBtn={back}
              onPress={() => goBack(back, navigation)}
            />
          );
        },
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title: 'Hello world'}}
      />
      <Stack.Screen
        name="Notifications"
        component={Notifications}
        // options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export {StackNavigator};
