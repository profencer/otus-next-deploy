import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("init suite", () => {
    test('has title', () => {
        const {getByText} = render(<Home />);
        expect(getByText("Next.js!")).toBeDefined();
    });
})