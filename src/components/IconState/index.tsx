import React from 'react'
import { View, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { ImageState, Txt } from '..'
import DiaryStore from '../../store/diary'

const styles = StyleSheet.create({
  h0: {
    left: 10
  },
  item: { left: 5, top: 16 },
  scroll: { flexDirection: 'row' }
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

const IconState = observer(() => {
  const { h0, item, scroll } = styles

  const _onChangeState = (number: number) => () => {
    const defaultObject = numbers.reduce((acc, el) => ({ ...acc, [el]: false }), {})
    DiaryStore.setMood({ ...defaultObject, [numbers[number - 1]]: true })
  }

  return (
    <>
      <Txt h0 textStyle={h0} title="Настроение" />
      <View style={scroll}>
        {data.map(({ status, id, mood }: ItemT) => {
          const done = DiaryStore.mood[numbers[id - 1]]
          const name = done ? 'Active' : 'Disable'
          return (
            <View key={id} style={item}>
              {done && <ImageState status={`${status}${name}`} mood={mood} done={!done} onPress={_onChangeState(id)} />}
            </View>
          )
        })}
      </View>
    </>
  )
})

export { IconState }
