<template>
  <main>
    <header>
      <img src="/assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>

    <div class="tasks-list">
      <div v-for="task in taskStore.tasks"></div>
    </div>
  </main>
</template>

<script>
  import { useTaskStore } from './stores/TaskStore';

  export default {
    setup(){
      const taskStore = useTaskStore();
    
      return {
        taskStore,
      }
    }
  }
</script>