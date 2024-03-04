/// Import required modules
const IMsg = require('./IMsg.js');
const Pipe = require('./Pipe.js');
const IFilter = require('./IFilter.js');


class Filter1 extends IFilter{
    execute(IMsg)
    {
        console.log(IMsg.data);
    }

}

class Filter2 extends IFilter {
    execute(IMsg) {
        IMsg.data = this.reverse(IMsg.data);
        console.log(IMsg.data);
    }

    reverse(value) {
        return Array.from(String(value || '')).reverse().join('');
    }

}

class Filter3 extends IFilter {
    execute(IMsg){
        IMsg.data = IMsg.data.slice(0,3) + " Foo Bar " + IMsg.data.slice(3);
        console.log(IMsg.data);
    }

}

let msg = new IMsg("This is my data.");
let filter1 = new Filter1();  //defining the class.  Message is in the pipeline and will be sent there.
let filter2 = new Filter2();
let filter3 = new Filter3();

let myPipeLine = new Pipe(msg);
myPipeLine.register(filter1);
myPipeLine.register(filter3);

myPipeLine.register(filter2);

myPipeLine.executePipeLine();