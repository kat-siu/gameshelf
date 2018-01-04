class Api::GamesController < ApplicationController
  def index
    @games = Game.all
    render 'api/games/index'
  end

  def show
    @game = Game.find(params[:id])
  end

  private

  def game_params
    params.require(:game).permit(:title, :description, :cover_img_url)
  end
end
