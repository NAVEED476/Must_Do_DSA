class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Push element x to the back of queue.
    push(x) {
        this.stack1.push(x);
    }

    // Removes the element from the front of queue and returns that element.
    pop() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

// Sample input
const queries = [1, 2, 1, 3, 2, 1, 4, 2];
const queue = new QueueUsingStacks();
const result = [];

// Processing queries
for (const query of queries) {
    if (query === 1) {
        // Push operation
        const element = /* Read input for x */;
        queue.push(element);
    } else if (query === 2) {
        // Pop operation
        const popped = queue.pop();
        result.push(popped);
    }
}

// Output result
console.log(result.join(' ')); // Output the popped elements separated by space
