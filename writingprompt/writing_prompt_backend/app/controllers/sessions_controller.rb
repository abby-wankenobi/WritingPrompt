class SessionsController < ApplicationController

  def create
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params["password"])
      render json: user_hash(@user)
    else
      render json: { error: ["Nope"]}, :status => :unprocessable_entity
    end
  end

end 
