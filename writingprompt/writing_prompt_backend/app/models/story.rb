class Story < ApplicationRecord
  belongs_to :user
  belongs_to :prompt
  has_many :comments

  def genre
    self.prompt.genre
  end

end
