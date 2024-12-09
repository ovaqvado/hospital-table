<template>
	<div class="flex flex-col gap-4 items-center">
		<h2 class="text-2xl text-sky-400">Врачи</h2>
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
				<tr v-for="doctor in doctors" :key="doctor.id">
					<td class="text-white w-40 border-2 border-white text-center">
						{{ doctor.id }}
					</td>
					<td class="text-white w-40 border-2 border-white text-center">
						{{ doctor.name }}
					</td>
					<td class="text-white w-40 border-2 border-white text-center">
						{{ doctor.jobTitle }}
					</td>
					<td class="text-white w-40 border-2 border-white text-center">
						<button
							@click="edit(doctor)"
							class="text-green-500 hover:text-green-200"
						>
							Изменить
						</button>
						<button
							@click="remove(doctor.id)"
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
			@click="addDoctor"
		>
			Добавить врача
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

		const doctors = computed(() =>
			employees.value.filter(emp => emp.role === 'doctor')
		)

		const addDoctor = () => {
			const newDoctor: Employee = {
				id: Date.now(),
				name: prompt('Введите имя врача') || '',
				role: 'doctor',
				jobTitle: prompt('Введите отделение') || '',
				manager: true,
			}
			addEmployee(newDoctor)
		}

		const edit = (doctor: Employee) => {
			const updatedDoctor: Employee = {
				...doctor,
				name: prompt('Введите новое имя врача', doctor.name) || doctor.name,
				jobTitle:
					prompt('Введите новое отделение', doctor.jobTitle) || doctor.jobTitle,
			}
			addEmployee(updatedDoctor)
		}

		const remove = (id: number) => {
			deleteEmployee(id)
		}

		return {
			doctors,
			addDoctor,
			edit,
			remove,
		}
	},
})
</script>
