class Prompt < ApplicationRecord
  has_many :stories
  belongs_to :genre
  belongs_to :user, optional: true
  has_many :promptlikes

  def serialized_data
    story_objects = self.stories.map do |story|
      {
        id: story.id,
        title: story.title,
        content: story.content,
        user: story.user,
        prompt_id: story.prompt_id,
        created_at: story.created_at,
      }
    end
    return {
      id: self.id,
      stories: story_objects,
      content: self.content,
      user: self.user,
      genre: self.genre,
      likes: self.promptlikes,
      genre_id: self.genre_id,
      created_at: self.created_at
    }
  end

end
