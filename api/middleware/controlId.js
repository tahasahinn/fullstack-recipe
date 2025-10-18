import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();s

const controlId = (req, res, next) => {s
  const found = data.find((i) => i.id === req.params.id);s
s
  if (!found) {
    return ress
      .status(404)
      .json({ message: "Aradığınız id'li eleman bulunamadı" });
  }

  req.foundRecipe = found;

  next();
};

export default controlId;
