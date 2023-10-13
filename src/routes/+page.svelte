<script>
  import { onMount } from "svelte";
  import Box from "$lib/components/Box.svelte";
  import Email from "$lib/components/Email.svelte";
  import BlurBackground from "$lib/components/BlurBackground.svelte";
  import AnimateItem from "$lib/components/AnimateItem.svelte";
  import {
    colorPalette,
    hue,
    hueComplimentary1,
    hueComplimentary2,
  } from "$lib/stores.js";

  import { inview } from "svelte-inview";

  import { Accordion, AccordionItem } from "@skeletonlabs/skeleton";
  import { LightSwitch } from "@skeletonlabs/skeleton"; // todo: change all elements to be light and dark theme
  import { Modal, getModalStore } from "@skeletonlabs/skeleton";

  import tag from "$lib/assets/tag.png";
  import poster from "$lib/assets/video-placeholder.png";
  import video from "$lib/assets/rake-dark.mp4";
  import circle from "$lib/assets/circle.png";
  import one from "$lib/assets/one.png";
  import two from "$lib/assets/two.png";
  import three from "$lib/assets/three.png";

  let blurBackgroundComponent;
  let handleColorChange;
  let landing;

  $: innerWidth = 0;
  let bigFont 
  $: calcFontSize(innerWidth);

  $: cssColors = `--dark-color: hsl(${$hue}, 100%, 9%);
    --light-color: hsl(${$hue}, 95%, 98%);
    --base: hsl(${$hue}, 95%, 50%);
    --complimentary1: hsl(${$hueComplimentary1}, 95%, 50%);
    --complimentary2: hsl(${$hueComplimentary2}, 95%, 50%);

    --bg-gradient: linear-gradient(
      to bottom,
      hsla(${$hue}, 95%, 99%, .5),
      hsla(${$hue}, 95%, 95%, .5)
    );`;

  let open = [
    [false, false, false],
    [false, false, false],
  ];
  function handleAccordionItem(list, index) {
    // toggle open and close all others in list
    if (!open[list][index]) {
      open[list].forEach((element) => {
        element = false;
      });
      for (let i = 0; i < open[list].length; i++) {
        open[list][i] = false;
      }
      open[list][index] = true;
    }
    // otherwise, close
    else {
      open[list][index] = false;
    }
  }
  const modalStore = getModalStore();
  const modalComponent = {
    // Pass a reference to your custom component
    ref: Email,
    // Add the component properties as key/value pairs
    props: { width: "w-10/12 md:w-4/12" },
    // Provide a template literal for the default component slot
  };
  const modal = {
    type: "component",
    component: modalComponent,
  };

  function openModal() {
    modalStore.trigger(modal);
  }

  function scrollTo(element) {
    element.scrollIntoView();
  }

  function calcFontSize(innerWidth) {
    
    if (bigFont != undefined) {
      let scaleSource = innerWidth,
        scaleFactor = 0.35,
        maxScale = 600,
        minScale = 30; //Tweak these values to taste

      let fontSize = scaleSource * scaleFactor; //Multiply the width of the body by the scaling factor:

      if (fontSize > maxScale) fontSize = maxScale;
      if (fontSize < minScale) fontSize = minScale; //Enforce the minimum and maximums
      bigFont.style.fontSize = fontSize + "%";
    }
  }

  let writingBlock;
  let videoRef;

  onMount(() => {
    // bug: on hot reload it creates multiple instances of typewriter animation
    // array with texts to type in typewriter
    var dataText = [
      "create a secure and HIPAA-compliant endpoint to access anonymized patient data",
      "separate global web traffic by country ip source",
      "add new layers of security to protect user data",
      "make a system to automatically scale our existing infrastructure",
    ];

    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        writingBlock.textContent = text.substring(0, i + 1);
        setTimeout(function () {
          typeWriter(text, i + 1, fnCallback);
        }, 50);
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 700);
      }
    }
    function StartTextAnimation(i) {
      if (dataText[i] === undefined) {
        setTimeout(function () {
          StartTextAnimation(0);
        }, 700);
      } else if (i < dataText[i].length) {
        typeWriter(dataText[i], 0, function () {
          StartTextAnimation(i + 1);
        });
      }
    }
    StartTextAnimation(0);
  });

  onMount(function () {
    handleColorChange = function () {
      blurBackgroundComponent.changeColor();
    };
  });
</script>

<svelte:window bind:innerWidth />

