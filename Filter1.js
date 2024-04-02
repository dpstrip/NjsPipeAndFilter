const IFilter = require('./IFilter.js');


class Filter1 extends IFilter{
    execute(IMsg)
    {
        console.log(IMsg.data);
    }

}

module.exports = Filter1;