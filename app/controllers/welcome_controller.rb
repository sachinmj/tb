class WelcomeController < ApplicationController
  def index
  end

  def register_business
    @business = Business.new
  end

  # POST /businesses
  # POST /businesses.json
  # def add_business
  #   @business = Business.new(business_params)
  #
  #   respond_to do |format|
  #     if @business.save
  #       format.html { redirect_to @business, notice: 'Business was successfully created.' }
  #       format.json { render :show, status: :created, location: @business }
  #       format.simple_format @business.to_yaml
  #     else
  #       format.html { render :new }
  #       format.json { render json: @business.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  def add_category
    
  end


end
