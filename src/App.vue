<template>
	<the-header></the-header>
	<router-view />
</template>

<script setup>
import TheHeader from '~/components/the-header.vue';
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
button {
	font-family: 'Arial';
}

img {
	max-width: 100%;
	display: block;
}
</style>
