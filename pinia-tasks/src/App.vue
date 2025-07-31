<template>
  <main>
    <header>
      <img src="/assets/pinia-logo.svg" alt="pinia-logo">
      <h1>Pinia Tasks</h1>
    </header>

    <nav class="filter">
      <button @click="toggle='all'">All</button>
      <button @click="toggle='favs'">Favs</button>
    </nav>

    <div class="task-list" v-if="toggle==='all'">
      <h3>All Tasks</h3>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task"></TaskDetails>
      </div>
    </div>

    <div class="task-list" v-if="toggle==='favs'">
      <h3>Favorite Taks</h3>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task"></TaskDetails>
      </div>
    </div>
  </main>
</template>

<script>
  import { useTaskStore } from './stores/TaskStore';
  import TaskDetails from './components/TaskDetails.vue';
  import { ref } from 'vue';

  export default {
    components: { TaskDetails},
    setup(){
      const taskStore = useTaskStore();

      const toggle=ref('all');
    
      return {
        taskStore,toggle,
      }
    }
  }
</script>