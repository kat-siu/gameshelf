Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show, :create]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:index, :show]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
    resources :gameshelves, only: [:show, :create, :update, :destroy]
    resources :gameshelf_memberships, only: [:create, :destroy]
  end
end
