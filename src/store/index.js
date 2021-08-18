import { createStore } from 'vuex';

export default createStore({
	state: {
		rotorActive: [
			{
				id: 'R1',
				position: 1,
				data: null
			},
			{
				id: 'R2',
				position: 1,
				data: null
			},
			{
				id: 'R3',
				position: 1,
				data: null
			}
		],
		rotorData: [
			{
				name: 'I',
				wiring: [
					[5, 21],
					[11, 23],
					[13, 25],
					[6, 7],
					[12, 1],
					[7, 4],
					[4, 6],
					[17, 16],
					[22, 22],
					[26, 26],
					[14, 2],
					[20, 5],
					[15, 3],
					[23, 11],
					[25, 13],
					[8, 20],
					[24, 8],
					[21, 24],
					[19, 19],
					[16, 12],
					[1, 18],
					[9, 9],
					[2, 14],
					[18, 17],
					[3, 15],
					[10, 10]
				]
			},
			{
				name: 'II',
				wiring: [
					[1, 1],
					[10, 10],
					[4, 16],
					[11, 3],
					[19, 26],
					[9, 23],
					[18, 18],
					[21, 12],
					[24, 6],
					[2, 2],
					[12, 4],
					[8, 11],
					[23, 15],
					[20, 20],
					[13, 25],
					[3, 21],
					[17, 17],
					[7, 7],
					[26, 5],
					[14, 14],
					[16, 8],
					[25, 24],
					[6, 13],
					[22, 9],
					[15, 22],
					[5, 19]
				]
			},
			{
				name: 'III',
				wiring: [
					[25, 25],
					[18, 18],
					[21, 21],
					[8, 8],
					[17, 17],
					[19, 19],
					[12, 12],
					[4, 4],
					[16, 16],
					[24, 24],
					[14, 14],
					[7, 7],
					[15, 15],
					[11, 11],
					[13, 13],
					[9, 9],
					[5, 5],
					[2, 2],
					[6, 6],
					[26, 26],
					[3, 3],
					[23, 23],
					[22, 22],
					[10, 10],
					[1, 1],
					[20, 20]
				]
			}
		]
	},
	mutations: {
		incrementRotorPosition(state, index) {
			if (state.rotorActive[index].position >= 26) {
				state.rotorActive[index].position = 1;
			} else {
				state.rotorActive[index].position += 1;
			}
		},
		decrementRotorPosition(state, index) {
			if (state.rotorActive[index].position <= 1) {
				state.rotorActive[index].position = 26;
			} else {
				state.rotorActive[index].position -= 1;
			}
		},
		initRotorActiveData(state) {
			state.rotorActive.forEach((el, index) => {
				state.rotorActive[index].data = state.rotorData[0];
			});
		},
		setRotorActiveData(state, payload) {
			state.rotorActive[payload.index].data = payload.data;
		}
	},
	actions: {},
	modules: {}
});
