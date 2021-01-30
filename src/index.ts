import fs from 'fs';

const sync = fs.readFileSync('football.csv', { encoding: 'utf-8' });

const changetoDate = (item: string) => {
	const split = item.split('/').map(splits => parseInt(splits));
	//const first:number = parseInt(split[0])
	//const second:number= parseInt(split[1])
	//const third:number = parseInt(split[2])
	return new Date(split[2], split[1] - 1, split[0]);
};

type Matchdata = [Date, string, string, string, number, string];
const data:string[]= []
const Data= sync
	.split('\n')
	.map(eachrow => eachrow.split(','))
	.map(
		(eachrow: string[]): Matchdata => {
			return [ changetoDate(eachrow[0]), eachrow[1], eachrow[2], eachrow[3], parseInt(eachrow[4]), eachrow[5]];
		}
    );
    
  
console.log(Data)



