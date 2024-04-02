/// Import required modules
const IMsg = require('./IMsg.js');
const Pipe = require('./Pipe.js');
const Filter1 = require('./Filter1.js');
const Filter2 = require('./Filter2.js');
const Filter3 = require('./Filter3.js');


function pipeline1(msg) {
    let filter1 = new Filter1();  //defining the class.  Message is in the pipeline and will be sent there.
    let filter2 = new Filter2();
    let filter3 = new Filter3();

    let myPipeLine = new Pipe(msg);
    myPipeLine.register(filter1);
    myPipeLine.register(filter3);
    myPipeLine.register(filter2);

    myPipeLine.executePipeLine();
}

function pipeline2(msg) {
    let filter1 = new Filter1();  //defining the class.  Message is in the pipeline and will be sent there.
    let filter2 = new Filter2();

    let myPipeLine = new Pipe(msg);
    myPipeLine.register(filter1);
    myPipeLine.register(filter2);

    myPipeLine.executePipeLine();
}

let msg = new IMsg("This is my data.");
let msg2 = new IMsg("This is message 2.");

pipeline1(msg);
pipeline2(msg2)
