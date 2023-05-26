  # Strategy Connect Website Auto Tests using Cypress


Automate the **Strategy Connect** website (https://www.strategyconnect.co).



## Setup
Cloned into a local directory:
1. Open the terminal/command prompt and go to the cloned repo
2. Install all dependancies by running the command `npm install`
Note: before running the project you need to have node.js installed.
## How to run
|ID|Description| Command |
| :---: | :--- | :--- |
|1|Run all tests in headless mode|`npm test` or `npx cypress run`|
|2|Run all tests in headed mode|`npx cypress open`|
|3|Generate allure report|`npm run allure:report` or `allure generate ./allure-results --clean`|
|4|Open report|`npm run openReport` or `allure open ./allure-report`|

  
## Tests coverage
|ID|Description| Command |
| :---: | :--- | :--- |
|1|Service Packages |1. Navigate to `https://www.strategyconnect.co/` page<br>2. Verify if Home page has been opened<br>3. Click the "KnowMore" button on "Technology Due Diligence" section on Home page<br>4. Verify if the Strategy Service page got launched<br>5. Click the "KnowMore" button on "Technology Due Diligence" section on Strategy Service<br>6Verify if the Technical Due Diligence Page has been launched.<br>
|2|Login with invalid email| 1. Navigate to `https://www.strategyconnect.co/` page<br>2. Verify if Home page has been opened<br>3.Click the Login button<br>4. Verify if the Strategy Service page got launched<br>5. Click the "KnowMore" button on "Technology Due Diligence" section on Strategy Service<br>6Verify if the Technical Due Diligence Page has been launched.<br>
