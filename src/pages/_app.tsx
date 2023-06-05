import type { AppProps } from "next/app";
import { AuthUserProvider } from "@/context/AuthUserProvider";
import { ToastContainer, Flip } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthUserProvider>
      <ToastContainer
        position="top-center"
        autoClose={8000}
        transition={Flip}
      />
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}
