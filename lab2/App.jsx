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


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <View style={styles.todoItem}>
          <ToDoList />
        </View>
        <View style={styles.todoItem}>
          <ToDoForm />
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
