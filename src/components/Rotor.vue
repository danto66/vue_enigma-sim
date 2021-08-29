<template>
	<div class="p-2 rounded-lg border border-gray-900">
		<div class="flex flex-col w-16">
			<div class="rounded-lg border-gray-900 border-2 bg-blue-100">
				<div class="text-center">
					{{ rotor.id }}
				</div>

				<div class="text-center rounded-lg border-gray-900 border-t-2 bg-white">
					{{ rotor.type.name }}
				</div>
			</div>

			<button class="btn-3d btn-blue rounded-t-lg mt-2" @click="incrementRotorPosition(index)">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8 mx-auto "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
				</svg>
			</button>

			<p class="p-4 mt-2 text-center text-2xl border-gray-900 border-2 rounded-lg bg-white">
				{{ rotor.position + 1 }}
			</p>

			<button class="btn-3d btn-blue rounded-b-lg mt-2" @click="decrementRotorPosition(index)">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8 mx-auto "
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
				</svg>
			</button>
		</div>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'Rotor',
	props: {
		rotor: Object,
		index: Number
	},
	methods: {
		...mapMutations([
			'incrementRotorPosition', // map `this.incrementRotorPosition()` to `this.$store.commit('incrementRotorPosition')`
			'decrementRotorPosition' // map `this.decrementRotorPosition()` to `this.$store.commit('decrementRotorPosition')`
		])
	}
};
</script>

<style></style>
