<script>
  import { inview } from "svelte-inview";

  let isInView;
  let scrollDirection;
  const options = {
    rootMargin: "-100px",
    unobserveOnEnter: true,
  };

  const handleChange = ({ detail }) => {
    isInView = detail.inView;
    scrollDirection = detail.scrollDirection.vertical;
  };
</script>

<div
  use:inview={options}
  on:change={handleChange}
  class="opacity-0"
  class:slide-down-blurred-bottom={scrollDirection === "down" && isInView}
  class:slide-up-blurred-bottom={scrollDirection === "up" && isInView}
  class:opacity={isInView}
>
  <slot />
</div>

<style>
  .slide-up-blurred-bottom {
    -webkit-animation: slide-up-blurred-bottom 0.6s
      cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: slide-up-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    opacity: 1;
  }

  .slide-down-blurred-bottom {
    -webkit-animation: slide-down-blurred-bottom 0.6s
      cubic-bezier(0.23, 1, 0.32, 1) both;
    animation: slide-down-blurred-bottom 0.6s cubic-bezier(0.23, 1, 0.32, 1) both;
    opacity: 1;
  }

  /**
 * ----------------------------------------
 * animation slide-up-blurred-bottom
 * ----------------------------------------
 */
  @-webkit-keyframes slide-up-blurred-bottom {
    0% {
      -webkit-transform: translateY(500px);
      transform: translateY(500px);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-up-blurred-bottom {
    0% {
      -webkit-transform: translateY(500px);
      transform: translateY(500px);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @-webkit-keyframes slide-down-blurred-bottom {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
  @keyframes slide-down-blurred-bottom {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-transform-origin: 50% 100%;
      transform-origin: 50% 100%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
  }
</style>
