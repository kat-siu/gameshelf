require 'test_helper'

class Api::GameshelfmembershipsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_gameshelfmemberships_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_gameshelfmemberships_destroy_url
    assert_response :success
  end

end
