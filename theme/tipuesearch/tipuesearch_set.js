
/*
Tipue Search 6.1
Copyright (c) 2017 Tipue
Tipue Search is released under the MIT License
http://www.tipue.com/search
*/


/*
Stop words
Stop words list from http://www.ranks.nl/stopwords
*/

var tipuesearch_stop_words = ["オティンポ","オティンポス"];


// Word replace

var tipuesearch_replace = {'words': [
     {'word': 'tip', 'replace_with': 'tipue'},
     {'word': 'javscript', 'replace_with': 'javascript'},
     {'word': 'jqeury', 'replace_with': 'jquery'}
]};


// Weighting

var tipuesearch_weight = {'weight': [
     {'url': 'http://www.tipue.com', 'score': 20},
     {'url': 'http://www.tipue.com/search', 'score': 30},
     {'url': 'http://www.tipue.com/is', 'score': 10}
]};


// Illogical stemming

var tipuesearch_stem = {'words': [
     {'word': 'e-mail', 'stem': 'email'},
     {'word': 'javascript', 'stem': 'jquery'},
     {'word': 'javascript', 'stem': 'js'}
]};


// Related searches

var tipuesearch_related = {'searches': [
     {'search': 'tipue', 'related': 'Tipue Search'},
     {'search': 'tipue', 'before': 'Tipue Search', 'related': 'Getting Started'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'jQuery'},
     {'search': 'tipue', 'before': 'Tipue', 'related': 'Blog'}
]};


// Internal strings

var tipuesearch_string_1 = '無題';
var tipuesearch_string_2 = 'Showing results for';
var tipuesearch_string_3 = 'Search instead for';
var tipuesearch_string_4 = '1 件';
var tipuesearch_string_5 = '件';
var tipuesearch_string_6 = '戻る';
var tipuesearch_string_7 = 'もっとみる';
var tipuesearch_string_8 = '該当なし...';
var tipuesearch_string_9 = '禁じられし我が名を調べるものに災いあり...';
var tipuesearch_string_10 = '検索ワードが短すぎます';
var tipuesearch_string_11 = '１文字以上指定してください';
var tipuesearch_string_12 = 'するべき';
var tipuesearch_string_13 = '文字以上';
var tipuesearch_string_14 = '秒';
var tipuesearch_string_15 = '関連する検索';


// Internals


// Timer for showTime

var startTimer = new Date().getTime();
