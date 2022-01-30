import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
import ImagePeopleHome from "../components/ImagePeopleHome";
import GlobalStyle from "../styles/globals";
import { LinkPost, MaxContainerHome, MyPosts, TypeArticle } from "../styles/style";
import { sanityClient, urlFor } from "../sanity";
import { Post, Category } from "../typings";
import Image from "next/image";

interface Props {
	posts: [Post];
}

interface PropsCategory {
	categorys: [Category];
}
const Home = (props: any) => {
	const { posts }: Props = props;
	const { categorys }: PropsCategory = props;

	return (
		<>

			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<MaxContainerHome>
				<div className="container-text-home">
					<h1>
						O blog de <span style={{ color: "#FF3651" }}>Tech</span>{" "}
						com sua cara!
					</h1>
					<p>
						Aqui é o ambiente onde você, estudante entusiasta,
						aluno, professor, ou curioso da tecnologia pode ler
						sobre as tecnologias e metodologias mais atuais do
						mercado!
					</p>

					<Link href="#articles">Começar a ler agora</Link>
				</div>
				<ImagePeopleHome />
			</MaxContainerHome>

			{/* POSTS */}

			<MyPosts id="articles">
				<div className="container" style={{display: 'flex', justifyContent: "space-between", flexWrap: 'wrap'}}>
					{posts.map((post) => {
						let typeArticle = "";
						let typeColor = ""
						

						categorys.map((category) => {
							if (category._id == post.categories[0]._ref) {
								typeArticle = category.title;

								if(typeArticle == "Desenvolvimento"){ 
									typeColor = "#64D448"
								}else if(typeArticle == "UI e UX"){
									typeColor = "#F03AE9"
								}
							}
						});

						return (
							<Link
								href={`/posts/${post.slug.current}`}
								key={post._id}
								passHref
							>
								<LinkPost>

									{
										<Image
											width={200}
											height={200}
											src={urlFor(post.mainImage).url()!}
											alt="imagem blog"
										/>
									}
									<TypeArticle color={typeColor}>{typeArticle}</TypeArticle>
									<h2>{post.title}</h2>
									<h3>{post.description}</h3>
									<span>{new Date(post._createdAt).toLocaleString().substring(0, 10)}</span>
								</LinkPost>
							</Link>
						);
					})}
				</div>
			</MyPosts>
		</>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const query = `
	
		*[_type == "post"]{
				_id,
				title,
				_createdAt,
				author -> {
					name, image
				},
					categories,
				description,
				mainImage,
				slug
			}
	
	`;

	const queryCategories = `
	 
		*[_type == "category"]{
			_createdAt,
			_id,
			_rev,
			_type,
			_updatedAt,
			title,
	 
	}`;

	const posts = await sanityClient.fetch(query);
	const categorys = await sanityClient.fetch(queryCategories);

	return {
		props: {
			posts,
			categorys,
		},
	};
};
