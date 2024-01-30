import { bigint, pgTable, varchar, timestamp } from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users', {
	id: varchar('id').primaryKey().notNull(),

	name: varchar('name').notNull(),

	email: varchar('email').notNull().unique(),

	password: varchar('password').notNull(),

	createdAt: timestamp('created_at').defaultNow()
});

export const usersSessionsTable = pgTable('users_sessions', {
	id: varchar('id').primaryKey().notNull(),

	userId: varchar('user_id')
		.notNull()
		.references(() => usersTable.id),

	expiresAt: bigint('expires_at', { mode: 'number' })
});

export type UserInsertSchema = typeof usersTable.$inferInsert;
export type UsersSessionsInsertSchema = typeof usersSessionsTable.$inferInsert;
