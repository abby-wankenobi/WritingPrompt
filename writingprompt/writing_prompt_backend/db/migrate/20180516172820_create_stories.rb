class CreateStories < ActiveRecord::Migration[5.1]
  def change
    create_table :stories do |t|
      t.integer :user_id
      t.string :content
      t.string :title
      t.integer :prompt_id

      t.timestamps
    end
  end
end
