

// 1  create a function, pass the argument 

const name = "suresh"
const phone = "6369722581"
const greenFun = (n, p) => {
    console.log("Name = ", n);
    console.log("Phone = ", p);
}
greenFun(name, phone)


// 2 callback
const cretateFun = (callFun) => {
    const secure = { email: "raju@gmail.com", password: 'raju' }
    callFun(secure)
}

const createCallback = (secure) => {
    const { email, password } = secure
    const error = {}
    if (!email) error.email = "enter email"
    if (!password) error.password = "enter password"
    if (Object.keys(error).length > 0) {
        console.log(error.email);
        console.log(error.password);
        return;

    }
    console.log(email, password);
}

cretateFun(createCallback)

//  Closures
const closuresOuter = () => {
    let count = 0
    const closuresInner = () => {
        count++
        console.log(count);
    }
    return closuresInner

}

const closuresOutput = closuresOuter()
closuresOutput()
closuresOutput()
closuresOutput()

const currentAccount = () => {
    balance = 1000
    payAmount = 200
    return {
        account: function () {
            return balance
        }, 
        pay: function (amout) {
            balance -= amout
             return balance
        }
    }
}

const accountBalance = currentAccount()
console.log(accountBalance.account());
console.log(accountBalance.pay(payAmount));

// accountBalance()
// 5 arr
let add = []
const arrfun = () => {
    const arr = [1, 2, 3, 4, 5, 6]
    for (i = 0; i < arr.length; i++)
        add[i] = (arr[i])
    console.log(add);

}

arrfun()