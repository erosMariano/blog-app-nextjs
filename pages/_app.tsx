import "../styles/globals.ts";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/globals";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress color="rgb(255, 54, 81)" />
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
