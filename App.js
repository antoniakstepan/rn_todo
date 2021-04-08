import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, ScrollView, TouchableOpacity} from 'react-native';
import { Form } from './src/Form';
import { NavBar } from './src/NavBar';
import { Todo } from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([]);

  const removeTodo = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

	const addTodo = (tittle) => {
		const newTodo = {
			id: Date.now().toString(),
			tittle: tittle,
			completed: false,
		}

		setTodos((prevTodos => {
			return [
				...prevTodos,
				newTodo
      ]
		}))
	}
  return (
    <View style={styles.container}>
      <NavBar tittle="Todo App!"/>
      <Form addTodo={addTodo} />
      <FlatList 
        data={todos}
        renderItem={({item}) => (<Todo removeTodo={removeTodo} todo={item}/>)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },

});
