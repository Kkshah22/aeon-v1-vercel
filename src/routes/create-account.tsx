import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/create-account")({
  component: CreateAccountPage,
});

function CreateAccountPage() {
  return (
    <main className="relative min-h-screen bg-paper px-6 py-24">
      <Link
        to="/"
        className="absolute left-6 top-6 text-3xl text-neutral-700 hover:text-black"
        aria-label="Close"
      >
        ×
      </Link>

      <div className="mx-auto max-w-md">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
          Create Account
        </p>

        <h1 className="mb-10 font-display text-5xl">Join AEON</h1>

        <form className="space-y-6">
          <div>
            <label className="mb-2 block text-sm">Full Name</label>
            <input type="text" className="w-full border border-border bg-transparent px-4 py-3 outline-none" placeholder="Your name" />
          </div>

          <div>
            <label className="mb-2 block text-sm">Email</label>
            <input type="email" className="w-full border border-border bg-transparent px-4 py-3 outline-none" placeholder="Enter your email" />
          </div>

          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input type="password" className="w-full border border-border bg-transparent px-4 py-3 outline-none" placeholder="Create a password" />
          </div>

          <div>
            <label className="mb-2 block text-sm">Confirm Password</label>
            <input type="password" className="w-full border border-border bg-transparent px-4 py-3 outline-none" placeholder="Confirm your password" />
          </div>

          <label className="flex items-start gap-3 text-sm">
            <input type="checkbox" className="mt-1" />
            <span>Receive updates on new collections, launches, and exclusive AEON releases.</span>
          </label>

          <button type="submit" className="w-full bg-black py-4 text-sm uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90">
            Create Account
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span>Already have an account? </span>
          <Link to="/account" className="underline underline-offset-4">
            Sign In
          </Link>
        </div>
      </div>
    </main>
  );
}
