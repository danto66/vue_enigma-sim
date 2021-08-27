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
		plugPoint: [],
		plugboard: [
			{
				char: 'A',
				charCode: 0,
				pair: null
			},
			{
				char: 'B',
				charCode: 1,
				pair: null
			},
			{
				char: 'C',
				charCode: 2,
				pair: null
			},
			{
				char: 'D',
				charCode: 3,
				pair: null
			},
			{
				char: 'E',
				charCode: 4,
				pair: null
			},
			{
				char: 'F',
				charCode: 5,
				pair: null
			},
			{
				char: 'G',
				charCode: 6,
				pair: null
			},
			{
				char: 'H',
				charCode: 7,
				pair: null
			},
			{
				char: 'I',
				charCode: 8,
				pair: null
			},
			{
				char: 'J',
				charCode: 9,
				pair: null
			},
			{
				char: 'K',
				charCode: 10,
				pair: null
			},
			{
				char: 'L',
				charCode: 11,
				pair: null
			},
			{
				char: 'M',
				charCode: 12,
				pair: null
			},
			{
				char: 'N',
				charCode: 13,
				pair: null
			},
			{
				char: 'O',
				charCode: 14,
				pair: null
			},
			{
				char: 'P',
				charCode: 15,
				pair: null
			},
			{
				char: 'Q',
				charCode: 16,
				pair: null
			},
			{
				char: 'R',
				charCode: 17,
				pair: null
			},
			{
				char: 'S',
				charCode: 18,
				pair: null
			},
			{
				char: 'T',
				charCode: 19,
				pair: null
			},
			{
				char: 'U',
				charCode: 20,
				pair: null
			},
			{
				char: 'V',
				charCode: 21,
				pair: null
			},
			{
				char: 'W',
				charCode: 22,
				pair: null
			},
			{
				char: 'X',
				charCode: 23,
				pair: null
			},
			{
				char: 'Y',
				charCode: 24,
				pair: null
			},
			{
				char: 'Z',
				charCode: 25,
				pair: null
			}
		],
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
		setDefaulReflectorType(state) {
			state.reflector.type = { ...state.reflectorTypes[0] };
		},
		setEncryptedMessage(state, message) {
			state.encryptedMessage = message;
		},
		setPlugPoint(state, payload) {
			state.plugPoint.push(payload);
		},
		setPlugboardPair(state, payload) {
			state.plugboard[payload.pointA].pair = payload.pointB;
			state.plugboard[payload.pointB].pair = payload.pointA;
		},
		removePlugPoint(state, index) {
			let pointA = state.plugPoint[index].pointA.charCode;
			let pointB = state.plugPoint[index].pointB.charCode;

			state.plugboard[pointA].pair = null;
			state.plugboard[pointB].pair = null;

			state.plugPoint.splice(index, 1);
		}
	},
	getters: {
		getEncryptedMessage(state) {
			let msg = '';
			for (let i = 0; i < state.encryptedMessage.length; i += 4) {
				msg += state.encryptedMessage.substring(i, i + 4) + ' ';
			}
			return msg;
		},
		getPlugboardData(state) {
			return state.plugboard.filter((data) => data.pair == null);
		},
		countPlugPoint(state) {
			return state.plugPoint.length;
		}
	},
	actions: {},
	modules: {}
});
