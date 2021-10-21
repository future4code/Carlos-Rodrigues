import { Recipe } from "../types/Recipe";
import { BaseDatabase } from "./BaseDatabase";

export class RecipeDatbase extends BaseDatabase {
  public async createRecipe(recipe: Recipe) {
    try {
      await BaseDatabase.connection("cookenu_recipes").insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        created_at: recipe.getDate(),
        author_id: recipe.getAuthorId(),
      });
    } catch (error) {
      throw new Error(error.message || error.sqlMessage);
    }
  }

  public async getRecipeById(id: string) {
    try {
        const recipe = await BaseDatabase.connection("cookenu_recipes")
          .select("*")
          .where({ id });
        return Recipe.toRecipeModel(recipe[0]);
      } catch (error) {
        throw new Error(error.message || error.sqlMessage);
      }
  }
}
