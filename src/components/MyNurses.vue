<template>
	<div
		class="flex flex-col mt-7 justify-center items-center gap-12 text-center"
	>
		<div>
			<h2 class="text-cyan-500 mb-7 text-xl">Медсестры</h2>
			<table>
				<thead>
					<tr class="border w-auto">
						<th class="text-white text-lg">Имя</th>
						<th class="text-white text-lg">Отдел</th>
						<th class="text-white text-lg">Менеджер</th>
					</tr>
				</thead>
				<tbody>
					<tr
						class="border w-auto"
						v-for="employee in nurses"
						:key="employee.name"
					>
						<td class="border h-10 w-52 text-white text-lg px-1.5">
							{{ employee.name }}
						</td>
						<td class="border h-10 w-52 text-white text-lg px-1.5">
							{{ employee.department }}
						</td>
						<td class="border h-10 w-52 text-white text-lg px-1.5">
							{{ employee.manager ? '+' : '---' }}
						</td>
						<td
							class="flex h-10 flex-row gap-2 border w-60 items-center px-1.5"
						>
							<button class="text-green-500" @click="editEmployee(index)">
								Редактировать
							</button>
							<p class="text-white">/</p>
							<button class="text-red-500" @click="deleteEmployee(index)">
								Удалить
							</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
import employeesData from '@/employees'

export default {
	data() {
		return {
			employees: [
				...employeesData.cardiologicalEmployees,
				...employeesData.surgicalEmployees,
			],
		}
	},
	computed: {
		nurses() {
			return this.employees.filter(
				employee => employee.jobTitle === 'Медсестра'
			)
		},
	},
}
</script>

<style scoped></style>
