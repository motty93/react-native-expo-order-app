import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { HomeScreen } from './src/screens/HomeScreen'
import { LandingScreen } from './src/screens/LandingScreen'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

const switchNavigator = createSwitchNavigator({

  landingStack: {
    screen: createStackNavigator({
      landing: LandingScreen,
    }, {
      defaultNavigationOptions: {
        headerShown: false
      }
    })
  },
  homeStack: createBottomTabNavigator({
    // Home tab icon
    home: {
      screen: createStackNavigator({
        HomePage: LandingScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let name = focused == true ? 'home' : 'home-work'
          return <Icon name={name} size={30} color={tintColor} />
        }
      }
    },

    Offer: {
      screen: createStackNavigator({
        OfferPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let name = focused == true ? 'local-offer' : 'local-offer'
          return <Icon name={name} size={30} color={tintColor} />
        }
      }
    },

    Cart: {
      screen: createStackNavigator({
        CartPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let name = focused == true ? 'shopping-cart' : 'add-shopping-cart'
          return <Icon name={name} size={30} color={tintColor} />
        }
      }
    },

    Account: {
      screen: createStackNavigator({
        AccountPage: HomeScreen
      }),
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          let name = focused == true ? 'account-box' : 'account-circle'
          return <Icon name={name} size={30} color={tintColor} />
        }
      }
    }
  })
})

const AppNaviagtion = createAppContainer(switchNavigator)

const App: React.FC = () => (
  // <LandingScreen />
  <AppNaviagtion />
)

export default App
