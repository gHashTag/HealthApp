import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Circle } from '../Circle'
import { Txt } from '../Txt'

const styles = StyleSheet.create({
  title: {
    padding: 20,
    fontSize: 18
  },
  slider: {
    alignSelf: 'center',
    width: '90%'
  },
  h0: {
    left: 20
  },
  h2: {
    paddingTop: 0,
    left: 20
  },
  circle: {
    top: 12
  }
})

interface StatusT {
  title: string,
  value: number,
}

const Status = ({ title, value }: StatusT) => {

  const label = (status: number) =>
    ({
      0: 'отсутствует',
      1: 'легкий',
      2: 'средний',
      3: 'сильный',
      4: 'невыносимый'
    }[status])

    const colorTitle = (status: number) =>
    ({
      0: '#A1A9B5',
      1: '#FFCC48',
      2: '#FFA73F',
      3: '#FC7E56',
      4: '#FC5656'
    }[status])

  const { h0, h2, circle } = styles

  return (
    <View>
      <Circle color={colorTitle(value)} viewStyle={circle} />
      <Txt h3 textStyle={h0} title={title} />
      <Txt h4 textStyle={h2} title={label(value) || ''} color={colorTitle(value)} />
    </View>
  )
}

export { Status }
