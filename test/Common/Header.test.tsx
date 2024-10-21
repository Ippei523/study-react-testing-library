import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "@/Components/Common/Header";

describe("Header component", () => {
  test("renders the logo and navigation links", () => {
    render(<Header />);

    // ヘッダーが表示されているか確認
    expect(screen.getByText(/TODO App/i)).toBeInTheDocument();

    // ナビゲーションリンクが表示されているか確認
    expect(screen.getByRole("link", { name: /Home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /To Do/i })).toBeInTheDocument();
  });

  test("has the correct link for Home", () => {
    const { container } = render(<Header />);
    const homeLink = screen.getByRole("link", { name: /Home/i });
    expect(homeLink.closest("a")).toHaveAttribute("href", "/");
  });

  test("has the correct link for To Do", () => {
    const { container } = render(<Header />);
    const todoLink = screen.getByRole("link", { name: /To Do/i });
    expect(todoLink.closest("a")).toHaveAttribute("href", "/todo");
  });
});
