<script setup>
import { ref, watch, onMounted } from 'vue';
import AddTodoForm from './components/AddTodoForm.vue';
import TodoItem from './components/TodoItem.vue';

const todos = ref([]);

onMounted(() => {
  const savedTodos = localStorage.getItem('todo-list-vue');
  if (savedTodos) {
    todos.value = JSON.parse(savedTodos);
  }
});

watch(todos, (newTodos) => {
  localStorage.setItem('todo-list-vue', JSON.stringify(newTodos));
}, { deep: true });

const addTodo = (newText) => {
  if (newText.trim() === '') return;

  const newTodo = {
    id: Date.now(),
    text: newText,
    completed: false, 
  };
  todos.value.push(newTodo);
};

// Method สำหรับลบ To-Do
const deleteTodo = (todoId) => {
  todos.value = todos.value.filter(todo => todo.id !== todoId);
};

// Method สำหรับเปลี่ยนสถานะ Completed
const toggleCompleted = (todoId) => {
  const todo = todos.value.find(t => t.id === todoId);
  if (todo) {
    todo.completed = !todo.completed;
  }
};
</script>

<template>
  <div class="container">
    <h1>📝 To-Do List (Vue.js)</h1>
    
    <AddTodoForm @add-new-todo="addTodo" />

    <div class="todo-list">
      <TodoItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @delete-item="deleteTodo"
        @toggle-completed="toggleCompleted"
      />
      
      <p v-if="todos.length === 0" class="empty-message">
        🎉 ไม่มีรายการ To-Do ในขณะนี้
      </p>
    </div>
  </div>
</template>

<style scoped>
.container { 
  max-width: 600px; 
  margin: 40px auto; 
  padding: 30px; 
  font-family: 'Arial', sans-serif;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}
h1 { 
  text-align: center; 
  color: #2c3e50; 
  margin-bottom: 30px;
}
.todo-list { 
  margin-top: 20px; 
  border-top: 2px solid #ecf0f1; 
  padding-top: 15px; 
}
.empty-message { 
  text-align: center; 
  color: #7f8c8d; 
  margin-top: 20px; 
  font-style: italic;
}

/* --- Responsive CSS สำหรับหน้าจอเล็ก --- */
@media (max-width: 768px) {
  .container {
    max-width: 90%; 
    margin: 20px auto; 
    padding: 20px; 
  }
}
</style>