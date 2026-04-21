import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import Form from "./Form";

describe("Registration Form Component", () => {

  beforeEach(() => {
    vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  it("RENDERS all required fields", () => {
    render(<Form />);

    expect(screen.getAllByRole("textbox", { name: /name/i })[0]).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /email/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/date of birth/i)).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /phone number/i })).toBeInTheDocument();
    expect(screen.getByRole("textbox", { name: /address/i })).toBeInTheDocument();
    expect(screen.getAllByRole("textbox", { name: /name/i })[1]).toBeInTheDocument(); // university
    expect(screen.getByRole("button", { name: /register/i })).toBeInTheDocument();
  });

  it("SHOWS validation error for invalid phone", () => {
    render(<Form />);

    fireEvent.change(screen.getAllByRole("textbox", { name: /name/i })[0], {
      target: { value: "John" },
    });

    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/date of birth/i), {
      target: { value: "2010-01-01" },
    });

    fireEvent.change(screen.getByRole("textbox", { name: /phone number/i }), {
      target: { value: "123" },
    });

    fireEvent.change(screen.getByRole("textbox", { name: /address/i }), {
      target: { value: "Some address" },
    });

    fireEvent.change(screen.getAllByRole("textbox", { name: /name/i })[1], {
      target: { value: "ABC" },
    });

    fireEvent.click(screen.getByText(/student/i));

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(
      screen.getByText(/enter valid 10-digit phone number/i)
    ).toBeInTheDocument();
  });

  it("SUBMITS successfully with valid input", () => {
    render(<Form />);

    fireEvent.change(screen.getAllByRole("textbox", { name: /name/i })[0], {
      target: { value: "John Doe" },
    });

    fireEvent.change(screen.getByRole("textbox", { name: /email/i }), {
      target: { value: "test@test.com" },
    });

    fireEvent.change(screen.getByLabelText(/date of birth/i), {
      target: { value: "2000-01-01" },
    });

    fireEvent.change(screen.getByRole("textbox", { name: /phone number/i }), {
      target: { value: "1234567890" },
    });

    fireEvent.change(screen.getByRole("textbox", { name: /address/i }), {
      target: { value: "Some valid address" },
    });

    fireEvent.change(screen.getAllByRole("textbox", { name: /name/i })[1], {
      target: { value: "XYZ University" },
    });

    fireEvent.click(screen.getByText(/student/i));

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    expect(window.alert).toHaveBeenCalledWith("Registration Successful!");
  });

});