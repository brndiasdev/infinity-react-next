import PromptCard from "./PromptCard";

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
	return (
		<section className='w-full'>
			<h1 className='head_text text-left lg:text-center'>
				<span className='blue_gradient'>{name} Profile</span>
			</h1>
			<p className='desc text-left lg:text-center'>{desc}</p>

			<div className='prompt_layout mt-10'>
				{data.map((post) => (
					<PromptCard
						key={post._id}
						post={post}
						handleEdit={() => handleEdit && handleEdit(post)}
						handleDelete={() => handleDelete && handleDelete(post)}
					/>
				))}
			</div>
		</section>
	);
};

export default Profile;
