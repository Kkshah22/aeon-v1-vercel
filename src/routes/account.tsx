import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/account")({
component: AccountPage,
});

function AccountPage() {
return ( <main className="relative min-h-screen bg-paper px-6 py-24">
{/* Close Button */} <Link
     to="/"
     className="absolute left-6 top-6 text-3xl text-neutral-700 hover:text-black"
     aria-label="Close"
   >
× </Link>

```
  <div className="mx-auto max-w-md">
    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-neutral-500">
      Account
    </p>

    <h1 className="mb-10 font-display text-5xl">
      Welcome Back
    </h1>

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

      <div className="text-right">
        <Link
          to="/forgot-password"
          className="text-sm underline underline-offset-4"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-black py-4 text-sm uppercase tracking-[0.2em] text-white"
      >
        Sign In
      </button>
    </form>

    <div className="my-8 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      <span className="text-sm text-neutral-500">OR</span>
      <div className="h-px flex-1 bg-border" />
    </div>

    <Link
      to="/checkout"
      className="block w-full border border-black py-4 text-center text-sm uppercase tracking-[0.2em]"
    >
      Continue as Guest
    </Link>

    <div className="mt-8 text-center text-sm">
      <span>New to AEON? </span>
      <Link
        to="/create-account"
        className="underline underline-offset-4"
      >
        Create Account
      </Link>
    </div>
  </div>
</main>
```

);
}

