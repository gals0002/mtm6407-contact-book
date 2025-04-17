<template>
    <detail v-if="contact" :contact="contact" />
  </template>
  
  <script setup>
  import { contacts } from '../store/contacts';
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  import detail from '../components/detail.vue';
  
  const route = useRoute();
  const contact = computed(() => contacts.value.find(c => c.id === Number(route.params.id)));
  </script>
  