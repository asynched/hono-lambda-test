CREATE TABLE `users` (
	`user_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text(32) NOT NULL,
	`last_name` text(32) NOT NULL,
	`email` text(64) NOT NULL,
	`password` text(255) NOT NULL,
	`banned` integer DEFAULT false NOT NULL,
	`verified` integer DEFAULT false NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);