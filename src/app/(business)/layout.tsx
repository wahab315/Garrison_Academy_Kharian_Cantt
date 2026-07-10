import Header from "@/features/header";
import Footer from "@/features/footer";
import { ToastProvider } from "@/features/toast";

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </ToastProvider>
  );
}
