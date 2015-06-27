window.onload = function() {

    var folded = new OriDomi('#demo1', {
        vPanels: 10,     // number of panels when folding left or right (vertically oriented)
        ripple: 2
    });

    var folding = new OriDomi('#demo2');

    folding.accordion(30, 'top');


    var foldit = new OriDomi('#demo3');

    foldit.twist();

    var folder = new OriDomi('#demo4');

    folder.ramp();

};


