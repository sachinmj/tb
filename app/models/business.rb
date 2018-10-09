class Business
  include Mongoid::Document
  include Mongoid::Timestamps
  # include Mongoid::Versioning
  # include Mongoid::Paranoia
  field :name, type: String
  field :category, type: String
  field :description, type: String
  field :entry_url, type: String
  field :twitter_id, type: String
  field :facebook_url, type: String
  # field :facebook_page, type: String

  has_many :tags, autosave: true
end
