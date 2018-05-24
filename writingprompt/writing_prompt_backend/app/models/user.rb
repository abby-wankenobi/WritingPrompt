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
        story_id: like.story_id,
        title: like.story.title
      }
    end

    promptlikes = self.promptlikes.map do |like|
      {
        prompt_id: like.prompt_id,
        content: like.prompt.content
      }
    end
    {
      username: self.username,
      stories: self.stories,
      prompts: self.prompts,
      bio: self.bio,
      storylike: storylikes,
      promptlikes: promptlikes
    }
  end

end
