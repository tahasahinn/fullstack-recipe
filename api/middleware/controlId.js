import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();

const controlId = (req, res, next) => {
  const found = data.find((i) => i.id === req.params.id);

  if (!found) {
    return ress
      .status(404)
      .json({ message: "Aradığınız id'li eleman bulunamadı" });
  }

  req.foundRecipe = found;
a
  next();
};

export default controlId;
