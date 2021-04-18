import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { ImageState, Txt } from '..'

const styles = StyleSheet.create({
  h0: {
    left: 14
  },
  item: { left: 5, top: 16 },
  scroll: { flexDirection: 'row', height: 120 }
})

interface ItemT {
  id: number
  status: string
  mood: string
}

const data = [
  {
    id: 1,
    status: 'Happy',
    mood: 'Радостное'
  },
  {
    id: 2,
    status: 'Calm',
    mood: 'Спокойное'
  },
  {
    id: 3,
    status: 'Swings',
    mood: 'Перепады настроения'
  },
  {
    id: 4,
    status: 'Sad',
    mood: 'Грустное'
  },
  {
    id: 5,
    status: 'Depressed',
    mood: 'Подавленное'
  }
]

const numbers = ['one', 'two', 'three', 'four', 'five']

interface ListStateT {
  onChange: (x: number) => void
}

const ListState = ({ onChange }: ListStateT) => {
  const { h0, item, scroll } = styles

  const [value, setValue] = useState({
    one: false,
    two: false,
    three: false,
    four: false,
    five: false
  })

  const _onChangeState = (number: number) => () => {
    onChange(number - 1)
    const defaultObject = numbers.reduce((acc, el) => ({ ...acc, [el]: false }), {})
    setValue({ ...defaultObject, [numbers[number - 1]]: true })
  }

  return (
    <>
      <Txt h0 textStyle={h0} title="Настроение" />
      <View style={scroll}>
        {data.map(({ status, id, mood }: ItemT) => {
          const done = value[numbers[id - 1]]
          const name = done ? 'Active' : 'Disable'
          return (
            <View key={id} style={item}>
              <ImageState status={`${status}${name}`} mood={mood} done={!done} onPress={_onChangeState(id)} />
            </View>
          )
        })}
      </View>
    </>
  )
}

export { ListState }
