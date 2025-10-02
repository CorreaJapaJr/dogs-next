import photoGet from '@/actions/photo-get';
import Feed from '@/components/feed/feed';

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  const { data } = await photoGet({ user: params.user });
  if (!data) return null;
  return (
    <section className='container mainSection'>
      <h1 className='title'>
        {params.user}
        <Feed
          photos={data}
          user={params.user}
        />
      </h1>
    </section>
  );
}
