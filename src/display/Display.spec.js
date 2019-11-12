// Test away!

import React from "react";
import {render} from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';

import Display from "./Display";


test("Defaults to `unlocked` and `open` ", () => {
    const {getByText} = render(<Display />);
    const open = getByText(/open/i);
    //getByText(/closed/i);
    //getByText(/locked/i); For some reason this test passes
    const unlocked = getByText(/unlocked/i);

    // Tests when `open` use the `red-led` class
    expect(open).toHaveClass("green-led");
    
    // Tests when `unlocked` use the `red-led` class
    expect(unlocked).toHaveClass("green-led");
});

test("Displays 'Closed' if the `closed` prop is `true` and 'Open' if otherwise", () => {
    const {getByText} = render(<Display closed={true} />);
    const closed = getByText(/closed/i);

    // Tests when `closed` use the `red-led` class
    expect(closed).toHaveClass("red-led");
});

test("Displays 'Locked' if the `locked` prop is `true` and 'Unlocked' if otherwise", () => {
    const {getByText} = render(<Display locked={true} />);
    const locked = getByText(/locked/i);

    // Tests when `locked` use the `red-led` class
    expect(locked).toHaveClass("red-led");
});

