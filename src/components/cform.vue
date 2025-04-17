<!-- contact template -->
<template>
    <form @submit.prevent="submitForm" class="form">
      <label>First Name</label>
      <input type="text" v-model="form.firstName" required />
      <label>Last Name</label>
      <input type="text" v-model="form.lastName" required />
      <label>Email</label>
      <input type="email" v-model="form.email" required />
      <button type="submit">save</button>
    </form>
    <router-link to="/">
      <button class="backbutton">back</button>
    </router-link>
  </template>
  
  <script setup>
  import { ref, watch} from 'vue';
  
  const props = defineProps({ modelValue: Object });
  const emit = defineEmits(['submit']);
  
  const form = ref({ ...props.modelValue });
  
  watch(() => props.modelValue, newVal => {
    form.value = { ...newVal };
  });
  
  const submitForm = () => {
    emit('submit', { ...form.value });
  };
  </script>
  