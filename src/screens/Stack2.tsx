import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import { ListState, SliderStep, Button } from '../components'
import DiaryStore from '../store/diary'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 60,
    flexDirection: 'column',
    backgroundColor: '#FFF'
  },
  btnStyle: {
    position: 'absolute',
    bottom: 100
  }
})

const Stack2 = observer(() => {
  const { container } = styles
  const onChangeListState = () => console.log(`ListState`)

  return (
    <View style={container}>
      <ListState onChange={onChangeListState} />
    </View>
  )
})

export { Stack2 }