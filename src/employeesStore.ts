import { ref } from 'vue'
import { Employee } from './type/type'

const employees = ref<Employee[]>([
	{
		id: 1,
		manager: false,
		name: 'Alice',
		role: 'nurse',
		jobTitle: 'Кардиология',
	},
	{
		id: 2,
		manager: true,
		name: 'Bob',
		role: 'doctor',
		jobTitle: 'Кардиология',
	},
	{
		id: 3,
		manager: false,
		name: 'Kim',
		role: 'nurse',
		jobTitle: 'Кардиология',
	},
	{
		id: 4,
		manager: true,
		name: 'Kris',
		role: 'doctor',
		jobTitle: 'Кардиология',
	},
	{
		id: 5,
		manager: false,
		name: 'John',
		role: 'nurse',
		jobTitle: 'Кардиология',
	},
	{
		id: 6,
		manager: true,
		name: 'Nasty',
		role: 'doctor',
		jobTitle: 'Кардиология',
	},
	{
		id: 7,
		manager: false,
		name: 'Jordan',
		role: 'nurse',
		jobTitle: 'Кардиология',
	},
	{
		id: 8,
		manager: true,
		name: 'David',
		role: 'doctor',
		jobTitle: 'Кардиология',
	},
])

export function useEmployeeStore() {
	const addEmployee = (employee: Employee) => {
		employees.value.push(employee)
	}

	const editEmployee = (id: number, updatedEmployee: Employee) => {
		const index = employees.value.findIndex(emp => emp.id === id)
		if (index !== -1) {
			employees.value[index] = updatedEmployee
		}
	}

	const deleteEmployee = (id: number) => {
		employees.value = employees.value.filter(emp => emp.id !== id)
	}

	return {
		employees,
		addEmployee,
		editEmployee,
		deleteEmployee,
	}
}
