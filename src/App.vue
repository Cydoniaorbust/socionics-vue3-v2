<template>
  <div class="app-container">
    <PageHeader />
    <main class="app-main">
      <RouterView />
    </main>
    <PageFooter />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import PageHeader from '@/components/PageHeader.vue'
import PageFooter from '@/components/PageFooter.vue'
</script>
