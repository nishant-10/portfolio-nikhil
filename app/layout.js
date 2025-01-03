import "./globals.css";
export const metadata = {
  title: "Nikhil Bhandari - Blogs&Portfolio",
  description:
    "This is a meta description. Welcome to slingacademy.com. Happy coding and have a nice day",icons: {
      icon: "/logo-2.png", // Path to your favicon or logo
      // apple: "/apple-touch-icon.png", // Optional, for Apple devices
    },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body className="video-background">
        <video autoPlay muted loop id="video-background">
          <source src="/bg.mp4" type="video/mp4" />
        </video>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        {children}
      </body>
    </html>
  );
}
