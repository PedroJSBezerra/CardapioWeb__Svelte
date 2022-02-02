<script>
  export let open
  export let toggle
</script>

<div on:click={toggle} class={ open? "button--open" : "button"}>
  <span></span>
  <span></span>
  <span></span>
</div>

<style lang="scss">
  @import '../../styles/colors.scss';
  $dimension: 50px;

  .button {
    align-items: center;
    cursor: pointer;
    display: flex;
    height: $dimension;
    position: relative;
    overflow: hidden;
    width: $dimension;
    z-index: 1;
    justify-content: center;
    
    span {
      background: $text-white;
      border-radius: 2px;
      display: block;
      height: 3px;
      position: absolute;
      transition: all .15s ease;
      width: 25px;
    }

    span:nth-child(1) {
      transform: translateY(-8px);
    }

    span:nth-child(3) {
      transform: translateY(8px);
    }
  }

  .button--open {
    @extend .button;
    position: fixed;
    transition: all 0.4s ease;
    right: .62rem;

    &:hover {
      background: $button-hover-black;
      border-radius: 50%;
    }

    span:nth-child(1) {
      transform: rotateZ(45deg);
    }

    span:nth-child(2) {
      opacity: 0;
      transform: translateX(-$dimension);
    }
  
    span:nth-child(3) {
      transform: rotateZ(-45deg);
    }
  }
</style>