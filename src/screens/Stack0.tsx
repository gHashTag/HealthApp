import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, ListState, SliderStep } from '../components'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 60,
    flexDirection: 'column'
  },
  btnStyle: {
    position: 'absolute',
    bottom: 100
  }
})


const Stack0 = () => {
  const { container, btnStyle } = styles

  const onChangeListState = x => console.log(`ListState`, x)
  const onChangeAnxiety = x => console.log(`onChangeAnxiety`, x)
  const onChangeStress = x => console.log(`onChangeStress`, x)

  return (
    <View style={container}>
      <ListState onChange={onChangeListState} />
      <SliderStep title="Уровень тревожности" onChange={onChangeAnxiety} />
      <SliderStep title="Уровень стресса" onChange={onChangeStress} />
      <Button title="Сохранить" viewStyle={btnStyle} />
    </View>
  )
}


export { Stack0 }