<template>
	<p class="font-bold text-lg">Input Message</p>

	<div class="mt-4">
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

		<button @click="encryptMessage()" class="btn-3d btn-blue btn-text btn-uppercase block mt-2 ml-auto">
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
	computed: { ...mapState(['rotor', 'reflector', 'plugboard']) },
	methods: {
		...mapMutations(['incrementRotorPosition', 'setEncryptedMessage', 'spinRotor']),
		convertMessageToArray(message) {
			return [...message.replace(/\s/g, '').toLowerCase()];
		},
		convertCharToCharCode(char) {
			return char.charCodeAt() - 97; // a = 0
		},
		convertCharCodeToChar(charCode) {
			return String.fromCharCode(charCode + 97); // 0 = a
		},
		getNewCharCode(charCode, rotor, forward) {
			let charCodeIn = charCode + rotor.position;
			charCodeIn > 25 ? (charCodeIn -= 26) : '';

			let rotorWiringIndex = forward ? 0 : 1;

			let charCodeOut = rotor.type.wiring[charCodeIn][rotorWiringIndex] - rotor.position;
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
		encryptMessage() {
			this.validateMessageByAlphabet();

			let messageArray = this.convertMessageToArray(this.message);

			if (!this.message || !messageArray.length) {
				this.setError(this.errorMessage.whenEmpty);
				setTimeout(() => {
					if (!this.message || !messageArray.length) this.error = '';
				}, 1000);
			}

			if (!this.error) {
				let charCodes = [];

				for (let i = 0; i < messageArray.length; i++) {
					let charCode = this.convertCharToCharCode(messageArray[i]);

					let plugboardPairIn = this.plugboard[charCode].pair;
					plugboardPairIn != null ? (charCode = plugboardPairIn) : '';

					this.spinRotor();
					charCode = this.getNewCharCode(charCode, this.rotor[0], true);
					charCode = this.getNewCharCode(charCode, this.rotor[1], true);
					charCode = this.getNewCharCode(charCode, this.rotor[2], true);
					charCode = this.getNewCharCode(charCode, this.reflector, true);
					charCode = this.getNewCharCode(charCode, this.rotor[2], false);
					charCode = this.getNewCharCode(charCode, this.rotor[1], false);
					charCode = this.getNewCharCode(charCode, this.rotor[0], false);

					let plugboardPairOut = this.plugboard[charCode].pair;
					plugboardPairOut != null ? (charCode = plugboardPairOut) : '';

					charCodes.push(this.convertCharCodeToChar(charCode));
				}

				this.setEncryptedMessage(charCodes.join(''));
			}
		}
	}
};
</script>

<style></style>
