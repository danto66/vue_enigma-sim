<template>
	<div class="h-16 rounded-b-lg border-b-2 border-gray-900 shadow-md bg-white flex items-center">
		<div class="mx-4 md:mx-12 lg:mx-24 xl:mx-48">
			<p class="text-xl font-bold">
				{{ title }}
			</p>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Topbar',
	props: ['title']
};
</script>

<style></style>
