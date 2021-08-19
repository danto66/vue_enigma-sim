<template>
	<div class="m-4">
		<div class="p-4 rounded border-black border-2 shadow-solid">
			<div
				class="title text-2xl text-center bg-blue-900 p-4 text-white rounded"
			>
				Enigma Simulator
			</div>

			<div class="mt-6">
				<Setting />
			</div>

			<div class="mt-6 flex justify-between">
				<Rotor
					v-for="(r, index) in rotor"
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
			<p class="text-gray-500">
				encrypted message will be shown here...
			</p>
		</div>
	</div>
</template>

<script>
import InputMessage from './components/InputMessage.vue';
import Setting from './components/Setting.vue';
import Rotor from './components/Rotor.vue';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'App',
	components: {
		Rotor,
		InputMessage,
		Setting
	},
	computed: {
		...mapState(['rotor'])
	},
	methods: {
		...mapMutations(['initReflectorType', 'initRotorType'])
	},
	created: function() {
		this.initRotorType();
		this.initReflectorType();
	}
};
</script>

<style></style>
