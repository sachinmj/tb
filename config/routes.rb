Rails.application.routes.draw do
  get 'web/index'
  get 'web/add_business'
  get 'web/select_tags/:id', :to => "web#select_tags"
  get 'web/select_benchmarks'
  resources :businesses do
    resources :tags
  end

  get 'welcome/index'
  get 'welcome/register_business'
  # post 'welcome/add_business'
  get 'welcome/add_category/:id', to: 'welcome#add_category'
  # get ':controller => welcome/add_category/:business_id'
  # get '/:id', to: 'welcome#add_category'
  # resources :
  # resources :pages
  resources :pages do
    resources :components
    collection do
      post :add_component
    end
  end
  resources :components
  resources :songs
  resources :tags
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
