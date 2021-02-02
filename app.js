// $(function () {
//     console.log('ready');
// })

// let myP = $('p')
// console.log(myP);

// let myUl = $('ul').children();
// console.log(myUl);

// $('button').click(function (e) {
//     e.preventDefault();
//     console.log('clicked');
// });

// $('button').on({
//     mouseenter: function () {
//         $(this).css("background-color", "yellow")
//     },
//     mouseleave: function () {
//         $(this).css("background-color", "red")
//     },
//     click: function () {
//         console.log('clicked');
//     }
// });

// FadeIn and FadeOut on the samo P with one Button 

// let visable = true;
// let initalHeight = $('p').height();
// $('button').on('click', function() {
//     if (visable) {
//         $('p').animate({
//             height: 0
//         }, 1000, function () {
//             $('p').hide()
//         })
//         visable = false
//     } else {
//         $('p').show();

//         $('p').animate({
//             height: initalHeight,
//         },1000,
//         )
//         visable = true;
//     }
// })

// Semafor

// let lightOn = { opacity: 1 };
// let lightOff = { opacity: 0.2 };
// let duratation = 500;

// $('#trgni').on('click', function (e) {
//     e.preventDefault();
//     $('.crveno').animate(lightOn, duratation, function () {
//         $('.zolto').animate(lightOn, duratation, function () {
//             $('.crveno').animate(lightOff, duratation);
//             $('.zolto').animate(lightOff, duratation);
//             $('.zeleno').animate(lightOn, duratation);
//         })
//     })
// });

// $('#zastani').on('click', function () {
//     $('.zeleno').animate(lightOff, duratation, function () {
//         $('.zolto').animate(lightOn, duratation, function () {
//             $('.zolto').animate(lightOff, duratation, function () {
//                 $('.crveno').animate(lightOn, duratation);
//             })
//         })
//     })
// });

//jquery selectop API_DOM Manipulation 

// changing content in the html from jquery

// $('span').eq(1).text('Bratu sho sakash');
// $('li').eq(3).html('Se sho treba')



// $('li').eq(3).attr("class","ovaj");
// $('.ovaj').html('picku mater');

// $('span').eq(0).append('Odgovor 1');
// $('span').eq(1).prepend('Odgovor 2');
// $('li').eq(2).empty();
// $('li').eq(2).remove();

// const myF = () => {
//     $('p').slideUp(300)
//     .delay(800)
//     .fadeIn(400)
//     .delay(200)
//     .fadeOut('slow')
//     .delay(300)
//     .slideIn()
// };

// $('button').on('click', myF)


// Julia and Samantha are playing with strings. Julia has a string S, and Samantha has a string T which is a subsequence of string S. 
// They are trying to find out what words are missing in T.
// Help Julia and Samantha to solve the problem. List all the missing words in T, such that inserting them at the appropriate positions in T, 
// in the same order, results in the string S.
// Constraints
// 1 <= |T| <= |S| <= 106, where |X| denotes the length of string X.
// The length of each word will be less than 15.

// Function Parameter
// You are given a function missingWords that takes the strings S and T as its arguments.

// Function Return Value
// Return an array of the missing words.

// Sample Input
// I am using hackerrank to improve programming
// am hackerrank to improve
// Sample Output
// I
// using
// programming
// Explanation
// Missing words are:
// 1. I  
// 2. using  
// 3. programming  

// function missingWords(s, t) {

//     var missing = [];
//     var a = s.split(' ');
//     var b = t.split(' ');

//     for (var i = 0, j = 0; i < a.length; i++) {
//         if (a[i] !== b[j]) {
//             missing.push(a[i]);
//         } else {
//             j++;
//         }
//     }

//     return missing;
// }

// missingWords('I am using hackerrank to improve programming', 'am hackerrank to improve')


// method 2
// function missingWords(s, t) {

// 	var missing = [];
// 	var a = s. split(' ');
// 	var b = t.split(' ');

// 	a.forEach((word, i) => {
// 		if(word !== b[i- missing.length]) {
// 			missing.push(word);
// 		}
// 	});

// 	return missing;
// }

// method 3
// function missingWords(x, y) {
// 	var a=x.split(' '), s=y.split(' '), m=[];
// 	for(var i=0;i<a.length;i++)
// 		if(a[i]!==s[i-m.length])
// 			m.push(a[i]);
// 		return m;
// }

// missingWords('I am using hackerrank to improve programming', 'am hackerrank to improve')\
// console.log('322' + 324);


// function missingWords(s, t) {
//     var missing = [];
//     var a = s.split();
//     var b = t.split();

//     for (let i=0, j=0; i < a.length; i++) {
//         if(a[i] !== b[j]) {
//             missing.push(a[i]);
//         } else {
//             j++;
//         }
//     }
//     return missing;
//     console.log(missing);
// }

// // missingWords('I love chocolate and fucking you thisght ass', 'i love and you thisght');
// console.log(missingWords('I love chocolate', 'i love and you thisght'));