<div class="wrapper max-w-[1500px] mx-auto" style={cssColors}>
  <div
    class="h-[100vh] w-full mx-auto flex justify-evenly flex-col align-center bg-surface-500 relative z-50"
  >
    <div class="marquee text-xl">
      <ul class="marquee__content">
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
      </ul>

      <ul aria-hidden="true" class="marquee__content">
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
        <li>Welcome To</li>
      </ul>
    </div>
    <!-- text-[40vmin] leading-[40vmin] lg:text-[55vmin] lg:leading-[55vmin] -->
    <div bind:this={bigFont}>
      <h1 class={`text-primary-500 text-[6em] leading-none text-center font-semibold`}>
        Rake
      </h1>
    </div>
    <button
      type="button"
      on:click={() => scrollTo(landing)}
      class="btn w-8/12 sm:w-3/12 sm:px-32 mx-auto py-6 variant-ringed-success hover:hover:variant-filled-success"
      >Click to Deploy
    </button>
  </div>

  <div class="landing w-full relative !z-10" bind:this={landing}>
    <svg
      viewBox="0 0 1500 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="pb-20"
    >
      <path
        d="M750.744 99.9872C360.238 101.319 0 0 0 0H1500C1500 0 1141.25 98.6556 750.744 99.9872Z"
        class="fill-surface-500"
      />
    </svg>

    <img src={tag} class="w-11/12 sm:w-9/12 m-auto" />
    <div class="join py-20 px-0 sm:p-20 flex justify-center align-center">
      <button
        type="button"
        on:click={openModal}
        class="btn w-10/12 sm:w-auto sm:px-32 py-6 variant-ghost-tertiary hover:hover:variant-ghost-primary"
        >Join the waitlist
      </button>
      <Modal
        position="items-start"
        transitionInParams={{ duration: 150, opacity: 0, x: 0, y: -100 }}
        transitionOutParams={{ duration: 150, opacity: 0, x: 0, y: -100 }}
      />
    </div>
    <div class="below w-10/12 mx-auto">
      <video
        class="mx-auto"
        {poster}
        controls
        muted
        disablepictureinpicture
        controlsList="nodownload noremoteplayback noplaybackrate nomode"
        loop
        bind:this={videoRef}
        use:inview
        on:inview_enter={() => videoRef.play()}
        on:inview_leave={() => videoRef.pause()}
      >
        <source src={video} />
        <track kind="captions" />
      </video>

      <AnimateItem>
        <h3
          class="text-center font-semibold pt-12 pb-24 text-xl sm:text-4xl leading-relaxed"
        >
          Rake allows users to <span
            class="text-primary-500 bg-secondary-500 font-bold"
          >
            <strong>deploy</strong>
          </span>
          resources straight to their cloud platform with a simple
          <span class="text-primary-500 bg-secondary-500"
            ><strong>drag and drop</strong></span
          > interface.
        </h3>
      </AnimateItem>
    </div>
  </div>

  <div
    class="firstinfo bg-secondary-50 text-on-primary-token pt-[3.3vmax] pb-[3.3vmax]"
  >
    <!-- todo change width on sm -->
    <div
      class="w-10/12 mx-auto flex items-center justify-between flex-col md:flex-row gap-8"
    >
      <AnimateItem>
        <div class="textgroup pl-6 w-full pt-7">
          <h2 class="text-h2-scale font-[650] pb-[11px]">
            A groundbreaking new way to deploy your cloud infrastructure
          </h2>
          <p class="leading-[1.8] font-light">
            Transform your cloud deployment workflow. Once deployed,
            configurations and manifests are generated and sent to a managed
            kubernetes cluster. This cluster assumes responsibility for
            synchronizing statuses between your diagram and the cloud. Letting
            you spend less time bug squashing and more time for innovating.
          </p>
        </div>
      </AnimateItem>
      <img class="w-full md:w-6/12 object-contain px-12" src={circle} />
    </div>
  </div>

  <svg
    width="1512"
    height="80"
    viewBox="0 0 1512 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="bg-secondary-50 w-full"
  >
    <line
      x1="-0.14665"
      y1="77.0036"
      x2="1511.85"
      y2="3.00358"
      stroke="black"
      stroke-width="6"
    />
  </svg>

  <!-- todo: fix padding to be more reactive on screensize -->
  <div class="secondinfo bg-secondary-50 text-on-primary-token">
    <div class="flex flex-wrap justify-evenly px-12 pb-10 md:pb-28">
      <div class="left w-full sm:w-4/12 min-w-[210px] pt-10 md:pt-24">
        <h2 class="text-h2-scale font-semibold pb-[4vh] text-[#2a97fe]">
          Complex tasks made easy
        </h2>
        <p class="leading-[1.8] font-light">
          Rake is quick, user-friendly, and highly customizable. Everything is
          optimized so you can spend less time developing and more time growing
          your business.
        </p>
      </div>

      <div class="right pt-14 w-full sm:w-4/12 min-w-[210px]">
        <h2 class="text-h2-scale font-semibold pb-[4vh]">
          Optimizing an aging system
        </h2>
        <p class="leading-[1.8] font-light">
          Manually coding entire systems, testing, and debugging is a thing of
          the past. Rake is the next evolution is in developing cloud
          technologies.
        </p>
      </div>
    </div>

    <!-- todo: change on mobile so cards take up less space -->
    <AnimateItem>
      <div
        class="flex flex-wrap justify-evenly flex-col gap-24 md:gap-0 md:flex-row"
      >
        <Box
          shadow="drop-shadow-[-16px_16px_17px_rgb(182,208,242)]"
          upDown="top-10"
        >
          <img slot="icon" src={one} />
          <p slot="info" class="font-medium">
            Trade long complex configs for efficient interfaces
          </p>
        </Box>
        <Box shadow="drop-shadow-[-16px_16px_17px_rgb(188,201,218)]">
          <img slot="icon" src={two} />
          <p slot="info" class="font-medium">
            Retain the functionality of code with the simplicity of visuals
          </p>
        </Box>
        <Box
          shadow="drop-shadow-[-16px_16px_17px_rgb(191,194,198)]"
          upDown="-top-10"
        >
          <img slot="icon" src={three} />
          <p slot="info" class="font-medium">
            Optimize variable management for efficiency and accuracy
          </p>
        </Box>
      </div>
    </AnimateItem>
  </div>

  <div class="pt-10 pb-[3.3vmax] bg-secondary-50" />

  <div class="overflow-x-hidden">
    <div
      class="bg-secondary-50 w-full h-0 border-solid border-x-transparent border-l-[100vw] border-r-0 border-b-[6vw] border-b-surface-800"
    />
  </div>
  <div class="py-20">
    <h2 class="text-h2-scale font-semibold pb-[11px] text-center pb-20">
      Simplifying the system.
    </h2>
    <div
      class="w-10/12 mx-auto md:w-full flex justify-evenly flex-col md:flex-row pt-10 gap-10 md:gap-0"
    >
      <div class="leftList w-full md:w-4/12 pb-10">
        <h3 class="text-h3-scale px-4 pb-4 border-b-[1px] border-white">
          Development now
        </h3>
        <!-- todo: once one is open it cannot be closed -->
        <!-- todo: on different window sizes the items don't align -->
        <Accordion padding="py-6 px-6">
          <AccordionItem
            class="border-y-[1px] border-white"
            open={open[0][0]}
            on:click={() => {
              handleAccordionItem(0, 0);
            }}
          >
            <svelte:fragment slot="summary"
              ><span class="text-lg">Lengthy development times</span
              ></svelte:fragment
            >
            <svelte:fragment slot="content"
              ><span class="text-md font-extralight"
                >Typically it would take a team of people weeks, if not months,
                of work to do something Rake can handle in a few minutes.</span
              ></svelte:fragment
            >
          </AccordionItem>
          <AccordionItem
            class="border-b-[1px] border-white "
            open={open[0][1]}
            on:click={() => {
              handleAccordionItem(0, 1);
            }}
          >
            <svelte:fragment slot="summary"
              ><span class="text-lg">Inefficient flow</span></svelte:fragment
            >
            <svelte:fragment slot="content"
              ><span class="text-md font-extralight"
                >After initial diagramming of the project, there is constant
                back and forth between development and testing. Creating a
                clunky and outdated workflow.</span
              ></svelte:fragment
            >
          </AccordionItem>
          <AccordionItem
            class="border-b-[1px] border-white "
            open={open[0][2]}
            on:click={() => {
              handleAccordionItem(0, 2);
            }}
          >
            <svelte:fragment slot="summary"
              ><span class="text-lg">Cumbersome to manage</span
              ></svelte:fragment
            >
            <svelte:fragment slot="content"
              ><span class="text-md font-extralight"
                >Deploying cloud resources can be cumbersome. Navigating
                configurations, managing security, and understanding intricate
                platforms require deep expertise, overshadowing the cloud's
                inherent flexibility and scalability.</span
              ></svelte:fragment
            >
          </AccordionItem>
        </Accordion>
      </div>

      <div class="rightList w-full md:w-4/12">
        <h3 class="text-h3-scale px-4 pb-4 border-b-[1px] border-white">
          Development using <span class="text-primary-500">Rake</span>
        </h3>
        <Accordion padding="py-6 px-6">
          <AccordionItem
            class="border-y-[1px] border-white "
            open={open[1][0]}
            on:click={() => {
              handleAccordionItem(1, 0);
            }}
          >
            <svelte:fragment slot="summary"
              ><span class="text-lg">Instant Deployment</span></svelte:fragment
            >
            <svelte:fragment slot="content"
              ><span class="text-md font-extralight"
                >No more waiting for teams of people to build and modify
                systems, everything can now be done, from as little as one user,
                in a fraction of the time.</span
              >
            </svelte:fragment>
          </AccordionItem>
          <AccordionItem
            class="border-b-[1px] border-white "
            open={open[1][1]}
            on:click={() => {
              handleAccordionItem(1, 1);
            }}
          >
            <svelte:fragment slot="summary"
              ><span class="text-lg">Live Resource Managing</span
              ></svelte:fragment
            >
            <svelte:fragment slot="content"
              ><span class="text-md font-extralight"
                >No more bug chasing or error checking, your entire systems’
                resources are managed live between your cloud platform. You have
                complete control and visibility at all times.</span
              ></svelte:fragment
            >
          </AccordionItem>
          <AccordionItem
            class="border-b-[1px] border-white "
            open={open[1][2]}
            on:click={() => {
              handleAccordionItem(1, 2);
            }}
          >
            <svelte:fragment slot="summary"
              ><span class="text-lg">Simple Interface</span></svelte:fragment
            >
            <svelte:fragment slot="content"
              ><span class="text-md font-extralight"
                >Using a diagram to accomplish all of your development tasks
                results in one simple to use interface at the heart of all of
                your infrastructure needs.</span
              ></svelte:fragment
            >
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>

  <div class="bg-secondary-50 building text-on-primary-token relative w-full">
    <BlurBackground bind:this={blurBackgroundComponent} />
    <div class="moveBackground relative z-20 py-[6vw] w-full h-full">
      <div
        class="mx-auto py-16 w-[calc(100%-12vw)] rounded-2xl backgroundGradient"
      >
        <h2
          class="w-11/12 md:w-full text-4xl md:text-h2-scale font-bold pb-16 text-center text-[var(--dark-color)]"
        >
          Building for the <span class="text-gradient">future</span>
        </h2>
        <div
          class="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-10 pb-16"
        >
          <p
            class="mx-auto md:mx-0 w-11/12 md:w-3/12 text-xl md:text-2xl font-bold md:font-extrabold text-[var(--dark-color)]"
          >
            With the introduction of AI, building your entire system will be
            just a few words away…
          </p>
          <div
            class="relative text-on-secondary-token bg-surface-500 w-10/12 md:w-4/12 h-[200px] md:h-auto flex items-center justify-center rounded-2xl"
          >
            <div class="w-9/12 p-2 text-center font-extrabold">
              <p class="inline text-gradient">"</p>
              <p
                class="inline text-[var(--light-color)]"
                bind:this={writingBlock}
              >
                create a secure and HIPAA-compliant endpoint to access
                anonymized patient data
              </p>
              <p class="inline text-gradient">"</p>
            </div>
            <!-- todo get button to change color -->
            <button
              class="absolute bg-[var(--light-color)] p-4 rounded-lg bottom-0 translate-y-1/2 transition-all duration-100 delay-0 text-[var(--dark-color)] hover:p-6 active:p-8"
              on:click={handleColorChange}
            >
              Deploy With Rake
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="join">
    <div class="h-[80vh] w-fit mx-auto py-20">
      <h2 class="text-h2-scale w-fit font-bold pb-10 pr-24">
        Revolutionize Your<br /> Cloud Development<br />with
        <span class="text-primary-500">Rake</span>
      </h2>
      <Email />
    </div>
  </div>
  <footer class="p-10 font-extralight text-sm">
    Property of Rake LLC. All rights reserved. 2023
  </footer>
</div>

<style>
  .building {
    background: rgb(255, 255, 255);
    background: linear-gradient(
      174deg,
      rgba(var(--color-primary-300)) 0%,
      rgba(var(--color-primary-200)) 30%,
      /* rgba(255, 255, 255, 1) 35%, */ rgba(var(--color-tertiary-500)) 100%
    );
  }

  .text-gradient {
    background-image: linear-gradient(
      45deg,
      var(--base) 25%,
      var(--complimentary2)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
  }

  .backgroundGradient {
    background: var(--bg-gradient);
  }

  .marquee {
    --gap: 2rem;
    display: flex;
    overflow: hidden;
    user-select: none;
    gap: var(--gap);
  }

  .marquee__content {
    flex-shrink: 0;
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    gap: var(--gap);
    animation: scroll 35s linear infinite;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - var(--gap)));
    }
  }
</style>
