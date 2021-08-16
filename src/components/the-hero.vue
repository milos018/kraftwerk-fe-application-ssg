<template>
	<section class="relative overflow-hidden z-10">
		<div
			class="
				w-screen w-full
				h-80
				md:h-96
				lg:h-[450px]
				bg-no-repeat bg-cover bg-center
				z-0
			"
			:style="{
				backgroundImage: `url('/slide_img_0${currentImage}-min.png')`,
			}"
		></div>
		<div
			class="
				w-full
				h-full
				absolute
				top-0
				gap-2
				md:gap-4
				px-4
				lg:px-11
				flex
				justify-between
				items-center
			"
		>
			<div class="flex items-center justify-center">
				<img
					@click="switchImage('prev')"
					src="/silder_nav_left.png"
					class="h-full cursor-pointer"
				/>
			</div>
			<div class="flex flex-col items-center justify-start gap-4">
				<h1
					class="
						max-w-md
						lg:max-w-3xl
						text-[#fff]
						font-bold
						leading-tight
						text-3xl
						md:text-3xl
						lg:text-5xl
						text-center
						pt-14
					"
				>
					Get The Boot A Birds Eye Look Into Mcse Boot Camps
				</h1>
				<div>
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
							py-2
							md:py-3
							px-4
							md:px-12
							items-center
							justify-center
							tracking-wider
						"
					>
						Discover
					</router-link>
				</div>
			</div>
			<div class="flex items-center justify-center">
				<img
					@click="switchImage('next')"
					src="/silder_nav_right.png"
					class="cursor-pointer"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const currentImage = ref<number>(1);
const switchImage = (go: string) => {
	if (go === 'next' && currentImage.value === 3)
		return (currentImage.value = 1);
	if (go === 'prev' && currentImage.value === 1)
		return (currentImage.value = 3);
	if (go === 'next') currentImage.value += 1;
	if (go === 'prev') currentImage.value -= 1;
};
</script>
