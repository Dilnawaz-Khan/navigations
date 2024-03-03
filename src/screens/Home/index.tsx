import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {ScreenNames} from '../../constants';
import {useAppNavigation} from '../../hooks';

const Home = () => {
  const navigation = useAppNavigation();

  const goToNavigation = () => navigation.navigate(ScreenNames.Notifications);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Pressable
        onPress={goToNavigation}
        style={{
          width: 150,
          height: 30,
          borderRadius: 10,
          backgroundColor: 'dodgerblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Go to Navigation</Text>
      </Pressable>
    </View>
  );
};

export {Home};

const styles = StyleSheet.create({});
