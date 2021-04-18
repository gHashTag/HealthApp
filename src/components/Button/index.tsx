import React, { memo } from 'react'
import { StyleProp, ViewStyle, View, TouchableOpacity, StyleSheet } from 'react-native'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 304,
    height: 50,
    justifyContent: 'center',
    borderRadius: 30
  },
  h: {
    textAlign: 'center',
    fontWeight: '500'
  }
})

interface ButtonT {
  title: string
  onPress: () => void
  viewStyle?: StyleProp<ViewStyle>
  enable: boolean
}

const Button = memo<ButtonT>(({ title, onPress, viewStyle, enable = false }) => {
  const { container, h } = styles

  return (
    <View style={[container, viewStyle, { backgroundColor: enable ? '#0684F8' : '#A1A9B5' }]}>
      <TouchableOpacity activeOpacity={enable ? 0.2 : 1} onPress={() => enable ? onPress() : null}>
        <Txt h2 textStyle={[h]} title={title} color="#FFF" />
      </TouchableOpacity>
    </View>
  )
})


export { Button }
