<template>
	<p class="font-bold text-lg">Encrypted Message</p>

	<div class="relative">
		<div class="absolute right-5 top-2 flex flex-col">
			<div class="flex">
				<button
					v-if="getEncryptedMessage"
					@click="copyMessage"
					class="bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded-lg ml-auto"
				>
					<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
						/>
					</svg>
				</button>
			</div>

			<span v-if="isCopied" class="bg-gray-900 text-gray-100 font-bold text-xs font-sans rounded px-2 py-1 left-0">
				Copied!
			</span>
		</div>

		<div class="rounded-lg border border-gray-300 overflow-y-auto h-28 mt-4">
			<p v-if="getEncryptedMessage" id="msg" class="text-gray-500 inline-block my-2 mx-3">
				{{ getEncryptedMessage }}
			</p>

			<p v-else class="text-gray-500 inline-block my-2 ml-3 mr-8">
				encrypted message will be shown here...
			</p>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'EncryptedMessage',
	data: function() {
		return {
			isCopied: false
		};
	},
	computed: {
		...mapGetters(['getEncryptedMessage'])
	},
	methods: {
		copyMessage() {
			let r = document.createRange();
			let msg = document.getElementById('msg');
			r.selectNode(msg);
			window.getSelection().removeAllRanges();
			window.getSelection().addRange(r);
			document.execCommand('copy');
			window.getSelection().removeAllRanges();

			this.isCopied = true;
			setTimeout(() => (this.isCopied = false), 1000);
		}
	}
};
</script>

<style></style>
