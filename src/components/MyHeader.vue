<template>
	<div
		class="header flex items-center justify-center bg-gray-700 w-screen h-14"
	>
		<nav class="flex gap-6 text-lg">
			<router-link to="/">Главная</router-link>
			<router-link to="/doctors">Врачи</router-link>
			<router-link to="/nurses">Медсестры</router-link>
		</nav>
	</div>
</template>

<script>
export default {}
</script>

<style scoped>
nav a {
	color: #ffffff;
}

nav a.router-link-exact-active {
	color: #419aff;
}
</style>
