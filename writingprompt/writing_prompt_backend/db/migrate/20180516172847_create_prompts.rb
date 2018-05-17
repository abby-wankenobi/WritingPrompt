class CreatePrompts < ActiveRecord::Migration[5.1]
  def change
    create_table :prompts do |t|
      t.string :content
      t.integer :genre_id

      t.timestamps
    end
  end
end
