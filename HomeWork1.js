// const browserVersion = "Chrome"; // 1 & 2: Global constant

// function getBrowserVersion() {   // 3: Function
//     if (browserVersion === "Chrome") { // 4: Condition
//         var browserVersion = "Local Chrome"; // 5: Local variable (function-scoped)
//     }

//     console.log(browserVersion); // Prints the LOCAL variable
// }

// getBrowserVersion();  // 6: Call function


const browserVersion = "Chrome"; // Global const

function getBrowserVersion() {
    let browserVersion; // Declare local variable first (block-safe)

    if (window.browserVersion === "Chrome") { 
        browserVersion = "Local Chrome"; // Assign inside block
    }

    console.log(browserVersion); // Works with let
}

getBrowserVersion();
