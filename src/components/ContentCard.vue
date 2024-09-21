<template>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <slot></slot>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'ContentCard',
    components: {
    }
  }
  </script>

<style scoped>
.container {
    margin-top: 20px;
}
</style>