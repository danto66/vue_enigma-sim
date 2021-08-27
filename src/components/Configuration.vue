<template>
	<div>
		<ConfigRotor />
	</div>

	<div class="mt-4">
		<p class="text-sm font-semibold">Reflector Type</p>

		<select class="w-full mt-2" name="" id="">
			<option class="w-full" value="">I</option>
		</select>
	</div>

	<div class="mt-4">
		<ConfigPlugboard />
	</div>
</template>

<script>
import ConfigPlugboard from './ConfigPlugboard.vue';
import ConfigRotor from './ConfigRotor.vue';

export default {
	name: 'Configuration',
	components: {
		ConfigPlugboard,
		ConfigRotor
	}
};
</script>

<style></style>
