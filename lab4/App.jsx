/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';


function App() {

  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  const addTask = (taskText) => {
      setTasks([...tasks, taskText]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <View style={styles.todoItem}>
          <ToDoList tasks={tasks}/>
        </View>
        <View style={styles.todoItem}>
          <ToDoForm addTask={addTask}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

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
});

export default App;
