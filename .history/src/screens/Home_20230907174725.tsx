import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackgroundLayout from '../components/BackgroundLayout'
import { Box } from 'native-base'

type Props = {}

const Home = (props: Props) => {
  return (
    <BackgroundLayout>
      <Box flex={1}>
        <Text>Home</Text>
      </Box>
    
    </BackgroundLayout>
  )
}

export default Home

const styles = StyleSheet.create({})