import React, { memo } from 'react'
import { StyleProp, ViewStyle, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 304,
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#0684F8',
    borderRadius: 30
  },
  h: {
    textAlign: 'center',
    fontWeight: '500'
  }
})

interface ButtonT {
  title: string,
  onPress: () => void,
  viewStyle?: StyleProp<ViewStyle>
}

const Button = memo<ButtonT>(({ title, onPress, viewStyle }) => {
  const { container, h } = styles

  return (
    <View style={[container, viewStyle]}>
     <TouchableOpacity onPress={onPress} >
      <Txt h2 textStyle={[h]} title={title} color="#FFF" />
    </TouchableOpacity>
    </View>
  )
})

export { Button }
