interface SectionProductsProps {
  title: string;
  subTitle: string;
}

export const SectionProducts = ({ title, subTitle }: SectionProductsProps) => {
  return (
    <section>
      <h4>{title}</h4>
      <p>{subTitle}</p>
    </section>
  );
};
