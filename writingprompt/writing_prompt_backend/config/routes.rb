Rails.application.routes.draw do
  resources :promptlikes
  resources :storylikes
  resources :genres
  resources :comments
  resources :prompts
  resources :stories
  resources :users
  post '/sessions', to: 'sessions#create'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
