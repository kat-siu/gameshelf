class Api::GameshelvesController < ApplicationController
  def index
    @gameshelves = User.find(params[:id]).gameshelves
  end

  def show
    @gameshelf = Gameshelf.find(params[:id])
  end

  def create
    @gameshelf = Gameshelf.new(user_id: current_user.id, title: gameshelf_params['title'])

    if @gameshelf.save
      render :show
    else
      render json: @gameshelf.errors.full_messages, status: 422
    end
  end

  def update
    @gameshelf = current_user.gameshelves.find(params[:id])
    if @gameshelf.update_attributes(gameshelf_params)
      render :show
    else
      render json: @gameshelf.errors.full_messages, status: 422
    end
  end

  def destroy
    # debugger
    @gameshelf = Gameshelf.find(params[:id])
    if @gameshelf.destroy!
      render :show
    else
      render json: @gameshelf.errors.full_messages, status: 422
    end
  end

  private

  def gameshelf_params
    params.require(:gameshelf).permit(:title, :user_id)
  end
end
