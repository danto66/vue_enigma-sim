<template>
	<p class="text-sm font-bold">Rotor Type</p>

	<div class="flex space-x-2 mt-2">
		<div v-for="(r, index) in this.rotor" :key="index" class="flex flex-col w-full">
			<ConfigRotorSelect :options="this.rotorTypes" :label="r.id" :rotorIndex="index" />
		</div>
	</div>
</template>

<script>
import ConfigRotorSelect from './ConfigRotorSelect.vue';
import { mapState } from 'vuex';

export default {
	name: 'ConfigRotor',
	components: {
		ConfigRotorSelect
	},
	computed: {
		...mapState({
			rotor: (state) => state.rotor,
			rotorTypes: (state) => state.moduleRotor.rotorTypes
		})
	}
};
</script>

<style></style>
