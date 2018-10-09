require 'test_helper'

class WebControllerTest < ActionDispatch::IntegrationTest
  test "should get add_business" do
    get web_add_business_url
    assert_response :success
  end

  test "should get select_tags" do
    get web_select_tags_url
    assert_response :success
  end

  test "should get select_benchmarks" do
    get web_select_benchmarks_url
    assert_response :success
  end

end
