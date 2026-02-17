// external imports
import { defineStore } from 'pinia';
import { ref } from 'vue';

// internal imports
import type { BookInterface } from '@/interfaces/BookInterface.js';

export const useBookStore = defineStore('book', () => {
  const books = ref<BookInterface[]>([]);

  return { books };
});
