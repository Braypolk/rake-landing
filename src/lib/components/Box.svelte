<script>
    export let shadow = "drop-shadow-[-16px_16px_17px_rgb(182,208,242)]";
    export let upDown = "";
</script>

<div class={`box1 w-3/12 min-w-[217px] relative ${upDown}`}>
  <div
    class={`w-full h-full relative pb-16 rounded-2xl bg-secondary-50 ${shadow} z-10`}
  >
    <!-- todo: change on sm screen size -->
    <div
      class="w-7/12 relative mx-auto text-center text-lg flex flex-wrap z-30"
    >
      <!-- todo: fix width, doesn't resize great -->
      <div class="relative mx-auto max-w-[100px]">
        <slot name="icon"/>
      </div>
      <!-- todo: increase font weight -->
      <slot name="info"/>
    </div>
    <div
      class="absolute w-6/12 h-2/6 z-[1] box-content p-4 -top-8 rounded-2xl left-1/2 transform -translate-x-1/2 bg-secondary-50"
    />
  </div>
  <div
    class="absolute w-6/12 h-2/6 z-0 box-content p-4 -top-8 rounded-2xl left-1/2 transform -translate-x-1/2 bg-secondary-50 drop-shadow-[-16px_16px_17px_rgb(182,208,242)]"
  />
</div>
