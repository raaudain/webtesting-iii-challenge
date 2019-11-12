// Test away!
import React from "react";
import {render, fireEvent, getByTestId} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Controls from "./Controls"

test("Lock and Close Gate buttons rendering?", () => {
    const {getByTestId} = render(<Controls />);
    const e = getByTestId("displayRendered");

    expect(e).toHaveTextContent(/close gate/i);
    expect(e).toHaveTextContent(/lock gate/i);
})

test("Buttons' text changes to reflect the state of the door - locked", () => {
    const lockBtnMock = jest.fn();
    const {getByText, getByTestId} = render(<Controls onClick={lockBtnMock} closed={true} locked={true} />)

    const lock = getByText(/lock gate/i)

    fireEvent.click(lock)
    
    expect(getByTestId("lock-gate")).toHaveTextContent(/unlock gate/i);
});


test("Buttons' text changes to reflect the state of the door - closed", () => {
    const closeBtnMock = jest.fn();
    const {getByText, getByTestId} = render(<Controls onClick={closeBtnMock} closed={true} locked={true} />)

    const close = getByText(/lock gate/i)

    fireEvent.click(close)
    
    expect(getByTestId("close-gate")).toHaveTextContent(/open gate/i);
});


// - provide buttons to toggle the `closed` and `locked` states.
// - buttons' text changes to reflect the state the door will be in if clicked
// - the closed toggle button is disabled if the gate is locked
// - the locked toggle button is disabled if the gate is open