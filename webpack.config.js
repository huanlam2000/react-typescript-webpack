const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const rules = [
	{
		test: /\.tsx?/,
		exclude: /node_modules/,
		use: { loader: "babel-loader" },
	},
	{
		test: /\.html$/,
		use: [
			{
				loader: "html-loader",
			},
		],
	},
	{
		test: /\.css$/,
		use: ["style-loader", "css-loader"],
	},
	{
		test: /\.svg$\.png$/,
		use: "file-loader",
	},
];

module.exports = {
	target: "web",
	mode: "development",
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
	},
	module: { rules },
	resolve: { extensions: [".ts", ".tsx", ".js"] },
	devServer: {
		port: 5000,
		liveReload: true,
		compress: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
		}),
	],
};
