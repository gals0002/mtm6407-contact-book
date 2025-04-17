import { ref, computed, watch } from 'vue';

// fallback data
const starter = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Pork',
    email: 'jpork@real.com'
  },
  {
    id: 2,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'jane.doe@true.com'
  },
  {
    id: 3,
    firstName: 'LeBron',
    lastName: 'James',
    email: 'realbron@veryreal.com'
  }
];

// check for existing data
let stored = [];
try {
  const raw = localStorage.getItem('contacts');
  if (raw) stored = JSON.parse(raw);
} catch (e) {
  console.warn('Problem parsing contacts from localStorage:', e);
}

const contacts = ref(stored.length ? stored : starter);

// start ID after the max current one
let nextId = contacts.value.length
  ? Math.max(...contacts.value.map(c => c.id)) + 1
  : 1;

// watch for changes and save to localStorage
watch(contacts, (updatedList) => {
  try {
    localStorage.setItem('contacts', JSON.stringify(updatedList));
  } catch (err) {
    console.error('Failed to save contacts:', err);
  }
}, { deep: true });

// computed: alphabetize by last name
const sorted = computed(() => {
  return [...contacts.value].sort((a, b) => {
    return a.lastName.localeCompare(b.lastName);
  });
});

// add a contact to the list
const addc = (contact) => {
  contact.id = nextId++;
  contacts.value.push(contact);
};

// update contact by id
const updatec = (id, updated) => {
  const i = contacts.value.findIndex(c => c.id === id);
  if (i >= 0) {
    contacts.value[i] = { ...updated, id };
  }
};

// remove a contact by id
const deletec = (id) => {
  contacts.value = contacts.value.filter(c => c.id !== id);
};

export {
  contacts,
  sorted,
  addc,
  updatec,
  deletec
};
