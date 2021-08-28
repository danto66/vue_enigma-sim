import { createStore } from 'vuex';
import { moduleRotor } from './modules/module-rotor.js';
import { moduleReflector } from './modules/module-reflector.js';
import { modulePlugboard } from './modules/module-plugboard.js';

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
		plugboard: [],
		plugPoint: [],
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
		initRotorType(state) {
			state.rotor.forEach((el, i, arr) => {
				arr[i].type = { ...state.moduleRotor.rotorTypes[0] };
			});
		},
		initReflectorType(state) {
			state.reflector.type = { ...state.moduleReflector.reflectorTypes[0] };
		},
		initPlugboard(state) {
			state.plugboard = [...state.modulePlugboard.plugboard];
		},
		setEncryptedMessage(state, message) {
			state.encryptedMessage = message;
		},
		setPlugPoint(state, point) {
			state.plugPoint.push(point);
		},
		setPlugboardPair(state, payload) {
			state.modulePlugboard.plugboard[payload.pointA].pair = payload.pointB;
			state.modulePlugboard.plugboard[payload.pointB].pair = payload.pointA;
		},
		removePlugPoint(state, index) {
			let pointA = state.plugPoint[index].pointA.charCode;
			let pointB = state.plugPoint[index].pointB.charCode;

			state.modulePlugboard.plugboard[pointA].pair = null;
			state.modulePlugboard.plugboard[pointB].pair = null;

			state.plugPoint.splice(index, 1);
		},
		spinRotor(state) {
			state.rotor[0].position += 1;
			if (state.rotor[0].position == 26) {
				state.rotor[0].position = 0;
				state.rotor[1].position += 1;

				if (state.rotor[1].position == 26) {
					state.rotor[1].position = 0;
					state.rotor[2].position += 1;

					if (state.rotor[2].position == 26) {
						state.rotor[2].position = 0;
					}
				}
			}
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
			return state.modulePlugboard.plugboard.filter((data) => data.pair == null);
		},
		countPlugPoint(state) {
			return state.plugPoint.length;
		},
		getRotor(state) {
			return state.rotor;
		},
		getPlugPoint(state) {
			return state.plugPoint;
		}
	},
	actions: {},
	modules: {
		moduleRotor,
		moduleReflector,
		modulePlugboard
	}
});
