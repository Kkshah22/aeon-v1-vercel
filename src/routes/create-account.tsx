import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/create-account")({
  beforeLoad: () => {
    throw redirect({ to: "/account" });
  },
});
