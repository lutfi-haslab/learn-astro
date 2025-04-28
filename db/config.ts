import { defineDb, defineTable, column } from 'astro:db';


export const Author = defineTable({
  columns: {
    id: column.number({ primaryKey: true, unique: true }), // Menambahkan constraint unique untuk menghindari SQLITE_CONSTRAINT_PRIMARYKEY
    name: column.text(),
  }
});

export const Comment = defineTable({
  columns: {
    authorId: column.number({ references: () => Author.columns.id }),
    body: column.text(),
  }
});

export default defineDb({
  tables: { Author, Comment },
})