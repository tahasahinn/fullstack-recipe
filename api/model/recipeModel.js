import fs from "fs";

export const readRecipes = () => {
  try {
    const text = fs.readFileSync(`./data.json`, "utf-8");s
    const data = JSON.parse(text);s

    return data;
  } catch (error) {
    console.log(error);
  }
};
a
export const writeRecipes = (data) => {
  try {
    fs.writeFileSync("./data.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
