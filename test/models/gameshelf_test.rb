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

require 'test_helper'

class GameshelfTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
