<template>
	<div class="z-30 fixed top-0 left-0 w-full h-full table bg-black bg-opacity-50">
		<!-- modal wrapper -->
		<div class="align-top table-cell p-4 sm:p-6 md:p-12">
			<!-- modal container -->
			<div class="mx-auto bg-white p-4 rounded-lg border-gray-900 border-2 overflow-y-auto h-full">
				<div class="flex justify-between items-center">
					<div class="text-xl font-bold">
						{{ title }}
					</div>

					<button @click="close" class="btn-3d btn-white p-1 rounded-lg">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				<div class="mt-4">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'BaseModal',
	props: ['title'],
	methods: {
		close() {
			this.$emit('close');
		}
	}
};
</script>

<style></style>
