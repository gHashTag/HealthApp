import React, { memo } from 'react'
import { StyleSheet, Image, StyleProp, ImageStyle, ImageBackground, TouchableWithoutFeedback } from 'react-native'
import { ICONS } from './images'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    //width: 100
  },
  img: {
    width: 60,
    height: 60,
    margin: 7
  },
  doneStyle: {
    position: 'absolute',
    width: 20,
    height: 20,
    bottom: 0,
    right: 0
  },
  h1: {
    top: 70
  }
})

interface ImageStateT {
  status: string
  mood: string
  imageStyle?: StyleProp<ImageStyle>
  onPress?: () => void
  done: boolean
}

const ImageState = memo(({ status, mood, imageStyle, done, onPress }: ImageStateT) => {
  const { container, img, doneStyle, h1 } = styles
  const source = () => ICONS.filter(x => x.title === status)[0].path
  return (
    <TouchableWithoutFeedback style={container} onPress={onPress}>
      <ImageBackground source={source()} style={[img, imageStyle]}>
        {!done && <Image source={require('./images/Done.png')} style={doneStyle} />}
        <Txt h1 textStyle={h1} title={mood} />
      </ImageBackground>
    </TouchableWithoutFeedback>
  )
})

export { ImageState }
