'use strict';

var TTT = (function() {
	var boardTemplate = '<div id="board" class="board"><div id="square1" class="board__square"></div><div id="square2" class="board__square"></div><div id="square3" class="board__square"></div><div id="square4" class="board__square"></div><div id="square5" class="board__square"></div><div id="square6" class="board__square"></div><div id="square7" class="board__square"></div><div id="square8" class="board__square"></div><div id="square9" class="board__square"></div></div>',
		stylesheet = 'https://yunx14.github.io/TTT/style.css',
		board,
        squares = [],
		player = "X";

	function addEvent(el, type, handler){
        if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
    }

    var init = function() {
    	console.log('starting...');
    	console.log('first append the board to the screen.');
    	loadCSS(stylesheet);
    	createBoard();
    }

    function loadCSS(stylesheet) {
    	var fileref = document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", stylesheet);
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }

    function createBoard() {
    	document.body.innerHTML += boardTemplate;
    	board = document.getElementById('board');
    	addEvent(board, "click", clickHandler);

        var squaresArr = board.querySelectorAll(".board__square");
        for (var i = 0; i < squaresArr.length; i++) {
            squares.push(new Square(i+1));
        }
        console.log("Creating squares objects... ");
    }

    function clickHandler(e) {
		if (e.target !== e.currentTarget) {
	        var clickedItem = e.target.id.slice(6);
	        console.log("Getting the id of clicked square...");
            squares[clickedItem-1].setValue(player);
            console.log("setting value of square "+ clickedItem + " to " + player);
            switchPlayer();
            console.log(squares);
	    }
		e.stopPropagation();
	}

    function switchPlayer() {
        if (player == "X") {
            player = "O";
        } else {
            player = "X";
        }
    }

    class Square {
        constructor(id, empty, value) {
            this._id = id;
            this._empty = true;
            this._value = '';
        }

        setValue(value) {
            if(this._empty == true) {
                this._value = value;
            } else {
                return false;
            }

            document.getElementById("square"+this._id).innerHTML = this._value;
        }

    }

	return {
		init: init
	}

})();

TTT.init();
