<script>
  import Logo from './Logo.svelte'
  import Nav from './Nav.svelte'
  import Menu from './Menu.svelte'
  import MenuButton from './MenuButton.svelte'

  let open = false
  
  let header

  console.log(header)

  let toggle = () => {
    open = !open
  }
  
</script>

<header class="header" bind:this={header}>
  <Nav>
    <Logo />
    <MenuButton {open} {toggle}/>
    <Menu {toggle} {open}/>
  </Nav>
</header>

<style lang="scss">
  @import '../../styles/colors.scss';

  header {
    background: $primary;
  }
</style>