<template>
	<div class="flex flex-col w-16">
		<div class="shadow rounded">
			<p class="rounded-t text-center text-base bg-blue-100 border border-b-0">
				{{ rotor.id }}
			</p>

			<p class="rounded-b text-center text-base py-2 border border-t-0">
				{{ rotor.type.name }}
			</p>
		</div>

		<button
			class="bg-blue-500 text-white rounded-t-lg btn mt-2"
			@click="incrementRotorPosition(index)"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 mx-auto "
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 15l7-7 7 7"
				/>
			</svg>
		</button>

		<p class="p-4 mt-2 text-center text-2xl border-black border-2 rounded">
			{{ rotor.position }}
		</p>

		<button
			class="bg-blue-500 text-white rounded-b-lg btn mt-2"
			@click="decrementRotorPosition(index)"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 mx-auto "
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		</button>
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
