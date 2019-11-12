// Test away
import React from "react";
import {render} from "@testing-library/react";

import Dashboard from "./Dashboard"



test("Show the controls and display", () => {
    const {getByTestId} = render(<Dashboard />);
   
    getByTestId("displayRendered");
    getByTestId("ctrlRendered");
});
