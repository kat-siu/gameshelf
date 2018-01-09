# == Schema Information
#
# Table name: gameshelves
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Gameshelf < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to :user
  has_many :gameshelf_memberships
  has_many :games, through: :gameshelf_memberships
end
