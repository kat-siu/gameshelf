class ChangeGameshelfMembershipsColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :gameshelf_memberships, :shelf_id, :gameshelf_id
  end
end
