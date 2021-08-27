<template>
	<p class="text-sm font-semibold">Rotor Type</p>

	<div class="flex space-x-2 mt-2">
		<div v-for="(r, index) in this.$store.state.rotor" :key="index" class="flex flex-col w-full">
			<ConfigRotorSelect :options="this.$store.state.rotorTypes" :label="r.id" :rotorIndex="index" />
		</div>
	</div>
</template>

<script>
import ConfigRotorSelect from './ConfigRotorSelect.vue';

export default {
	name: 'ConfigRotor',
	components: {
		ConfigRotorSelect
	}
};
</script>

<style></style>
