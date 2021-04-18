import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { observer } from 'mobx-react-lite'
import { ListState, SliderStep, Button,  } from '../components'
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


const Stack1 = observer(({ navigation }) => {
  const { container, btnStyle } = styles

  const onChangeListState = () => console.log(`ListState`)
  const onChangeAnxiety = (arg: number) => DiaryStore.setAnxienty(arg) 
  const onChangeStress = (arg: number) => DiaryStore.setStress(arg) 

  return (
    <View style={container}>
      <ListState onChange={onChangeListState} />
      <SliderStep title="Уровень тревожности" onChange={onChangeAnxiety} value={DiaryStore.anxiety} />
      <SliderStep title="Уровень стресса" onChange={onChangeStress} value={DiaryStore.stress} />
      <Button title="Сохранить" viewStyle={btnStyle} onPress={() => navigation.navigate('Stack2')}/>
    </View>
  )
})

export { Stack1 }