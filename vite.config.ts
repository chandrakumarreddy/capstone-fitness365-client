import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development";

  return {
    plugins: [react()],
    server: {
      port: 8000,
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: (id) => {
            //@ts-ignore
            if (id.includes("node_modules/")) {
              return id
                .toString()
                .split("node_modules/")[1]
                .split("/")[0]
                .toString();
            }
            return "app";
          },
        },
      },
    },
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./src/infrastructure/tests.setup.ts",
    },
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },
  };
});
