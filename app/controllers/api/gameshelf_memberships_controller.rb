class Api::GameshelfMembershipsController < ApplicationController
  def create
    @gameshelf_membership = GameshelfMembership.new(gameshelf_membership_params)

    if @gameshelf_membership.save
      render json: @gameshelf_membership.game
    else
      render json: @gameshelf_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @gameshelf_membership = GameshelfMembership.find_by(game_id: gameshelf_membership_params[:game_id], gameshelf_id: gameshelf_membership_params[:gameshelf_id])
    @gameshelf_membership.destroy!
    @gameshelf = Gameshelf.find(@gameshelf_membership.gameshelf_id)
    render 'api/gameshelves/show'
  end

  private

  def gameshelf_membership_params
    params.require(:gameshelf_membership).permit(:game_id, :gameshelf_id)
  end
end
