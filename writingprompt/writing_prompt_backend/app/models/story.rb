class Story < ApplicationRecord
  belongs_to :user
  belongs_to :prompt

  def genre
    self.prompt.genre
  end

end
