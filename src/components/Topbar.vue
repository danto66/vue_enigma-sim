<template>
	<div
		class="flex flex-row items-center h-16 rounded-b-lg px-4 md:px-12 lg:px-24 xl:px-48 border-b-2 border-gray-900 shadow-md bg-white"
	>
		<p class="text-xl font-bold inline-flex">
			{{ title }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'Topbar',
	props: ['title']
};
</script>

<style></style>
