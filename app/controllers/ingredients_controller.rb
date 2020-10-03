class IngredientsController < ApplicationController

  def index
    @ingredients = Ingredient.new
  end

end
