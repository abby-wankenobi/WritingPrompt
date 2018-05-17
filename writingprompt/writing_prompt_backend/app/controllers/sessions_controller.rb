class SessionsController < ApplicationController

  skip_before_action :authenticate!, only: [:create]

  def create
    byebug
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params["password"])
      render json: user_hash(@user)
    else
      render json: { error: ["Nope"]}, :status => :unprocessable_entity
    end
  end

  # def get_user
  #   if user_in_session
  #     render json: {user: user_in_session}
  #   else
  #     render json: {error: "Nope"}
  #   end
  # end

end
