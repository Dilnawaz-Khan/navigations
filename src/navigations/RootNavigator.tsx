import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator, TabNavigator} from '.';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export {RootNavigator};
