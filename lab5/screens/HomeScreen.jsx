import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-web'
import MainLayout from '../layouts/MainLayout'
import { NavigationContainer } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ToDoList from '../components/ToDoList'
import ToDoForm from '../components/ToDoForm'

function HomeScreen ({navigation}) {
    const [tasks, setTasks] = useState([
        'Do laundry',
        'Go to gym',
        'Walk dog',
      ]);
    
      const addTask = (taskText) => {
          setTasks([...tasks, taskText]);
      }
return (
            <MainLayout>
                    <SafeAreaView style={styles.container}>
                            <View style={styles.center}>
                            <View style={styles.todoItem}>
                                    <ToDoList tasks={tasks}/>
                            </View>
                            <View style={styles.todoItem}>
                                    <ToDoForm addTask={addTask}/>
                            </View>
                            <View style={styles.buttonContainer}>
                                    <Button title="About" onPress={() => navigation.navigate('About')} />
                            </View>
                            </View>
                    </SafeAreaView>
            </MainLayout>
)
}

export default HomeScreen;

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      todoItem: {
        width: '80%', 
        marginBottom: 10,  
        alignSelf: 'center',
      },
        buttonContainer: {
            marginTop: 20,
        }
})