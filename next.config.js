/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		// https://nextjs.org/docs/advanced-features/experimental
		appDir: true, // https://nextjs.org/docs/advanced-features/app-dir
		serverComponentsExternalPackages: ["mongoose"], // https://nextjs.org/docs/advanced-features/server-components#server-components-external-packages
	},
	images: {
		domains: ["lh3.googleusercontent.com"], // https://nextjs.org/docs/basic-features/image-optimization#domains
	},
	webpack(config) {
		config.experiments = {
			// https://nextjs.org/docs/api-reference/next.config.js/experimental
			...config.experiments, // https://nextjs.org/docs/api-reference/next.config.js/experimental#experiments
			topLevelAwait: true, // https://nextjs.org/docs/api-reference/next.config.js/experimental-top-level-await
		};
		return config; // https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
	},
};
module.exports = {
	images: {
		domains: ["lh3.googleusercontent.com"],
	},
};
