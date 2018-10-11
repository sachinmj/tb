class WebController < ApplicationController

  def index

  end

  def add_business
    @business = Business.new
    @tags = Tag.all
  end

  def select_tags
    # @params = params[:id]
    @tags = Tag.all
    @business = Business.find(params[:id])

    @selected_tags = Tag.new
    # @selected_tags = @business.@selected_tags
  end

  def select_benchmarks
  end
end
