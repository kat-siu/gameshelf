class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def index
    @reviews = Review.all
    render :index
  end

  def index
    @reviews = Review.includes(:user).where(game_id: params[:game_id])
    render :index
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id

    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    @review.user_id = current_user.id

    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy!
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:user_id, :game_id, :rating, :body)
  end

  def require_user_owns_post!
    return if current_user.posts.find_by(id: params[:id])
    render json: 'Forbidden', status: :forbidden
  end
end
