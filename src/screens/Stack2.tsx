import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import { IconState, VerticalLine } from '../components'
import DiaryStore from '../store/diary'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 60,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    justifyContent: 'flex-start'
  },
  viewStyle: {
    top: 20,
    left: 20
  }
})

const Stack2 = observer(() => {
  const { container, viewStyle } = styles
  const onChangeListState = () => console.log(`ListState`)

  return (
    <View style={container}>
      <IconState onChange={onChangeListState} />
      <VerticalLine viewStyle={viewStyle} />
    </View>
  )
})

export { Stack2 }