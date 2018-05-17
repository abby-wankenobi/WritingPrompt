class Genre < ApplicationRecord
  has_many :prompts
  has_many :stories, through: :prompts
end
