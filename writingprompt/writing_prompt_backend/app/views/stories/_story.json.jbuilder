json.extract! story, :id, :user_id, :content, :title, :prompt_id, :created_at, :updated_at
json.url story_url(story, format: :json)
