<template>
    <div>
      <input v-model="search" placeholder="Search..." class="input" />
      <ul>
        <li v-for="contact in filtered" :key="contact.id">
          <router-link :to="`/contacts/${contact.id}`">
            {{ contact.firstName }} {{ contact.lastName }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import { sorted } from '../store/contacts';
  
  const search = ref('');
  const filtered = computed(() =>
    sorted.value.filter(c =>
      `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.value.toLowerCase())
    )
  );
  </script>
  