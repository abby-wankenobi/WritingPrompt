class Promptlike < ApplicationRecord
  belongs_to :user
  belongs_to :prompt
end
