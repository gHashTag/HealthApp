import React, {useEffect, useState} from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import { StackNavigationProp } from '@react-navigation/stack'
import { RootStackParamList } from '../'
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

type ProfileScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Stack1'>

type Stack1T = {
  navigation: ProfileScreenNavigationProp
}


const Stack1 = observer(({ navigation }: Stack1T) => {
  const [enable, setEnable] = useState(true)
  const { container, btnStyle } = styles

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => setEnable(false))
    return unsubscribe
  }, [navigation])

  const onChangeListState = () => setEnable(true)

  const onChangeAnxiety = (arg: number) => {
    DiaryStore.setAnxienty(arg) 
    setEnable(true)
  }

  const onChangeStress = (arg: number) => {
    DiaryStore.setStress(arg) 
    setEnable(true)
  }


  return (
    <View style={container}>
      <ListState onChange={onChangeListState} />
      <SliderStep title="Уровень тревожности" onChange={onChangeAnxiety} value={DiaryStore.anxiety} />
      <SliderStep title="Уровень стресса" onChange={onChangeStress} value={DiaryStore.stress} />
      <Button title="Сохранить" viewStyle={btnStyle} onPress={() => navigation.navigate('Stack2')} enable={enable} />
    </View>
  )
})

export { Stack1 }
