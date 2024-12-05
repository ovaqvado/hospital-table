<template>
	<div class="flex flex-col items-center gap-12 mt-7 home w-4/5">
		<div class="flex flex-col gap-3 text-center">
			<h2 class="text-sky-700 text-2xl">Врач информация</h2>
			<p class="text-white text-center">
				Он занимается постановкой диагнозов, разрабатывает стратегии лечения,
				проводит медицинские процедуры, включая операционное вмешательство. Его
				профессиональной задачей является сохранение и восстановление здоровья
				человека, его жизненных функций. Врач должен иметь высшее образование и
				подтверждать свою квалификацию.
			</p>
		</div>
		<div class="flex flex-col w-9/12 gap-3 text-center">
			<h2 class="text-sky-700 text-2xl">Медсестра информация</h2>
			<p class="text-white text-center">
				Медсестра (медбрат) — специалист со средним образованием в области
				здравоохранения, занимающийся оказанием медицинской помощи пациентам и
				исполнением врачебных назначений. Медсестра не может принимать
				самостоятельных решений о лечении, в этом она подчиняется врачу.
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'HomeView',
})
</script>
