<script>
    export let width = 'w-full'
</script>
<div
  class={`${width} max-w-[450px] email bg-secondary-50 text-on-primary-token mx-auto rounded-2xl p-8`}
>
  <!-- todo: actually make this email sign up work -->
  <form class="form block">
    <label for="email" class="font-light"
      >Email <span class="text-success-700 font-light">(required)</span></label
    >
    <!-- todo: change active state -->
    <input
      class="w-full p-2 my-4 rounded-none border-[1px] border-success-500"
      type="email"
      id="email"
    />
    <input
      class="block mx-auto mb-4 btn btn-lg bg-gradient-to-br variant-gradient-primary-tertiary"
      type="submit"
      value="Join"
    />
  </form>
</div>
