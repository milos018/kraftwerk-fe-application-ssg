<template>
  <section
    class="h-96 lg:min-h-[450px] relative bg-center bg-cover"
    :style="{ backgroundImage: `url(/slide_img_0${currentImage}-min.png)` }"
  >
    <div
      class="h-auto w-full absolute top-1/3 flex flex-col gap-4 px-4 lg:px-11"
    >
      <div class="w-full flex justify-between items-center">
        <img
          @click="switchImage('prev')"
          src="/silder_nav_left.png"
          class="h-full cursor-pointer"
        />
        <h1
          class="
            max-w-md
            lg:max-w-3xl
            text-[#fff]
            font-bold
            leading-tight
            text-3xl
            lg:text-5xl
            text-center
          "
        >
          Get The Boot A Birds Eye Look Into Mcse Boot Camps
        </h1>
        <img
          @click="switchImage('next')"
          src="/silder_nav_right.png"
          class="cursor-pointer"
        />
      </div>
      <div class="flex justify-center">
        <router-link
          to="/form"
          class="
            from-[#AF3700]
            bg-gradient-to-r
            to-[#EB690A]
            text-[#fff] text-sm
            md:text-lg
            font-bold
            flex
            py-3
            px-12
            items-center
            justify-center
            tracking-wider
          "
        >
          Discover
        </router-link>
      </div>
    </div>
    <!-- Discover Button -->
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const currentImage = ref<number>(1);
const switchImage = (go: string) => {
  if (go === "next" && currentImage.value === 3)
    return (currentImage.value = 1);
  if (go === "prev" && currentImage.value === 1)
    return (currentImage.value = 3);
  if (go === "next") currentImage.value += 1;
  if (go === "prev") currentImage.value -= 1;
};
</script>
