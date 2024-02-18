/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let beforeStart = Date.now()
    let sum = 1,  counter = 0;
    while (counter <= n ) {
        sum += counter
        counter++
    }
    console.log(`Sum from 1 to ${n} is : `, sum);
    let timeLapsed = Date.now() - beforeStart
    console.log(`Time(in sec) to complete the calculations: `, timeLapsed/1000)
    return 0.01;
}


// TODO: (not a serious one) change the order of '100000' and '100' the results don't make sense
// sometimes time for 100 is more the time taken for 100000, and this doesn't happen all the time
calculateTime(100)
calculateTime(100000)
calculateTime(1000000000)

