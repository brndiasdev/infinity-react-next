"use client";

import workInfoData from "@data/workInfoData";
import { workHeaderData } from "@data/workInfoData";
import Image from "next/image";

const Work = () => {
	return (
		<div className='work_container mb-12'>
			<div className='work_logo'>
				<Image
					src='/assets/icons/logo-nobg.gif'
					alt='logo'
					width={75}
					height={75}
				/>
			</div>
			<div className='work_div mt-8'>
				{workHeaderData.map((data) => (
					<>
						<h2 className='orange_gradient desc text-center font-extrabold text-4xl'>
							{data.header}
						</h2>
						<h1 className='sub_text text-center'>{data.subheader}</h1>
						<p className='desc text-center'>{data.headerText}</p>
					</>
				))}
				<div className='flex justify-center flex-wrap mt-8'>
					{workInfoData.map((data) => (
						<>
							<div className='work_info'>
								<Image
									src={data.image}
									height={175}
									width={175}
									alt='work info'
									className=''
								/>

								<h2 className='work_h2 desc orange_gradient'>{data.title}</h2>
								<p className='work_p'>{data.text}</p>
							</div>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default Work;
