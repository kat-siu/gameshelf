class Api::GamesController < ApplicationController
  def index
    @games = Game.all
    render :index
  end

  def show
    @game = Game.find(params[:id])
  end

  private

  def game_params
    params.require(:game).permit(:title, :year, :description, :platform, :cover_img_url)
  end
end
