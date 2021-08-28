<template>
	<p class="font-bold text-lg">Encrypted Message</p>

	<div class="rounded-lg border border-gray-300 overflow-y-auto h-28 mt-4">
		<p v-if="getEncryptedMessage" class="text-gray-500 inline-block my-2 mx-3">{{ getEncryptedMessage }}</p>
		<p v-else class="text-gray-500 inline-block my-2 mx-3">encrypted message will be shown here...</p>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	name: 'EncryptedMessage',
	computed: {
		...mapGetters(['getEncryptedMessage'])
	}
};
</script>

<style></style>
