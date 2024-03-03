import {Image, Pressable, StyleSheet, Text, View} from 'react-native';

const backBtn = require('../assets/icons/back.png');

interface BackBtnProps {
  showBackBtn: {title: string} | undefined;
  title: string;
  onPress?: () => void;
}

const NavigationHeader = ({showBackBtn, title, onPress}: BackBtnProps) => {
  return (
    <Pressable
      disabled={!showBackBtn}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        // gap: 130,
        height: 60,
        backgroundColor: 'whitesmoke',
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          width: '5%',
          height: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {showBackBtn && (
          <Image
            source={backBtn}
            style={{
              width: 15,
              height: 15,
              resizeMode: 'contain',
            }}
          />
        )}
      </View>
      <View style={{width: '90%', alignItems: 'center'}}>
        <Text style={{color: 'black'}}>{title}</Text>
      </View>
    </Pressable>
  );
};

export {NavigationHeader};

const styles = StyleSheet.create({});
