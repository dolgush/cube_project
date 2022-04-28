var deathBlock = document.getElementById("death");
var levelBlock = document.getElementById("level");
var timeBlock = document.getElementById("time");
var ch1 = true;
var ch2 = true;
var ch3 = true;
var ch4 = true;
var t = 0;
var time_s = 0;
var time_m = 0;
var time_h = 0;
let death = 0;
let level = 0;
let levels = [];
let coins = [];
let coins_check = [];
let balls = [];
let cubes = [];
let dc = 4;
let pause = false;
const config = {
	step : 10,
	sizexCell : 50,
	sizeyCell : 50
}

// объявление координат куба для каждого уровня
cubes[0] = {
	x: 150,
	y: 300
}
cubes[1] = {
	x: 150,
	y: 330
}
cubes[2] = {
	x: 485,
	y: 335
}
cubes[3] = {
	x: 485,
	y: 335
}
const cube = {
	x: 0,
	y : 0,
	dx : 1.5,
	dy : 1.5,
	r : 15
}

// 0 - пустое поле, 1 - клетка для перемещения, 2 - клетка для чекпоинта, 3 - клетка для победы
for (var l = 0; l < 30; l++){
    levels[l] = [];
    for (var i = 0; i < 14; i++){
        levels[l][i] = [];
        for (var j = 0; j < 22 ; j++){
        	levels[l][i][j] = 0;
}}}

//мячики на 1 раз

for (var i = 0; i < 30; i++){
    balls[i] = [];
}
//монетки на 1 раз
for (var i = 0; i < 30; i++){
    coins[i] = [];
}
////////////////////////////////////////////////////////////////////
///генерация уровней
//1 уровень 

//клетки
for (var i = 4; i < 10; i++){
        for (var j = 2; j < 5 ; j++){
        	levels[0][i][j] = 2;
}}
for (var i = 4; i < 10; i++){
        for (var j = 17; j < 20 ; j++){
        	levels[0][i][j] = 3;
}}
for (var i = 5; i < 9; i++){
        for (var j = 6; j < 16 ; j++){
        	levels[0][i][j] = 1;
}}
levels[0][9][5] = 1;
levels[0][9][6] = 1;
levels[0][4][15] = 1;
levels[0][4][16] = 1;

//монетки

coins_check[0] = 0;

//мячи
balls[0][0] = {
	x : 6*config.sizexCell+2*dc,
	y : 6*config.sizexCell + config.sizexCell/2,
	x1 : 6*config.sizexCell,
	y1 : 6*config.sizexCell,
	dx : 4,
	dy : 0,
	x2 : 16*config.sizexCell,
	y2 : 6*config.sizexCell,
	r : 10
}
balls[0][1] = {
	x : 16*config.sizexCell-2*dc,
	y : 5*config.sizexCell + config.sizexCell/2,
	x1 : 6*config.sizexCell,
	y1 : 5*config.sizexCell,
	dx : 4,
	dy : 0,
	x2 : 16*config.sizexCell,
	y2 : 5*config.sizexCell,
	r : 10
}
balls[0][2] = {
	x : 6*config.sizexCell+2*dc,
	y : 8*config.sizexCell + config.sizexCell/2,
	x1 : 6*config.sizexCell,
	y1 : 8*config.sizexCell,
	dx : 4,
	dy : 0,
	x2 : 16*config.sizexCell,
	y2 : 8*config.sizexCell,
	r : 10
}
balls[0][3] = {
	x : 16*config.sizexCell-2*dc,
	y : 7*config.sizexCell + config.sizexCell/2,
	x1 : 6*config.sizexCell,
	y1 : 7*config.sizexCell,
	dx : 4,
	dy : 0,
	x2 : 16*config.sizexCell,
	y2 : 7*config.sizexCell,
	r : 10
}
//конец 1 уровня


//2 уровень

//клетки
for (var i = 6; i < 8; i++){
        for (var j = 2; j < 5 ; j++){
        	levels[1][i][j] = 2;
}}
for (var i = 6; i < 8; i++){
        for (var j = 17; j < 20 ; j++){
        	levels[1][i][j] = 3;
}}
for (var i = 4; i < 10; i++){
        for (var j = 5; j < 17 ; j++){
        	levels[1][i][j] = 1;
}}
//монетки

