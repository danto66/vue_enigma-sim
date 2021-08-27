<template>
	<label class="label-setting">
		{{ label }}
	</label>

	<div class="relative">
		<select class="w-full" v-model="$store.state.rotor[rotorIndex].type">
			<option v-for="(option, index) in options" :key="index" :value="option">
				{{ option.name }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'ConfigRotorSelect',
	props: ['label', 'options', 'rotorIndex']
};
</script>

<style></style>
