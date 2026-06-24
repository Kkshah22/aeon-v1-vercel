import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/women")({
  beforeLoad: () => {
    throw redirect({
      to: "/shop",
      search: { category: "ready-to-wear" } as never,
    });
  },
});
