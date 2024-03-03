import {Pressable, StyleSheet, Text, View} from 'react-native';

import {useAppNavigation} from '../../hooks';
import {ScreenNames} from '../../constants';

const Notifications = () => {
  const navigation = useAppNavigation();

  const goToProfile = () => navigation.navigate(ScreenNames.Profile);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications</Text>
      <Pressable
        onPress={goToProfile}
        style={{
          width: 150,
          height: 30,
          borderRadius: 10,
          backgroundColor: 'dodgerblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Go to Profile</Text>
      </Pressable>
    </View>
  );
};

export {Notifications};

const styles = StyleSheet.create({});
