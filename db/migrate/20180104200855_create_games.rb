class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.string :cover_img_url, null: false

      t.timestamps
    end
  end
end
