<template>
	<div class="flex justify-between items-center">
		<div class="flex flex-row font-bold space-x-2 items-center">
			<p class="p-1 border rounded-lg border-gray-300 w-10 text-center">{{ pointA }}</p>

			<div>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
					/>
				</svg>
			</div>

			<p class="p-1 border border-gray-300 rounded-lg w-10 text-center">{{ pointB }}</p>
		</div>

		<div>
			<button
				@click="removePlugPoint(plugPointIndex)"
				class="btn-3d btn-white p-1 rounded-lg text-red-500 border-red-500"
			>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					/>
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'ConfigPlugboardPairList',
	props: ['pointA', 'pointB', 'plugPointIndex'],
	methods: {
		...mapMutations(['removePlugPoint'])
	}
};
</script>

<style></style>
