import { AppLayout } from "@/app/components/app-layout";
import "dracula-ui/styles/dracula-ui.css";
import "./globals.css";

export const metadata = {
  title: {
    default: "",
    template: "%s | Elianderson Oliveira",
  },
  description:
    "I'm a software engineer passionate about building things that make people's lives easier.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black">
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
