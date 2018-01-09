# == Schema Information
#
# Table name: gameshelf_memberships
#
#  id           :integer          not null, primary key
#  gameshelf_id :integer          not null
#  game_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class GameshelfMembership < ApplicationRecord
  validates :gameshelf_id, :game_id, presence: true
  validates :game_id, uniqueness: { scope: :gameshelf_id}

  belongs_to :gameshelf
  belongs_to :game
end
