#! /usr/bin/env node
let balance = 10000;
let pin = Math.floor(Math.random() * 1000 + 1000);
let card = 'card';
import inquirer from "inquirer";
let inserCard = await inquirer.prompt([
    {
        name: 'enterCard',
        type: 'input',
        message: 'Wellcome ! Please enter your Card  OR write "card" to begin'
    }
]);
if (inserCard.enterCard === card)
    console.log('your card pin is', pin);
{
    let pinAnswer = await inquirer.prompt([
        {
            name: 'pinNo',
            type: 'number',
            message: 'Please enter your 4 digits pin number'
        }
    ]);
    if (pinAnswer.pinNo === pin) {
        console.log('Access granted');
        let selectTransaction = await inquirer.prompt([
            {
                name: 'transaction',
                type: 'list',
                message: 'Please select the transaction',
                choices: ['Withdraw', 'Deposit money', 'Check Balance']
            }
        ]);
        console.log(pin);
        if (selectTransaction.transaction === 'Withdraw') {
            let selectOption = await inquirer.prompt([
                {
                    name: 'option',
                    type: 'list',
                    message: 'Please select an operation',
                    choices: ['Input Amount', 'Fast ATM']
                }
            ]);
            if (selectOption.option === 'Input Amount') {
                let inputAmount = await inquirer.prompt([
                    {
                        name: 'userAmount',
                        type: 'number',
                        message: 'Please input amount to withdraw'
                    }
                ]);
                if (inputAmount.userAmount > balance) {
                    console.log('Insufficient amount! Your current balance is', balance);
                }
                else if (balance -= inputAmount.userAmount) {
                    console.log('congratulations! your', inputAmount.userAmount, 'Deducted from your account current balance is', balance);
                }
            }
            else if (selectOption.option === 'Fast ATM') {
                let chooseAmount = await inquirer.prompt([
                    {
                        name: 'yourAmount',
                        type: 'list',
                        message: 'Please choose an amount to withdraw',
                        choices: ['10000', '5000', '3000', '2000', '1000', '500']
                    }
                ]);
                let selectedCash = chooseAmount.yourAmount;
                let currentBalance = balance - selectedCash;
                if (chooseAmount.yourAmount > balance) {
                    console.log('Insufficient amount! Your current balance is', balance);
                }
                else if (chooseAmount.yourAmount === '10000') {
                    console.log('Congratulations', selectedCash, 'deducted from your account! ramaining balance is', currentBalance);
                }
                else if (chooseAmount.yourAmount === '5000') {
                    console.log('Congratulations', selectedCash, 'deducted from your account! ramaining balance is', currentBalance);
                }
                else if (chooseAmount.yourAmount === '3000') {
                    console.log('Congratulations', selectedCash, 'deducted from your account! ramaining balance is', currentBalance);
                }
                else if (chooseAmount.yourAmount === '2000') {
                    console.log('Congratulations', selectedCash, 'deducted from your account! ramaining balance is', currentBalance);
                }
                else if (chooseAmount.yourAmount === '1000') {
                    console.log('Congratulations', selectedCash, 'deducted from your account! ramaining balance is', currentBalance);
                }
                else if (chooseAmount.yourAmount === '500') {
                    console.log('Congratulations', selectedCash, 'deducted from your account! ramaining balance is', currentBalance);
                }
            }
        }
        else if (selectTransaction.transaction === 'Deposit money') {
            let depositCash = await inquirer.prompt([
                {
                    name: 'deposit',
                    type: 'number',
                    message: 'Please enter your cash to dopsit'
                }
            ]);
            let cash = depositCash.deposit;
            let currentBalance2 = cash + balance;
            if (balance + depositCash.deposit) {
                console.log('congratulations your', cash, 'successfully deposited, your current balance is ', currentBalance2);
            }
        }
        else {
            console.log('your current balance is', balance);
        }
    }
}
