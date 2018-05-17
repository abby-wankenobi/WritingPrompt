require 'test_helper'

class StorylikesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @storylike = storylikes(:one)
  end

  test "should get index" do
    get storylikes_url, as: :json
    assert_response :success
  end

  test "should create storylike" do
    assert_difference('Storylike.count') do
      post storylikes_url, params: { storylike: { story_id: @storylike.story_id, user_id: @storylike.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show storylike" do
    get storylike_url(@storylike), as: :json
    assert_response :success
  end

  test "should update storylike" do
    patch storylike_url(@storylike), params: { storylike: { story_id: @storylike.story_id, user_id: @storylike.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy storylike" do
    assert_difference('Storylike.count', -1) do
      delete storylike_url(@storylike), as: :json
    end

    assert_response 204
  end
end
