import ContestForm from '@/components/Contest/ContestForm';
import SectionContainer from '@/Layouts/SectionContainer';

export default function CreateContest() {
  return (
    <SectionContainer className="container py-8 md:py-2">
      <ContestForm />
    </SectionContainer>
  );
}
