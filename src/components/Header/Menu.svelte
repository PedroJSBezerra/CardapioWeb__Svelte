<script>
  export let open
  export let toggle
  import { link } from 'svelte-spa-router'
  import { menuLinks } from '../../routes/_index'

</script>

<ul class={ open? "menu--open" : "menu" } on:click={toggle}>
  {#each menuLinks as item}
    <li>
      <a use:link href={item.url}>{item.name}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
  @import '../../styles/colors.scss';

  .menu {
    display: flex;
    background: $primary2;
    bottom: 0;
    flex-direction: column;
    list-style-type: none;
    padding-top: 100px;
    position: fixed;
    right: -100%;
    top: 0;
    transition: .35s ease;
    width: 100%;

    li {
      a {
        color: $text-white;
        text-decoration: none;
        display: block;
        padding: 1rem .8rem;
        transition: all .25s ease;

        &:hover {
          background: $link-hover-black;
        }
      }
    }
  }

  .menu--open {
    @extend .menu;
    
    right: 0;
  }
</style>