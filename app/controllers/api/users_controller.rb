class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      Gameshelf.create!(title: 'Played', user_id: @user.id, permanent_shelf: true)
      Gameshelf.create!(title: 'Currently Playing', user_id: @user.id, permanent_shelf: true)
      Gameshelf.create!(title: 'Want to Play', user_id: @user.id, permanent_shelf: true)
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :username, :password)
  end
end
