class User < ApplicationRecord
  has_many :stories
  has_many :prompts, through: :stories
  has_many :comments, through: :stories
  has_many :stories, as: :favorites, through: :storylikes
  has_many :prompts, as: :favoriteprompts, through: :promptlikes
  validates :username, presence: true, uniqueness: true
  has_secure_password
end
