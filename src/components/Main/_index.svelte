<script>
  import Router from 'svelte-spa-router'
  import {routes} from '../../routes/_index'
</script>


<main>
  <Router {routes}/>
</main>

<style lang="scss">
  main {
    min-height: 100vh;
  }
</style>