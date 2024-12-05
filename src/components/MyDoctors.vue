<template>
	<div class="flex flex-col mt-7 items-center gap-12 text-center">
		<div>
			<h2 class="text-cyan-500 mt-7 mb-7 text-xl">Врачи</h2>
			<table>
				<thead>
					<tr class="border w-auto">
						<th class="text-white w-52 text-xl">Имя</th>
						<th class="text-white w-52 text-xl">Отдел</th>
						<th class="text-white w-52 text-xl">Менеджер</th>
					</tr>
				</thead>
				<tbody>
					<tr
						class="border w-auto"
						v-for="employee in doctors"
						:key="employee.name"
					>
						<td class="border h-10 w-52 text-white text-lg px-1.5">
							{{ employee.name }}
						</td>
						<td class="border h-10 w-52 text-white text-lg px-1.5">
							{{ employee.department }}
						</td>
						<td class="border h-10 text-white w-52 text-lg px-1.5">
							{{ employee.manager ? '+' : '---' }}
						</td>
						<td
							class="flex h-10 flex-row gap-2 border w-60 items-center px-1.5"
						>
							<button class="text-green-500">Редактировать</button>
							<p class="text-white">/</p>
							<button class="text-red-500">Удалить</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<form
			@submit.prevent="addEmployee"
			class="flex flex-col pt-5 pb-5 gap-2 justify-center items-center bg-gray-900"
		>
			<h2 class="text-white text-2xl">Добавить сотрудника</h2>
			<my-input />
			<my-select v-model="newEmployee.jobTitle" />
			<button type="submit" class="text-yellow-500 bg-gray-600 p-2 rounded">
				Добавить
			</button>
		</form>
	</div>
</template>

<script>
import employeesData from '@/employees'
import MyInput from './UI/MyInput.vue'
import MySelect from './UI/MySelect.vue'

export default {
	components: { MyInput, MySelect },
	data() {
		return {
			employees: [
				...employeesData.cardiologicalEmployees,
				...employeesData.surgicalEmployees,
			],
			newEmployee: {
				name: '',
				department: '',
				manager: false,
				jobTitle: '',
			},
		}
	},
	computed: {
		doctors() {
			return this.employees.filter(employee => employee.jobTitle === 'Врач')
		},
	},
	methods: {
		addEmployee() {
			if (this.newEmployee.name && this.newEmployee.jobTitle) {
				this.employees.push({ ...this.newEmployee })
				this.newEmployee.name = ''
				this.newEmployee.jobTitle = ''
			} else {
				alert('Пожалуйста, заполните все поля')
			}
		},
	},
}
</script>

<style scoped></style>
