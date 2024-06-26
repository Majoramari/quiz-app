import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	server: {
		open: true,
	},
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
				exam: "exam.html",
				questions: "questions.html",
			},
		},
	},
	plugins: [tsconfigPaths()],
});
