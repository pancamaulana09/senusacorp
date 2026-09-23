CREATE TABLE public.project_briefs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  service text NOT NULL,
  budget text NOT NULL,
  timeline text NOT NULL,
  message text NOT NULL,
  language text NOT NULL DEFAULT 'id'
);
GRANT INSERT ON public.project_briefs TO anon, authenticated;
GRANT ALL ON public.project_briefs TO service_role;
ALTER TABLE public.project_briefs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a project brief"
ON public.project_briefs
FOR INSERT
TO anon, authenticated
WITH CHECK (
  char_length(name) BETWEEN 2 AND 100
  AND char_length(email) BETWEEN 5 AND 254
  AND char_length(message) BETWEEN 10 AND 3000
  AND language IN ('id', 'en')
);