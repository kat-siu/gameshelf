# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  game_id    :integer          not null
#  rating     :integer          not null
#  body       :text             default(""), not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Review < ApplicationRecord
  validates :user_id, :game_id, :rating, :body, presence: true
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :user
  belongs_to :game
end
