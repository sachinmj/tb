class PagesController < ApplicationController
  before_action :set_page, only: [:show, :edit, :update, :destroy]

  # GET /pages
  # GET /pages.json
  def index
    @pages = Page.all
    render layout: 'application'
  end

  # GET /pages/1
  # GET /pages/1.json
  def show
    @page = Page.find(params[:id])
    # @page = Page.new
    # 5.times { @page.components.build }
    # @page.components.create([{name: 'Spook'}, {name: 'Choo-Choo'}])
    # @component = Component.new(page_id: @page.id)
    # @component = Component.new
    render layout: @page.layout || 'application'
  end

  # def add_component
  #   @page = Page.find(params[:page_id])
  #   @component = Component.new(component_params)
  #   # @page = Page.find(params[:page_id])
  #   # @page.components.build(params[:id])
  #   @component.save
  # end

  # GET /pages/new
  def new
    @page = Page.new
    # @page.components.build
    2.times { @page.components.build } if @page.components
  end

  # GET /pages/1/edit
  def edit
    # 3.times { @page.components.build }
    render layout: 'application'
  end

  # POST /pages
  # POST /pages.json
  def create
    @page = Page.new(page_params)

    # TwitterUser.create(
    #   @users_array.map do |u|
    #       { username: u.username, display_name: u.name }
    #   end
    # )
    # puts @page.components.first
    # puts format.json {page_params}
    # @page.components do |comp|
    #   @page.components.build(comp)
    # end
    # @component = Component.new(page_id: @page.id, component: {name:page_params.component.name})
    # @component = Component.new(page_id: @page.id)
    # @page = Page.find(params[:page_id])
    # @page.save
    # @page.update_attributes(@page.components)
    respond_to do |format|
      if @page.save
        format.html { redirect_to @page, notice: 'Page was successfully created.' }
        format.json { render :show, status: :created, location: @page }
      else
        format.html { render :new }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /pages/1
  # PATCH/PUT /pages/1.json
  def update
    # @page = Page.new(page_params)

    # @page.components.build
    # @page.update
    respond_to do |format|
      if @page.update(page_params)
        format.html { redirect_to @page, notice: 'Page was successfully updated.' }
        format.json { render :show, status: :ok, location: @page }
      else
        format.html { render :edit }
        format.json { render json: @page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /pages/1
  # DELETE /pages/1.json
  def destroy
    @page.destroy
    respond_to do |format|
      format.html { redirect_to pages_url, notice: 'Page was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_page
      @page = Page.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def page_params
      params.require(:page).permit(:title, :layout, :has_header, :has_footer, :is_printable, :is_full_width, components_attributes: [:id, :name, :data, :view, :_destroy])
    end
end
