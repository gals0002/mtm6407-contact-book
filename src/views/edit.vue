<template>
    <cform v-if="contact" :modelValue="contact" @submit="update" />
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { updatec, contacts } from '../store/contacts';
  import { useRoute, useRouter } from 'vue-router';
  import cform from '../components/cform.vue';
  
  const router = useRouter();
  const route = useRoute();
  const contactId = Number(route.params.id);
  const contact = ref(contacts.value.find(c => c.id === contactId));
  
  const update = (data) => {
    updatec(contactId, data);
    router.push(`/contacts/${contactId}`);
  };
  </script>
  