'use strict';

var TTT = (function() {
	var boardTemplate = '<div class="board-overlay"><div id="board" class="board"><div id="square1" class="board__square"></div><div id="square2" class="board__square"></div><div id="square3" class="board__square"></div><div id="square4" class="board__square"></div><div id="square5" class="board__square"></div><div id="square6" class="board__square"></div><div id="square7" class="board__square"></div><div id="square8" class="board__square"></div><div id="square9" class="board__square"></div></div></div>',
		board,
        squares = [],
        movesLeft = 9,
		player = "X";

	function addEvent(el, type, handler){
        if (el.attachEvent) el.attachEvent('on'+type, handler); else el.addEventListener(type, handler);
    }

    var init = function() {
    	createBoard();
    }

    function createBoard() {
    	document.body.innerHTML += boardTemplate;
    	board = document.getElementById('board');
    	addEvent(board, "click", clickHandler);

        var squaresArr = board.querySelectorAll(".board__square");
        for (var i = 0; i < squaresArr.length; i++) {
            squares.push(new Square(i+1));
        }
    }

    function clickHandler(e) {
		if (e.target !== e.currentTarget) {
	        var clickedItem = e.target.id.slice(6);
            squares[clickedItem-1].setValue(player);
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

    function checkForEnd() {
        console.log(squares);
        var lines = [];
        lines[0] = squares[0]._numVal + squares[1]._numVal + squares[2]._numVal;
        lines[1] = squares[3]._numVal + squares[4]._numVal + squares[5]._numVal;
        lines[2] = squares[6]._numVal + squares[7]._numVal + squares[8]._numVal;
        lines[3] = squares[0]._numVal + squares[3]._numVal + squares[6]._numVal;
        lines[4] = squares[1]._numVal + squares[4]._numVal + squares[7]._numVal;
        lines[5] = squares[2]._numVal + squares[5]._numVal + squares[8]._numVal;
        lines[6] = squares[0]._numVal + squares[4]._numVal + squares[8]._numVal;
        lines[7] = squares[2]._numVal + squares[4]._numVal + squares[6]._numVal;

        for (var i = 0; i < lines.length; i++) {
            if (lines[i] == 3){
                alert("X wins");
            } else if (lines[i] == -3) {
                alert("O wins");
            }
        }

        if (movesLeft == 0) {
            alert('Tie!')
        }
    }

    class Square {
        constructor(id, empty, numVal, value) {
            this._id = id;
            this._empty = true;
            this._value = '';
            this._numVal = 0;
        }

        setValue(value) {
            if(this._empty == true) {
                this._value = value;
                this._empty = false;
                if (value == "X") {
                    this._numVal = 1;
                } else {
                    this._numVal = -1;
                }
                switchPlayer();
                movesLeft --;
            } else {
                return false;
            }

            document.getElementById("square"+this._id).innerHTML = this._value;
            checkForEnd();
        }

    }

	return {
		init: init
	}

})();

TTT.init();
