<template>
	<div class="flex items-center">
		<p>{{ message }}</p>
		<input
			required
			class="w-56 p-1 h-7 rounded-md border-0 outline-0"
			type="text"
			id="name"
			placeholder="Введите свое имя"
		/>
	</div>
</template>

<script>
export default {
	name: 'my-input',
}
</script>

<style scoped></style>
