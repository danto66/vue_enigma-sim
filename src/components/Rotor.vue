<template>
	<div class="flex flex-col space-y-2 w-16">
		<div>
			<p class="text-center text-base">{{ rotor.id }}</p>

			<p class="text-center text-base">{{ rotor.data.name }}</p>
		</div>

		<button
			class="bg-green-300 border-2 border-black rounded-t-xl"
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

		<p class="p-4 text-center text-2xl border-black border-2">
			{{ rotor.position }}
		</p>

		<button
			class="bg-green-300 border-2 border-black rounded-b-xl"
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
