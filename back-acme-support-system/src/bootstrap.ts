let path = "../../.env";
if (process.env.NODE_ENV === "production") {
  path = "../../.env.production";
} else if (process.env.NODE_ENV === "hml") {
  path = "../../.env.hml";
} else if (process.env.NODE_ENV === "test") {
  path = "../../.env.test";
}
const { parsed } = require("dotenv").config({ path });
for (const key in parsed) process.env[key] = parsed[key];
