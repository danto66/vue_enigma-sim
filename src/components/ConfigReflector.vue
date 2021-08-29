<template>
	<p class="text-sm font-bold">Reflector Type</p>

	<select v-model="reflector.type" class="w-full mt-2" name="" id="">
		<option class="w-full" v-for="(option, index) in reflectorTypes" :key="index" :value="option">
			{{ option.name }}
		</option>
	</select>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: 'ConfigReflector',
	computed: {
		...mapState({
			reflector: (state) => state.reflector,
			reflectorTypes: (state) => state.moduleReflector.reflectorTypes
		})
	}
};
</script>

<style></style>
