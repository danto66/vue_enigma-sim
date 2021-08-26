<template>
	<div class="rounded-lg bg-white border shadow overflow-y-auto h-28">
		<p v-if="getEncryptedMessage" class="text-gray-500 inline-block m-4">{{ getEncryptedMessage }}</p>
		<p v-else class="text-gray-500 inline-block m-4">encrypted message will be shown here...</p>
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
