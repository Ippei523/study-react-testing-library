import "@testing-library/jest-dom";
import Footer from "@/Components/Common/Footer";
import { render, screen } from "@testing-library/react";

describe("Footer component", () => {
  test("renders the footer with the correct links", () => {
    render(<Footer />);

    expect(screen.getByText(/My TODO App/i)).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /Privacy Policy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /Terms of Service/i })
    ).toBeInTheDocument();
  });

  test("has the correct link for Privacy Policy", () => {
    // プライバシーポリシーリンクのURLが正しいか確認
    const { container } = render(<Footer />);
    const privacyLink = screen.getByRole("link", { name: /Privacy Policy/i });
    expect(privacyLink.closest("a")).toHaveAttribute("href", "/privacy");
  });

  test("has the correct link for Terms of Service", () => {
    // サービス利用規約リンクのURLが正しいか確認
    const { container } = render(<Footer />);
    const termsLink = screen.getByRole("link", { name: /Terms of Service/i });
    expect(termsLink.closest("a")).toHaveAttribute("href", "/terms");
  });
});
