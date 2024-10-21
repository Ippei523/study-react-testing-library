import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoList from "@/Components/TODO/TodoList";

describe("TodoList component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders the title and list of todos", () => {
    render(<TodoList />);

    expect(screen.getByText(/My To Do List/i)).toBeInTheDocument();
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  test("renders the list of todos", () => {
    const { container } = render(<TodoList />);

    expect(container.firstChild).toMatchSnapshot();
  });

  test("adds a new todo", () => {
    render(<TodoList />);

    const input: HTMLInputElement = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "New task" } });

    const button = screen.getByRole("button", { name: /Add/i });
    fireEvent.click(button);

    // 新しいタスクがテキストとして表示されることを確認
    const todoText = screen.getByText(/new task/i);
    expect(todoText).toBeInTheDocument(); // 期待通りタスクが表示されていることを確認
  });

  test("toggles a todo", () => {
    render(<TodoList />);

    const input: HTMLInputElement = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /Add/i });

    input.value = "New task";
    button.click();

    const todo = screen.getByText(/New task/i);
    todo.click();

    expect(todo).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);

    const input: HTMLInputElement = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /Add/i });

    input.value = "New task";
    button.click();

    const todo = screen.getByText(/New task/i);
    const deleteButton = screen.getByRole("button", { name: /Delete/i });

    deleteButton.click();

    expect(todo).not.toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { container } = render(<TodoList />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
