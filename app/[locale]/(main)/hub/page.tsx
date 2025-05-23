import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'api_hub' });

  return {
    title: `${t('meta_title')} | PDF.ai`,
    description: t('meta_description'),
    keywords: [
      'PDF API',
      'document processing API',
      'PDF integration',
      'developer tools',
    ],
  };
}

export default async function ApiHubPage() {
  return <div>ApiHubPage</div>;
}
