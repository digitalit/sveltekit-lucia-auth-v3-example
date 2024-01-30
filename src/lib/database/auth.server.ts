import { dev } from '$app/environment';

import { DrizzlePostgreSQLAdapter } from '@lucia-auth/adapter-drizzle';
import { Lucia } from 'lucia';

import { database } from './database.server';
import { usersSessionsTable, usersTable } from './schema';

const dbAdapter = new DrizzlePostgreSQLAdapter(database, usersSessionsTable, usersTable);

export const lucia = new Lucia(dbAdapter, {
	sessionCookie: {
		attributes: {
			secure: !dev
		}
	},

	getUserAttributes: (attributes) => {
		return {
			name: attributes.name,
			email: attributes.email
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

type DatabaseUserAttributes = {
	name: string;
	email: string;
};
