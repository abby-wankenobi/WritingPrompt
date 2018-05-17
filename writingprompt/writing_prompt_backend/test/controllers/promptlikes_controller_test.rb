require 'test_helper'

class PromptlikesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @promptlike = promptlikes(:one)
  end

  test "should get index" do
    get promptlikes_url, as: :json
    assert_response :success
  end

  test "should create promptlike" do
    assert_difference('Promptlike.count') do
      post promptlikes_url, params: { promptlike: { prompt_id: @promptlike.prompt_id, user_id: @promptlike.user_id } }, as: :json
    end

    assert_response 201
  end

  test "should show promptlike" do
    get promptlike_url(@promptlike), as: :json
    assert_response :success
  end

  test "should update promptlike" do
    patch promptlike_url(@promptlike), params: { promptlike: { prompt_id: @promptlike.prompt_id, user_id: @promptlike.user_id } }, as: :json
    assert_response 200
  end

  test "should destroy promptlike" do
    assert_difference('Promptlike.count', -1) do
      delete promptlike_url(@promptlike), as: :json
    end

    assert_response 204
  end
end
