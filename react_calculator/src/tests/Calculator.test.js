import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add nums', () => {
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const add = container.getByTestId('operator-add')
    fireEvent.click(add);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(equal)
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract nums', () => {
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const subtract = container.getByTestId('operator-subtract');
    fireEvent.click(subtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should multiply nums', () => {
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply);
    const button5 = container.getByTestId('number5');
    fireEvent.click(button5);
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('15');
  });

  it('should divide nums', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divide = container.getByTestId('operator-divide');
    fireEvent.click(divide);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('3');
  });

  it('should concatenate multiple number button clicks', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('48');
  });

  it('should chain multiple operations together', () => {
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const multiply = container.getByTestId('operator-multiply');
    fireEvent.click(multiply);
    const button8 = container.getByTestId('number8');
    fireEvent.click(button8);
    const subtract = container.getByTestId('operator-subtract');
    fireEvent.click(subtract);
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('12');
  });

  it('should clear the running total without affecting the calculation', () => {
    const button4 = container.getByTestId('number4');
    fireEvent.click(button4);
    const divide = container.getByTestId('operator-divide');
    fireEvent.click(divide);
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const clear = container.getByTestId('clear');
    fireEvent.click(clear);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const add = container.getByTestId('operator-add')
    fireEvent.click(add);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const equal = container.getByTestId('operator-equals');
    fireEvent.click(equal);
    const runningTotal = container.getByTestId('running-total');
    expect(runningTotal.textContent).toEqual('4');
  });

})

