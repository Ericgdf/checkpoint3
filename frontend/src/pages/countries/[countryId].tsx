import { useGetCountryByIdQuery } from '@/graphql/generated/schema';
import { useRouter } from 'next/router';

export default function CountryDetailsPage() {
  const router = useRouter();
  const { code } = router.query;

  return (
    <div>
     <p>Oui</p>
    </div>
  );
}