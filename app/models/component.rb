class Component
  include Mongoid::Document
  field :name, type: String
  field :data, type: String
  field :view, type: String

  belongs_to :page
end
