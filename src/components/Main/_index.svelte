<script>
  import Home from '../../routes/Home.svelte'
  import Cardapio from '../../routes/Cardapio.svelte'
  import Router from 'svelte-spa-router'

  const routes = {
    // Exact path 
    '/': Home,
    '/cardapio': Cardapio,
  }
</script>

<main>
  <Router {routes}/>
  
</main>