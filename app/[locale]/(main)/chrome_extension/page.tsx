import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'chrome_extension' });

  return {
    title: `${t('meta_title')} | PDF.ai`,
    description: t('meta_description'),
    keywords: [
      'PDF Chrome extension',
      'browser PDF tool',
      'PDF processor extension',
      'document browser plugin',
    ],
  };
}

export default async function ChromeExtensionPage() {
  return <div>ChromeExtensionPage</div>;
}
