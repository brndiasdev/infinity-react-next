import Image from "next/image";

const About = () => {
	return (
		<div className='about_container'>
			<div className='about_div'>
				<h2 className='orange_gradient desc text-center font-extrabold text-4xl'>
					Sobre Nosso Produto
				</h2>
				<h1 className='sub_text text-left'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, odio.
				</h1>
				<p className='desc text-left'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
					hic.tatem quaerat tenetur iure molestiae ex,
				</p>
				<p className='desc text-left'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
					facilis?
				</p>

				<div className='btn_container gap-20'>
					<button className='cyan_btn'>Saiba Mais</button>
					<button className='watchButton'>Assista ao Vídeo</button>
				</div>
			</div>
			<div className='about_div text-center'>
				<h2 className='orange_gradient desc text-center font-extrabold'>
					Sobre Nossa Tecnologia
				</h2>
				<h1 className='sub_text text-right'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, odio.
				</h1>
				<p className='desc text-right'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi,
					hic.tatem quaerat tenetur iure molestiae ex,
				</p>
				<p className='desc text-right'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
					facilis?
				</p>

				<div className='btn_container gap-20'>
					<button className='purple_btn'>Saiba Mais</button>
					<button className='watchButton'>Assista ao Vídeo</button>
				</div>
			</div>
		</div>
	);
};

export default About;
