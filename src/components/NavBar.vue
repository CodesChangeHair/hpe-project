<!-- 可复用的导航栏组件 -->
<template>
<!-- html -->
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #397fc7;" data-bs-theme="dark">
  <div class="container">
    <route-link class="navbar-brand" :to="{name: 'home', params: {}}">Navbar</route-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" :to="{name: 'home'}">Use Model</router-link>
        <router-link class="nav-link" :to="{name: 'process'}">3D HPE Process</router-link>
        <router-link class="nav-link" :to="{name: 'contribution'}">Our Contribution</router-link>
      </div>
    </div>
  </div>
</nav>

</template>

<script>
export default {
    name: "NavBar",
}
</script>

<style scoped>

</style>