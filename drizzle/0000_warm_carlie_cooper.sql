CREATE TABLE `users` (
	`user_id` text(36) PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`allow_mail_marketing` integer DEFAULT false NOT NULL,
	`anonymous` integer DEFAULT false NOT NULL,
	`type` text NOT NULL,
	`version` text NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);