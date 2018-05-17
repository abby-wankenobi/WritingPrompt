class PromptlikesController < ApplicationController
  before_action :set_promptlike, only: [:show, :update, :destroy]

  # GET /promptlikes
  # GET /promptlikes.json
  def index
    @promptlikes = Promptlike.all
  end

  # GET /promptlikes/1
  # GET /promptlikes/1.json
  def show
  end

  # POST /promptlikes
  # POST /promptlikes.json
  def create
    @promptlike = Promptlike.new(promptlike_params)

    if @promptlike.save
      render :show, status: :created, location: @promptlike
    else
      render json: @promptlike.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /promptlikes/1
  # PATCH/PUT /promptlikes/1.json
  def update
    if @promptlike.update(promptlike_params)
      render :show, status: :ok, location: @promptlike
    else
      render json: @promptlike.errors, status: :unprocessable_entity
    end
  end

  # DELETE /promptlikes/1
  # DELETE /promptlikes/1.json
  def destroy
    @promptlike.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_promptlike
      @promptlike = Promptlike.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def promptlike_params
      params.require(:promptlike).permit(:user_id, :prompt_id)
    end
end
