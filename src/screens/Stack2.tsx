import React from 'react'
import { View, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '..'
import { IconState, VerticalLine, ButtonEdit, Status, Space } from '../components'
import DiaryStore from '../store/diary'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    top: 28
  },
  one: {
    left: 10,
    width: 100
  },
  two: {
    top: 38,
    right: 90
  },
  three: {
    right: 20,
    bottom: 25
  },
  viewStyle: {
    top: 35,
    right: 50
  },
  buttonStyle: {
    top: 30
  }
})

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Stack2'>

type Stack2T = {
  navigation: ProfileScreenNavigationProp
}

const Stack2 = observer(({ navigation }: Stack2T) => {
  const { container, viewStyle, one, two, three, buttonStyle } = styles

  return (
    <View style={container}>
      <View style={one}>
        <IconState />
      </View>
      <VerticalLine viewStyle={viewStyle} />
      <View style={two}>
        <Status title="Тревожность" value={DiaryStore.anxiety} />
        <Space height={11} />
        <Status title="Стресс" value={DiaryStore.stress} />
      </View>
      <View style={three}>
        <ButtonEdit onPress={() => navigation.navigate('Stack1')} viewStyle={buttonStyle} />
      </View>
    </View>
  )
})

export { Stack2 }
