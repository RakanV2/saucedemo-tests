# SauceDemo Automated Test Suite
This project contains an automated test suite for the SauceDemo website. The test covers the **customer flow of selecting 3 random items and completing the checkout**.

---

## **Requirements**
- Node.js (v22.17.0 or higher recommended)
- npm
- Playwright

---

## **Project Setup**
1. Clone this repository:
```bash
git clone https://github.com/RakanV2/saucedemo-tests.git
```
2. Navigate to the project folder:
```bash
cd saucedemo-tests
```
3. Install dependencies:
```bash
npm install
npx playwright install
```

---

## **Running Tests**
To run the automated test:
```bash
npx playwright test --headed
```
> `--headed` opens the browser so you can visually see the test steps.

---

## **Generating HTML Report**
1. Run tests with HTML reporter:
```bash
npx playwright test --reporter=html
```
2. Open the report:
```bash
npx playwright show-report
```

---

## **Test Coverage**
The automated test covers:
1. Logging into SauceDemo
2. Selecting 3 random products
3. Adding products to the cart
4. Completing the checkout process
5. Verifying the success message

---

## **Notes**
- Only **positive scenarios** are covered as per the assignment requirement.
- No additional features or negative tests were added.
