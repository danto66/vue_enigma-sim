<template>
	<div class="m-4">
		<div class="p-4 rounded border-black border-2 shadow-solid">
			<div class="title text-2xl text-center bg-gray-700 p-4 text-white">
				Enigma Simulator
			</div>

			<div class="mt-6">
				<div
					class="flex justify-between cursor-pointer focus:ring-2"
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
					<Setting />
				</div>
			</div>

			<div class="mt-6 flex justify-between">
				<Rotor
					v-for="(r, index) in rotorActive"
					:key="r.id"
					:rotor="r"
					:index="index"
				/>
			</div>

			<div class="mt-6 ">
				<InputMessage />
			</div>
		</div>

		<div class="mt-8 mx-auto p-4 rounded border-black border-2 shadow-solid">
			encrypted message will be shown here...
		</div>
	</div>
</template>

<script>
import InputMessage from './components/InputMessage.vue';
import Setting from './components/Setting.vue';
import Rotor from './components/Rotor.vue';
import { mapState } from 'vuex';

export default {
	name: 'App',
	components: {
		Rotor,
		InputMessage,
		Setting
	},
	data: function() {
		return {
			isSettingToggled: false
		};
	},
	methods: {
		toggleSetting() {
			this.isSettingToggled = !this.isSettingToggled;
		}
	},
	computed: {
		...mapState(['rotorActive'])
	},
	created: function() {
		this.$store.commit('initRotorActiveData');
	}
};
</script>

<style></style>
