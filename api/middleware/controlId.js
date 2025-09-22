import { readRecipes } from "../model/recipeModel.js";

const data = readRecipes();

const controlId = (req, res, next) => {s
  const found = data.find((i) => i.id === req.params.id);s

  if (!found) {s
    return ress
      .status(404)s
      .json({ message: "Aradığınız id'li eleman bulunamadı" });
  }

  req.foundRecipe = found;

  next();
};

export default controlId;
