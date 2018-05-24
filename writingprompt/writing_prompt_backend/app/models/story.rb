class Story < ApplicationRecord
  belongs_to :user
  belongs_to :prompt
  has_many :comments
  has_many :storylikes


  def serialized_data
    comment_objects = self.comments.map do |comment|
      {
        id: comment.id,
        title: comment.title,
        content: comment.content,
        user: comment.user,
        created_at: comment.created_at
      }
    end
    return {
      id: self.id,
      comments: comment_objects,
      content: self.content,
      title: self.title,
      user: self.user,
      prompt: self.prompt
    }
  end

end
