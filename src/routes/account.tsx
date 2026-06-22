import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
  component: AccountPage,
});

function AccountPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-24">
      <div className="mx-auto max-w-md">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Account
        </p>

        <h1 className="mb-10 font-display text-5xl">Welcome Back</h1>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm">Email</label>
            <input
              type="email"
              className="w-full border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input
              type="password"
              className="w-full border border-border bg-transparent px-4 py-3 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black py-4 text-sm uppercase tracking-[0.2em] text-white"
          >
            Sign In
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span>New to AEON? </span>
          <Link to="/create-account" className="underline underline-offset-4">
            Create Account
          </Link>
        </div>
      </div>
    </main>
  );
}
