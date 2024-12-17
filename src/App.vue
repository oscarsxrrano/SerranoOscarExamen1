<script setup>
import { RouterView } from 'vue-router'
import NavComponent from './components/NavComponent.vue';

</script>

<template>
  <NavComponent/>
  
  <div class="container">
    <RouterView :key="$route.path"/>
  </div>
</template>
