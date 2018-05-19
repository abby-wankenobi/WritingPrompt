class PromptsController < ApplicationController
  skip_before_action :authenticate!, only: [:index, :show]
  before_action :set_prompt, only: [:show, :update, :destroy]

  # GET /prompts
  # GET /prompts.json
  def index
    @prompts = Prompt.all

    render json: @prompts
  end

  # GET /prompts/1
  # GET /prompts/1.json
  def show
    render json: @prompt
  end

  # POST /prompts
  # POST /prompts.json
  def create
    @prompt = Prompt.new(prompt_params)

    if @prompt.save
      render :show, status: :created, location: @prompt
    else
      render json: @prompt.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prompts/1
  # PATCH/PUT /prompts/1.json
  def update
    if @prompt.update(prompt_params)
      render :show, status: :ok, location: @prompt
    else
      render json: @prompt.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prompts/1
  # DELETE /prompts/1.json
  def destroy
    @prompt.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_prompt
      @prompt = Prompt.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def prompt_params
      params.require(:prompt).permit(:content, :genre_id)
    end
end
