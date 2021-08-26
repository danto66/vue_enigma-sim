<template>
	<div class="bg-gray-100 h-full w-full min-h-screen flex flex-col">
		<div>
			<Topbar title="Enigma Simulator" />
		</div>

		<div class="px-4 md:px-12 lg:px-24 w-full sm:mx-auto py-6 sm:flex h-full">
			<div class="sm:w-3/5">
				<div class="flex justify-between">
					<button
						class="sm:hidden btn-3d btn-white rounded-lg px-2 py-1 inline-flex"
						@click="showModal('Configuration')"
					>
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

						<span class="font-semibold ml-1">Configuration</span>
					</button>

					<button class="btn-3d btn-white px-2 py-1 rounded-lg inline-flex" @click="showModal('Help')">
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
								d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>

						<span class="font-semibold ml-1">Help</span>
					</button>
				</div>

				<div class=" mt-6">
					<p class="font-bold text-lg">Rotor</p>

					<div class="flex justify-between mt-2">
						<Rotor v-for="(r, index) in rotor" :key="r.id" :rotor="r" :index="index" />
					</div>
				</div>

				<div class="mt-6">
					<p class="font-bold text-lg">Output Message</p>

					<EncryptedMessage class="mt-2" />
				</div>

				<div class="mt-6">
					<p class="font-bold text-lg">Input Message</p>

					<InputMessage class="mt-2" />
				</div>
			</div>

			<div class="hidden sm:block border-l-2 border-gray-300 sm:mx-4 md:mx-12"></div>

			<div class="hidden sm:block sm:w-2/5 min-h-full">
				<p class="font-bold text-lg">Configuration</p>
				<div class="mt-2"><Configuration /></div>
			</div>
		</div>

		<div>
			<Footer />
		</div>
	</div>

	<base-modal :title="currentModalBody" @close="closeModal" v-if="isModalVisible">
		<component :is="currentModalBody"> </component>
	</base-modal>
</template>

<script>
import InputMessage from './components/InputMessage.vue';
import EncryptedMessage from './components/EncryptedMessage.vue';
import Rotor from './components/Rotor.vue';
import Topbar from './components/Topbar.vue';
import BaseModal from './components/BaseModal.vue';
import Configuration from './components/Configuration.vue';
import Help from './components/Help.vue';
import Footer from './components/Footer.vue';
import { mapState, mapMutations } from 'vuex';

export default {
	name: 'App',
	components: {
		Rotor,
		InputMessage,
		EncryptedMessage,
		Topbar,
		BaseModal,
		Configuration,
		Help,
		Footer
	},
	data: function() {
		return {
			isModalVisible: false,
			currentModalBody: ''
		};
	},
	computed: {
		...mapState(['rotor'])
	},
	methods: {
		...mapMutations(['setDefaulReflectorType', 'setDefaultRotorType']),
		showModal(modalBody) {
			this.currentModalBody = modalBody;
			this.isModalVisible = true;
			document.body.classList.add('overflow-hidden');
		},
		closeModal() {
			this.isModalVisible = false;
			document.body.classList.remove('overflow-hidden');
		}
	},
	created: function() {
		this.setDefaultRotorType();
		this.setDefaulReflectorType();
	}
};
</script>

<style></style>
