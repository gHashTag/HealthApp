import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { observer } from 'mobx-react-lite'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../'
import { ListState } from '../components'
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

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Stack0'>


type Stack0T = {
  navigation: ProfileScreenNavigationProp
}

const Stack0 = observer(({ navigation }: Stack0T) => {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => DiaryStore.reset() )
    return unsubscribe
  }, [navigation])
  

  const { container } = styles
  return (
    <View style={container}>
      <ListState onChange={() => navigation.navigate('Stack1')} />
    </View>
  )
})

export { Stack0 }
