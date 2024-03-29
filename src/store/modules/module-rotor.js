export const moduleRotor = {
	namespaced: true,
	state: () => ({
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
					[1, 19],
					[3, 0],
					[5, 6],
					[7, 1],
					[9, 15],
					[11, 2],
					[2, 18],
					[15, 3],
					[17, 16],
					[19, 4],
					[23, 20],
					[21, 5],
					[25, 21],
					[13, 13],
					[24, 25],
					[4, 7],
					[8, 24],
					[22, 8],
					[6, 23],
					[0, 9],
					[10, 22],
					[12, 11],
					[20, 17],
					[18, 10],
					[16, 14],
					[14, 12]
				]
			}
		]
	})
};
