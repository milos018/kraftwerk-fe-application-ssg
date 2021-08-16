<template>
	<section
		:style="{ 'background-image': `url(/slide_img_0${currentImage}-min.png)` }"
		class="
			w-full
			h-[350px]
			lg:h-[450px]
			relative
			px-4
			lg:px-11
			bg-cover bg-center
			object-cover
		"
	>
		<div class="w-full h-full z-10 flex flex-col justify-center items-center">
			<div class="w-full flex justify-between items-center">
				<img
					@click="switchImage('prev')"
					src="/silder_nav_left.png"
					class="cursor-pointer hover:scale-105 duration-300"
				/>
				<h1
					class="
						max-w-md
						lg:max-w-3xl
						text-[#fff]
						font-bold
						leading-tight
						text-2xl
						md:text-3xl
						lg:text-5xl
						text-center
					"
				>
					Get The Boot A Birds Eye Look Into Mcse Boot Camps
				</h1>
				<img
					@click="switchImage('next')"
					src="/silder_nav_right.png"
					class="cursor-pointer hover:scale-105 duration-300"
				/>
			</div>
			<!-- Discover Button -->
			<router-link
				to="/form"
				class="
					absolute
					bottom-16
					lg:bottom-24
					w-48
					lg:w-56
					h-12
					lg:h-[50px]
					bg-gradient-to-r
					from-[#AF3700]
					to-[#EB690A]
					text-[#fff] text-sm
					md:text-lg
					font-bold
					flex
					items-center
					justify-center
					tracking-wider
				"
			>
				Discover
			</router-link>
		</div>
	</section>
</template>

<script setup lang="ts">
const currentImage = ref(1);
const switchImage = (go: String) => {
	if (go === 'next' && currentImage.value === 3)
		return (currentImage.value = 1);
	if (go === 'prev' && currentImage.value === 1)
		return (currentImage.value = 3);
	if (go === 'next') currentImage.value += 1;
	if (go === 'prev') currentImage.value -= 1;
};
</script>

<style scoped></style>
