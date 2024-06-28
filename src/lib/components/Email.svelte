<script>
  export let width = "w-full";
  let submitted = false;

  async function handleSubmit(e) {
    const formData = new FormData(e.target);

    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }

    const response = await fetch("/api/add-email", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle the response accordingly
    if (response.ok) {
      submitted = true;
    } else {
      console.error("Failed to submit form");
    }

    e.target.reset();
  }
</script>
<!-- todo: email fail doesn't display correctly. Still shows success -->
<div
  class={`${width} max-w-[450px] email bg-secondary-50 text-on-primary-token mx-auto rounded-2xl p-8`}
>
  {#if !submitted}
    <!-- <form class="form block" on:submit|preventDefault={handleSubmit}>
      <label for="email" class="font-light"
        >Email <span class="text-success-700 font-light">(required)</span
        ></label
      >
      <input
        class="w-full p-2 my-4 rounded-none border-[1px] border-success-500"
        type="email"
        id="email"
        name="email"
        value=""
      />
      <button
        class="block mx-auto mb-4 btn btn-lg bg-gradient-to-br variant-gradient-primary-tertiary"
        type="submit">Join</button
      >
    </form> -->
    <p>Still working on it, email sign up coming soon!</p>
  {:else}
    <h2 class="text-h2-scale text-center">Thank you for joining!</h2>
  {/if}
</div>
