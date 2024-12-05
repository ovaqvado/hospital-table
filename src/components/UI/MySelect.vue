<template>
	<div class="select flex justify-center flex-col gap-2 items-center">
		<select
			required
			class="w-56 p-1 h-7 rounded-md border-0 outline-0"
			@change="handleSpecialityChange"
		>
			<option disabled selected value="">Выберите специальность:</option>
			<option value="Врач">Врач</option>
			<option value="Медсестра">Медсестра</option>
		</select>
		<select
			required
			class="w-56 p-1 h-7 rounded-md border-0 outline-0"
			@change="handleDepartmentChange"
		>
			<option disabled selected value="">Выберите отделение:</option>
			<option value="хирургическое">Хирургическое</option>
			<option value="кардиологическое">Кардиологическое</option>
		</select>
	</div>
</template>
<script>
export default {
	methods: {
		handleSpecialityChange(event) {
			console.log('Выбрана специальность:', event.target.value)
		},
		handleDepartmentChange(event) {
			console.log('Выбрано отделение:', event.target.value)
		},
	},
}
</script>

<style scoped>
.select {
	width: 600px;
}
</style>
