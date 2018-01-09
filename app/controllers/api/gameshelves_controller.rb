class Api::GameshelvesController < ApplicationController
  def index
    @gameshelves = Gameshelf.all
    render :index
  end

  def show
    @gameshelf = Gameshelf.find(params[:id])
  end

  def create
    @gameshelf = Gameshelf.new(gameshelf_params)
    @gameshelf.user_id = current_user.id

    if @gameshelf.save
      render :show
    else
      render json: @gameshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    @gameshelf = Gameshelf.find(params[:id])
    if @gameshelf.destroy!
      render :show
    else
      render json: @gameshelf.errors.full_messages, status: 422
    end
  end

  private

  def gameshelf_params
    params.require(:gameshelf).require(:title, :user_id)
  end
end
