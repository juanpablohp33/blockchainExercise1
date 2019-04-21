const be = require('blockexplorer');

function getBlock(index) {
    //Add your code here
    // Start by requesting the hash
    // Then request the block and use console.log
    be.blockIndex(index);

}

(function theLoop (i) {
    setTimeout(function () {
        getBlock(i);
        i++;
        if (i < 3) theLoop(i);
    }, 3600);
  })(0);