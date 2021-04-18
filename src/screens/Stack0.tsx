import React from 'react'
import { View, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { ListState, SliderStep } from '../components'
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

const Stack0 = observer(({ navigation }) => {
  const { container } = styles
  return (
    <View style={container}>
      <ListState onChange={() => navigation.navigate('Stack1')} />
    </View>
  )
})

export { Stack0 }
