import Cardnew from './card-new';
import setting_icon from '../../public/images/setting.png'
import businessRequirment from '../../public/images/Business-Requirements.svg'
import GapAnalysis from '../../public/images/Gap-Analysis.svg'
import SolutionDesign from '../../public/images/Solution-Design.svg'
import ProjectTimelines from '../../public/images/Project-Timelines.svg'
import KickStart from '../../public/images/Kick-Start.svg'
import TestingDocumentation from '../../public/images/Testing-Documentation.svg'
import GoAliveSupport from '../../public/images/Go-Alive-Support.svg'



export default function Card() {
  
  return (
    <>
      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          Our approach
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto mb-8">
          <Cardnew title="Project Initiation" icon={setting_icon.src} />
          <Cardnew title="Business Requirements Gathering" icon={businessRequirment} />
          <Cardnew title="Gap Analysis" icon={GapAnalysis} />
          <Cardnew title="Solution Design" icon={SolutionDesign} />
          <Cardnew title="Project Timelines Management" icon={ProjectTimelines} />
          <Cardnew title="Kick Start Development" icon={KickStart} />
          <Cardnew
            title="Testing, Documentation & Training"
            icon={TestingDocumentation}
          />
          <Cardnew title="Go Alive & Support" icon={GoAliveSupport} />
        </div>
      </section>
    </>
  );
}
