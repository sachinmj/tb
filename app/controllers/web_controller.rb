class WebController < ApplicationController

  def index

  end

  def add_business
    @business = Business.new
  end

  def select_tags
    @params = params[:id]
  end

  def select_benchmarks
  end
end
