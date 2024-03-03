import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../../hooks';
import {ScreenNames} from '../../constants';

const Profile = () => {
  const navigation = useAppNavigation();

  const goToHome = () => navigation.navigate(ScreenNames.Home);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile</Text>
      <Pressable
        onPress={goToHome}
        style={{
          width: 150,
          height: 30,
          borderRadius: 10,
          backgroundColor: 'dodgerblue',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Go to Home</Text>
      </Pressable>
    </View>
  );
};

export {Profile};

const styles = StyleSheet.create({});
