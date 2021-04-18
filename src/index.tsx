import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Stack0, Stack1, Stack2 } from './screens'

const Stack = createStackNavigator()

const MyTheme = {
  ...DefaultTheme,
  colors: {
    backgroundColor: '##FFF'
  },
}


const App = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#FFF',
          borderBottomWidth: 0.01,
          shadowColor: '#454A52'
        },
        headerBackTitle: ' ',
        headerTintColor: '#454A52',
        headerTitleStyle: {
          fontFamily: 'Montserrat',
          fontSize: 16
        },
        cardStyle: { backgroundColor: "#FFF" }
      }}
      >
        <Stack.Screen name="Stack0"  component={Stack0} options={{ title: 'Дневник' }} />
        <Stack.Screen name="Stack1"  component={Stack1} options={{ title: 'Заполнить дневник' }} />
        <Stack.Screen name="Stack2"  component={Stack2} options={{ title: 'Дневник', headerLeft: () => null }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
