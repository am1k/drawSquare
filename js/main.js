function SquareDrawing(options){
    this.init(options);
}

SquareDrawing.prototype = {

    init: function(options){
        this.drawSquare(options);
    },

    drawSquare: function(options) {
        var matrix = "<table>";
        for (var i = 0; i < options; i++) {
            matrix += "<tr style='text-align: center;'>";
            for (var j = 0; j < options; j++) {
                if (j === i ||  i === options - 1 - j ) {
                    matrix += "<td width='30px' height='30px'>" + 1 + "</td>";
                } else if((j > i && j > options - 1 - i ) && !((j === i) && (j === options-1 - j))){
                    matrix += "<td width='30px' height='30px' style='background: green'>" + 3 + "</td>";
                } else if((j > i && j > i - options) && !((j === i) && (j === options-1 - j))){
                    matrix += "<td width='30px' height='30px'  style='background: blueviolet'>" + 2 + "</td>";
                } else if((j < i && j < options - 1 - i ) && !((j === i) && (j === options-1 - j))){
                    matrix += "<td width='30px' height='30px' style='background: indianred'>" + 5 + "</td>";
                } else if((j < i && j < i + options - 1) && !((j === i) && (j === options-1 - j))){
                    matrix += "<td width='30px' height='30px' style='background: yellowgreen'>" + 4 + "</td>";
                }
            }
        }
        matrix += "</table>";
        document.write(matrix);
    }
};

var drawing = new SquareDrawing(9);







//function SquareDrawing(options){
//    this.init(options);
//}
//SquareDrawing.prototype = {
//
//    init: function(options){
//        this.drawSquare(options);
//    },
//
//    drawSquare: function(options) {
//        var array = options * options;
//        var row = 0;
//        for (var i = 0; i < array; i++) {
//            var add = document.querySelector('#square');
//            var createDiv = document.createElement('div');
//            createDiv.className = 'inline';
//            add.appendChild(createDiv);
//            if (i % options === 0) {
//                row++;
//                createDiv.className = 'inline block'
//            }
//            if ((i + row) % options === 0 || (i - row + 1) % options === 0) {
//                createDiv.style.background = 'blue'
//            }
//            console.log(i, row );
//            if( !((i + row) % options === 0 || (i - row + 1) % options === 0) && ((i > row) && (i - row + 1))) {
//                //console.log(11);
//                //createDiv.style.background = 'green'
//            }
//        }
//    }
//};
//
//var drawing = new SquareDrawing(5);