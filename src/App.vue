<script setup lang="ts">
import MyHeader from './components/MyHeader.vue'
</script>

<template>
	<div
		id="app"
		class="flex w-screen items-center h-screen flex-col bg-gray-800"
	>
		<MyHeader />
		<router-view />
	</div>
</template>

<style></style>
