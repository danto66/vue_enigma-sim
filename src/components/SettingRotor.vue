<template>
	<label class="label-setting">
		{{ label }}
	</label>

	<div class="relative">
		<select
			class="w-full"
			@change="setRotorType({ index: this.rotorIndex, type: this.selected })"
			v-model="selected"
		>
			<option v-for="(option, index) in options" :key="index" :value="option">
				{{ option.name }}
			</option>
		</select>
	</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
	name: 'SettingRotor',
	data: function() {
		return {
			selected: this.options[0]
		};
	},
	props: ['label', 'options', 'rotorIndex'],
	methods: {
		...mapMutations(['setRotorType'])
	}
};
</script>

<style></style>
