import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

export default function Navigation() {
  return (
    <View style={styles.footer}>
      <Button title="Home" style={styles.button} />
      <Button title="Chat" />
      <Button title="Create" />
      <Button title="MyPage" />
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    backgroundColor: 'black',
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomButtons: {
    flex: 1,
  },
});
