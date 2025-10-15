ALTER TABLE public.comments DROP COLUMN IF EXISTS album_db_id;

DROP INDEX IF EXISTS idx_comments_album_db_id;

