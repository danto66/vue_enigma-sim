<template>
	<p class="text-sm font-semibold">Plugboard ({{ countPlugPoint }} / 10)</p>

	<div class=" mt-2">
		<div class="flex justify-between">
			<div class="flex flex-row space-x-2">
				<select @change="setPlugboardDataPointB" v-model="plugPointA" class="w-full" name="" id="">
					<option value="">-</option>
					<option
						v-for="p in getPlugboardData"
						class="w-full"
						:value="{ char: p.char, charCode: p.charCode }"
						:key="p.charCode"
					>
						{{ p.char }}
					</option>
				</select>

				<select :disabled="isPlugPointBDisabled" v-model="plugPointB" class="w-full" name="" id="">
					<option class="w-full" value="">-</option>
					<option
						v-for="p in plugboardDataPointB"
						class="w-full"
						:value="{ char: p.char, charCode: p.charCode }"
						:key="p.charCode"
					>
						{{ p.char }}
					</option>
				</select>
			</div>

			<div>
				<button @click="addPlugPoint" class="btn-3d btn-text btn-white">Add</button>
			</div>
		</div>

		<div class="w-full border-gray-300 border-t-2 my-4"></div>

		<div class="mt-2" v-for="(plug, index) in this.getPlugPoint" :key="index">
			<ConfigPlugboardPairList :pointA="plug.pointA.char" :pointB="plug.pointB.char" :plugPointIndex="index" />
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ConfigPlugboardPairList from './ConfigPlugboardPairList.vue';

export default {
	name: 'ConfigPlugboard',
	components: {
		ConfigPlugboardPairList
	},
	data: function() {
		return {
			isPlugPointBDisabled: true,
			plugboardDataPointB: null,
			plugPointA: '',
			plugPointB: ''
		};
	},
	methods: {
		...mapMutations(['setPlugPoint', 'setPlugboardPair']),
		setPlugboardDataPointB() {
			this.plugboardDataPointB = this.getPlugboardData.filter((data) => data.charCode != this.plugPointA.charCode);
			this.isPlugPointBDisabled = false;
		},
		addPlugPoint() {
			if (this.plugPointA && this.plugPointB && this.countPlugPoint < 10) {
				this.setPlugPoint({ pointA: this.plugPointA, pointB: this.plugPointB });
				this.setPlugboardPair({ pointA: this.plugPointA.charCode, pointB: this.plugPointB.charCode });
				this.plugPointA = '';
				this.plugPointB = '';
				this.isPlugPointBDisabled = true;
			}
		}
	},
	computed: {
		...mapGetters(['getPlugboardData', 'countPlugPoint', 'getPlugPoint'])
	}
};
</script>

<style></style>
