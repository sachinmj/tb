class Page
  include Mongoid::Document
  include Mongoid::Attributes::Dynamic
  include Mongoid::Timestamps
  
  field :title, type: String
  field :layout, type: String
  field :has_header, type: Mongoid::Boolean
  field :has_footer, type: Mongoid::Boolean
  field :is_printable, type: Mongoid::Boolean
  field :is_full_width, type: Mongoid::Boolean

  has_many :components, dependent: :delete
  # attr_accessor :page_attributes
  # embeds_many :components
  accepts_nested_attributes_for :components, :reject_if => lambda { |a| a[:name].blank? }
end
