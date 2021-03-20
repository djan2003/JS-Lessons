//задание 1
const forCury = (fun) => {
    return (a) => {
        return (b) => {
            return a + b
        }
    }
}
let sum1 = (a, b) => {
    return a + b
}

let a;
let b;
let sum = forCury(sum1(a, b))

console.log(sum(3)(6))
// задание 2
const makeCounter = () => {
    let i = 1;
    return () => {

        return i++;
    }

}
let counter = makeCounter()
/*function superMakeCounter(a) {
a=b;
return function makeCounter(b) {
        let i = b,
            makeCounter={}
        makeCounter.increase=function () {
            return ++i
        },
            makeCounter.decrease=function () {
                return --i
            },
            makeCounter.reset=function () {
                return i=0
            },
            makeCounter.set=function (a) {
                return i=a
            }

        return makeCounter

    }
}
counter = superMakeCounter()*/ // пытался обернуть еще одной оберткой

// задание 3
function makeCounter2(a) {
    let i = a;
    makeCounter2 = {};
    makeCounter2.increase = function () {
        return ++i
    },
        makeCounter2.decrease = function () {
            return --i
        },
        makeCounter2.reset = function () {
            return i = 0
        },
        makeCounter2.set = function (a) {
            return i = a
        }

    return makeCounter2

}

counter2 = makeCounter2(5)

/*function sumTo(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result
}*/

function sumTo(n) {
if(n===0){
    return n
}
else return n+sumTo(n-1)
}
// пример из learn.javascript.ru
function pow(x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}


















