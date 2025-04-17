<template>
    <cform :modelValue="contact" @submit="save" />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { addc } from '../store/contacts';
  import { useRouter } from 'vue-router';
  import cform from '../components/cform.vue';
  
  const router = useRouter();
  const contact = ref({ firstName: '', lastName: '', email: '' });
  
  const save = (data) => {
    data.id = Date.now();
    addc(data);
    router.push(`/contacts/${data.id}`);
  };
  </script>
  