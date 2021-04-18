import React, { memo } from 'react'
import { StyleProp, TextStyle, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  h0Style: {
    fontSize: 15,
    fontFamily: 'Montserrat'
  },
  h1Style: {
    fontSize: 10,
    fontFamily: 'Montserrat',
    textAlign: 'center',
    width: '120%',
    right: 5
  },
  h2Style: {
    fontSize: 16,
    fontFamily: 'Montserrat'
  }
})

interface TxtT {
  h0?: boolean
  h1?: boolean
  h2?: boolean
  color?: string
  title: string
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  textStyle?: StyleProp<TextStyle>
}

const Txt = memo<TxtT>(({ h0, h1, h2, color, title, textStyle, numberOfLines, ellipsizeMode }) => {
  const { h0Style, h1Style, h2Style } = styles
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[
        textStyle,
        h0 && StyleSheet.flatten([h0Style]),
        h1 && StyleSheet.flatten([h1Style]),
        h2 && StyleSheet.flatten([h2Style, textStyle, { color }])
      ]}
    >
      {title}
    </Text>
  )
})

export { Txt }
