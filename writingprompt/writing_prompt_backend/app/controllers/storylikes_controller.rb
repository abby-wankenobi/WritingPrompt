class StorylikesController < ApplicationController
  before_action :set_storylike, only: [:show, :update, :destroy]

  # GET /storylikes
  # GET /storylikes.json
  def index
    @storylikes = Storylike.all
  end

  # GET /storylikes/1
  # GET /storylikes/1.json
  def show
  end

  # POST /storylikes
  # POST /storylikes.json
  def create
    @storylike = Storylike.new(storylike_params)

    if @storylike.save
      render :show, status: :created, location: @storylike
    else
      render json: @storylike.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /storylikes/1
  # PATCH/PUT /storylikes/1.json
  def update
    if @storylike.update(storylike_params)
      render :show, status: :ok, location: @storylike
    else
      render json: @storylike.errors, status: :unprocessable_entity
    end
  end

  # DELETE /storylikes/1
  # DELETE /storylikes/1.json
  def destroy
    @storylike.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_storylike
      @storylike = Storylike.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def storylike_params
      params.require(:storylike).permit(:user_id, :story_id)
    end
end
