import React, {Component} from 'react';
import {Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {screenWidth} from '../../utils/constants';
import {AppColors} from '../../theme/colors';
import {Add} from 'iconsax-react-native';

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text>
        <Add size="50" color={AppColors.WHITE} />
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    borderRadius: 1000,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: screenWidth * 0.18,
    height: screenWidth * 0.18,
  },
});

export default FloatActionButton;