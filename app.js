// onsole.logとは
// JavaScriptでプログラミングする際にデータの チェックなどで使用できる構文です。
// この基本構文の結果の確認も基本的にconsole.log()で行います

/*console.logとは
JavaScriptでプログラミングする際にデータの チェックなどで使用できる構文です。
この基本構文の結果の確認も基本的にconsole.log()で行います
*/  


console.log('Hello');
console.log('こんにちは');

// 文字列セブ島と留学を連結した結果をconsoleに表示してください。
console.log('セブ島' + '留学');
console.log('セブ島留学');

console.log('① 5 たす 8=' + String(5 + 8));
console.log(4 - 2);
console.log(8 * 2);
console.log(6 / 3);
console.log(9 % 2);

// 変数countryを作成して、文字列Japanを代入してください。
// 変数countryをconsoleに表示してください。
// 1で作成した変数countryに文字列Philippinesを代入してください。
// 変数countryをconsoleに表示してください。

let country = 'japan';
console.log(country);

country = 'Philippnes';
console.log(country);


// テンプレートリテラル
let schoolName = 'NexSeed';
console.log('私の所属先は、' + schoolName + 'です');
// 上記でも正しいのですが、テンプレートリテラルを使用すると 以下のように簡潔に書くことができます。

console.log(`私の所属先は、${schoolName}です`);


// 変数jobを作成して、文字列engineerを代入してください。
// テンプレートリテラルを使用して、私の仕事は、engineerですとconsoleに表示してください。

let job = 'engineer'
console.log(`私の仕事は、${job}です`);

job = 'architect'
console.log(`私の仕事は、${job}です`);

job = 'teather'
console.log(`私の仕事は、${job}です`);


// 変数applicationsを作成して、配列['LINE', 'Facebook', 'Twitter']を代入してください。
// 変数applicationsをconsoleに表示してください。
// 変数applicationsにInstagramを追加してください。
// 変数applicationsの中のInstagramをconsoleに表示してください。

let applications = ['LINE', 'Facebook', 'Twitter'];
console.log(applications);
applications.push("Instagram");
console.log(applications[3]);


// 変数capitalCitiesを作成して、連想配列{ Japan: 'Tokyo', Philippines: 'Manila' }を代入してください。
// 変数capitalCitiesをconsoleに表示してください。
// 変数capitalCitiesにAmerica: Washingtonを追加してください。
// 変数capitalCitiesの中のWashingtonをconsoleに表示してください。

let capitalCities = { Japan: 'Tokyo', Philippines: 'Manila'};
console.log(capitalCities);
capitalCities.America = 'Washington';
console.log(capitalCities);

// ここで特定のものを取り出すときに二通り書き方がある
console.log(capitalCities.America);
console.log(capitalCities['America']);

// ↑のやつは全部１次元配列


// 宿題
// クラスのみんなの名簿を2次元配列で作ってきましょう
// 配列の中に、連想配列のかたちです
// リストの0番目の人の名前をconsoleで表示しましょう
// リストの3番めの人の出身地をconsoleで表示しましょう
// リストの4番目の人の趣味をconsoleで表示しましょう

// let studentList = [
// 	{name: 'Seedくん', from: 'セブ島', hobby: 'サーフィン'} ,
// 	{name: 'Eriko Ichinohe', from: '青森', hobby: '旅'}
// ];

// console.log(studentList[0].hobby);
// console.log(studentList[0][ 'hobby']);

// studentList.push({name: '伊藝舞子', from: '沖縄県', hobby: '食べ歩き'});
// console.log(studentList);
// console.log(studentList[2].hobby);


let studentList = [
	{name: '前本理央', from: '沖縄県', hobby: 'バスケ'},
	{name: '矢地道代', from: '神奈川県', hobby: '旅行'},
	{name: '伊藝舞子', from: '沖縄県', hobby: '食べ歩き'},
	{name: '澤岻剛毅', from: '沖縄県（うるま市）', hobby: 'サッカー'},
	{name: '大田勝己', from: '沖縄県（宮古島市）', hobby: 'ゲーム'},
	{name: '島尻龍一', from: '沖縄県（浦添市）', hobby: 'ゴルフ'}
]

console.log(studentList[0].name);
console.log(studentList[3]['from']);
console.log(studentList[4].hobby);


// 五次元配列

// let nostalgicList = [2][2][3][2][1]

// let nostalgicList = 


