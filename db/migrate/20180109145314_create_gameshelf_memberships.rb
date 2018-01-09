class CreateGameshelfMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :gameshelf_memberships do |t|
      t.integer :shelf_id, null: false
      t.integer :game_id, null: false

      t.timestamps
    end

    add_index :gameshelf_memberships, :shelf_id
    add_index :gameshelf_memberships, :game_id
  end
end
