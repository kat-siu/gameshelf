Rails.application.routes.draw do
  namespace :api do
    get 'gameshelves/index'
  end

  namespace :api do
    get 'gameshelves/show'
  end

  namespace :api do
    get 'gameshelves/create'
  end

  namespace :api do
    get 'gameshelves/destroy'
  end

  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:index, :show]
    resources :reviews, only: [:index, :show, :create, :update, :destroy]
  end
end
