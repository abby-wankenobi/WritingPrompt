class User < ApplicationRecord
  has_many :stories
  has_many :prompts
  has_many :comments, through: :stories
  has_many :storylikes
  has_many :promptlikes
  validates :username, presence: true, uniqueness: true
  has_secure_password

  def allusercrap
    storylikes = self.storylikes.map do |like|
      {
        id: like.story_id,
        title: like.story.title,
        content: like.story.content,
        likes: like.story.storylikes
      }
    end

    promptlikes = self.promptlikes.map do |like|
      {
        id: like.prompt_id,
        content: like.prompt.content,
        likes: like.prompt.promptlikes,
      }
    end

    story = self.stories.map do |story|
      story.serialized_data
    end

    prompt = self.prompts.map do |prompt|
      prompt.serialized_data
    end

    {
      username: self.username,
      stories: story,
      prompts: prompt,
      bio: self.bio,
      storylike: storylikes,
      promptlikes: promptlikes
    }
  end

end
