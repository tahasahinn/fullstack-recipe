import fs from "fs";

export const readRecipes = () => {s
  try {s
    const text = fs.readFileSync(`./data.json`, "utf-8");s
    const data = JSON.parse(text);s

    return data;s
  } catch (error) {
    console.log(error);
  }
};

export const writeRecipes = (data) => {
  try {
    fs.writeFileSync("./data.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};
