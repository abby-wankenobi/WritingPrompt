class Comment < ApplicationRecord
  belongs_to :story
  belongs_to :user


  def commentinfo

    user =
    {
      story_id: self.story_id,
      content: self.content,
      id: self.id,
      title: self.title,
      created_at: self.created_at,
      updated_at: self.updated_at,
      user: self.user
    }
  end
end
