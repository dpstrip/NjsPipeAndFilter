// Define the IFilter interface
class IFilter {
    // This is a filter. All process operations should be in a class
    // that implements this interface. The class must define the execute
    // method with items that this process must go ahead and implement.
 

    execute(IMsg) {
        // Placeholder method, to be implemented by the concrete filter classes
        throw new Error("Method 'execute' must be implemented");
    }
}

// Export the interface for use in other modules
module.exports = IFilter;