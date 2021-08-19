<template>
	<div
		class="flex justify-between cursor-pointer border shadow p-2 rounded"
		@click="toggleSetting"
	>
		<p class="text-xl font-bold">Setting</p>

		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6 my-auto"
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
	</div>

	<div class="mt-2" v-if="isSettingToggled">
		<div class="shadow bg-blue-100 p-2">
			<div class="">
				<p class="text-base font-bold">Rotor Type</p>

				<div class="flex space-x-2 mt-2">
					<div
						v-for="(r, index) in this.$store.state.rotor"
						:key="index"
						class="flex flex-col w-full"
					>
						<SettingRotor
							:options="this.$store.state.rotorTypes"
							:label="r.id"
							:rotorIndex="index"
						/>
					</div>
				</div>
			</div>

			<div class="mt-4">
				<p class="text-base font-bold">Reflector Type</p>

				<select class="w-full" name="" id="">
					<option class="w-full" value="">I</option>
				</select>
			</div>
		</div>
	</div>
</template>

<script>
import SettingRotor from './SettingRotor.vue';

export default {
	name: 'Setting',
	components: { SettingRotor },
	data: function() {
		return {
			isSettingToggled: false
		};
	},
	methods: {
		toggleSetting() {
			this.isSettingToggled = !this.isSettingToggled;
		}
	}
};
</script>

<style></style>
