class CreatePromptlikes < ActiveRecord::Migration[5.1]
  def change
    create_table :promptlikes do |t|
      t.integer :user_id
      t.integer :prompt_id

      t.timestamps
    end
  end
end
