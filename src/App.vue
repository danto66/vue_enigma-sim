<template>
	<Topbar title="Enigma Simulator" />

	<div class="p-4 bg-gray-100 h-screen pt-6">
		<div class="flex justify-end">
			<button class="btn-3d btn-white p-1 rounded-lg mr-2">
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</button>

			<Setting />
		</div>

		<div class="flex justify-between mt-6">
			<Rotor v-for="(r, index) in rotor" :key="r.id" :rotor="r" :index="index" />
		</div>

		<div class="mt-6">
			<InputMessage />
		</div>

		<div class="mt-6">
			<EncryptedMessage />
		</div>
	</div>
</template>

<script>
import InputMessage from './components/InputMessage.vue';
import EncryptedMessage from './components/EncryptedMessage.vue';
import Setting from './components/Setting.vue';
import Rotor from './components/Rotor.vue';
import Topbar from './components/Topbar.vue';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'App',
	components: {
		Rotor,
		InputMessage,
		EncryptedMessage,
		Setting,
		Topbar
	},
	computed: {
		...mapState(['rotor'])
	},
	methods: {
		...mapMutations(['setDefaulReflectorType', 'setDefaultRotorType'])
	},
	created: function() {
		this.setDefaultRotorType();
		this.setDefaulReflectorType();
	}
};
</script>

<style></style>
