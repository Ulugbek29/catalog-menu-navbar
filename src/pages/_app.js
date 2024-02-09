import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import "@/styles/globals.scss"

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
