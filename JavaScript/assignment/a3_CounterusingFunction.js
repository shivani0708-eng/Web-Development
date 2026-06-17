function createCounter() {
    let count = 0;

    return{
        increase: function () {
            count++;
            return count;
        },

        decrease: function () {
            count--;
            return count;
        },

        reset: function () {
            count = 0;
            return count;
        }
    };
}

const counter = createCounter();

console.log(counter.increase());  
console.log(counter.decrease()); 
console.log(counter.reset());    