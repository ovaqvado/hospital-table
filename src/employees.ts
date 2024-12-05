import { Employees } from './type/type'

const cardiologicalEmployees: Employees = [
	{
		name: 'Мария',
		department: 'кардиологическое',
		manager: false,
		jobTitle: 'Медсестра',
	},
	{
		name: 'Ким',
		department: 'кардиологическое',
		manager: false,
		jobTitle: 'Медсестра',
	},
	{
		name: 'Альберт',
		department: 'кардиологическое',
		manager: false,
		jobTitle: 'Медсестра',
	},
	{
		name: 'Olivia',
		department: 'кардиологическое',
		manager: true,
		jobTitle: 'Врач',
	},
]
const surgicalEmployees: Employees = [
	{
		name: 'Стас',
		department: 'хирургическое',
		manager: false,
		jobTitle: 'Медсестра',
	},
	{
		name: 'Настя',
		department: 'хирургическое',
		manager: true,
		jobTitle: 'Врач',
	},
	{
		name: 'Джон',
		department: 'хирургическое',
		manager: true,
		jobTitle: 'Врач',
	},
	{
		name: 'Джордан',
		department: 'хирургическое',
		manager: false,
		jobTitle: 'Медсестра',
	},
]
export default { cardiologicalEmployees, surgicalEmployees }
