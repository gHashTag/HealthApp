import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Slider from '@react-native-community/slider'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  container: {
    top: 100
  },
  title: {
    padding: 20,
    fontSize: 18
  },
  slider: {
    alignSelf: 'center',
    height: 60,
    width: '90%'
  },
  h0: {
    left: 20
  },
  h2: {
    paddingTop: 0,
    left: 20
  }
})

interface SliderStepT {
  title: string
  onChange: (x: number) => void
}

const SliderStep = ({ title, onChange }: SliderStepT) => {
  const [value, setValue] = useState(0)

  const label = (status: number) =>
    ({
      0: 'отсутствует',
      1: 'легкий',
      2: 'средний',
      3: 'сильный',
      4: 'невыносимый'
    }[status])

  const color = (status: number) =>
    ({
      0: '#0684F8',
      1: '#FFCC48',
      2: '#FFA73F',
      3: '#FC7E56',
      4: '#FC5656'
    }[status])

  const { container, h0, h2 } = styles

  return (
    <View style={container}>
      <Txt h0 textStyle={h0} title={title} />
      <Txt h2 textStyle={h2} title={label(value) || ''} color={color(value)} />
      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={4}
        thumbTintColor={color(value)}
        step={1}
        value={value}
        minimumTrackTintColor={color(value)}
        maximumTrackTintColor="#E5E5E5"
        onValueChange={val => {
          setValue(val)
          onChange(val)
        }}
      />
    </View>
  )
}

export { SliderStep }
