<script setup>
import { defineProps, defineEmits } from 'vue';

// รับ 'todo' Object เป็น Prop
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['deleteItem', 'toggleCompleted']);

const handleDelete = () => {
  emit('deleteItem', props.todo.id);
};

const handleToggle = () => {
  // เมื่อคลิกที่ข้อความ จะส่งสัญญาณกลับไป App.vue เพื่อเปลี่ยนสถานะ
  emit('toggleCompleted', props.todo.id);
};
</script>

<template>
  <div :class="['todo-item', { 'completed': props.todo.completed }]">
    <span @click="handleToggle" class="todo-text">
      {{ props.todo.text }}
    </span>
    <button @click="handleDelete" class="delete-btn">ลบ</button>
  </div>
</template>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  margin-bottom: 8px;
  background-color: #ecf0f1;
  border-left: 5px solid #3498db; 
  border-radius: 5px;
  transition: all 0.2s;
}

.todo-text {
  flex-grow: 1;
  cursor: pointer;
  font-size: 16px;
  color: #333;
  word-break: break-word; /* ป้องกันข้อความล้น */
}

.todo-item.completed {
  background-color: #e8f8f5;
  border-left: 5px solid #2ecc71; 
}

.todo-item.completed .todo-text {
  text-decoration: line-through;
  color: #95a5a6;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
  margin-left: 10px; /* เว้นช่องว่างระหว่างข้อความกับปุ่ม */
}
.delete-btn:hover { 
  background-color: #c0392b; 
}
</style>