import Feed from "@components/Feed";

const Blog = () => {
	return (
		<section className='flex-center w-full flex-col'>
			<h1 className='head_text text-center'>
				Descubra & Compartilhe
				<br className='max-md:hidden' />
				<span className='orange_gradient text-center'>
					Powered by - Infinity
				</span>
			</h1>
			<p className='desc text-center'>
				A Infinity Prompt é uma ferramenta de IA de código aberto para o mundo
				moderno descobrir, criar e compartilhar prompts criativos
			</p>

			<Feed />
		</section>
	);
};

export default Blog;
