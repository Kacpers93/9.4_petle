// KODILLA

function drawTree(h) {

    for (i = 0; i < h; i++) {
        star = '';
        for (j = 0; j < i + 1; j++) {
            star += '*';
        }
        console.log(star);
    }
}

drawTree(1);
drawTree(3);
drawTree(5);




//MOJA SKROCONA WERSJA

//function drawTree(n) {
//    star = '';
//    for (i = 0; i < n; i++) {
//        star += '*';
//        console.log(star);
//    }
//};
//
//drawTree(1);
//drawTree(3);
//drawTree(9);









////WYŚRODKOWANE DRZEWKO
////chciałem dodać tutaj stopke coś w formie:
//
//        *
//       ***
//      *****
//       |||
//
//
//ale nie wiem jak dodać kolejną linię z tym elementem tak by zawsze znajdował sie na końcu i jednocześnie po środku..

//function drawTree(h) {
//
//    for (i = 0; i < h; i++) {
//        star = '';
//        for (s = 0; s < h - i; s++) {
//            star += ' ';
//        };
//        for (j = 0; j < (2 * i + 1); j++) {
//            star += '*';
//        };
//        console.log(star);
//    };
//};
//
//drawTree(7);


















