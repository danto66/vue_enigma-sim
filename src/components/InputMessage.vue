<template>
	<div class="p-2 border shadow bg-white rounded-lg">
		<input
			@keyup="validateMessageByAlphabet"
			v-model="message"
			class="w-full"
			:class="{
				'border-red-500 ring-red-500 ring-1 focus:border-red-500 focus:ring-red-500': error
			}"
			type="text"
			name="message"
			placeholder="type message here..."
		/>

		<p class="h-4 text-xs text-red-500 italic font-sans">{{ error }}</p>

		<button @click="encryptMessage()" class="btn-3d btn-blue btn-text block mt-2 ml-auto">
			Encrypt
		</button>
	</div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
	name: 'InputMessage',
	data: function() {
		return {
			message: '',
			error: '',
			errorMessage: {
				whenNotAlphabet: 'message should only contain alphabet',
				whenEmpty: 'message should not empty'
			}
		};
	},
	computed: { ...mapState(['rotor', 'reflector']) },
	methods: {
		...mapMutations(['incrementRotorPosition']),
		convertMessageToArray(message) {
			return [...message.replace(/\s/g, '').toLowerCase()];
		},
		convertCharToNumber(char) {
			return char.charCodeAt() - 97; // a = 0
		},
		convertNumberToChar(number) {
			return String.fromCharCode(number + 97); // 0 = a
		},
		getNewCharCode(charCode, rotor, forward) {
			let charCodeOut = 0;
			let charCodeIn = charCode + rotor.position;
			charCodeIn > 25 ? (charCodeIn -= 26) : '';

			if (forward) {
				charCodeOut = rotor.type.wiring[charCodeIn][0] - rotor.position;
			} else {
				charCodeOut = rotor.type.wiring[charCodeIn][1] - rotor.position;
			}
			charCodeOut < 0 ? (charCodeOut += 26) : '';

			return charCodeOut;
		},
		setError(err) {
			this.error = err;
		},
		validateMessageByAlphabet() {
			if (this.message) {
				/^[A-Za-z ]+$/.test(this.message) ? this.setError('') : this.setError(this.errorMessage.whenNotAlphabet);
			} else {
				this.setError('');
			}
		},
		spinRotor() {
			this.rotor[0].position += 1;
			if (this.rotor[0].position == 26) {
				this.rotor[0].position = 0;
				this.rotor[1].position += 1;

				if (this.rotor[1].position == 26) {
					this.rotor[1].position = 0;
					this.rotor[2].position += 1;

					if (this.rotor[2].position == 26) {
						this.rotor[2].position = 0;
					}
				}
			}
		},
		encryptMessage() {
			this.validateMessageByAlphabet();

			if (!this.message) {
				this.setError(this.errorMessage.whenEmpty);
				setTimeout(() => {
					if (!this.message) this.error = '';
				}, 1000);
			}

			if (!this.error) {
				let arrayMessage = this.convertMessageToArray(this.message);
				let charCodes = [];

				for (let i = 0; i < arrayMessage.length; i++) {
					let charCode = this.convertCharToNumber(arrayMessage[i]);

					this.spinRotor();
					charCode = this.getNewCharCode(charCode, this.rotor[0], true);
					charCode = this.getNewCharCode(charCode, this.rotor[1], true);
					charCode = this.getNewCharCode(charCode, this.rotor[2], true);
					charCode = this.getNewCharCode(charCode, this.reflector, true);
					charCode = this.getNewCharCode(charCode, this.rotor[2], false);
					charCode = this.getNewCharCode(charCode, this.rotor[1], false);
					charCode = this.getNewCharCode(charCode, this.rotor[0], false);

					charCodes.push(this.convertNumberToChar(charCode));
				}

				console.log(charCodes.join(''));

				// console.log(arr);
				// let newChar = this.getNewCharCode(char, this.rotor[0], true);

				// console.log(newChar);
			}
		}
	}
};
</script>

<style></style>
