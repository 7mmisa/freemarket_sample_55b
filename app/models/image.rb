class Image < ApplicationRecord
  mount_uploader :url, ImageUploader

  belongs_to :item, optional: true

  validates :url, presence: true
end