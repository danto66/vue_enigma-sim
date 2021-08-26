<template>
	<div>
		<p class="text-sm font-semibold">Rotor Type</p>

		<div class="flex space-x-2 mt-1">
			<div v-for="(r, index) in this.$store.state.rotor" :key="index" class="flex flex-col w-full">
				<SettingRotor :options="this.$store.state.rotorTypes" :label="r.id" :rotorIndex="index" />
			</div>
		</div>
	</div>

	<div class="mt-4">
		<p class="text-sm font-semibold">Reflector Type</p>

		<select class="w-full mt-1" name="" id="">
			<option class="w-full" value="">I</option>
		</select>
	</div>

	<div class="mt-4">
		<p class="text-sm font-semibold">Plugboards</p>

		<div class="mt-1 border border-gray-500 bg-white rounded-lg p-2">
			<div class="flex justify-between">
				<div class="flex flex-row space-x-2">
					<select class="w-full" name="" id="">
						<option class="w-full" value="">I</option>
					</select>

					<select class="w-full" name="" id="">
						<option class="w-full" value="">I</option>
					</select>
				</div>

				<div>
					<button class="btn-3d btn-text btn-white">Add</button>
				</div>
			</div>

			<div class="w-full border-gray-300 border-t-2 my-4"></div>

			<div class="flex justify-between items-center mt-2">
				<div class="flex flex-row font-bold space-x-2 items-center">
					<p class="p-1 border rounded-lg border-gray-300 w-10 text-center">I</p>

					<div>
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
								d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
							/>
						</svg>
					</div>

					<p class="p-1 border border-gray-300 rounded-lg w-10 text-center">II</p>
				</div>

				<div>
					<button class="btn-3d btn-white p-1 rounded-lg">
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
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div class="flex justify-between items-center mt-2">
				<div class="flex flex-row font-bold space-x-2 items-center">
					<p class="p-1 border rounded-lg border-gray-300 w-10 text-center">I</p>

					<div>
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
								d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
							/>
						</svg>
					</div>

					<p class="p-1 border border-gray-300 rounded-lg w-10 text-center">II</p>
				</div>

				<div>
					<button class="btn-3d btn-white p-1 rounded-lg">
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
								d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SettingRotor from './SettingRotor.vue';

export default {
	name: 'Configuration',
	components: {
		SettingRotor
	}
};
</script>

<style></style>
