import { sql } from "drizzle-orm";  //sql is a Drizzle ORM utility, not a database driver import. It allows you to write raw SQL expressions inside your Drizzle schema.
import { integer, pgTable, timestamp, varchar, uniqueIndex, date, text } from "drizzle-orm/pg-core";

//user table schema
export const usersTable = pgTable("users", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    firstname: varchar("firstname", { length: 255 }).notNull(),
    lastname: varchar("lastname", { length: 255 }).notNull(),
    mobilenumber: varchar("mobilenumber", { length: 15 }),
    email: varchar("email", { length: 255 }),
    isblocked: integer("isblocked").default(1).notNull(), //1-nonBlock,2-block.
    lastloginTimestamp: timestamp("lastlogin_timestamp", { withTimezone: true }),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
}, (table) => ({
    mobileUnique: uniqueIndex("mobile_unique_active")
        .on(table.mobileno)
        .where(sql`${table.deletedAt} IS NULL`),

    emailUnique: uniqueIndex("email_unique_active")
        .on(table.email)
        .where(sql`${table.deletedAt} IS NULL`)
}));


//users details table schema.
export const usersDetailsTable = pgTable('users_details', {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userid: integer("userid").notNull().references(() => usersTable.id, { onDelete: "cascade", }),
    identityType: integer("identity_type").notNull(), //1-single male, 2-Straight couples, 3-gay couple, 4-lesbian couple.
    dob: date("dob").notNull(),
    profileimage: varchar("profileimage", { length: 255 }),
    street: text("street").notNull(),
    city: varchar("city", { length: 255 }).notNull(),
    state: varchar("state", { length: 255 }).notNull(),
    country: varchar("country", { length: 255 }).notNull(),
    zip: varchar("zip", { length: 10 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
});


//otp varified schema.
export const otpVerificationsTable = pgTable('otp_verifications', {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    mobilenumber: varchar("mobilenumber", { length: 15 }).notNull(),
    otpHash: varchar("otp_hash", { length: 255 }).notNull(),
    expiresAt: timestamp('expires_at', { withTimezone: true }).notNull(),
    verifiedAt: timestamp('verified_at', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
});


//social login schema.
export const socialAccountsTable = pgTable("social_accounts", {
    id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
    userid: integer("userid").notNull().references(() => usersTable.id, { onDelete: "cascade" }),
    loginProvider: integer("login_provider").notNull(),
    providerId: text("provider_id").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true }).defaultNow().notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).defaultNow().notNull(),
    deletedAt: timestamp("deleted_at", { withTimezone: true }),
}, (table) => ({
    providerUnique: uniqueIndex("provider_unique")
        .on(table.loginProvider, table.providerId).where(sql`${table.deletedAt} IS NULL`)
}));