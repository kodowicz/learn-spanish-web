type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <main className="mx-12 overflow-y-scroll md:mx-20 lg:mx-auto lg:max-w-3xl">
      {children}
    </main>
  );
}
