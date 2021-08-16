<template>
	<header
		class="
			w-full
			block
			bg-[#EB690A]
			h-[50px]
			lg:pl-[55px]
			z-100
			flex
			items-center
		"
	>
		<nav
			class="max-w-7xl w-full flex items-center justify-center lg:justify-start"
		>
			<router-link to="/">
				<img src="/logo.png" class="h-6" />
			</router-link>
		</nav>
	</header>
</template>

<style scoped>
header {
	box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
}
</style>
