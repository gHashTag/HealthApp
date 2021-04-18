import React from 'react'
import { StyleProp, ViewStyle, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    width: 6,
    height: 6,
    borderRadius: 6 / 2
  }
})

interface CircleT {
  color?: string
  viewStyle?: StyleProp<ViewStyle>
}

const Circle = ({ viewStyle, color = 'gold' }: CircleT) => {
  const { container } = styles
  return <View style={[container, viewStyle, { backgroundColor: color }]} />
}

export { Circle }
