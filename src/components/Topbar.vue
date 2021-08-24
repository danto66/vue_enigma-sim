<template>
	<div
		class="h-14 rounded-b-lg flex w-full px-4 border-b-2 border-gray-900 shadow-md -mb-2 z-10 relative bg-white"
	>
		<p class="text-lg font-bold my-auto">
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