coins_check[1] = 1;
for (var i = 0; i < 1; i++){
    coins[1][i] = {
    	x : 11*config.sizexCell,
    	y : 7*config.sizeyCell,
    	r : 10,
    	check : 0
    }
}
//мячики
for (var i = 0; i < 12; i++){
	if (i%2 == 0){
 		balls[1][i] = {
	x : (5+i)*config.sizexCell+config.sizexCell/2,
	y : 4*config.sizeyCell + 2*dc,
	x1 : (5+i)*config.sizexCell,
	y1 : 4*config.sizeyCell,
	dx : 0,
	dy : 2,
	x2 : (5+i)*config.sizexCell,
	y2 : 10*config.sizeyCell,
	r : 10
}
	}
	else{
		balls[1][i] = {
	x : (5+i)*config.sizexCell+config.sizexCell/2,
	y : 10*config.sizeyCell-2*dc,
	x1 : (5+i)*config.sizexCell,
	y1 : 4*config.sizeyCell,
	dx : 0,
	dy : 2,
	x2 : (5+i)*config.sizexCell,
	y2 : 10*config.sizeyCell,
	r : 10
}
	}
	
}
//конец 2 уровня

//3 уровень

//клетки
for (var i = 4; i < 9; i++){
        for (var j = 8; j < 9 ; j++){
        	levels[2][i][j] = 1;
}}
for (var i = 5; i < 6; i++){
        for (var j = 9; j < 12 ; j++){
        	levels[2][i][j] = 1;
}}
for (var i = 8; i < 9; i++){
        for (var j = 9; j < 12 ; j++){
        	levels[2][i][j] = 1;
}}
for (var i = 6; i < 8; i++){
        for (var j = 11; j < 12 ; j++){
        	levels[2][i][j] = 1;
}}

for (var i = 6; i < 8; i++){
        for (var j = 9; j < 11 ; j++){
        	levels[2][i][j] = 3;
}}
//монетки
coins_check[2] = 1;
for (var i = 0; i < 1; i++){
    coins[2][i] = {
    	x : 8*config.sizexCell + config.sizexCell/2,
    	y : 4*config.sizeyCell + config.sizeyCell/2,
    	r : 10,
    	check : 0
    }
}
//мячики
 	balls[2][0] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 0,
	t0 : 0,
	}
	balls[2][1] = {
	x : 10*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 25,
	t0 : 25
	}
	balls[2][2] = {
	x : 11*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 50,
	t0 : 50
	}
	balls[2][3] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 75,
	t0 : 75
	}
	balls[2][4] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 6*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : -1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 275,
	t0 : 275
	}
	balls[2][5] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 7*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : -1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 250,
	t0 : 250
	}
	balls[2][6] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 8*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : -1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 225,
	t0 : 225
	}
	balls[2][7] = {
	x : 11*config.sizexCell-config.sizexCell/2,
	y : 8*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : -1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 175,
	t0 : 175
	}
	balls[2][8] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 8*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : 1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 150,
	t0 : 150
	}
	balls[2][9] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 7*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : 1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 125,
	t0 : 125
	}
	balls[2][10] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 6*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : 1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 100,
	t0 : 100
	}
//конец 3 уровня

//4 уровень
for (var i = 4; i < 9; i++){
        for (var j = 8; j < 9 ; j++){
        	levels[3][i][j] = 1;
}}
for (var i = 5; i < 6; i++){
        for (var j = 9; j < 12 ; j++){
        	levels[3][i][j] = 1;
}}
for (var i = 8; i < 9; i++){
        for (var j = 9; j < 12 ; j++){
        	levels[3][i][j] = 1;
}}
for (var i = 6; i < 8; i++){
        for (var j = 11; j < 12 ; j++){
        	levels[3][i][j] = 1;
}}

