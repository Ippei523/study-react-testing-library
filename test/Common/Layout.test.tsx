import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "@/Components/Common/Layout";

describe("Layout component", () => {
  test("renders the header, children, and footer", () => {
    render(
      <Layout>
        <div>Test child</div>
      </Layout>
    );

    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByText(/Test child/i)).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  test("renders the header, children, and footer", () => {
    const { container } = render(
      <Layout>
        <div>Test child</div>
      </Layout>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
