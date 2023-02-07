type Props = {
  children: any;
  className?: string;
};

const SectionTitle = (props: Props) => (
  <div className="w-full">
    <hr className="mb-2.5 mr-5 inline-block w-10 border-2 border-black" />
    <p className={`inline-block text-4xl font-black ${props.className}`}>
      {props.children}
    </p>
  </div>
);

export default SectionTitle;
