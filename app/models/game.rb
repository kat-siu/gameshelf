# == Schema Information
#
# Table name: games
#
#  id            :integer          not null, primary key
#  title         :string           not null
#  year          :integer          not null
#  description   :text             not null
#  platform      :string           not null
#  cover_img_url :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Game < ApplicationRecord
  validates :title, :year, :description, :platform, :cover_img_url, presence: true
end
