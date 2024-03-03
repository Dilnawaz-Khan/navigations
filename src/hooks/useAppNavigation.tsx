import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

export const useAppNavigation = () => {
  const navigation: NavigationProp<ParamListBase> = useNavigation();
  return navigation;
};
