import React, { useState, useEffect, useReducer } from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import * as Location from 'expo-location'
import { useNavigation } from '../utils'

const screenWidth = Dimensions.get('screen').width

export const LandingScreen: React.FC = () => {
  const { navigate } = useNavigation()

  const [errorMsg, setErrorMsg] = useState('')
  const [address, setAddress] = useState<any>()
  const [displayAddress, setDisplayAddress] = useState('')

  const statusHandler = async () => {
    let { status } = await Location.requestPermissionsAsync()
    if (status !== 'granted') {
      setErrorMsg('Permission to access location is not granted.')
    }

    const { coords } = await Location.getCurrentPositionAsync({})
    if (coords) {
      const { latitude, longitude } = coords
      let addressResponse: any = await Location.reverseGeocodeAsync({ latitude, longitude })

      for (let item of addressResponse) {
        setAddress(item)
        let currentAddress = `${item.postalCode}, ${item.region}, ${item.city}, ${item.street}, ${item.country}`
        setDisplayAddress(currentAddress)

        if (currentAddress.length > 0) {
          setTimeout(() => {
            navigate('homeStack')
          }, 2000)
        }

        return
      }
    } else {
      console.log('something went wrong with location.')
      // notify user somethingg went wrong with location
    }

  }

  useEffect(() => {
    statusHandler()
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa')
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.navigation} />
      <View style={styles.body}>
        <Image source={require('../images/gopher.png')} style={styles.addressIcon} />
        <View style={styles.addressContainer}>
          <Text style={styles.addressTitle}>Your Delivery Address</Text>
        </View>
        <Text style={styles.addressText}>address: {displayAddress}</Text>
      </View>
      <View style={styles.footer} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,242,242,1)',
  },
  navigation: {
    flex: 2,
  },
  body: {
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    width: '100%',
    height: '100%',
  },
  map: {
    flex: 1,
  },
  addressIcon: {
    width: 60,
    height: 60,
  },
  addressContainer: {
    width: screenWidth - 100,
    borderBottomColor: 'blue',
    borderBottomWidth: 0.5,
    padding: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  addressTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7D7D7D',
  },
  addressText: {
    fontSize: 20,
    fontWeight: '200',
    color: 'silver',
  },
  footer: {
    flex: 1,
  },
})
