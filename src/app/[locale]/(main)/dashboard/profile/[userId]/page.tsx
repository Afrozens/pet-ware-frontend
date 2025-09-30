import ContainerAccount from '@/components/profile/ContainerAccount';

interface Props {
  params: { profileId: string };
}

export const dynamic = 'auto';
export const dynamicParams = true;

const ProfilePage = async ({ params: { profileId } }: Props) => {
  return <ContainerAccount profileId={profileId} />;
};

export default ProfilePage;
