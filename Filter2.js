const IFilter = require('./IFilter.js');


class Filter2 extends IFilter {
    execute(IMsg) {
        IMsg.data = this.reverse(IMsg.data);
        console.log(IMsg.data);
    }

    reverse(value) {
        return Array.from(String(value || '')).reverse().join('');
    }

}
module.exports = Filter2;