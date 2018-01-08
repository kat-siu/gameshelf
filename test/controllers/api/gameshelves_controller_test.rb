require 'test_helper'

class Api::GameshelvesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_gameshelves_index_url
    assert_response :success
  end

  test "should get show" do
    get api_gameshelves_show_url
    assert_response :success
  end

  test "should get create" do
    get api_gameshelves_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_gameshelves_destroy_url
    assert_response :success
  end

end
