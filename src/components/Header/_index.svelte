<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
  import Menu from './Menu.svelte'
  import MenuButton from './MenuButton.svelte'

  let open = false
  
  let toggle = () => {
    open = !open
  }

  let logoSrc = ''

  let links = [
    {
      name: "Início",
      url: "#/"
    },
    {
      name: "Cardápio",
      url: "#/cardapio"
    },
    {
      name: "Horários",
      url: "#/"
    },
    {
      name: "Quem Somos",
      url: "#/"
    },
  ]
</script>

<header class="header">
  <Logo {logoSrc}/>
  <Nav>
    <MenuButton {open} {toggle}/>
    <Menu {toggle} {open} {links}/>
  </Nav>
</header>

<style>
  header {
    display: flex;
    padding: 1rem .62rem;
    justify-content: space-between;
    align-items: center;
    background: #ddd;
  }
</style>