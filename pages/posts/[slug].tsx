import { GetStaticProps, GetStaticPaths } from "next";
import React from "react";
import Header from "../../components/Header";
import { sanityClient, urlFor } from "../../sanity";
import { Category, Post } from "../../typings";
import Image from "next/image";
import PortableText from "react-portable-text";
import { Article, TypeArticleSlug } from "./styles";
interface Props {
	post: Post;
}

interface PropsCategory {
	categorys: [Category];
}

const MyPost = (props: any) => {
	const { categorys }: PropsCategory = props;
	const { post }: Props = props;

	let typeArticle = "";
	let typeColor = "";
	let backgroundType = "";
	categorys.map((category) => {
		if (category._id == post.categories[0]._ref) {
			typeArticle = category.title;

			if (typeArticle == "Desenvolvimento") {
				typeColor = "rgb(100, 212, 72)";
				backgroundType = "rgba(100, 212, 72,.2)";
			} else if (typeArticle == "UI e UX") {
				typeColor = "rgb(240, 58, 233)";
				backgroundType = "rgba(240, 58, 233,.2)";
			}
		}
	});
	return (
		<main>
			<Header />

			<Article>
				<div className="container">
					<div>
						<h1>{post.title}</h1>

						<div className="type-and-date">
							<TypeArticleSlug
								color={typeColor}
								background={backgroundType}
							>
								{typeArticle}
							</TypeArticleSlug>
							<p>•</p>
							<span>
								{new Date(post._createdAt)
									.toLocaleString()
									.substring(0, 10)}
							</span>
						</div>
					</div>

					<div className="container-img-principal">
						<Image
							width={780}
							height={390}
							src={urlFor(post.mainImage).url()!}
							alt="imagem blog"
						/>
					</div>

					<div className="containerPortable">
						<PortableText
							dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
							projectId={
								process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
							}
							content={post.body}
							serializers={{
								h1: (props: any) => <h1 {...props} />,
								h2: (props: any) => <h2 className="h2Article" {...props} />,
								li: ({ children }: any) => <li>{children}</li>,
								link: ({ href, children }: any) => (
									<a href={href}>{children}</a>
								),
							}}
						/>
					</div>
				</div>
			</Article>
		</main>
	);
};

export default MyPost;

export const getStaticPaths: GetStaticPaths = async () => {
	const query = `*[_type == 'post']{
          _id,
          slug {
              current
          }
        }`;

	const posts = await sanityClient.fetch(query);
	const paths = posts.map((post: Post) => ({
		params: {
			slug: post.slug.current,
		},
	}));

	return {
		paths: paths,
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { params } = context;

	const query = `*[_type == 'post' && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      slug,
      description,
      mainImage,
      categories,
      author -> {
       name,
       image
     },
     body,
     "comments": *[_type == 'comment' && post._ref == ^._id]
    }`;

	const queryCategories = `
	 
    *[_type == "category"]{
        _createdAt,
        _id,
        _rev,
        _type,
        _updatedAt,
        title,
 
}`;

	const post = await sanityClient.fetch(query, { slug: params?.slug });
	const categories = await sanityClient.fetch(queryCategories);

	if (!post) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post: post,
			categorys: categories,
		},
		//revalidate: 1, // after 60 seconds, it'll update the old cached version
	};
};
