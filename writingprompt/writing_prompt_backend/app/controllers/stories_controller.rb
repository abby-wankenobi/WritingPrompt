class StoriesController < ApplicationController
  skip_before_action :authenticate!, only: [:index, :show]
  before_action :set_story, only: [:show, :update, :destroy]

  # GET /stories
  # GET /stories.json
  def index
    @stories = Story.all

    data =  @stories.map do |thing|
      thing.serialized_data
    end

    render json: data
  end

  # GET /stories/1
  # GET /stories/1.json
  def show
    render json: @story.serialized_data
  end

  # POST /stories
  # POST /stories.json
  def create
    @story = Story.new(story_params)
    if @story.save
      render json: @story
    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /stories/1
  # PATCH/PUT /stories/1.json
  def update
    if @story.update(story_params)
      render :show, status: :ok, location: @story
    else
      render json: @story.errors, status: :unprocessable_entity
    end
  end

  # DELETE /stories/1
  # DELETE /stories/1.json
  def destroy
    @story.storylikes.destroy_all
    @story.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_story
      @story = Story.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def story_params
      params.require(:story).permit(:user_id, :content, :title, :prompt_id)
    end
end
