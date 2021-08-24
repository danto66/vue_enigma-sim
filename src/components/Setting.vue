<template>
	<button class="btn-3d btn-white rounded-lg p-1" @click="toggleSetting">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
			/>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			/>
		</svg>
	</button>

	<!-- modal mask -->
	<div
		class="z-30 fixed top-0 left-0 w-full h-full table bg-black bg-opacity-50"
		v-if="isSettingToggled"
	>
		<!-- modal wrapper -->
		<div class="align-middle table-cell px-4">
			<!-- modal container -->
			<div class="mx-auto bg-white p-4 rounded-lg border-gray-900 border-2">
				<div class="flex justify-between items-center">
					<p class="text-xl font-bold">Setting</p>

					<button
						@click="toggleSetting"
						class="btn-3d btn-white p-1 rounded-lg"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				<div class="mt-4">
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
