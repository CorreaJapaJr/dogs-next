import ContaHeader from '@/components/conta/conta-header';

const ContaLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='container'>
      <div>
        <ContaHeader />
      </div>
      {children}
    </div>
  );
};

export default ContaLayout;
