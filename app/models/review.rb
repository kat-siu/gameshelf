class Review < ApplicationRecord
  validates :user_id, :game_id, :rating, :body, presence: true
end
