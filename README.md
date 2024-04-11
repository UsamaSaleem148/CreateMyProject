# Project Description

This Node.js project provides a script (`index.js`) that facilitates the creation of project directories and files based on a predefined structure defined in a JSON file. It streamlines the initial setup process for new projects by automatically generating the necessary folder and file structure.

## Project Setup

To run the project, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Clone or download the repository.
3. Open your terminal and navigate to the project directory.
4. Run the following commands:

```
npm link
npm exec mkproj <name of the json file>
```


## Code Explanation

This Node.js script (`index.js`) reads a JSON file containing project structure data and creates the corresponding directories and files.

- The script reads the filename from the command line arguments.
- It reads the JSON file and parses it to obtain the project structure data.
- It iterates through the data and creates folders and files accordingly.
- Each folder and file creation is logged to the console.
