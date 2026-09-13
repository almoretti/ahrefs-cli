import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Project .env first, then the shared secrets file one level above the repo (dotenv never
// overrides a value that is already set, so the project file wins when both exist).
config({ path: join(__dirname, "..", ".env") });
config({ path: join(__dirname, "..", "..", ".env") });

export const API_KEY = process.env.AHREFS_API_KEY || process.env.AHREF_key;
if (!API_KEY) {
  console.error(
    "Error: AHREFS_API_KEY is required. Copy .env.example to .env and fill in credentials."
  );
  process.exit(1);
}

export const BASE_URL = "https://api.ahrefs.com/v3";
