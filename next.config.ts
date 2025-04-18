import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const config = {
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
};

export default withNextIntl(config);
