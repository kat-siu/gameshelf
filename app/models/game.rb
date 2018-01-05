class Game < ApplicationRecord
  validates :title, :year, :description, :platform, :cover_img_url, presence: true
end
