<script setup>
import { ref, defineEmits } from 'vue';

const newTodoText = ref('');
const emit = defineEmits(['addNewTodo']);

const submitHandler = () => {
  if (newTodoText.value.trim() !== '') {
    emit('addNewTodo', newTodoText.value);
    newTodoText.value = ''; 
  }
};
</script>

<template>
  <form @submit.prevent="submitHandler" class="add-form">
    <input 
      type="text"
      v-model="newTodoText"
      placeholder="เพิ่ม To-Do ใหม่..."
    >
    <button type="submit" :disabled="newTodoText.trim() === ''">เพิ่ม</button>
  </form>
</template>

<style scoped>
.add-form { 
  display: flex; 
  gap: 10px; 
  margin-bottom: 20px; 
}
.add-form input { 
  flex-grow: 1; 
  padding: 12px; 
  border: 2px solid #bdc3c7; 
  border-radius: 5px; 
  font-size: 16px;
}
.add-form button { 
  padding: 12px 20px; 
  background-color: #3498db; 
  color: white; 
  border: none; 
  border-radius: 5px; 
  cursor: pointer; 
  font-weight: bold;
  transition: background-color 0.2s;
}
.add-form button:hover:not(:disabled) { 
  background-color: #2980b9; 
}
.add-form button:disabled { 
  background-color: #ccc; 
  cursor: not-allowed; 
}

/* --- Responsive CSS สำหรับหน้าจอเล็ก --- */
@media (max-width: 768px) {
  .add-form {
    flex-direction: column; 
  }
  .add-form button {
    width: 100%; 
  }
}
</style>