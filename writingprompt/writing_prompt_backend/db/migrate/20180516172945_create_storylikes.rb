class CreateStorylikes < ActiveRecord::Migration[5.1]
  def change
    create_table :storylikes do |t|
      t.integer :user_id
      t.integer :story_id

      t.timestamps
    end
  end
end
