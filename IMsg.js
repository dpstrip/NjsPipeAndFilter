// Define the IMsg interface
class IMsg {
    // This is the message object that will be passed through the filters.
    // At this point, it is free of any data items.
    // You can extend this interface to include additional properties or methods as needed.
    constructor(data) {
        this.data = data;
    }

}

// Export the interface for use in other modules
module.exports = IMsg;