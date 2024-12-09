<template>
	<div class="flex flex-col gap-4 items-center">
		<h2 class="text-2xl text-sky-400">Медсестры</h2>
		<table class="border-2 border-white">
			<thead>
				<tr class="w-40 border-2 border-white text-center">
					<th class="text-sky-700">ID</th>
					<th class="text-sky-700">Имя</th>
					<th class="text-sky-700">Отделение</th>
					<th class="text-sky-700">Действия</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="nurse in nurses" :key="nurse.id">
					<td class="text-white w-40 border-2 border-white text-center">
						{{ nurse.id }}
					</td>
					<td class="text-white w-40 border-2 border-white text-center">
						{{ nurse.name }}
					</td>
					<td class="text-white w-40 border-2 border-white text-center">
						{{ nurse.jobTitle }}
					</td>
					<td class="text-white w-40 border-2 border-white text-center">
						<button
							@click="edit(nurse)"
							class="text-green-500 hover:text-green-200"
						>
							Изменить
						</button>
						<button
							@click="remove(nurse.id)"
							class="text-red-500 hover:text-red-200"
						>
							Удалить
						</button>
					</td>
				</tr>
			</tbody>
		</table>
		<button
			class="bg-gray-400 px-2 text-black rounded-lg hover:opacity-35"
			@click="addNurse"
		>
			Добавить медсестру
		</button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useEmployeeStore } from '../employeesStore'
import { Employee } from '../type/type'

export default defineComponent({
	setup() {
		const { employees, addEmployee, deleteEmployee } = useEmployeeStore()

		const nurses = computed(() =>
			employees.value.filter(emp => emp.role === 'nurse')
		)

		const addNurse = () => {
			const newNurse: Employee = {
				id: Date.now(),
				name: prompt('Введите имя медсестры') || '',
				role: 'nurse',
				jobTitle: prompt('Введите отделение') || '',
				manager: false,
			}
			addEmployee(newNurse)
		}

		const edit = (nurse: Employee) => {
			const updatedNurse: Employee = {
				...nurse,
				name: prompt('Введите новое имя медсестры', nurse.name) || nurse.name,
				jobTitle:
					prompt('Введите новое отделение', nurse.jobTitle) || nurse.jobTitle,
			}
		}

		const remove = (id: number) => {
			deleteEmployee(id)
		}

		return {
			nurses,
			addNurse,
			edit,
			remove,
		}
	},
})
</script>
