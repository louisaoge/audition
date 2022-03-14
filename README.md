# Startup Company Progress Tracker

This is a simple app that documents necessary steps and stages to be accomplished by startups.

### Built With

* GraphQL

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/louisaoge/audition.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run
   ```sh
   npm start
   ```
4. Server is ready at http://localhost:4000/


## Sample Query
```
query {
  stages {
    title
    steps {
      title
      isComplete
    }
  }
}
```
