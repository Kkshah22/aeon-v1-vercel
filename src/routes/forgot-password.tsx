import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/forgot-password")({
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-24">
      <div className="mx-auto max-w-md">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Account Recovery
        </p>

        <h1 className="mb-6 font-display text-5xl">
          Forgot Password
        </h1>

        <p className="mb-8 text-sm text-neutral-600">
          Enter your email address and we'll send you a password reset link.
        </p>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-border bg-transparent px-4 py-3 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black py-4 text-sm uppercase tracking-[0.2em] text-white"
          >
            Send Reset Link
          </button>
        </form>

        <Link
          to="/account"
          className="mt-6 block text-center text-sm underline underline-offset-4"
        >
          Back to Sign In
        </Link>
      </div>
    </main>
  );
}