for (var i = 6; i < 8; i++){
        for (var j = 9; j < 11 ; j++){
        	levels[3][i][j] = 3;
}}
//монетки
coins_check[3] = 1;
for (var i = 0; i < 1; i++){
    coins[3][i] = {
    	x : 8*config.sizexCell + config.sizexCell/2,
    	y : 4*config.sizeyCell + config.sizeyCell/2,
    	r : 10,
    	check : 0
    }
}
//мячики
 	balls[3][0] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 0,
	t0 : 0,
	}
	balls[3][1] = {
	x : 10*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 33,
	t0 : 33
	}
	balls[3][2] = {
	x : 11*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 66,
	t0 : 66
	}
	balls[3][3] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 5*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 99,
	t0 : 99
	}
	balls[3][4] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 6*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : -1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 166,
	t0 : 166
	}
	balls[3][5] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 7*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : -1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 133,
	t0 : 133
	}
	balls[3][6] = {
	x : 9*config.sizexCell-config.sizexCell/2,
	y : 8*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : -1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 297,
	t0 : 297
	}
	balls[3][7] = {
	x : 11*config.sizexCell-config.sizexCell/2,
	y : 8*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : -1.5,
	dy : 0,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 233,
	t0 : 233
	}
	balls[3][8] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 8*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : 1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 199,
	t0 : 199
	}
	balls[3][9] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 7*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : 1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 166,
	t0 : 166
	}
	balls[3][10] = {
	x : 12*config.sizexCell-config.sizexCell/2,
	y : 6*config.sizeyCell + config.sizeyCell/2,
	x1 : 8*config.sizexCell + config.sizexCell/2,
	y1 : 5*config.sizeyCell  + config.sizeyCell/2,
	dx : 0,
	dy : 1.5,
	x2 : 12*config.sizexCell - config.sizexCell/2,
	y2 : 9*config.sizeyCell,
	r : 10,
	t : 333,
	t0 : 333
	}
//конец 4 уровня
////////////////////////////////////////////////////////////////////

var
 	rightPressed = false,
 	leftPressed = false,
 	upPressed = false,
 	downPressed = false;


//вывод смертей
function drawDeath() {
	deathBlock.innerHTML = "Fails : " + death;
}

//прибавление счетчиков failov
function incDeath() {
	// возвращаем изначальное кол-во монет
	death++;
	drawDeath();
}

//вывод левела
function drawLevel() {
	levelBlock.innerHTML = (level+1) + "/3";
}

//прибавление счетчиков левела
function incLevel() {
	level++;
	if (level == 3){
		alert('Вы прошли все уровни!');
		window.location.href = "index.html";
	}


	drawLevel();
}

//вывод времени
function drawTime() {
	timeBlock.innerHTML = Math.floor(time_h/10)+Math.floor(time_h%10) + ":" + Math.floor(time_m/10)+Math.floor(time_m%10) + ":" + Math.floor(time_s/10)+Math.floor(time_s%10);
}

//прибавление времени
function incTime() {
	t++;

	if (t == 100){
	time_s++;
	if (time_s == 60){
		time_s = 0;
		time_m++;
	}
	if (time_m == 60){
		time_m = 0;
		time_h++;
	}
	drawTime();
	t = 0;
	}
	
}

//функция начала уровня (сброс координат)
function startLevel(lev) {
	//сброс монет до к.т
	for (var i=0; i<coins[lev].length ; i++){
		coins[lev][i].check = 0;
	}
	rightPressed = false,
 	leftPressed = false,
 	upPressed = false,
 	downPressed = false;
	cube.x = cubes[lev].x;
	cube.y = cubes[lev].y;
	incDeath; // ++ к смертям , функция выше
}

//функция проверки монеток
function coinCheck(lev){
	for (var i=0; i<coins[lev].length ; i++){
		if (coins[lev][i].check == 0){
			return false;
		}
	}
	return true;
}


// функция конца лвла (остановка + вывод сообщения)
function endLevel(lev){
	if (coinCheck(lev)){
		for (var i = 0; i < 14; i++){ 
        for (var j = 0; j < 22 ; j++){
        	if (levels[lev][i][j] == 3 && coinCheck(lev)){
        		if ((cube.y > i*config.sizeyCell  && cube.y < i*config.sizeyCell + config.sizeyCell) || (cube.y + cube.r*2 > i*config.sizeyCell  && cube.y + cube.r*2 < i*config.sizeyCell + config.sizeyCell)){
               		if ((cube.x > j*config.sizexCell  && cube.x < j*config.sizexCell + config.sizexCell) || (cube.x + cube.r*2 > j*config.sizexCell  && cube.x + cube.r*2 < j*config.sizexCell + config.sizexCell)){
               			alert('Вы прошли ' + (lev+1) + ' уровень!');
               			incLevel();
               			startLevel(level);
               		}	
               	}
        	}
		}}
	}
}


