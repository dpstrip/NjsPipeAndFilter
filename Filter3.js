const IFilter = require('./IFilter.js');


class Filter3 extends IFilter {
    execute(IMsg){
        IMsg.data = IMsg.data.slice(0,3) + " Foo Bar " + IMsg.data.slice(3);
        console.log(IMsg.data);
    }

}
module.exports = Filter3;