import Cardnew from './card-new';

export default function Card() {
  return (
    <>
      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          Our approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto mb-8">
          <Cardnew title="Project Initiation" icon="setting.png" />
          <Cardnew title="Business Requirements Gathering" icon="setting.png" />
          <Cardnew title="Gap Analysis" icon="setting.png" />
          <Cardnew title="Solution Design" icon="setting.png" />
          <Cardnew title="Project Timelines Management" icon="setting.png" />
          <Cardnew title="Kick Start Development" icon="setting.png" />
          <Cardnew
            title="Testing, Documentation & Training"
            icon="setting.png"
          />
          <Cardnew title="Go Alive & Support" icon="setting.png" />
        </div>
      </section>
    </>
  );
}
