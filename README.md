# Code Challenge: Authorizer

You are tasked with implementing an application which authorizes transactions for a specific account following a set of predefined rules.
Please make sure you read all the instructions below, and feel free to ask for clarifications if needed.

**IMPORTANT:** Please remove all personal information from the files of the challenge before submitting the solution. Pay special attention to the following:

- Source files like code, tests, namespaces, packaging, comments, and file names;
- Automatic comments your development environment may add to solution files;
- Code documentation such as annotations, metadata, and README.MD files;
- Version control configuration and author information.
- If you plan to use git as the version control system, execute the following in the repository root to export the solution anonymized:

```bash
git archive --format=zip --output=./authorizer.zip HEAD
```

## Packaging

Your solution should contain a README file containing:

- Discussing regarding the technical and archtectural decisions;
- Reasoning about the frameworks used (if any framework/library was used);
- Instructions on how to compile and run the project;
- Additional notes you consider important to be evaluated.

It must be possible to build and run the application under Unix or Mac operating systems. Dockerized builds are
welcome.

## Sample usage of the Authorizer

### How the program should work

Your program is going to receive json lines as input through stdin and should provide
a json line output for each of the inputs through stdout. You can imagine this as a stream of events being processed by the authorizer.

### How the program should be executed
Given a file called operations that contains several lines describing operations in json format:

```bash
$ cat operations
{"account": {"active-card": true, "available-limit": 100}}
{"transaction": {"merchant": "Burger King", "amount": 20, "time": "2019-02-13T10:00:00.000Z"}}
{"transaction": {"merchant": "Habbib's", "amount": 90, "time": "2019-02-13T11:00:00.000Z"}}
{"transaction": {"merchant": "McDonald's", "amount": 30, "time": "2019-02-13T12:00:00.000Z"}}
```