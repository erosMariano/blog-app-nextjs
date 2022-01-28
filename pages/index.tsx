import type { NextPage } from "next";
import Head from "next/head";
import GlobalStyle from "../styles/globals";

const Home: NextPage = () => {
	return (
		<>
			<GlobalStyle />
			<div>
				<Head>
					<title>Create Next App</title>
					<meta
						name="description"
						content="Generated by create next app"
					/>
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<p>Eros</p>
			</div>
		</>
	);
};

export default Home;
