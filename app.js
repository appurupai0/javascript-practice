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