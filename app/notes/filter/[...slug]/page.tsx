// app/notes/page.tsx

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import NotesClient from "./Notes.client";
import { fetchNotes } from '@/services/noteServices'; 

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}


export default async function NotesPage({ params }: PageProps) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const currentTag = slug && slug.length > 0 ? slug[0] : "all";
  const apiTag = currentTag === "all" ? "" : currentTag;


  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", apiTag],
    queryFn: () => fetchNotes(1, apiTag),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={currentTag}/>
    </HydrationBoundary>
  );
}
