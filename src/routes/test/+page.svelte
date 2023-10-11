<script>
  import BlurBackground from "$lib/components/BlurBackground.svelte";
</script>

<div
  class="building bg-secondary-50 text-on-primary-token relative w-full h-full"
>
  <BlurBackground />
  <div class="h-auto">
    <div
      class="moveBackground relative z-20 py-16 bg-primary-500 mx-auto w-[calc(100%-4vw)] h-[50%]"
    >
      <h2
        class="w-11/12 sm: w-full text-4xl md:text-h2-scale font-bold pb-16 text-center"
      >
        Building for the future
      </h2>
      <div
        class="flex flex-col md:flex-row justify-center items-center gap-10 pb-16"
      >
        <p
          class="mx-auto md:mx-0 w-11/12 md:w-3/12 text-xl md:text-2xl font-bold md:font-extrabold"
        >
          With the introduction of AI, building your entire system will be just
          a few words away…
        </p>
        <div
          class="text-on-secondary-token bg-surface-500 w-10/12 md:w-4/12 h-[200px] md:h-[16vw] flex items-center justify-center rounded-2xl"
        >
          <div class="w-9/12 p-2 text-center font-extrabold">
            <p class="inline text-[#2a97fe]">"</p>
            <p class="inline" id="writingBlock">
              create a secure and HIPAA-compliant endpoint to access anonymized
              patient data
            </p>
            <p class="inline text-[#2a97fe]">"</p>
            <!-- <div>Deploy with Rake</div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
