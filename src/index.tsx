import React from 'react'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Stack0 } from './screens'

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
        headerTintColor: '#454A52',
        headerTitleStyle: {
          fontFamily: 'Montserrat',
          fontSize: 16
        },
      }}
      >
        <Stack.Screen name="Home" component={Stack0} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
