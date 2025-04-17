<template>
  <div>
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p><strong>Email:</strong> {{ contact.email }}</p>

    <router-link :to="`/edit/${contact.id}`">
      <button>edit</button>
    </router-link>

    <button @click="removec">delete</button>

    <!-- back button -->
    <router-link to="/">
      <button class="backbutton">back</button>
    </router-link>
  </div>
</template>
<!-- grabs all the components -->
<script setup>
import { useRouter } from 'vue-router';
import { deletec } from '../store/contacts';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { contacts } from '../store/contacts';
// router stuff
const route = useRoute();
const router = useRouter();
const id = Number(route.params.id);
const contact = computed(() => contacts.value.find(c => c.id === id));
// actually removes the contact
function removec() {
  {
    deletec(id);
    router.push('/');
  }
}
</script>
