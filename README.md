# Unexpected token error in Node.js Express app
This repository demonstrates an uncommon error in Node.js Express applications: the 'Unexpected token' error. This error typically arises from syntax errors in your JavaScript code. The example provided shows a simple Express app and a common cause of this error – a missing semicolon or bracket.

## How to reproduce the bug
1. Clone this repository.
2. Open 'bug.js' and introduce a syntax error (e.g., remove a semicolon or bracket).
3. Run the app using `node bug.js`.
4. Observe the 'Unexpected token' error in the console.

## Solution
The solution involves carefully reviewing your JavaScript code for syntax errors. The 'bugSolution.js' file shows the corrected code.

## Additional Notes
This error can sometimes be difficult to debug as the error message might not always pin point the exact location of the error.  Using a good code editor with syntax highlighting and linting can significantly reduce the occurrences of this type of error.