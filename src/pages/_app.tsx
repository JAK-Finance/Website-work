import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import RegisterPopup, { useRegisterPopup } from "../components/RegisterPopup";

export default function App({ Component, pageProps }: AppProps) {
  const { isPopupOpen, closePopup } = useRegisterPopup();

  return (
    <>
      <Component {...pageProps} />
      <Footer />
      <RegisterPopup isOpen={isPopupOpen} onClose={closePopup} />
    </>
  );
}