// функция проверки столкновения шарика с кубиком
function collisionCube(lev){
	for (var i = 0; i < balls[lev].length; i++){
               	if ((balls[lev][i].y - balls[lev][i].r > cube.y  && balls[lev][i].y - balls[lev][i].r < cube.y + cube.r*2) || (balls[lev][i].y + balls[lev][i].r > cube.y  && balls[lev][i].y + balls[lev][i].r < cube.y + cube.r*2)){
               		if ((balls[lev][i].x - balls[lev][i].r > cube.x  && balls[lev][i].x - balls[lev][i].r < cube.x + cube.r*2) || (balls[lev][i].x + balls[lev][i].r > cube.x  && balls[lev][i].x + balls[lev][i].r < cube.x + cube.r*2)){
               			startLevel(lev);
               			incDeath();
               		}	
               	}
	}
}

// функция проверки столкновения шарика с монетками
function collisionCoin(lev){
	for (var i = 0; i < coins[lev].length; i++){
				if(coins[lev][i].check == 0){
					if ((coins[lev][i].y - coins[lev][i].r > cube.y  && coins[lev][i].y - coins[lev][i].r < cube.y + cube.r*2) || (coins[lev][i].y + coins[lev][i].r > cube.y  && coins[lev][i].y + coins[lev][i].r < cube.y + cube.r*2)){
               		if ((coins[lev][i].x - coins[lev][i].r > cube.x  && coins[lev][i].x - coins[lev][i].r < cube.x + cube.r*2) || (coins[lev][i].x + coins[lev][i].r > cube.x  && coins[lev][i].x + coins[lev][i].r < cube.x + cube.r*2)){
               			coins[lev][i].check = 1;
               		}	
               	}
				}
               	
	}
}
// инициализация canvas
let  canv = document.getElementById('canvas');
let ctx = canv.getContext('2d');
canv.width = 1100;
canv.height = 700;

