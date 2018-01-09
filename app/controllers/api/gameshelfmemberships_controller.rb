class Api::GameshelfmembershipsController < ApplicationController
  def create
    @gameshelf_membership = GameshelfMembership.new(gameshelf_membership_params)

    if @gameshelf_membership.save

    else
      render json: @gameshelf_membership.errors.full_messages, status: 422
    end
  end

  def destroy
    @gameshelf_membership = GameshelfMembership.find(params[:id])
    @gameshelf_membership.destroy!
    render json: ['Your gameshelf ownership has been removed.'], status: 202
  end

  private

  def gameshelf_membership_params
    params.require(:gameshelf_membership).permit(:game_id, :user_id)
  end
end
