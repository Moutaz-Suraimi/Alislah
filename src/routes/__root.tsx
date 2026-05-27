import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "مؤسسة الإصلاح المعماري للمقاولات | Alislah Almamary Contracting" },
      {
        name: "description",
        content:
          "مؤسسة سعودية رائدة في المقاولات العامة وتنفيذ المشاريع السكنية والتجارية والصناعية والحكومية بأعلى معايير الجودة.",
      },
      { name: "author", content: "مؤسسة الإصلاح المعماري للمقاولات" },
      { property: "og:site_name", content: "مؤسسة الإصلاح المعماري للمقاولات" },
      { property: "og:title", content: "مؤسسة الإصلاح المعماري للمقاولات" },
      {
        property: "og:description",
        content: "نبني مشاريع راسخة بمعايير عالمية في المملكة العربية السعودية.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

import { Intro } from "@/components/site/Intro";
import { Maintenance } from "@/components/site/Maintenance";

const isSiteClosed =
  import.meta.env.VITE_SITE_CLOSED === "true" ||
  (import.meta.env.VITE_SITE_CLOSED !== "false" && (
    import.meta.env.VITE_IS_VERCEL === "1" ||
    (typeof window !== "undefined" && window.location.hostname.includes("vercel.app"))
  ));

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  if (isSiteClosed) {
    return (
      <QueryClientProvider client={queryClient}>
        <Maintenance />
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Intro />
      <Outlet />
    </QueryClientProvider>
  );
}
