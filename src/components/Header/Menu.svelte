<script>
  export let open
  export let links
  export let toggle
</script>

<ul class={ open? "menu--open" : "menu" } on:click={toggle}>
  {#each links as link}
    <li>
      <a href={link.url}>{link.name}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
  .menu {
    display: flex;
    background: #999;
    bottom: 0;
    flex-direction: column;
    list-style-type: none;
    padding-top: 70px;
    position: fixed;
    right: -100%;
    top: 0;
    transition: .35s ease;
    width: 100%;

    li {
      a {
        color: inherit;
        text-decoration: none;
        display: block;
        padding: 1rem .8rem;

        &:hover {
          background: #777;
        }
      }
    }
  }

  .menu--open {
    @extend .menu;
    
    right: 0;
  }
</style>