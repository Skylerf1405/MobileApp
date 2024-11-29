import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'
import MainLayout from '../layouts/MainLayout'

function AboutScreen () {
  return (
    <MainLayout>
        <View style={styles.container}>
            <Text style={styles.text}>App Name: Lab 5</Text>
            <Text style={styles.text}>Name: Skyler Fuller</Text>
            <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
            <Button title="Home" onPress={() => navigation.navigate('Home')} />
        </View>
    </MainLayout>
  )
}
export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      text: {
        fontSize: 20,
        marginBottom: 20,
      }
})