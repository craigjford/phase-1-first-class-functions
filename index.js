function receivesAFunction(someFunc) {
     return someFunc();
}

function caseTwo() {
    return function namedFunc() {
        return 50 * 2;
    }
}

function returnsANamedFunction() {
    return caseTwo();
}

const returnsAnAnonymousFunction = x => {
    return function() {
        return 'foo bar';
    }
}
    



