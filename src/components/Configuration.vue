<template>
	<div>
		<ConfigRotor />
	</div>

	<div class="mt-4">
		<ConfigReflector />
	</div>

	<div class="mt-4">
		<ConfigPlugboard />
	</div>
</template>

<script>
import ConfigPlugboard from './ConfigPlugboard.vue';
import ConfigRotor from './ConfigRotor.vue';
import ConfigReflector from './ConfigReflector.vue';

export default {
	name: 'Configuration',
	components: {
		ConfigPlugboard,
		ConfigRotor,
		ConfigReflector
	}
};
</script>

<style></style>