//отрисовка фона (отчистка фона)
function clearBackground(lev){
	ctx.beginPath();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "#9193e3";
	ctx.closePath();
	ctx.fill();
    for (var i = 0; i < 14; i++){
        for (var j = 0; j < 22 ; j++){
        	if ((levels[lev][i][j] == 2 && levels[lev][i][j+1] == 0) || (levels[lev][i][j] == 1 && levels[lev][i][j+1] == 0)){/////////уровень
        		ctx.beginPath();
				ctx.moveTo((j+1)*config.sizexCell, i*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo((j+1)*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if ((levels[lev][i][j] == 2 && levels[lev][i][j-1] == 0) || (levels[lev][i][j] == 1 && levels[lev][i][j-1] == 0)){
        		ctx.beginPath();
				ctx.moveTo(j*config.sizexCell, i*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo(j*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if ((levels[lev][i][j] == 2 && levels[lev][i+1][j] == 0) || (levels[lev][i][j] == 1 && levels[lev][i+1][j] == 0)){
        		ctx.beginPath();
				ctx.moveTo(j*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo((j+1)*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if ((levels[lev][i][j] == 2  && levels[lev][i-1][j] == 0) || (levels[lev][i][j] == 1 && levels[lev][i-1][j] == 0)){
        		ctx.beginPath();
				ctx.moveTo(j*config.sizexCell, i*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo((j+1)*config.sizexCell, i*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if ((levels[lev][i][j] == 3 && levels[lev][i][j+1] == 0) || (levels[lev][i][j] == 1 && levels[lev][i][j+1] == 0)){/////////уровень
        		ctx.beginPath();
				ctx.moveTo((j+1)*config.sizexCell, i*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo((j+1)*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if ((levels[lev][i][j] == 3 && levels[lev][i][j-1] == 0) || (levels[lev][i][j] == 1 && levels[lev][i][j-1] == 0)){
        		ctx.beginPath();
				ctx.moveTo(j*config.sizexCell, i*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo(j*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if ((levels[lev][i][j] == 3 && levels[lev][i+1][j] == 0) || (levels[lev][i][j] == 1 && levels[lev][i+1][j] == 0)){
        		ctx.beginPath();
				ctx.moveTo(j*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo((j+1)*config.sizexCell, (i+1)*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if ((levels[lev][i][j] == 3  && levels[lev][i-1][j] == 0) || (levels[lev][i][j] == 1 && levels[lev][i-1][j] == 0)){
        		ctx.beginPath();
				ctx.moveTo(j*config.sizexCell, i*config.sizeyCell);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "black";
				ctx.lineTo((j+1)*config.sizexCell, i*config.sizeyCell);
				ctx.stroke();
				ctx.closePath();
        	}
        	if (levels[lev][i][j] == 2){
        		ctx.beginPath();
				ctx.rect(j*config.sizexCell, i*config.sizeyCell, config.sizexCell, config.sizeyCell);
				ctx.fillStyle = "#96e397";
				ctx.closePath();
				ctx.fill();
        	}
        	else if (levels[lev][i][j] == 3){
        		ctx.beginPath();
				ctx.rect(j*config.sizexCell, i*config.sizeyCell, config.sizexCell, config.sizeyCell);
				ctx.fillStyle = "#96e397";
				ctx.closePath();
				ctx.fill();
        	}
        	else if (levels[lev][i][j] == 1){
        		ctx.beginPath();
				ctx.rect(j*config.sizexCell, i*config.sizeyCell, config.sizexCell, config.sizeyCell);
				ctx.fillStyle = "white";
				ctx.closePath();
				ctx.fill();
        	}
}}
}

//отрисовка монеток
function drawCoins(lev){
	for (var i=0; i<coins[lev].length ; i++){
		if (coins[lev][i].check == 0){
		ctx.beginPath();
		ctx.arc(coins[lev][i].x, coins[lev][i].y, coins[lev][i].r, 0, Math.PI*2);
		ctx.strokeStyle = "black";
		ctx.fillStyle = "yellow";
		ctx.lineWidth = 5;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		}
	}
}
// отрисовка шара
function drawBall(lev){
	for (var i = 0; i < balls[lev].length; i++){
		ctx.beginPath();
		ctx.arc(balls[lev][i].x, balls[lev][i].y, balls[lev][i].r, 0, Math.PI*2);
		ctx.strokeStyle = "black";
		ctx.fillStyle = "#0095DD";
		ctx.lineWidth = 5;
		ctx.closePath();
		ctx.fill();
		ctx.stroke();
		//описание движения шаров
		if (lev == 0 || lev == 1){
			balls[lev][i].x += balls[lev][i].dx;
			balls[lev][i].y += balls[lev][i].dy;
		if(balls[lev][i].x + balls[lev][i].dx > balls[lev][i].x2-balls[lev][i].r || balls[lev][i].x + balls[lev][i].dx < balls[lev][i].x1 + balls[lev][i].r) {
   	 		balls[lev][i].dx = -balls[lev][i].dx;
			}
		if(balls[lev][i].y + balls[lev][i].dy > balls[lev][i].y2-balls[lev][i].r  || balls[lev][i].y + balls[lev][i].dy < balls[lev][i].y1 + balls[lev][i].r) {
    		balls[lev][i].dy = -balls[lev][i].dy;
			}
		}
		else if (lev == 2 || lev == 3){
			if (lev == 3){
				balls[lev][i].x += balls[lev][i].dx;
			balls[lev][i].y += balls[lev][i].dy;
			if (balls[lev][i].t == 100){ // 25 - одна клетка
				balls[lev][i].dy = balls[lev][i].dx;
				balls[lev][i].dx = 0;
			}
			if (balls[lev][i].t == 200){
				balls[lev][i].dx = -balls[lev][i].dy;
				balls[lev][i].dy = 0;
			}
			if (balls[lev][i].t == 300){
				balls[lev][i].dy = balls[lev][i].dx;
				balls[lev][i].dx = 0;
			}
			if (balls[lev][i].t == 400){
				balls[lev][i].dx = -balls[lev][i].dy;
				balls[lev][i].dy = 0;
				balls[lev][i].t = 0;
			}
			balls[lev][i].t++;
			}
			if (lev == 2){
				balls[lev][i].x += balls[lev][i].dx;
			balls[lev][i].y += balls[lev][i].dy;
			if (balls[lev][i].t == 75){ // 25 - одна клетка
				balls[lev][i].dy = balls[lev][i].dx;
				balls[lev][i].dx = 0;
			}
			if (balls[lev][i].t == 150){
				balls[lev][i].dx = -balls[lev][i].dy;
				balls[lev][i].dy = 0;
			}
			if (balls[lev][i].t == 225){
				balls[lev][i].dy = balls[lev][i].dx;
				balls[lev][i].dx = 0;
			}
			if (balls[lev][i].t == 300){
				balls[lev][i].dx = -balls[lev][i].dy;
				balls[lev][i].dy = 0;
				balls[lev][i].t = 0;
			}
			balls[lev][i].t++;
			}
		}
}
}

//проверка на соприкосновение с границами поля справа, передается lev - уровень по счету
function collisionRight(lev){
	for (var i = 0; i < 14; i++){
        for (var j = 0; j < 22 ; j++){
        	if (levels[lev][i][j] == 0){
        		if (cube.y+cube.dy > i*config.sizeyCell && cube.y+cube.dy < i*config.sizeyCell + config.sizeyCell || cube.y+cube.r*2-cube.dy > i*config.sizeyCell && cube.y+cube.r*2-cube.dy < i*config.sizeyCell + config.sizeyCell){
        			if (cube.x-cube.dx < j*config.sizexCell){
        				if (cube.x + cube.r*2 + cube.dx >j*config.sizexCell){
        						return false;
        				}	
        			}
        		}	
        	}        	
}}

return true;
}

//проверка на соприкосновение с границами поля слева, передается lev - уровень по счету
function collisionLeft(lev){
	for (var i = 0; i < 14; i++){
        for (var j = 0; j < 22 ; j++){
        	if (levels[lev][i][j] == 0){
        		if (cube.y + cube.dy >= i*config.sizeyCell && cube.y+cube.dy <= i*config.sizeyCell + config.sizeyCell || cube.y+cube.r*2-cube.dy >= i*config.sizeyCell && cube.y+cube.r*2-cube.dy <= i*config.sizeyCell + config.sizeyCell){
        			if (cube.x - cube.dx < j*config.sizexCell + config.sizexCell){
        				if (cube.x + cube.r*2 + cube.dx  > j*config.sizexCell + config.sizexCell){
        						return false;
        				}	
        			}
        		}	
        	}        	
}}

return true;
}

//проверка на соприкосновение с границами поля сверху, передается lev - уровень по счету
function collisionUp(lev){
	for (var i = 0; i < 14; i++){
        for (var j = 0; j < 22 ; j++){
        	if (levels[lev][i][j] == 0){
        		if (cube.x+cube.dx >= j*config.sizexCell && cube.x+cube.dx <= j*config.sizexCell + config.sizexCell || cube.x+cube.r*2-cube.dx >= j*config.sizexCell && cube.x+cube.r*2-cube.dx <= j*config.sizexCell + config.sizexCell){
        			if (cube.y - cube.dy < i*config.sizeyCell + config.sizeyCell){
        				if (cube.y + cube.r*2 + cube.dy >i*config.sizeyCell + config.sizeyCell){
        						return false;
        				}	
        			}
        		}	
        	}        	
}}

return true;
}

//проверка на соприкосновение с границами поля снизу, передается lev - уровень по счету
function collisionDown(lev){
	for (var i = 0; i < 14; i++){
        for (var j = 0; j < 22 ; j++){
        	if (levels[lev][i][j] == 0){
        		if (cube.x+cube.dx >= j*config.sizexCell && cube.x+cube.dx <= j*config.sizexCell + config.sizexCell || cube.x+cube.r*2-cube.dx >= j*config.sizexCell && cube.x+cube.r*2 <= j*config.sizexCell + config.sizexCell){
        			if (cube.y - cube.dy < i*config.sizeyCell){
        				if (cube.y + cube.r*2 + cube.dy >i*config.sizeyCell){
        						return false;
        				}	
        			}
        		}	
        	}        	
}}

return true;
}


//отрисовка куба
function drawCube(lev){
	ctx.beginPath();
	ctx.rect(cube.x, cube.y, cube.r*2, cube.r*2);
	ctx.closePath();
	ctx.strokeStyle = "black";
	ctx.fillStyle = "red";
	ctx.lineWidth = 5;
	ctx.fill();
	ctx.stroke();

	if(rightPressed && collisionRight(lev)) { 
    	cube.x += cube.dx;
	}
	else if(leftPressed && collisionLeft(lev)) {/////////уровень
    	cube.x -= cube.dx;
	}
	if(upPressed && collisionUp(lev)) {
    	cube.y -= cube.dy;
	}
	else if(downPressed && collisionDown(lev)) {
    	cube.y += cube.dy;
	}
}

// game
startLevel(level);
function gameLoop() {
	if (!pause){
	incTime();
	endLevel(level);
	collisionCube(level);
	collisionCoin(level);
	clearBackground(level);/////////уровень
	drawCoins(level);
	drawBall(level);/////////уровень
	drawCube(level);/////////уровень
	}
}
gameLoop();
var interval = setInterval(gameLoop, config.step);

//keys
document.addEventListener("keydown" , keyDownHandler,false);
document.addEventListener("keyup" , keyUpHandler,false);
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
}

