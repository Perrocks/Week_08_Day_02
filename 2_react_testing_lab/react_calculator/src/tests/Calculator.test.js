import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button0; 
  let button1; 
  let button2; 
  let button3; 
  let button4; 
  let button5; 
  let button6; 
  let button7;
  let buttonAdd;
  let buttonMinus;
  let buttonMultiply;
  let buttonDivide;
  let buttonEquals;
  let runningTotal;
  let buttonClear;

  const cl = (arg) => {
    fireEvent.click(arg)
  }

  beforeEach(() => {
    container = render(<Calculator/>)
    button0 = container.getByTestId('number0')
    button1 = container.getByTestId('number1')
    button2 = container.getByTestId('number2')
    button3 = container.getByTestId('number3')
    button4 = container.getByTestId('number4')
    button5 = container.getByTestId('number5')
    button6 = container.getByTestId('number6')
    button7 = container.getByTestId('number7')

    buttonAdd = container.getByTestId('operator-add')
    buttonMinus = container.getByTestId('operator-subtract')
    buttonMultiply = container.getByTestId('operator-multiply')
    buttonDivide = container.getByTestId('operator-divide')
    buttonEquals = container.getByTestId('operator-equals')
    runningTotal = container.getByTestId('running-total');
    buttonClear = container.getByTestId('clear')
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it("Should add 1 to 4 and get 5", () => {
    fireEvent.click(button1)
    fireEvent.click(buttonAdd)
    fireEvent.click(button4)
    fireEvent.click(buttonEquals)
    expect(runningTotal.textContent).toEqual('5')
  })
  it("Should subtract 4 from 7 and get 3", () => {
    cl(button7)
    cl(buttonMinus)
    cl(button4)
    cl(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })
  it("multiply 3 by 5 and get 15", () => {
    cl(button3)
    cl(buttonMultiply)
    cl(button5)
    cl(buttonEquals)
    expect(runningTotal.textContent).toEqual('15')
  })
  it("concatenate multiple number button clicks", () => {
    cl(button1)
    cl(button2)
    expect(runningTotal.textContent).toEqual('12')
  })
  it("divide 21 by 7 and get 3", () => {
    cl(button2)
    cl(button1)
    cl(buttonDivide)
    cl(button7)
    cl(buttonEquals)
    expect(runningTotal.textContent).toEqual('3')
  })
  it("chain multiple operations together", () => {
    cl(button2)
    cl(button0)
    cl(buttonMultiply)
    cl(button3) //60
    cl(buttonAdd)
    cl(button5) //65
    cl(buttonEquals)
    expect(runningTotal.textContent).toEqual('65')
  })
  it("clear the running total without affecting the calculation", () => {
    cl(button5)
    cl(buttonAdd)
    cl(button5) //10
    cl(buttonEquals)
    cl(buttonClear)
    cl(buttonAdd)
    cl(button5) //15
    cl(buttonEquals)
    expect(runningTotal.textContent).toEqual('15')
  })

})



// - `calculator.clearClick()` - clear the running total without affecting the calculation

