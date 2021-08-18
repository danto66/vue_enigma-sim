<template>
	<div class="bg-gray-100 p-2">
		<div class="">
			<p class="text-base font-bold">Wheel Number</p>

			<div class="flex space-x-2 mt-2">
				<div
					v-for="(r, index) in this.$store.state.rotorActive"
					:key="index"
					class="flex flex-col w-full"
				>
					<SettingRotor
						:options="this.$store.state.rotorData"
						:label="r.id"
						:rotorIndex="index"
					/>
				</div>
			</div>
		</div>

		<div class="mt-4">
			<p class="text-base font-bold">Reflector</p>
		</div>
	</div>
</template>

<script>
import SettingRotor from './SettingRotor.vue';

export default {
	name: 'Setting',
	components: { SettingRotor }
};
</script>

<style></style>
