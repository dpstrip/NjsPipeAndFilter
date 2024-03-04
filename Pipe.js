const IFilter = require('./IFilter.js');
const IMsg = require('./IMsg.js');

// Define the aPipe abstract class
class Pipe {
    constructor(msg) {
        this.pipeLine = [];
        this.msg = msg;
    }

    register(filter) {
        this.pipeLine.push(filter);
    }

    executePipeLine() {
        try {
            // for (const filter of this.pipeLine) {
            //     filter.execute(this.msg);
            // }
            this.pipeLine.forEach(filter => filter.execute(this.msg));
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}

// Export the abstract class for use in other modules
module.exports = Pipe;