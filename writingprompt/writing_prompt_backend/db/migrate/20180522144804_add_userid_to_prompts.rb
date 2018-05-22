class AddUseridToPrompts < ActiveRecord::Migration[5.1]
  def change
    add_column :prompts, :user_id, :integer
  end
end
