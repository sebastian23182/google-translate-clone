import { test, expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("My app works as expected", async () => {
    const user = userEvent.setup();
    const app = render(<App/>);
    const textareaFrom = app.getByPlaceholderText("Ingresar texto");

    await user.type(textareaFrom, "Hola mundo");
    const result = await app.findByText(/Hello world/i);

    expect(result).toBeTruthy();
})

