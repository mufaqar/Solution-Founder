import Header from './coponents/header';
import Footer from './coponents/footer';
import Banner from './coponents/banner';
import Cardnew from './coponents/card-new';
import StoryBox from './coponents/story-box';

export default function Gulf_Central() {
  return (
    <>
      <Header />

      <Banner
        heading="Gulf Central Company’s"
        sub_heading="Gulf Central Company’s journey dates back to 1991 which was formerly known as MAN (Mohammed Al Nojaidi Trading Est.)"
        icon="Gulf-Central.png"
      />

      <section className="pt-14 px-7">
        <div className=" max-w-[755px] mx-auto grid gap-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-8">
            <Cardnew title="Sales and Customer Services" icon="sales.png" />
            <Cardnew title="Operations Planning" icon="sales.png" />
            <Cardnew title="Fleet Management" icon="sales.png" />
            <Cardnew title="Route Management" icon="sales.png" />
          </div>
          <h1 className="text-2xl font-normal ">
            Solutionfounder makes it easier for them to import products from
            China and Turkey
          </h1>
          <p className="text-lg font-normal text-justify text-[#535353]">
            and sell them in local market through integrated sales & purchase
            modules.
          </p>
          <img src="/images/gulf-central-img.jpg" alt="gulf-central-img.jpg" />
          <h1 className="text-2xl font-normal ">About ODOO Implementation</h1>
          <p className="text-lg font-normal text-justify text-[#535353]">
            For Khalid Stationery, Solutionfounder ERP modules include
            accounting, e-commerce, attendance, employee, payroll and leave
            management for smooth working during sales, purchase, stocks and
            employees. Solutionfounder also assist them in reporting for new
            buyers and online sales through well-developed ERP modules.
            Solutionfounder guide them for the best practice business related to
            the ERP.
          </p>
          <hr></hr>
          <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-12">
            Solution Founder Custom Apps for Khalid Stationery
          </h2>
        </div>
      </section>

      <section className="px-7">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto mb-8">
          <Cardnew title="Sales and Customer Services" icon="sales.png" />
          <Cardnew title="Operations Planning" icon="sales.png" />
          <Cardnew title="Fleet Management" icon="sales.png" />
          <Cardnew title="Route Management" icon="sales.png" />
          <Cardnew title="Driver Employee Management" icon="sales.png" />
          <Cardnew title="3pl Management" icon="sales.png" />
          <Cardnew title="Documents Management" icon="sales.png" />
          <Cardnew
            title="Terminal And Storage Area Management"
            icon="sales.png"
          />
        </div>
      </section>

      <section className="pt-8 pb-16 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 font-bold text-[#302E2E] text-center mb-8">
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
          <StoryBox
            icon="Nawara-Transportation-dp.png"
            title="Nawara Transportation"
            description="Nawara is one of leading logistics company in Saudi Arabia with head..."
          />
          <StoryBox
            icon="HamatReady.png"
            title="Hamat Readymix"
            description="Hamat Readymix is Manufacturing company who manufacture different type of Readymix based on customer demand"
          />
          <StoryBox
            icon="Quality-Education-Holdings-dp.png"
            title="Quality Education Holdings"
            description="QEC was founded in the year 2001..."
          />
          <StoryBox
            icon="Unifood-dp.png"
            title="Unifood"
            description="Unifood (National Foodstuff Manufacturing Company Limited)..."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
