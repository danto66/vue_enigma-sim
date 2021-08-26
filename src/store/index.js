import { createStore } from 'vuex';

export default createStore({
	state: {
		rotor: [
			{
				id: 'R1',
				position: 0,
				type: null
			},
			{
				id: 'R2',
				position: 0,
				type: null
			},
			{
				id: 'R3',
				position: 0,
				type: null
			}
		],
		reflector: {
			id: 'RF1',
			position: 0,
			type: null
		},
		rotorTypes: [
			{
				name: 'I',
				wiring: [
					[4, 20],
					[10, 22],
					[12, 24],
					[5, 6],
					[11, 0],
					[6, 3],
					[3, 5],
					[16, 15],
					[21, 21],
					[25, 25],
					[13, 1],
					[19, 4],
					[14, 2],
					[22, 10],
					[24, 12],
					[7, 19],
					[23, 7],
					[20, 23],
					[18, 18],
					[15, 11],
					[0, 17],
					[8, 8],
					[1, 13],
					[17, 16],
					[2, 14],
					[9, 9]
				]
			},
			{
				name: 'II',
				wiring: [
					[0, 0],
					[9, 9],
					[3, 15],
					[10, 2],
					[18, 25],
					[8, 22],
					[17, 17],
					[20, 11],
					[23, 5],
					[1, 1],
					[11, 3],
					[7, 10],
					[22, 14],
					[19, 19],
					[12, 24],
					[2, 20],
					[16, 16],
					[6, 6],
					[25, 4],
					[13, 13],
					[15, 7],
					[24, 23],
					[5, 12],
					[21, 8],
					[14, 21],
					[4, 18]
				]
			},
			{
				name: 'III',
				wiring: [
					[24, 24],
					[17, 17],
					[20, 20],
					[7, 7],
					[16, 16],
					[18, 18],
					[11, 11],
					[3, 3],
					[15, 15],
					[23, 23],
					[13, 13],
					[6, 6],
					[14, 14],
					[10, 10],
					[12, 12],
					[8, 8],
					[4, 4],
					[1, 1],
					[5, 5],
					[25, 25],
					[2, 2],
					[22, 22],
					[21, 21],
					[9, 9],
					[0, 0],
					[19, 19]
				]
			}
		],
		reflectorTypes: [
			{
				name: 'I',
				wiring: [
					[24, 24],
					[17, 17],
					[20, 20],
					[7, 7],
					[16, 16],
					[18, 18],
					[11, 11],
					[3, 3],
					[15, 15],
					[23, 23],
					[13, 13],
					[6, 6],
					[14, 14],
					[10, 10],
					[12, 12],
					[8, 8],
					[4, 4],
					[1, 1],
					[5, 5],
					[25, 25],
					[2, 2],
					[22, 22],
					[21, 21],
					[9, 9],
					[0, 0],
					[19, 19]
				]
			}
		],
		encryptedMessage: ''
	},
	mutations: {
		incrementRotorPosition(state, index) {
			if (state.rotor[index].position >= 25) {
				state.rotor[index].position = 0;
			} else {
				state.rotor[index].position += 1;
			}
		},
		decrementRotorPosition(state, index) {
			if (state.rotor[index].position <= 0) {
				state.rotor[index].position = 25;
			} else {
				state.rotor[index].position -= 1;
			}
		},
		setDefaultRotorType(state) {
			state.rotor.forEach((el, i, arr) => {
				arr[i].type = { ...state.rotorTypes[0] };
			});
		},
		setRotorType(state, payload) {
			state.rotor[payload.index].type = { ...payload.type };
		},
		setDefaulReflectorType(state) {
			state.reflector.type = { ...state.reflectorTypes[0] };
		},
		setEncryptedMessage(state, message) {
			state.encryptedMessage = message;
		}
	},
	getters: {
		getEncryptedMessage(state) {
			let msg = '';
			for (let i = 0; i < state.encryptedMessage.length; i += 4) {
				msg += state.encryptedMessage.substring(i, i + 4) + ' ';
			}
			return msg;
		}
	},
	actions: {},
	modules: {}
});