// let h2d = [["A","B","C","D"],["E","F","G","H"]];
// console.log(h2d[0]);

// 三次元配列
/*let h3d = [
	[
		['a', 'b', 'c'],
		['d', 'e', 'f']
	],
	[
		['g', 'h', 'i'],
		['j', 'k', 'l']
	]

];

console.log(h3d[0][0][2]);
*/


// 四次元配列

let h4d = [
	[
		[
			['a', 'b', 'c'],
			['d', 'e', 'f']
		],
		[
			['g', 'h', 'i'],
			['j', 'k', 'l']
		]
	],
	[
		[ 
			['m', 'n', 'o'],
			['p', 'q', 'r']
		],
		[
			['s', 't', 'u'],
			['v', 'w', 'x']
		]
	]
];

console.log(h4d[0][0][0][1]);
console.log(h4d[1][0][1][2]);
console.log(h4d[1][0][0]);

// 条件分岐
/*変数weightに任意の数字を代入してください。
weightが200以上の場合はヘビー級
weightが115以上、118以下の場合はバンタム級
それ以外の場合はその他の階級
とconsoleに表示してください。
*/

let weight = 117;

if (weight >= 200){
	console.log('ヘビー級');
}else if(weight >= 115 && weight <= 118){
	console.log('バンダム級');
}else{
	console.log('その他の階級');
}

// switch文
/*変数greetingに任意の文字列を代入してください。
greetingがおはようの場合は日本語
greetingがgood morningの場合は英語
それ以外の場合は?
とconsoleに表示してください。
*/

let greeting = 'good morning'

switch(greeting){
	case 'おはよう':
	console.log('日本語');
	break;
	case 'good morning':
	console.log('英語');
	break
	default:
	console.log('?');
	break
}


// 繰り返し処理

/*
	1から10までの数字を表示するプログラム
	変数iに1を代入する(初期化式)
	iが10以下の間だけ繰り返す(条件式)
	iを1回ごとに+1する(変化式)
*/
for (let i = 1; i <= 10; i++) {
	console.log('繰り返しますよ');
    console.log(i);
}

/*初期化式で変数iに2を代入する
iが20以下の間繰り返す
1回ごとにiを1増やす
繰り返しのたびにiをconsoleに表示する
*/

for(let i =2; i <= 20; i++){
	console.log(i);
}

// for文を使ってstudentList2のname部分を、consoleに表示してください。
// ヒント：forで数が変わるiは、〇番目の指定にも使える。

let studentList2 = [
	{name: '前本理央', from: '沖縄県', hobby: 'バスケ'},
	{name: '矢地道代', from: '神奈川県', hobby: '旅行'},
	{name: '伊藝舞子', from: '沖縄県', hobby: '食べ歩き'},
	{name: '澤岻剛毅', from: '沖縄県（うるま市）', hobby: 'サッカー'},
	{name: '大田勝己', from: '沖縄県（宮古島市）', hobby: 'ゲーム'},
	{name: '島尻龍一', from: '沖縄県（浦添市）', hobby: 'ゴルフ'}
]

console.log(studentList2[0].name);
console.log(studentList2[1].name);



// iを変数にして、studentList2の番号へ[i]を当てはめていくと、for文を書いて繰り返しができる
for(let i = 0; i <=5; i++){
	console.log(studentList2[i].name);
}


//1 - 30までの数値で、3の倍数ではないものを表示するプログラム
//3の倍数の時だけ処理が不要なため、continueでスキップする。
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}


/*初期化式で変数iに1を代入する
iが50以下の間繰り返す
1回ごとにiを1増やす
繰り返しのたびにiをconsoleに表示する
ただし、iが5の倍数でない場合は表示しない。
*/
// iが5の倍数を表示する

for(let i =1; i <= 50; i++){
	if(i % 5 != 0){
		continue;
	}
	console.log(i);
}

for(let i = 1; i <= 50; i++){
	if(i % 5 === 0){
		console.log(i);
	}else{

	}
}

// ランダム変数でおみくじを作ってみよう
console.log('ランダム変数');
var random = Math.floor( Math.random() * 10 );
console.log( random );

let dolist = [
	'寝る',
	'自由da',
	'勉強だ',
	'料理だ',
	'🎸だ',
	'🎹だ',
	'ゲームだよ',
	'.....',
	'何もしない',
	'どこかへ行く'
];

console.log(dolist[ random ]);