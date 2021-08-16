<template>
	<div
		class="flex gap-2"
		:class="
			$props.type === 'radio' || $props.type === 'checkbox'
				? 'flex-row items-center'
				: 'flex-col'
		"
	>
		<label
			:for="$props.label"
			:class="[
				$props.type === 'radio' || $props.type === 'text' || 'email'
					? 'font-bold'
					: 'font-normal',
			]"
		>
			{{ $props.text }}</label
		>
		<input :type="$props.type" :placeholder="$props.ph || $props.text" />
	</div>
</template>

<script setup lang="ts">
const props = defineProps({
	text: String,
	type: String,
	label: String,
	ph: String,
	modelValue: String || Boolean,
});
</script>

<style scoped>
input[type='checkbox'] {
	width: 1.5rem;
	height: 1.5rem;
}

input[type='checkbox'] {
	border-radius: 0.5rem;
}

input[type='text'] {
	padding: 0.5rem;
	border-radius: 0.4rem;
	border: 0.1rem solid lightgrey;
}
</style>
