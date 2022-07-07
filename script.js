// Global Scope…
    // let age = 21;
    // console.log(`My age: ${age}`);
    // const callAge = () => {
    //  console.log(`My age: ${age}`);
    // };
    // callAge();

// Function Scope…
    // let age = '21';
    // console.log(`My age: ${age}`);
    // const callAge = () => {
    // let name = 'Karen';
    // console.log(`My age is: ${age}`);
    // console.log(`My name is: ${name}`);
    // };
    // callAge();
    // console.log(`Global Scope with local variable: ${name}`);
    // //ReferenceError: Name is not defined

// Block Scope…
    // function startLet() {
    //     for (let i = 0; i < 5; i++) {
    //     console.log(i); //Output: 0,1,2,3,4
    //     }
    //     console.log(i); //Error i is not defined
    //    }
    //    function startVar() {
    //     for (var i = 0; i < 5; i++) {
    //     console.log(i); //Output: 0,1,2,3,4
    //     }
    //     console.log(i); //Output: 5
    //    }
    //    console.log('Running with let:');
    //    startLet();
    //    console.log('Running with var:');
    //    startVar();

// Block Scope…
    // function startLet() {
    //     for (let i = 0; i < 5; i++) {
    //     if (true) {
    //     let colour = 'red';
    //     console.log(i, colour); //Output: 0,1,2,3,4 with red
    //     }
    //     }
    //     console.log(i, colour); //ReferenceError: i is not defined
    // }
    // function startVar() {
    //     for (var i = 0; i < 5; i++) {
    //     if (true) {
    //     var colour = 'blue';
    //     console.log(i, colour); //Output: 0,1,2,3,4 with blue
    //     }
    //     }
    //     console.log(i, colour); //Output: 5, blue
    // }
    // console.log('Running with let:');
    // startLet();
    // console.log('Running with var:');
    // startVar();

// Scope Chain…
    // let globalVar = 'globalVar';
    // console.log(`Global Scope: ${globalVar}`);
    // const outerFun = () => {
    // let outerVar = 'outerVar';
    // console.log(`Outer function: ${globalVar}`);
    // console.log(`Outer function: ${outerVar}`);
    // console.log(`Outer function: ${innerVar}`); //ReferenceError: innerVar is not defined
    // const innerFun = () => {
    // let innerVar = 'innerVar';
    // console.log(`Inner function: ${globalVar}`);
    // console.log(`Inner function: ${outerVar}`);
    // console.log(`Inner function: ${innerVar}`);
    // };
    // innerFun();
    // };
    // outerFun();
    // innerFun(); //ReferenceError: innerFun is not defined (as it's inside outerFun())

// Higher Order Functions: Example One
    // const whichGreeting = (timeOfDay) => {
    //     console.log(`Good ${timeOfDay}`);
    //    };
    //    const greet = (time, fn) => {
    //     if (time < 1200) {
    //     fn('Morning');
    //     } else if (time >= 1200 && time < 1800) {
    //     fn('Afternoon');
    //     } else {
    //     fn('Evening');
    //     }
    //    };
    //    greet(1400, whichGreeting);

// Higher Order Functions: Example Two
    // const add = () => {
    // return 2 + 3;
    // };
    // add(); //logs 5
    // add; // logs the whole function

// Higher Order Functions: Example Three
    // const add = (num1) => {
    //     return (num2) => {
    //     return num1 + num2;
    //     };
    //    };
    //    console.log(add(2)); //returns the function in the main function

// Higher Order Functions: Example Four
    // const add = (num1) => {
    //     return (num2) => {
    //     return num1 + num2;
    //     };
    // };
    // console.log(add(2)(1)); //output: 3

// Activity 1:
    // const pntCN = () => {
    //     console.log("Hello Codenation")
    // }
    // const pntFiveTimes = () => {
    //     for (let i = 0; i < 5; i++) {
    //         pntCN();
    //     }
    // }
    // pntFiveTimes(pntCN);

    // Or:
        // const once = () => {
        //     console.log("Hello Codenation");
        // }
        
        // const multipleTimes = (once, num) => {
        //     for(i = 0; i < num; i++){
        //         once();
        //     }
        // }
        // multipleTimes(once,5);

    // Or:
        // const String = "Hello Codenation"

        // const HOF = () => {
        //     for (let Count = 0; Count < 5; Count++ ) {
        //         console.log(String)
        //     }
        // }

        // HOF()

// Activity 2:
    // const numbers = [1, 2, 3, 4, 5]
    // const numbers2 = numbers.map(multBy3)

    // function multBy3(num) {
    //     return num * 3;
    // }

    // console.log(numbers2)

    // Or:
        // const numbers = [1, 2, 3, 4, 5]
        // const multiply = () => {
        //     const byThree = num.map(x => x * 3)
        //     console.log(byThree)
        // }
        // multiply();
    
    // Or: Short Way
        // let nums = [1, 2, 3, 4, 5]

        // let res = nums.map(x => x * 3)
        
        // console.log(res)

// Asynchronous
    // console.log(1);
    // setTimeout(() => {
    //     console.log(2);
    // }, 2000);
    // setTimeout(() => {
    //     console.log(3);
    // }, 0);
    // console.log(4);

// Callback Functions
    // Promlem: Even though we call the function
    // createPost first and then log out all
    // of our posts to the console, post 4 is
    // not logged, why?
        // let myPosts = ['post1', 'post2', 'post3'];
        // const allPosts = () => {
        //     setTimeout(() => {
        //         myPosts.map((post) => console.log(post));
        // }, 1000);
        // };
        // const createPost = (post) => {
        //     setTimeout(() => {
        //         myPosts.push(`${post}`);
        // }, 2000);
        // };
        // createPost('post4');
        // allPosts();
    
    // Solution: By passing allPosts in as a
    // parameter, we can ensure we only
    // call it after createPost is completed
    // (however long it takes)
        // let myPosts = ['post1', 'post2', 'post3'];
        // const allPosts = () => {
        //     setTimeout(() => {
        //         myPosts.map((post) => console.log(post));
        //     }, 1000);
        // };
        // const createPost = (post, callback) => {
        //     setTimeout(() => {
        //         myPosts.push(post); // add the post string to the array
        //         callback() // then calls the allPosts function
        //     }, 2000);
        // };
        // createPost('post4', allPosts);
    
    // Problem: Another problem similar to the one before.
    // Even though we added a user first, when we
    // log all the users it isn’t there!
        // let users = ['Dave', 'Gary', 'Steve'];
        // const addUser = (username) => {
        // setTimeout(() => {
        //     users.push(username);
        // }, 2000);
        // };
        // const getUsers = () => {
        //     setTimeout(() => {
        //     console.log(users);
        // }, 1000);
        // };
        // addUser('Charlie');
        // getUsers();

    // Solution:
        let users = ['Dave', 'Gary', 'Steve'];
        const addUser = (username, callback) => {
        setTimeout(() => {
            users.push(username);
            callback();
        }, 2000);
        };
        const getUsers = () => {
            setTimeout(() => {
            console.log(users);
        }, 1000);
        };
        addUser('Charlie', getUsers);