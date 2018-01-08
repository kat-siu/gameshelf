class CreateGameshelves < ActiveRecord::Migration[5.1]
  def change
    create_table :gameshelves do |t|
      t.integer :user_id, null: false
      t.string :title, null: false

      t.timestamps
    end

    add_index :gameshelves, :user_id
  end
end
