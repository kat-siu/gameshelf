Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :games, only: [:index, :show] do
      resources :reviews, only: [:index, :show, :create]
    end
    resources :reviews, only: [:destroy]
  end
end
