import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LogoNameSVG from '../Assets/Images/logoName.svg';
import SettingSVG from '../Assets/Images/settings.svg';

const Navbar = ({onPress }) => {

  return (
    <View style={styles.container}>
    <LogoNameSVG />
      <View style={styles.rightImagesContainer}>
        <TouchableOpacity onPress={onPress}>
          <SettingSVG style={{ margin: 0 }} />
        </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingVertical: 0,
    borderBottomWidth:1,
    borderBottomColor:'rgba(228, 228, 228, 1)'
  },
  leftImage: {
    width: 200,
    height: 50,
    resizeMode: 'contain',
  },
  rightImagesContainer: {
    flexDirection: 'row',
    
  },
  rightImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  rightImageActive: {
    width: 40,
    height: 20,
    resizeMode: 'contain',
  },
  badgeContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: 3,
    borderRadius: 8.5,
    height: 17.5,
    width: 17.5,
    borderWidth: 1,
    borderColor: "#D2464B",
  },
  badgeText: {
    top: 1,
    textAlign: 'center',
    color: '#D2464B',
    fontSize: 10,
  },
});
export default Navbar;