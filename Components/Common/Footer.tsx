export default function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-gray-800 text-white mt-10">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} My TODO App. All rights reserved.
        </p>
        <p className="text-sm">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
